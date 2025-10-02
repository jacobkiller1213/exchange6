<?php
header('Content-Type: application/json');

$data = [
	"success"    => true,
	"data"       => [
		"pages" => [
			[
				"_id"          => "66be4d3052f0bb5b9c12d227",
				"nameLink"     => "О сервисе",
				"positionSort" => 1,
				"title"        => "О сервисе",
				"isHeaderMenu" => false,
				"isFooterMenu" => true,
				"link"         => "about-us",
				"lang"         => "ru"
			],
			[
				"_id"          => "66be4d3052f0bb5b9c12d226",
				"nameLink"     => "About Us",
				"positionSort" => 1,
				"title"        => "About service",
				"isHeaderMenu" => false,
				"isFooterMenu" => true,
				"link"         => "about-us",
				"lang"         => "en"
			],
			[
				"_id"          => "66c0649893055431a677e0e1",
				"nameLink"     => "Про сервіс",
				"positionSort" => 1,
				"title"        => "Про сервіс",
				"isHeaderMenu" => false,
				"isFooterMenu" => true,
				"link"         => "about-us",
				"lang"         => "uk"
			],
			[
				"_id"          => "66c0652593055431a677e2ea",
				"nameLink"     => "O serwisie",
				"positionSort" => 1,
				"title"        => "O serwisie",
				"isHeaderMenu" => false,
				"isFooterMenu" => true,
				"link"         => "about-us",
				"lang"         => "pl"
			],
			[
				"_id"          => "66c0659693055431a677e47d",
				"nameLink"     => "Sobre el servicio",
				"positionSort" => 1,
				"title"        => "Sobre el servicio",
				"isHeaderMenu" => false,
				"isFooterMenu" => true,
				"link"         => "about-us",
				"lang"         => "es"
			]
		]
	],
	"cache"      => 60,
	"latency_ms" => 7,
	"requestId"  => "1742729759924-aElsKyd"
];

echo json_encode($data);
