<?php
require_once __DIR__ . '/db.php';

$vehiclesData = [
    [
        'name' => 'Mercedes-Benz S-Class',
        'category' => 'First Class',
        'rating' => 5.0,
        'passengers' => 3,
        'hand_carries' => 2,
        'bags' => 2,
        'price_per_trip' => 65.00,
        'status' => 'available',
        'description' => 'Top-tier luxury chauffeur vehicle offering maximum comfort, privacy, and smooth long-distance travel.',
        'image_file' => 'MERCEDES_S_CLASS-1786435758-f0355d40391e.png',
    ],
    [
        'name' => 'Mercedes-Benz E-Class',
        'category' => 'Executive',
        'rating' => 5.0,
        'passengers' => 4,
        'hand_carries' => 2,
        'bags' => 2,
        'price_per_trip' => 50.00,
        'status' => 'available',
        'description' => 'Executive class saloon ideal for business meetings, corporate travel, and airport transfers.',
        'image_file' => 'MERCEDES_E_CLASS-1786436212-7255a91bd5ed.png',
    ],
    [
        'name' => 'BMW 7 Series',
        'category' => 'First Class',
        'rating' => 4.9,
        'passengers' => 3,
        'hand_carries' => 2,
        'bags' => 2,
        'price_per_trip' => 65.00,
        'status' => 'available',
        'description' => 'Prestige luxury sedan combining cutting-edge technology, spacious legroom, and refined elegance.',
        'image_file' => 'BMW_7_SERIES-1786437466-a7ea5e55dca9.png',
    ],
    [
        'name' => 'BMW 5 Series',
        'category' => 'Executive',
        'rating' => 4.8,
        'passengers' => 4,
        'hand_carries' => 2,
        'bags' => 2,
        'price_per_trip' => 50.00,
        'status' => 'available',
        'description' => 'Dynamic executive saloon offering smooth handling, premium leather interiors, and supreme comfort.',
        'image_file' => 'BMW_5_SERIES-1786437490-f2b89ccd094d.png',
    ],
    [
        'name' => 'Mercedes-Benz Vito / MPV',
        'category' => 'MPV / Minivan',
        'rating' => 4.9,
        'passengers' => 8,
        'hand_carries' => 6,
        'bags' => 6,
        'price_per_trip' => 75.00,
        'status' => 'available',
        'description' => 'Spacious luxury multi-purpose vehicle designed for groups, family holidays, and heavy luggage.',
        'image_file' => 'M-Vito__1_-1786374136-b6a3179b2152.jfif',
    ],
    [
        'name' => 'Toyota Prius Hybrid',
        'category' => 'Eco Saloon',
        'rating' => 4.7,
        'passengers' => 4,
        'hand_carries' => 2,
        'bags' => 2,
        'price_per_trip' => 35.00,
        'status' => 'available',
        'description' => 'Reliable and eco-friendly hybrid saloon perfect for local trips and comfortable city journeys.',
        'image_file' => 'toppng.com-white-toyota-prius-hybrid-sedan-800x510-1786437605-463656f6bac2.png',
    ],
    [
        'name' => 'Standard Saloon',
        'category' => 'Saloon',
        'rating' => 4.8,
        'passengers' => 4,
        'hand_carries' => 2,
        'bags' => 2,
        'price_per_trip' => 30.00,
        'status' => 'available',
        'description' => 'Cost-effective, dependable everyday taxi for seamless town and county travel.',
        'image_file' => 'white-city-car-isolated-on-transparent-background-3d-rendering-illustration-free-png-1786437388-bea1ea8c5f61.webp',
    ],
];

foreach ($vehiclesData as $v) {
    // Check if vehicle already exists
    $check = $mysqli->prepare('SELECT id FROM fleet_vehicles WHERE name = ? LIMIT 1');
    $check->bind_param('s', $v['name']);
    $check->execute();
    $res = $check->get_result();
    $existing = $res->fetch_assoc();
    $check->close();

    $vehicleId = null;
    if ($existing) {
        $vehicleId = $existing['id'];
        $update = $mysqli->prepare('UPDATE fleet_vehicles SET category=?, rating=?, passengers=?, hand_carries=?, bags=?, price_per_trip=?, status=?, description=?, deleted_at=NULL WHERE id=?');
        $update->bind_param('sdiiiissi', $v['category'], $v['rating'], $v['passengers'], $v['hand_carries'], $v['bags'], $v['price_per_trip'], $v['status'], $v['description'], $vehicleId);
        $update->execute();
        $update->close();
    } else {
        $insert = $mysqli->prepare('INSERT INTO fleet_vehicles (name, category, rating, passengers, hand_carries, bags, price_per_trip, status, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)');
        $insert->bind_param('ssdiiiiss', $v['name'], $v['category'], $v['rating'], $v['passengers'], $v['hand_carries'], $v['bags'], $v['price_per_trip'], $v['status'], $v['description']);
        $insert->execute();
        $vehicleId = $mysqli->insert_id;
        $insert->close();
    }

    if ($vehicleId && !empty($v['image_file'])) {
        $filePath = '/uploads/fleet-images/' . $v['image_file'];
        $fileName = $v['image_file'];

        // Check if image already exists for this vehicle
        $imgCheck = $mysqli->prepare('SELECT id FROM fleet_vehicle_images WHERE vehicle_id = ? LIMIT 1');
        $imgCheck->bind_param('i', $vehicleId);
        $imgCheck->execute();
        $imgRes = $imgCheck->get_result();
        $existingImg = $imgRes->fetch_assoc();
        $imgCheck->close();

        $imageId = null;
        if ($existingImg) {
            $imageId = $existingImg['id'];
            $imgUpd = $mysqli->prepare('UPDATE fleet_vehicle_images SET file_name = ?, file_path = ?, is_primary = 1 WHERE id = ?');
            $imgUpd->bind_param('ssi', $fileName, $filePath, $imageId);
            $imgUpd->execute();
            $imgUpd->close();
        } else {
            $imgIns = $mysqli->prepare('INSERT INTO fleet_vehicle_images (vehicle_id, file_name, file_path, is_primary, sort_order) VALUES (?, ?, ?, 1, 0)');
            $imgIns->bind_param('iss', $vehicleId, $fileName, $filePath);
            $imgIns->execute();
            $imageId = $mysqli->insert_id;
            $imgIns->close();
        }

        if ($imageId) {
            $usage = $mysqli->prepare("INSERT IGNORE INTO fleet_image_usages (image_id, location, reference_id) VALUES (?, 'vehicle', ?)");
            $usage->bind_param('ii', $imageId, $vehicleId);
            $usage->execute();
            $usage->close();
        }
    }
}

echo json_encode(['success' => true, 'message' => 'Fleet seeded successfully', 'count' => count($vehiclesData)]);
