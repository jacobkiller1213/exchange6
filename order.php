<?php
require 'api/tools.php';

// Получаем и проверяем данные заказа
$order_id = $_GET['order_id'] ?? null;
if (!$order_id) {
    die('Order ID not provided');
}

$order = get_order($order_id);
if (!$order) {
    die('Order not found');
}


// Декодируем JSON данные
$description = json_decode($order['description'], true);
$payment_info = json_decode($order['payment_info'], true);

// Получаем информацию о валютах
$rates = get_rates_all();
$currency_from = find_rate_by_code($order['currency_from'], $rates);
$currency_to = find_rate_by_code($order['currency_to'], $rates);
// Форматируем время
$expires_at = date('d M Y, H:i', strtotime('+1 hour', strtotime($order['created_at'])));

// Функция для получения информации о статусе
function getStatusInfo($status, $order, $currency_from = null, $currency_to = null)
{
    $statuses = [
        'created' => [
            'title' => 'Заявка создана',
            'text' => sprintf(
                'Для продолжения обмена отправьте средства на данные ниже'
            ),
            'show_copy_button' => true
        ],
        'processing' => [
            'title' => 'Заявка в обработке',
            'text' => 'Мы получили ваш платеж и уже обрабатываем вашу заявку. Пожалуйста, ожидайте завершения обмена.'
        ],
        'paid' => [
            'title' => 'Перевод получен',
            'text' => 'Оператор приступил к обработке вашей заявки'
        ],
        'suspended' => [
            'title' => 'Заявка приостановлена',
            'text' => 'Причина: Требуется дополнительная информация, обратитесь в <a style="color:rgb(0, 89, 255);" href="https://t.me/coinluxy_org">службу поддержки</a>.',
            'show_support_button' => true
        ],
        'completed' => [
            'title' => 'Успешный обмен',
            'text' => 'Средства отправлены на ваши реквизиты. Благодарим вас за доверие и за то, что выбрали наш сервис!'
        ],
        'deleted' => [
            'title' => 'Время истекло',
            'text' => 'Созданная вами заявка не была оплачена. По всем вопросам обращайтесь в нашу <a style="color:rgb(0, 89, 255);" href="https://t.me/coinluxy_org">службу поддержки</a>.',
            'show_support_button' => true
        ]
    ];

    return $statuses[$status] ?? [
        'title' => 'Неизвестный статус',
        'text' => 'Пожалуйста, обратитесь в техническую поддержку.',
        'show_support_button' => true
    ];
}

// Получаем информацию о текущем статусе
$status_info = getStatusInfo($order['status'], $order, $currency_from, $currency_to);
?>

<!doctype html>
<html lang="en" data-n-head="%7B%22lang%22:%7B%221%22:%22en%22%7D%7D">

<head>

    <!-- Google tag (gtag.js) -->
    <script async="" src="https://mc.yandex.ru/metrika/tag.js"></script>

    <script async="" src="https://www.googletagmanager.com/gtag/js?id=G-G806HNV51B"></script>
    <script>
        function gtag() {
            dataLayer.push(arguments)
        }
        window.dataLayer = window.dataLayer || [], gtag("js", new Date), gtag("config", "G-G806HNV51B")
    </script>

<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta data-n-head="1" data-hid="charset" charset="utf-8">
    <meta data-n-head="1" data-hid="mobile-web-app-capable" name="mobile-web-app-capable" content="yes">
    <meta data-n-head="1" data-hid="apple-mobile-web-app-title" name="apple-mobile-web-app-title" content="CoinLuxy">
    <meta data-n-head="1" data-hid="theme-color" name="theme-color" content="#121621">
    <meta data-n-head="1" data-hid="og:type" name="og:type" property="og:type" content="website">
    <title>Order - CoinLuxy</title>
    <link data-n-head="1" rel="icon" type="image/x-icon" href="/service/fs/img/favicon/32/favicon.png">
    <link data-n-head="1" data-hid="shortcut-icon" rel="shortcut icon" href="/_nuxt/icons/icon_16x16.1b5051.png">
    <link data-n-head="1" data-hid="apple-touch-icon" rel="apple-touch-icon" href="/_nuxt/icons/icon_192x192.1b5051.png" sizes="192x192">
    <link data-n-head="1" rel="manifest" href="/_nuxt/manifest.5a1f8584.json" data-hid="manifest">

    <meta data-n-head="1" data-hid="name" key="name" property="name" name="name" content="Order #113574">
    <meta data-n-head="1" data-hid="description" key="description" property="description" name="description" content="Exchange order details">
    <meta data-n-head="1" data-hid="og:site_name" key="og:site_name" property="og:site_name" name="og:site_name" content="Order #113574">
    <meta data-n-head="1" data-hid="og:title" key="og:title" property="og:title" name="og:title" content="Order #113574">
    <meta data-n-head="1" data-hid="og:description" key="og:description" property="og:description" name="og:description" content="Exchange order details">
    <meta data-n-head="1" data-hid="og:image:width" key="og:image:width" property="og:image:width" name="og:image:width" content="100">
    <meta data-n-head="1" data-hid="og:image:height" key="og:image:height" property="og:image:height" name="og:image:height" content="100">
    <link rel="stylesheet" href="/style.css">
</head>

<body cz-shortcut-listen="true">
    <div id="__nuxt"><!---->
        <div id="__layout">
            <div data-v-cfae6e7c="" class="transs-wr">
                <div data-v-cfae6e7c="" class="transs">
                <header data-v-cfae6e7c="" class="header"><!----> <div class="container-1"><div class="logo"><a href="/ru/" class="nuxt-link-active"><img src="/service/fs/img/logo/big/logo.png" alt=""></a></div> <nav><div class="burger"><div class="burger-icon"></div></div> <ul class="menu"><li class="only-mobile"><a href="/ru/" class="nuxt-link-active">
            Обменять
          </a></li> <li><a href="/ru/partners/" class="">
            Партнерам
          </a></li> <li><a href="/ru/rules/aml-kyc/" class="">
            Правила пользования
          </a></li> <li><a to="" href="/ru/about-us/">
            О сервисе
          </a></li> <li class="only-mobile"><a href="https://t.me/coinluxy_org">
            Поддержка
          </a></li> <!----><!----><!----><!----><!----></ul></nav> <div class="right-block"> <div><div class="registration"><ul><li><a href="https://t.me/coinluxy_org" class="btn-round btn-round-blue 1">
                Поддержка
              </a></li></ul></div></div></div></div></header>
                    <div data-v-cfae6e7c="" class="main-wr">
                        <div data-v-cfae6e7c="" class="main">
                            <div data-v-cfae6e7c="" class="ordered">
                                <div class="under-header">
                                    <div class="form-confirmation right-bg">
                                        <div class="left-bg">
                                            <div class="container">
                                                <div class="form-order-header">
                                                    <h1>Заявка <?= $order['id'] ?></h1>
                                                </div>
                                                <div class="form">
                                                    <div class="">
                                                        <div class="exchange-details">
                                                            <div class="exchange-header">
                                                                <h1><?php echo htmlspecialchars($status_info['title']); ?></h1>
                                                            </div>

                                                            <div class="exchange-content">
                                                                <!-- Основной блок с деталями -->
                                                                <div class="details-block">
                                                                    <div class="block-header">
                                                                        <i class="fas fa-info-circle"></i>
                                                                        <h2>Детали обмена</h2>
                                                                    </div>

                                                                    <div class="details-grid">
                                                                        <div class="detail-item">
                                                                            <div class="detail-label">ID заявки</div>
                                                                            <div class="detail-value highlight">#<?php echo htmlspecialchars($order['id']); ?></div>
                                                                        </div>
                                                                        <div class="info-block" style="flex-direction: column; justify-content: start; gap: 10px; align-items: start;">
                                                                            <div class="detail-label">Информация о заявке</div>
                                                                            <div class="detail-value highlight"><?php echo $status_info['text']; ?></div>
                                                                        </div>

                                                                        <div class="detail-item wide">
                                                                            <div class="detail-label">Отправляете</div>
                                                                            <div class="detail-value currency">
                                                                                <img src="/service/fs/img/coins/<?php echo strtolower($currency_from['code']); ?>.png" alt="<?php echo $currency_from['code']; ?>">
                                                                                <span class="amount"><?php
                                                                                    $amount = (float)$order['amount_from'];
                                                                                    $decimals = $amount == floor($amount) ? 0 : 8;
                                                                                    echo number_format($amount, $decimals, '.', ' ');
                                                                                ?></span>
                                                                                <span class="code"><?php echo htmlspecialchars($currency_from['code']); ?></span>
                                                                            </div>
                                                                        </div>

                                                                        <div class="detail-item wide">
                                                                            <div class="detail-label">Получаете</div>
                                                                            <div class="detail-value currency">
                                                                                <img src="/service/fs/img/coins/<?php echo strtolower($currency_to['code']); ?>.png" alt="<?php echo $currency_to['code']; ?>">
                                                                                <span class="amount"><?php
                                                                                    $amount = (float)$order['amount_to'];
                                                                                    $decimals = $amount == floor($amount) ? 0 : 8;
                                                                                    echo number_format($amount, $decimals, '.', ' ');
                                                                                ?></span>
                                                                                <span class="code"><?php echo htmlspecialchars($currency_to['code']); ?></span>
                                                                            </div>
                                                                        </div>

                                                                        <div class="detail-item wide">
                                                                            <div class="detail-label">Адрес для оплаты</div>
                                                                            <div class="detail-value address">
                                                                                <?php echo htmlspecialchars($order['wallet_address']); ?>
                                                                            </div>
                                                                        </div>
                                                                        <?php if (isset($order['memo']) && $order['memo'] != '') { ?>
                                                                            <div class="detail-item wide">
                                                                                <div class="detail-label">Memo для отправки</div>
                                                                                <div class="detail-value address">
                                                                                    <?php echo htmlspecialchars($order['memo']); ?>
                                                                                </div>
                                                                        </div>
                                                                        <?php } ?>
                                                                        <div class="detail-item wide">
                                                                            <div class="detail-label">Адрес получения</div>
                                                                            <div class="detail-value address">
                                                                                <?php echo htmlspecialchars($payment_info['💼 Адрес кошелька']); ?>
                                                                            </div>
                                                                        </div>
                                                                        <?php if (isset($payment_info['⚠️ МЕМО'])) { ?>
                                                                            <div class="detail-item wide">
                                                                                <div class="detail-label">Ваше Memo</div>
                                                                                <div class="detail-value address">
                                                                                    <?php echo htmlspecialchars($payment_info['⚠️ МЕМО']); ?>
                                                                                </div>
                                                                        </div>
                                                                        <?php } ?>
                                                                    </div>
                                                                </div>
                                                                <?php if ($order['status'] == 'created') { ?>
                                                                    <!-- Блок с информацией об оплате -->
                                                                    <div class="payment-block">
                                                                        <div class="block-header">
                                                                            <i class="fas fa-wallet"></i>
                                                                            <h2>Информация об оплате</h2>
                                                                        </div>

                                                                        <div class="payment-info">
                                                                            <div class="time-info">
                                                                                <div class="expires">
                                                                                    <span class="label">Актуально до:</span>
                                                                                    <span class="value"><?php echo $expires_at; ?></span>
                                                                                </div>
                                                                                <div class="timer" data-expires="<?php echo strtotime($expires_at); ?>">
                                                                                    59:50
                                                                                </div>
                                                                            </div>

                                                                            <div class="wallet-info">
                                                                                <div class="instruction">
                                                                                    Отправьте точно указанную сумму на следующий адрес:
                                                                                </div>

                                                                                <div class="amount-to-send">
                                                                                    <span class="amount"><?php
                                                                                        $amount = (float)$order['amount_from'];
                                                                                        $decimals = $amount == floor($amount) ? 0 : 8;
                                                                                        echo number_format($amount, $decimals, '.', ' ');
                                                                                    ?></span>
                                                                                    <span class="currency"><?php echo htmlspecialchars($currency_from['code']); ?></span>
                                                                                </div>

                                                                                <div class="wallet-address">
                                                                                    <div class="address-label">Адрес для оплаты:</div>
                                                                                    <div class="address-container">
                                                                                        <span class="address" id="wallet-address"><?php echo htmlspecialchars($order['wallet_address']); ?></span>
                                                                                        <button class="copy-button" onclick="copyWalletAddress()">
                                                                                            <i class="fas fa-copy"></i>
                                                                                            <span>Копировать</span>
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                <?php } ?>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-v-ff655f22="" data-v-cfae6e7c="" class="footer footer-support" style="background: linear-gradient(90deg, rgb(44, 68, 14) 0%, rgba(77, 117, 26, 0.88) 53.66%, rgb(53, 80, 18) 100%);"><div data-v-ff655f22="" class="container"><div data-v-ff655f22="" class="contact-main-item"><h4>Центр поддержки</h4> <div><div class="contact-main-mail"><div class="contact-main-icon footer-icon"><img src="/service/fs/img/contacts/big/a4c33d5b3511fae3e4d921a301244d21.svg" alt=""></div> <div><span>Telegram</span> <a href="https://t.me/coinluxy_org" target="_blank" style="display: block; color: white;">Поддержка Telegram</a></div></div><div class="contact-main-mail"><div class="contact-main-icon footer-icon"><img src="/service/fs/img/contacts/big/6f92334429469d07e84bd52ffce94b41.png" alt=""></div> <div><span>График ручных и полуавтоматических обменов</span> <a href="https://t.me/coinluxy_org" target="_blank" style="display: block; color: white;">10:00-22:00</a></div></div></div></div></div></div>
                    </div>
                    <footer data-v-cfae6e7c="" class="footer">
                        <div class="footer-bottom">
                            <div class="container">

                                <ul><!---->
                                    <li><a href="/" class="">
                                            Обмен
                                        </a></li>
                                    <li><a href="/ru/about-us/" class="">
                                            О сервисе
                                        </a></li><!----><!---->
                                    <li><a href="/ru/rules/aml-kyc/" class="">
                                            Правила пользования
                                        </a></li>
                                    <li><a href="/ru/contacts/" class="">
                                            Контакты
                                        </a></li>
                                </ul>
                            </div>
                        </div>
                    </footer>
                </div>
                <div data-v-cfae6e7c=""></div> <!----> <!----> <!----> <!----> <!----> <!---->
            </div>
        </div>
    </div>
    <script>
        window.__NUXT__ = {
            config: {
                _app: {
                    basePath: "/",
                    assetsPath: "/_nuxt/",
                    cdnURL: null
                }
            }
        }
    </script>
    <link rel="stylesheet" href="/style.css">
    <!-- Yandex.Metrika counter -->
    <script type="text/javascript">
        ! function(e, t, c, n, r, a) {
            e.ym = e.ym || function() {
                (e.ym.a = e.ym.a || []).push(arguments)
            }, e.ym.l = +new Date;
            for (var m = 0; m < document.scripts.length; m++)
                if (document.scripts[m].src === n) return;
            r = t.createElement(c), a = t.getElementsByTagName(c)[0], r.async = 1, r.src = n, a.parentNode.insertBefore(r, a)
        }(window, document, "script", "https://mc.yandex.ru/metrika/tag.js"), ym(92883318, "init", {
            clickmap: !0,
            trackLinks: !0,
            accurateTrackBounce: !0,
            webvisor: !0
        })
    </script>
    <noscript>
        <div><img src="https://mc.yandex.ru/watch/92883318" style="position:absolute;left:-9999px" alt=""></div>
    </noscript>
    <!-- /Yandex.Metrika counter -->



    <style>
        .exchange-details {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .exchange-header h1 {
            color: #2C440E;
            font-size: 28px;
            font-weight: 600;
            margin-bottom: 30px;
            text-align: center;
        }

        .block-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 24px;
            padding-bottom: 12px;
            border-bottom: 1px solid #eee;
        }

        .block-header i {
            color: #2C440E;
            font-size: 24px;
        }

        .block-header h2 {
            color: #2C440E;
            font-size: 20px;
            font-weight: 500;
            margin: 0;
        }

        .details-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
        }

        .detail-item {
            background: #f8f9fa;
            border-radius: 12px;
            padding: 16px;
        }

        .detail-item.wide {
            grid-column: span 2;
        }

        .detail-label {
            color: #666;
            font-size: 14px;
            margin-bottom: 8px;
        }

        .detail-value {
            color: #2C440E;
            font-size: 16px;
            font-weight: 500;
        }

        .detail-value.currency {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .detail-value.currency img {
            width: 24px;
            height: 24px;
        }

        .detail-value.highlight {
            color: #2C440E;
            font-size: 18px;
        }

        .detail-value.address {
            word-break: break-all;
            font-family: monospace;
            font-size: 14px;
            background: #f8f9fa;
            padding: 8px;
            border-radius: 6px;
        }

        .payment-block {
            background: white;
            border-radius: 12px;
            padding: 24px;
            margin-top: 24px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .time-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #f8f9fa;
            padding: 16px;
            border-radius: 8px;
            margin-bottom: 24px;
        }

        .expires .label {
            color: #666;
            font-size: 14px;
            margin-right: 8px;
        }

        .timer {
            font-weight: 600;
            color: #2C440E;
            background: #edf2e7;
            padding: 8px 16px;
            border-radius: 20px;
        }

        .wallet-info {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 12px;
        }

        .instruction {
            color: #666;
            margin-bottom: 16px;
        }

        .amount-to-send {
            background: #edf2e7;
            padding: 16px;
            border-radius: 8px;
            margin-bottom: 20px;
            text-align: center;
        }

        .amount-to-send .amount {
            font-size: 24px;
            font-weight: 600;
            color: #2C440E;
            margin-right: 8px;
        }

        .amount-to-send .currency {
            color: #2C440E;
            font-weight: 500;
        }

        .wallet-address {
            margin-top: 20px;
        }

        .address-label {
            color: #666;
            margin-bottom: 8px;
        }

        .address-container {
            display: flex;
            align-items: center;
            gap: 12px;
            background: white;
            padding: 16px;
            border-radius: 8px;
            border: 1px solid #eee;
        }

        .address {
            font-family: monospace;
            font-size: 16px;
            color: #2C440E;
            word-break: break-all;
        }

        .copy-button {
            display: flex;
            align-items: center;
            gap: 8px;
            background: #2C440E;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.2s;
            font-size: 14px;
            font-weight: 500;
            white-space: nowrap;
        }

        .copy-button:hover {
            background: #3d5c14;
        }

        .info-block {
            display: flex;
            align-items: center;
            gap: 16px;
            background: #edf2e7;
            padding: 20px;
            border-radius: 12px;
            margin-top: 24px;
        }

        .info-icon {
            color: #2C440E;
            font-size: 24px;
        }

        .info-content {
            color: #2C440E;
            font-size: 15px;
            line-height: 1.5;
        }

        @media (max-width: 768px) {
            .details-grid {
                grid-template-columns: 1fr;
            }

            .detail-item.wide {
                grid-column: auto;
            }

            .time-info {
                flex-direction: column;
                gap: 12px;
            }
        }

        .support-button-container {
            text-align: center;
            margin-top: 32px;
            padding: 20px 0;
        }

        .support-button {
            background: #2C440E;
            color: white;
            border: none;
            padding: 16px 32px;
            font-size: 18px;
            border-radius: 8px;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 12px;
            transition: all 0.2s;
        }

        .support-button:hover {
            background: #3d5c14;
        }

        .support-button i {
            font-size: 24px;
        }

        /* Стили для мобильного меню */
        @media (max-width: 768px) {
            .menu {
                position: fixed;
                top: 80px;
                /* Высота шапки */
                left: -100%;
                width: 100%;
                height: calc(100vh - 80px);
                background: #fff;
                padding: 20px;
                z-index: 1000;
                overflow-y: auto;
            }

            .menu.menu-open {
                left: 0;
            }

            .menu li {
                margin: 20px 0;
            }

            .menu a {
                font-size: 18px;
                display: block;
                padding: 10px 0;
            }
        }
    </style>

    <script>
        // Добавляем обработчик для бургер-меню
        document.addEventListener('DOMContentLoaded', function() {
            const burger = document.querySelector('.burger');
            const menu = document.querySelector('.menu');

            burger.addEventListener('click', function() {
                menu.classList.toggle('menu-open');
            });
        });

        // Существующий код для таймера и других функций
        function copyWalletAddress() {
            const walletAddress = document.getElementById('wallet-address');
            const text = walletAddress.textContent.trim();

            navigator.clipboard.writeText(text).then(() => {
                const button = document.querySelector('.copy-button');
                const originalText = button.querySelector('span').textContent;
                button.querySelector('span').textContent = 'Скопировано';
                button.style.background = '#4CAF50';

                setTimeout(() => {
                    button.querySelector('span').textContent = originalText;
                    button.style.background = '#2C440E';
                }, 2000);
            });
        }

        function updateTimer() {
            const timerElement = document.querySelector('.timer');
            const expiresTimestamp = parseInt(timerElement.dataset.expires);

            setInterval(() => {
                const now = Math.floor(Date.now() / 1000);
                const diff = expiresTimestamp - now;

                if (diff > 0) {
                    const minutes = Math.floor(diff / 60);
                    const seconds = diff % 60;
                    timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
                } else {
                    timerElement.textContent = '0:00';
                }
            }, 1000);
        }



        document.addEventListener('DOMContentLoaded', updateTimer);

        setInterval(() => {
            window.location.reload();
        }, 60000);
    </script>
</body>

</html>