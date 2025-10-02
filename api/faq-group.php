<?php
header('Content-Type: application/json');

$data = [
	"success"    => true,
	"data"       => [
		"faqGroups" => [
			[
				"groupName" => "Общие вопросы",
				"lang"      => "es",
				"count"     => 8
			],
			[
				"groupName" => "Общие вопросы",
				"lang"      => "pl",
				"count"     => 8
			],
			[
				"groupName" => "Общие вопросы",
				"lang"      => "uk",
				"count"     => 8
			],
			[
				"groupName" => "General issues",
				"lang"      => "en",
				"count"     => 7
			],
			[
				"groupName" => "Общие вопросы",
				"lang"      => "en",
				"count"     => 7
			],
			[
				"groupName" => "Общие вопросы",
				"lang"      => "ru",
				"count"     => 13
			]
		]
	],
	"cache"      => 30,
	"latency_ms" => 52,
	"requestId"  => "1742729759931-R8hp0ol"
];

echo json_encode($data);
?>
