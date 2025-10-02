<?php 
header('Content-Type: application/json');

$data = [
	"success"    => true,
	"data"       => [
		"token" => "public"
	],
	"latency_ms" => 0,
	"requestId"  => "1742806635036-OqmplMD"
];

echo json_encode($data);

?>