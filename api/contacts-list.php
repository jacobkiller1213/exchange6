<?php
header('Content-Type: application/json');

$data = [
	"success"    => true,
	"data"       => [
		"contacts"   => [
			[
				"_id"          => "66be4d2c52f0bb5b9c12c9a0",
				"name"         => "Telegram",
				"value"        => "Поддержка Telegram",
				"link"         => "https://t.me/adxfinance_support",
				"image"        => [
					"_id"          => "66be4d2c52f0bb5b9c12c988",
					"files"        => [
						[
							"type" => "original",
							"url"  => "/img/contacts/original/a4c33d5b3511fae3e4d921a301244d21.svg",
							"_id"  => "66be4d2c52f0bb5b9c12c989"
						],
						[
							"type" => "big",
							"url"  => "/img/contacts/big/a4c33d5b3511fae3e4d921a301244d21.svg",
							"_id"  => "66be4d2c52f0bb5b9c12c98a"
						],
						[
							"type" => "medium",
							"url"  => "/img/contacts/medium/a4c33d5b3511fae3e4d921a301244d21.svg",
							"_id"  => "66be4d2c52f0bb5b9c12c98b"
						],
						[
							"type" => "small",
							"url"  => "/img/contacts/small/a4c33d5b3511fae3e4d921a301244d21.svg",
							"_id"  => "66be4d2c52f0bb5b9c12c98c"
						]
					],
					"active"       => true,
					"status"       => "success",
					"public"       => false,
					"error"        => "no",
					"author"       => null,
					"type_storage" => "local",
					"type_file"    => "contacts",
					"createdAt"    => "2024-08-15T18:47:08.815Z",
					"updatedAt"    => "2024-08-15T18:47:08.815Z",
					"__v"          => 0
				],
				"size"         => 6,
				"lang"         => "all",
				"positionSort" => 1,
				"createdAt"    => "2024-08-15T18:47:08.916Z",
				"updatedAt"    => "2024-09-22T14:07:34.985Z"
			],
			[
				"_id"          => "66d33693eed5d76582791769",
				"name"         => "График ручных и полуавтоматических обменов",
				"value"        => "10:00-22:00",
				"link"         => "https://t.me/adxfinance_support",
				"image"        => [
					"_id"          => "66d33690eed5d76582791763",
					"files"        => [
						[
							"type" => "original",
							"url"  => "/img/contacts/original/6f92334429469d07e84bd52ffce94b41.png",
							"_id"  => "66d33690eed5d76582791764"
						],
						[
							"type" => "big",
							"url"  => "/img/contacts/big/6f92334429469d07e84bd52ffce94b41.png",
							"_id"  => "66d33690eed5d76582791765"
						],
						[
							"type" => "medium",
							"url"  => "/img/contacts/medium/6f92334429469d07e84bd52ffce94b41.jpg",
							"_id"  => "66d33690eed5d76582791766"
						],
						[
							"type" => "small",
							"url"  => "/img/contacts/small/6f92334429469d07e84bd52ffce94b41.png",
							"_id"  => "66d33690eed5d76582791767"
						]
					],
					"active"       => true,
					"status"       => "success",
					"public"       => true,
					"error"        => "no",
					"author"       => null,
					"type_storage" => "local",
					"type_file"    => "contacts",
					"createdAt"    => "2024-08-31T15:28:16.386Z",
					"updatedAt"    => "2024-08-31T15:28:16.386Z",
					"__v"          => 0
				],
				"size"         => 6,
				"lang"         => "all",
				"positionSort" => 1,
				"createdAt"    => "2024-08-31T15:28:19.559Z",
				"updatedAt"    => "2024-09-22T14:07:36.719Z"
			],

		],
		"infoText"   => "",
		"onlineChat" => [
			"status" => false
		]
	],
	"cache"      => 30,
	"latency_ms" => 57,
	"requestId"  => "1742729759926-V0myWf0"
];

echo json_encode($data);
?>