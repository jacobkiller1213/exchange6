<?php 
require 'tools.php';
header('Content-Type: application/json');
$data = file_get_contents('php://input');
$data = json_decode($data, true);

$order_info = get_order($data['orderUID']);
$status = $data['status'];

change_status($order_info['id'], "processing");

echo json_encode(
    [
        "success"    => true,
        "data"       => [
            "ok"        => 1,
            "oldStatus" => "new",
            "newStatus" => "waitPayment"
        ],
        "latency_ms" => 31,
        "requestId"  => "1742813960322-VgljMoG"
    ]
);
?>