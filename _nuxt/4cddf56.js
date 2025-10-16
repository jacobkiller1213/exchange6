(window.webpackJsonp = window.webpackJsonp || []).push([
  [21],
  {
    764: function (e, r, t) {
      "use strict";
      t.r(r);
      t(112), t(311), t(25), t(11), t(12), t(15), t(6), t(19), t(13), t(20);
      var o = t(4),
        n = (t(69), t(3)),
        d = t(156),
        c = t(567),
        l = t(568),
        m = t(569),
        v = t(570),
        _ = t(571),
        progress = t(572),
        h = t(524),
        f = t(573),
        y = t(574);
      t(22);
      function C(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r &&
            (o = o.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, o);
        }
        return t;
      }
      function O(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? C(Object(t), !0).forEach(function (r) {
                Object(o.a)(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      var $ = {
          head: function () {
            var e = this.$seo({
              name: "Order #" + this.$route.params.order,
              title: "Order #" + this.$route.params.order,
              description: "Exchange order details",
              openGraph: {
                title: "Order #" + this.$route.params.order,
                description: "Exchange order details",
                image: {
                  url: this.$rest.baseUrl + this.$rest.faviconPath,
                  width: 100,
                  height: 100,
                  type: "image/png",
                },
              },
            });
            return { meta: e.meta, title: e.title };
          },
          data: function () {
            return {
              radiusProgressBarCircle: 14,
              orderError: null,
              val: !0,
              timeout: "",
              comps: {
                waitPayment: l.a,
                deleted: _.a,
                inProgress: progress.a,
                errorPayout: h.a,
                errorPayment: h.a,
                done: f.a,
                hold: m.a,
                returned: v.a,
                inProgressPayout: y.a,
                new: c.a,
              },
            };
          },
          computed: O(
            O(
              {},
              Object(n.c)({
                order: "exchange/order",
                getRequestStateExchange: "exchange/getRequestState",
                verificationsStatus: "exchange/verificationsStatus",
                load: "exchange/load",
              })
            ),
            {},
            {
              rateIn: function () {
                if (!this.order || !this.order.rate) return 0;
                var e = new d.BigNumber(this.order.rate || 1);
                return e.lt(1)
                  ? new d.BigNumber(1).div(e)
                  : e.gte(1)
                  ? new d.BigNumber(1)
                  : e;
              },
              rateOut: function () {
                if (!this.order || !this.order.rate) return 0;
                var e = new d.BigNumber(this.order.rate || 1);
                return e.lt(1)
                  ? new d.BigNumber(1)
                  : e.gte(1)
                  ? new d.BigNumber(this.order.rate).div(1)
                  : e;
              },
              progressBar: function () {
                var e =
                    this.$moment(this.order.expiresAt).diff(
                      this.order.createdAt
                    ) / 100,
                  r = this.$moment(this.order.expiresAt).diff() / e;
                return (
                  (this.val || !this.val) && r < 0 && (r = 0),
                  (
                    ((100 - r) / 100) *
                    (Math.PI * (2 * this.radiusProgressBarCircle))
                  ).toFixed(2)
                );
              },
              time: function () {
                var e = this.$moment(this.order.expiresAt).diff();
                return (this.val || !this.val) && e >= 36e5
                  ? Math.floor(this.$moment.duration(e).asHours()) +
                      ":" +
                      this.$moment(e).utc().format("mm:ss")
                  : (this.val || !this.val) && e >= 0
                  ? this.$moment(e).utc().format("mm:ss")
                  : "22:00";
              },
            }
          ),
          beforeDestroy: function () {
            this.$events.$off("ws/emit/updateOrder"),
              clearTimeout(this.timeout);
          },
          created: function () {
            var e = this;
            this.getRequestStateExchange("getOrder", "isPending") ||
              this.getOrder({
                type: "order",
                orderUID: this.$route.params.order,
                orderSecret: this.$route.params.secret,
                vuexActionV2: !0,
              })
                .catch(function (r) {
                  r && r.message && (e.orderError = r.message),
                    (e.orderError = "opps.. Error get order.");
                })
                .then(),
              this.checkTimeOut(!1),
              this.$events.$on("ws/emit/updateOrder", function (param) {
                setTimeout(function () {
                  param.order !== e.order._id ||
                    e.getRequestStateExchange("getOrder", "isPending") ||
                    e
                      .getOrder({
                        type: "order",
                        orderUID: e.$route.params.order,
                        orderSecret: e.$route.params.secret,
                        disableLoaders: !0,
                      })
                      .catch(function (r) {
                        r && r.message && (e.orderError = r.message),
                          (e.orderError =
                            "ops.. Error get order. Please try again.");
                      })
                      .then();
                }, 100);
              });
          },
          methods: O(
            O(
              {},
              Object(n.b)({
                getOrder: "exchange/getOrder",
                changeOrder: "exchange/changeOrder",
              })
            ),
            {},
            {
              checkTimeOut: function (e) {
                var r = this;
                if (this.min <= 0 && this.sec <= 0)
                  return clearTimeout(this.timeout);
                (this.val = e),
                  (this.timeout = setTimeout(function () {
                    return r.checkTimeOut(!e);
                  }, 500));
              },
            }
          ),
        },
        w = t(7),
        component = Object(w.a)(
          $,
          function () {
            var e = this,
              r = e._self._c;
            return r("div", { staticClass: "ordered" }, [
              r("div", { staticClass: "under-header" }, [
                r("div", { staticClass: "form-confirmation right-bg" }, [
                  r("div", { staticClass: "left-bg" }, [
                    e.orderError
                      ? r("div", { staticClass: "container" }, [
                          r(
                            "div",
                            { staticClass: "form-confirmation-manual-bloc" },
                            [
                              r(
                                "div",
                                {
                                  staticClass:
                                    "form-confirmation-manual-number",
                                },
                                [
                                  r("h1", [
                                    e._v(
                                      "\n                " +
                                        e._s(e.$t("page.user.order.error")) +
                                        "\n              "
                                    ),
                                  ]),
                                  e._v(" "),
                                  r("p", [
                                    e._v(
                                      "\n                " +
                                        e._s(e.$t("page.user.order.order_id")) +
                                        "\n                "
                                    ),
                                    r("span", [
                                      e._v("#" + e._s(e.$route.params.order)),
                                    ]),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                          e._v(" "),
                          r("div", { staticClass: "form" }, [
                            r(
                              "div",
                              {
                                staticClass: "padding-block-order",
                                staticStyle: { "text-align": "center" },
                              },
                              [r("h4", [e._v(e._s(e.orderError))])]
                            ),
                          ]),
                        ])
                      : r("div", { staticClass: "container" }, [
                          r("div", { staticClass: "form-order-header" }, [
                            r("h1", [
                              e._v(
                                "\n              " +
                                  e._s(e.$t("page.user.order.title")) +
                                  " "
                              ),
                              r("span", { staticClass: "header-blue-color" }, [
                                e._v(
                                  e._s(
                                    e.$t("page.user.order." + e.order.status)
                                  )
                                ),
                              ]),
                            ]),
                          ]),
                          e._v(" "),
                          r("div", { staticClass: "form" }, [
                            e.load && e.order.status
                              ? r("div", {}, [
                                  r(
                                    "div",
                                    { staticClass: "order-main-block" },
                                    [
                                      r(
                                        "div",
                                        { staticClass: "form-left-block" },
                                        [
                                          r(
                                            "div",
                                            {
                                              staticClass:
                                                "form-left-block_header",
                                            },
                                            [
                                              r("p", [
                                                e._v(
                                                  e._s(
                                                    e.$t(
                                                      "page.user.order.transferDetails"
                                                    )
                                                  )
                                                ),
                                              ]),
                                            ]
                                          ),
                                          e._v(" "),
                                          r(
                                            "div",
                                            {
                                              staticClass:
                                                "form-left-block_item",
                                            },
                                            [
                                              r(
                                                "ul",
                                                [
                                                  r(
                                                    "li",
                                                    {
                                                      staticClass:
                                                        "details-currency",
                                                    },
                                                    [
                                                      r(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "detail-id",
                                                        },
                                                        [
                                                          e._v(
                                                            "\n                          " +
                                                              e._s(
                                                                e.$t(
                                                                  "page.user.order.order_id"
                                                                )
                                                              ) +
                                                              "\n                          "
                                                          ),
                                                          r("p", [
                                                            e._v(
                                                              e._s(
                                                                e.$route.params
                                                                  .order
                                                              ) + " "
                                                            ),
                                                          ]),
                                                        ]
                                                      ),
                                                    ]
                                                  ),
                                                  e._v(" "),
                                                  r(
                                                    "li",
                                                    {
                                                      staticClass:
                                                        "details-currency",
                                                    },
                                                    [
                                                      r("div", [
                                                        r("p", [
                                                          e._v(
                                                            e._s(
                                                              e.$t(
                                                                "page.main.to.rate"
                                                              )
                                                            )
                                                          ),
                                                        ]),
                                                        e._v(" "),
                                                        e.rateIn > 10
                                                          ? r("span", [
                                                              e._v(
                                                                e._s(
                                                                  Number(
                                                                    (
                                                                      +e.rateIn ||
                                                                      1
                                                                    ).toFixed(2)
                                                                  )
                                                                ) + " :"
                                                              ),
                                                            ])
                                                          : e.rateIn > 1
                                                          ? r("span", [
                                                              e._v(
                                                                "\n                            " +
                                                                  e._s(
                                                                    Number(
                                                                      (
                                                                        +e.rateIn ||
                                                                        1
                                                                      ).toFixed(
                                                                        3
                                                                      )
                                                                    )
                                                                  ) +
                                                                  " :\n                          "
                                                              ),
                                                            ])
                                                          : r("span", [
                                                              e._v(
                                                                e._s(
                                                                  Number(
                                                                    (
                                                                      +e.rateIn ||
                                                                      1
                                                                    ).toFixed(4)
                                                                  )
                                                                ) + " :"
                                                              ),
                                                            ]),
                                                        e._v(" "),
                                                        e.rateOut > 10
                                                          ? r("span", [
                                                              e._v(
                                                                e._s(
                                                                  Number(
                                                                    (
                                                                      +e.rateOut ||
                                                                      1
                                                                    ).toFixed(2)
                                                                  )
                                                                )
                                                              ),
                                                            ])
                                                          : e.rateOut > 1
                                                          ? r("span", [
                                                              e._v(
                                                                "\n                            " +
                                                                  e._s(
                                                                    Number(
                                                                      (
                                                                        +e.rateOut ||
                                                                        1
                                                                      ).toFixed(
                                                                        3
                                                                      )
                                                                    )
                                                                  ) +
                                                                  "\n                          "
                                                              ),
                                                            ])
                                                          : r("span", [
                                                              e._v(
                                                                e._s(
                                                                  Number(
                                                                    (
                                                                      +e.rateOut ||
                                                                      1
                                                                    ).toFixed(4)
                                                                  )
                                                                )
                                                              ),
                                                            ]),
                                                      ]),
                                                    ]
                                                  ),
                                                  e._v(" "),
                                                  r(
                                                    "li",
                                                    {
                                                      staticClass:
                                                        "details-currency",
                                                    },
                                                    [
                                                      r("div", [
                                                        r("p", [
                                                          e._v(
                                                            e._s(
                                                              e.$t(
                                                                "page.user.order.youSend"
                                                              ) +
                                                                " " +
                                                                e.order.route
                                                                  .from.name
                                                            ) + ":"
                                                          ),
                                                        ]),
                                                        e._v(" "),
                                                        r("span", [
                                                          e._v(
                                                            e._s(
                                                              e.order.inAmount
                                                            ) +
                                                              " " +
                                                              e._s(
                                                                e.order.route
                                                                  .from.symbol
                                                              )
                                                          ),
                                                        ]),
                                                      ]),
                                                      e._v(" "),
                                                      r(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "details-currency_logo",
                                                        },
                                                        [
                                                          r("img", {
                                                            attrs: {
                                                              src: e.$rest.urlImg(
                                                                e.order.route
                                                                  .from.image
                                                              ).medium,
                                                              alt: e.order.route
                                                                .from.name,
                                                            },
                                                          }),
                                                        ]
                                                      ),
                                                    ]
                                                  ),
                                                  e._v(" "),
                                                  r(
                                                    "li",
                                                    {
                                                      staticClass:
                                                        "details-currency",
                                                    },
                                                    [
                                                      r("div", [
                                                        r("p", [
                                                          e._v(
                                                            e._s(
                                                              e.$t(
                                                                "page.user.order.youReceive"
                                                              ) +
                                                                " " +
                                                                e.order.route.to
                                                                  .name
                                                            ) + ":"
                                                          ),
                                                        ]),
                                                        e._v(" "),
                                                        r("span", [
                                                          e._v(
                                                            e._s(
                                                              e.order.outAmount
                                                            ) +
                                                              " " +
                                                              e._s(
                                                                e.order.route.to
                                                                  .symbol
                                                              )
                                                          ),
                                                        ]),
                                                      ]),
                                                      e._v(" "),
                                                      r(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "details-currency_logo",
                                                        },
                                                        [
                                                          r("img", {
                                                            attrs: {
                                                              src: e.$rest.urlImg(
                                                                e.order.route.to
                                                                  .image
                                                              ).medium,
                                                              alt: e.order.route
                                                                .to.name,
                                                            },
                                                          }),
                                                        ]
                                                      ),
                                                    ]
                                                  ),
                                                  e._v(" "),
                                                  e._l(
                                                    e.order.fromValues,
                                                    function (t) {
                                                      return r(
                                                        "li",
                                                        {
                                                          key:
                                                            t.name +
                                                            "fromValues",
                                                          staticClass:
                                                            "details-currency",
                                                        },
                                                        [
                                                          r("div", [
                                                            r("p", [
                                                              e._v(
                                                                e._s(t.name) +
                                                                  ":"
                                                              ),
                                                            ]),
                                                            e._v(" "),
                                                            r("span", [
                                                              e._v(
                                                                e._s(t.value)
                                                              ),
                                                            ]),
                                                          ]),
                                                        ]
                                                      );
                                                    }
                                                  ),
                                                  e._v(" "),
                                                  e._l(
                                                    e.order.toValues,
                                                    function (t) {
                                                      return r(
                                                        "li",
                                                        {
                                                          key:
                                                            t.name + "toValues",
                                                          staticClass:
                                                            "details-currency",
                                                        },
                                                        [
                                                          r("div", [
                                                            r("p", [
                                                              e._v(
                                                                e._s(t.name) +
                                                                  ":"
                                                              ),
                                                            ]),
                                                            e._v(" "),
                                                            r("span", [
                                                              e._v(
                                                                e._s(t.value)
                                                              ),
                                                            ]),
                                                          ]),
                                                        ]
                                                      );
                                                    }
                                                  ),
                                                  e._v(" "),
                                                  e._l(
                                                    e.order.routeValues,
                                                    function (t) {
                                                      return r(
                                                        "li",
                                                        {
                                                          key:
                                                            t.name +
                                                            "routeValues",
                                                          staticClass:
                                                            "details-currency-from",
                                                        },
                                                        [
                                                          r("div", [
                                                            r("p", [
                                                              e._v(
                                                                e._s(t.name) +
                                                                  ":"
                                                              ),
                                                            ]),
                                                            e._v(" "),
                                                            r("span", [
                                                              e._v(
                                                                e._s(t.value)
                                                              ),
                                                            ]),
                                                          ]),
                                                        ]
                                                      );
                                                    }
                                                  ),
                                                ],
                                                2
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                      e._v(" "),
                                      r(
                                        "div",
                                        { staticClass: "form-payment-block" },
                                        [
                                          "new" === e.order.status ||
                                          "waitPayment" === e.order.status
                                            ? r(
                                                "div",
                                                {
                                                  staticClass:
                                                    "payment-data_header",
                                                },
                                                [
                                                  r(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "payment-data_date",
                                                    },
                                                    [
                                                      r("p", [
                                                        e._v(
                                                          e._s(
                                                            e.$t(
                                                              "page.user.order.actual_until"
                                                            )
                                                          )
                                                        ),
                                                      ]),
                                                      e._v(" "),
                                                      r("span", [
                                                        e._v(
                                                          e._s(
                                                            e
                                                              .$moment(
                                                                e.order
                                                                  .expiresAt
                                                              )
                                                              .format(
                                                                "DD MMM YYYY, HH:mm"
                                                              )
                                                          )
                                                        ),
                                                      ]),
                                                    ]
                                                  ),
                                                  e._v(" "),
                                                  r(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "form-order-time-left",
                                                    },
                                                    [
                                                      r(
                                                        "svg",
                                                        {
                                                          attrs: {
                                                            width: "32",
                                                            height: "32",
                                                            viewBox:
                                                              "0 0 32 32",
                                                            fill: "none",
                                                            version: "1.1",
                                                            xmlns:
                                                              "http://www.w3.org/2000/svg",
                                                          },
                                                        },
                                                        [
                                                          r("circle", {
                                                            attrs: {
                                                              r: "14",
                                                              cx: "16",
                                                              cy: "16",
                                                              fill: "transparent",
                                                              stroke: "#E1E4ED",
                                                              "stroke-dasharray":
                                                                "87.96459430051421",
                                                              "stroke-width":
                                                                "4",
                                                              "stroke-dashoffset":
                                                                "0",
                                                            },
                                                          }),
                                                          e._v(" "),
                                                          r("circle", {
                                                            attrs: {
                                                              r: "14",
                                                              cx: "16",
                                                              cy: "16",
                                                              fill: "transparent",
                                                              stroke: "#619420",
                                                              "stroke-dasharray":
                                                                "87.96459430051421",
                                                              "stroke-width":
                                                                "4",
                                                              "stroke-dashoffset":
                                                                e.progressBar,
                                                              transform:
                                                                "rotate(-90 16 16)",
                                                            },
                                                          }),
                                                        ]
                                                      ),
                                                      e._v(" "),
                                                      r("div", [
                                                        r("p", [
                                                          e._v(
                                                            e._s(
                                                              e.$t(
                                                                "page.user.order.time_left"
                                                              )
                                                            )
                                                          ),
                                                        ]),
                                                        e._v(" "),
                                                        r("span", [
                                                          e._v(e._s(e.time)),
                                                        ]),
                                                      ]),
                                                    ]
                                                  ),
                                                ]
                                              )
                                            : r(
                                                "div",
                                                {
                                                  staticClass:
                                                    "payment-data_header",
                                                },
                                                [
                                                  r(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "payment-data_date",
                                                    },
                                                    [
                                                      r("p", [
                                                        e._v(
                                                          e._s(
                                                            e.$t(
                                                              "page.user.order.orderCreatedAt"
                                                            )
                                                          )
                                                        ),
                                                      ]),
                                                      e._v(" "),
                                                      r("span", [
                                                        e._v(
                                                          e._s(
                                                            e
                                                              .$moment(
                                                                e.order
                                                                  .createdAt
                                                              )
                                                              .format(
                                                                "DD MMM YYYY, HH:mm"
                                                              )
                                                          )
                                                        ),
                                                      ]),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                          e._v(" "),
                                          "done" === e.order.status
                                            ? r("div", [
                                                "63691cda5eda14e7605caa5f" ===
                                                e.order.partner
                                                  ? r(
                                                      "p",
                                                      {
                                                        staticClass:
                                                          "form-attention promo-monitor",
                                                      },
                                                      [
                                                        e._v(
                                                          "\n                      Если Вы узнали о нас от мониторинга ExchangeSumo, то можете "
                                                        ),
                                                        r(
                                                          "a",
                                                          {
                                                            attrs: {
                                                              href: "https://exchangesumo.com/exchanger/1015/OMG Swift/",
                                                              target: "_blank",
                                                            },
                                                          },
                                                          [
                                                            e._v(
                                                              "оставить отзыв и получить кешбэк до 35%"
                                                            ),
                                                          ]
                                                        ),
                                                        e._v(
                                                          " от их прибыли с этого обмена.\n                    "
                                                        ),
                                                      ]
                                                    )
                                                  : e._e(),
                                                e._v(" "),
                                                "633a9d4060b473437dd2ae0b" ===
                                                e.order.partner
                                                  ? r(
                                                      "p",
                                                      {
                                                        staticClass:
                                                          "form-attention promo-monitor",
                                                      },
                                                      [
                                                        e._v(
                                                          "\n                      Если Вы узнали о нас от мониторинга КурсЕксперт, то можете\n                      "
                                                        ),
                                                        r(
                                                          "a",
                                                          {
                                                            attrs: {
                                                              href: "https://kurs.expert/ru/obmennik/www-OMG Swift-cash/feedbacks.html",
                                                              target: "_blank",
                                                            },
                                                          },
                                                          [
                                                            e._v(
                                                              "оставить отзыв и получить кешбэк здесь"
                                                            ),
                                                          ]
                                                        ),
                                                        e._v(
                                                          "!\n                    "
                                                        ),
                                                      ]
                                                    )
                                                  : e._e(),
                                                e._v(" "),
                                                "647da9d630cb450c127c5786" ===
                                                e.order.partner
                                                  ? r(
                                                      "p",
                                                      {
                                                        staticClass:
                                                          "form-attention promo-monitor",
                                                      },
                                                      [
                                                        e._v(
                                                          "\n                      Если Вы узнали о нас от мониторинга ExNode, то можете\n                      "
                                                        ),
                                                        r(
                                                          "a",
                                                          {
                                                            attrs: {
                                                              href: "https://exnode.ru/exchangers/exchanger-3968594/",
                                                              target: "_blank",
                                                            },
                                                          },
                                                          [
                                                            e._v(
                                                              "оставить отзыв и получить кешбэк здесь"
                                                            ),
                                                          ]
                                                        ),
                                                        e._v(
                                                          "!\n                    "
                                                        ),
                                                      ]
                                                    )
                                                  : e._e(),
                                                e._v(" "),
                                                "646514eeb2d63d09d714bd68" ===
                                                e.order.partner
                                                  ? r(
                                                      "p",
                                                      {
                                                        staticClass:
                                                          "form-attention promo-monitor",
                                                      },
                                                      [
                                                        e._v(
                                                          "\n                      Если Вам понравилось обслуживание, то Вы можете "
                                                        ),
                                                        r(
                                                          "a",
                                                          {
                                                            attrs: {
                                                              href: "https://www.bestchange.ru/OMG Swift-exchanger.html",
                                                              target: "_blank",
                                                            },
                                                          },
                                                          [
                                                            e._v(
                                                              "оставить отзыв о нас"
                                                            ),
                                                          ]
                                                        ),
                                                        e._v(
                                                          " на BestChange. "
                                                        ),
                                                        r("br"),
                                                        r("br"),
                                                        e._v(
                                                          " Обращаем внимание, что отзыв необходимо подтвердить на почте.\n                    "
                                                        ),
                                                      ]
                                                    )
                                                  : e._e(),
                                              ])
                                            : e._e(),
                                          e._v(" "),
                                          r(
                                            "div",
                                            {
                                              staticClass:
                                                "payment-data_content",
                                            },
                                            [
                                              r(e.comps[e.order.status], {
                                                tag: "component",
                                                attrs: {
                                                  order: e.order,
                                                  "verifications-status":
                                                    e.verificationsStatus,
                                                },
                                                on: {
                                                  confirm: function (r) {
                                                    return e.changeOrder({
                                                      orderUID:
                                                        e.$route.params.order,
                                                      orderSecret:
                                                        e.$route.params.secret,
                                                      status: r,
                                                    });
                                                  },
                                                },
                                              }),
                                            ],
                                            1
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                  e._v(" "),
                                  "new" === e.order.status ||
                                  "waitPayment" === e.order.status
                                    ? r(
                                        "div",
                                        { staticClass: "order-footer-block" },
                                        [
                                          r("p", [
                                            e._v(
                                              "\n                  " +
                                                e._s(
                                                  e.$t(
                                                    "page.user.order.toCancelTheExchange"
                                                  )
                                                ) +
                                                "\n                "
                                            ),
                                          ]),
                                          e._v(" "),
                                          r(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-transparent",
                                              on: {
                                                click: function (r) {
                                                  return e.changeOrder({
                                                    orderUID:
                                                      e.$route.params.order,
                                                    orderSecret:
                                                      e.$route.params.secret,
                                                    status: "deleted",
                                                  });
                                                },
                                              },
                                            },
                                            [
                                              e._v(
                                                "\n                  " +
                                                  e._s(
                                                    e.$t(
                                                      "page.user.order.cancelBtn"
                                                    )
                                                  ) +
                                                  "\n                "
                                              ),
                                            ]
                                          ),
                                        ]
                                      )
                                    : e._e(),
                                ])
                              : r(
                                  "div",
                                  { staticClass: "padding-block-order" },
                                  [r("loader")],
                                  1
                                ),
                          ]),
                        ]),
                  ]),
                ]),
              ]),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      r.default = component.exports;
    },
  },
]);
