<?php
require 'tools.php';
header('Content-Type: application/json');
$data_request = json_decode(file_get_contents('php://input'), true);
$rates = get_rates_all();
$data = get_data($rates);

$route = find_info_route($data_request['routeId'], $data);
$currency_from = find_rate($route['from'], $rates);
$currency_to = find_rate($route['to'], $rates);
$amount_from = $data_request['amount'];
$phone = get_value_to_key($data_request['routeValues'], 'phone');
$email = get_value_to_key($data_request['routeValues'], 'email');
$memo = get_value_to_key($data_request['toValues'], 'account_crypto_tag');
$wallet = get_value_to_key($data_request['toValues'], 'wallet');

$min_amount = get_min_amount($currency_from['code']);
$validate = isset($wallet) ? validate_currency($currency_to['code'], $wallet) : false;
$validate_phone = isset($phone) ? validate_phone($phone) : false;
$validate_email = isset($email) ? validate_email($email) : false;
if ($min_amount >= $amount_from) {
	$data = [
		"success"    => false,
		"error"      => [
			"apiError"  => true,
			"message"   => "Param amount isn't valid: 0",
			"errorType" => "api",
			"object"    => [
				"fieldId"   => "amount",
				"nameField" => "amount",
				"err"       => "regexp",
				"type"      => "toValues"
			],
			"level"     => 0,
			"errorCode" => 6231546409213868,
			"stack"     => "\nAPI.register.title [as fn] (/app/api/public/exchanger/order/create.js:320:28)\nprocess.processTicksAndRejections (node:internal/process/task_queues:95:5)"
		],
		"latency_ms" => 26,
		"requestId"  => "1742774343407-ATmqdjI"
	];
	echo json_encode($data);
	exit;
}
if (!$validate) {
	$data = [
		"success"    => false,
		"error"      => [
			"apiError"  => true,
			"message"   => "Param toValues isn't valid: wallet",
			"errorType" => "api",
			"object"    => [
				"fieldId"   => "wallet",
				"nameField" => $currency_to['code'] . " address",
				"err"       => "regexp",
				"type"      => "toValues"
			],
			"level"     => 0,
			"errorCode" => 6231546409213868,
			"stack"     => "\nAPI.register.title [as fn] (/app/api/public/exchanger/order/create.js:320:28)\nprocess.processTicksAndRejections (node:internal/process/task_queues:95:5)"
		],
		"latency_ms" => 26,
		"requestId"  => "1743542797480-MlMEhvE"
	];
	echo json_encode($data);
	exit;
}
if (!$validate_phone) {
	$data = [
		"success"    => false,
		"error"      => [
			"apiError"  => true,
			"message"   => "Param toValues isn't valid: phone",
			"errorType" => "api",
			"object"    => [
				"fieldId"   => "phone",
				"nameField" => "phone",
				"err"       => "regexp",
				"type"      => "toValues"
			],
			"level"     => 0,
			"errorCode" => 6231546409213868,
			"stack"     => "\nAPI.register.title [as fn] (/app/api/public/exchanger/order/create.js:320:28)\nprocess.processTicksAndRejections (node:internal/process/task_queues:95:5)"
		],
		"latency_ms" => 26,
		"requestId"  => "1742774343407-ATmqdjI"
	];
	echo json_encode($data);
	exit;
}
if (!$validate_email) {
	$data = [
		"success"    => false,
		"error"      => [
			"apiError"  => true,
			"message"   => "Param toValues isn't valid: email",
			"errorType" => "api",
			"object"    => [
				"fieldId"   => "email",
				"nameField" => "email",
				"err"       => "regexp",
				"type"      => "toValues"
			],
			"level"     => 0,
			"errorCode" => 6231546409213868,
			"stack"     => "\nAPI.register.title [as fn] (/app/api/public/exchanger/order/create.js:320:28)\nprocess.processTicksAndRejections (node:internal/process/task_queues:95:5)"
		],
		"latency_ms" => 26,
		"requestId"  => "1742774343407-ATmqdjI"
	];
	echo json_encode($data);
	exit;
}

if ($data_request['amount'] == 0) {
	$data = [
		"success"    => false,
		"error"      => [
			"apiError"  => true,
			"message"   => "Param amount isn't valid: 0",
			"errorType" => "api",
			"object"    => [
				"fieldId"   => "amount",
				"nameField" => "amount",

			],
			"level"     => 0,
			"errorCode" => 6231546409213868,
			"stack"     => "\nAPI.register.title [as fn] (/app/api/public/exchanger/order/create.js:320:28)\nprocess.processTicksAndRejections (node:internal/process/task_queues:95:5)"
		],
		"latency_ms" => 26,
		"requestId"  => "1742774343407-ATmqdjI"
	];
	echo json_encode($data);
	exit;
}

$calc = calculate($currency_from['code'].$currency_from['network'], $currency_to['code'].$currency_to['network'], $amount_from, '')['data'];
$create_data = [
	"currency_from" => $currency_from['code'].$currency_from['network'],
	"currency_to" => $currency_to['code'].$currency_to['network'],
	"amount_from" => $calc['amount_from'],
	"amount_to" => $calc['amount_to'],
	"payment_info" => [
		'💼 Адрес кошелька' => $wallet,

	],
	"description" => [
		'📱 Номер телефона' => $phone,
		'📧 Email' => $email,

	],
	"other_info" => [
		'routeId' => $data_request['routeId']
	]
];
if($memo){
	$create_data['payment_info']['⚠️ МЕМО'] = $memo;
}





$order = create($create_data);

$data = [
	"success"    => true,
	"data"       => [
		"_id"       => "67e0a0473c891fac7035e8d0",
		"uid"       => $order['id'],
		"rid"       => "7QM1NQ7G9LJ",
		"secret"    => "t7GSOV30Aulk2eYreCMKPFAd",
		"route"     => [
			"to"   => [
				"name"   => $currency_to['code'],
				"symbol" => $currency_to['code']
			],
			"from" => [
				"name"   => $currency_from['code'],
				"symbol" => $currency_from['code']
			]
		],
		"inAmount"  => $calc['amount_from'],
		"outAmount" => $calc['amount_to']
	],
	"latency_ms" => 50,
	"requestId"  => "1742774343407-ATmqdjI"
];
echo json_encode($data);
