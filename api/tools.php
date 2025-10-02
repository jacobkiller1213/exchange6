<?php
require_once 'config.php';


function find_rate($id, $rates)
{

    foreach ($rates as $item) {
        if ($item['id'] === $id) {
            return $item;
        }
    }
    return null;
}

function find_rate_by_code($code, $rates)
{
    if (strpos($code, 'BNB') !== false) {
        $code = 'BNB';
    }

    foreach ($rates as $item) {
        if ($item['code'] === $code) {
            return $item;
        }
    }
    return null;
}

function find_info_route($id, $info)
{

    foreach ($info['data']['routes'] as $item) {

        if (isset($item['routeId']) && $item['routeId'] == $id) {

            return $item;

        }
    }
    return null;
}
function find_spread($symbol_from, $symbol_to, $spreads)
{
    foreach ($spreads as $item) {
        if ($item['symbol_from'] === $symbol_from && $item['symbol_to'] === $symbol_to) {
            return $item;
        }
    }
}

function formated_data($data, $rates)
{
    foreach ($data['data']['routes'] as $key => $item) {
        $from = find_rate($item['from']['symbol'], $rates);
        $to = find_rate($item['to']['symbol'], $rates);

        if ($from && $to) {
            $from_rate = $from['rate'];
            $to_rate = $to['rate'];

            // Правильный расчет курса обмена
            $info['data']['routes'][$key]['rate']['in'] = 1;
            $info['data']['routes'][$key]['routeId'] = $item['routeId'];
            // Расчет правильного курса обмена: сколько целевой валюты можно получить за 1 единицу исходной
            $exchange_rate = $from_rate / $to_rate;
            $info['data']['routes'][$key]['rate']['out'] = $exchange_rate;
            $info['data']['routes'][$key]['rate']['rateFullNumber'] = 1 / $exchange_rate;
            // $data['data']['routes'][$key]['rate']['amount'] = 12312;

            // Сохраняем остальные параметры без изменений
            if (isset($item['rate']['outFeeAmount'])) {
                $info['data']['routes'][$key]['rate']['outFeeAmount'] = $item['rate']['outFeeAmount'];
            }
            if (isset($item['rate']['amount'])) {
                $info['data']['routes'][$key]['rate']['amount'] = $item['rate']['amount'];
            }
            if (isset($item['rate']['typeCalculate'])) {
                $data['data']['routes'][$key]['rate']['typeCalculate'] = $item['rate']['typeCalculate'];
            }
            if (isset($item['rate']['changePercentReCalculate'])) {
                $data['data']['routes'][$key]['rate']['changePercentReCalculate'] = $item['rate']['changePercentReCalculate'];
            }
        }
    }
    return $info;
}
function get_spreads()
{
    $url = API_URL . 'spreads/get';
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Accept: application/json',
        'User-Agent: ExchangeApp/1.0',
        'Connection: keep-alive'
    ]);
    $response = curl_exec($ch);
    curl_close($ch);

    return json_decode($response, true);
}
function get_rates_all()
{
    $url = API_URL . 'rates/get/all';
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Accept: application/json',
        'User-Agent: ExchangeApp/1.0',
        'Connection: keep-alive'
    ]);
    $response = curl_exec($ch);
    curl_close($ch);


    return json_decode($response, true)['data'];
}

function calculate($curr_from, $curr_to, $amount_from, $amount_to)
{
    $url = API_URL . 'calculate';
    $data = [
        'exchanger_id' => EXCHANGE_ID,
        'currency_from' => $curr_from,
        'currency_to' => $curr_to,
        'amount_from' => $amount_from,
        'amount_to' => $amount_to,
    ];

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Accept: application/json',
        'User-Agent: ExchangeApp/1.0',
        'Connection: keep-alive'
    ]);

    // Выполняем запрос
    $response = curl_exec($ch);

    // Получаем информацию о запросе


    curl_close($ch);

    return json_decode($response, true);
}
function get_min_amount($currency_code)
{
    $url = API_URL . 'get_min_amount/' . EXCHANGE_ID . '/' . $currency_code;
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Accept: application/json',
        'User-Agent: ExchangeApp/1.0',
        'Connection: keep-alive'
    ]);
    $response = curl_exec($ch);
    curl_close($ch);
    return $response;
}
function isMemoCoin($coin)
{
    $memo_coins = [
        "XRP",      // Ripple использует destination tag
        "XLM",      // Stellar использует memo
        "EOS",      // EOS использует memo
        "BNB",      // Binance Coin использует memo
        "ATOM",     // Cosmos использует memo
        "XEM",      // NEM использует message
        "ALGO",     // Algorand использует memo
        "HBAR",     // Hedera использует memo
        "TON"       // TON использует memo/comment
    ];

    return in_array(strtoupper($coin), $memo_coins);
}
function get_value_to_key($data, $key)
{
    return array_values(array_filter($data, function ($item) use ($key) {
        return $item['key'] === $key;
    }))[0]['value'] ?? null;
}
function create($data)
{
    $url = API_URL . 'create_order';
    $raw_ip = $_SERVER["HTTP_CF_CONNECTING_IP"] ??
        $_SERVER['HTTP_X_FORWARDED_FOR'] ??
        $_SERVER['HTTP_CLIENT_IP'] ??
        $_SERVER['REMOTE_ADDR'];

    $user_ip = trim(explode(',', $raw_ip)[0]);
    $data = [
        'exchanger_id' => EXCHANGE_ID,
        'currency_from' => $data['currency_from'],
        'currency_to' => $data['currency_to'],
        'amount_from' => $data['amount_from'],
        'amount_to' => $data['amount_to'],
        'payment_info' => json_encode($data['payment_info']),
        'description' => json_encode($data['description']) ?? null,
        'other_info' => json_encode($data['other_info']) ?? null,
    ];

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Accept: application/json',
        'User-Agent: ExchangeApp/1.0',
        'Connection: keep-alive',
        'X-Forwarded-For: ' . $user_ip
    ]);

    $response = curl_exec($ch);

    return json_decode($response, true)['data'];
}


function get_order($id)
{
    $url = API_URL . 'get_order/' . $id;
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Accept: application/json',
        'User-Agent: ExchangeApp/1.0',
        'Connection: keep-alive'
    ]);
    $response = curl_exec($ch);
    curl_close($ch);
    return json_decode($response, true);
}




function get_currencies()
{
    $currencies_json = file_get_contents(__DIR__ . '/currencies.json');
    $currencies_data = json_decode($currencies_json, true);

    if (isset($currencies_data['currencies'])) {
        return $currencies_data['currencies'];
    }

    return [];
}


function get_regex_data($currency_code)
{
    $regex_json = file_get_contents(__DIR__ . '/regex_data.json');
    $regex_data = json_decode($regex_json, true);
    foreach ($regex_data as $regex) {
        if ($regex['best_code'] === $currency_code) {
            $regex_data = $regex;
            break;
        }
    }
    return $regex_data;
}
function validate_phone($phone)
{
    $digits = preg_replace('/\D/', '', $phone);

    if (strlen($digits) < 10) {
        return false;
    }

    $forbiddenPrefixes = ['1', '39', '38', '49', '44', '65', '81', '82', '972', '971'];

    foreach ($forbiddenPrefixes as $prefix) {
        if (strpos($digits, $prefix) === 0) {
            return false;
        }
    }

    return true;
}
function validate_email($email)
{
    $regex = '/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/';
    if (preg_match($regex, $email)) {
        return true;
    }
    return false;
}
function validate_currency($currency_code, $address)
{
    $regex_json = file_get_contents(__DIR__ . '/regex_data.json');
    $regex_data = json_decode($regex_json, true);
    foreach ($regex_data as $regex) {
        if ($regex['best_code'] === $currency_code) {
            $regex_data = $regex;
            break;
        }
    }
    $regex = $regex_data['regex'];

    // Добавляем разделители к регулярному выражению
    $regex = '/' . str_replace('/', '\/', $regex) . '/';

    if (preg_match($regex, $address)) {
        return true;
    }
    return false;
}
function get_currency_full($currency_code)
{

    $currencies = get_currencies();

    $currency_code = strtolower($currency_code);
    foreach ($currencies as $currency) {

        if ($currency['legacyTicker'] === $currency_code) {
            return $currency;
        }
    }
    return null;
}


function change_status($id, $status)
{
    $url = API_URL . 'change_order_status/' . $id;
    $data = [
        'status' => $status
    ];
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Accept: application/json',
        'User-Agent: ExchangeApp/1.0',
        'Connection: keep-alive'
    ]);
    $response = curl_exec($ch);
    curl_close($ch);
    return json_decode($response, true);
}

function format_status($status)
{
    switch ($status) {
        case 'created':
            return 'new';
        case 'processing':
            return 'waitPayment';
        case 'paid':
            return 'inProgress';
        case 'completed':
            return 'done';
        case 'suspended':
            return 'hold';
        case 'deleted':
            return 'deleted';
        default:
            return 'new';
    }
}



function get_rates($rates)
{
    $url = API_URL . '/rates/get';
    $data = [
        'rates' => $rates
    ];
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Accept: application/json',
        'User-Agent: ExchangeApp/1.0',
        'Connection: keep-alive'
    ]);

    $response = curl_exec($ch);
    curl_close($ch);
    return json_decode($response, true);
}


function format_currency($currency, $network)
{
    // Список поддерживаемых стейблкоинов
    $currency = strtoupper($currency);
    $stablecoins = ['USDT', 'USDC', 'BUSD', 'DAI', 'TUSD'];

    // Список поддерживаемых сетей с их суффиксами
    $networks = [
        'trx' => 'TRC20',
        'eth' => 'ERC20',
        'bsc' => 'BSC',
        'sol' => 'SOL',
        'arb' => 'ARB',
        'matic' => 'MATIC',
        'avax' => 'AVAX',
        'op' => 'OP'
    ];

    // Проверяем, является ли валюта стейблкоином
    if (in_array($currency, $stablecoins) && isset($networks[$network])) {
        return $currency . $networks[$network];
    }

    // Для других валют или неизвестных сетей возвращаем только код валюты
    return $currency;
}
function unformat_currency($currency)
{
    $currency = strtoupper($currency);
    $stablecoins = ['USDT', 'USDC', 'BUSD', 'DAI', 'TUSD'];
    $networks = [
        'TRC20' => 'trx',
        'ERC20' => 'eth',
        'BSC' => 'bsc',
        'SOL' => 'sol',
        'ARB' => 'arb',
        'MATIC' => 'matic',
        'AVAX' => 'avax',
        'OP' => 'op'
    ];

    // Проверяем стейблкоины
    foreach ($stablecoins as $stablecoin) {
        foreach ($networks as $networkSuffix => $networkCode) {
            if (strpos($currency, $stablecoin . $networkSuffix) === 0) {
                return [$stablecoin, $networkCode];
            }
        }
    }

    // Для обычных валют возвращаем только валюту и пустую сеть
    return [$currency, $currency];
}

function get_min_max()
{
    $min_max_json = file_get_contents(__DIR__ . '/min_max.json');
    $min_max_data = json_decode($min_max_json, true);

    return $min_max_data;
}
function find_min_max($currency, $min_max_data)
{
    foreach ($min_max_data['currencies'] as $item) {
        if ($item['ticker'] === $currency) {
            return $item;
        }
    }
}

function get_reserves(){
    $reserves = [
        'BTC' => 12.57843,
        'ADA' => 451237.89,
        'XLM' => 379652.31,
        'ETC' => 3178.42,
        'XMR' => 1823.76,
        'DOGE' => 1198745.23,
        'BNB' => 2789.65,
        'ZEC' => 1498.37,
        'DASH' => 2213.91,
        'BCH' => 1897.28,
        'ARB' => 84932.17,
        'SOL' => 7534.69,
        'USDC' => 953421.08,
        'DOT' => 42156.93,
        'DAI' => 847629.54,
        'USDT' => 1204567.82,
        'TON' => 64783.29,
        'LTC' => 8476.35,
        'XRP' => 521893.47,
        'TRX' => 3812456.19,
        'ETH' => 648.73
    ];
    return $reserves;
};
function get_data($rates)
{
    $exept_rates_fiat = ['USD', 'RUB', 'EUR', 'GBP', 'UAH', 'KZT', 'AZN', 'BYN', 'KGS', 'TJS', 'TMT', 'UZS', 'GEL', 'AMD', 'JPY', 'CNY', 'INR', 'KRW', 'MXN', 'NOK', 'PLN', 'RON', 'TRY', 'XDR', 'XAG', 'XAU'];

    $rates = array_filter($rates, function ($rate) use ($exept_rates_fiat) {
        return !in_array($rate['code'], $exept_rates_fiat);
    });
    $currencies = [];
    $min_max_data = get_min_max();



    foreach ($rates as $key => $rate) {
        $min_max_data_info = find_min_max(strtolower($rate['code']), $min_max_data);
        $currencies[$rate['id']] = [
            'id' => $rate['id'],
            'xml' => $rate['code'],
            'name' => '',
            'symbol' => $rate['code'],
            'image' => '/img/coins/' . strtolower($rate['code']) . '.png',
            'positionIn' => $key,
            'positionOut' => $key,
            'reserveAmount' => get_reserves()[$rate['code']] ?? 0,
            'isActive' => true
        ];
    }
    ;
    $routes = [];
    foreach ($rates as $key => $rate) {
        foreach ($rates as $key2 => $rate2) {
            if ($key !== $key2) {
                $routes[] = [
                    'routeId' => $rate['id'] . $rate2['id'] . $rate['code'],
                    'from' => $rate['id'],
                    'to' => $rate2['id'],
                    "isShowWeb" => true,
                    "isShowBot" => true,
                    "reserveAmountAdditional" => 0,
                    "seoFriendlyURL" => $rate['code'] . '-na-' . $rate2['code']
                ];
            }
        }
    }

    $data = [
        "success" => true,
        "data" => [
            "isUpdated" => false,
            "currencies" => $currencies,
            "routes" => $routes
        ],
        "cache" => 5,
        "latency_ms" => 4,
        "requestId" => "1743519201737-59vo3zT"
    ];
    return $data;
}
