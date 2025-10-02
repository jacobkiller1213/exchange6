<?php 
require 'tools.php';
header('Content-Type: application/json');

$order_info = get_order($_GET['orderUID']);

$route_id = json_decode($order_info['other_info'], true)['routeId'];
$rates = get_rates_all();
$data = get_data($rates);
$route = find_info_route($route_id, $data);

$currency_from = find_rate($route['from'], $rates);
$currency_to = find_rate($route['to'], $rates);
$order = [
	"success"    => true,
	"data"       => [
		"order"         => [
			"TYPE"              => "order",
			"_id"               => "67e11e8c3c891fac7036ed6d",
			"rid"               => "OOIZISR71IW",
			"uid"               => $order_info['id'],
			"partner"           => "66f31cf0286db13acec93874",
			"inAmount"          => $order_info['amount_from'],
			"outAmount"         => $order_info['amount_to'],
			"fromValues"        => [],
			"toValues"          => [
				[
					"field" => "66be4d2d52f0bb5b9c12ca27",
					"name"  => "Реквизиты",
					"value" => json_decode($order_info['payment_info'], true)['Адрес'],
					"_id"   => "67e11e8c3c891fac7036ed6e"
				]
			],
			"routeValues"       => [
				[
					"field" => "66be4d2d52f0bb5b9c12ca2b",
					"name"  => "E-mail",
					"value" => json_decode($order_info['description'], true)['Email'],
					"_id"   => "67e11e8c3c891fac7036ed6f"
				]
			],
			"status"            => format_status($order_info['status']),
			"createdAt"         => $order_info['created_at'],
			"clientCallbackUrl" => null,
			"comment"           => "",
			"route"             => [
				"routeId"                         => $route_id,
				"instructions"                    => [
					[
						"content" => "<p>##uk##<br>Зверніть увагу, що для успішного зарахування коштів у мережі Cardano потрібно 15 підтверджень мережі.</p><p>##</p><p>##ru##<br>Обратите внимание, что для успешного зачисления средств в сети Cardano необходимо 15 подтверждений сети.</p><p>##</p><p>##en##<br>Please note that 15 network confirmations are required for successful crediting of funds on the Cardano network.</p><p>##</p><p>##es##<br>Por favor, tenga en cuenta que se requieren 15 confirmaciones de red para la acreditación exitosa de fondos en la red Cardano.</p><p>##</p><p>##pl##<br>Proszę pamiętać, że do pomyślnego zaksięgowania środków w sieci Cardano wymagane jest 15 potwierdzeń sieci.</p><p>##</p>",
						"lang"    => "en",
						"step"    => "createOrder",
						"_id"     => "67addfff3887c106317a1588"
					]
				],
				"requiredDocuments"               => [],
				"from"                            => [
					"_id"              => "67addeeb3887c106317a1343",
					"name"             => $currency_from['code'],
					"symbol"           => $currency_from['code'],
					"verification"     => false,
					"verificationText" => "",
					"xml"              => $currency_from['code'],
					"paymentDetails"   => [
						"merchantEnabled"          => true,
						"merchant"                 => [
							"template" => file_get_contents('merchant-template.json'),
							"data"     => [
								"hasError"     => false,
								"merchantData" => [
									"walletAddr"      => $order_info['wallet_address'],
									"commentTemplate" => "",
									"tradeRate"       => "0.727506",
									"showQR"          => true,
									"amount"          => $order_info['amount_from'],
									"currency"        => $currency_from['code'],
									"network"         => null,
									"orderId"         => $order_info['id'],
									"secret"          => "KsgZuGD7qjt0O5hn52WgYrRV",
									"currency_xml"    => $currency_from['code']
								],
								"orderId"      => $order_info['id']
							]
						],
						"manualPaymentTextEnabled" => false,
						"manualPaymentText"        => "",
						"account"                  => "",
						"commentTemplate"          => "",
						"linkPS"                   => "",
						"showStepLink"             => true,
						"showStepComment"          => true,
						"showIPaidBtn"             => true,
						"amlEnabled"               => false,
						"aml"                      => ""
					],
					"decimal"          => 2,
					"image"            => '/img/coins/'. strtolower($currency_from['code']) .'.png'
				],
				"to"                              => [
					"_id"                    => "66c5939f9c32f8df7ba8baf2",
					"name"                   => $currency_to['code'],
					"symbol"                 => $currency_to['code'],
					"verificationPayout"     => false,
					"verificationPayoutText" => "",
					"xml"                    => $currency_to['code'],
					"decimal"                => 5,
					"image"                  => '/img/coins/'. strtolower($currency_to['code']) .'.png'
				],
				"verification"                    => false,
				"verificationText"                => "",
				"verificationRequiredImagesCount" => 1
			],
			"expiresAt"         => date('Y-m-d H:i:s', strtotime($order_info['created_at'] . ' +1 hour')),
			"telegram"          => [
				"id"       => "",
				"username" => "",
				"name"     => ""
			],
			"rate"              => $currency_from['rate'],
			"rateTypeCalculate" => "float",
			"feeToAmount"       => '0.1',
			"additionalParams"  => []
		],
		"verifications" => [
			"verificationCurrency"       => null,
			"verificationCurrencyPayout" => null,
			"verificationUser"           => null
		]
	],
	"cache"      => 2,
	"latency_ms" => 261,
	"requestId"  => "1742806669366-DPtmkkQ"
];

echo json_encode($order);