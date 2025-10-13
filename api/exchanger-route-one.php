<?php
require 'tools.php';
header('Content-Type: application/json');
$id_route = $_GET['id'];
global $info;
$rates = get_rates_all();
$info = get_data($rates);

$min_max_data = get_min_max();






$route = find_info_route($id_route, $info);
$route_curr_from = $route['from'];
$route_curr_to = $route['to'];

$currency_from = find_rate($route_curr_from, $rates);
$currency_to = find_rate($route_curr_to, $rates);
$calc = calculate($currency_from['code'].$currency_from['network'], $currency_to['code'].$currency_to['network'], 1, '')['data'];
$regex = get_regex_data($currency_to['code'])['regex'];


$min_from = get_min_amount($currency_from['code']) ?? 0;
$min_to = get_min_amount($currency_to['code']) ?? 0;


$data = [
	"success"    => true,
	"data"       => [
		"route" => [
			"from"                      => [
				"name"           => '',
				"symbol"         => $currency_from['code'],
				"xml"            => $currency_from['code'],
				"decimal"        => 6,
				"discounts"      => [],
				"verification"   => false,
				"fields"         => [],
				"paymentDetails" => [
					"merchantEnabled" => true,
					"merchant"        => "cryptomus",
					"amlEnabled"      => false,
					"aml"             => ""
				],
				"min"            => $min_from,
				"max"            => 10000000000,
				"image"          => [
					"files" => [
						[
							"type" => "original",
							"url"  => '/img/coins/'. strtolower($currency_from['code']) .'.png',
							"_id"  => "62c5ebeea8cc3c1f82950768"
						],
						[
							"type" => "big",
							"url"  => '/img/coins/'. strtolower($currency_from['code']) .'.png',
							"_id"  => "62c5ebeea8cc3c1f82950769"
						],
						[
							"type" => "medium",
							"url"  => '/img/coins/'. strtolower($currency_from['code']) .'.png',
							"_id"  => "62c5ebeea8cc3c1f8295076a"
						],
						[
							"type" => "small",
							"url"  => '/img/coins/'. strtolower($currency_from['code']) .'.png',
							"_id"  => "62c5ebeea8cc3c1f8295076b"
						]
					]
				]
			],
			"to"                        => [
				"_id"                => "633e84f723513ba52b64e143",
				"name"               => "",
				"symbol"             => $currency_to['code'],
				"verificationPayout" => false,
				"payoutEnabled"      => false,
				"payout"             => "paycraft",
				"xml"                => $currency_to['code'],
				"decimal"            => 5,
				"fields"             => [
					[
						"_id"          => "wallet",
						"name"         => "Реквизиты",
						"placeholder"  => "Реквизиты",
						"regexp"       => $regex,
						"regexp_error" => "Error!",
						"required"     => false
					],

				],
				"image"              => [
					"files" => [
						[
							"type" => "original",
							"url"  => '/img/coins/'. strtolower($currency_to['code']) .'.png',
							"_id"  => "651e36940c872cee1cdd48bf"
						],
						[
							"type" => "big",
							"url"  => '/img/coins/'. strtolower($currency_to['code']) .'.png',
							"_id"  => "651e36940c872cee1cdd48c0"
						],
						[
							"type" => "medium",
							"url"  => '/img/coins/'. strtolower($currency_to['code']) .'.png',
							"_id"  => "651e36940c872cee1cdd48c1"
						],
						[
							"type" => "small",
							"url"  => '/img/coins/'. strtolower($currency_to['code']) .'.png',
							"_id"  => "651e36940c872cee1cdd48c2"
						]
					]
				],
				"usdRate"            => "0.011754266290419072",
				"amlPayoutEnabled"   => false,
				"amlPayout"          => ""
			],
			"fields"                    => [
				[
					"_id"          => "email",
					"name"         => "E-mail",
					"placeholder"  => "E-mail",
					"regexp"       => "^[a-zA-Z0-9$&*+=_-]+(?:\\.[a-zA-Z0-9$&*+=_-]+)*@(?:[a-zA-Z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?",
					"regexp_error" => "Error field",
					"required"     => true
                ],
                [
					"_id"          => "phone",
					"name"         => "Номер телефона",
					"placeholder"  => "Номер телефона",
					"regexp"       => "^\\+?[0-9]{10,15}$",
					"regexp_error" => "Error field",
					"required"     => true
				]
			],
			"rate"                      => [
				"in"                       => 1,
				"out"                      => $calc['amount_to'],
				"rateFullNumber"           => "1.807632536709e-7",
				"typeCalculate"            => "float",
				"changePercentReCalculate" => 0,
				"amount"                   => "244904053.6092841597",
				"outFeeAmount"             => 0
			],
			"instructions"              => [
				[
					"content" => "<p>##ru##Следуйте инструкции по оплате.</p><p><br>Курс фиксируется после получения 1 подтверждений блокчейна.</p><p></p><p><br></p><p>Обмен может быть проверен согласно <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"/ru/rules/aml-kyc/\">AML/KYC политике.</a></p><p><br></p><p></p><p></p><p>В случае, если транзакция будет идентифицирована рискованной, мы можем приостановить операцию обмена и попросить пройти процедуру идентификации.</p><p>## </p><p>##en##</p><p>Follow the payment instructions.</p><p><br>The rate is fixed after receiving 1 confirmations of the blockchain.</p><p><br>The exchange can be verified according to <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"/en/rules/aml-kyc/\">AML/KYC policy.</a></p><p><br>If the transaction is identified as risky, we can suspend the exchange operation and ask to go through the identification procedure.</p><p>## </p><p>##ua##</p><p>Дотримуйтесь інструкції по оплаті.</p><p><br>Курс фіксується після отримання 1 підтверджень блокчейна.</p><p><br>Обмін може бути перевірений згідно <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"/ua/rules/aml-kyc/\">AML/KYC політиці.</a></p><p><br>У разі, якщо транзакція буде ідентифікована ризикованою, ми можемо призупинити операцію обміну і попросити пройти процедуру ідентифікації.</p><p>##</p>",
					"step"    => "createOrder",
					"_id"     => "6788fd46729c1064a57e0f98"
				],
				[
					"content" => "<p>##ru##</p><p>Следуйте инструкции по оплате.</p><p><br>Курс фиксируется после получения 1 подтверждений блокчейна.</p><p>## </p><p>##en##</p><p>Follow the payment instructions.</p><p><br>The rate is fixed after receiving 1 confirmations of the blockchain.</p><p>## </p><p>##ua##</p><p>Дотримуйтесь інструкції по оплаті.</p><p><br>Курс фіксується після отримання 1 підтверджень блокчейна.</p><p>##</p>",
					"step"    => "confirmation",
					"_id"     => "6788fd46729c1064a57e0f99"
				],
				[
					"content" => "<p>##ru##</p><p>Следуйте инструкции по оплате.</p><p><br>Курс фиксируется после получения 1 подтверждений блокчейна.</p><p>## </p><p>##en##</p><p>Follow the payment instructions.</p><p><br>The rate is fixed after receiving 1 confirmations of the blockchain.</p><p>## </p><p>##ua##</p><p>Дотримуйтесь інструкції по оплаті.</p><p><br>Курс фіксується після отримання 1 підтверджень блокчейна.</p><p>##</p>",
					"step"    => "payment",
					"_id"     => "6788fd46729c1064a57e0f9a"
				],
				[
					"content" => "<p style=\"text-align: center; text-align: center\">##ru##Регламентированное время выплаты до 180 минут.####en##The regulated payout time is up to 180 minutes.####ua##Регламентований час виплати до 180 хвилин.##</p>",
					"step"    => "resultOrder",
					"_id"     => "6788fd46729c1064a57e0f9b"
				],
				[
					"content" => "<p style=\"text-align: center;\">##ru##Благодарим за выбор adxfinance!####en##Thank you for choosing adxfinance!####uk##Дякуємо за вибір adxfinance!##</п>",
					"step"    => "doneOrder",
					"_id"     => "6788fd46729c1064a57e0f9c"
				]
			],
			"additionalServices"        => [],
			"verification"              => false,
			"requiredVerificationUser"  => [
				"enable"    => false,
				"currency"  => "out",
				"minAmount" => 0
			],
			"requiredVerificationPhone" => [
				"enable"    => false,
				"currency"  => "out",
				"minAmount" => 0
			],
			"requiredOnlyForAuthed"     => [
				"enable" => false
			],
			"isAutoPayout"              => true,
			"routeId"                   => $id_route,
			"seo"                       => [
				"friendlyURL" => "bitcoin-na-tinkoff",
				"title"       => "##ru##Обмен Bitcoin BTC на Тинькофф Рубли | adxfinance####ua##Обмін Bitcoin BTC Тінькофф Рублі | adxfinance####en##Exchange Bitcoin BTC to Tinkoff Rubles | adxfinance##",
				"subtitle"    => "",
				"description" => "##ru##Обменник криптовалют adxfinance предлагается обменять криптовалюту Bitcoin BTC на Рубли Банка Тинькофф. Быстрые обмены. Выгодный курс.####ua##Обмінник криптовалют adxfinance пропонується обміняти криптовалюту Bitcoin BTC на Рублі Банку Тінькофф. Швидкі обміни. Вигідний курс.####en##Cryptocurrency exchanger adxfinance offers to exchange Bitcoin BTC cryptocurrency for Tinkoff Bank Rubles. Fast exchanges. Favorable rate.##",
				"instruction" => "",
				"keyword"     => "##ru##Обменник криптовалют adxfinance, обменять Тинькофф Рубли, BTC на Рубли, Быстрые выплаты, Выгодный курс, Bitcoin BTC на Рубли Банка, Обмен BTC на Тинькофф Рубли, adxfinance, обмен биткоин на рубли####ua##Обмінник криптовалют adxfinance, обміняти Тінькофф Рублі, BTC на Рублі, Швидкі виплати, Вигідний курс, Bitcoin BTC на Рублі Банку, Обмін BTC на Тінькофф Рублі, adxfinance, обмін біткоїн на рублі####en##Cryptocurrency exchanger adxfinance, exchange Tinkoff Rubles, BTC to Rubles, Fast payments, Favorable rate, Bitcoin BTC to Rubles Bank, Exchange BTC to Tinkoff Rubles, adxfinance, exchange bitcoin to rubles##",
				"h1"          => "##ru##Обмен Bitcoin BTC на Тинькофф Рубли | adxfinance####ua##Обмін Bitcoin BTC Тінькофф Рублі | adxfinance####en##Exchange Bitcoin BTC to Tinkoff Rubles | adxfinance##",
				"h2"          => ""
			],
			"orderTTL"                  => 60
		]
	],
	"cache"      => 2,
	"latency_ms" => 11,
	"requestId"  => "1743519203518-cW40UTv"
];

$isMemo = isMemoCoin($currency_to['code']);
if($isMemo){
    $memo_field = [
        "_id"          => "account_crypto_tag",
        "name"         => "Memo (необязательно)",
        "placeholder"  => "Memo",
        "regexp"       => "^[0-9]{1,120}$",
        "regexp_error" => "Поле Memo заполнено неверно",
        "required"     => true
    ];
    $data['data']['route']['to']['fields'][] = $memo_field;

}

echo json_encode($data);
