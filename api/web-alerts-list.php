<?php
header('Content-Type: application/json');

$data = [
	"success"    => true,
	"data"       => [
		"webAlerts" => [

			[
				"_id"           => "66c0433d6f295b5efef00304",
				"content"       => "<p>Our exchange service employs automated AML screening for all incoming transactions through specialized tools. Should a transaction be flagged as high-risk (involving darknet, mixers, gambling, sanctions list, etc.), we reserve the right to temporarily halt the exchange process for further verification of your identity and the origin of the funds.</p>",
				"position_sort" => 1,
				"lang"          => "en",
				"level"         => "medium",
				"status"        => true,
				"timeShowFrom"  => "22:00",
				"timeShowTo"    => "23:59",
				"createdAt"     => "2024-08-17T06:29:17.457Z",
				"updatedAt"     => "2024-08-17T06:29:17.457Z",
				"__v"           => 0
			],
			[
				"_id"           => "66c0434c93055431a67790de",
				"content"       => "<p>Nuestro servicio de intercambio utiliza herramientas especializadas para realizar un control automatizado de AML en todas las transacciones entrantes. Si una transacción es marcada como de alto riesgo (darknet, mezcladores, juegos de azar, lista de sanciones, etc.), nos reservamos el derecho de suspender temporalmente la operación de intercambio para verificar su identidad y el origen de los fondos.</p>",
				"position_sort" => 1,
				"lang"          => "es",
				"level"         => "medium",
				"status"        => true,
				"timeShowFrom"  => "22:00",
				"timeShowTo"    => "23:59",
				"createdAt"     => "2024-08-17T06:29:32.182Z",
				"updatedAt"     => "2024-08-17T06:29:32.182Z",
				"__v"           => 0
			],
			[
				"_id"           => "66c043576f295b5efef00318",
				"content"       => "<p>Наш сервіс обміну використовує автоматизовані системи AML-контролю для всіх вхідних транзакцій за допомогою спеціалізованих інструментів. Якщо транзакція буде позначена як високоризикова (пов'язана з даркнетом, міксерами, азартними іграми, санкційними списками тощо), ми залишаємо за собою право призупинити процес обміну для додаткової перевірки вашої особи та джерела коштів.</p>",
				"position_sort" => 1,
				"lang"          => "uk",
				"level"         => "medium",
				"status"        => true,
				"timeShowFrom"  => "22:00",
				"timeShowTo"    => "23:59",
				"createdAt"     => "2024-08-17T06:29:43.840Z",
				"updatedAt"     => "2024-08-17T06:29:43.840Z",
				"__v"           => 0
			],
			[
				"_id"           => "66c043616f295b5efef0031f",
				"content"       => "<p>Nasz serwis wymiany stosuje zautomatyzowane narzędzia AML do kontrolowania wszystkich przychodzących transakcji. Jeśli transakcja zostanie oznaczona jako wysokiego ryzyka (związana z darknetem, mixerami, hazardem, listami sankcyjnymi itp.), zastrzegamy sobie prawo do tymczasowego wstrzymania procesu wymiany w celu dalszej weryfikacji tożsamości i źródła środków.</p>",
				"position_sort" => 1,
				"lang"          => "pl",
				"level"         => "medium",
				"status"        => true,
				"timeShowFrom"  => "22:00",
				"timeShowTo"    => "23:59",
				"createdAt"     => "2024-08-17T06:29:53.742Z",
				"updatedAt"     => "2024-08-17T06:29:53.742Z",
				"__v"           => 0
			]
		]
	],
	"cache"      => 30,
	"latency_ms" => 4,
	"requestId"  => "1742729759992-GBMCrTe"
];

echo json_encode($data);
