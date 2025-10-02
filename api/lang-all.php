<?php
header('Content-Type: application/json');

$data = [
	"success"    => true,
	"data"       => [
		"lang" => [
			[
				"lang" => "en",
				"name" => "English"
			],
			[
				"lang" => "uk",
				"name" => "Українська"
			],
			[
				"lang" => "ru",
				"name" => "Русский"
			],
			[
				"lang" => "es",
				"name" => "Español"
			],
			[
				"lang" => "pl",
				"name" => "Polski"
			]
		]
	],
	"cache"      => 10800,
	"latency_ms" => 15,
	"requestId"  => "1742729759938-OG6MwzA"
];

echo json_encode($data);
?>
