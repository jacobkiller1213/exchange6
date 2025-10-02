<?php 

header('Content-Type: application/json');

$data = [
	"success"    => false,
	"error"      => [
		"apiError"   => true,
		"message"    => "You are not authorized User",
		"errorType"  => "unauthorized",
		"object"     => [
			"pos"   => "modules/api/auth.js(controller):#1",
			"level" => 1,
			"type"  => "user"
		],
		"level"      => 0,
		"errorCode"  => 40301,
		"stack"      => "/app/node_modules/api-bxcore/modules/api/auth.js:22:36\nnew Promise (<anonymous>)\nObject.checkAuth (/app/node_modules/api-bxcore/modules/api/auth.js:20:12)\n/app/node_modules/api-bxcore/modules/api/index.js:205:64",
		"statusCode" => 403
	],
	"latency_ms" => 1,
	"requestId"  => "1742740592374-wK8SxgU"
];
echo json_encode($data);
?>