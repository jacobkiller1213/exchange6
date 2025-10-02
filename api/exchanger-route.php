<?php
require 'tools.php';
header('Content-Type: application/json');
global $rates;
$rates = get_rates_all();

$data = get_data($rates);



// foreach($data['data']['currencies'] as $key => $item){
// 	$from = find_rate($item['from']['symbol'], $rates);
// 	$to = find_rate($item['to']['symbol'], $rates);

// 	if ($from && $to) {
// 		$from_rate = $from['rate'];
// 		$to_rate = $to['rate'];

// 		// Правильный расчет курса обмена
// 		$data['data']['routes'][$key]['rate']['in'] = 1;

// 		// Расчет правильного курса обмена: сколько целевой валюты можно получить за 1 единицу исходной
// 		$exchange_rate = $from_rate / $to_rate;
// 		$data['data']['routes'][$key]['rate']['out'] = $exchange_rate;
// 		$data['data']['routes'][$key]['rate']['rateFullNumber'] = 1 / $exchange_rate;
// 		// $data['data']['routes'][$key]['rate']['amount'] = 12312;

// 		// Сохраняем остальные параметры без изменений

// 	}



// }




echo json_encode($data);

?>