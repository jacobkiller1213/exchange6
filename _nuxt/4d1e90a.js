(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    511: function (t, e, r) {
      "use strict";
      var n = r(5),
        o = r(201);
      n(
        { target: "String", proto: !0, forced: r(202)("small") },
        {
          small: function () {
            return o(this, "small", "", "");
          },
        }
      );
    },
    512: function (t, e) {
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxMiAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuNzU4MzM3IDYuMDgzMzNDMS4wODMzNCA2LjQwODMzIDEuNjA4MzQgNi40MDgzMyAxLjkzMzM0IDYuMDgzMzNMNS4xNjY2NyAyLjg1ODMzVjE1LjVDNS4xNjY2NyAxNS45NTgzIDUuNTQxNjcgMTYuMzMzMyA2IDE2LjMzMzNDNi40NTgzNCAxNi4zMzMzIDYuODMzMzQgMTUuOTU4MyA2LjgzMzM0IDE1LjVWMi44NTgzM0wxMC4wNjY3IDYuMDkxNjdDMTAuMzkxNyA2LjQxNjY3IDEwLjkxNjcgNi40MTY2NyAxMS4yNDE3IDYuMDkxNjdDMTEuNTY2NyA1Ljc2NjY3IDExLjU2NjcgNS4yNDE2NyAxMS4yNDE3IDQuOTE2NjdMNi41ODMzNCAwLjI0OTk5OUM2LjI1ODM0IC0wLjA3NTAwMTUgNS43MzMzNCAtMC4wNzUwMDE1IDUuNDA4MzQgMC4yNDk5OTlMMC43NTgzMzcgNC45MDgzM0MwLjQzMzMzNyA1LjIzMzMzIDAuNDMzMzM3IDUuNzY2NjcgMC43NTgzMzcgNi4wODMzM1oiIGZpbGw9IiM2NjllMjAiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjkuOTMxMjIiIHkxPSIzLjM0MTYiIHgyPSIxLjkzNCIgeTI9IjQuMzM0ODIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzQxNzFGNCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4M0ExRjciLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K";
    },
    532: function (t, e, r) {
      "use strict";
      (function (t) {
        r(12), r(19), r(20);
        var n = r(0),
          o = r(4),
          c =
            (r(10),
            r(112),
            r(113),
            r(6),
            r(15),
            r(577),
            r(40),
            r(312),
            r(25),
            r(13),
            r(11),
            r(62),
            r(71),
            r(50),
            r(311),
            r(3)),
          l = r(156);
        function m(t, e) {
          var r = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e &&
              (n = n.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function d(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? m(Object(r), !0).forEach(function (e) {
                  Object(o.a)(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : m(Object(r)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(r, e)
                  );
                });
          }
          return t;
        }
        e.a = {
          props: {
            isWidget: { type: Boolean, default: !1 },
            widgetFrom: {
              type: String,
              default: function () {
                return "";
              },
            },
            widgetTo: {
              type: String,
              default: function () {
                return "";
              },
            },
            widgetAmount: {
              type: [String, Number],
              default: function () {
                return "";
              },
            },
            widgetWidth: {
              type: [String, Number],
              default: function () {
                return "";
              },
            },
          },
          data: function () {
            return {
              bankNames: [
                "ВТБ",
                "Совкомбанк",
                "Юмани",
                "Тинькофф",
                "Открытие",
                "Газпромбанк",
                "Россельхозбанк",
                "Азиатско-Тихоокеанский Банк",
                ,
                "МКБ",
                "Почта банк",
                "Райффайзен",
                "Сбербанк",
                "Альфабанк",
                "МТС-Банк",
                "Банк БКФ",
                "НС Банк",
                "ПНКО ЭЛПЛАТ",
                "УКБ Белгородсоцбанк",
                "Озонбанк",
                "Росбанк",
                "Юникредитбанк",
                "Уралсиб",
                "Межбанк",
                "Промсвязьбанк",
                "ABC Code",
                "Первый Инвестиционный Банк",
                "Промтрансбанк",
                "ВЛАДБИЗНЕСБАНК",
                "Банк Йошкар-Ола",
                "Земский банк",
                "РЕАЛИСТ БАНК",
                "ЮГ-Инвестбанк",
                "ИК Банк",
                "Нацинвестпромбанк",
                "банк Раунд",
                "Драйв Клик Банк",
                "НОКССБАНК",
                "Датабанк",
                "БыстроБанк",
                "ЧЕЛЯБИНВЕСТБАНК",
                "КБ Солидарность",
                "КБ Кубань Кредит",
                "Банк Национальный стандарт",
                "АКБ СЛАВИЯ",
                "Индустриальный Сберегательный Ба",
                "КБ УБРиР",
                "НКО ЮМани",
                "Экспобанк",
                "КБ РостФинанс",
                "КБ ЭНЕРГОТРАНСБАНК",
                "СИБСОЦБАНК",
                "АКБ Трансстройбанк",
                "Инбанк",
                "Русьуниверсалбанк",
                "УРАЛПРОМБАНК",
                "Хайс Банк",
                "Банк Аверс",
                "Банк Развитие-Столица",
                "УКБ Новобанк",
                "Кузнецкбизнесбанк",
                "Северный Народный Банк",
                "АКБ Форштадт",
                "ИШБАНК",
                "ФИНСТАР БАНК",
                "Банк Акцепт",
                "Вайлдберриз Банк",
                "Банк ФИНАМ",
                "Точка ФК Открытие",
                "КБ Пойдём!",
                "КБ Гарант-Инвест",
                "банк Элита",
                "Роял Кредит Банк",
                "Газтрансбанк",
                "Банк Венец",
                "КБ ВНЕШФИНБАНК",
                "АИКБ Енисейский объединенный бан",
                "АКБ Ланта-Банк",
                "АКБ Абсолют Банк",
                "ФФИН Банк",
                "Банк Точка",
                "КБ РУСНАРБАНК",
                "КБ СИНКО-БАНК",
                "НИКО-БАНК",
                "СОЦИУМ-БАНК",
                "ВУЗ-банк",
                "Эс-Би-Ай Банк",
                "Ставропольпромстройбанк",
                "КБ ЛОКО-Банк",
                "Банк ВБРР",
                "МБ Банк",
                "Томскпромстройбанк",
                "Углеметбанк",
                "Банк ИПБ",
                "АКБ Алеф-Банк",
                "КБ Модульбанк",
                "АКИБАНК",
                "АКБ ТЕНДЕР-БАНК",
                "Банк ЗЕНИТ",
                "Хоум кредит",
                "БАНК ОРЕНБУРГ",
                "Банк ИТУРУП",
                "Дальневосточный банк",
                "АК БАРС БАНК",
                "МОБИ.Деньги",
                "АКБ МЕЖДУНАРОДНЫЙ ФИНАНСОВЫЙ КЛУБ",
                "КБ Новый век",
                "Деньги.Мэйл.Ру",
                "Бланк банк",
                "Банк Объединенный капитал",
                "Таврический Банк",
                "КБ АРЕСБАНК",
                "КОШЕЛЕВ-БАНК",
                "КБ Долинск",
                "КБ Крокус-Банк",
                "АКБ Держава",
                "Банк Заречье",
                "Банк АЛЕКСАНДРОВСКИЙ",
                "Хакасский муниципальный банк",
                "Банк Агророс",
                "МС Банк Рус",
                "Банк Интеза",
                "Кредит Европа Банк (Россия)",
                "QIWI",
                "КБ АГРОПРОМКРЕДИТ",
                "КБ СТРОЙЛЕСБАНК",
                "Банк МБА-МОСКВА",
                "Банк ПСКБ",
                "СДМ-Банк",
                "Тимер Банк",
                "МОРСКОЙ БАНК",
                "Банк Кремлевский",
                "Кредит Урал Банк",
              ],
              queryData: [],
              sbpValue: "",
              loadRouteGetOne: !1,
              errorloadRouteGetOne: !1,
              limitAmount: !1,
              minAmount: !1,
              maxAmount: !1,
              sendAmount: "in",
              errorRoutes: "",
              from: "",
              to: "",
              val1: "",
              val2: "",
              amount: "",
              captcha: "",
              fromValues: {},
              toValues: {},
              routeValues: {},
              email: "",
              symbolFrom: "",
              symbolTo: "",
              valid: 1,
              agree: !1,
              agree_kyc: !1,
              currentRoute: { to: {}, from: {}, rate: {} },
              loadRouteId: "",
            };
          },
          computed: d(
            d(
              {},
              Object(c.c)({
                captchaSettings: "params/getCaptchaConf",
                info: "exchange/info",
                load: "exchange/load",
                profile: "user/info",
              })
            ),
            {},
            {
              rateIn: function () {
                var t = this;
                if (
                  !this.currentRoute ||
                  !this.currentRoute.rate ||
                  !this.currentRoute.rate.in
                )
                  return 0;
                var e = new l.BigNumber(this.currentRoute.rate.in),
                  r = 0,
                  n = this.currentRoute.from.discounts.find(function (e) {
                    return Number(e.amountMoreThan) <= t.val1;
                  });
                return (
                  n && n.discountPercent && (r = Number(n.discountPercent)),
                  (e = e.minus(new l.BigNumber(e).div(100).multipliedBy(r)))
                );
              },
              rateOut: function () {
                return this.currentRoute &&
                  this.currentRoute.rate &&
                  this.currentRoute.rate.out
                  ? new l.BigNumber(this.currentRoute.rate.out)
                  : 0;
              },
              fromListNoCity: function () {
                var t = this,
                  e = "from";
                return this[e + "List"].filter(function (r, n) {
                  return (
                    !r[e].isCash ||
                    n ===
                      t[e + "List"].findIndex(function (t) {
                        return 0 === t[e].xml.indexOf(r[e].xml.split("_C_")[0]);
                      })
                  );
                });
              },
              fromCities: function () {
                var t = this,
                  e = "from";
                return this && this[e] && this[e].isCash
                  ? this[e + "List"]
                      .filter(function (r) {
                        return 0 === r[e].xml.indexOf(t[e].xml.split("_C_")[0]);
                      })
                      .map(function (t) {
                        return t[e];
                      })
                  : [];
              },
              toListNoCity: function () {
                var t = this,
                  e = "to";
                return this.toList.filter(function (r, n) {
                  return (
                    !r[e].isCash ||
                    n ===
                      t.toList.findIndex(function (t) {
                        return 0 === r[e].xml.indexOf(t[e].xml.split("_C_")[0]);
                      })
                  );
                });
              },
              toCities: function () {
                var t = this,
                  e = "to";
                return this && this[e] && this[e].isCash
                  ? this.toList
                      .filter(function (r) {
                        return 0 === r[e].xml.indexOf(t[e].xml.split("_C_")[0]);
                      })
                      .map(function (t) {
                        return t[e];
                      })
                  : [];
              },
              fromList: function () {
                var t = this,
                  e = {};
                return this.info
                  ? this.info
                      .map(function (e) {
                        return d(
                          d({}, e),
                          {},
                          {
                            can: t.info.some(function (r) {
                              return (
                                e.from.xml === r.from.xml &&
                                t.to.name === r.to.xml
                              );
                            }),
                          }
                        );
                      })
                      .filter(function (t) {
                        return !e[t.from.xml] && ((e[t.from.xml] = !0), !0);
                      })
                      .filter(function (e) {
                        return !t.symbolFrom || t.symbolFrom === e.from.symbol;
                      })
                      .sort(function (a, b) {
                        return a.from.positionIn > b.from.positionIn ? 1 : -1;
                      })
                  : 0;
              },
              toList: function () {
                var t = this,
                  e = {};
                return this.info
                  .filter(function (t) {
                    return !e[t.to.xml] && ((e[t.to.xml] = !0), !0);
                  })
                  .map(function (e) {
                    return d(
                      d({}, e),
                      {},
                      {
                        can: t.info.some(function (r) {
                          return (
                            e.to.xml === r.to.xml && t.from.xml === r.from.xml
                          );
                        }),
                      }
                    );
                  })
                  .filter(function (e) {
                    return (!t.symbolTo || t.symbolTo === e.to.symbol) && e.can;
                  })
                  .sort(function (a, b) {
                    return a.to.positionOut > b.to.positionOut ? 1 : -1;
                  });
              },
              fromSymbolList: function () {
                var t = {};
                return (
                  this.info.forEach(function (e) {
                    return (t[e.from.symbol] = !0);
                  }),
                  Object.keys(t)
                );
              },
              toSymbolList: function () {
                var t = {};
                return (
                  this.info.forEach(function (e) {
                    return (t[e.to.symbol] = !0);
                  }),
                  Object.keys(t)
                );
              },
              matchedRoute: function () {
                var t = this;
                return (
                  this.info.find(function (e) {
                    return t.from.xml === e.from.xml && t.to.xml === e.to.xml;
                  }) || { from: {}, rate: {}, to: {} }
                );
              },
              instructions: function () {
                var t = this;
                return this.currentRoute
                  ? this.currentRoute.instructions
                      .filter(function (t) {
                        return "createOrder" === t.step;
                      })
                      .map(function (e) {
                        for (
                          var r = "", content = e.content.split("##"), i = 0;
                          i < content.length;
                          i++
                        )
                          2 === content[i].length
                            ? content[i] !== t.$i18n.locale && i++
                            : (r += content[i]);
                        return d(d({}, e), {}, { content: r });
                      })
                  : [];
              },
            }
          ),
          watch: {
            from: {
              deep: !0,
              handler: function () {
                this.changeCurrency();
              },
            },
            to: {
              deep: !0,
              handler: function () {
                this.changeCurrency();
              },
            },
          },
          created: function () {
            var e = this;
            return Object(n.a)(
              regeneratorRuntime.mark(function r() {
                var n, o, c, l, m, f;
                return regeneratorRuntime.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (r.next = 2), e.routes();
                      case 2:
                        r.next = 5;
                        break;
                      case 5:
                        if (
                          ((e.info && e.info[0]) ||
                            (e.errorRoutes = "Routes not found"),
                          e.info)
                        ) {
                          r.next = 8;
                          break;
                        }
                        return r.abrupt("return", 0);
                      case 8:
                        (n = String(e.$route.query.from || e.widgetFrom || "")),
                          (o = String(e.$route.query.to || e.widgetTo || "")),
                          (c = e.$route.query.amount || e.widgetAmount),
                          (n && o) ||
                            !e.fromList ||
                            !e.toList ||
                            ((e.from = e.fromList[0].from),
                            t.nextTick(function () {
                              var t = e.toList.find(function (t) {
                                return t.can;
                              });
                              t && (e.to = t.to);
                            })),
                          c &&
                            (c > 0 && (e.val1 = Math.abs(c)),
                            c < 0 && (e.val2 = Math.abs(c))),
                          (l = String(e.$route.query.city || "")),
                          (m = e.info.find(function (t) {
                            return (
                              t.from.xml === n ||
                              !(!l || 0 !== t.from.xml.indexOf(n + "_C_" + l))
                            );
                          })),
                          (f = e.info.find(function (t) {
                            return (
                              t.to.xml === o ||
                              !(!l || 0 !== t.to.xml.indexOf(o + "_C_" + l))
                            );
                          })),
                          m ||
                            (m = e.info.find(function (t) {
                              return 0 === t.from.xml.indexOf(o + "_C_");
                            })),
                          f ||
                            (f = e.info.find(function (t) {
                              return 0 === t.to.xml.indexOf(o + "_C_");
                            })),
                          (e.from =
                            n && m ? d({}, m.from) : e.fromList[0].from),
                          o && f
                            ? (e.to = d({}, f.to))
                            : t.nextTick(function () {
                                var t = e.toList.find(function (t) {
                                  return t.can;
                                });
                                t && (e.to = t.to);
                              });
                      case 20:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
          methods: d(
            d(
              d(
                {},
                Object(c.d)({
                  setLogin: "user/login",
                  changeStatusOpenKycModal: "user/changeStatusOpenKycModal",
                  setReg: "user/reg",
                })
              ),
              Object(c.b)({
                routes: "exchange/routes",
                createOrder: "exchange/createOrder",
              })
            ),
            {},
            {
              handleClick: function (t) {
                (this.queryData = []), (this.toValues.sbp = t);
              },
              handleInput: function (t) {
                var e = this;
                return Object(n.a)(
                  regeneratorRuntime.mark(function r() {
                    var n;
                    return regeneratorRuntime.wrap(function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            "sbp" == t.target.name &&
                              ((n = t.target.value.toLowerCase()),
                              (e.queryData = []),
                              n &&
                                e.bankNames
                                  .filter(function (t) {
                                    return t.toLowerCase().includes(n);
                                  })
                                  .forEach(function (t) {
                                    e.queryData.push(t);
                                  })),
                              console.log("Ввод данных:", t.target.value);
                          case 3:
                          case "end":
                            return r.stop();
                        }
                    }, r);
                  })
                )();
              },
              checkAndPassVerification: function (t, e) {
                var r = this;
                return Object(n.a)(
                  regeneratorRuntime.mark(function n() {
                    return regeneratorRuntime.wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            if (
                              (console.log("profile", r.profile, t),
                              t.requiredVerificationUser)
                            ) {
                              n.next = 3;
                              break;
                            }
                            return n.abrupt("return", !0);
                          case 3:
                            if (t.requiredVerificationUser.enable) {
                              n.next = 5;
                              break;
                            }
                            return n.abrupt("return", !0);
                          case 5:
                            if (
                              !(t.requiredVerificationUser.minAmount > 0) ||
                              e
                            ) {
                              n.next = 7;
                              break;
                            }
                            return n.abrupt("return", !0);
                          case 7:
                            if (r.profile) {
                              n.next = 10;
                              break;
                            }
                            return (
                              r.setLogin("startKyc"), n.abrupt("return", !1)
                            );
                          case 10:
                            if (r.profile.verificationPerson) {
                              n.next = 13;
                              break;
                            }
                            return (
                              r.changeStatusOpenKycModal(!0),
                              n.abrupt("return", !1)
                            );
                          case 13:
                            return n.abrupt("return", !0);
                          case 14:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                  })
                )();
              },
              setVal2: function () {
                (this.val2 = Number(this.currentRoute.rate.amount)),
                  this.correctFrom();
              },
              setMaxValueTo: function () {
                (this.val2 = Number(this.currentRoute.rate.amount)),
                  this.correctFrom();
              },
              correctFrom: function () {
                var e = this,
                  r = new l.BigNumber(this.rateOut).dividedBy(this.rateIn) || 1,
                  n = new l.BigNumber(this.val2 || 0)
                    .plus(this.currentRoute.rate.outFeeAmount)
                    .dividedBy(r)
                    .decimalPlaces(
                      void 0 !== this.currentRoute.from.decimal
                        ? this.currentRoute.from.decimal
                        : 2
                    );
                if (n.lte(0)) return (this.val1 = 0);
                new l.BigNumber(this.val2).isGreaterThan(
                  this.currentRoute.rate.amount
                )
                  ? (this.limitAmount = !0)
                  : (this.limitAmount = !1),
                  (this.sendAmount = "out"),
                  (this.val1 = n),
                  (this.minAmount =
                    n <
                    +this.fixedNumber(
                      "ceil",
                      this.currentRoute.from.decimal,
                      this.currentRoute.from.min
                    )),
                  (this.maxAmount =
                    !!Number(this.currentRoute.from.max) &&
                    n >
                      +this.fixedNumber(
                        "floor",
                        this.currentRoute.from.decimal,
                        this.currentRoute.from.max
                      )),
                  t.nextTick(function () {
                    (new l.BigNumber(e.rateOut).dividedBy(e.rateIn) || 1).eq(
                      r
                    ) || e.correctFrom();
                  });
              },
              create: function () {
                var t = this;
                return Object(n.a)(
                  regeneratorRuntime.mark(function e() {
                    var r, o, c, l, m, d, f;
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((r = t.currentRoute.routeId),
                              !(
                                t.currentRoute.from.fields.some(function (e) {
                                  return e.required && !t.fromValues[e._id];
                                }) &&
                                t.currentRoute.to.fields.some(function (e) {
                                  return e.required && !t.toValues[e._id];
                                }) &&
                                t.currentRoute.fields.some(function (e) {
                                  return e.required && !t.routeValues[e._id];
                                })
                              ))
                            ) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt(
                              "return",
                              t.$store.dispatch("notify/add", {
                                message: t.$t("page.main.messages.checkFields"),
                                type: "warning",
                              })
                            );
                          case 3:
                            if (t.agree) {
                              e.next = 5;
                              break;
                            }
                            return e.abrupt(
                              "return",
                              t.$store.dispatch("notify/add", {
                                message: t.$t("page.main.messages.mustBeAgree"),
                                type: "warning",
                              })
                            );
                          case 5:
                            if (t.agree_kyc) {
                              e.next = 7;
                              break;
                            }
                            return e.abrupt(
                              "return",
                              t.$store.dispatch("notify/add", {
                                message: t.$t("page.main.messages.mustBeAgree"),
                                type: "warning",
                              })
                            );
                          case 7:
                            return (
                              (o = Object.keys(t.fromValues).map(function (e) {
                                return { key: e, value: t.fromValues[e] };
                              })),
                              (c = Object.keys(t.toValues).map(function (e) {
                                return { key: e, value: t.toValues[e] };
                              })),
                              (l = Object.keys(t.routeValues).map(function (e) {
                                return { key: e, value: t.routeValues[e] };
                              })),
                              (m = {
                                routeId: r,
                                fromValues: o,
                                toValues: c,
                                routeValues: l,
                                agreement: !0,
                                captcha: t.captcha,
                                email: t.email,
                                lang: t.$root.$i18n.locale,
                                amount:
                                  "out" === t.sendAmount ? -t.val2 : t.val1,
                                vuexActionV2: !0,
                              }),
                              (e.next = 13),
                              t.checkAndPassVerification(t.currentRoute)
                            );
                          case 13:
                            if (e.sent) {
                              e.next = 16;
                              break;
                            }
                            return e.abrupt("return");
                          case 16:
                            return (
                              (e.next = 18),
                              t.createOrder(m).catch(
                                (function () {
                                  var e = Object(n.a)(
                                    regeneratorRuntime.mark(function e(r) {
                                      return regeneratorRuntime.wrap(function (
                                        e
                                      ) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              if (
                                                5001670807585394 !== r.errorCode
                                              ) {
                                                e.next = 4;
                                                break;
                                              }
                                              return (
                                                (e.next = 3),
                                                t.checkAndPassVerification(
                                                  t.currentRoute,
                                                  !0
                                                )
                                              );
                                            case 3:
                                              return e.abrupt("return");
                                            case 4:
                                              0x5b0a2eb8cfafd === r.errorCode &&
                                                t.$refs.recaptcha &&
                                                t.$refs.recaptcha.reset &&
                                                t.$refs.recaptcha.reset(),
                                                t.$swal("", r.message, "error");
                                            case 6:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e);
                                    })
                                  );
                                  return function (t) {
                                    return e.apply(this, arguments);
                                  };
                                })()
                              )
                            );
                          case 18:
                            (d = e.sent) &&
                              (t.profile ||
                                ((f = JSON.parse(
                                  localStorage.getItem("orders")
                                ))
                                  ? f.push(d)
                                  : (f = [d]),
                                localStorage.setItem(
                                  "orders",
                                  JSON.stringify(f)
                                )),
                              t.$router.push(
                                t.localePath(
                                  "/order/"
                                    .concat(d.uid, "/")
                                    .concat(d.secret, "/")
                                )
                              ));
                          case 20:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              correctTo: function () {
                if (
                  !(
                    this.currentRoute &&
                    this.currentRoute.rate &&
                    this.currentRoute.rate.out &&
                    this.currentRoute.rate.in
                  )
                )
                  return (this.val2 = 0), null;
                var t =
                    new l.BigNumber(this.rateOut).dividedBy(this.rateIn) || 1,
                  e = Object(l.BigNumber)(this.val1 || 0)
                    .multipliedBy(t)
                    .minus(this.currentRoute.rate.outFeeAmount)
                    .decimalPlaces(
                      void 0 !== this.currentRoute.to.decimal
                        ? this.currentRoute.to.decimal
                        : 2
                    );
                if (e.lte(0)) return (this.val2 = 0);
                e.isGreaterThan(this.currentRoute.rate.amount)
                  ? (this.limitAmount = !0)
                  : (this.limitAmount = !1),
                  (this.sendAmount = "in"),
                  (this.val2 = e),
                  (this.minAmount =
                    this.val1 <
                    +this.fixedNumber(
                      "ceil",
                      this.currentRoute.from.decimal,
                      this.currentRoute.from.min
                    )),
                  (this.maxAmount =
                    !!Number(this.currentRoute.from.max) &&
                    this.val1 >
                      +this.fixedNumber(
                        "floor",
                        this.currentRoute.from.decimal,
                        this.currentRoute.from.max
                      ));
              },
              changeCurrency: function () {
                var e = this;
                return Object(n.a)(
                  regeneratorRuntime.mark(function r() {
                    var n, o;
                    return regeneratorRuntime.wrap(function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            if (
                              String(e.loadRouteId) !==
                              String(e.matchedRoute.routeId)
                            ) {
                              r.next = 2;
                              break;
                            }
                            return r.abrupt("return");
                          case 2:
                            if (
                              ((e.loadRouteId = String(e.matchedRoute.routeId)),
                              (n = {}),
                              e.from.xml && (n.from = e.from.xml),
                              e.to.xml && (n.to = e.to.xml),
                              e.isWidget || e.$router.push({ query: n }),
                              e.matchedRoute && e.matchedRoute.routeId)
                            ) {
                              r.next = 9;
                              break;
                            }
                            return r.abrupt("return", !1);
                          case 9:
                            return (
                              (e.loadRouteGetOne = !1),
                              (e.errorloadRouteGetOne = !1),
                              (r.next = 13),
                              e.$rest
                                .api("GET:public/exchanger/route/get/one", {
                                  id: e.matchedRoute.routeId,
                                  lang: e.$i18n.locale,
                                })
                                .catch(function (t) {
                                  return (
                                    (e.errorloadRouteGetOne = !0),
                                    (e.loadRouteGetOne = !0),
                                    (e.loadRouteId = String("")),
                                    Promise.reject(t)
                                  );
                                })
                            );
                          case 13:
                            (o = r.sent).success &&
                              (e.currentRoute = o.data.route),
                              t.nextTick(function () {
                                (e.loadRouteGetOne = !0),
                                  (e.errorloadRouteGetOne = !1);
                              }),
                              e.correctTo();
                          case 17:
                          case "end":
                            return r.stop();
                        }
                    }, r);
                  })
                )();
              },
              fixedNumber: function (t, e, r) {
                var n = Number(Math.pow(10, e)),
                  o = 0;
                return (
                  (o =
                    "floor" === t || "ceil" === t
                      ? Math.floor(r * n) / n
                      : Number(Number(r).toFixed(e))),
                  e <= 2 && e > 0
                    ? (o = o.toFixed(2))
                    : 0 === e && (o = o.toFixed(0)),
                  o
                );
              },
              reverseCurrency: function () {
                var t = this.from,
                  e = this.to;
                this.info.find(function (r) {
                  return r.from.xml === e.xml && r.to.xml === t.xml;
                }) && ((this.from = e), (this.to = t), this.$nextTick());
              },
            }
          ),
        };
      }).call(this, r(92));
    },
    538: function (t, e, r) {
      t.exports = r.p + "img/exchange.81a2566.svg";
    },
    540: function (t, e) {
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEMzLjU4NCAwIDAgMy41ODQgMCA4QzAgMTIuNDE2IDMuNTg0IDE2IDggMTZDMTIuNDE2IDE2IDE2IDEyLjQxNiAxNiA4QzE2IDMuNTg0IDEyLjQxNiAwIDggMFpNOCAxNC40QzQuNDcyIDE0LjQgMS42IDExLjUyOCAxLjYgOEMxLjYgNC40NzIgNC40NzIgMS42IDggMS42QzExLjUyOCAxLjYgMTQuNCA0LjQ3MiAxNC40IDhDMTQuNCAxMS41MjggMTEuNTI4IDE0LjQgOCAxNC40Wk0xMS4xMDQgNS4wMzJMNi40IDkuNzM2TDQuODk2IDguMjMyQzQuNTg0IDcuOTIgNC4wOCA3LjkyIDMuNzY4IDguMjMyQzMuNDU2IDguNTQ0IDMuNDU2IDkuMDQ4IDMuNzY4IDkuMzZMNS44NCAxMS40MzJDNi4xNTIgMTEuNzQ0IDYuNjU2IDExLjc0NCA2Ljk2OCAxMS40MzJMMTIuMjQgNi4xNkMxMi41NTIgNS44NDggMTIuNTUyIDUuMzQ0IDEyLjI0IDUuMDMyQzExLjkyOCA0LjcyIDExLjQxNiA0LjcyIDExLjEwNCA1LjAzMloiIGZpbGw9IiM1YzhmMWIiLz4KPC9zdmc+Cg==";
    },
    541: function (t, e, r) {
      var content = r(579);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(42).default)("1c3b5814", content, !0, { sourceMap: !1 });
    },
    577: function (t, e, r) {
      "use strict";
      var n = r(5),
        o = r(94).findIndex,
        c = r(158),
        l = "findIndex",
        m = !0;
      l in [] &&
        Array(1)[l](function () {
          m = !1;
        }),
        n(
          { target: "Array", proto: !0, forced: m },
          {
            findIndex: function (t) {
              return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
            },
          }
        ),
        c(l);
    },
    578: function (t, e, r) {
      "use strict";
      r(541);
    },
    579: function (t, e, r) {
      var n = r(41)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        '.dropper img[data-v-22d69c5e]{height:25px;margin:5px;width:25px}#autocomplete-container[data-v-22d69c5e]{background:#fff;border:1px solid hsla(0,0%,50%,.361);border-radius:5px;position:absolute;top:110px;width:100%;z-index:10}.autocomplete-list[data-v-22d69c5e]{background-color:#f1f1f1;border:1px solid #d4d4d4;border-top:none;max-height:200px;overflow-y:auto;position:absolute;z-index:99}.autocomplete-item[data-v-22d69c5e]{cursor:pointer;padding:10px}.autocomplete-item[data-v-22d69c5e]:hover{background-color:#e9e9e9}.dropper li[data-v-22d69c5e]{align-items:center;cursor:pointer;display:flex;font-size:15px}.dropper li[data-v-22d69c5e]:hover{background:rgba(0,150,255,.1)}.dropper[data-v-22d69c5e],.dropper .bp-dropdown__btn[data-v-22d69c5e]{width:100%}.help_block[data-v-22d69c5e]{text-align:center}.help_block h3[data-v-22d69c5e]{color:#656565;font-family:"Roboto-Regular";font-size:20px;font-weight:400;margin:10px 0}.help_block p[data-v-22d69c5e]{color:#a0a3b1;font-size:14px}.help_block .arrow_icon[data-v-22d69c5e]{display:block;padding:20px}.help_block .file_icon[data-v-22d69c5e]{display:block;padding-bottom:10px;padding-top:30px}',
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    731: function (t, e, r) {
      "use strict";
      r.r(e);
      r(25),
        r(511),
        r(112),
        r(311),
        r(40),
        r(15),
        r(6),
        r(24),
        r(70),
        r(50),
        r(28);
      var n = [
          function () {
            var t = this._self._c;
            return t("span", { staticClass: "file_icon" }, [
              t("img", { attrs: { src: r(538), alt: "Money" } }),
            ]);
          },
          function () {
            var t = this._self._c;
            return t("span", { staticClass: "arrow_icon" }, [
              t("img", { attrs: { src: r(512), alt: "" } }),
            ]);
          },
          function () {
            var t = this._self._c;
            return t("span", { staticClass: "data--img" }, [
              t("img", { attrs: { src: r(512), alt: "" } }),
            ]);
          },
          function () {
            var t = this._self._c;
            return t("span", { staticClass: "data-down data--img" }, [
              t("img", { attrs: { src: r(512), alt: "" } }),
            ]);
          },
        ],
        o = r(532).a,
        c = (r(578), r(7)),
        component = Object(c.a)(
          o,
          function () {
            var t = this,
              e = t._self._c;
            return t.info
              ? e("form", { staticClass: "form", attrs: { action: "#" } }, [
                  e("div", { staticClass: "form-v2-wr" }, [
                    e("div", { staticClass: "form-v2" }, [
                      e("div", { staticClass: "receive" }, [
                        e("div", { staticClass: "padding-block" }, [
                          e("div", { staticClass: "form--title" }, [
                            e("h4", [t._v(t._s(t.$t("page.main.from.title")))]),
                            t._v(" "),
                            t.currentRoute && t.currentRoute.from
                              ? e("div", [
                                  t.currentRoute.from.min &&
                                  "0" !== t.currentRoute.from.min
                                    ? e(
                                        "p",
                                        {
                                          style: {
                                            color: t.minAmount ? "red" : "",
                                          },
                                          on: {
                                            click: function (e) {
                                              (t.val1 = t.fixedNumber(
                                                "ceil",
                                                t.currentRoute.from.decimal,
                                                t.currentRoute.from.min
                                              )),
                                                t.correctTo();
                                            },
                                          },
                                        },
                                        [
                                          t._v(
                                            "\n                  " +
                                              t._s(
                                                t.$t("page.main.from.min") + " "
                                              ) +
                                              "\n                  "
                                          ),
                                          e("span", [
                                            t._v(
                                              t._s(
                                                t.fixedNumber(
                                                  "ceil",
                                                  t.currentRoute.from.decimal,
                                                  t.currentRoute.from.min
                                                )
                                              ) + " "
                                            ),
                                          ]),
                                        ]
                                      )
                                    : t._e(),
                                  t._v(" "),

                                  e("img", { attrs: { src: r(512), alt: "" } }),
                                ])
                              : t._e(),
                          ]),
                          t._v(" "),
                          e("div", { staticClass: "form-v2--input" }, [
                            e("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: t.val1,
                                  expression: "val1",
                                },
                              ],
                              style: {
                                color: t.minAmount || t.maxAmount ? "red" : "",
                              },
                              attrs: { type: "number", placeholder: "0.00" },
                              domProps: { value: t.val1 },
                              on: {
                                input: [
                                  function (e) {
                                    e.target.composing ||
                                      (t.val1 = e.target.value);
                                  },
                                  t.correctTo,
                                ],
                              },
                            }),
                            t._v(" "),
                            t.from.image
                              ? e("img", {
                                  attrs: {
                                    alt: t.from.name,
                                    src: t.$rest.urlImg(t.from.image).small,
                                  },
                                })
                              : t._e(),
                          ]),
                        ]),
                        t._v(" "),
                        e(
                          "div",
                          {
                            staticClass:
                              "form-v2__currency--list padding-block",
                          },
                          [
                            e(
                              "ul",
                              t._l(t.fromListNoCity, function (n) {
                                return e(
                                  "li",
                                  {
                                    key: n.routeId,
                                    on: {
                                      click: function (e) {
                                        t.from = n.from;
                                      },
                                    },
                                  },
                                  [
                                    e(
                                      "a",
                                      {
                                        class: {
                                          active:
                                            t.from &&
                                            n.from &&
                                            t.from.xml === n.from.xml,
                                        },
                                      },
                                      [
                                        e(
                                          "span",
                                          { staticClass: "cur--logo" },
                                          [
                                            e("img", {
                                              attrs: {
                                                alt: n.from.name,
                                                src: t.$rest.urlImg(
                                                  n.from.image
                                                ).small,
                                              },
                                            }),
                                          ]
                                        ),
                                        t._v(" "),
                                        e("p", [
                                          t._v(
                                            t._s(
                                              n.from.name + " " + n.from.symbol
                                            )
                                          ),
                                        ]),
                                        t._v(" "),
                                        e(
                                          "span",
                                          { staticClass: "cur--check" },
                                          [
                                            t.from &&
                                            n.from &&
                                            t.from.xml === n.from.xml
                                              ? e("img", {
                                                  attrs: {
                                                    src: r(540),
                                                    alt: "+",
                                                  },
                                                })
                                              : t._e(),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                );
                              }),
                              0
                            ),
                          ]
                        ),
                        t._v(" "),
                        e(
                          "button",
                          {
                            staticClass: "btn-reverse",
                            attrs: { type: "button" },
                            on: {
                              click: function (e) {
                                return e.preventDefault(), t.reverseCurrency();
                              },
                            },
                          },
                          [
                            e(
                              "svg",
                              {
                                attrs: {
                                  width: "18",
                                  height: "16",
                                  viewBox: "0 0 18 16",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                },
                              },
                              [
                                e("path", {
                                  attrs: {
                                    d: "M10.8672 1.61377V14.3862L16.0253 9.22816",
                                    fill: "none",
                                    "stroke-width": "2",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                  },
                                }),
                                t._v(" "),
                                e("path", {
                                  attrs: {
                                    d: "M7.125 14.3862V1.61377L1.96693 6.77184",
                                    fill: "none",
                                    "stroke-width": "2",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                  },
                                }),
                              ]
                            ),
                          ]
                        ),
                      ]),
                      t._v(" "),
                      e("div", { staticClass: "give" }, [
                        e("div", { staticClass: "padding-block" }, [
                          e("div", { staticClass: "form--title" }, [
                            e("h4", [t._v(t._s(t.$t("page.main.to.title")))]),
                            t._v(" "),
                            e("div", [
                              t.currentRoute &&
                              t.currentRoute.rate &&
                              t.currentRoute.rate.amount
                                ? e(
                                    "p",
                                    {
                                      style: {
                                        color: t.limitAmount ? "red" : "",
                                      },
                                    },

                                  )
                                : t._e(),
                              t._v(" "),
                            ]),
                          ]),
                          t._v(" "),
                          t.matchedRoute.routeId
                            ? e("div", { staticClass: "form-v2--input" }, [
                                e("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: t.val2,
                                      expression: "val2",
                                    },
                                  ],
                                  style: { color: t.limitAmount ? "red" : "" },
                                  attrs: {
                                    type: "number",
                                    placeholder: "0.00",
                                  },
                                  domProps: { value: t.val2 },
                                  on: {
                                    input: [
                                      function (e) {
                                        e.target.composing ||
                                          (t.val2 = e.target.value);
                                      },
                                      t.correctFrom,
                                    ],
                                  },
                                }),
                                t._v(" "),
                                t.to.image
                                  ? e("img", {
                                      attrs: {
                                        alt: t.to.name,
                                        src: t.$rest.urlImg(t.to.image).small,
                                      },
                                    })
                                  : t._e(),
                              ])
                            : e("div", { staticClass: "form-v2--input" }, [
                                e("input", {
                                  attrs: {
                                    placeholder: "0.00",
                                    disabled: "disabled",
                                  },
                                }),
                              ]),
                        ]),
                        t._v(" "),
                        e(
                          "div",
                          {
                            staticClass:
                              "form-v2__currency--list padding-block",
                          },
                          [
                            e(
                              "ul",
                              t._l(t.toListNoCity, function (n) {
                                return e(
                                  "li",
                                  {
                                    key: n.routeId,
                                    on: {
                                      click: function (e) {
                                        t.to = n.to;
                                      },
                                    },
                                  },
                                  [
                                    e(
                                      "a",
                                      {
                                        class: {
                                          active:
                                            t.to &&
                                            n.to &&
                                            t.to.xml === n.to.xml,
                                        },
                                      },
                                      [
                                        e(
                                          "span",
                                          { staticClass: "cur--logo" },
                                          [
                                            e("img", {
                                              attrs: {
                                                alt: n.to.name,
                                                src: t.$rest.urlImg(n.to.image)
                                                  .small,
                                              },
                                            }),
                                          ]
                                        ),
                                        t._v(" "),
                                        e("p", [
                                          t._v(
                                            "\n                    " +
                                              t._s(
                                                n.to.name + " " + n.to.symbol
                                              ) +
                                              "\n                    "
                                          ),
                                          e(
                                            "span",
                                            { staticClass: "cur--sum" },
                                            [
                                              t._v(
                                                " " +
                                                  t._s(n.rate.amount) +
                                                  " " +
                                                  t._s(n.to.symbol)
                                              ),
                                            ]
                                          ),
                                        ]),
                                        t._v(" "),
                                        e(
                                          "span",
                                          { staticClass: "cur--check" },
                                          [
                                            t.to &&
                                            n.to &&
                                            t.to.xml === n.to.xml
                                              ? e("img", {
                                                  attrs: {
                                                    src: r(540),
                                                    alt: "+",
                                                  },
                                                })
                                              : t._e(),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                );
                              }),
                              0
                            ),
                          ]
                        ),
                      ]),
                      t._v(" "),
                      t.matchedRoute.routeId
                        ? t.loadRouteGetOne
                          ? t.errorloadRouteGetOne
                            ? e("div", { staticClass: "dataInput" }, [
                                e("div", { staticClass: "form--title" }, [
                                  e("h4", [
                                    t._v(t._s(t.$t("page.main.details.title"))),
                                  ]),
                                  t._v(" "),
                                  e("img", { attrs: { src: r(512), alt: "" } }),
                                ]),
                                t._v(" "),
                                e("div", [
                                  e("div", { staticClass: "help_block" }, [
                                    e("h3", [
                                      t._v(
                                        t._s(
                                          t.$t("page.main.details.errorRoute")
                                        )
                                      ),
                                    ]),
                                    t._v(" "),
                                    e("p", [
                                      t._v(
                                        t._s(
                                          t.$t("page.main.details.error_p_1")
                                        )
                                      ),
                                    ]),
                                    t._v(" "),
                                    e("p", [
                                      t._v(
                                        t._s(
                                          t.$t("page.main.details.error_p_2")
                                        )
                                      ),
                                    ]),
                                  ]),
                                ]),
                              ])
                            : e(
                                "div",
                                { staticClass: "dataInput" },
                                [
                                  e("div", { staticClass: "form--title" }, [
                                    e("h4", [
                                      t._v(
                                        t._s(t.$t("page.main.details.title"))
                                      ),
                                    ]),
                                    t._v(" "),
                                    e(
                                      "div",
                                      {
                                        staticStyle: {
                                          "justify-content": "start",
                                          "align-items": "flex-start",
                                          "flex-direction": "column",
                                        },
                                      },
                                      [
                                        e("p", [
                                          t._v(
                                            "\n                " +
                                              t._s(t.$t("page.main.to.rate")) +
                                              "\n                "
                                          ),
                                          t.rateIn > 20
                                            ? e("span", [
                                                t._v(
                                                  t._s(
                                                    Number(
                                                      (+t.rateIn || 1).toFixed(
                                                        2
                                                      )
                                                    )
                                                  ) + ":"
                                                ),
                                              ])
                                            : t.rateIn > 10
                                            ? e("span", [
                                                t._v(
                                                  "\n                  " +
                                                    t._s(
                                                      Number(
                                                        (
                                                          +t.rateIn || 1
                                                        ).toFixed(3)
                                                      )
                                                    ) +
                                                    ":\n                "
                                                ),
                                              ])
                                            : e("span", [
                                                t._v(
                                                  t._s(
                                                    Number(
                                                      (+t.rateIn || 1).toFixed(
                                                        4
                                                      )
                                                    )
                                                  ) + ":"
                                                ),
                                              ]),
                                          t._v(" "),
                                          t.rateOut > 20
                                            ? e("span", [
                                                t._v(
                                                  t._s(
                                                    Number(
                                                      (+t.rateOut || 1).toFixed(
                                                        2
                                                      )
                                                    )
                                                  )
                                                ),
                                              ])
                                            : t.rateOut > 10
                                            ? e("span", [
                                                t._v(
                                                  "\n                  " +
                                                    t._s(
                                                      Number(
                                                        (
                                                          +t.rateOut || 1
                                                        ).toFixed(3)
                                                      )
                                                    ) +
                                                    "\n                "
                                                ),
                                              ])
                                            : e("span", [
                                                t._v(
                                                  t._s(
                                                    Number(
                                                      (+t.rateOut || 1).toFixed(
                                                        4
                                                      )
                                                    )
                                                  )
                                                ),
                                              ]),
                                        ]),
                                        t._v(" "),
                                        this.currentRoute.rate.outFeeAmount
                                          ? e("p", [
                                              t._v(
                                                "\n                " +
                                                  t._s(
                                                    t.$t("page.main.to.fee")
                                                  ) +
                                                  "\n                "
                                              ),
                                              e("span", [
                                                t._v(
                                                  " -" +
                                                    t._s(
                                                      this.currentRoute.rate
                                                        .outFeeAmount
                                                    ) +
                                                    " " +
                                                    t._s(
                                                      t.currentRoute.to.symbol
                                                    )
                                                ),
                                              ]),
                                            ])
                                          : t._e(),
                                      ]
                                    ),
                                  ]),
                                  t._v(" "),
                                  e("div", { staticClass: "dataInput--info" }, [
                                    e("ul", [
                                      e("li", [
                                        e(
                                          "div",
                                          {
                                            staticClass:
                                              "dataInput--info__item",
                                          },
                                          [
                                            t.currentRoute.from.image
                                              ? e(
                                                  "span",
                                                  { staticClass: "data--logo" },
                                                  [
                                                    e("img", {
                                                      attrs: {
                                                        src: t.$rest.urlImg(
                                                          t.currentRoute.from
                                                            .image
                                                        ).small,
                                                        alt: "",
                                                      },
                                                    }),
                                                  ]
                                                )
                                              : t._e(),
                                            t._v(" "),
                                            e(
                                              "p",
                                              { staticClass: "data--name" },
                                              [
                                                t._v(
                                                  "\n                    " +
                                                    t._s(
                                                      t.currentRoute.from.name
                                                    ) +
                                                    "\n                    "
                                                ),
                                                e(
                                                  "span",
                                                  { staticClass: "data--sum" },
                                                  [
                                                    t._v(
                                                      t._s(t.val1 || 0) +
                                                        " " +
                                                        t._s(
                                                          t.currentRoute.from
                                                            .symbol
                                                        )
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                            t._v(" "),
                                            t._m(2),
                                          ]
                                        ),
                                      ]),
                                      t._v(" "),
                                      e("li", [
                                        e(
                                          "div",
                                          {
                                            staticClass:
                                              "dataInput--info__item",
                                          },
                                          [
                                            t.currentRoute.to.image
                                              ? e(
                                                  "span",
                                                  { staticClass: "data--logo" },
                                                  [
                                                    e("img", {
                                                      attrs: {
                                                        src: t.$rest.urlImg(
                                                          t.currentRoute.to
                                                            .image
                                                        ).small,
                                                        alt: "",
                                                      },
                                                    }),
                                                  ]
                                                )
                                              : t._e(),
                                            t._v(" "),
                                            e(
                                              "p",
                                              { staticClass: "data--name" },
                                              [
                                                t._v(
                                                  "\n                    " +
                                                    t._s(
                                                      t.currentRoute.to.name
                                                    ) +
                                                    "\n                    "
                                                ),
                                                e(
                                                  "span",
                                                  { staticClass: "data--sum" },
                                                  [
                                                    t._v(
                                                      t._s(t.val2 || 0) +
                                                        " " +
                                                        t._s(
                                                          t.currentRoute.to
                                                            .symbol
                                                        )
                                                    ),
                                                  ]
                                                ),
                                              ]
                                            ),
                                            t._v(" "),
                                            t._m(3),
                                          ]
                                        ),
                                      ]),
                                    ]),
                                  ]),
                                  t._v(" "),
                                  t.fromCities && t.fromCities.length
                                    ? e(
                                        "div",
                                        {
                                          staticClass:
                                            "form-v2--input-enter-form",
                                        },
                                        [
                                          e(
                                            "select",
                                            {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: t.from,
                                                  expression: "from",
                                                },
                                              ],
                                              attrs: {
                                                placeholder: "From city",
                                              },
                                              on: {
                                                change: function (e) {
                                                  var r = Array.prototype.filter
                                                    .call(
                                                      e.target.options,
                                                      function (t) {
                                                        return t.selected;
                                                      }
                                                    )
                                                    .map(function (t) {
                                                      return "_value" in t
                                                        ? t._value
                                                        : t.value;
                                                    });
                                                  t.from = e.target.multiple
                                                    ? r
                                                    : r[0];
                                                },
                                              },
                                            },
                                            t._l(t.fromCities, function (r) {
                                              return e(
                                                "option",
                                                {
                                                  key: r.xml,
                                                  domProps: { value: r },
                                                },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(r.cityName) +
                                                      "\n              "
                                                  ),
                                                ]
                                              );
                                            }),
                                            0
                                          ),
                                        ]
                                      )
                                    : t._e(),
                                  t._v(" "),
                                  t.toCities && t.toCities.length
                                    ? e(
                                        "div",
                                        {
                                          staticClass:
                                            "form-v2--input-enter-form",
                                        },
                                        [
                                          e(
                                            "select",
                                            {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: t.to,
                                                  expression: "to",
                                                },
                                              ],
                                              attrs: {
                                                placeholder: "From city",
                                              },
                                              on: {
                                                change: function (e) {
                                                  var r = Array.prototype.filter
                                                    .call(
                                                      e.target.options,
                                                      function (t) {
                                                        return t.selected;
                                                      }
                                                    )
                                                    .map(function (t) {
                                                      return "_value" in t
                                                        ? t._value
                                                        : t.value;
                                                    });
                                                  t.to = e.target.multiple
                                                    ? r
                                                    : r[0];
                                                },
                                              },
                                            },
                                            t._l(t.toCities, function (r) {
                                              return e(
                                                "option",
                                                {
                                                  key: r.xml,
                                                  domProps: { value: r },
                                                },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(r.cityName) +
                                                      "\n              "
                                                  ),
                                                ]
                                              );
                                            }),
                                            0
                                          ),
                                        ]
                                      )
                                    : t._e(),
                                  t._v(" "),
                                  t.currentRoute.requiredVerificationUser &&
                                  t.currentRoute.requiredVerificationUser.enable
                                    ? e(
                                        "p",
                                        {
                                          staticStyle: {
                                            color: "#4bb56b",
                                            "padding-bottom": "10px",
                                          },
                                        },
                                        [
                                          t._v(
                                            "\n            " +
                                              t._s(
                                                t.$t(
                                                  "page.main.details.needVerifPerson"
                                                ) + " "
                                              ) +
                                              "\n          "
                                          ),
                                        ]
                                      )
                                    : t._e(),
                                  t._v(" "),
                                  t.currentRoute.verification
                                    ? e(
                                        "p",
                                        {
                                          staticStyle: {
                                            color: "#4bb56b",
                                            "padding-bottom": "10px",
                                          },
                                        },
                                        [
                                          t._v(
                                            "\n            " +
                                              t._s(
                                                t.$t(
                                                  "page.main.details.needVerifPerson"
                                                ) + " "
                                              ) +
                                              "\n          "
                                          ),
                                        ]
                                      )
                                    : t._e(),
                                  t._v(" "),
                                  t.currentRoute.from.verification
                                    ? e(
                                        "p",
                                        {
                                          staticStyle: {
                                            color: "#4bb56b",
                                            "padding-bottom": "10px",
                                          },
                                        },
                                        [
                                          t._v(
                                            "\n            " +
                                              t._s(
                                                t.$t(
                                                  "page.main.details.needVerifCurrency"
                                                ) + " "
                                              ) +
                                              "\n            " +
                                              t._s(
                                                t.currentRoute.from.name +
                                                  " " +
                                                  t.currentRoute.from.symbol
                                              ) +
                                              "\n          "
                                          ),
                                        ]
                                      )
                                    : t._e(),
                                  t._v(" "),
                                  t.currentRoute.to.verificationPayout
                                    ? e(
                                        "p",
                                        {
                                          staticStyle: {
                                            color: "#4bb56b",
                                            "padding-bottom": "10px",
                                          },
                                        },
                                        [
                                          t._v(
                                            "\n            " +
                                              t._s(
                                                t.$t(
                                                  "page.main.details.needVerifCurrency"
                                                ) + " "
                                              ) +
                                              "\n            " +
                                              t._s(
                                                t.currentRoute.to.name +
                                                  " " +
                                                  t.currentRoute.to.symbol
                                              ) +
                                              "\n          "
                                          ),
                                        ]
                                      )
                                    : t._e(),
                                  t._v(" "),
                                  t._l(t.instructions, function (r) {
                                    return e("p", {
                                      key: r._id,
                                      staticClass: "form-attention",
                                      domProps: { innerHTML: t._s(r.content) },
                                    });
                                  }),
                                  t._v(" "),
                                  e(
                                    "div",
                                    {
                                      staticClass: "dataInput--inputs",
                                      staticStyle: { position: "relative" },
                                    },
                                    [
                                      e(
                                        "h4",
                                        { staticClass: "dataInput--titleSub" },
                                        [
                                          t._v(
                                            "\n              " +
                                              t._s(
                                                t.$t(
                                                  "page.main.details.enter_form"
                                                )
                                              ) +
                                              "\n            "
                                          ),
                                        ]
                                      ),
                                      t._v(" "),
                                      t._l(
                                        t.currentRoute.from.fields,
                                        function (r) {
                                          return e(
                                            "div",
                                            {
                                              key: r.id,
                                              staticClass:
                                                "form-v2--input-enter-form",
                                            },
                                            [
                                              e("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: t.fromValues[r._id],
                                                    expression:
                                                      "fromValues[field._id]",
                                                  },
                                                ],
                                                style: {
                                                  border:
                                                    !t.fromValues[r._id] ||
                                                    t.fromValues[r._id].match(
                                                      r.regexp
                                                    )
                                                      ? ""
                                                      : "1px solid red",
                                                },
                                                attrs: {
                                                  placeholder: r.name,
                                                  type: "text",
                                                },
                                                domProps: {
                                                  value: t.fromValues[r._id],
                                                },
                                                on: {
                                                  input: function (e) {
                                                    e.target.composing ||
                                                      t.$set(
                                                        t.fromValues,
                                                        r._id,
                                                        e.target.value
                                                      );
                                                  },
                                                },
                                              }),
                                              t._v(" "),
                                              e("img", {
                                                attrs: {
                                                  src: t.$rest.urlImg(
                                                    t.currentRoute.from.image
                                                  ).small,
                                                  alt: "wallet",
                                                },
                                              }),
                                            ]
                                          );
                                        }
                                      ),
                                      t._v(" "),
                                      t.queryData.length > 0
                                        ? e(
                                            "div",
                                            {
                                              attrs: {
                                                id: "autocomplete-container",
                                              },
                                            },
                                            t._l(t.queryData, function (r, n) {
                                              return e(
                                                "div",
                                                {
                                                  key: n,
                                                  staticClass:
                                                    "autocomplete-item",
                                                  on: {
                                                    click: function (e) {
                                                      return t.handleClick(r);
                                                    },
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    "\n                      " +
                                                      t._s(r) +
                                                      "\n                    "
                                                  ),
                                                ]
                                              );
                                            }),
                                            0
                                          )
                                        : t._e(),
                                      t._v(" "),
                                      t._l(
                                        t.currentRoute.to.fields,
                                        function (r) {
                                          return e(
                                            "div",
                                            {
                                              key: r.id,
                                              staticClass:
                                                "form-v2--input-enter-form",
                                            },
                                            [
                                              e("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: t.toValues[r._id],
                                                    expression:
                                                      "toValues[field._id]",
                                                  },
                                                ],
                                                style: {
                                                  border:
                                                    !t.toValues[r._id] ||
                                                    t.toValues[r._id].match(
                                                      r.regexp
                                                    ) ||
                                                    "sbp" !== r._id
                                                      ? ""
                                                      : "1px solid red",
                                                },
                                                attrs: {
                                                  placeholder: r.name,
                                                  name: r._id,
                                                  type: "text",
                                                },
                                                domProps: {
                                                  value: t.toValues[r._id],
                                                },
                                                on: {
                                                  input: [
                                                    function (e) {
                                                      e.target.composing ||
                                                        t.$set(
                                                          t.toValues,
                                                          r._id,
                                                          e.target.value
                                                        );
                                                    },
                                                    t.handleInput,
                                                  ],
                                                },
                                              }),
                                              t._v(" "),
                                              e("img", {
                                                attrs: {
                                                  src: t.$rest.urlImg(
                                                    t.currentRoute.to.image
                                                  ).small,
                                                  alt: "wallet",
                                                },
                                              }),
                                            ]
                                          );
                                        }
                                      ),
                                      t._v(" "),
                                      t._l(t.currentRoute.fields, function (r) {
                                        return e(
                                          "div",
                                          {
                                            key: r.id,
                                            staticClass:
                                              "form-v2--input-enter-form",
                                          },
                                          [
                                            e("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: t.routeValues[r._id],
                                                  expression:
                                                    "routeValues[field._id]",
                                                },
                                              ],
                                              style: {
                                                border:
                                                  !t.routeValues[r._id] ||
                                                  t.routeValues[r._id].match(
                                                    r.regexp
                                                  )
                                                    ? ""
                                                    : "1px solid red",
                                              },
                                              attrs: {
                                                placeholder: r.name,
                                                type: "text",
                                              },
                                              domProps: {
                                                value: t.routeValues[r._id],
                                              },
                                              on: {
                                                input: function (e) {
                                                  e.target.composing ||
                                                    t.$set(
                                                      t.routeValues,
                                                      r._id,
                                                      e.target.value
                                                    );
                                                },
                                              },
                                            }),
                                            t._v(" "),
                                            e("img"),
                                          ]
                                        );
                                      }),
                                      t._v(" "),
                                      t.captchaSettings.sitekey &&
                                      "recaptcha_v2" ===
                                        t.captchaSettings.module &&
                                      t.captchaSettings.requiredForCreateOrder
                                        ? e(
                                            "div",
                                            {
                                              staticStyle: {
                                                "margin-bottom": "15px",
                                                display: "flex",
                                                "justify-content": "center",
                                              },
                                            },
                                            [
                                              e("recaptcha", {
                                                ref: "recaptcha",
                                                attrs: {
                                                  sitekey:
                                                    t.captchaSettings.sitekey,
                                                  "load-recaptcha-script": !0,
                                                  language:
                                                    t.$root.$i18n.locale,
                                                },
                                                on: {
                                                  verify: function (e) {
                                                    return (t.captcha = e);
                                                  },
                                                },
                                              }),
                                            ],
                                            1
                                          )
                                        : t._e(),
                                      t._v(" "),
                                      e(
                                        "div",
                                        { staticClass: "dataInput--label" },
                                        [
                                          e("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: t.agree,
                                                expression: "agree",
                                              },
                                            ],
                                            attrs: {
                                              id: "cbx",
                                              type: "checkbox",
                                            },
                                            domProps: {
                                              checked: Array.isArray(t.agree)
                                                ? t._i(t.agree, null) > -1
                                                : t.agree,
                                            },
                                            on: {
                                              change: function (e) {
                                                var r = t.agree,
                                                  n = e.target,
                                                  o = !!n.checked;
                                                if (Array.isArray(r)) {
                                                  var c = t._i(r, null);
                                                  n.checked
                                                    ? c < 0 &&
                                                      (t.agree = r.concat([
                                                        null,
                                                      ]))
                                                    : c > -1 &&
                                                      (t.agree = r
                                                        .slice(0, c)
                                                        .concat(
                                                          r.slice(c + 1)
                                                        ));
                                                } else t.agree = o;
                                              },
                                            },
                                          }),
                                          t._v(" "),
                                          e(
                                            "label",
                                            { attrs: { for: "cbx" } },
                                            [
                                              t._v(
                                                "\n                " +
                                                  t._s(
                                                    t.$t(
                                                      "page.main.details.agree"
                                                    )
                                                  ) +
                                                  "\n                "
                                              ),
                                              e("p", [t._v(" ")]),
                                              t._v(" "),
                                              e(
                                                "nuxt-link",
                                                {
                                                  attrs: {
                                                    to: t.localePath("/rules/"),
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    "\n                  " +
                                                      t._s(
                                                        t.$t(
                                                          "page.main.details.agree_link"
                                                        )
                                                      ) +
                                                      "\n                "
                                                  ),
                                                ]
                                              ),
                                            ],
                                            1
                                          ),
                                        ]
                                      ),
                                      t._v(" "),
                                      e(
                                        "div",
                                        { staticClass: "dataInput--label" },
                                        [
                                          e("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: t.agree_kyc,
                                                expression: "agree_kyc",
                                              },
                                            ],
                                            attrs: {
                                              id: "cbx_kyc",
                                              type: "checkbox",
                                            },
                                            domProps: {
                                              checked: Array.isArray(
                                                t.agree_kyc
                                              )
                                                ? t._i(t.agree_kyc, null) > -1
                                                : t.agree_kyc,
                                            },
                                            on: {
                                              change: function (e) {
                                                var r = t.agree_kyc,
                                                  n = e.target,
                                                  o = !!n.checked;
                                                if (Array.isArray(r)) {
                                                  var c = t._i(r, null);
                                                  n.checked
                                                    ? c < 0 &&
                                                      (t.agree_kyc = r.concat([
                                                        null,
                                                      ]))
                                                    : c > -1 &&
                                                      (t.agree_kyc = r
                                                        .slice(0, c)
                                                        .concat(
                                                          r.slice(c + 1)
                                                        ));
                                                } else t.agree_kyc = o;
                                              },
                                            },
                                          }),
                                          t._v(" "),
                                          e(
                                            "label",
                                            { attrs: { for: "cbx_kyc" } },
                                            [
                                              t._v(
                                                "\n                " +
                                                  t._s(
                                                    t.$t(
                                                      "page.main.details.agree_kyc"
                                                    )
                                                  ) +
                                                  "\n                "
                                              ),
                                              e("p", [t._v(" ")]),
                                              t._v(" "),
                                              e(
                                                "nuxt-link",
                                                {
                                                  attrs: {
                                                    to: t.localePath(
                                                      "/rules/aml-kyc/"
                                                    ),
                                                  },
                                                },
                                                [
                                                  t._v(
                                                    "\n                  " +
                                                      t._s(
                                                        t.$t(
                                                          "page.main.details.agree_link_kyc"
                                                        )
                                                      ) +
                                                      "\n                "
                                                  ),
                                                ]
                                              ),
                                              t._v(
                                                "\n                .\n              "
                                              ),
                                            ],
                                            1
                                          ),
                                        ]
                                      ),
                                      t._v(" "),
                                      t.load
                                        ? e(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-submit btn-submitForm",
                                              style: {
                                                opacity: t.currentRoute.routeId
                                                  ? 1
                                                  : 0.5,
                                              },
                                              on: {
                                                click: function (e) {
                                                  e.preventDefault(),
                                                    t.from &&
                                                      t.to &&
                                                      t.currentRoute.routeId &&
                                                      t.create();
                                                },
                                              },
                                            },
                                            [
                                              t._v(
                                                "\n              " +
                                                  t._s(
                                                    t.$t(
                                                      "page.main.details.submit"
                                                    )
                                                  ) +
                                                  "\n            "
                                              ),
                                            ]
                                          )
                                        : e("loader", {
                                            attrs: {
                                              responsive: !0,
                                              width: "100",
                                              height: "100",
                                            },
                                          }),
                                    ],
                                    2
                                  ),
                                ],
                                2
                              )
                          : e("div", { staticClass: "dataInput" }, [
                              e("div", { staticClass: "form--title" }, [
                                e("h4", [
                                  t._v(t._s(t.$t("page.main.details.title"))),
                                ]),
                                t._v(" "),
                                e("img", { attrs: { src: r(512), alt: "" } }),
                              ]),
                              t._v(" "),
                              e("div", [
                                e("div", { staticClass: "help_block" }, [
                                  e(
                                    "span",
                                    { staticClass: "file_icon" },
                                    [
                                      e("loader", {
                                        attrs: {
                                          responsive: !0,
                                          width: "100",
                                          height: "100",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  t._v(" "),
                                  e("h3", [
                                    t._v(
                                      t._s(t.$t("page.main.details.pleaseWait"))
                                    ),
                                  ]),
                                  t._v(" "),
                                  e("p", [
                                    t._v(
                                      t._s(
                                        t.$t("page.main.details.loading_p_1")
                                      )
                                    ),
                                  ]),
                                  t._v(" "),
                                  e("p", [
                                    t._v(
                                      t._s(
                                        t.$t("page.main.details.loading_p_2")
                                      )
                                    ),
                                  ]),
                                ]),
                              ]),
                            ])
                        : e("div", { staticClass: "dataInput" }, [
                            e("div", { staticClass: "form--title" }, [
                              e("h4", [
                                t._v(t._s(t.$t("page.main.details.title"))),
                              ]),
                              t._v(" "),
                              e("img", { attrs: { src: r(512), alt: "" } }),
                            ]),
                            t._v(" "),
                            e("div", [
                              e("div", { staticClass: "help_block" }, [
                                t._m(0),
                                t._v(" "),
                                e("h3", [
                                  t._v(
                                    t._s(
                                      t.$t(
                                        "page.main.details.pleaseSelectRoute"
                                      )
                                    )
                                  ),
                                ]),
                                t._v(" "),
                                e("p", [
                                  t._v(
                                    t._s(t.$t("page.main.details.select_p_1"))
                                  ),
                                ]),
                                t._v(" "),
                                e("p", [
                                  t._v(
                                    t._s(t.$t("page.main.details.select_p_2"))
                                  ),
                                ]),
                                t._v(" "),
                                t._m(1),
                              ]),
                            ]),
                          ]),
                    ]),
                  ]),
                ])
              : t._e();
          },
          n,
          !1,
          null,
          "22d69c5e",
          null
        );
      e.default = component.exports;
    },
  },
]);
