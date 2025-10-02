<?php
header('Content-Type: application/json');

echo json_encode(
    [
        "success"    => true,
        "data"       => [
            "rules" => [

                [
                    "_id"        => "63406005c728768e049b9f8a",
                    "title"      => "Пользовательское соглашение",
                    "link"       => "user-agreement",
                    "lang"       => "ru",
                    "sortNumber" => 2
                ],
                [
                    "_id"        => "66bf006e6f295b5efeefbbcc",
                    "title"      => "AML/KYC",
                    "link"       => "aml-kyc",
                    "lang"       => "ru",
                    "sortNumber" => 2
                ],


            ],
            "count" => [
                "total"       => 3,
                "pages"       => 1,
                "select_page" => 1,
                "limit"       => 20,
                "offset"      => 0
            ]
        ],
        "cache"      => 60,
        "latency_ms" => 3,
        "requestId"  => "1742814770342-vRHO6Vm"
    ]
);