<?php
header('Content-Type: application/json');

$data = [
	"success"    => true,
	"data"       => [
		"rates" => []
	],
	"cache"      => 5,
	"latency_ms" => 1,
	"requestId"  => "1742729759920-Y94MvIJ"
];

echo json_encode($data);
