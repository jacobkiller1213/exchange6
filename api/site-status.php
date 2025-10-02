<?php
header('Content-Type: application/json');

$data = [
	"success"    => true,
	"data"       => [
		"offlineStatus"              => false,
		"jivosite"                   => "",
		"requiredCaptchaCreateOrder" => "false",
		"captcha_module"             => "",
		"captcha_public"             => ""
	],
	"cache"      => 5,
	"latency_ms" => 18,
	"requestId"  => "1742729759920-xrn56Qi"
];

echo json_encode($data);
