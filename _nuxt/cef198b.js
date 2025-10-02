(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  Array(22).concat([
    function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return o;
      }),
        r.d(t, "b", function () {
          return n;
        }),
        r.d(t, "d", function () {
          return c;
        }),
        r.d(t, "c", function () {
          return l;
        });
      var o = function (e) {
          var t = {
            pending: "pending",
            rejected: "rejected",
            success: "success",
          };
          if (!e)
            return {
              isPending: !1,
              isRejected: !1,
              isSuccess: !1,
              error: { message: "Error.", errorCode: 0 },
            };
          if (e !== t[e])
            throw new Error(
              "Type must be pending ==> isPending,  rejected ==> isRejected, success ==> Success ".concat(
                t
              )
            );
          return {
            isPending: "pending" === e,
            isRejected: "rejected" === e,
            isSuccess: "success" === e,
            error: { message: "Error.", errorCode: 0 },
          };
        },
        n = function (e) {
          return function (t, r) {
            if (!e.apiRequests[t])
              throw new Error("getRequestState type not found:" + t);
            if (void 0 === e.apiRequests[t][r] || null === e.apiRequests[t][r])
              throw new Error("getRequestState status not found:" + r);
            return e.apiRequests[t][r];
          };
        },
        c = function (e, t) {
          for (var r in t) e.apiRequests[r] = o(t[r]);
        },
        l = function (e, t) {
          var r = t.key,
            o = t.message,
            n = t.errorCode;
          e.apiRequests[r].error = { message: o, errorCode: n };
        };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, r) {
      "use strict";
      var o = {
          components: { login: r(139).a },
          props: {
            error: {
              type: Object,
              default: function () {
                return {};
              },
            },
          },
          head: function () {
            return {
              status: this.error.statusCode || 404,
              meta: [
                { charset: "utf-8" },
                { name: "robots", content: "noindex, nofollow" },
                {
                  hid: "description",
                  name: "description",
                  content:
                    "Sorry, the page you're looking for could not be found.",
                },
              ],
              title: "404 Page Not Found",
            };
          },
        },
        n = (r(370), r(7)),
        component = Object(n.a)(
          o,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "div",
              {
                staticClass: "under-header four-wr",
                staticStyle: { "min-height": "81vh" },
              },
              [
                t("div", { staticClass: "four four-first" }, [
                  t("div", { staticClass: "container text-center" }, [
                    t("h1", { staticClass: "four-title" }, [
                      e._v(e._s(e.error.statusCode)),
                    ]),
                    e._v(" "),
                    t("p", { staticClass: "four-first-wrong" }, [
                      e._v(e._s(e.error.message)),
                    ]),
                    e._v(" "),
                    t(
                      "div",
                      [
                        t(
                          "nuxt-link",
                          {
                            staticClass: "btn btn-submit",
                            attrs: { to: e.localePath("/") },
                          },
                          [
                            e._v(
                              "\n          " +
                                e._s(e.$t("page.404.back")) +
                                "\n        "
                            ),
                          ]
                        ),
                      ],
                      1
                    ),
                  ]),
                ]),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.a = component.exports;
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, r) {
      e.exports = r.p + "img/cpasword.47fe92f.svg";
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, r) {
      e.exports = r.p + "img/mail.24d7dba.svg";
    },
    function (e, t, r) {
      "use strict";
      (function (e) {
        r(11), r(12), r(15), r(6), r(19), r(13), r(20);
        var o = r(0),
          n = r(4),
          c = (r(10), r(3)),
          l = r(292);
        function d(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t &&
              (o = o.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              r.push.apply(r, o);
          }
          return r;
        }
        function m(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? d(Object(r), !0).forEach(function (t) {
                  Object(n.a)(e, t, r[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : d(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
          }
          return e;
        }
        t.a = {
          components: { footerContacts: l.a },
          props: {},
          data: function () {
            return { email: "", message: "", loader_sendMessageToSupport: !1 };
          },
          computed: m(
            m(
              {},
              Object(c.c)("contacts", { info: "getData", load: "getLoad" })
            ),
            {},
            {
              lang: function () {
                return this.$i18n.locale;
              },
            }
          ),
          created: function () {
            if (0 === this.info.length) return this.getContacts(this.lang);
          },
          methods: m(
            m({}, Object(c.b)("contacts", { getContacts: "getContacts" })),
            {},
            {
              sendMessageToSupport: function () {
                var t = this;
                return Object(o.a)(
                  regeneratorRuntime.mark(function r() {
                    var o;
                    return regeneratorRuntime.wrap(function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            return (
                              (r.next = 2), t.$validator.validateAll("support")
                            );
                          case 2:
                            if (r.sent) {
                              r.next = 4;
                              break;
                            }
                            return r.abrupt("return");
                          case 4:
                            return (
                              (t.loader_sendMessageToSupport = !0),
                              (r.next = 7),
                              t.$rest
                                .api("POST:public/ticket/create", {
                                  email: t.email,
                                  message: t.message,
                                })
                                .catch(function (e) {
                                  return t.$swal("", e.message, "error"), null;
                                })
                            );
                          case 7:
                            (o = r.sent),
                              (t.loader_sendMessageToSupport = !1),
                              o &&
                                (t.$swal(
                                  "",
                                  t.$t("page.contacts.requestAccepted"),
                                  "success"
                                ),
                                (t.email = ""),
                                (t.message = ""),
                                e.nextTick(function () {
                                  return t.$validator.errors.clear();
                                }));
                          case 10:
                          case "end":
                            return r.stop();
                        }
                    }, r);
                  })
                )();
              },
            }
          ),
        };
      }).call(this, r(92));
    },
    function (e, t, r) {
      "use strict";
      (function (e) {
        r(11), r(12), r(15), r(6), r(19), r(13), r(20);
        var o = r(0),
          n = r(4),
          c = (r(10), r(3));
        function l(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t &&
              (o = o.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              r.push.apply(r, o);
          }
          return r;
        }
        function d(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? l(Object(r), !0).forEach(function (t) {
                  Object(n.a)(e, t, r[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : l(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
          }
          return e;
        }
        t.a = {
          data: function () {
            return {
              reset: !1,
              email: "",
              captcha: "",
              auth: !1,
              valid: !0,
              validCode: !0,
              errStep: "",
              errStep2: "",
              message: "",
              showComponent: "login",
              formAuth: { email: "", password: "", captcha: "", code: "" },
            };
          },
          computed: d(
            {},
            Object(c.c)({
              captchaSettings: "params/getCaptchaConf",
              socials: "social/getSocials",
              getRequestStateSocial: "social/getRequestState",
              getRequestStateUser: "user/getRequestState",
              modalLoginType: "user/login",
            })
          ),
          mounted: function () {
            return this.updateSocials();
          },
          methods: d(
            d(
              d(
                d({}, Object(c.b)({ updateSocials: "social/updateSocials" })),
                Object(c.b)({
                  login: "user/login",
                  restPasswordAPI: "user/restPassword",
                })
              ),
              Object(c.d)({
                showLog: "user/login",
                showReg: "user/reg",
                changeStatusOpenKycModal: "user/changeStatusOpenKycModal",
              })
            ),
            {},
            {
              restPassword: function (data) {
                var e = this;
                return Object(o.a)(
                  regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), e.restPasswordAPI(data);
                          case 2:
                            0x5b0a2eb8cfafd ===
                              e.getRequestStateUser("restPassword", "error")
                                .errorCode &&
                              e.$refs.recaptcha &&
                              e.$refs.recaptcha.reset &&
                              e.$refs.recaptcha.reset();
                          case 3:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )();
              },
              signin: function (t) {
                var r = this;
                return Object(o.a)(
                  regeneratorRuntime.mark(function o() {
                    var n;
                    return regeneratorRuntime.wrap(function (o) {
                      for (;;)
                        switch ((o.prev = o.next)) {
                          case 0:
                            return (
                              (o.next = 2), r.$validator.validateAll("login")
                            );
                          case 2:
                            if (o.sent) {
                              o.next = 4;
                              break;
                            }
                            return o.abrupt("return");
                          case 4:
                            if ("2fa" === t.step) {
                              o.next = 8;
                              break;
                            }
                            if (
                              t.formAuth.captcha ||
                              !r.captchaSettings.sitekey ||
                              !r.captchaSettings.module
                            ) {
                              o.next = 8;
                              break;
                            }
                            return (
                              r.$swal(
                                "",
                                r.$t("errorMessage.1601588666628861"),
                                "error"
                              ),
                              o.abrupt("return")
                            );
                          case 8:
                            return (o.next = 10), r.login(t.formAuth);
                          case 10:
                            if (
                              ((n = o.sent),
                              0x5b0a2eb8cfafd ===
                                r.getRequestStateUser("login", "error")
                                  .errorCode &&
                                r.$refs.recaptcha &&
                                r.$refs.recaptcha.reset &&
                                r.$refs.recaptcha.reset(),
                              6231533598118172 !==
                                r.getRequestStateUser("login", "error")
                                  .errorCode &&
                                (r.errStep = r.getRequestStateUser(
                                  "login",
                                  "error"
                                ).message),
                              "2fa" === t.step &&
                                (r.errStep2 = r.getRequestStateUser(
                                  "login",
                                  "error"
                                ).message),
                              6231533598118172 !==
                                r.getRequestStateUser("login", "error")
                                  .errorCode)
                            ) {
                              o.next = 21;
                              break;
                            }
                            if (
                              ((r.errStep = void 0), "2fa" !== r.showComponent)
                            ) {
                              o.next = 18;
                              break;
                            }
                            return o.abrupt("return", (r.valid = !1));
                          case 18:
                            return (
                              (r.showComponent = "2fa"),
                              e.nextTick(function () {
                                r.$refs.number.focus();
                              }),
                              o.abrupt("return")
                            );
                          case 21:
                            if (!n) {
                              o.next = 25;
                              break;
                            }
                            return (
                              r.$store.commit("user/setAuth", n),
                              (r.errStep2 = void 0),
                              o.abrupt("return", null)
                            );
                          case 25:
                          case "end":
                            return o.stop();
                        }
                    }, o);
                  })
                )();
              },
            }
          ),
        };
      }).call(this, r(92));
    },
    function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(12),
        core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default =
          __webpack_require__.n(
            core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__
          ),
        core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(15),
        core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default =
          __webpack_require__.n(
            core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__
          ),
        core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(6),
        core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default =
          __webpack_require__.n(
            core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__
          ),
        core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(19),
        core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3___default =
          __webpack_require__.n(
            core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3__
          ),
        core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(13),
        core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default =
          __webpack_require__.n(
            core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__
          ),
        core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(20),
        core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5___default =
          __webpack_require__.n(
            core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5__
          ),
        _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(0),
        _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(4),
        regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(10),
        regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_8___default =
          __webpack_require__.n(
            regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_8__
          ),
        core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(11),
        core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_9___default =
          __webpack_require__.n(
            core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_9__
          ),
        core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(76),
        core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_10___default =
          __webpack_require__.n(
            core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_10__
          ),
        core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(134),
        core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_11___default =
          __webpack_require__.n(
            core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_11__
          ),
        vuex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3);
      function ownKeys(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ownKeys(Object(r), !0).forEach(function (t) {
                Object(
                  _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.a
                )(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ownKeys(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      __webpack_exports__.a = {
        components: {},
        props: { isModal: { type: Boolean, default: !1 } },
        data: function () {
          return { templateJson: null, kycData: null };
        },
        computed: _objectSpread(
          {},
          Object(vuex__WEBPACK_IMPORTED_MODULE_12__.c)({ user: "user/info" })
        ),
        methods: _objectSpread(
          _objectSpread(
            {},
            Object(vuex__WEBPACK_IMPORTED_MODULE_12__.b)({
              verificationInit: "user/verificationInit",
              checkAuth: "user/checkAuth",
            })
          ),
          {},
          {
            onCancelVerification: function () {
              if (this.$route.query.returnUrl)
                this.$router.push(this.$route.query.returnUrl);
              else {
                if (this.isModal)
                  return (
                    this.$store.dispatch("notify/add", {
                      message: "Verification canceled.",
                      type: "error",
                    }),
                    void this.$emit("close")
                  );
                this.$router.push(this.localePath("/user/profile/"));
              }
            },
            onSuccessVerification: function (e) {
              if (
                (console.log(
                  "{KYC} -> onSuccessVerification:",
                  this.$route.query.returnUrl
                ),
                this.$route.query.returnUrl)
              ) {
                if (this.isModal)
                  return (
                    this.$store.dispatch("notify/add", {
                      message: "Verification completed.",
                    }),
                    void this.$emit("close")
                  );
                this.$swal("", "Verification completed.", "success"),
                  this.$router.push(this.$route.query.returnUrl);
              }
              this.checkAuth();
            },
          }
        ),
        created: function created() {
          var _this = this;
          return Object(
            _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__.a
          )(
            regeneratorRuntime.mark(function _callee() {
              var verification;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                for (;;)
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      _context.next = 2;
                      break;
                    case 2:
                      return (_context.next = 4), _this.checkAuth();
                    case 4:
                      return (
                        (_context.next = 6),
                        _this.verificationInit().catch(function (e) {
                          _this.onCancelVerification(),
                            _this.$swal("", e.message, "error");
                        })
                      );
                    case 6:
                      if (((verification = _context.sent), verification)) {
                        _context.next = 9;
                        break;
                      }
                      return _context.abrupt("return");
                    case 9:
                      (_this.templateJson = JSON.parse(
                        verification.template,
                        function (key, value) {
                          return "string" == typeof value &&
                            value.startsWith("/Function(") &&
                            value.endsWith(")/")
                            ? ((value = value.substring(10, value.length - 2)),
                              eval("( function " + value + ")"))
                            : "type" === key
                            ? eval(value)
                            : value;
                        }
                      )),
                        (_this.kycData = verification.data);
                    case 11:
                    case "end":
                      return _context.stop();
                  }
              }, _callee);
            })
          )();
        },
      };
    },
    function (e, t, r) {
      "use strict";
      r(11), r(12), r(15), r(6), r(19), r(13), r(20);
      var o = r(0),
        n = r(4),
        c = (r(10), r(24), r(36), r(3));
      function l(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                Object(n.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var m = {
          props: { hideBtnLogin: { type: Boolean, default: !1 } },
          computed: d(
            d({}, Object(c.c)("menu", ["user"])),
            Object(c.c)("user", ["info"])
          ),
          methods: d(
            d(
              d(
                d({}, Object(c.d)("menu", { change: "user" })),
                Object(c.d)("user", { setLogin: "login", setReg: "reg" })
              ),
              Object(c.b)({
                destroyAuthAPI: "user/destroyAuth",
                checkAuth: "user/checkAuth",
              })
            ),
            {},
            {
              destroyAuth: function () {
                var e = this;
                return Object(o.a)(
                  regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              e.destroyAuthAPI().catch(function () {
                                return null;
                              })
                            );
                          case 2:
                            if (-1 === e.$route.path.indexOf("/user/")) {
                              t.next = 7;
                              break;
                            }
                            return (
                              console.log(
                                "[Unauthorized] Redirect to home page *logosign.vue*",
                                e.$route.path
                              ),
                              (t.next = 6),
                              e.$router.replace(e.localePath("/"))
                            );
                          case 6:
                            return t.abrupt("return", t.sent);
                          case 7:
                            return t.abrupt("return", !0);
                          case 8:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )();
              },
            }
          ),
        },
        f = r(7),
        component = Object(f.a)(
          m,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "div",
              {
                on: {
                  click: function (e) {
                    e.stopPropagation();
                  },
                },
              },
              [
                e.hideBtnLogin
                  ? e._e()
                  : t("transition", { attrs: { name: "faded" } }, [
                      e.info && e.info.email
                        ? t("div", { staticClass: "user-bloc" }, [
                            t(
                              "div",
                              {
                                staticClass: "user-bloc-date",
                                on: {
                                  click: function (t) {
                                    return e.change(!e.user);
                                  },
                                },
                              },
                              [
                                e.info && e.info.first_name && e.info.last_name
                                  ? t(
                                      "div",
                                      { staticClass: "user-bloc-date-photo" },
                                      [
                                        e._v(
                                          "\n                " +
                                            e._s(
                                              e.info.first_name
                                                .toUpperCase()
                                                .charAt(0)
                                            ) +
                                            "\n                " +
                                            e._s(
                                              e.info.last_name
                                                .toUpperCase()
                                                .charAt(0)
                                            ) +
                                            "\n\n"
                                        ),
                                      ]
                                    )
                                  : e._e(),
                                e._v(" "),
                                t(
                                  "div",
                                  { staticClass: "user-bloc-date-info" },
                                  [
                                    t("p", [
                                      e._v(
                                        e._s(e.info.first_name) +
                                          " " +
                                          e._s(e.info.last_name)
                                      ),
                                    ]),
                                    e._v(" "),
                                    t("span", [e._v(e._s(e.info.email))]),
                                  ]
                                ),
                              ]
                            ),
                            e._v(" "),
                            t(
                              "ul",
                              {
                                staticClass: "user-bloc-list",
                                class: { "user-bloc-list-open": e.user },
                              },
                              [
                                t(
                                  "li",
                                  [
                                    t(
                                      "nuxt-link",
                                      {
                                        attrs: {
                                          to: e.localePath("/user/profile/"),
                                        },
                                      },
                                      [
                                        t("img", {
                                          attrs: { src: r(159), alt: "" },
                                        }),
                                        e._v(
                                          "\n                " +
                                            e._s(e.$t("ui.header.profile")) +
                                            "\n              "
                                        ),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                                e._v(" "),
                                t(
                                  "li",
                                  [
                                    t(
                                      "nuxt-link",
                                      {
                                        attrs: {
                                          to: e.localePath("/user/orders/"),
                                        },
                                      },
                                      [
                                        t("img", {
                                          attrs: { src: r(366), alt: "" },
                                        }),
                                        e._v(
                                          "\n                " +
                                            e._s(e.$t("ui.header.requests")) +
                                            "\n              "
                                        ),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                                e._v(" "),
                                t(
                                  "li",
                                  [
                                    t(
                                      "nuxt-link",
                                      {
                                        attrs: {
                                          to: e.localePath(
                                            "/user/partner-system/"
                                          ),
                                        },
                                      },
                                      [
                                        t("img", {
                                          attrs: { src: r(367), alt: "" },
                                        }),
                                        e._v(
                                          "\n                " +
                                            e._s(e.$t("ui.header.affiliate")) +
                                            "\n              "
                                        ),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                                e._v(" "),
                                t(
                                  "li",
                                  [
                                    t(
                                      "nuxt-link",
                                      {
                                        attrs: {
                                          to: e.localePath("/user/api/"),
                                        },
                                      },
                                      [
                                        t("img", {
                                          attrs: { src: r(368), alt: "" },
                                        }),
                                        e._v(
                                          "\n                " +
                                            e._s(e.$t("ui.header.api")) +
                                            "\n              "
                                        ),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                                e._v(" "),
                                t("li", [
                                  t(
                                    "a",
                                    {
                                      on: {
                                        click: function (t) {
                                          e.destroyAuth().then(function () {
                                            return e.change(!1);
                                          });
                                        },
                                      },
                                    },
                                    [
                                      t("img", {
                                        attrs: { src: r(369), alt: "" },
                                      }),
                                      e._v(
                                        "\n                " +
                                          e._s(e.$t("ui.header.exit")) +
                                          "\n              "
                                      ),
                                    ]
                                  ),
                                ]),
                              ]
                            ),
                          ])
                        : t("div", { staticClass: "registration" }, [
                            t("ul", [
                              t("li", [
                                t(
                                  "button",
                                  {
                                    staticClass: "btn-round btn-round-blue 1",
                                    on: {
                                      click: function (t) {
                                        console.log('click');
                                        window.open(
                                          "https://t.me/coinluxy_org ",
                                          "_blank"
                                        );
                                      },
                                    },
                                  },
                                  [
                                    e._v(
                                      "\n                " +
                                        "Поддержка" +
                                        "\n              "
                                    ),
                                  ]
                                ),
                              ]),
                            ]),
                          ]),
                    ]),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.a = component.exports;
    },
    function (e, t, r) {
      "use strict";
      r(28), r(11), r(12), r(15), r(6), r(19), r(13), r(20);
      var o = r(4),
        n = r(3);
      function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(r), !0).forEach(function (t) {
                Object(o.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : c(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var d = {
          components: {},
          data: function () {
            return { errStep2: "", code: "" };
          },
          computed: l({}, Object(n.c)("user", ["load"])),
          methods: l({}, Object(n.d)("user", ["login", "reset"])),
        },
        m = (r(413), r(7)),
        component = Object(m.a)(
          d,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "div",
              {
                staticClass: "popup popup-personal-room popup-open modal-mask",
              },
              [
                t("div", { staticClass: "modal-wrapper" }, [
                  t("div", {
                    staticClass:
                      "popup-close-bloc popup-close-bloc-personal-room",
                    on: {
                      click: function (t) {
                        return t.target !== t.currentTarget
                          ? null
                          : e.$emit("close");
                      },
                    },
                  }),
                  e._v(" "),
                  t("div", { staticClass: "popup-wr-item" }, [
                    t("div", { staticClass: "modal-header text-center" }, [
                      t("h5", { staticClass: "title text-center" }),
                      e._v(" "),
                      t(
                        "span",
                        {
                          staticClass:
                            "popup-close-btn popup-close-btn-personal-room",
                          on: {
                            click: function (t) {
                              return t.target !== t.currentTarget
                                ? null
                                : e.$emit("close");
                            },
                          },
                        },
                        [e._v("\n          ×\n        ")]
                      ),
                    ]),
                    e._v(" "),
                    t("div", { staticClass: "popup-top" }, [
                      t(
                        "p",
                        {
                          style: {
                            color: "red",
                            textAlign: "center",
                            fontWeight: "bold",
                          },
                        },
                        [e._v("\n          " + e._s(e.errStep2) + "\n        ")]
                      ),
                      e._v(" "),
                      t("form", { attrs: { action: "" } }, [
                        t("div", [
                          t("p", { staticClass: "d-flex flex-start" }, [
                            t("img", { attrs: { src: r(254), alt: "" } }),
                            e._v(
                              e._s(e.$t("modals.2fa.confirmCode")) +
                                "\n            "
                            ),
                          ]),
                          e._v(" "),
                          t("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: e.code,
                                expression: "code",
                              },
                            ],
                            ref: "number",
                            staticClass: "hide",
                            attrs: {
                              autofocus: "",
                              type: "number",
                              name: "code",
                            },
                            domProps: { value: e.code },
                            on: {
                              keyup: function (t) {
                                return !t.type.indexOf("key") &&
                                  e._k(t.keyCode, "enter", 13, t.key, "Enter")
                                  ? null
                                  : e.$emit("confirm", e.code);
                              },
                              input: [
                                function (t) {
                                  t.target.composing ||
                                    (e.code = t.target.value);
                                },
                                function (t) {
                                  t.target.value.length < 7
                                    ? (e.code = t.target.value)
                                    : (e.code = t.target.value.slice(0, 6));
                                },
                              ],
                            },
                          }),
                          e._v(" "),
                          t(
                            "div",
                            { staticClass: "d-flex flex-row margin-b-0" },
                            e._l(6, function (r, i) {
                              return t(
                                "div",
                                {
                                  key: i,
                                  staticClass: "number",
                                  class: (e.code.length, ""),
                                  on: {
                                    click: function (t) {
                                      return e.$refs.number.focus();
                                    },
                                  },
                                },
                                [
                                  e._v(
                                    "\n                " +
                                      e._s(
                                        e.code.length === i
                                          ? ""
                                          : e.code.charAt(i)
                                      ) +
                                      "\n                "
                                  ),
                                  e.code.length === i ||
                                  (5 === i && 6 === e.code.length)
                                    ? t("span", { staticClass: "flick" }, [
                                        e._v("|"),
                                      ])
                                    : e._e(),
                                ]
                              );
                            }),
                            0
                          ),
                        ]),
                        e._v(" "),
                        t("div", { staticClass: "text-center" }, [
                          t(
                            "button",
                            {
                              staticClass: "btn btn-submit",
                              on: {
                                click: function (t) {
                                  return (
                                    t.preventDefault(),
                                    e.$emit("confirm", e.code)
                                  );
                                },
                              },
                            },
                            [
                              e._v(
                                "\n              " +
                                  e._s(e.$t("ui.buttons.confirm")) +
                                  "\n            "
                              ),
                            ]
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]
            );
          },
          [],
          !1,
          null,
          "500a55cc",
          null
        );
      t.a = component.exports;
    },
    ,
    ,
    ,
    ,
    ,
    function (e, t, r) {
      "use strict";
      r(11), r(12), r(15), r(6), r(19), r(13), r(20);
      var o = r(4),
        n = (r(28), r(3));
      r(25), r(112), r(69);
      function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(r), !0).forEach(function (t) {
                Object(o.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : c(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var d = {
          props: {
            message: { type: String, default: "" },
            timeout: { type: Number, default: 1e3 },
            code: { type: [Number, String], default: "" },
          },
          data: function () {
            return { state: !0, time: "" };
          },
          created: function () {
            var e = this;
            this.time = setTimeout(function () {
              return e.del();
            }, this.timeout);
          },
          beforeDestroy: function () {
            clearTimeout(this.time);
          },
          methods: l(
            l({}, Object(n.d)("notify", ["del"])),
            {},
            {
              instDel: function () {
                clearTimeout(this.time), this.del(this.item);
              },
            }
          ),
        },
        m = (r(415), r(7));
      function f(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function x(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(Object(r), !0).forEach(function (t) {
                Object(o.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : f(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var h = {
          components: {
            push: Object(m.a)(
              d,
              function () {
                var e = this,
                  t = e._self._c;
                return t("transition", { attrs: { name: "slide" } }, [
                  "lang-technical-work" !== e.$route.name
                    ? t("div", { on: { click: e.instDel } }, [
                        e._v(e._s(e.message)),
                      ])
                    : e._e(),
                ]);
              },
              [],
              !1,
              null,
              "7d5b2f10",
              null
            ).exports,
          },
          data: function () {
            return { state: !0, open: !1 };
          },
          computed: x(
            x(
              {},
              Object(n.c)({
                notifies: "notify/notifies",
                timeout: "notify/timeout",
                backup: "notify/backup",
              })
            ),
            {},
            {
              arr: function () {
                return this.open ? this.backup : this.notifies;
              },
              filterNote: function () {
                return this.arr.slice(
                  this.arr.length > 4 ? this.arr.length - 5 : 0,
                  this.arr.length
                );
              },
            }
          ),
          watch: {
            notifies: function () {
              (this.state = !1), (this.state = !0);
            },
          },
        },
        w = Object(m.a)(
          h,
          function () {
            var e = this,
              t = e._self._c;
            return e.state
              ? t(
                  "div",
                  e._l(e.filterNote, function (r, i) {
                    return t("push", {
                      key: i,
                      staticClass: "notify",
                      class: r.position,
                      style: {
                        top: 0 !== i ? 100 * i + "px" : "",
                        cursor: "pointer",
                        borderRadius: "4px",
                      },
                      attrs: {
                        "data-notification-status": r.type,
                        message: r.message,
                        timeout: e.timeout,
                        code: r.code,
                      },
                    });
                  }),
                  1
                )
              : e._e();
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.a = w.exports;
    },
    function (e, t, r) {
      "use strict";
      r(25), r(311), r(91);
      var o = [
          function () {
            var e = this._self._c;
            return e("div", { staticClass: "dropdown-lang-img-arrow" }, [
              e("img", { attrs: { src: r(403) } }),
            ]);
          },
        ],
        n = (r(11), r(12), r(15), r(6), r(19), r(13), r(20), r(4)),
        c = r(3);
      function l(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                Object(n.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var m = {
          data: function () {
            return { isShow: !1 };
          },
          components: { logoSign: r(139).a },
          computed: d(
            d(
              {
                lang: function () {
                  return this.$i18n.locale;
                },
                icon: function () {
                  return "ua" === this.$i18n.locale ||
                    "uk" === this.$i18n.locale
                    ? r(250)
                    : "eu" === this.$i18n.locale
                    ? r(187)
                    : "pl" === this.$i18n.locale
                    ? r(251)
                    : "es" === this.$i18n.locale
                    ? r(252)
                    : "ru" === this.$i18n.locale
                    ? r(249)
                    : r(187);
                },
              },
              Object(c.c)({
                showMenu: "menu/menu",
                buttons: "menu/buttons",
                link: "rules/getLink",
              })
            ),
            Object(c.c)({ favoriteRates: "exchange/favoriteRates" })
          ),
          created: function () {
            this.favRoutes(), this.getButtons();
          },
          methods: d(
            d({}, Object(c.d)({ changeMenu: "menu/menu" })),
            Object(c.b)({
              favRoutes: "exchange/favRoutes",
              getButtons: "menu/buttons",
              menuAllChange: "menu/all",
            })
          ),
        },
        f = r(7),
        component = Object(f.a)(
          m,
          function () {
            var e = this,
              t = e._self._c;
            return t("header", { staticClass: "header" }, [
              e.favoriteRates.length
                ? t("div", { staticClass: "course" }, [
                    t(
                      "ul",
                      e._l(e.favoriteRates, function (r) {
                        return t("li", { key: r.id }, [
                          t("div", [
                            t("p", { staticClass: "course-header" }, [
                              t("span", [e._v(e._s(r.name))]),
                              e._v(" "),
                              t("span", [e._v(e._s(r.service))]),
                            ]),
                            e._v(" "),
                            t("p", { staticClass: "course-footer green" }, [
                              t("span", [e._v(e._s(r.rate.toFixed(2)))]),
                            ]),
                          ]),
                        ]);
                      }),
                      0
                    ),
                  ])
                : e._e(),
              e._v(" "),
              t("div", { staticClass: "container-1" }, [
                t(
                  "div",
                  { staticClass: "logo" },
                  [
                    t("nuxt-link", { attrs: { to: e.localePath("/") } }, [
                      t("img", { attrs: { src: e.$rest.logoPath, alt: "" } }),
                    ]),
                  ],
                  1
                ),
                e._v(" "),
                t("nav", [
                  t(
                    "div",
                    {
                      staticClass: "burger",
                      on: {
                        click: function (t) {
                          return e.changeMenu(!e.showMenu);
                        },
                      },
                    },
                    [t("div", { staticClass: "burger-icon" })]
                  ),
                  e._v(" "),
                  t(
                    "ul",
                    { staticClass: "menu", class: { "menu-open": e.showMenu } },
                    [
                      t(
                        "li",
                        { staticClass: "only-mobile" },
                        [
                          t("nuxt-link", { attrs: { to: e.localePath("/") } }, [
                            e._v(
                              "\n            " +
                                e._s(e.$t("ui.header.exchange")) +
                                "\n          "
                            ),
                          ]),
                        ],
                        1
                      ),

                      e._v(" "),
                      t(
                        "li",
                        [
                          t(
                            "nuxt-link",
                            { attrs: { to: e.localePath("/partners/") } },
                            [
                              e._v(
                                "\n            " +
                                  e._s(e.$t("ui.header.partners")) +
                                  "\n          "
                              ),
                            ]
                          ),
                        ],
                        1
                      ),

                      e._v(" "),
                      t(
                        "li",
                        [
                          t(
                            "nuxt-link",
                            { attrs: { to: e.localePath("/rules/aml-kyc/") } },
                            [
                              e._v(
                                "\n            " +
                                  "Правила пользования" +
                                  "\n          "
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      e._v(" "),
                      t(
                        "li",

                        [
                          t("a", { attrs: { href: "/ru/about-us/" } }, [
                            e._v(
                              "\n            " + "О сервисе" + "\n          "
                            ),
                          ]),
                        ],
                        1
                      ),
                      e._v(" "),
                      t(
                        "li",
                        { staticClass: "only-mobile" },
                        [
                          t(
                            "a",
                            {
                              attrs: {
                                href: "https://t.me/coinluxy_org",
                              },
                            },
                            [
                              e._v(
                                "\n            " + "Поддержка" + "\n          "
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      e._v(" "),
                      e._l(e.buttons, function (b) {
                        return b.lang === e.$i18n.locale && b.isHeaderMenu
                          ? t(
                              "li",

                              { key: b.id },
                              [
                                t(
                                  "nuxt-link",
                                  {
                                    attrs: {
                                      to: e.localePath("/" + b.link + "/"),
                                    },
                                  },
                                  [
                                    e._v(
                                      "\n            " +
                                        e._s(b.nameLink) +
                                        "\n          "
                                    ),
                                  ]
                                ),
                              ],
                              1
                            )
                          : e._e();
                      }),
                    ],
                    2
                  ),
                ]),
                e._v(" "),
                t(
                  "div",
                  { staticClass: "right-block" },
                  [e._v(" "), t("logo-sign")],
                  1
                ),
              ]),
            ]);
          },
          o,
          !1,
          null,
          null,
          null
        );
      t.a = component.exports;
    },
    function (e, t, r) {
      "use strict";
      r(91), r(11), r(12), r(15), r(6), r(19), r(13), r(20);
      var o = r(4),
        n = r(3);
      function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      var l = {
          computed: (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? c(Object(r), !0).forEach(function (t) {
                    Object(o.a)(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : c(Object(r)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    );
                  });
            }
            return e;
          })({}, Object(n.c)("menu", ["menu", "buttons"])),
        },
        d = l,
        m = r(7),
        component = Object(m.a)(
          d,
          function () {
            var e = this,
              t = e._self._c;
            return t("footer", { staticClass: "footer" }, [
              t("div", { staticClass: "footer-bottom" }, [
                t("div", { staticClass: "container" }, [
                  e._v(" "),
                  t(
                    "ul",
                    [
                      e._l(e.buttons, function (b) {
                        return b.lang === e.$root.$i18n.locale && b.isFooterMenu
                          ? t(
                              "li",
                              { key: b.id },
                              [
                                t(
                                  "a",
                                  {
                                    attrs: {
                                      href: e.localePath("/" + b.link + "/"),
                                    },
                                  },
                                  [
                                    e._v(
                                      "\n            " +
                                        e._s(b.nameLink) +
                                        "\n          "
                                    ),
                                  ]
                                ),
                              ],
                              1
                            )
                          : e._e();
                      }),
                      e._v(" "),
                      t(
                        "li",
                        [
                          t(
                            "nuxt-link",
                            { attrs: { to: e.localePath("/rules/aml-kyc/") } },
                            [
                              e._v(
                                "\n            " +
                                  "Правила пользования" +
                                  "\n          "
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      e._v(" "),
                      t(
                        "li",
                        [
                          t(
                            "nuxt-link",
                            { attrs: { to: e.localePath("/contacts/") } },
                            [
                              e._v(
                                "\n            " +
                                  e._s(e.$t("ui.footer.contacts")) +
                                  "\n          "
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                    ],
                    2
                  ),
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
      t.a = component.exports;
    },
    function (e, t, r) {
      "use strict";
      r(25), r(11), r(12), r(15), r(6), r(19), r(13), r(20);
      var o = r(0),
        n = r(4),
        c = (r(10), r(3));
      function l(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                Object(n.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var m = {
          data: function () {
            return {
              message: "",
              repeatPassword: "",
              newProfileForm: {
                first_name: "",
                last_name: "",
                email: "",
                password: "",
                captcha: "",
                code: "",
              },
            };
          },
          computed: d(
            {},
            Object(c.c)({
              captchaSettings: "params/getCaptchaConf",
              socials: "social/getSocials",
              getRequestStateSocial: "social/getRequestState",
              getRequestStateUser: "user/getRequestState",
            })
          ),
          mounted: function () {
            return this.updateSocials();
          },
          methods: d(
            d(
              {},
              Object(c.b)({
                updateSocials: "social/updateSocials",
                createUser: "user/reg",
              })
            ),
            {},
            {
              registration: function () {
                var e = this;
                return Object(o.a)(
                  regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2), e.$validator.validateAll("register")
                            );
                          case 2:
                            if (t.sent) {
                              t.next = 4;
                              break;
                            }
                            return t.abrupt("return");
                          case 4:
                            if (
                              e.newProfileForm.captcha ||
                              !e.captchaSettings.sitekey ||
                              !e.captchaSettings.module
                            ) {
                              t.next = 7;
                              break;
                            }
                            return (
                              e.$swal(
                                "",
                                e.$t("errorMessage.1601588666628861"),
                                "error"
                              ),
                              t.abrupt("return")
                            );
                          case 7:
                            return (
                              (t.next = 9),
                              e.createUser(
                                d(
                                  d({}, e.newProfileForm),
                                  {},
                                  {
                                    return_to:
                                      e.$rest.baseUrl +
                                      e.localePath("/") +
                                      "{status}/confirm/account/",
                                  }
                                )
                              )
                            );
                          case 9:
                            0x5b0a2eb8cfafd ===
                              e.getRequestStateUser("registration", "error")
                                .errorCode &&
                              e.$refs.recaptcha &&
                              e.$refs.recaptcha.reset &&
                              e.$refs.recaptcha.reset();
                          case 10:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )();
              },
            }
          ),
        },
        f = (r(409), r(7)),
        component = Object(f.a)(
          m,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "div",
              { staticClass: "popup popup-registration popup-open modal-mask" },
              [
                t("div", { staticClass: "modal-wrapper" }, [
                  t("div", {
                    staticClass: "popup-close-bloc",
                    on: {
                      click: function (t) {
                        return t.target !== t.currentTarget
                          ? null
                          : e.$emit("close");
                      },
                    },
                  }),
                  e._v(" "),
                  t("div", { staticClass: "popup-wr-item" }, [
                    t("div", { staticClass: "modal-header text-center" }, [
                      t("h5", { staticClass: "title text-center" }, [
                        e._v(
                          "\n          " +
                            e._s(e.$t("modals.sign_up.sign_up")) +
                            "\n        "
                        ),
                      ]),
                      e._v(" "),
                      t(
                        "span",
                        {
                          staticClass: "popup-close-btn",
                          on: {
                            click: function (t) {
                              return t.target !== t.currentTarget
                                ? null
                                : e.$emit("close");
                            },
                          },
                        },
                        [e._v("×")]
                      ),
                    ]),
                    e._v(" "),
                    t("div", { staticClass: "popup-top" }, [
                      t("form", { attrs: { action: "#" } }, [
                        e.getRequestStateUser("registration", "isRejected")
                          ? t(
                              "p",
                              {
                                style: {
                                  color: "red",
                                  textAlign: "center",
                                  fontWeight: "bold",
                                },
                              },
                              [
                                e._v(
                                  "\n            " +
                                    e._s(
                                      e.getRequestStateUser(
                                        "registration",
                                        "error"
                                      ).message
                                    ) +
                                    "\n          "
                                ),
                              ]
                            )
                          : e._e(),
                        e._v(" "),
                        t("div", { staticClass: "d-flex d-email" }, [
                          t("label", [
                            t("span", [
                              e._v(e._s(e.$t("modals.sign_up.email"))),
                            ]),
                            e._v(" "),
                            t("p", { staticClass: "input-img" }, [
                              t("img", { attrs: { src: r(135), alt: "" } }),
                              e._v(" "),
                              t("input", {
                                directives: [
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required|email",
                                    expression: "'required|email'",
                                  },
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: e.newProfileForm.email,
                                    expression: "newProfileForm.email",
                                  },
                                ],
                                style: e.errors.has("register.email")
                                  ? { border: "1px solid red" }
                                  : {},
                                attrs: {
                                  "data-vv-scope": "register",
                                  name: "email",
                                  type: "email",
                                  placeholder: "example@gmail.com",
                                },
                                domProps: { value: e.newProfileForm.email },
                                on: {
                                  focus: function (t) {
                                    e.message = "";
                                  },
                                  input: function (t) {
                                    t.target.composing ||
                                      e.$set(
                                        e.newProfileForm,
                                        "email",
                                        t.target.value
                                      );
                                  },
                                },
                              }),
                            ]),
                          ]),
                        ]),
                        e._v(" "),
                        t("br"),
                        e._v(" "),
                        t("div", { staticClass: "d-flex d-flex__col" }, [
                          t("div", [
                            t("label", [
                              t("span", [
                                e._v(e._s(e.$t("modals.sign_up.name"))),
                              ]),
                              e._v(" "),
                              t("p", { staticClass: "input-img" }, [
                                t("img", { attrs: { src: r(159), alt: "" } }),
                                e._v(" "),
                                t("input", {
                                  directives: [
                                    {
                                      name: "validate",
                                      rawName: "v-validate",
                                      value:
                                        "required|alpha_spaces|min:2|max:50",
                                      expression:
                                        "'required|alpha_spaces|min:2|max:50'",
                                    },
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: e.newProfileForm.first_name,
                                      expression: "newProfileForm.first_name",
                                    },
                                  ],
                                  style: e.errors.has("register.first_name")
                                    ? { border: "1px solid red" }
                                    : {},
                                  attrs: {
                                    "data-vv-scope": "register",
                                    placeholder: e.$t(
                                      "modals.sign_up.your_name"
                                    ),
                                    name: "first_name",
                                    type: "text",
                                  },
                                  domProps: {
                                    value: e.newProfileForm.first_name,
                                  },
                                  on: {
                                    focus: function (t) {
                                      e.message = "";
                                    },
                                    input: function (t) {
                                      t.target.composing ||
                                        e.$set(
                                          e.newProfileForm,
                                          "first_name",
                                          t.target.value
                                        );
                                    },
                                  },
                                }),
                              ]),
                            ]),
                          ]),
                          e._v(" "),
                          t("div", [
                            t("label", [
                              t("span", [
                                e._v(e._s(e.$t("modals.sign_up.surname"))),
                              ]),
                              e._v(" "),
                              t("p", { staticClass: "input-img" }, [
                                t("img", { attrs: { src: r(159), alt: "" } }),
                                e._v(" "),
                                t("input", {
                                  directives: [
                                    {
                                      name: "validate",
                                      rawName: "v-validate",
                                      value:
                                        "required|alpha_spaces|min:2|max:50",
                                      expression:
                                        "'required|alpha_spaces|min:2|max:50'",
                                    },
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: e.newProfileForm.last_name,
                                      expression: "newProfileForm.last_name",
                                    },
                                  ],
                                  style: e.errors.has("register.last_name")
                                    ? { border: "1px solid red" }
                                    : {},
                                  attrs: {
                                    "data-vv-scope": "register",
                                    placeholder: e.$t(
                                      "modals.sign_up.your_surname"
                                    ),
                                    name: "last_name",
                                    type: "text",
                                  },
                                  domProps: {
                                    value: e.newProfileForm.last_name,
                                  },
                                  on: {
                                    focus: function (t) {
                                      e.message = "";
                                    },
                                    input: function (t) {
                                      t.target.composing ||
                                        e.$set(
                                          e.newProfileForm,
                                          "last_name",
                                          t.target.value
                                        );
                                    },
                                  },
                                }),
                              ]),
                            ]),
                          ]),
                        ]),
                        e._v(" "),
                        t("div", { staticClass: "d-flex d-flex__col" }, [
                          t("div", [
                            t("label", [
                              t("span", [
                                e._v(e._s(e.$t("modals.sign_up.password"))),
                              ]),
                              e._v(" "),
                              t("p", { staticClass: "input-img" }, [
                                t("img", { attrs: { src: r(108), alt: "" } }),
                                e._v(" "),
                                t("input", {
                                  directives: [
                                    {
                                      name: "validate",
                                      rawName: "v-validate",
                                      value: "required|min:6",
                                      expression: "'required|min:6'",
                                    },
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: e.newProfileForm.password,
                                      expression: "newProfileForm.password",
                                    },
                                  ],
                                  ref: "password",
                                  style: e.errors.has("register.password")
                                    ? { border: "1px solid red" }
                                    : {},
                                  attrs: {
                                    "data-vv-scope": "register",
                                    name: "password",
                                    type: "password",
                                    placeholder: "******",
                                  },
                                  domProps: {
                                    value: e.newProfileForm.password,
                                  },
                                  on: {
                                    focus: function (t) {
                                      e.message = "";
                                    },
                                    input: function (t) {
                                      t.target.composing ||
                                        e.$set(
                                          e.newProfileForm,
                                          "password",
                                          t.target.value
                                        );
                                    },
                                  },
                                }),
                              ]),
                            ]),
                          ]),
                          e._v(" "),
                          t("div", [
                            t("label", [
                              t("span", [
                                e._v(e._s(e.$t("modals.sign_up.repeat"))),
                              ]),
                              e._v(" "),
                              t("p", { staticClass: "input-img" }, [
                                t("img", { attrs: { src: r(108), alt: "" } }),
                                e._v(" "),
                                t("input", {
                                  directives: [
                                    {
                                      name: "validate",
                                      rawName: "v-validate",
                                      value: "required|confirmed:password",
                                      expression:
                                        "'required|confirmed:password'",
                                    },
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: e.repeatPassword,
                                      expression: "repeatPassword",
                                    },
                                  ],
                                  style: e.errors.has(
                                    "register.password_confirmation"
                                  )
                                    ? { border: "1px solid red" }
                                    : {},
                                  attrs: {
                                    "data-vv-as": "password",
                                    "data-vv-scope": "register",
                                    type: "password",
                                    name: "password_confirmation",
                                    placeholder: "******",
                                  },
                                  domProps: { value: e.repeatPassword },
                                  on: {
                                    focus: function (t) {
                                      e.message = "";
                                    },
                                    input: function (t) {
                                      t.target.composing ||
                                        (e.repeatPassword = t.target.value);
                                    },
                                  },
                                }),
                              ]),
                            ]),
                          ]),
                        ]),
                        e._v(" "),
                        e.captchaSettings.sitekey &&
                        "recaptcha_v2" === e.captchaSettings.module
                          ? t(
                              "div",
                              {
                                staticStyle: {
                                  "text-align": "center",
                                  width: "100%",
                                },
                              },
                              [
                                t(
                                  "center",
                                  [
                                    t("recaptcha", {
                                      ref: "recaptcha",
                                      attrs: {
                                        sitekey: e.captchaSettings.sitekey,
                                        "load-recaptcha-script": !0,
                                        language: e.$root.$i18n.locale,
                                      },
                                      on: {
                                        verify: function (t) {
                                          return (e.newProfileForm.captcha = t);
                                        },
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ],
                              1
                            )
                          : e._e(),
                        e._v(" "),
                        t(
                          "div",
                          { staticClass: "d-flex popup-personal-room__bot" },
                          [
                            t("div", { staticClass: "popup-personal-date" }, [
                              t("p", [
                                e._v(e._s(e.$t("modals.sign_up.rules"))),
                              ]),
                            ]),
                            e._v(" "),
                            t("div", { staticClass: "text-center" }, [
                              e.getRequestStateUser("registration", "isPending")
                                ? t(
                                    "button",
                                    {
                                      staticClass: "btn btn-submit",
                                      attrs: { type: "button" },
                                    },
                                    [
                                      t("loader", {
                                        attrs: {
                                          responsive: !0,
                                          width: "44",
                                          height: "44",
                                        },
                                      }),
                                    ],
                                    1
                                  )
                                : t(
                                    "button",
                                    {
                                      staticClass: "btn btn-submit",
                                      attrs: { type: "button" },
                                      on: {
                                        click: function (t) {
                                          return (
                                            t.preventDefault(),
                                            e.registration.apply(
                                              null,
                                              arguments
                                            )
                                          );
                                        },
                                      },
                                    },
                                    [
                                      t("span", [
                                        e._v(e._s(e.$t("ui.buttons.sign_up"))),
                                      ]),
                                    ]
                                  ),
                            ]),
                          ]
                        ),
                      ]),
                    ]),
                    e._v(" "),
                    e.getRequestStateSocial("getSocials", "isRejected")
                      ? t("div", { staticClass: "popup-bottom d-flex" }, [
                          t(
                            "p",
                            { staticClass: "popup-bottom-title text-center" },
                            [
                              e._v(
                                "\n          Error loading social methods\n        "
                              ),
                            ]
                          ),
                        ])
                      : e.getRequestStateSocial("getSocials", "isPending")
                      ? t("div", { staticClass: "popup-bottom d-flex" }, [
                          t(
                            "p",
                            { staticClass: "popup-bottom-title text-center" },
                            [
                              e._v(
                                "\n          Loading social methods...\n        "
                              ),
                            ]
                          ),
                        ])
                      : e._e(),
                    e._v(" "),
                    e.getRequestStateSocial("getSocials", "isSuccess") &&
                    e.socials.data.length > 0
                      ? t(
                          "div",
                          { staticClass: "popup-bottom d-flex popup-bottom__" },
                          [
                            t(
                              "p",
                              { staticClass: "d-flex popup-bottom-title" },
                              [
                                t("img", { attrs: { src: r(408), alt: "" } }),
                                e._v(
                                  "\n          " +
                                    e._s(e.$t("modals.sign_up.social")) +
                                    "\n        "
                                ),
                              ]
                            ),
                            e._v(" "),
                            t(
                              "ul",
                              e._l(e.socials.data, function (o, n) {
                                return t("li", { key: "social_btn_" + n }, [
                                  t(
                                    "a",
                                    {
                                      attrs: {
                                        href: e.$rest.servicePath + o.url,
                                      },
                                    },
                                    [
                                      "google" === o.name
                                        ? t("img", {
                                            attrs: { src: r(255), alt: "" },
                                          })
                                        : e._e(),
                                      e._v(" "),
                                      "facebook" === o.name
                                        ? t("img", {
                                            attrs: { src: r(256), alt: "" },
                                          })
                                        : e._e(),
                                      e._v(" "),
                                      "vkontakte" === o.name
                                        ? t("img", {
                                            attrs: { src: r(257), alt: "" },
                                          })
                                        : e._e(),
                                      e._v(" "),
                                      "twitter" === o.name
                                        ? t("img", {
                                            attrs: { src: r(258), alt: "" },
                                          })
                                        : e._e(),
                                      e._v(" "),
                                      "github" === o.name
                                        ? t("img", {
                                            attrs: { src: r(259), alt: "" },
                                          })
                                        : e._e(),
                                      e._v(" "),
                                      "linkedin" === o.name
                                        ? t("img", {
                                            attrs: { src: r(260), alt: "" },
                                          })
                                        : e._e(),
                                      e._v(" "),
                                      "meetup" === o.name
                                        ? t("img", {
                                            attrs: { src: r(261), alt: "" },
                                          })
                                        : e._e(),
                                      e._v(" "),
                                      "instagram" === o.name
                                        ? t("img", {
                                            attrs: { src: r(262), alt: "" },
                                          })
                                        : e._e(),
                                      e._v(" "),
                                      "foursquare" === o.name
                                        ? t("img", {
                                            attrs: { src: r(263), alt: "" },
                                          })
                                        : e._e(),
                                      e._v(" "),
                                      "amazon" === o.name
                                        ? t("img", {
                                            attrs: { src: r(264), alt: "" },
                                          })
                                        : e._e(),
                                      e._v(" "),
                                      "tumblr" === o.name
                                        ? t("img", {
                                            attrs: { src: r(265), alt: "" },
                                          })
                                        : e._e(),
                                    ]
                                  ),
                                ]);
                              }),
                              0
                            ),
                          ]
                        )
                      : e._e(),
                  ]),
                ]),
              ]
            );
          },
          [],
          !1,
          null,
          "534e4249",
          null
        );
      t.a = component.exports;
    },
    function (e, t, r) {
      "use strict";
      r(28), r(11), r(12), r(15), r(6), r(19), r(13), r(20);
      var o = r(4),
        n = (r(69), r(3));
      function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(r), !0).forEach(function (t) {
                Object(o.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : c(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var d = {
          data: function () {
            return { copied: !1, code: "", secret: "" };
          },
          computed: l({}, Object(n.c)("user", ["qr", "load"])),
          watch: {
            qr: function () {
              this.code = "";
            },
          },
          created: function () {
            this.otpCreate();
          },
          methods: l(
            l(
              {
                clip: function () {
                  var e = this;
                  navigator.clipboard.writeText(this.qr.secret),
                    (this.copied = !0),
                    setTimeout(function () {
                      e.copied = !1;
                    }, 2e3);
                },
              },
              Object(n.b)("user", ["otpCreate", "otpConfirm"])
            ),
            Object(n.d)("user", { setCreate: "create" })
          ),
        },
        m = (r(411), r(7)),
        component = Object(m.a)(
          d,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "div",
              {
                staticClass: "popup popup-personal-room popup-open modal-mask",
              },
              [
                t("div", { staticClass: "modal-wrapper" }, [
                  t("div", {
                    staticClass:
                      "popup-close-bloc popup-close-bloc-personal-room",
                    on: {
                      click: function (t) {
                        return t.target !== t.currentTarget
                          ? null
                          : e.$emit("close");
                      },
                    },
                  }),
                  e._v(" "),
                  t(
                    "div",
                    { staticClass: "popup-wr-item" },
                    [
                      t("div", { staticClass: "modal-header text-center" }, [
                        e.load && e.qr
                          ? t(
                              "span",
                              {
                                staticClass:
                                  "popup-close-btn popup-close-btn-personal-room",
                                on: {
                                  click: function (t) {
                                    return t.target !== t.currentTarget
                                      ? null
                                      : e.$emit("close");
                                  },
                                },
                              },
                              [e._v("\n          ×\n        ")]
                            )
                          : e._e(),
                      ]),
                      e._v(" "),
                      t("transition", { attrs: { name: "faded-down" } }, [
                        e.qr
                          ? t(
                              "div",
                              { staticClass: "qr-block" },
                              [
                                t("p", { staticClass: "qr-block-title" }, [
                                  e._v(
                                    "\n            " +
                                      e._s(e.$t("modals.2fa.scan")) +
                                      "\n          "
                                  ),
                                ]),
                                e._v(" "),
                                e.qr.url
                                  ? t("qrcode-vue", {
                                      attrs: {
                                        value: e.qr.url,
                                        size: 180,
                                        level: "H",
                                        "class-name": "qrcode-image",
                                      },
                                    })
                                  : t("img", {
                                      attrs: {
                                        src: e.qr.image,
                                        width: "200",
                                        height: "200",
                                      },
                                    }),
                                e._v(" "),
                                t("p", { staticClass: "small-text" }, [
                                  e._v(
                                    "\n            " +
                                      e._s(e.$t("modals.2fa.copy")) +
                                      "\n          "
                                  ),
                                ]),
                                e._v(" "),
                                t(
                                  "div",
                                  {
                                    staticClass: "border-shadow p-input-secter",
                                  },
                                  [
                                    e.copied
                                      ? t(
                                          "p",
                                          { staticClass: "copied-text-2fa" },
                                          [
                                            e._v(
                                              "\n              " +
                                                e._s(
                                                  e.$t("modals.2fa.copied")
                                                ) +
                                                "\n              "
                                            ),
                                            t(
                                              "span",
                                              {
                                                staticClass:
                                                  "copy-icon-profile",
                                              },
                                              [
                                                t("span", [
                                                  t("img", {
                                                    staticStyle: {
                                                      opacity: "0",
                                                    },
                                                    attrs: {
                                                      src: r(203),
                                                      alt: "copy-documents",
                                                    },
                                                  }),
                                                ]),
                                              ]
                                            ),
                                          ]
                                        )
                                      : t("p", [
                                          e._v(
                                            "\n              " +
                                              e._s(e.qr.secret) +
                                              "\n              "
                                          ),
                                          t(
                                            "span",
                                            {
                                              staticClass: "copy-icon-profile",
                                              on: { click: e.clip },
                                            },
                                            [
                                              t("span", [
                                                t("img", {
                                                  attrs: {
                                                    src: r(203),
                                                    alt: "copy-documents",
                                                  },
                                                }),
                                              ]),
                                            ]
                                          ),
                                        ]),
                                  ]
                                ),
                                e._v(" "),
                                t(
                                  "p",
                                  {
                                    staticClass: "small-text helper-token-text",
                                  },
                                  [
                                    e._v(
                                      "\n            " +
                                        e._s(e.$t("modals.2fa.write")) +
                                        "\n          "
                                    ),
                                  ]
                                ),
                                e._v(" "),
                                t("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: e.code,
                                      expression: "code",
                                    },
                                  ],
                                  ref: "number",
                                  staticClass: "hide",
                                  attrs: {
                                    autofocus: "",
                                    type: "number",
                                    name: "code",
                                    placeholder: e.$t("writeCode"),
                                  },
                                  domProps: { value: e.code },
                                  on: {
                                    keyup: function (t) {
                                      if (
                                        !t.type.indexOf("key") &&
                                        e._k(
                                          t.keyCode,
                                          "enter",
                                          13,
                                          t.key,
                                          "Enter"
                                        )
                                      )
                                        return null;
                                      e.otpConfirm(e.code).then(function (t) {
                                        return t ? e.setCreate(!1) : "";
                                      });
                                    },
                                    input: [
                                      function (t) {
                                        t.target.composing ||
                                          (e.code = t.target.value);
                                      },
                                      function (t) {
                                        t.target.value.length < 7
                                          ? (e.code = t.target.value)
                                          : (e.code = t.target.value.slice(
                                              0,
                                              6
                                            ));
                                      },
                                    ],
                                  },
                                }),
                                e._v(" "),
                                t(
                                  "div",
                                  { staticClass: "number-wr" },
                                  e._l(6, function (r, i) {
                                    return t(
                                      "div",
                                      {
                                        key: i,
                                        staticClass: "number",
                                        class: (e.code.length, ""),
                                        on: {
                                          click: function (t) {
                                            return e.$refs.number.focus();
                                          },
                                        },
                                      },
                                      [
                                        e._v(
                                          "\n              " +
                                            e._s(
                                              e.code.length === i
                                                ? ""
                                                : e.code.charAt(i)
                                            ) +
                                            "\n              "
                                        ),
                                        e.code.length === i ||
                                        (5 === i && 6 === e.code.length)
                                          ? t(
                                              "span",
                                              { staticClass: "flick" },
                                              [e._v("|")]
                                            )
                                          : e._e(),
                                      ]
                                    );
                                  }),
                                  0
                                ),
                                e._v(" "),
                                t(
                                  "button",
                                  {
                                    staticClass: "btn btn-submit",
                                    on: {
                                      click: function (t) {
                                        e.otpConfirm(e.code).then(function (t) {
                                          return t ? e.setCreate(!1) : "";
                                        });
                                      },
                                    },
                                  },
                                  [
                                    e._v(
                                      "\n            " +
                                        e._s(e.$t("modals.2fa.confirm")) +
                                        "\n          "
                                    ),
                                  ]
                                ),
                                e._v(" "),
                                t(
                                  "p",
                                  { staticClass: "small-text app-links-block" },
                                  [
                                    e._v(
                                      e._s(e.$t("modals.2fa.app")) +
                                        " Google Authenticator"
                                    ),
                                  ]
                                ),
                                e._v(" "),
                                t("div", { staticClass: "mobile-bar" }, [
                                  t(
                                    "a",
                                    {
                                      staticClass: "small-text mobile app-link",
                                      attrs: {
                                        target: "_blank",
                                        href: "https://itunes.apple.com/us/app/google-authenticator/id388497605В",
                                      },
                                    },
                                    [
                                      t("img", {
                                        attrs: {
                                          src: r(268),
                                          alt: "firefox 2fa app",
                                        },
                                      }),
                                    ]
                                  ),
                                  e._v(" "),
                                  t(
                                    "a",
                                    {
                                      staticClass: "small-text mobile app-link",
                                      attrs: {
                                        target: "_blank",
                                        href: "https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2",
                                      },
                                    },
                                    [
                                      t("img", {
                                        attrs: {
                                          src: r(269),
                                          alt: "firefox 2fa app",
                                        },
                                      }),
                                    ]
                                  ),
                                  e._v(" "),
                                  t(
                                    "a",
                                    {
                                      staticClass: "small-text mobile app-link",
                                      attrs: {
                                        target: "_blank",
                                        href: "https://www.microsoft.com/en-us/p/authenticator/9nblggh08h54",
                                      },
                                    },
                                    [
                                      t("img", {
                                        attrs: {
                                          src: r(270),
                                          alt: "firefox 2fa app",
                                        },
                                      }),
                                    ]
                                  ),
                                  e._v(" "),
                                  t(
                                    "a",
                                    {
                                      staticClass: "small-text mobile app-link",
                                      attrs: {
                                        target: "_blank",
                                        href: "https://chrome.google.com/webstore/detail/authenticator/bhghoamapcdpbohphigoooaddinpkbai",
                                      },
                                    },
                                    [
                                      t("img", {
                                        attrs: {
                                          src: r(271),
                                          alt: "firefox 2fa app",
                                        },
                                      }),
                                    ]
                                  ),
                                  e._v(" "),
                                  t(
                                    "a",
                                    {
                                      staticClass: "small-text mobile app-link",
                                      attrs: {
                                        target: "_blank",
                                        href: "https://addons.mozilla.org/en-US/firefox/addon/auth-helper/?src=search",
                                      },
                                    },
                                    [
                                      t("img", {
                                        attrs: {
                                          src: r(272),
                                          alt: "firefox 2fa app",
                                        },
                                      }),
                                    ]
                                  ),
                                ]),
                              ],
                              1
                            )
                          : t(
                              "div",
                              { staticClass: "qr-block" },
                              [
                                e.load
                                  ? t("p", { staticClass: "qr-block-title" }, [
                                      e._v(
                                        "\n            " +
                                          e._s(e.$t("modals.2fa.scan")) +
                                          "\n          "
                                      ),
                                    ])
                                  : t("loader", {
                                      attrs: {
                                        responsive: !0,
                                        width: "100",
                                        height: "100",
                                      },
                                    }),
                                e._v(" "),
                                t(
                                  "p",
                                  { staticClass: "small-text app-links-block" },
                                  [
                                    e._v(
                                      e._s(e.$t("modals.2fa.app")) +
                                        " Google Authenticator"
                                    ),
                                  ]
                                ),
                                e._v(" "),
                                t("div", { staticClass: "mobile-bar" }, [
                                  t(
                                    "a",
                                    {
                                      staticClass: "small-text mobile app-link",
                                      attrs: {
                                        target: "_blank",
                                        href: "https://itunes.apple.com/us/app/google-authenticator/id388497605В",
                                      },
                                    },
                                    [
                                      t("img", {
                                        attrs: {
                                          src: r(268),
                                          alt: "firefox 2fa app",
                                        },
                                      }),
                                    ]
                                  ),
                                  e._v(" "),
                                  t(
                                    "a",
                                    {
                                      staticClass: "small-text mobile app-link",
                                      attrs: {
                                        target: "_blank",
                                        href: "https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2",
                                      },
                                    },
                                    [
                                      t("img", {
                                        attrs: {
                                          src: r(269),
                                          alt: "firefox 2fa app",
                                        },
                                      }),
                                    ]
                                  ),
                                  e._v(" "),
                                  t(
                                    "a",
                                    {
                                      staticClass: "small-text mobile app-link",
                                      attrs: {
                                        target: "_blank",
                                        href: "https://www.microsoft.com/en-us/p/authenticator/9nblggh08h54",
                                      },
                                    },
                                    [
                                      t("img", {
                                        attrs: {
                                          src: r(270),
                                          alt: "firefox 2fa app",
                                        },
                                      }),
                                    ]
                                  ),
                                  e._v(" "),
                                  t(
                                    "a",
                                    {
                                      staticClass: "small-text mobile app-link",
                                      attrs: {
                                        target: "_blank",
                                        href: "https://chrome.google.com/webstore/detail/authenticator/bhghoamapcdpbohphigoooaddinpkbai",
                                      },
                                    },
                                    [
                                      t("img", {
                                        attrs: {
                                          src: r(271),
                                          alt: "firefox 2fa app",
                                        },
                                      }),
                                    ]
                                  ),
                                  e._v(" "),
                                  t(
                                    "a",
                                    {
                                      staticClass: "small-text mobile app-link",
                                      attrs: {
                                        target: "_blank",
                                        href: "https://addons.mozilla.org/en-US/firefox/addon/auth-helper/?src=search",
                                      },
                                    },
                                    [
                                      t("img", {
                                        attrs: {
                                          src: r(272),
                                          alt: "firefox 2fa app",
                                        },
                                      }),
                                    ]
                                  ),
                                ]),
                              ],
                              1
                            ),
                      ]),
                    ],
                    1
                  ),
                ]),
              ]
            );
          },
          [],
          !1,
          null,
          "ece72776",
          null
        );
      t.a = component.exports;
    },
    function (e, t, r) {
      "use strict";
      r(241), r(11), r(12), r(15), r(6), r(19), r(13), r(20);
      var o = r(4),
        n = r(3);
      function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(r), !0).forEach(function (t) {
                Object(o.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : c(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var d = {
          data: function () {
            return {
              pass: {
                password: "",
                token: this.$route.params.token,
                repeat: "",
              },
            };
          },
          computed: l({}, Object(n.c)("user", ["load"])),
          methods: l(
            l({}, Object(n.b)("user", ["resetPassword"])),
            Object(n.d)("user", ["login", "reset"])
          ),
        },
        m = r(7),
        component = Object(m.a)(
          d,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "div",
              { staticClass: "popup popup-personal-room popup-open" },
              [
                t("div", {
                  staticClass:
                    "popup-close-bloc popup-close-bloc-personal-room",
                  on: {
                    click: function (t) {
                      return t.target !== t.currentTarget
                        ? null
                        : e.$emit("close");
                    },
                  },
                }),
                e._v(" "),
                t("div", { staticClass: "popup-wr" }, [
                  t(
                    "span",
                    {
                      staticClass:
                        "popup-close-btn popup-close-btn-personal-room",
                      on: {
                        click: function (t) {
                          return t.target !== t.currentTarget
                            ? null
                            : e.$emit("close");
                        },
                      },
                    },
                    [e._v("\n      ×\n    ")]
                  ),
                  e._v(" "),
                  t("div", { staticClass: "popup-wr-item" }, [
                    t("h5", { staticClass: "title text-center" }, [
                      e._v(e._s(e.$t("page.user.profile.reset.title"))),
                    ]),
                    e._v(" "),
                    t("div", { staticClass: "popup-top" }, [
                      t("form", { attrs: { action: "" } }, [
                        t("div", [
                          t("label", [
                            t("span", [
                              e._v(
                                e._s(e.$t("page.user.profile.reset.password"))
                              ),
                            ]),
                            e._v(" "),
                            t("p", { staticClass: "input-img" }, [
                              t("img", { attrs: { src: r(108), alt: "" } }),
                              e._v(" "),
                              t("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: e.pass.password,
                                    expression: "pass.password",
                                  },
                                ],
                                attrs: {
                                  type: "password",
                                  placeholder: "******",
                                },
                                domProps: { value: e.pass.password },
                                on: {
                                  input: function (t) {
                                    t.target.composing ||
                                      e.$set(
                                        e.pass,
                                        "password",
                                        t.target.value
                                      );
                                  },
                                },
                              }),
                            ]),
                          ]),
                          e._v(" "),
                          t(
                            "label",
                            { staticClass: "popup-succes margin-b-0" },
                            [
                              t("span", [
                                e._v(
                                  e._s(e.$t("page.user.profile.reset.repeat"))
                                ),
                              ]),
                              e._v(" "),
                              t("p", { staticClass: "input-img" }, [
                                t("img", { attrs: { src: r(108), alt: "" } }),
                                e._v(" "),
                                t("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: e.pass.repeat,
                                      expression: "pass.repeat",
                                    },
                                  ],
                                  attrs: {
                                    type: "password",
                                    placeholder: "******",
                                  },
                                  domProps: { value: e.pass.repeat },
                                  on: {
                                    input: function (t) {
                                      t.target.composing ||
                                        e.$set(
                                          e.pass,
                                          "repeat",
                                          t.target.value
                                        );
                                    },
                                  },
                                }),
                              ]),
                            ]
                          ),
                        ]),
                        e._v(" "),
                        t(
                          "div",
                          {
                            staticClass: "text-center",
                            style: { opacity: e.load ? 1 : 0.5 },
                          },
                          [
                            t(
                              "button",
                              {
                                staticClass: "btn btn-submit",
                                on: {
                                  click: function (t) {
                                    t.preventDefault(),
                                      e.pass.password === e.pass.repeat
                                        ? e
                                            .resetPassword(e.pass)
                                            .then(function (t) {
                                              return t ? e.reset(!1) : "";
                                            })
                                        : e.$store.dispatch("notify/add", {
                                            type: "warning",
                                            message:
                                              "Repeat your password incorrect",
                                          });
                                  },
                                },
                              },
                              [
                                e._v(
                                  "\n              " +
                                    e._s(
                                      e.$t("page.user.profile.reset.submit")
                                    ) +
                                    "\n            "
                                ),
                              ]
                            ),
                          ]
                        ),
                      ]),
                    ]),
                  ]),
                ]),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.a = component.exports;
    },
    function (e, t, r) {
      "use strict";
      var o = r(136).a,
        n = (r(404), r(7)),
        component = Object(n.a)(
          o,
          function () {
            var e = this._self._c;
            return e(
              "div",
              {
                staticClass: "footer footer-support",
                staticStyle: {
                  background:
                    "linear-gradient(90deg, #2C440E 0%, rgba(77, 117, 26, 0.88) 53.66%, #355012 100%)",
                },
              },
              [
                e(
                  "div",
                  { staticClass: "container" },
                  [
                    e("footerContacts", {
                      attrs: { "is-footer": !0, color: "white", "is-page": !0 },
                    }),
                  ],
                  1
                ),
              ]
            );
          },
          [],
          !1,
          null,
          "ff655f22",
          null
        );
      t.a = component.exports;
    },
    function (e, t, r) {
      "use strict";
      r(28), r(25);
      var o = r(137).a,
        n = (r(406), r(7)),
        component = Object(n.a)(
          o,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "div",
              {
                staticClass: "popup popup-personal-room popup-open modal-mask",
              },
              [
                t("div", { staticClass: "modal-wrapper" }, [
                  t("div", {
                    staticClass:
                      "popup-close-bloc popup-close-bloc-personal-room",
                    on: {
                      click: function (t) {
                        return t.target !== t.currentTarget
                          ? null
                          : e.$emit("close");
                      },
                    },
                  }),
                  e._v(" "),
                  t(
                    "div",
                    { staticClass: "popup-wr-item" },
                    [
                      t("div", { staticClass: "modal-header" }, [
                        t("h5", { staticClass: "title text-center" }, [
                          e._v(
                            "\n          " +
                              e._s(
                                e.reset
                                  ? e.$t("modals.login.password_recovery")
                                  : e.$t("modals.login.login")
                              ) +
                              "\n        "
                          ),
                        ]),
                        e._v(" "),
                        t(
                          "span",
                          {
                            staticClass:
                              "popup-close-btn popup-close-btn-personal-room",
                            on: {
                              click: function (t) {
                                return t.target !== t.currentTarget
                                  ? null
                                  : e.$emit("close");
                              },
                            },
                          },
                          [e._v("\n          ×\n        ")]
                        ),
                      ]),
                      e._v(" "),
                      t("transition", { attrs: { name: "faded" } }, [
                        e.reset || e.auth || "login" !== e.showComponent
                          ? e._e()
                          : t("div", { staticClass: "popup-top" }, [
                              t("form", { attrs: { action: "" } }, [
                                t("div", [
                                  t("label", [
                                    e.getRequestStateUser("login", "isRejected")
                                      ? t(
                                          "p",
                                          {
                                            style: {
                                              color: "red",
                                              textAlign: "center",
                                              fontWeight: "bold",
                                            },
                                          },
                                          [
                                            e._v(
                                              "\n                  " +
                                                e._s(e.errStep) +
                                                "\n                "
                                            ),
                                          ]
                                        )
                                      : e._e(),
                                    e._v(" "),
                                    t("p", { staticClass: "d-flex" }, [
                                      t("span", [
                                        e._v(e._s(e.$t("modals.login.email"))),
                                      ]),
                                      e._v(" "),
                                      t(
                                        "a",
                                        {
                                          on: {
                                            click: function (t) {
                                              e.showLog(!1), e.showReg(!0);
                                            },
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n                    " +
                                              e._s(e.$t("ui.buttons.sign_up")) +
                                              "\n                  "
                                          ),
                                        ]
                                      ),
                                    ]),
                                    e._v(" "),
                                    t("p", { staticClass: "input-img" }, [
                                      t("img", {
                                        attrs: { src: r(135), alt: "" },
                                      }),
                                      e._v(" "),
                                      t("input", {
                                        directives: [
                                          {
                                            name: "validate",
                                            rawName: "v-validate",
                                            value: "required|email",
                                            expression: "'required|email'",
                                          },
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: e.formAuth.email,
                                            expression: "formAuth.email",
                                          },
                                        ],
                                        style: e.errors.has("login.email")
                                          ? { border: "1px solid red" }
                                          : {},
                                        attrs: {
                                          "data-vv-scope": "login",
                                          placeholder:
                                            e.$t("modals.login.email"),
                                          name: "email",
                                          type: "email",
                                        },
                                        domProps: { value: e.formAuth.email },
                                        on: {
                                          keyup: function (t) {
                                            return !t.type.indexOf("key") &&
                                              e._k(
                                                t.keyCode,
                                                "enter",
                                                13,
                                                t.key,
                                                "Enter"
                                              )
                                              ? null
                                              : e.$refs.password.focus();
                                          },
                                          input: function (t) {
                                            t.target.composing ||
                                              e.$set(
                                                e.formAuth,
                                                "email",
                                                t.target.value
                                              );
                                          },
                                        },
                                      }),
                                    ]),
                                  ]),
                                ]),
                                e._v(" "),
                                t("div", [
                                  t("label", { staticClass: "margin-b-0" }, [
                                    t("p", { staticClass: "d-flex" }, [
                                      t("span", [
                                        e._v(
                                          e._s(e.$t("modals.login.password"))
                                        ),
                                      ]),
                                      e._v(" "),
                                      t(
                                        "a",
                                        {
                                          on: {
                                            click: function (t) {
                                              e.reset = !0;
                                            },
                                          },
                                        },
                                        [e._v(e._s(e.$t("ui.buttons.forget")))]
                                      ),
                                    ]),
                                    e._v(" "),
                                    t("p", { staticClass: "input-img" }, [
                                      t("img", {
                                        attrs: { src: r(108), alt: "" },
                                      }),
                                      e._v(" "),
                                      t("input", {
                                        directives: [
                                          {
                                            name: "validate",
                                            rawName: "v-validate",
                                            value: "required|min:1",
                                            expression: "'required|min:1'",
                                          },
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: e.formAuth.password,
                                            expression: "formAuth.password",
                                          },
                                        ],
                                        ref: "password",
                                        style: e.errors.has("login.password")
                                          ? { border: "1px solid red" }
                                          : {},
                                        attrs: {
                                          "data-vv-scope": "login",
                                          name: "password",
                                          type: "password",
                                          placeholder: "******",
                                        },
                                        domProps: {
                                          value: e.formAuth.password,
                                        },
                                        on: {
                                          keyup: function (t) {
                                            return !t.type.indexOf("key") &&
                                              e._k(
                                                t.keyCode,
                                                "enter",
                                                13,
                                                t.key,
                                                "Enter"
                                              )
                                              ? null
                                              : function () {
                                                  if (
                                                    !e.captchaSettings
                                                      .sitekey ||
                                                    !e.captchaSettings.module
                                                  )
                                                    return e.signin({
                                                      formAuth: e.formAuth,
                                                    });
                                                }.apply(null, arguments);
                                          },
                                          input: function (t) {
                                            t.target.composing ||
                                              e.$set(
                                                e.formAuth,
                                                "password",
                                                t.target.value
                                              );
                                          },
                                        },
                                      }),
                                    ]),
                                  ]),
                                ]),
                                e._v(" "),
                                e.captchaSettings.sitekey &&
                                "recaptcha_v2" === e.captchaSettings.module
                                  ? t(
                                      "div",
                                      {
                                        staticStyle: {
                                          transform: "scale(0.9)",
                                          "margin-left": "-15px",
                                          "margin-bottom": "0",
                                        },
                                      },
                                      [
                                        t("recaptcha", {
                                          ref: "recaptcha",
                                          attrs: {
                                            sitekey: e.captchaSettings.sitekey,
                                            "load-recaptcha-script": !0,
                                            language: e.$root.$i18n.locale,
                                          },
                                          on: {
                                            verify: function (t) {
                                              return (e.formAuth.captcha = t);
                                            },
                                          },
                                        }),
                                      ],
                                      1
                                    )
                                  : e._e(),
                                e._v(" "),
                                t("div", { staticClass: "text-center" }, [
                                  e.getRequestStateUser("login", "isPending")
                                    ? t(
                                        "button",
                                        {
                                          staticClass: "btn btn-submit",
                                          attrs: { type: "button" },
                                        },
                                        [
                                          t("loader", {
                                            attrs: {
                                              responsive: !0,
                                              width: "44",
                                              height: "44",
                                            },
                                          }),
                                        ],
                                        1
                                      )
                                    : t(
                                        "button",
                                        {
                                          staticClass: "btn btn-submit",
                                          attrs: { type: "button" },
                                          on: {
                                            click: function (t) {
                                              return e.signin({
                                                formAuth: e.formAuth,
                                              });
                                            },
                                          },
                                        },
                                        [
                                          t("span", [
                                            e._v(
                                              e._s(e.$t("ui.buttons.sign_in"))
                                            ),
                                          ]),
                                        ]
                                      ),
                                ]),
                              ]),
                            ]),
                        e._v(" "),
                        e.reset && !e.auth
                          ? t("div", { staticClass: "popup-top" }, [
                              t("form", { attrs: { action: "" } }, [
                                t("div", [
                                  t(
                                    "label",
                                    { staticClass: "popup-succes margin-b-0" },
                                    [
                                      t("span", [
                                        e._v(e._s(e.$t("modals.login.email"))),
                                      ]),
                                      e._v(" "),
                                      t("p", { staticClass: "input-img" }, [
                                        t("img", {
                                          attrs: { src: r(135), alt: "" },
                                        }),
                                        e._v(" "),
                                        t("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: e.email,
                                              expression: "email",
                                            },
                                          ],
                                          attrs: {
                                            type: "email",
                                            placeholder: "example@mail.com",
                                          },
                                          domProps: { value: e.email },
                                          on: {
                                            input: function (t) {
                                              t.target.composing ||
                                                (e.email = t.target.value);
                                            },
                                          },
                                        }),
                                      ]),
                                    ]
                                  ),
                                ]),
                                e._v(" "),
                                e.captchaSettings.sitekey &&
                                "recaptcha_v2" === e.captchaSettings.module
                                  ? t(
                                      "div",
                                      {
                                        staticStyle: {
                                          transform: "scale(0.9)",
                                          "margin-left": "-15px",
                                          "margin-bottom": "0",
                                        },
                                      },
                                      [
                                        t("recaptcha", {
                                          ref: "recaptcha",
                                          attrs: {
                                            sitekey: e.captchaSettings.sitekey,
                                            "load-recaptcha-script": !0,
                                            language: e.$root.$i18n.locale,
                                          },
                                          on: {
                                            verify: function (t) {
                                              return (e.captcha = t);
                                            },
                                          },
                                        }),
                                      ],
                                      1
                                    )
                                  : e._e(),
                                e._v(" "),
                                t("div", { staticClass: "text-center" }, [
                                  t(
                                    "button",
                                    {
                                      staticClass: "btn btn-submit",
                                      on: {
                                        click: function (t) {
                                          return (
                                            t.preventDefault(),
                                            e.restPassword({
                                              email: e.email,
                                              captcha: e.captcha,
                                            })
                                          );
                                        },
                                      },
                                    },
                                    [
                                      e._v(
                                        "\n                " +
                                          e._s(
                                            e.$t("ui.buttons.password_recovery")
                                          ) +
                                          "\n              "
                                      ),
                                    ]
                                  ),
                                ]),
                              ]),
                            ])
                          : e._e(),
                      ]),
                      e._v(" "),
                      "2fa" === e.showComponent
                        ? t("div", { staticClass: "popup-top" }, [
                            e.getRequestStateUser("login", "isRejected")
                              ? t(
                                  "p",
                                  {
                                    style: {
                                      color: "red",
                                      textAlign: "center",
                                      fontWeight: "bold",
                                    },
                                  },
                                  [
                                    e._v(
                                      "\n          " +
                                        e._s(e.errStep2) +
                                        "\n        "
                                    ),
                                  ]
                                )
                              : e._e(),
                            e._v(" "),
                            t("form", { attrs: { action: "" } }, [
                              t("div", [
                                t("p", { staticClass: "d-flex flex-start" }, [
                                  t("img", { attrs: { src: r(254), alt: "" } }),
                                  e._v(
                                    e._s(e.$t("modals.2fa.confirmCode")) +
                                      "\n            "
                                  ),
                                ]),
                                e._v(" "),
                                t("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: e.formAuth.code,
                                      expression: "formAuth.code",
                                    },
                                  ],
                                  ref: "number",
                                  staticClass: "hide",
                                  attrs: {
                                    autofocus: "",
                                    type: "number",
                                    name: "code",
                                  },
                                  domProps: { value: e.formAuth.code },
                                  on: {
                                    keyup: function (t) {
                                      return !t.type.indexOf("key") &&
                                        e._k(
                                          t.keyCode,
                                          "enter",
                                          13,
                                          t.key,
                                          "Enter"
                                        )
                                        ? null
                                        : e.$emit("confirm", e.formAuth.code);
                                    },
                                    input: [
                                      function (t) {
                                        t.target.composing ||
                                          e.$set(
                                            e.formAuth,
                                            "code",
                                            t.target.value
                                          );
                                      },
                                      function (t) {
                                        t.target.value.length < 7
                                          ? (e.formAuth.code = t.target.value)
                                          : (e.formAuth.code =
                                              t.target.value.slice(0, 6));
                                      },
                                    ],
                                  },
                                }),
                                e._v(" "),
                                t(
                                  "div",
                                  { staticClass: "d-flex flex-row margin-b-0" },
                                  e._l(6, function (r, i) {
                                    return t(
                                      "div",
                                      {
                                        key: i,
                                        staticClass: "number",
                                        class: (e.formAuth.code.length, ""),
                                        on: {
                                          click: function (t) {
                                            return e.$refs.number.focus();
                                          },
                                        },
                                      },
                                      [
                                        e._v(
                                          "\n                " +
                                            e._s(
                                              e.formAuth.code.length === i
                                                ? ""
                                                : e.formAuth.code.charAt(i)
                                            ) +
                                            "\n                "
                                        ),
                                        e.formAuth.code.length === i ||
                                        (5 === i &&
                                          6 === e.formAuth.code.length)
                                          ? t(
                                              "span",
                                              { staticClass: "flick" },
                                              [e._v("|")]
                                            )
                                          : e._e(),
                                      ]
                                    );
                                  }),
                                  0
                                ),
                              ]),
                              e._v(" "),
                              t("div", { staticClass: "text-center" }, [
                                t(
                                  "button",
                                  {
                                    staticClass: "btn btn-submit",
                                    on: {
                                      click: function (t) {
                                        return (
                                          t.preventDefault(),
                                          e.signin({
                                            step: "2fa",
                                            formAuth: e.formAuth,
                                          })
                                        );
                                      },
                                    },
                                  },
                                  [
                                    e._v(
                                      "\n              " +
                                        e._s(e.$t("ui.buttons.sign_in")) +
                                        "\n            "
                                    ),
                                  ]
                                ),
                              ]),
                            ]),
                          ])
                        : e._e(),
                      e._v(" "),
                      e.getRequestStateSocial("getSocials", "isRejected")
                        ? t("div", { staticClass: "popup-bottom d-flex" }, [
                            t(
                              "p",
                              { staticClass: "popup-bottom-title text-center" },
                              [
                                e._v(
                                  "\n          Error loading social methods\n        "
                                ),
                              ]
                            ),
                          ])
                        : e.getRequestStateSocial("getSocials", "isPending")
                        ? t("div", { staticClass: "popup-bottom d-flex" }, [
                            t(
                              "p",
                              { staticClass: "popup-bottom-title text-center" },
                              [
                                e._v(
                                  "\n          Loading social methods...\n        "
                                ),
                              ]
                            ),
                          ])
                        : !e.reset &&
                          !e.auth &&
                          e.getRequestStateSocial("getSocials", "isSuccess") &&
                          e.socials.data.length > 0
                        ? t("div", { staticClass: "popup-bottom d-flex" }, [
                            t(
                              "p",
                              { staticClass: "popup-bottom-title text-center" },
                              [
                                e._v(
                                  "\n          " +
                                    e._s(e.$t("modals.login.social")) +
                                    "\n        "
                                ),
                              ]
                            ),
                            e._v(" "),
                            t(
                              "ul",
                              e._l(e.socials.data, function (o, n) {
                                return t("li", { key: "social_btn_" + n }, [
                                  t(
                                    "a",
                                    {
                                      attrs: {
                                        href: e.$rest.servicePath + o.url,
                                      },
                                    },
                                    [
                                      "google" === o.name
                                        ? t("img", {
                                            attrs: { src: r(255), alt: "" },
                                          })
                                        : e._e(),
                                      e._v(" "),
                                      "facebook" === o.name
                                        ? t("img", {
                                            attrs: { src: r(256), alt: "" },
                                          })
                                        : e._e(),
                                      e._v(" "),
                                      "vkontakte" === o.name
                                        ? t("img", {
                                            attrs: { src: r(257), alt: "" },
                                          })
                                        : e._e(),
                                      e._v(" "),
                                      "twitter" === o.name
                                        ? t("img", {
                                            attrs: { src: r(258), alt: "" },
                                          })
                                        : e._e(),
                                      e._v(" "),
                                      "github" === o.name
                                        ? t("img", {
                                            attrs: { src: r(259), alt: "" },
                                          })
                                        : e._e(),
                                      e._v(" "),
                                      "linkedin" === o.name
                                        ? t("img", {
                                            attrs: { src: r(260), alt: "" },
                                          })
                                        : e._e(),
                                      e._v(" "),
                                      "meetup" === o.name
                                        ? t("img", {
                                            attrs: { src: r(261), alt: "" },
                                          })
                                        : e._e(),
                                      e._v(" "),
                                      "instagram" === o.name
                                        ? t("img", {
                                            attrs: { src: r(262), alt: "" },
                                          })
                                        : e._e(),
                                      e._v(" "),
                                      "foursquare" === o.name
                                        ? t("img", {
                                            attrs: { src: r(263), alt: "" },
                                          })
                                        : e._e(),
                                      e._v(" "),
                                      "amazon" === o.name
                                        ? t("img", {
                                            attrs: { src: r(264), alt: "" },
                                          })
                                        : e._e(),
                                      e._v(" "),
                                      "tumblr" === o.name
                                        ? t("img", {
                                            attrs: { src: r(265), alt: "" },
                                          })
                                        : e._e(),
                                    ]
                                  ),
                                ]);
                              }),
                              0
                            ),
                          ])
                        : e._e(),
                    ],
                    1
                  ),
                ]),
              ]
            );
          },
          [],
          !1,
          null,
          "0a14a553",
          null
        );
      t.a = component.exports;
    },
    ,
    ,
    ,
    ,
    ,
    function (e, t, r) {
      e.exports = r.p + "img/user.4e87c4f.svg";
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, r) {
      e.exports = r.p + "img/us.89a1d67.svg";
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, r) {
      "use strict";
      var o = r(4),
        n = r(0),
        c = (r(10), r(6), r(24), r(36), r(69), r(11), r(2)),
        l = r.n(c),
        d = (r(89), r(302)),
        m = r.n(d),
        f = [40301, 5555555555555555, 0x863ca6dcebd50];
      l.a.use(m.a);
      var x = r(506);
      t.a = function (e) {
        var t,
          r = e.store,
          c = e.app,
          d = c.i18n.t("errorMessage"),
          m = {
            install: function (e) {
              e.prototype.$rest = this;
            },
            technical_work: r.state.params.technical_work,
            ws: {
              readyState: 0,
              request:
                ((t = Object(n.a)(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return e.abrupt(
                              "return",
                              Promise.reject("Error send (websocket init)")
                            );
                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )),
                function () {
                  return t.apply(this, arguments);
                }),
            },
            api: function (e, param) {
              var t,
                n = "POST";
              2 === (e = e.split(":")).length
                ? ((n = e[0]), (e = e[1]))
                : (e = e[0]),
                (n = n.toUpperCase());
              var l = x.baseUrl + x.apiPath + e + "/";
              return c
                .$axios(
                  ((t = { method: n, url: l }),
                  Object(o.a)(t, "GET" === n ? "params" : "data", param),
                  Object(o.a)(t, "headers", {
                    Lang: c.i18n.locale,
                    "Content-Type": "application/json",
                  }),
                  t)
                )
                .then(function (e) {
                  return e.data;
                })
                .then(function (e) {
                  return !1 === e.success ? Promise.reject(e.error) : e;
                })
                .catch(function (e) {
                  return (
                    f.some(function (t) {
                      return t === e.errorCode;
                    }) ||
                      console.error(
                        "API Error ->",
                        "client",
                        l,
                        "Params->",
                        param || {},
                        ":",
                        e.message
                      ),
                    5555555555555555 === e.errorCode &&
                      r.commit("params/setWorkStatus", !0),
                    d &&
                      d[e.errorCode] &&
                      (e.message = c.i18n.t(
                        "errorMessage." + e.errorCode,
                        e.object
                      )),
                    6231546409213868 === e.errorCode &&
                      (e.message =
                        c.i18n.t("text-field") +
                        (e.object.nameField || "").toLowerCase() +
                        c.i18n.t("not-filled")),
                    Promise.reject(e)
                  );
                });
            },
            unpackImg: function (e) {
              return (
                console.warn("deprecated use urlImg"),
                e.reduce(function (e, t) {
                  return (e[t.type] = t), e;
                }, {})
              );
            },
            urlImg: function (e) {
              return (
                e.files && (e = e.files),
                e.reduce(function (e, t) {
                  return (e[t.type] = x.baseUrl + x.fsPath + t.url), e;
                }, {})
              );
            },
            wsUrl: x.wsUrl,
            baseUrl: x.baseUrl,
            logoPath: x.logoPath,
            faviconPath: x.faviconPath,
            apiPath: x.baseUrl + x.apiPath,
            fsPath: x.baseUrl + x.fsPath,
            servicePath: x.baseUrl + x.servicePath,
            projectName: x.projectName,
            config: x,
          };
        !(function e() {
          if (
            !x.wsUrl ||
            -1 !==
              ["disable", "ws://", "wss://", "false", "off"].indexOf(x.wsUrl)
          )
            return null;
          (m.ws = new WebSocket(x.wsUrl)),
            (m.ws.onopen = function () {
              l.a.prototype.$events.$emit("ws/connect");
            }),
            (m.ws.request = (function () {
              var e = Object(n.a)(
                regeneratorRuntime.mark(function e(t, data) {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (1 !== m.ws.readyState) {
                            e.next = 4;
                            break;
                          }
                          m.ws.send(JSON.stringify({ method: t, data: data })),
                            (e.next = 6);
                          break;
                        case 4:
                          return (
                            console.error("WebSocket is not connected!"),
                            e.abrupt(
                              "return",
                              Promise.reject("Error send (socket closed)")
                            )
                          );
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, r) {
                return e.apply(this, arguments);
              };
            })()),
            (m.ws.onclose = function (t) {
              t.wasClean ||
                (console.error("WS close connection ERROR!"),
                console.error("CODE: " + t.code + " READON: " + t.reason)),
                setTimeout(function () {
                  e();
                }, 1e3);
            }),
            (m.ws.onmessage = function (e) {
              try {
                var data = JSON.parse(e.data);
                data && data.method
                  ? l.a.prototype.$events.$emit(
                      "ws/emit/" + data.method,
                      data.data
                    )
                  : console.warn("WS onmessage error format data:", data);
              } catch (e) {
                console.error("WS error parse message", e);
              }
            }),
            (m.ws.onerror = function (e) {
              return console.error("[ws] error: " + e.message);
            });
        })(),
          l.a.use(m),
          (c.$rest = m);
      };
    },
    function (e, t, r) {
      "use strict";
      var o = r(2),
        n = r.n(o),
        c = r(303);
      n.a.component("QrcodeVue", c.a);
    },
    function (e, t, r) {
      "use strict";
      var o = r(2),
        n = r.n(o),
        c = r(304),
        l = r(305);
      n.a.component("v-runtime-template", c.a), n.a.component("recaptcha", l.a);
    },
    function (e, t, r) {
      "use strict";
      var o = r(2),
        n = r.n(o),
        c =
          (r(112),
          {
            props: {
              responsive: { type: Boolean, default: !1 },
              height: { type: [Number, String], default: 0 },
              width: { type: [Number, String], default: 0 },
            },
          }),
        l = (r(504), r(7)),
        d = Object(l.a)(
          c,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "div",
              {
                style: e.responsive
                  ? {
                      display: "flex",
                      justifyContent: "center",
                      position: "relative",
                    }
                  : {},
                attrs: { id: "preloader" },
              },
              [
                t("div", {
                  style: e.responsive
                    ? {
                        height: e.height ? e.height + "px" : "",
                        margin: "0",
                        top: "0",
                        left: "0",
                        width: e.width ? e.width + "px" : "",
                      }
                    : {},
                  attrs: { id: "loader" },
                }),
              ]
            );
          },
          [],
          !1,
          null,
          "28cb2dcd",
          null
        ).exports;
      n.a.component("loader", d);
    },
    ,
    ,
    function (e, t) {
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxNiAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjgzMzQgMC44MzMzMzJIMS44MzM0MUMwLjkxNjc0OCAwLjgzMzMzMiAwLjE2Njc0OCAxLjU4MzMzIDAuMTY2NzQ4IDIuNVYxNC4xNjY3SDEuODMzNDFWMi41SDExLjgzMzRWMC44MzMzMzJaTTE0LjMzMzQgNC4xNjY2N0g1LjE2Njc1QzQuMjUwMDggNC4xNjY2NyAzLjUwMDA4IDQuOTE2NjcgMy41MDAwOCA1LjgzMzMzVjE3LjVDMy41MDAwOCAxOC40MTY3IDQuMjUwMDggMTkuMTY2NyA1LjE2Njc1IDE5LjE2NjdIMTQuMzMzNEMxNS4yNTAxIDE5LjE2NjcgMTYuMDAwMSAxOC40MTY3IDE2LjAwMDEgMTcuNVY1LjgzMzMzQzE2LjAwMDEgNC45MTY2NyAxNS4yNTAxIDQuMTY2NjcgMTQuMzMzNCA0LjE2NjY3Wk0xNC4zMzM0IDE3LjVINS4xNjY3NVY1LjgzMzMzSDE0LjMzMzRWMTcuNVoiIGZpbGw9IiM2NjllMjAiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjguMDgzNDEiIHkxPSIwLjgzMzMzMiIgeDI9IjguMDgzNDEiIHkyPSIxOS4xNjY3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM2MTk0MjAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNjE5NDIwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==";
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, r) {
      var content = r(371);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, r(42).default)("2a5842e6", content, !0, { sourceMap: !1 });
    },
    ,
    function (e, t, r) {
      e.exports = r.p + "img/ru.e5bfa73.svg";
    },
    function (e, t) {
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAyMCAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCAwSDIwVjE1SDBWNVoiIGZpbGw9IiMwMDViYmIiLz4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCA3LjVIMjBWMTVIMFY1WiIgZmlsbD0iI2ZmZDYwMCIvPgo8L3N2Zz4K";
    },
    function (e, t) {
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAyMCAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCAwSDIwVjE1SDBWNVoiIGZpbGw9IiNGNUY1RjUiLz4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCA3LjVIMjBWMTVIMFY1WiIgZmlsbD0iI0ZGNEI1NSIvPgo8L3N2Zz4K";
    },
    function (e, t, r) {
      e.exports = r.p + "img/es.b1d77c9.svg";
    },
    function (e, t, r) {
      var content = r(405);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, r(42).default)("204bac43", content, !0, { sourceMap: !1 });
    },
    function (e, t, r) {
      e.exports = r.p + "img/locked.d5fd8bf.svg";
    },
    function (e, t, r) {
      e.exports = r.p + "img/google-plus.a453c59.svg";
    },
    function (e, t) {
      e.exports =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDI5MS4zMTkgMjkxLjMxOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjkxLjMxOSAyOTEuMzE5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6IzNCNTk5ODsiIGQ9Ik0xNDUuNjU5LDBjODAuNDUsMCwxNDUuNjYsNjUuMjE5LDE0NS42NiwxNDUuNjZjMCw4MC40NS02NS4yMSwxNDUuNjU5LTE0NS42NiwxNDUuNjU5CgkJUzAsMjI2LjEwOSwwLDE0NS42NkMwLDY1LjIxOSw2NS4yMSwwLDE0NS42NTksMHoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMTYzLjM5NCwxMDAuMjc3aDE4Ljc3MnYtMjcuNzNoLTIyLjA2N3YwLjFjLTI2LjczOCwwLjk0Ny0zMi4yMTgsMTUuOTc3LTMyLjcwMSwzMS43NjNoLTAuMDU1CgkJdjEzLjg0N2gtMTguMjA3djI3LjE1NmgxOC4yMDd2NzIuNzkzaDI3LjQzOXYtNzIuNzkzaDIyLjQ3N2w0LjM0Mi0yNy4xNTZoLTI2Ljgxdi04LjM2NgoJCUMxNTQuNzkxLDEwNC41NTYsMTU4LjM0MSwxMDAuMjc3LDE2My4zOTQsMTAwLjI3N3oiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K";
    },
    function (e, t, r) {
      e.exports = r.p + "img/vk.7cac467.svg";
    },
    function (e, t, r) {
      e.exports = r.p + "img/twitter.a4444ef.svg";
    },
    function (e, t, r) {
      e.exports = r.p + "img/github.4d76663.svg";
    },
    function (e, t, r) {
      e.exports = r.p + "img/linkedin.43f1b73.svg";
    },
    function (e, t, r) {
      e.exports = r.p + "img/meetup.f8e5704.svg";
    },
    function (e, t, r) {
      e.exports = r.p + "img/instagram.89e30d4.svg";
    },
    function (e, t, r) {
      e.exports = r.p + "img/foursquare.6d55ba1.svg";
    },
    function (e, t, r) {
      e.exports = r.p + "img/amazon.94ad843.svg";
    },
    function (e, t, r) {
      e.exports = r.p + "img/tumblr.2a4be30.svg";
    },
    function (e, t, r) {
      var content = r(407);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, r(42).default)("9d4d9438", content, !0, { sourceMap: !1 });
    },
    function (e, t, r) {
      var content = r(410);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, r(42).default)("52e8f8a0", content, !0, { sourceMap: !1 });
    },
    function (e, t) {
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhYiIgZGF0YS1pY29uPSJhcHBsZSIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLWFwcGxlIGZhLXctMTIiIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzg0IDUxMiI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMzE4LjcgMjY4LjdjLS4yLTM2LjcgMTYuNC02NC40IDUwLTg0LjgtMTguOC0yNi45LTQ3LjItNDEuNy04NC43LTQ0LjYtMzUuNS0yLjgtNzQuMyAyMC43LTg4LjUgMjAuNy0xNSAwLTQ5LjQtMTkuNy03Ni40LTE5LjdDNjMuMyAxNDEuMiA0IDE4NC44IDQgMjczLjVxMCAzOS4zIDE0LjQgODEuMmMxMi44IDM2LjcgNTkgMTI2LjcgMTA3LjIgMTI1LjIgMjUuMi0uNiA0My0xNy45IDc1LjgtMTcuOSAzMS44IDAgNDguMyAxNy45IDc2LjQgMTcuOSA0OC42LS43IDkwLjQtODIuNSAxMDIuNi0xMTkuMy02NS4yLTMwLjctNjEuNy05MC02MS43LTkxLjl6bS01Ni42LTE2NC4yYzI3LjMtMzIuNCAyNC44LTYxLjkgMjQtNzIuNS0yNC4xIDEuNC01MiAxNi40LTY3LjkgMzQuOS0xNy41IDE5LjgtMjcuOCA0NC4zLTI1LjYgNzEuOSAyNi4xIDIgNDkuOS0xMS40IDY5LjUtMzQuM3oiPjwvcGF0aD48L3N2Zz4=";
    },
    function (e, t) {
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhYiIgZGF0YS1pY29uPSJhbmRyb2lkIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtYW5kcm9pZCBmYS13LTE4IiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDU3NiA1MTIiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTQyMC41NSwzMDEuOTNhMjQsMjQsMCwxLDEsMjQtMjQsMjQsMjQsMCwwLDEtMjQsMjRtLTI2NS4xLDBhMjQsMjQsMCwxLDEsMjQtMjQsMjQsMjQsMCwwLDEtMjQsMjRtMjczLjctMTQ0LjQ4LDQ3Ljk0LTgzYTEwLDEwLDAsMSwwLTE3LjI3LTEwaDBsLTQ4LjU0LDg0LjA3YTMwMS4yNSwzMDEuMjUsMCwwLDAtMjQ2LjU2LDBMMTE2LjE4LDY0LjQ1YTEwLDEwLDAsMSwwLTE3LjI3LDEwaDBsNDcuOTQsODNDNjQuNTMsMjAyLjIyLDguMjQsMjg1LjU1LDAsMzg0SDU3NmMtOC4yNC05OC40NS02NC41NC0xODEuNzgtMTQ2Ljg1LTIyNi41NSI+PC9wYXRoPjwvc3ZnPg==";
    },
    function (e, t) {
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhYiIgZGF0YS1pY29uPSJ3aW5kb3dzIiBjbGFzcz0ic3ZnLWlubGluZS0tZmEgZmEtd2luZG93cyBmYS13LTE0IiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQ0OCA1MTIiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTAgOTMuN2wxODMuNi0yNS4zdjE3Ny40SDBWOTMuN3ptMCAzMjQuNmwxODMuNiAyNS4zVjI2OC40SDB2MTQ5Ljl6bTIwMy44IDI4TDQ0OCA0ODBWMjY4LjRIMjAzLjh2MTc3Ljl6bTAtMzgwLjZ2MTgwLjFINDQ4VjMyTDIwMy44IDY1Ljd6Ij48L3BhdGg+PC9zdmc+";
    },
    function (e, t) {
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhYiIgZGF0YS1pY29uPSJjaHJvbWUiIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1jaHJvbWUgZmEtdy0xNiIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OTYgNTEyIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMzEuNSAyMTcuNUw1NS4xIDEwMC4xYzQ3LjYtNTkuMiAxMTktOTEuOCAxOTItOTIuMSA0Mi4zLS4zIDg1LjUgMTAuNSAxMjQuOCAzMy4yIDQzLjQgMjUuMiA3Ni40IDYxLjQgOTcuNCAxMDNMMjY0IDEzMy40Yy01OC4xLTMuNC0xMTMuNCAyOS4zLTEzMi41IDg0LjF6bTMyLjkgMzguNWMwIDQ2LjIgMzcuNCA4My42IDgzLjYgODMuNnM4My42LTM3LjQgODMuNi04My42LTM3LjQtODMuNi04My42LTgzLjYtODMuNiAzNy4zLTgzLjYgODMuNnptMzE0LjktODkuMkwzMzkuNiAxNzRjMzcuOSA0NC4zIDM4LjUgMTA4LjIgNi42IDE1Ny4yTDIzNC4xIDUwMy42YzQ2LjUgMi41IDk0LjQtNy43IDEzNy44LTMyLjkgMTA3LjQtNjIgMTUwLjktMTkyIDEwNy40LTMwMy45ek0xMzMuNyAzMDMuNkw0MC40IDEyMC4xQzE0LjkgMTU5LjEgMCAyMDUuOSAwIDI1NmMwIDEyNCA5MC44IDIyNi43IDIwOS41IDI0NC45bDYzLjctMTI0LjhjLTU3LjYgMTAuOC0xMTMuMi0yMC44LTEzOS41LTcyLjV6Ij48L3BhdGg+PC9zdmc+";
    },
    function (e, t, r) {
      e.exports = r.p + "img/firefox-brands.d63f742.svg";
    },
    function (e, t, r) {
      var content = r(412);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, r(42).default)("8356ede4", content, !0, { sourceMap: !1 });
    },
    function (e, t, r) {
      var content = r(414);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, r(42).default)("3ef5d4d6", content, !0, { sourceMap: !1 });
    },
    function (e, t, r) {
      var content = r(416);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, r(42).default)("43731cd6", content, !0, { sourceMap: !1 });
    },
    function (e, t, r) {
      var content = r(418);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, r(42).default)("39e8ade8", content, !0, { sourceMap: !1 });
    },
    function (e, t, r) {
      var content = r(420);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, r(42).default)("b03e1172", content, !0, { sourceMap: !1 });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, r) {
      var content = r(505);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, r(42).default)("6ea2a9fe", content, !0, { sourceMap: !1 });
    },
    function (e, t, r) {
      "use strict";
      r(314), r(25), r(91), r(11), r(12), r(15), r(6), r(19), r(13), r(20);
      var o = r(4),
        n = r(3);
      function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      var l = {
          props: {
            color: { type: String, default: "#fff" },
            isFooter: { type: Boolean, default: !1 },
            isPage: { type: Boolean, default: !1 },
          },
          computed: (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? c(Object(r), !0).forEach(function (t) {
                    Object(o.a)(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : c(Object(r)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                    );
                  });
            }
            return e;
          })({}, Object(n.c)("contacts", { info: "getData", load: "getLoad" })),
        },
        d = l,
        m = r(7),
        component = Object(m.a)(
          d,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "div",
              {
                class: e.isPage
                  ? "contact-main-item"
                  : "contact-main-item-page",
              },
              [
                e.isFooter
                  ? t("h4", [e._v(e._s(e.$t("ui.footer.support.title")))])
                  : e._e(),
                e._v(" "),
                t(
                  "div",
                  e._l(e.info, function (r) {
                    return t(
                      "div",
                      { key: r.id, staticClass: "contact-main-mail" },
                      [
                        t(
                          "div",
                          {
                            staticClass: "contact-main-icon",
                            class: { "footer-icon": e.isFooter },
                          },
                          [
                            t("img", {
                              attrs: {
                                src: e.$rest.urlImg(r.image).big,
                                alt: "",
                              },
                            }),
                          ]
                        ),
                        e._v(" "),
                        t("div", [
                          t("span", [e._v(e._s(r.name))]),
                          e._v(" "),
                          r.link && "null" !== r.link && "false" !== r.link
                            ? t("a", {
                                staticStyle: { display: "block" },
                                style: { color: e.color },
                                attrs: { href: r.link, target: "_blank" },
                                domProps: { innerHTML: e._s(r.value) },
                              })
                            : t("p", {
                                style: { color: e.color },
                                domProps: { innerHTML: e._s(r.value) },
                              }),
                        ]),
                      ]
                    );
                  }),
                  0
                ),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.a = component.exports;
    },
    function (e, t, r) {
      "use strict";
      var o = r(138).a,
        n = r(7),
        component = Object(n.a)(
          o,
          function () {
            var e = this,
              t = e._self._c;
            return e.templateJson && e.kycData
              ? t(
                  "div",
                  { staticStyle: { "min-height": "30px" } },
                  [
                    t(e.templateJson, {
                      tag: "component",
                      attrs: { "kyc-data": e.kycData },
                      on: { success: e.onSuccessVerification },
                    }),
                  ],
                  1
                )
              : t(
                  "div",
                  { staticStyle: { padding: "20px", "font-size": "20px" } },
                  [e._v("\n  Loading...\n")]
                );
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.a = component.exports;
    },
    function (e, t, r) {
      "use strict";
      var o = [
          function () {
            var e = this._self._c;
            return e("div", [e("img", { attrs: { src: r(313), alt: "" } })]);
          },
        ],
        n = (r(419), r(7)),
        component = Object(n.a)(
          {},
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "div",
              {
                staticClass: "technocal-work under-header four-wr",
                staticStyle: { "min-height": "81vh" },
              },
              [
                t("div", { staticClass: "four four-second" }, [
                  t("div", { staticClass: "container text-center" }, [
                    e._m(0),
                    e._v(" "),
                    t("div", { staticClass: "four-second-break" }, [
                      e._v(e._s(e.$t("page.technical.title"))),
                    ]),
                    e._v(" "),
                    t("div", { staticClass: "four-second-dont-worry" }, [
                      e._v(
                        "\n        " +
                          e._s(e.$t("page.technical.description")) +
                          "\n      "
                      ),
                    ]),
                    e._v(" "),
                    t(
                      "div",
                      [
                        t(
                          "nuxt-link",
                          {
                            staticClass: "btn btn-submit",
                            attrs: { to: e.localePath("/news/") },
                          },
                          [
                            e._v(
                              "\n          " +
                                e._s(e.$t("page.technical.btn-news")) +
                                "\n        "
                            ),
                          ]
                        ),
                      ],
                      1
                    ),
                  ]),
                ]),
              ]
            );
          },
          o,
          !1,
          null,
          null,
          null
        );
      t.a = component.exports;
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, r) {
      "use strict";
      var o = [
          function () {
            var e = this,
              t = e._self._c;
            return t("div", [
              t("img", { attrs: { src: r(400) } }),
              e._v(" "),
              t(
                "a",
                { attrs: { href: "https://www.google.com/intl/ru/chrome/" } },
                [e._v("Google Chrome")]
              ),
            ]);
          },
          function () {
            var e = this,
              t = e._self._c;
            return t("div", [
              t("img", { attrs: { src: r(401) } }),
              e._v(" "),
              t(
                "a",
                { attrs: { href: "https://www.mozilla.org/ru/firefox/new/" } },
                [e._v("Mozilla Firefox")]
              ),
            ]);
          },
          function () {
            var e = this,
              t = e._self._c;
            return t("div", [
              t("img", { attrs: { src: r(402) } }),
              e._v(" "),
              t("a", { attrs: { href: "https://www.opera.com/ru" } }, [
                e._v("Opera"),
              ]),
            ]);
          },
        ],
        n = (r(11), r(12), r(15), r(19), r(13), r(20), r(0)),
        c = r(4),
        l = (r(10), r(6), r(24), r(70), r(25), r(40), r(36), r(28), r(2)),
        d = r.n(l),
        header = r(147),
        footer = r(148),
        m = r(152),
        f = r(3),
        x = r(153),
        h = r(149),
        w = r(150),
        _ = r(140),
        v = r(151),
        y = r(146),
        k = r(145),
        j = r.n(k),
        z = { components: { verificationKyc: r(293).a } },
        M = r(7);
      function C(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? C(Object(r), !0).forEach(function (t) {
                Object(c.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : C(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var P = {
          head: function () {
            return this.$nuxtI18nHead
              ? this.$nuxtI18nHead({ addSeoAttributes: !0 })
              : "";
          },
          components: {
            KycAccount: Object(M.a)(
              z,
              function () {
                var e = this,
                  t = e._self._c;
                return t(
                  "div",
                  {
                    staticClass:
                      "popup popup-personal-room popup-open modal-mask",
                  },
                  [
                    t("div", { staticClass: "modal-wrapper" }, [
                      t("div", {
                        staticClass:
                          "popup-close-bloc popup-close-bloc-personal-room",
                        on: {
                          click: function (t) {
                            return t.target !== t.currentTarget
                              ? null
                              : e.$emit("close");
                          },
                        },
                      }),
                      e._v(" "),
                      t(
                        "div",
                        { staticClass: "popup-wr-item kyc-modal" },
                        [
                          t("div", { staticClass: "modal-header" }, [
                            t("h5", { staticClass: "title text-center" }, [
                              e._v(
                                "\n          Verification process\n        "
                              ),
                            ]),
                            e._v(" "),
                            t(
                              "span",
                              {
                                staticClass:
                                  "popup-close-btn popup-close-btn-personal-room",
                                on: {
                                  click: function (t) {
                                    return t.target !== t.currentTarget
                                      ? null
                                      : e.$emit("close");
                                  },
                                },
                              },
                              [e._v("\n          ×\n        ")]
                            ),
                          ]),
                          e._v(" "),
                          t("transition", { attrs: { name: "faded" } }, [
                            t(
                              "div",
                              { staticClass: "popup-top" },
                              [
                                t("verification-kyc", {
                                  attrs: { "is-modal": !0 },
                                  on: {
                                    close: function (t) {
                                      return e.$emit("close");
                                    },
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                        ],
                        1
                      ),
                    ]),
                  ]
                );
              },
              [],
              !1,
              null,
              null,
              null
            ).exports,
            headline: header.a,
            footerBlock: footer.a,
            support: m.a,
            login: x.a,
            reg: h.a,
            notify: y.a,
            reset: v.a,
            auth: _.a,
            qr: w.a,
          },
          data: function () {
            return { trans: "", ieDetected: !1 };
          },
          computed: O(
            O(
              {},
              Object(f.c)({
                isOpenKycModal: "user/isOpenKycModal",
                getJivoSite: "params/getJivoSite",
                getTechnicalWorkStatus: "params/getTechnicalWorkStatus",
                notifies: "notify/notifies",
                timeout: "notify/timeout",
                backup: "notify/backup",
                menu: "menu/menu",
                user: "menu/user",
                login: "user/login",
                reg: "user/reg",
                reset: "user/reset",
                auth: "user/auth",
                create: "user/create",
              })
            ),
            {},
            {
              isTechicalWorkShow: function () {
                return (
                  this.getTechnicalWorkStatus && this.$route.path.length <= 4
                );
              },
              showSupport: function () {
                var e = this;
                return ![
                  "/error/",
                  "/success/",
                  "/reset-password",
                  "/contacts",
                ].some(function (t) {
                  return e.$route.path.match(t) || !e.$route.name;
                });
              },
              isStatusCode: function () {
                return (
                  !!this.$nuxt.nuxt.err &&
                  (404 === this.$nuxt.nuxt.err.statusCode ||
                    500 === this.$nuxt.nuxt.err.statusCode)
                );
              },
            }
          ),
          watch: {
            $route: function () {
              this.menuAllChange(!1);
            },
          },
          created: function () {
            var e = this;
            return Object(n.a)(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          e.$moment.locale(e.$i18n.locale),
                          (e.$i18n.onLanguageSwitched = function (t, r) {
                            e.$moment.locale(r);
                          }),
                          1 === e.$rest.ws.readyState && e.authSocket(),
                          e.$events.on("ws/connect", function () {
                            e.authSocket();
                          }),
                          e.$events.on(
                            "ws/emit/updateStatusWorkSite",
                            function (data) {
                              e.$store.commit(
                                "params/setWorkStatus",
                                data.offlineStatus
                              );
                            }
                          ),
                          (t.next = 7),
                          e.updateSettings()
                        );
                      case 7:
                        return (t.next = 9), e.checkAuth();
                      case 9:
                        t.next = 11;
                        break;
                      case 11:
                        e.getJivoSite &&
                          d.a.use(j.a, { widgetId: e.getJivoSite });
                      case 12:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          mounted: function () {
            this.menuAllChange(!1),
              this.$rest.api("POST:public/visits/register", {
                refUrl: window.document.referrer,
              }),
              window.navigator.userAgent.indexOf("MSIE ") > 0 &&
                (this.ieDetected = !0);
            this.$i18n.locales.map(function (e) {
              return e.code;
            }),
              this.$route.path.slice(0, 4).replace("/", "").replace("/", ""),
              Boolean(this.$cookiz.get("i18n_redirected"));
          },
          methods: O(
            O(
              {},
              Object(f.b)({
                updateSettings: "params/updateSettings",
                authSocket: "user/authSocket",
                checkAuth: "user/checkAuth",
              })
            ),
            Object(f.d)({
              changeStatusOpenKycModal: "user/changeStatusOpenKycModal",
              menuAllChange: "menu/all",
              setLogin: "user/login",
              setReg: "user/reg",
              setReset: "user/reset",
              setAuth: "user/auth",
              setCreate: "user/create",
            })
          ),
        },
        S =
          (r(417),
          Object(M.a)(
            P,
            function () {
              var e = this,
                t = e._self._c;
              return e.ieDetected
                ? t("div", { staticClass: "ie_block" }, [
                    e._v("\n  " + e._s(e.$t("page.main.ieDetected")) + "\n  "),
                    e._m(0),
                    e._v(" "),
                    e._m(1),
                    e._v(" "),
                    e._m(2),
                  ])
                : t(
                    "div",
                    { staticClass: "transs-wr" },
                    [
                      t(
                        "div",
                        {
                          staticClass: "transs",
                          style:
                            e.reg || e.create || e.auth || e.login || e.reset
                              ? { opacity: "0.1", background: "#fff" }
                              : "",
                        },
                        [
                          t("headline"),
                          e._v(" "),
                          t(
                            "div",
                            {
                              staticClass: "main-wr",
                              on: {
                                click: function (t) {
                                  return e.menuAllChange(!1);
                                },
                              },
                            },
                            [
                              t("div", { staticClass: "main" }, [t("nuxt")], 1),
                              e._v(" "),
                              !e.isStatusCode && e.showSupport
                                ? t("support")
                                : e._e(),
                            ],
                            1
                          ),
                          e._v(" "),
                          t("footerBlock", {
                            on: {
                              click: function (t) {
                                return e.menuAllChange(!1);
                              },
                            },
                          }),
                        ],
                        1
                      ),
                      e._v(" "),
                      t("notify"),
                      e._v(" "),
                      t(
                        "transition",
                        { attrs: { name: "faded" } },
                        [
                          e.login
                            ? t("login", {
                                on: {
                                  close: function (t) {
                                    return e.setLogin(!1);
                                  },
                                },
                              })
                            : e._e(),
                        ],
                        1
                      ),
                      e._v(" "),
                      t(
                        "transition",
                        { attrs: { name: "faded" } },
                        [
                          e.isOpenKycModal
                            ? t("kyc-account", {
                                on: {
                                  close: function (t) {
                                    return e.changeStatusOpenKycModal(!1);
                                  },
                                },
                              })
                            : e._e(),
                        ],
                        1
                      ),
                      e._v(" "),
                      t(
                        "transition",
                        { attrs: { name: "faded" } },
                        [
                          e.reg
                            ? t("reg", {
                                on: {
                                  close: function (t) {
                                    return e.setReg(!1);
                                  },
                                },
                              })
                            : e._e(),
                        ],
                        1
                      ),
                      e._v(" "),
                      t(
                        "transition",
                        { attrs: { name: "faded" } },
                        [
                          e.auth
                            ? t("auth", {
                                on: {
                                  close: function (t) {
                                    return e.setAuth(!1);
                                  },
                                },
                              })
                            : e._e(),
                        ],
                        1
                      ),
                      e._v(" "),
                      t(
                        "transition",
                        { attrs: { name: "faded" } },
                        [
                          e.reset
                            ? t("reset", {
                                on: {
                                  close: function (t) {
                                    return e.setReset(!1);
                                  },
                                },
                              })
                            : e._e(),
                        ],
                        1
                      ),
                      e._v(" "),
                      t(
                        "transition",
                        { attrs: { name: "faded" } },
                        [
                          e.create
                            ? t("qr", {
                                on: {
                                  close: function (t) {
                                    return e.setCreate(!1);
                                  },
                                },
                              })
                            : e._e(),
                        ],
                        1
                      ),
                    ],
                    1
                  );
            },
            o,
            !1,
            null,
            "cfae6e7c",
            null
          ));
      t.a = S.exports;
    },
    function (e, t, r) {
      "use strict";
      var o = {},
        n = r(7),
        component = Object(n.a)(
          o,
          function () {
            var e = this._self._c;
            return e("div", { staticClass: "transs-wr" }, [e("nuxt")], 1);
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.a = component.exports;
    },
    function (e, t, r) {
      "use strict";
      r(11), r(12), r(15), r(19), r(13), r(20);
      var o = r(0),
        n = r(4),
        c = (r(10), r(6), r(24), r(70), r(25), r(40), r(36), r(28), r(2)),
        l = r.n(c),
        header = r(147),
        footer = r(148),
        d = r(152),
        m = r(3),
        f = r(153),
        x = r(149),
        h = r(150),
        w = r(140),
        _ = r(151),
        v = r(146),
        y = r(294),
        k = r(145),
        j = r.n(k);
      function z(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function M(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? z(Object(r), !0).forEach(function (t) {
                Object(n.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : z(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var C = {
          components: {
            headline: header.a,
            footerBlock: footer.a,
            support: d.a,
            login: f.a,
            reg: x.a,
            notify: v.a,
            reset: _.a,
            auth: w.a,
            qr: h.a,
            technicalWork: y.a,
          },
          data: function () {
            return { trans: "" };
          },
          computed: M(
            M(
              {},
              Object(m.c)({
                getJivoSite: "params/getJivoSite",
                getTechnicalWorkStatus: "params/getTechnicalWorkStatus",
                notifies: "notify/notifies",
                timeout: "notify/timeout",
                backup: "notify/backup",
                menu: "menu/menu",
                user: "menu/user",
                login: "user/login",
                reg: "user/reg",
                reset: "user/reset",
                auth: "user/auth",
                create: "user/create",
              })
            ),
            {},
            {
              isTechicalWorkShow: function () {
                return (
                  this.getTechnicalWorkStatus && this.$route.path.length <= 4
                );
              },
              showSupport: function () {
                var e = this;
                return ![
                  "/error/",
                  "/success/",
                  "/reset-password",
                  "/contacts",
                ].some(function (t) {
                  return e.$route.path.match(t) || !e.$route.name;
                });
              },
              isStatusCode: function () {
                return (
                  !!this.$nuxt.nuxt.err &&
                  (404 === this.$nuxt.nuxt.err.statusCode ||
                    500 === this.$nuxt.nuxt.err.statusCode)
                );
              },
            }
          ),
          created: function () {
            var e = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          e.$moment.locale(e.$i18n.locale),
                          (e.$i18n.onLanguageSwitched = function (t, r) {
                            e.$moment.locale(r);
                          }),
                          e.$i18n.locales.map(function (e) {
                            return e.code;
                          }),
                          e.$route.path
                            .slice(0, 4)
                            .replace("/", "")
                            .replace("/", ""),
                          Boolean(e.$cookiz.get("i18n_redirected")),
                          1 === e.$rest.ws.readyState && e.authSocket(),
                          e.$events.on("ws/connect", function () {
                            e.authSocket();
                          }),
                          e.$events.on(
                            "ws/emit/updateStatusWorkSite",
                            function (data) {
                              e.$store.commit(
                                "params/setWorkStatus",
                                data.offlineStatus
                              );
                            }
                          ),
                          (t.next = 6),
                          e.updateSettings()
                        );
                      case 6:
                        return (t.next = 8), e.checkAuth();
                      case 8:
                        t.next = 10;
                        break;
                      case 10:
                        e.getJivoSite &&
                          l.a.use(j.a, { widgetId: e.getJivoSite });
                      case 11:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          mounted: function () {
            this.menuAllChange(!1),
              this.$rest.api("POST:public/visits/register", {
                refUrl: window.document.referrer,
              });
          },
          methods: M(
            M(
              {},
              Object(m.b)({
                updateSettings: "params/updateSettings",
                authSocket: "user/authSocket",
                checkAuth: "user/checkAuth",
              })
            ),
            Object(m.d)({
              menuAllChange: "menu/all",
              setLogin: "user/login",
              setReg: "user/reg",
              setReset: "user/reset",
              setAuth: "user/auth",
              setCreate: "user/create",
            })
          ),
        },
        O = r(7),
        component = Object(O.a)(
          C,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "div",
              { staticClass: "transs-wr" },
              [
                t("div", { staticClass: "transs" }, [
                  t(
                    "div",
                    {
                      on: {
                        click: function (t) {
                          return e.menuAllChange(!1);
                        },
                      },
                    },
                    [t("nuxt")],
                    1
                  ),
                ]),
                e._v(" "),
                t("notify"),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.a = component.exports;
    },
    ,
    ,
    ,
    function (e, t, r) {
      e.exports = r.p + "img/error.7feb3e4.png";
    },
    ,
    function (e, t, r) {
      e.exports = r(316);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, r) {
      e.exports = r.p + "img/edit.42ed38d.svg";
    },
    function (e, t, r) {
      e.exports = r.p + "img/hand-shake.61ef01a.svg";
    },
    function (e, t, r) {
      e.exports = r.p + "img/documents.6be7ce4.svg";
    },
    function (e, t, r) {
      e.exports = r.p + "img/logout.6497e17.svg";
    },
    function (e, t, r) {
      "use strict";
      r(247);
    },
    function (e, t, r) {
      var o = r(41)(function (i) {
        return i[1];
      });
      o.push([e.i, "body{margin:0 auto}", ""]),
        (o.locals = {}),
        (e.exports = o);
    },
    ,
    ,
    function (e, t, r) {
      var content = r(375);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, r(42).default)("56fe1acc", content, !0, { sourceMap: !1 });
    },
    function (e, t, r) {
      var o = r(41),
        n = r(376),
        c = r(377),
        l = r(378),
        d = r(379),
        m = r(380),
        f = r(381),
        x = r(382),
        h = r(383),
        w = r(384),
        _ = r(385),
        v = r(386),
        y = r(387),
        k = r(388),
        j = r(389),
        z = r(390),
        M = r(391),
        C = r(392),
        O = r(393),
        P = r(394),
        S = r(395),
        D = r(135),
        E = r(396),
        I = r(397),
        R = r(398),
        L = r(399),
        T = o(function (i) {
          return i[1];
        }),
        N = n(c),
        A = n(l),
        $ = n(d),
        U = n(m),
        B = n(f),
        W = n(x),
        Z = n(h),
        G = n(w),
        Y = n(_),
        K = n(v),
        V = n(y),
        Q = n(k),
        J = n(j),
        F = n(z),
        H = n(M),
        X = n(C),
        ee = n(O),
        te = n(P),
        re = n(S),
        oe = n(D),
        ne = n(E),
        ie = n(I),
        ae = n(R),
        se = n(L);
      T.push([
        e.i,
        'body,html{min-height:100vh}body{background-color:#fff;color:#282e38;display:flex;flex-direction:column;font-family:"Roboto-Regular",sans-serif;font-size:14px}@media only screen and (max-width:1025px){body{font-size:14px}}@media only screen and (max-width:767px){body{font-size:12px}}img{height:auto;max-width:100%}p{font-family:"Roboto-Medium",sans-serif;font-weight:500}a,h2,label,span{font-family:"Roboto-Regular",sans-serif;font-weight:400}.container{margin:0 auto;max-width:1200px;padding:0 15px;width:100%}@media only screen and (max-width:1200px){.container{max-width:970px}}@media only screen and (max-width:1025px){.container{max-width:720px}}@media only screen and (max-width:767px){.container{flex-wrap:wrap;max-width:620px}}@media only screen and (max-width:650px){.container{flex-direction:column;margin:0 auto;max-width:520px}}@media only screen and (max-width:550px){.container{box-sizing:border-box;max-width:100%;padding:0 15px}}a{color:inherit;-webkit-text-decoration:none;text-decoration:none}@media only screen and (min-width:813px){a,a:after,a:before,button,button:after,button:before{transition:.35s}}a,button,div,h1,h2,h3,li,p,ul{margin:0;padding:0}h4{font-size:36px}h5{font-size:13px}h6{font-size:11px}h3{color:#50535a;font-size:16px}h2{font-size:20px;text-transform:uppercase}h1{color:#282e38;font-family:"Play-Regular",sans-serif;font-size:48px;font-weight:400}@media only screen and (max-width:767px){h1{text-align:center}}p{color:#50535a;font-family:"Roboto-Regular",sans-serif;line-height:16.41px}.title,p{font-weight:400}.title{font-family:"Play-Regular",sans-serif;font-size:36px;text-transform:none}@media only screen and (max-width:767px){.title{font-size:1.5rem;text-align:center}}ol,ul{list-style-type:none;padding:0}b{font-family:"Play-Bold",sans-serif;font-weight:700}input,select,textarea{width:100%}input,input:active,input:focus,input:visited,select,select:active,select:focus,select:visited,textarea,textarea:active,textarea:focus,textarea:visited{border:none;outline:none}.text-center{text-align:center}.text-center span{font-family:"Play-Regular",sans-serif}.text-center p b{color:#282e38;font-size:18px;line-height:25.45px}@media only screen and (max-width:767px){.dn-mob{display:none}}.page-main .title{font-size:13px!important}@font-face{font-display:swap;font-family:"Play-Bold";font-style:normal;font-weight:700;src:url(' +
          N +
          ');src:local("Play Bold"),local("Play-Bold"),url(' +
          N +
          ') format("truetype")}@font-face{font-display:swap;font-family:"Play-Regular";font-style:normal;font-weight:400;src:url(' +
          A +
          ');src:local("Play Regular"),local("Play-Regular"),url(' +
          A +
          ') format("truetype")}@font-face{font-display:swap;font-family:"Roboto-Regular";font-style:normal;font-weight:400;src:url(' +
          $ +
          ');src:local("Roboto Regular"),local("Roboto-Regular"),url(' +
          $ +
          ') format("truetype")}@font-face{font-display:swap;font-family:"Roboto-Light";font-style:normal;font-weight:300;src:url(' +
          U +
          ');src:local("Roboto Light"),local("Roboto-Light"),url(' +
          U +
          ') format("truetype")}@font-face{font-display:swap;font-family:"Roboto-Medium";font-style:normal;font-weight:500;src:url(' +
          U +
          ');src:local("Roboto Medium"),local("Roboto-Medium"),url(' +
          B +
          ') format("truetype")}.btn{background:transparent;border:none;border-radius:30px;color:#fff;cursor:pointer;display:inline-block;font-family:"Roboto-Regular",sans-serif;font-weight:400;margin:0;outline:none;padding:0 26px;text-align:center;-webkit-text-decoration:none;text-decoration:none;white-space:nowrap}.btn:hover{transition:all .35s}.btn-round{background:transparent;border:none;border-radius:5px;cursor:pointer;display:inline-block;margin:0;padding:11px 24px;white-space:nowrap}@media screen and (max-width:1375px){.btn-round{padding:8px 20px}}.btn-round-blue{background:#619420;color:#000}.btn-round-blue:hover{background:#88cf2d}.btn-round-transparent{border:1px solid #619420;color:#000;font-weight:1000!important}.btn-round-transparent:hover{border:1px solid #88cf2d;color:#88cf2d}.btn-filter{background:transparent;border:none;border-radius:5px;cursor:pointer;display:inline-block;margin:0;padding:8px 13px;white-space:normal}@media only screen and (max-width:767px){.btn-filter{font-size:12px;padding:8px}}.btn-filter-blue{background:#619420;color:#fff}.btn-filter-blue:hover{background:#88cf2d}.btn-blue{background-color:#619420;line-height:3.1666666667}.btn-blue:hover{background:#88cf2d}.btn-submit{background:#619420;box-shadow:0 20px 40px 0 rgba(23,22,37,.15);font-size:15px;line-height:3;padding-left:30px;padding-right:30px}.btn-submit:hover{background:#88cf2d;color:#fff}.btn-plain{background:#f0f1f4;border:1px solid #f0f1f4;border-radius:20px;color:#9f9f9f;font-size:11px;margin-bottom:.94rem;margin-top:.94rem;padding:10px 30px;text-transform:uppercase}.btn-plain:hover{background:transparent}.btn-log-in{align-items:center;background:#f3f6f8;border:1px solid #f0f1f4;color:#282e38;display:flex;flex-direction:row;justify-content:center;line-height:normal;padding:6px 12px;width:inherit}.btn-log-in img{border-radius:50%;height:20px;margin:3px;width:20px}.btn-log-in:hover{background:transparent}.btn-look{background:#e1e7ed;color:#96989c;font-family:"Roboto-Regular",sans-serif;font-size:15px;font-weight:400;line-height:3;min-width:104px;padding-left:50px;padding-right:50px}.btn-look:hover{background:#e6e9f5}.btn-select{margin:15px 30px;max-width:22.5rem;position:relative;width:100%}.btn-select:after{border-left:7px solid transparent;border-right:7px solid transparent;border-top:7px solid #212121;box-sizing:border-box;content:"";pointer-events:none;position:absolute;right:20px;text-align:center;top:18px;transform:rotate(0);transition:all .35s;z-index:1}@media only screen and (max-width:767px){.btn-select:after{top:12px}}.btn-select select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#f4f5f7;border:1px solid #e6e6e6;border-radius:20px;box-shadow:inset 0 1px 2px 0 rgba(0,0,0,.1);color:#9f9f9f;line-height:2.375;padding:0 25px;width:100%}.btn-select.selected:after{top:16px;transform:rotate(180deg)}@media only screen and (max-width:767px){.btn-select.selected:after{top:12px}}.btn-bord{background:transparent;border:2px solid #f0f1f2;color:#619420;line-height:2.7}.btn-bord:hover{background:#619420;border-color:#619420;color:#fff}.btn-copy{background:transparent;border:2px solid #f0f1f2;color:#619420;line-height:1.75;margin-left:15px;margin-top:-20px;padding:2px 15px}.btn-copy:hover{background:#619420;border-color:#619420;color:#fff}.dropper img{height:25px;margin:5px;width:25px}.dropper li{align-items:center;cursor:pointer;display:flex;font-size:15px}.dropper li:hover{background:rgba(0,150,255,.1)}.dropper{width:100%}.dropper .bp-dropdown__btn{border:none;width:100%}.dropper .bp-dropdown__body{border:1px solid rgba(0,0,0,.1);border-radius:0 0 5px 5px;border-top:none;box-shadow:none;left:auto!important;margin-top:0;position:absolute;top:auto!important}.checkbox{position:relative}.checkbox input{left:-10000px;opacity:0;position:absolute;top:0;width:20px;z-index:-1}.checkbox input:checked+label:after{background:#619420;border-radius:2px;box-sizing:border-box;content:"";height:14px;left:4px;position:absolute;top:50%;transform:translateY(-50%);width:14px}.checkbox input:checked+label:before{border-color:#619420}.checkbox label{align-items:center;color:#000;cursor:pointer;display:flex;font:500 14px/1.2 "Roboto-Regular",sans-serif;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none}@media(max-width:1200px){.checkbox label{font:500 12px/18px "Roboto-Regular",sans-serif}}.checkbox label a{color:#26d3f8;display:inline}.checkbox label:before{background-position:50%;background-repeat:no-repeat;background-size:50% 50%;border:1px solid #b9b9b9;border-radius:3px;content:"";display:inline-block;flex-grow:0;flex-shrink:0;height:20px;margin-right:10px;width:20px}.checkbox-list .checkbox{margin-bottom:16px}.checkbox-list .checkbox:last-child{margin-bottom:0}*{box-sizing:border-box;outline:none}input:invalid{box-shadow:none}.course{background-color:#fff;border-bottom:1px solid #e6e6e6;padding:8px 0}@media only screen and (max-width:767px){.course{display:none}}.course ul{display:flex;flex-direction:row;justify-content:space-between;overflow:hidden;white-space:nowrap}.course li{border-left:2px solid #e6e6e6;min-width:300px}.course li:first-child{border-left:none}.course div{padding:3px 25px 5px}.course p{color:#282e38;text-transform:uppercase}.course .green{color:#619420}.course .green em{border-color:#619420;transform:rotate(-45deg)}.course .red{color:#e02626}.course .red em{border-color:#e02626;margin-bottom:5px;transform:rotate(135deg)}.course-header{display:flex;justify-content:space-between}.course-footer{display:block;font-size:12px;font-weight:900;margin-top:10px}.course-footer span{font-size:18px;margin-right:10px}.course em{border-style:solid;border-width:2px;border-bottom:0;border-left:0;display:inline-block;height:10px;margin-left:-2px;margin-right:10px;width:10px}nav{align-self:center;padding:5px 0;position:relative}nav .container-nav{display:flex;flex-wrap:wrap;justify-content:space-between;position:relative}@media only screen and (max-width:1200px){nav .container-nav{flex-direction:row}}nav ul{align-items:center;display:flex;flex-direction:row;flex-wrap:wrap}@media only screen and (max-width:1025px){nav{padding:20px 50px;padding:10px}}nav li:after{content:"";margin:0 28px}@media only screen and (max-width:1200px){nav li:after{border:none}}@media screen and (max-width:1375px){nav li:after{margin:0 13px}}nav li:last-child:after{border:none;margin:0}nav a{color:#000;font-family:"Roboto-Regular",sans-serif;font-size:15px;font-weight:400}.menu{align-self:center;margin:0 -25px}@media only screen and (max-width:1200px){.menu{background:#fff;border-radius:10px;box-shadow:0 8px 16px 0 rgba(0,0,0,.2);display:block;left:-100%;opacity:0;position:absolute;top:120%;transition:all .35s;visibility:hidden}}.menu.menu-open{left:10px;opacity:1;visibility:visible}@media only screen and (max-width:1200px){.menu{margin:0}}.menu li{margin-left:1px;margin-right:1px}@media screen and (max-width:1500px){.menu li{margin-left:5px;margin-right:-5px}}@media screen and (max-width:1200px){.menu li{margin:5px 20px}}.menu a:hover{color:#282e38}@media only screen and (max-width:1200px){.menu a:hover{color:#f4f4f4}}.burger{cursor:pointer;height:40px;position:relative;width:40px}@media screen and (min-width:1200px){.burger{display:none}}.burger-icon{background-color:#619420;border-radius:50px;height:5px;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%) rotate(0deg);transition:all .5s ease;width:100%}.burger-icon:after,.burger-icon:before{background-color:inherit;border-radius:inherit;content:"";height:inherit;margin:auto;position:absolute;transition:all .5s ease;width:50%}.burger-icon:before{left:0;top:-13px;transform-origin:left}.burger-icon:after{bottom:-13px;right:0;transform-origin:right}.open-burger{transform:translate(-50%,-50%) rotate(135deg)}.open-burger:before{top:0;transform:translateX(100%) rotate(-90deg)}.open-burger:after{bottom:0;transform:translateX(-100%) rotate(-90deg)}.user-bloc{max-width:270px;position:relative;width:100%}@media only screen and (max-width:767px){.user-bloc{max-width:200px}}.user-bloc .caret{cursor:pointer;position:absolute;right:0;top:10px}.user-bloc .caret:before{border-color:transparent #65557e #65557e transparent;border-style:solid;border-width:5px;content:"";height:0;position:absolute;right:0;top:12px;transform:rotate(-135deg);transition:all .35s;width:0}.user-bloc .caret-open:before{top:5px;transform:rotate(45deg);transition:all .35s}.user-bloc-date,.user-bloc-date-photo{align-items:center;display:flex;justify-content:center;position:relative}.user-bloc-date-photo{background:#e1e4ed;border-radius:50%;font-size:15px;height:36px;line-height:18px;margin-right:20px;overflow:hidden;width:36px;z-index:1}@media only screen and (max-width:767px){.user-bloc-date-photo{height:40px;width:40px}}.user-bloc-date-info{color:#fff}@media only screen and (max-width:767px){.user-bloc-date-info{display:none}}.user-bloc-date-info p{color:#000001!important;font-size:12px;margin-bottom:0;text-transform:uppercase}.user-bloc-date-info span{color:#000001;font-size:15px}.user-bloc ul{background:#fff;border-radius:10px;box-shadow:0 25px 50px 0 rgba(23,22,37,.15);opacity:0;position:absolute;right:0;top:-110%;transition:all .35s;visibility:hidden;width:100%;z-index:0}.user-bloc ul:after{border:10px solid transparent;border-bottom-color:#fff;content:"";position:absolute;right:20px;top:-20px}.user-bloc .user-bloc-list-open{min-width:270px;opacity:1;top:110%;visibility:visible;z-index:11}@media only screen and (max-width:767px){.user-bloc .user-bloc-list-open{min-width:200px}}.user-bloc li{overflow:hidden}.user-bloc li:first-child a{border-top-left-radius:10px;border-top-right-radius:10px}.user-bloc li:last-child{border-bottom-left-radius:10px;border-bottom-right-radius:10px}.user-bloc li a{align-items:center;display:flex;font-size:15px;padding:15px}@media only screen and (max-width:767px){.user-bloc li a{font-size:13px;padding:10px}}.user-bloc li a:hover{background:#f4f5f7;transition:all .35s}.user-bloc li a:hover img{opacity:1;transition:all .35s}.user-bloc li img{margin-right:15px;max-width:30px;opacity:.5;width:100%}@media only screen and (max-width:767px){.user-bloc li img{max-width:25px}}.faq-top{margin-top:2.5rem}.faq-top ul{display:flex;flex-wrap:wrap;padding:9px}@media only screen and (max-width:1025px){.faq-top ul{justify-content:space-between}}.faq-top li{margin:.43rem;padding:.43rem}.faq-top li:after{border-right:1px solid #f3f3f3;content:"";margin:0 28px}@media only screen and (max-width:1025px){.faq-top li:after{border:none}}.faq-top li:last-child:after{border:none;margin:0}@media only screen and (max-width:1025px){.faq-top li{width:40%}}.faq-top a{align-items:center;color:#282e38;display:flex;font-family:"Roboto-Regular",sans-serif;font-size:15px}.faq-top a img{flex:0 0 auto}.faq-top a.profile-nav-active,.faq-top a:hover{color:#619420;font-family:"Roboto-Medium",sans-serif}.faq-top img{margin-right:10px;max-width:21px;width:100%}.profile-nav ul{display:flex;flex-wrap:wrap;justify-content:center;padding:9px}@media only screen and (max-width:1025px){.profile-nav ul{justify-content:space-between}}.profile-nav li{margin:.43rem;padding:.43rem}.profile-nav li:after{border-right:1px solid #f3f3f3;content:"";margin:0 28px}@media only screen and (max-width:1025px){.profile-nav li:after{border:none}}.profile-nav li:last-child:after{border:none;margin:0}@media only screen and (max-width:1025px){.profile-nav li{width:40%}}.profile-nav a{color:#282e38;font-family:"Roboto-Regular",sans-serif;font-size:15px}.profile-nav a.profile-nav-active,.profile-nav a:hover{color:#619420;font-family:"Roboto-Medium",sans-serif}.profile-nav img{margin-right:10px;max-width:21px;width:100%}.faq-top ul{margin:0 -.94rem}.faq-top li{flex:1 1;flex-basis:25%;flex-grow:0;flex-shrink:0;margin:.45rem .94rem .45rem 0;max-width:25%;min-width:250px;padding:0}.faq-top img{max-width:27px}.faq-top .form-faq-search{margin-top:1.25rem;position:relative}.faq-top .form-faq-search input[type=search]{border:1px solid #619420;-webkit-border-radius:20px;-moz-border-radius:20px;font-size:1rem;line-height:1.3;margin:10px 0;padding:10px 35px 10px 55px;width:100%}.faq-top .form-faq-search input[type=search]::-webkit-input-placeholder{color:#9f9f9f;font-style:italic}.faq-top .form-faq-search input[type=search]::-moz-placeholder{color:#9f9f9f;font-style:italic}.faq-top .form-faq-search input[type=search]:-ms-input-placeholder{color:#9f9f9f;font-style:italic}.faq-top .form-faq-search input[type=search]:-moz-placeholder{color:#9f9f9f;font-style:italic}.faq-top .form-faq-search input[type=submit]{background-color:transparent;background-image:url(' +
          W +
          ');background-repeat:no-repeat;background-size:cover;cursor:pointer;height:20px;left:1.25rem;position:absolute;top:20px;width:20px;z-index:2}.under-header.profile-top-wr{background-position-y:-.5rem;display:flex;flex-direction:column}.under-header.profile-top-wr .profile-nav{color:#282e38}.under-header.profile-top-wr>.container{display:flex;flex:1;flex-direction:column;justify-content:center}.footer-profile{align-items:center;display:flex;justify-content:space-between;padding:24px}@media only screen and (max-width:767px){.footer-profile{flex-direction:column;margin:.5rem 4rem}}.footer-profile button{margin-bottom:10px}.footer-profile p{color:#96989c}@media only screen and (max-width:767px){.footer-profile p{margin-bottom:15px}}.footer-profile .btn{border-radius:25px;display:inline-flex;font-size:15px;margin-right:15px;padding:11px 24px}.footer-profile .btn-transparent{border:1px solid #e1e7ed;color:#96989c}.profile__buttons{display:flex;justify-content:center;margin-top:24px}.profile__main{box-shadow:0 15px 116px hsla(206,6%,48%,.05),0 32px 75px hsla(206,6%,48%,.1);display:flex;flex-direction:column;margin-bottom:80px;margin-top:55px}.profile__main--title{align-items:center;color:#212121;display:flex;font-family:"Play-Bold",sans-serif;font-size:24px;letter-spacing:normal;line-height:23px;margin-bottom:34px;text-align:left}.profile__main--title img{margin-right:15px;width:20px}@media only screen and (max-width:767px){.profile__main--title{justify-content:center}}.profile__main--item{border:1px solid #f3f3f3;flex:1 0;padding:1.75rem 3rem}@media only screen and (max-width:767px){.profile__main--item{padding:1.75rem 4rem}}.profile__main--item-last{max-height:259px}@media only screen and (max-width:650px){.profile__main--item__file{margin-right:0}}.profile__main--item .btn{background-color:#e1e7ed;box-shadow:none;color:#96989c;font-family:"Conv_MuseoSansCyrl_0",sans-serif;font-size:15px;letter-spacing:.3px;line-height:1.85;margin-top:5px;padding:10px 8px;transition:all .2s;width:75%}.profile__main--item .btn:hover{background:#619420;border-color:transparent;border-left:none;border-radius:30px;border-right:none;color:#fff}.profile__main .form__item{margin-bottom:15px}.profile__main .form__item span{color:#282e38;display:inline-block;font-size:14px;font-weight:100;margin-bottom:13px}.profile__main .form__item label span{cursor:pointer;font-family:"Roboto-Regular",sans-serif}.profile__main .form__item input{background-color:#f3f6f8;color:#282e38;font-size:14px;padding:16px 1.25rem}.profile__main .form__item input::-webkit-input-placeholder{color:#96989c;font-family:"Roboto-Regular",sans-serif}.profile__main .form__item input::-moz-placeholder{color:#96989c;font-family:"Roboto-Regular",sans-serif}.profile__main .form__item input:-ms-input-placeholder{color:#96989c;font-family:"Roboto-Regular",sans-serif}.profile__main .form__item input:-moz-placeholder{color:#96989c;font-family:"Roboto-Regular",sans-serif}.profile__main .form__item .d-flex{align-items:center;display:flex;margin-bottom:15px}.profile__main .form__item .d-flex input{margin-right:12px;width:auto}.profile__main .form__item .d-flex span{color:#212121;font-size:1rem;font-weight:100;line-height:1.2;margin-bottom:2px}.profile__main .form__input{border-radius:8px;box-shadow:0 1px 2px 0 rgba(0,0,0,.1);overflow:hidden}.profile__main>ul{display:flex;justify-content:center}@media only screen and (max-width:1200px){.profile__main>ul{flex-wrap:wrap}}.profile__main>ul li{display:flex;flex:1 1;flex-direction:column;flex-wrap:nowrap;min-height:605px;min-width:385px}@media only screen and (max-width:650px){.profile__main>ul li{min-height:auto}}.profile__main>ul li:last-child .profile__main--item{border-left:none;border-right:none}@media only screen and (max-width:1200px){.profile__main>ul li:last-child .profile__main--item{border-left-color:#f3f3f3}}.profile__main>ul li:first-child .profile__main--item{border-left:none;border-right:none}@media only screen and (max-width:1200px){.profile__main>ul li:first-child .profile__main--item{border-right-color:#f3f3f3}}@media only screen and (max-width:767px){.profile__main>ul li:first-child .profile__main--item{border-bottom:none}}.profile__file{height:11.31rem;margin:0 auto 1.2rem;width:11.31rem;z-index:1}.profile__file,.profile__file__border{border-radius:50%;overflow:hidden;position:relative}.profile__file__border{background:#fff;height:96%;margin:2%;padding:2%;pointer-events:none}.profile__file input{border-radius:50%;cursor:pointer;height:100%;left:0;list-style-position:outside;min-width:auto;opacity:0;position:absolute;top:0;width:100%;z-index:3}.profile__file p{background-color:rgba(0,0,0,.3);bottom:0;color:#fff;font-size:13px;left:0;letter-spacing:1.3px;line-height:3.84;margin:0;position:absolute;-webkit-text-decoration:underline;text-decoration:underline;text-transform:uppercase;width:100%}.profile__plus{align-items:center;display:flex;justify-content:center;margin-bottom:1rem;margin-top:.5rem}@media only screen and (max-width:650px){.profile__plus{flex-direction:column;flex-wrap:wrap}}.profile__plus li{padding:5px 25px;position:relative}@media only screen and (max-width:650px){.profile__plus li:first-child{margin-bottom:1rem}}.profile__plus li:first-child:after{color:#a0a0a0;content:"/";height:100%;position:absolute;right:3px;top:5px;width:1px}@media only screen and (max-width:650px){.profile__plus li:first-child:after{content:none}}.profile__plus .btn{color:#a0a0a0;font-family:"Conv_MuseoSansCyrl_0",sans-serif;font-size:1rem;font-weight:100;line-height:1.25;padding:0;-webkit-text-decoration:underline;text-decoration:underline}.profile__plus .btn:hover{color:#000}.b-top{border-top:1px solid rgba(0,0,0,.1)}.b-top--none{border-top:none}.registration li{margin:0 6px 0 0}.registration li:last-child{margin-right:0}.registration li button{font-family:"Roboto-Regular",sans-serif;font-weight:1000!important}@media only screen and (max-width:1025px){.registration li:last-child{display:none}}.registration a{cursor:pointer}.languages a{font-family:"Conv_MuseoSansCyrl_2",sans-serif;text-transform:uppercase}.languages a:hover{color:#18829c}.languages a.active-lang-link{color:#1ac1de}@media only screen and (max-width:550px){.under-header{background-position-y:0}}.left-bg{background-image:url(' +
          Z +
          ");padding-bottom:5rem}.left-bg,.right-bg{background-repeat:no-repeat;background-size:620px}.right-bg{background-image:url(" +
          G +
          ');background-position:100%}@media only screen and (max-width:1025px){.left-bg,.right-bg{background-image:none}}@media screen and (max-width:1200px){.right-block{display:none !important} .container-1{flex-direction: row-reverse;}}@media screen and (max-width:1400px){.logo img{max-width:85%}}.header{background:linear-gradient(90deg,#2c440e,rgba(77,117,26,.884) 40.1%,rgba(80,121,27,.8) 60.94%,#355012);border-bottom:1px solid #e6e6e6;margin-bottom:105px;position:relative;z-index:1001}@media only screen and (max-width:767px){.header{margin-bottom:50px}}.header .logo img{height:36px}.header .container-1{align-items:center;display:flex;font-family:"Roboto-Regular",sans-serif;font-size:15px;font-weight:400;justify-content:space-between;margin-left:auto;margin-right:auto;max-width:1400px;padding:20px 10px}@media only screen and (max-width:767px){.header .container-1{padding:15px 10px}}.header .right-block{align-items:center;display:flex;justify-content:center}.header .dropdown-lang{margin-right:25.35px}.header .dropdown-lang .inner_dropdown{display:flex;justify-content:space-between}.header .dropdown-lang ul{background-color:#fff;border-radius:2px;box-shadow:0 8px 16px 0 rgba(0,0,0,.2);min-width:160px;position:absolute;z-index:9}@media only screen and (max-width:767px){.header .dropdown-lang ul{min-width:140px}}.header .dropdown-lang ul li{padding:12px 16px;text-align:left}.header .dropdown-lang ul li:hover{background-color:hsla(0,0%,93%,.83)}.header .dropdown-lang-img-arrow{margin-left:16px}.header .dropdown-lang-inner-img img{border-radius:19%;height:21px;width:30px}.header .dropdown-lang-inner-img span{margin-left:10px}.registration ul{align-items:center;display:flex}.registration a{color:#fff;font-family:"Conv_MuseoSansCyrl_2",sans-serif;font-size:12px;text-transform:uppercase}.about-us{display:flex;flex-wrap:wrap;margin-bottom:2rem;margin-top:1rem}.about-us>div{flex:1 1}.about-us-top{align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding-top:0}@media only screen and (max-width:767px){.about-us-top{justify-content:center;padding-bottom:2.25rem}}.about-us-top .btn{padding-left:3.75rem;padding-right:3.75rem}.about-us-info{min-width:60%}.about-us-info .title{margin-bottom:1.875rem;margin-top:1rem}.about-us-info p{font-size:1rem;line-height:1.5;margin-bottom:1.5rem}.about-us-img{align-items:center;display:flex;flex-direction:column;justify-content:center;padding:20px}@media only screen and (max-width:767px){.about-us-img{display:none}}.about-us-img img{max-width:440px;width:100%}.choose{margin-bottom:2rem}.choose ul{align-items:center;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;margin:0 -.74rem}.choose li{flex-basis:31.25%;flex-grow:0;flex-shrink:0;margin:.45rem .74rem;max-width:31.25%;min-width:300px;padding:0}.choose a{background:transparent;border:1px solid #b6b6b6;box-shadow:none;display:block;line-height:normal;padding:20px}.choose a:hover{box-shadow:0 20px 40px 0 rgba(23,22,37,.15)}.choose a:hover p,.choose a:hover span{color:#fff}.choose a p{color:#212121;font-size:16px;margin-bottom:10px}.choose a span{color:#b6b6b6;font-size:12px}.choose p,.choose span{transition:all 0s}.form-v2--input-order-form{margin:0 0 20px;position:relative}.form-v2--input-order-form p{margin-bottom:9px}.form-v2--input-order-form-btn{align-items:center;display:flex;justify-content:center}.form-v2--input-order-form-btn .btn-submit-order{background:#619420;box-shadow:0 20px 40px 0 rgba(23,22,37,.15);font-size:20px;height:64px;padding:23px 77px!important;width:56.4%}.form-v2--input-order-form-btn .btn-submit-order:hover{background:#88cf2d;color:#fff}@media only screen and (max-width:767px){.form-v2--input-order-form-btn .btn-submit-order{height:auto;padding:16px 44px!important;width:auto}}.form-v2--input-order-form .receive{align-items:center;background:#f3f6f8;border-radius:8px;color:#96989c;display:flex;font-size:20px;height:64px;justify-content:space-between;line-height:23.44px;padding:24px 26px;text-align:left;width:100%}@media only screen and (max-width:767px){.form-v2--input-order-form .receive{font-size:15px;padding:24px 15px}}.form-v2--input-order-form .receive div{align-items:center;display:flex}.form-v2--input-order-form .receive div>span{margin:42px}@media only screen and (max-width:767px){.form-v2--input-order-form .receive div>span{margin:0}}.form-v2--input-order-form .other{align-items:center;background:#f3f6f8;border-radius:8px;color:#96989c;display:flex;height:48px;padding:22px 18px;text-align:left;width:100%}.form-v2--input-order-form img{max-width:32px;position:absolute;top:57px;transform:translateY(-50%)}@media only screen and (max-width:767px){.form-v2--input-order-form img{margin-right:8px;max-width:24px;position:static;transform:none}}.order-footer-block{align-items:center;border-top:1px solid #f1f1f2;display:flex;justify-content:space-between;padding:24px}@media only screen and (max-width:767px){.order-footer-block{flex-direction:column}}.order-footer-block p{color:#96989c}@media only screen and (max-width:767px){.order-footer-block p{margin-bottom:15px}}.order-footer-block .btn{border-radius:25px;display:inline-flex;font-size:15px;padding:11px 24px}.order-footer-block .btn-transparent{border:1px solid #e1e7ed;color:#96989c}.order-main-block{display:flex}@media only screen and (max-width:767px){.order-main-block{flex-direction:column}}.order-main-block .padding-block-order{padding:32px}.order-main-block .payment-data{background-color:#fff;display:flex;flex-direction:column}.order-main-block .payment-data .title-text{color:#282e38;font-family:"Play-Bold",sans-serif}.order-main-block .payment-data_date span{color:#96989c}.order-main-block .payment-data_header{border-bottom:1px solid #f0f1f6;display:flex;justify-content:space-between;padding:22px 32px}.order-main-block .payment-data_content{display:flex;justify-content:center;padding:24px 32px}.order-main-block .payment-data_content_header{padding-bottom:12px;text-align:center}.order-main-block .payment-data_content_header p{color:#282e38;font-family:"Play-Bold",sans-serif;font-size:24px}.order-main-block .payment-data_content .details-confirm-order{padding-top:26px}.order-main-block .payment-data_content .form-attention{margin-bottom:24px}.order-main-block .payment-data_content .form-attention h4{font-size:18px;margin:8px 0}.order-main-block .payment-data_content>div{flex:.72}@media only screen and (max-width:1025px){.order-main-block .payment-data_content>div{flex:1}}.order-main-block .form-left-block{background-color:#fbfbfc;border-right:1px solid #f0f1f6;flex:.4}.order-main-block .form-left-block_header{background-color:#f0f1f6;border-bottom:1px solid #f0f1f6;padding:24px;text-align:center}.order-main-block .form-left-block_header p{color:#282e38;font-family:"Play-Bold",sans-serif;font-size:24px;line-height:28px}.order-main-block .form-left-block_item{padding:24px 32px}.order-main-block .form-left-block_item ul{display:flex;flex-direction:column;justify-content:center}.order-main-block .form-left-block_item li{margin:0 0 26px}.order-main-block .form-left-block_item li:last-child{margin:0}.order-main-block .form-left-block .detail-id{font-size:16px}.order-main-block .form-left-block .detail-id p{color:#96989c;font-family:"Roboto-Medium",sans-serif;margin:0 0 12px}.order-main-block .form-left-block .details-currency{display:flex;justify-content:space-between}.order-main-block .form-left-block .details-currency-from{color:#96989c}.order-main-block .form-left-block .details-currency:first-child{border-bottom:1px solid #cdd0d8}.order-main-block .form-left-block .details-currency span,.order-main-block .form-left-block .details-currency>p{color:#282e38}.order-main-block .form-left-block .details-currency span{font-family:"Roboto-Medium",sans-serif;font-size:16px;word-break:break-all}.order-main-block .form-left-block .details-currency_logo img{width:32px}.order-main-block .form-payment-block{flex:1}.order-main-block .form-order-time-left{display:flex}.order-main-block .form-order-time-left div{margin-left:12px}.order-main-block .form-order-time-left span{color:#619420}.container--form{margin-left:auto;margin-right:auto;max-width:1170px}.container--form .title-text{margin-bottom:98px}.container--form .title-text h1{color:#282e38}.container--form .title-text h1 span{color:#619420}.container--form .title-text>p{color:#72819f;font-family:"Roboto-Light",sans-serif;font-size:18px;font-weight:300;margin-top:12px}.form{background:#fff;border-radius:30px;box-shadow:0 25px 50px 0 rgba(23,22,37,.15);margin:2.25rem auto 3.75em;overflow:hidden;width:97.5%}@media screen and (max-width:1024px){.form{width:97%}}.form-wr{padding:1.25em 1.8em}.form-container-padding{padding-left:70px;padding-right:70px}.form-ruls{background:#f4f5f7;border-bottom-left-radius:20px;border-bottom-right-radius:20px;padding-bottom:10px;padding-top:10px}.form-ruls p{font-size:15px}@media only screen and (max-width:767px){.form-ruls p{font-size:13px}}.form-ruls a{-webkit-text-decoration:underline;text-decoration:underline}.form-attention{background:#f3f6f8;border-radius:6px;color:#96989c;font-size:15px;line-height:18px;margin-bottom:15px;padding:21px 30px;text-align:left;word-break:break-word}.form-attention .ql-align-center{text-align:center}.form-attention .ql-align-right{text-align:right}.form-attention.promo-monitor{font-weight:700}.form-attention a{color:#619420;cursor:pointer;text-decoration:none;-webkit-text-decoration:none solid currentColor;text-decoration:none solid currentColor;-webkit-text-decoration:auto;text-decoration:auto;text-decoration-thickness:auto}.form-attention a:hover{color:#88cf2d;-webkit-text-decoration:underline;text-decoration:underline}.form h3{font-size:1.3em}.form-submit{margin-bottom:1.5em;margin-top:0;position:relative}.ordered .under-header,.payment-wait .under-header{background:none}.ordered .form,.payment-wait .form{margin-bottom:0}.form-confirmation__up{background:#fff;border-radius:6px;margin-left:auto;margin-right:auto;max-width:624px;padding:40px 26px}@media only screen and (max-width:550px){.form-confirmation__up{padding:20px 10px}}.form-confirmation__up h1{color:#000;font-size:20px;font-weight:900;line-height:140%;margin-top:34px}.form-confirmation__up .form-confirmation-manual-number>p,.form-confirmation__up p{color:#333;font-size:20px}.form-confirmation__up .form-confirmation-manual-actual-info p,.form-confirmation__up .form-confirmation-manual-number .actual-time{color:#333;font-size:14px}.form-confirmation__up .form-confirmation-manual-actual-info{text-align:center;width:100px}.form-confirmation__up .form-confirmation-manual-actual-info p{color:#787878;font-size:12px;line-height:140%}.form-confirmation__up .form-confirmation-manual-actual-info p b{color:#333;display:inline-block;font-size:36px;line-height:140%;margin-top:2px}.form-confirmation__up .form-confirmation-manual-bloc{padding-left:14px;padding-right:14px}.form-confirmation__up .form-confirmation__get,.form-confirmation__up .form-confirmation__give,.form-confirmation__up .form-confirmation__ref{margin-left:0;margin-right:0}@media screen and (max-width:1024px){.form-confirmation__up .form-confirmation__give{margin-left:0!important;margin-right:0!important}}.form-confirmation__up .form-wr{padding:1.25em 14px!important}.form-confirmation__up .form-manual-must .title{display:none}.payment-wait{min-height:100vh}.payment-wait .form{box-shadow:none;margin:0;width:100%}.merchant-form{display:flex;flex-direction:column;margin-bottom:10px}.merchant-form label{color:#212121;display:block;font-family:"Conv_MuseoSansCyrl_0",sans-serif;font-size:16px;font-weight:600;line-height:19px;margin:0 0 12px;text-align:left}.merchant-form input{background:#fff;border:1px solid #dedede;border-radius:14px;font-size:16px;padding:14px 61px 15px 22px;width:100%}.merchant-form .btn{font-size:20px;margin-top:16px}.form,.form-index{position:relative}.form-index img{width:50px}.form-index input,.form-index select{background:transparent;color:#96989c}.form-index label{align-items:center;display:flex}.form-index label span{cursor:pointer;font-size:14px;padding:0 15px}.form-index .container>p{color:#fff;font-size:1.5em;margin-top:.5rem;padding-bottom:1.25rem}.form-index-top{align-items:flex-start;display:flex;flex-wrap:wrap;margin-top:.6em}.form-index-item{flex:1 0}@media only screen and (max-width:1200px){.form-index-item{flex:1 1 auto;width:100%}}.form-index-item>p{font-size:1em;margin-bottom:5px;margin-top:5px}.form-index-bottom{display:flex;flex-wrap:wrap;justify-content:space-between;margin:0 -15px}.form-index-bottom p{cursor:pointer}.form-index-bottom .form-index-bloc{flex:1 0;margin:20px 15px}.form-index-bloc{margin:25px 0;min-width:320px}@media only screen and (max-width:1025px){.form-index-bloc{min-width:100%}}.form-index-bloc-item{border-bottom:1px solid #e6e6e6;padding-bottom:10px}.form-index-bloc p{color:#9f9f9f;font-size:14px;margin-top:5px}.form-exchange{flex:.3 0;margin:95px auto auto;min-width:135px}.form-v2{align-items:stretch;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}@media screen and (max-width:720px){.form-v2{flex-wrap:wrap}}.form-v2 .receive{flex-basis:33.33%;padding:24px 0;position:relative;z-index:3}@media screen and (max-width:860px){.form-v2 .receive{flex:1}}.form-v2 .padding-block{padding:0 32px}.form-v2 .give{border-left:1px solid #d0d2db;border-right:1px solid #d0d2db;flex-basis:33.33%;padding:24px 0;position:relative;z-index:2}@media screen and (max-width:860px){.form-v2 .give{border-left:none;border-right:none;flex:1}}.form-v2 .btn-reverse{align-items:center;background-color:#fff;border:1px solid #619420;border-radius:50%;cursor:pointer;display:flex;height:36px;justify-content:center;overflow:hidden;padding:0;position:absolute;right:-1px;top:50%;transform:translate(50%,-50%);transition:all .2s ease-in-out;width:36px;z-index:10}.form-v2 .btn-reverse svg{fill:#619420;stroke:#619420;transform:rotate(90deg);transition:all .2s ease-in-out}.form-v2 .btn-reverse:active,.form-v2 .btn-reverse:hover{background:#88cf2d;border:1px solid #88cf2d}.form-v2 .btn-reverse:active svg,.form-v2 .btn-reverse:hover svg{fill:#fff;stroke:#fff}.form-v2 .btn-reverse:disabled{background:#e2e3e8;border:1px solid #e2e3e8}@media(max-width:640px){.form-v2 .btn-reverse{display:none;height:32px;width:32px}.form-v2 .btn-reverse svg{height:12px;width:12px}}.form-v2 .dataInput{flex-basis:33.33%;padding:24px 32px}@media screen and (max-width:860px){.form-v2 .dataInput{flex:1}.form-v2 .dataInput,.form-v2 .give,.form-v2 .receive{padding:8px!important}}@media screen and (max-width:720px){.form-v2 .dataInput,.form-v2 .give,.form-v2 .receive{min-width:300px}}.form-v2 .give .form--title img{transform:scaleX(-1) rotate(180deg)}.form-v2 .dataInput .form--title img{transform:scaleX(-1) rotate(140deg)}.form-v2 .receive .form-v2__currency--list a.active span.cur--logo{background:#fff;border-radius:6px}.form-v2 .receive .form-v2__currency--list a.active img{opacity:1}.form-v2 .receive .form-v2__currency--list{border-bottom-left-radius:12px;border-bottom-right-radius:12px}.form-v2 .give{background:#fff}.form-v2 .give .form-v2__currency--list a.active img{opacity:1}.form-v2__currency--list{overflow-x:hidden}.form-v2__currency--list ul{margin:0;padding:0}.form-v2__currency--list li{border-top:1px solid #dedede}.form-v2__currency--list li:last-child a{border-bottom:none}.form-v2__currency--list li:first-child{border-top:none}.form-v2__currency--list a{border-left:3px solid transparent;color:#000;flex-direction:row;font-size:14px;min-height:56px;padding:7px 0}.form-v2__currency--list a,.form-v2__currency--list a p{align-items:center;display:flex;justify-content:space-between}.form-v2__currency--list a p{flex:1;flex-direction:row;flex-wrap:wrap;font-family:"Roboto-Medium",sans-serif;line-height:30px;padding:0 12px;text-align:left}.form-v2__currency--list a span{align-items:center;display:inline-flex;flex:none;flex-direction:column;justify-content:center}.dataInput--info{border:2px dashed #9fcc66;border-radius:12px;margin-bottom:22px;overflow:hidden}.dataInput--info__item{flex-direction:row;font-size:14px;padding:8px 10px}.dataInput--info__item,.dataInput--info__item p{align-items:center;display:flex;justify-content:space-between}.dataInput--info__item p{flex:1;flex-direction:row;flex-wrap:wrap;font-family:"Roboto-Medium",sans-serif;padding:0 11px}.dataInput--info__item span{flex:none}.dataInput--info__item span.data--logo{max-width:44px;padding:0 7px;width:44px}.dataInput--info__item span.data--img{max-width:22px;padding:0 3px}.dataInput--info li:last-child{border-top:1px dashed #d0d2db}.dataInput--titleSub{color:#282e38;font-family:"Play-Bold",sans-serif;font-size:18px;font-weight:700;margin:0 0 16px;text-align:center}.dataInput--inputs .form-v2--input{color:#282e38;margin-bottom:15px}.dataInput--inputs .form-v2--input img{max-width:20px;right:22px;top:50%}.dataInput--inputs .btn{font-size:20px;margin-top:1rem;min-height:56px;width:100%}@media screen and (max-width:860px){.dataInput--inputs .btn{font-size:14px;min-height:40px;padding-left:10px;padding-right:10px}}.dataInput--label{height:40px}.dataInput--label input[type=checkbox]{height:0;opacity:0;position:absolute;width:0}.dataInput--label label{align-items:center;color:#96989c;display:flex;flex-wrap:wrap}.dataInput--label label a{color:#619420;margin:0;padding:0;-webkit-text-decoration:underline;text-decoration:underline}.dataInput--label label a:hover{-webkit-text-decoration:none;text-decoration:none}.dataInput--label input[type=checkbox]+label{cursor:pointer;font-size:14px;margin:0 10px 0 0;padding:0 40px 0 0;position:relative}.dataInput--label input[type=checkbox]+label:before{background:#f7fafc;border:1px solid #6fa628;border-radius:6px;box-shadow:inset 0 .8px .6px rgba(55,67,99,.25);content:" ";display:block;height:24px;position:absolute;right:-8px;top:50%;transform:translateY(-50%);width:24px}.dataInput--label input[type=checkbox]+label:after{border-bottom:2px solid #619420;border-right:2px solid #619420;content:" ";display:block;height:11px;margin-top:-3px;opacity:0;position:absolute;right:0;top:50%;transform:scale(0) translateY(-50%) rotate(45deg);transition:all .3s ease;width:8px;z-index:1}.dataInput--label input[type=checkbox]:checked+label:after{opacity:1;transform:scale(1) translateY(-50%) rotate(45deg)}.cur--logo,.data--logo{align-items:center;display:inline-flex;flex-direction:column;height:42px;justify-content:center;padding:0 5px;width:42px}.cur--logo__wr,.data--logo__wr{flex:none;max-height:42px;max-width:61px;padding:0 15px;text-align:center}.cur--logo img,.data--logo img{width:100%}.cur--txt,.data--txt{flex:1;margin:0 5px;padding:0}.cur--sum,.data--sum{color:#96989c;font-family:"Roboto-Regular",sans-serif;font-size:14px;margin-right:5px;max-width:none!important}.cur--order,.data--order{background:#f0f1f4;border-radius:6px;color:#28bab7;display:inline-block;font-size:14px;margin:0 6px;max-width:none!important;padding:4px 14px;-webkit-text-decoration:underline;text-decoration:underline}.cur--check,.cur--img,.data--check,.data--img{flex:none;padding:0 15px;text-align:center}.cur--check img,.cur--img img,.data--check img,.data--img img{width:16px}.data--logo{border-right:none}.data--img{border-left:none}.data--img img{height:14px}.data-down img{height:14px;transform:scaleX(-1) rotate(180deg)}.form--title{flex-direction:row;justify-content:space-between;margin-bottom:24px}.form--title,.form--title p{align-items:center;display:flex}.form--title p{color:#96989c;font-family:"Roboto-Regular",sans-serif;font-size:13px;font-weight:400;justify-content:flex-start;letter-spacing:.5px;margin:0 5px;max-width:310px}.form--title div{align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-end}.form--title h4,.form--title h5,.form--title h6{font-family:"Play-Bold",sans-serif;font-size:24px;font-weight:700;margin:0;padding:0}.form--title img{width:11px}.form-v2--input{margin:0 0 20px;position:relative}.form-v2--input input{background:#f3f6f8;border-radius:6px;color:#282e38;font-size:20px;height:64px;line-height:18px;padding:21px 30px;text-align:left;width:100%}.form-v2--input input:disabled{background:#eee}.form-v2--input img{max-width:35px;position:absolute;right:20px;top:32px;transform:translateY(-50%)}.form-v2--input-enter-form{margin:0 0 20px;position:relative}.form-v2--input-enter-form input,.form-v2--input-enter-form select{background:#f3f6f8;border-radius:6px;color:#96989c;font-size:15px;height:64px;line-height:18px;padding:21px 30px;text-align:left;width:100%}.form-v2--input-enter-form input:disabled,.form-v2--input-enter-form select:disabled{background:#eee}.form-v2--input-enter-form img{max-width:35px;position:absolute;right:20px;top:32px;transform:translateY(-50%)}.currency--choice{align-items:center;background:#f7fafc;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start}.currency--choice p{color:#9f9f9f;font-size:13px;margin-right:6px;max-width:60px}.currency--choice ul{align-items:center;border-top:1px solid #d0d2db;display:flex;flex:1;flex-direction:row;flex-wrap:nowrap;justify-content:center;padding:14px 30px;position:relative}.currency--choice ul li{display:flex;flex:1;margin:5px 2px}.currency--choice ul li:after{border-right:1px solid #d0d2db;content:"";margin-left:5px}.currency--choice ul li:last-child:after{border:none}.currency--choice ul a{border-radius:4px;box-shadow:none;color:#619420;cursor:pointer;display:inline-block;font-size:14px;line-height:16.41px;padding:8px 1px;text-align:center;text-transform:uppercase;width:100%}.currency--choice ul a:hover{background:#619420;color:#fff;opacity:.9}.currency--choice ul a.active{background:#619420;color:#fff;font-family:"Roboto-Medium",sans-serif}.form-v2__currency--list li{cursor:pointer}.form-v2__currency--list li:hover{background:#ededed}.services h2{font-size:40px;line-height:46.28px}.services h2 span{border:none;color:#619420}@media only screen and (max-width:767px){.services{display:none}}.services ul{align-items:center;display:flex;flex-wrap:wrap;justify-content:center;margin:0 -1.5%}@media only screen and (max-width:767px){.services ul{margin:0}}.services li{flex-basis:29.1666666667%;flex-grow:0;flex-shrink:0;margin:2rem 1.5%;max-width:29.1666666667%;min-width:320px;padding:1rem}.services img{max-width:80px;padding-top:6px;width:300px}.services span{border-bottom:1px solid #e6e6e6;display:inline-block;margin:auto;padding-bottom:1rem}.services p{font-size:1rem;line-height:1.88;margin-bottom:0;margin-top:1.4rem;text-transform:uppercase}.services-txt{color:#96989c;font-family:"Roboto-Light",sans-serif;font-size:14px;font-weight:300;line-height:16.41px}.form-confirmation-manual-bloc{align-items:center;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;padding-bottom:.8em}@media only screen and (max-width:1200px){.form-confirmation-manual-bloc>div{flex-grow:1;justify-content:space-between}}.form-confirmation-manual-number>p{color:#282e39;font-size:1.5em;margin-top:.5rem}.form-confirmation-manual-overtime{padding:0 30px}@media only screen and (max-width:550px){.form-confirmation-manual-overtime{padding:0 5px}}.form-confirmation-manual-overtime img{max-width:88px;width:100%}.form-confirmation-manual-actual{align-items:center;display:flex;flex-direction:row}@media only screen and (max-width:1200px){.form-confirmation-manual-actual{margin-top:.5rem}}.form-confirmation-manual-actual-info p{color:#fff;font-size:15px;line-height:1.3}@media only screen and (max-width:550px){.form-confirmation-manual-actual-info p{font-size:12px}}.form-confirmation-manual-actual-info p b{font-size:2.68rem}.form-information .form-wr{padding-top:2em}.form-information-sent-received{align-items:center;display:flex;flex-direction:row;flex-wrap:wrap;margin:0 -.9375rem}@media only screen and (max-width:767px){.form-information-sent-received{margin:0}}.form-information-sent-received-wr{align-items:center;border:1px solid #e6e6e6;display:flex;flex:1 1;flex-direction:row;margin:1.895rem .9375rem;min-width:320px;padding:1.5rem .94rem}@media only screen and (max-width:767px){.form-information-sent-received-wr{flex-wrap:wrap;justify-content:center;margin:.5rem 0;padding-left:0;padding-right:0}}@media only screen and (max-width:550px){.form-information-sent-received-wr{flex-wrap:wrap;justify-content:center;margin-left:0;margin-right:0;max-width:100%;min-width:100%;text-align:center}}.form-information-sent-received_img{padding:0 1.65rem}@media only screen and (max-width:550px){.form-information-sent-received_img{margin-bottom:.5rem}}.form-information-sent-received_img img{max-width:100px;width:100%}.form-information-sent-received_info{flex:1 0 auto;padding:0 .94rem}@media only screen and (max-width:767px){.form-information-sent-received_info{width:100%}}.form-information-sent-received_info span{font-family:"Conv_MuseoSansCyrl_2",sans-serif;font-size:1.125rem}@media only screen and (max-width:767px){.form-information-sent-received_info span{display:block;margin-top:.5rem;width:100%}}.form-information-sent-received_info .title{align-items:center;display:flex;font-size:1.875rem;justify-content:space-between}@media only screen and (max-width:767px){.form-information-sent-received_info .title{flex-wrap:wrap;font-size:1.2rem;justify-content:center}}.form-information-sent-received_info .title span{font-size:1.875rem}@media only screen and (max-width:767px){.form-information-sent-received_info .title span{display:block;font-size:1.2rem;margin:auto;width:100%}}.form-information-sent-received_info div{align-items:center;border-top:1px solid #80d41e;display:flex;justify-content:space-between;padding-top:12px}.form-information-sent-received ul{margin-bottom:10px;margin-top:10px;width:100%}.form-information-sent-received li{align-items:center;display:flex;font-size:1rem;justify-content:space-between;padding:5px 10px}.form-information-sent-received li:nth-child(odd){background:#f4f5f7}@media only screen and (max-width:767px){.form-information-sent-received li{flex-wrap:wrap;justify-content:center}}.form-information_contact ul{margin:0 -2.4rem}@media only screen and (max-width:767px){.form-information_contact ul{margin:0}}.form-information_contact span{color:#9f9f9f;font-size:14px}@media only screen and (max-width:767px){.form-information_contact .btn-plain{margin-left:auto;margin-right:auto}}.form-information_contact,.form-information_contact ul{align-items:center;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between}.form-information_contact .contact,.form-information_contact ul .contact{margin:1.75rem 2.4rem}@media only screen and (max-width:767px){.form-information_contact .contact,.form-information_contact ul .contact{margin:.5rem 0}}.form-information_contact .contact p,.form-information_contact ul .contact p{font-size:20px;margin-top:10px}@media only screen and (max-width:767px){.form-information_contact .contact p,.form-information_contact ul .contact p{font-size:14px;margin-top:5px}}.form-information .form-submit{margin-top:.94rem}.form-manual .form-information-sent-received-wr{margin-bottom:0;padding:1rem .94rem}.form-manual .form-information-sent-received_info .title span{font-size:1.55rem}@media only screen and (max-width:767px){.form-manual .form-information-sent-received_info .title span{margin-left:10px}}.form-manual .form-information-sent-received_img img{max-width:70px}.form-manual .form-information_contact{justify-content:center;margin-bottom:0}.form-manual .form-information_contact .contact{margin:.88rem 2.4rem}@media only screen and (max-width:767px){.form-manual .form-information_contact .contact{margin-left:0;margin-right:0}}.form-manual .form-information_contact ul{margin:0}.form-manual-must .title{color:#282e38;font-family:"Play-Bold",sans-serif;font-size:22px;line-height:27.77px}@media screen and (max-width:460px){.form-manual-must .title{font-size:16px}}.form-manual-must ul{display:flex;flex-direction:column;justify-content:center;margin:58px 0}.form-manual-must li{align-items:center;display:flex;justify-content:space-between;padding:0 0 34px}.form-manual-must li:last-child{padding:0}.form-manual-must li p{padding-right:12px;white-space:nowrap}.form-manual-must li .value-manual-payment{align-items:center;color:#282e38;display:flex;word-break:break-all}.form-manual-must li .value-manual-payment img{cursor:pointer;padding-left:12px}@media only screen and (max-width:550px){.form-manual-must li div{flex-wrap:wrap}}.form-manual-must li div p{line-height:1.95;margin-right:12px;white-space:nowrap}@media only screen and (max-width:550px){.form-manual-must li div p{line-height:normal;margin:6px 6px 6px 0;text-align:left;white-space:normal}}.form-manual-must .btn img{margin:0 6px 0 0}.form-manual-must_txt{font-size:1rem}@media screen and (max-width:460px){.form-manual-must_txt{font-size:.75rem}}.form-manual .btn-plain{margin-top:.5rem;position:absolute;right:0}@media only screen and (max-width:767px){.form-manual .btn-plain{margin-top:1.5rem;position:relative}}.form-manual-wait .merchant-qrcode{margin-bottom:-15px;margin-top:30px}.form-manual-wait .form-manual-must ol{padding-top:26px}.form-manual-wait .form-manual-must ol li{display:block;padding:0;text-align:left!important}.form-manual-wait .form-manual-must ol li div{margin:0 0 20px;position:relative}.form-manual-wait .form-manual-must ol li p{line-height:16.41px;margin-bottom:9px}.form-manual-wait .form-manual-must .form-manual-must_txt{align-items:center;background:#f3f6f8;border-radius:8px;color:#000;display:flex;height:48px;padding:14px 18px;text-align:left;width:100%}.form_reviews-new{box-shadow:0 5px 30px 0 #e3e3e4;margin-top:4rem;width:100%}.form_reviews-new .title{margin-bottom:.9rem}.form_reviews-new_wr{overflow:hidden;padding-bottom:2.4rem;position:relative}@media only screen and (max-width:550px){.form_reviews-new_wr{padding:0 1rem 1rem}}.form_reviews-new_wr:after,.form_reviews-new_wr:before{opacity:.1;position:absolute;z-index:0}.form_reviews-new_wr:after{content:url(' +
          Y +
          ");right:-18rem;top:-5.5rem;width:46rem}.form_reviews-new_wr:before{bottom:-13.3rem;content:url(" +
          K +
          ');left:-18.5rem;width:46rem}.form_reviews-new_base{margin:auto;max-width:35rem;position:relative;z-index:1}.form_reviews-new input,.form_reviews-new textarea{background-color:#f4f5f7;border:1px solid #eee;border-radius:20px;font-size:1rem;margin:10px 0 0;padding:10px 35px 10px 15px;width:100%}.form_reviews-new input::-webkit-input-placeholder,.form_reviews-new textarea::-webkit-input-placeholder{color:#9f9f9f;font-style:italic}.form_reviews-new input::-moz-placeholder,.form_reviews-new textarea::-moz-placeholder{color:#9f9f9f;font-style:italic}.form_reviews-new input:-ms-input-placeholder,.form_reviews-new textarea:-ms-input-placeholder{color:#9f9f9f;font-style:italic}.form_reviews-new input:-moz-placeholder,.form_reviews-new textarea:-moz-placeholder{color:#9f9f9f;font-style:italic}.form_reviews-new textarea{height:4.875rem;min-height:3rem;resize:vertical}.form_reviews-new .btn{margin-top:1.5rem}.form-order-header{margin:70px 0;text-align:center}@media only screen and (max-width:767px){.form-order-header{margin:50px 0}}.form-order-header h1{color:#282e38}.form-order-header h1 span{color:#619420}.form-confirmation{padding-bottom:5.5em}@media only screen and (max-width:767px){.form-confirmation{padding-bottom:.5em}}@media screen and (max-width:1200px){.form-confirmation .form-wr{padding:1.25em 0}}@media screen and (max-width:1024px){.form-confirmation .form-wr{padding:1.25em 0 0}}.form-confirmation__main{align-items:stretch;display:flex;justify-content:space-between}@media screen and (max-width:767px){.form-confirmation__main{align-items:inherit;flex-direction:column}}.form-confirmation__main--top{background:#f3f3f7;border-radius:10px;margin-bottom:1.5em;padding:1em 1.125em}.form-confirmation__main--title{color:#212121;font-size:16px;line-height:19px;margin:0 0 12px}.form-confirmation__main--currency{align-items:center;display:flex;flex-direction:row;justify-content:space-between}.form-confirmation__main--currency__name{align-items:center;display:flex;justify-content:flex-start}.form-confirmation__main--currency__name img{margin-right:12px;width:36px}.form-confirmation__main--currency__name span{color:#212121;font-size:2rem;line-height:2.375rem}@media screen and (max-width:1024px){.form-confirmation__main--currency__name span{font-size:1rem}}.form-confirmation__main--currency__amount{color:#9f9f9f;font-size:1.25rem;line-height:1.5}@media screen and (max-width:1024px){.form-confirmation__main--currency__amount{font-size:1rem}}.form-confirmation__main--address__title{align-items:center;display:flex;justify-content:flex-start;margin-bottom:8px}.form-confirmation__main--address__title img{margin-right:6px;max-width:16px}.form-confirmation__main--address__title span{color:#212121;font-size:14px;line-height:17px}.form-confirmation__main--address>p{color:#9f9f9f;font-size:12px;line-height:14px}.form-confirmation__main--bottom{align-items:center;border-top:1px solid #dedede;display:flex;flex-direction:row;justify-content:space-between;margin-top:20px;padding-top:12px}.form-confirmation__main--bottom p,.form-confirmation__main--bottom span{font-size:16px;line-height:19px}.form-confirmation__main--bottom span{color:#212121}.form-confirmation__main--bottom p{color:#9f9f9f}.form-confirmation--order .form-confirmation__get,.form-confirmation--order .form-confirmation__give,.form-confirmation--order .form-confirmation__ref{margin-bottom:0;margin-top:0}@media screen and (max-width:1024px){.form-confirmation--order .form-confirmation__get,.form-confirmation--order .form-confirmation__give,.form-confirmation--order .form-confirmation__ref{margin:1.5em 2.585em}}@media screen and (max-width:767px){.form-confirmation--order .form-confirmation__give{margin-bottom:0}}@media screen and (max-width:1024px){.form-confirmation--order .form-confirmation__ref{margin:0}}.form-confirmation--order .btn-log-in{line-height:normal;padding-bottom:4px;padding-top:4px}.form-confirmation--order .btn-log-in img{height:21px;width:21px}.form-confirmation--order .form-submit{margin-top:0}@media only screen and (min-width:1026px){.form-confirmation--order .form-submit{margin-bottom:0}}.form-confirmation__ref{align-items:center;display:flex;flex:none;margin-left:0;margin-right:0;position:relative}@media screen and (max-width:767px){.form-confirmation__ref{justify-content:center;margin-bottom:0;margin-top:0}}.form-confirmation__ref:after{background:#efefef;content:"";height:100%;left:16px;position:absolute;width:1px;z-index:1}@media screen and (max-width:767px){.form-confirmation__ref:after{height:1px;left:0;width:100%}}.form-confirmation__ref span{cursor:pointer;display:inline-flex;position:relative;z-index:2}@media screen and (max-width:767px){.form-confirmation__ref span{transform:rotate(90deg)}}.form-confirmation__contact{margin:.85em 2.585em .75em}@media screen and (max-width:1024px){.form-confirmation__contact{margin:.85em 1.585em .75em}}@media screen and (max-width:767px){.form-confirmation__contact{margin-bottom:0}}.form-confirmation__contact>p{color:#212121;font-size:16px;line-height:19px;margin-bottom:12px}.form-confirmation__contact ul{align-items:center;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start}.form-confirmation__contact li{color:#9f9f9f;font-size:12px;line-height:14px;margin-bottom:10px;margin-right:2.5rem}.form-confirmation__contact li span{color:#212121;display:inline-block;margin-right:6px}.form-confirmation__bottom{align-items:center;background:#fafafc;display:flex;flex-direction:row;justify-content:flex-end;padding:1.125em 4.385em 1.25em}@media screen and (max-width:1200px){.form-confirmation__bottom{padding:1.125em 2.385em 1.25em}}@media screen and (max-width:1024px){.form-confirmation__bottom{padding:1.125em 1.385em 1.25em}}@media screen and (max-width:767px){.form-confirmation__bottom{flex-direction:column}}.form-confirmation__bottom--verification{flex:1;margin-bottom:15px}.form-confirmation__bottom--verification>p{margin-bottom:11px}@media screen and (max-width:767px){.form-confirmation__bottom--verification{width:100%}}.form-confirmation__bottom--verification__item{align-items:center;border:1px dashed #e1e4ed;border-radius:5px;display:flex;flex-direction:row;justify-content:space-between;margin:0 0 14px;padding:18px 25px}@media screen and (max-width:414px){.form-confirmation__bottom--verification__item{flex-wrap:wrap;justify-content:center}}.form-confirmation__bottom--verification__item:last-child{margin-bottom:0}.form-confirmation__bottom--verification__item.go-to-verif a{color:#619420}.form-confirmation__bottom--verification__item.success-verif{border-color:#69c036;color:#69c036}.form-confirmation__bottom--verification__item.success-verif a,.form-confirmation__bottom--verification__item.success-verif p,.form-confirmation__bottom--verification__item.success-verif span{color:#69c036}.form-confirmation__bottom--verification__item div{align-items:center;display:flex;flex-direction:row;justify-content:flex-start}.form-confirmation__bottom--verification__item div img{margin-right:6px;max-width:10px}.form-confirmation__bottom--verification__item div p{color:#9f9f9f;margin-right:8px}.form-confirmation__bottom--verification__item div span{color:#282e38}.form-confirmation__bottom--verification__item a,.form-confirmation__bottom--verification__item p,.form-confirmation__bottom--verification__item span{font-size:14px;line-height:17px}@media screen and (max-width:414px){.form-confirmation__bottom--verification__item a,.form-confirmation__bottom--verification__item p,.form-confirmation__bottom--verification__item span{font-size:13px;white-space:nowrap}}@media screen and (max-width:340px){.form-confirmation__bottom--verification__item a,.form-confirmation__bottom--verification__item p,.form-confirmation__bottom--verification__item span{font-size:12px}}.form-confirmation__bottom--verification__item a{cursor:pointer}.form-confirmation__bottom--verification__item a:hover{-webkit-text-decoration:none;text-decoration:none}.form-confirmation__bottom--verification__item>p{align-items:center;display:flex;justify-content:flex-end}.form-confirmation__bottom--verification__item>p a{color:#212121;-webkit-text-decoration:none;text-decoration:none}.form-confirmation__bottom--verification__item>p img{margin-left:8px;max-width:10px}.form-confirmation__bottom--btns{align-items:center;border-left:1px solid #dedede;display:flex;flex:1;justify-content:center;margin-left:2.9375rem;max-width:365px;padding:1rem 0 1rem 2.75rem}@media screen and (max-width:1200px){.form-confirmation__bottom--btns{margin-left:1.9375rem;max-width:300px;padding:1.75rem 0 1.75rem 1.75rem}}@media screen and (max-width:1024px){.form-confirmation__bottom--btns{flex:none;flex-direction:column-reverse;margin-left:1.5rem;max-width:none;padding:1.75rem 0 .75rem 1rem}}@media screen and (max-width:767px){.form-confirmation__bottom--btns{border-left:none;border-top:1px solid #dedede;flex:1;flex-direction:row;margin-left:0;margin-top:1.5rem;padding-left:0;padding-top:1.5rem;width:100%}}.form-confirmation__bottom--btns .btn{min-width:100px}.form-confirmation .btn-reject{color:#a0a0a0;font-size:14px;line-height:17px;margin-right:2em;padding-left:0;padding-right:0;-webkit-text-decoration:underline;text-decoration:underline}@media screen and (max-width:1200px){.form-confirmation .btn-reject{margin-right:12px}}@media screen and (min-width:768px)and (max-width:1024px){.form-confirmation .btn-reject{margin-right:0;margin-top:18px}}.form-confirmation .btn-reject:hover{-webkit-text-decoration:none;text-decoration:none}.copy-icon-profile{background:#fff;height:40px;line-height:44px;padding:0;position:relative;right:-20px;top:2px;width:20px}.copy-icon-profile span{cursor:pointer;display:inline-block;height:inherit;text-indent:-12px;width:18px}.copy-icon-profile img{width:100%}.copy-icon{height:40px;position:absolute;width:18px}.copy-icon img{width:100%}.form-payment-condition{border-radius:30px;max-width:512px}.form-payment-condition .form-wr{padding:0}.form-payment-condition--top{padding:18px 30px}@media only screen and (max-width:767px){.form-payment-condition--top{padding:10px 14px}}.form-payment-condition--top p{align-items:center;background-position:0;background-repeat:no-repeat;background-size:50px;color:#fff;display:inline-flex;font-size:20px;font-weight:300;justify-content:center;line-height:28px;padding-bottom:11px;padding-left:66px;padding-top:11px}@media only screen and (max-width:767px){.form-payment-condition--top p{background-size:36px!important;font-size:16px;padding-bottom:5px;padding-left:50px;padding-top:5px}}.form-payment-condition--top.success{background:#69c036}.form-payment-condition--top.success p{background:url(' +
          V +
          ");background-position:0;background-repeat:no-repeat;background-size:50px}.form-payment-condition--top.processing{background:#f0f1f4}.form-payment-condition--top.processing p{background:url(" +
          Q +
          ");background-position:0;background-repeat:no-repeat;background-size:50px;color:#9f9f9f}.form-payment-condition--top.refunded{background:#f7931a}.form-payment-condition--top.refunded p{background:url(" +
          J +
          ");background-position:0;background-repeat:no-repeat;background-size:50px}.form-payment-condition--top.deleted{background:#ee404f}.form-payment-condition--top.deleted p{background:url(" +
          F +
          ');background-position:0;background-repeat:no-repeat;background-size:50px}.form-payment-condition--main{padding:28px 40px}@media only screen and (max-width:767px){.form-payment-condition--main{padding:18px 10px}}.form-payment-condition--main__top{align-items:center;background:#f3f3f7;border-radius:10px;display:flex;justify-content:space-between;padding:18px 20px}@media only screen and (max-width:767px){.form-payment-condition--main__top{flex-wrap:wrap}}.form-payment-condition--main__top .title{align-items:center;display:flex;font-size:28px;font-weight:300;justify-content:flex-start;line-height:34px}@media only screen and (max-width:767px){.form-payment-condition--main__top .title{font-size:20px;width:100%}}.form-payment-condition--main__top .title img{flex:none;margin-right:16px;max-width:44px;width:100%}@media only screen and (max-width:767px){.form-payment-condition--main__top ul{width:100%}}.form-payment-condition--main__top li{color:#9f9f9f;font-size:16px;font-weight:300;line-height:1.5;margin:0;padding:0;text-align:right}@media only screen and (max-width:767px){.form-payment-condition--main__top li{font-size:14px;text-align:left}}.form-payment-condition--main__top li b{color:#212121;display:inline-block;font-size:18px;font-weight:700;line-height:22px}@media only screen and (max-width:767px){.form-payment-condition--main__top li b{font-size:16px}}.form-payment-condition--main__data{padding-bottom:10px;padding-top:10px}.form-payment-condition--main__data li{align-items:center;display:flex;justify-content:space-between;padding:16px 0}.form-payment-condition--main__data li:last-child{border-bottom:none}.form-payment-condition--main__data li p{align-items:center;color:#9f9f9f;display:flex;font-size:16px;font-weight:300;justify-content:space-between;line-height:19px;width:100%}@media only screen and (max-width:767px){.form-payment-condition--main__data li p{font-size:14px}}.form-payment-condition--main__data li p span{color:#212121;font-size:16px}@media only screen and (max-width:767px){.form-payment-condition--main__data li p span{font-size:14px}}.form-payment-condition--main__data li.total{border-top:1px solid #dedede}.form-payment-condition--main__data li.total p{color:#212121}.form-payment-condition--main__data li.total span{font-size:18px}@media only screen and (max-width:767px){.form-payment-condition--main__data li.total span{font-size:14px}}.form-payment-condition--main .partner-margin{margin-top:0}.form-payment-condition--main .partner-margin .btn{font-size:14px;line-height:33px}.partner-block{overflow:hidden;position:relative}.partner-block .container-dashed{border-top:1px dashed #ced3e6}.partner-block .our-partner{margin:0}.partner-block .our-partner .title{font-size:1.875rem;margin-bottom:.5rem}.partner-block .our-partner ul{align-items:center;display:flex;flex-wrap:wrap;justify-content:center}@media only screen and (max-width:767px){.partner-block .our-partner ul{flex-direction:column}}.partner-block .our-partner li{flex:1 1;margin:10px;min-width:200px;padding:10px 15px}.partner-block .our-partner li a{border-left:1px solid #dedede}.partner-block .our-partner li a:first-child{border-left:none}.partner-block .our-partner img{max-width:140px}@media only screen and (max-width:767px){.partner-block .our-partner img{max-width:240px}}.partner{margin-top:10px}.partner-top{align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding-bottom:3.35rem;padding-top:0}@media only screen and (max-width:767px){.partner-top{flex-wrap:wrap;justify-content:center;padding-top:3rem}.partner-top h1{margin-bottom:.5rem}}.partner-top .btn{padding-left:3.75rem;padding-right:3.75rem}@media only screen and (max-width:1200px){.partner-top-wr{background-position-y:0}}.partner li{border:1px solid #e6e6e6;margin-bottom:1.875rem;margin-top:1.875rem;padding:1.25rem}.partner-item{display:flex}@media only screen and (max-width:650px){.partner-item{flex-wrap:wrap;justify-content:center}}.partner-img{align-items:center;border-right:1px solid #e6e6e6;display:flex;flex-direction:column;justify-content:center;min-width:25%;padding-right:2.1875rem}.partner-img img{max-width:9.625rem;width:100%}@media only screen and (max-width:650px){.partner-img{border-bottom:1px solid #e6e6e6;border-right:none;padding-right:0}}.partner-description{margin-left:2.1875rem}@media only screen and (max-width:650px){.partner-description{margin-left:0}}.partner-description-title{color:#b6b6b6;font-size:12px;margin-bottom:.3rem;margin-top:1rem;text-transform:uppercase}.partner-description-theme{font-size:1.5rem;margin-bottom:10px}.partner-description-txt{font-size:1rem;line-height:1.5;margin-bottom:2.5rem}.partner-order-states{background-color:#fff}.partner-order-states h1{text-align:center}.partner-order-states .under-header{background-image:none}.partner-order-states .form-confirmation-manual-number{width:100%}.container-aff{display:flex;flex-direction:column;margin:3rem 3.6rem}@media only screen and (max-width:767px){.container-aff{margin:.5rem 1rem}}@media only screen and (max-width:1200px){.container-aff{margin:1rem 2rem}}.partners-program,.requisites-main-block{border-top:1px solid #f3f3f3}.partners-program .container-api,.requisites-main-block .container-api{display:flex;flex-direction:column;margin:3.3rem 6.6rem}@media only screen and (max-width:767px){.partners-program .container-api,.requisites-main-block .container-api{margin:.5rem 1rem}}@media only screen and (max-width:1200px){.partners-program .container-api,.requisites-main-block .container-api{margin:1rem 2rem}}.partners-program .container-api h2,.requisites-main-block .container-api h2{margin-left:0}@media only screen and (max-width:767px){.partners-program .container-api h2,.requisites-main-block .container-api h2{margin:auto}}.partners-program__main,.requisites-main-block__main{border-radius:24px;box-shadow:0 15px 116px hsla(206,6%,48%,.05),0 32px 75px hsla(206,6%,48%,.1);display:flex;flex-direction:column;margin-bottom:80px;margin-top:55px}.partners-program__main .title,.requisites-main-block__main .title{font-family:"Play-Bold",sans-serif;font-size:24px}.partners-program h2,.requisites-main-block h2{margin-left:52px}@media only screen and (max-width:767px){.partners-program h2,.requisites-main-block h2{margin-left:0}}.partners-program ul,.requisites-main-block ul{display:flex;flex-wrap:wrap;justify-content:center;margin-top:13px}@media only screen and (max-width:767px){.partners-program ul,.requisites-main-block ul{margin-left:0;margin-right:0}}.partners-program li,.requisites-main-block li{border:1px solid #e6e6e6;flex:0 0 auto;flex-basis:28.3333333333%;flex-grow:0;flex-shrink:0;margin:.45rem .9rem .45rem .8rem;max-width:28.3333333333%;min-width:285px;padding:1.875rem}@media only screen and (max-width:767px){.partners-program li,.requisites-main-block li{min-width:300px}}.partners-program li div>div,.requisites-main-block li div>div{margin-top:1.25rem}.partners-program li div>div p,.requisites-main-block li div>div p{align-items:center;border-top:1px dashed #ced3e6;display:flex;justify-content:space-between;padding:5px 10px}.partners-program li div>div p:last-child,.requisites-main-block li div>div p:last-child{border-bottom:1px dashed #ced3e6}.partners-program .bp-dropdown__body ul,.requisites-main-block .bp-dropdown__body ul{margin:0}.partners-program .bp-dropdown__body ul .element-currency-pr,.requisites-main-block .bp-dropdown__body ul .element-currency-pr{margin:0;max-width:100%;min-width:100%;padding:0;width:100%}.partners-program .modal-body .form-index-bloc-item label,.requisites-main-block .modal-body .form-index-bloc-item label{display:inline-block;font-size:18px;font-weight:600;padding:5px;text-align:left;width:50%}.partners-program .modal-body .form-index-bloc-item input,.requisites-main-block .modal-body .form-index-bloc-item input{display:inline-block;font-size:18px;font-weight:600;padding:5px;text-align:right;width:40%}.partners-program-title,.requisites-main-block-title{color:#9f9f9f;font-family:"Roboto-Light",sans-serif;font-size:15px;margin-bottom:1.875rem;text-transform:uppercase}.partners-program-cost,.requisites-main-block-cost{font-family:"Play-Regular",sans-serif;font-size:52px;margin-bottom:1.875rem}.partners-program-cost span,.requisites-main-block-cost span{font-size:1rem;font-weight:400}.partners-program .btn-submit,.requisites-main-block .btn-submit{padding-left:50px;padding-right:50px}.personal-room{margin-top:3rem}.personal-room-top-wr{background-position-y:-.5rem}.personal-room .title{margin-bottom:2.1875rem}.ref-link{border-top:1px solid #f3f3f3;margin-bottom:1rem;margin-top:.1rem;overflow:hidden;position:relative}.ref-link .container{position:relative;z-index:2}.ref-link-title{margin-left:52px}@media only screen and (max-width:767px){.ref-link-title{margin-left:0}}.ref-link-title p{font-family:"Roboto-Light",sans-serif;font-size:15px;margin-top:10px}.ref-link-list{align-items:flex-start;display:flex;flex-wrap:wrap;justify-content:center;margin-top:40px}@media only screen and (max-width:767px){.ref-link-list{align-items:center}}.ref-link-list>div{margin-right:24px;width:42.7%}@media only screen and (max-width:767px){.ref-link-list>div{margin-right:0;width:100%}}.ref-link-list .current-link{background-color:#619420;color:#fff}.ref-link .title{text-align:left}.ref-link input{background-color:#f3f6f8;border-radius:8px;font-size:1rem;margin:10px 0;padding:20px 35px 15px 15px;width:100%}@media only screen and (max-width:767px){.ref-link input{font-size:.8rem}}.ref-link label{display:block;margin:auto;position:relative}@media only screen and (max-width:767px){.ref-link label{width:100%}}.ref-link label span{cursor:pointer;position:absolute;right:10px;top:19px}.ref-link label span img{width:20px}@media only screen and (max-width:767px){.ref-link label span img{width:18px}}.statistic{padding-bottom:4rem;padding-top:4rem}.statistic-ul{display:flex;flex-wrap:wrap;justify-content:center;margin:.94rem -1.875rem}@media only screen and (max-width:767px){.statistic-ul{margin-left:0;margin-right:0}}.statistic-ul>li{flex:1 1;flex-basis:46.25%;flex-grow:0;flex-shrink:0;margin:.45rem .94rem;max-width:46.25%;min-width:320px;padding:1.875rem}.statistic-ul>li.statistic-get-li{padding:0}@media only screen and (max-width:767px){.statistic-ul>li{min-width:300px}}.statistic-graphic{border:1px solid #e6e6e6}.statistic b{font-family:"Conv_MuseoSansCyrl_2",sans-serif}.statistic-get-title{background:#f4f5f7;padding:1.25rem 1.875rem}.statistic-get-title>b,.statistic-get-title>span{font-size:1.5rem}.statistic-get-li li{border-bottom:1px solid #e6e6e6;justify-content:space-between;padding:10px 1.25rem}.statistic-get-li li p{font-size:1.25rem}.statistic-get-li li img{margin-right:1.25rem;max-width:30px}.statistic-get-li li>div b{font-size:1.125rem;margin-right:1.875rem}.statistic-get-li li>div span{color:#b2adad;font-size:14px}.statistic-get-li li,.statistic-get-li li div{align-items:center;display:flex;flex-direction:row}.statistic-history{margin-left:1.25rem;margin-top:1.25rem}.statistic-history a{color:#9f9f9f;font-size:11px;-webkit-text-decoration:underline;text-decoration:underline;text-transform:uppercase}.news-bloc,.reserves,.reviews-bloc{overflow:hidden;padding-bottom:4rem;padding-top:4rem;position:relative}@media only screen and (max-width:767px){.news-bloc,.reserves,.reviews-bloc{margin-top:0}}.news-bloc:after,.news-bloc:before,.reserves:after,.reserves:before,.reviews-bloc:after,.reviews-bloc:before{position:absolute;z-index:0}.news-bloc div,.reserves div,.reviews-bloc div{border-radius:8px 8px 0 0;position:relative;z-index:1}.news-bloc .title,.reserves .title,.reviews-bloc .title{align-items:center;color:#282e38;display:flex;justify-content:center;margin-bottom:25px}.news-bloc .title-other,.reserves .title-other,.reviews-bloc .title-other{align-items:center;display:flex;font-family:"Play-Regular",sans-serif;font-size:36px;font-weight:400;justify-content:space-between}.news-bloc ul,.reserves ul,.reviews-bloc ul{align-items:stretch;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;margin:23px -1% 0}@media only screen and (max-width:767px){.news-bloc ul,.reserves ul,.reviews-bloc ul{justify-content:center}}.news-bloc li,.reserves li,.reviews-bloc li{flex:1 0;margin:.45rem 1%;max-width:31.2%;min-width:300px;position:relative;width:31.2%}@media only screen and (max-width:1025px){.news-bloc li,.reserves li,.reviews-bloc li{max-width:48%}}.news-bloc b,.reserves b,.reviews-bloc b{font-family:"Conv_MuseoSansCyrl_2",sans-serif}.reserves{background:#f8fafb}.reserves h3{font-size:36px}.reserves li{align-items:center;background:#fff;border-radius:8px;box-shadow:0 25px 50px 0 hsla(0,0%,45%,.04);display:flex;flex-direction:row;justify-content:space-between;overflow:hidden;padding:1.7rem}.reserves li:hover .reserves-cost b,.reserves li:hover .reserves-cost span{top:-15px;transition:all .35s}.reserves li:hover .reserves-cost .order-reserves{bottom:-2px;right:-14px}.reserves li:hover .reserves-cost .btn{opacity:1;visibility:visible}.reserves img{height:22px;margin-right:10px;width:22px}.reserves p{color:#96989c;font-size:14px}.reserves span{color:#282e38;font-size:14px}.reserves-icon{align-items:center;display:flex;flex-direction:row;height:32px;width:32px}.reserves-icon span{color:#282e38;font-family:"Roboto-Medium",sans-serif;font-size:14px}.reserves-cost{min-width:130px;text-align:right}.reserves-cost p{font-family:"Roboto-Regular",sans-serif;font-size:14px;font-weight:400}.reserves-cost span{position:relative;text-transform:uppercase;transition:all .35s}.reserves-cost .order-reserves{bottom:-30px;position:absolute;right:0;transition:all .35s}.reserves-cost .btn{line-height:2.2;opacity:0;padding-left:15px;padding-right:15px;position:absolute;right:0;transition:all .35s;visibility:hidden}.news-page-top{padding-bottom:3.3rem}.news-page-top-wr{background-position-y:-.5rem}.news-page-top h1{margin-bottom:1.875rem}.news-page-top p{color:#fff;font-size:1.15rem}.news-bloc{background:transparent;padding-top:0}.news-bloc:after{bottom:0;content:url(' +
          H +
          ");right:0;top:0}.news-bloc:before{bottom:-59.9%;content:url(" +
          X +
          ');left:0}.news-bloc span{color:#b6b6b6;font-size:12px;text-transform:uppercase}.news-bloc-img{font-size:0;height:100%;overflow:hidden}.news-bloc-img img{width:100%}.news-bloc li{background:#fff;border-radius:8px;box-shadow:0 25px 50px 0 hsla(0,0%,44%,.07);display:flex;flex-direction:column}.news-bloc-title{color:#50535a;font-family:"Roboto-Regular",sans-serif;font-size:18px;font-weight:400;line-height:21.09px}.news-bloc-info{background-color:#fff;border-radius:8px!important;display:flex;flex-direction:column;justify-content:center;padding:20px 24px}.news-bloc-info_item{display:flex;flex-direction:column;margin-top:24px}.news-bloc-info_item:before{align-self:center;content:url(' +
          ee +
          ");left:0;margin-bottom:3px;right:0}.news-bloc-info_item-name{margin-left:10px}.news-bloc-info_item-name p{font-size:14px}.news-bloc-info_item-photo-name{display:flex}.news-bloc-info_item-photo img{height:32px;width:32px}.news-bloc-info_item-data{align-self:center;margin-left:auto}.news-bloc-info_item-data span{align-items:center;display:flex}.news-bloc-info_item-data span span{font-size:14px;margin-left:7px}.news-bloc-info_item-data img{height:20px;margin-left:20px;width:20px}.reviews-bloc:after{bottom:31.4%;content:url(" +
          X +
          ');left:0}@media only screen and (max-width:1025px){.reviews-bloc:after{bottom:26.4%}}.reviews-bloc li{border-radius:8px}@media only screen and (max-width:767px){.reviews-bloc{display:none}}.reviews-bloc-txt{align-items:center;background-color:#f4f7f9;display:flex;flex-direction:column;justify-content:center;padding:18px 25px}.reviews-bloc-txt:after{border-right:25px solid transparent;border-top:25px solid #f4f7f9;bottom:-25px;content:"";height:0;position:absolute;width:0}.reviews-bloc-txt p{color:#50535a;font-size:14px;line-height:16.41px;position:relative;text-align:left;z-index:1}.reviews-bloc-txt p.reviews-bloc-date{font-size:12px;text-align:center}.reviews-bloc__{-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;height:70px;overflow:hidden;text-overflow:ellipsis}.reviews-bloc-date{color:#96989c;text-transform:uppercase}.reviews-bloc-date:before{content:url(' +
          ee +
          ');width:167px}.reviews-bloc-client{align-items:center;display:flex;justify-content:center;margin-top:41px}.reviews-bloc-client p{font-size:1rem;margin-bottom:10px}.reviews-bloc-client span{color:#fac917;margin-right:3px}.reviews-bloc-photo{margin-left:8px;margin-right:17px;overflow:hidden;padding:3px;text-align:center}.reviews-bloc-photo p{color:#50535a;font-size:14px}.reviews-bloc-photo img{height:32px;width:32px}.form-footer input,.form-footer textarea{background:rgba(58,48,99,.5);border-radius:20px;font-family:"Conv_MuseoSansCyrl_0",sans-serif;padding:10px 20px}.form-footer input::-webkit-input-placeholder,.form-footer textarea::-webkit-input-placeholder{color:#9f9f9f;font-style:italic}.form-footer input:-moz-placeholder,.form-footer input::-moz-placeholder,.form-footer textarea:-moz-placeholder,.form-footer textarea::-moz-placeholder{color:#9f9f9f;font-style:italic}.form-footer input:-ms-input-placeholder,.form-footer textarea:-ms-input-placeholder{color:#9f9f9f;font-style:italic}.form-footer textarea{height:85px;min-height:85px;resize:vertical}.content{flex-basis:65.8333333333%;flex-grow:0;flex-shrink:0;margin:15rem;max-width:65.8333333333%;min-width:0;padding:15rem}@media only screen and (max-width:1025px){.content{flex-basis:56.6666666667%;flex-grow:0;flex-shrink:0;margin:15rem;max-width:56.6666666667%;min-width:0;padding:15rem}}@media only screen and (max-width:767px){.content{flex-basis:100%;flex-grow:0;flex-shrink:0;margin:20px 15rem 15rem;max-width:100%;min-width:0;padding:15rem}}.verification{font-size:16px;margin-top:20px}.verification__item{align-items:center;display:flex;margin:10px 10px 0 0}.verification__item--email:before,.verification__item--facebook:before,.verification__item--passport:before,.verification__item--phone:before{content:"";display:inline-block;margin-right:10px;vertical-align:middle}.verification__items{display:flex;flex-wrap:wrap;justify-content:space-between}.verification__items :last-child{margin-right:0}.reviews{overflow:hidden;padding-top:4rem;position:relative}.reviews-top-wr{background-position-y:-.5rem}.reviews-top ul{align-items:center;display:flex;flex-direction:row;flex-wrap:wrap;margin:0 -.5rem}.reviews-top li{margin:.5rem}.reviews-top .btn{font-size:15px;line-height:2.54;text-transform:uppercase}.reviews-top .btn-blue{color:#fdfdfd;-webkit-text-decoration:underline;text-decoration:underline}.reviews-top .btn-blue:hover{color:#fff;opacity:1}.reviews-top .btn-submit{box-shadow:none}.reviews-main-list{margin-bottom:2.5rem}.reviews-main-list li{border:1px solid #e6e6e6;margin-top:20px;padding:1.25rem;position:relative}.reviews-main-list li:after{content:url(' +
          te +
          ");height:70px;position:absolute;right:21px;top:0;width:55px;z-index:2}.reviews-main-list-item{display:flex}@media only screen and (max-width:767px){.reviews-main-list-item{flex-wrap:wrap}}.reviews-main-list-person{align-items:center;border-right:1px solid #e6e6e6;display:flex;flex-basis:20%;padding-right:1.875rem}@media only screen and (max-width:767px){.reviews-main-list-person{border-bottom:1px solid #e6e6e6;border-right:none;flex-basis:100%;margin-bottom:.5rem;padding-bottom:.5rem;padding-right:0}}.reviews-main-list-person-photo{background-color:#7d9baf;border-radius:50%;height:3.125rem;margin-right:1.25rem;overflow:hidden;padding:7px;width:3.125rem}.reviews-main-list-person-name p{margin-bottom:7px}.reviews-main-list-person-name span{color:#fac917;margin-right:3px}.reviews-main-list-txt{flex-basis:80%;padding-left:1.875rem;padding-right:3.875rem}@media only screen and (max-width:767px){.reviews-main-list-txt{flex-basis:100%;padding-left:0;padding-right:0}}.reviews-main-list-txt>span{color:#b6b6b6;display:inline-block;font-size:12px;margin-bottom:15px}.reviews-main-list-txt p{line-height:24px}.one-new-top-wr{background-position-y:-.5rem}.one-new-top-back{margin-bottom:3rem;margin-top:1.1rem}.one-new-top-back a{color:#fff;font-size:13px;-webkit-text-decoration:underline;text-decoration:underline;text-transform:uppercase}.one-new-top-date{color:#9f9f9f;margin-top:1.56rem;padding-bottom:5.25rem}.one-new-top-date img{margin-right:10px;width:17px}.one-new-info{margin-bottom:4rem;margin-top:3rem}.one-new-info p{color:#6a6f76;line-height:24px;margin-bottom:15px}.one-new-info li{color:#6a6f76;margin-bottom:7px}.one-new-info-item{display:flex;flex-wrap:wrap;margin:0 -13px}.one-new-info-item>div{flex:1 1;margin:0 13px}@media only screen and (max-width:550px){.one-new-info-item>div{flex:1 1 auto}}.one-new-info-right img{width:100%}.one-new-info .title{margin-bottom:1.6rem;margin-top:2.25rem}.one-new-info ul{list-style-type:disc;margin-top:15px;padding-left:20px}.one-new-info h3.title{font-size:1.5rem}.one-new_bg{background:#f4f5f7;padding-bottom:5rem;padding-top:4rem}.one-new_comments{margin-bottom:2.2rem}.one-new_comments li{padding-top:15px}.one-new_comments li>ul{padding-left:6rem}@media only screen and (max-width:550px){.one-new_comments li>ul{padding-left:3rem}}.one-new_comments li>ul li{position:relative}.one-new_comments li>ul li:before{content:url(" +
          re +
          ');height:2.4rem;left:-5rem;position:absolute;top:0;width:3.5rem}@media only screen and (max-width:550px){.one-new_comments li>ul li:before{left:-4rem;width:2.5rem}}.one-new_comments_bloc{border-bottom:1px solid #e6e6e6;display:flex;padding-bottom:20px;position:relative}.one-new_comments_bloc-photo{background-color:#969593;border-radius:50%;height:50px;margin-right:17px;overflow:hidden;padding:3px;text-align:center;width:50px}.one-new_comments_bloc-photo img{width:100%}.one-new_comments_bloc-main{flex:1 1;padding-right:2rem}.one-new_comments_bloc-name{margin-bottom:10px}.one-new_comments_bloc-name b{margin-right:12px}.one-new_comments_bloc-name span{color:#fac917;margin-left:3px}.one-new_comments_bloc-txt{margin-bottom:15px}.one-new_comments_bloc-btn a{color:#1ac1de;font-size:13px;-webkit-text-decoration:underline;text-decoration:underline;text-transform:uppercase}.one-new_comments_bloc-date{text-align:right}@media only screen and (max-width:550px){.one-new_comments_bloc-date{position:absolute;right:0;top:-15px}}.one-new_comments_bloc-date span{color:#96989c;font-size:12px;text-transform:uppercase}@media only screen and (max-width:550px){.one-new_comments_bloc-date span{font-size:10px}}.transaction__table{font-size:16px}@media only screen and (max-width:1200px){.transaction__table{font-size:13px}}@media only screen and (max-width:550px){.transaction__table{font-size:11.5px}}.transaction__title{margin:25px 0 20px}.transaction__row{border-bottom:1px solid #9b9b9b;display:flex;padding:10px 0}.transaction__row--title{background-color:#ebebeb;border:none;color:#0595c5;padding:14px 0}.transaction__dies,.transaction__plus{flex-basis:8.3333333333%;max-width:8.3333333333%;text-align:center}.transaction__date,.transaction__dies,.transaction__plus{flex-grow:0;flex-shrink:0;margin:15rem;min-width:5px;padding:15rem}.transaction__date{flex-basis:20.8333333333%;max-width:20.8333333333%}@media only screen and (max-width:550px){.transaction__date{flex-basis:25%;flex-grow:0;flex-shrink:0;margin:15rem;max-width:25%;min-width:5px;padding:15rem}}.transaction__description{flex-basis:50%;flex-grow:0;flex-shrink:0;margin:15rem;max-width:50%;min-width:5px;padding:15rem}@media only screen and (max-width:1025px){.transaction__description{flex-basis:45.8333333333%;flex-grow:0;flex-shrink:0;margin:15rem;max-width:45.8333333333%;min-width:5px;padding:15rem}}@media only screen and (max-width:550px){.transaction__description{flex-basis:41.6666666667%;flex-grow:0;flex-shrink:0;margin:15rem;max-width:41.6666666667%;min-width:5px;padding:15rem}}.transaction__amount{flex-basis:12.5%;flex-grow:0;flex-shrink:0;margin:15rem;max-width:12.5%;min-width:5px;padding:15rem}@media only screen and (max-width:1025px){.transaction__amount{flex-basis:16.6666666667%;flex-grow:0;flex-shrink:0;margin:15rem;max-width:16.6666666667%;min-width:5px;padding:15rem}}@media only screen and (max-width:550px){.transaction__amount{flex-basis:16.6666666667%;flex-grow:0;flex-shrink:0;margin:15rem;max-width:16.6666666667%;min-width:0;padding:15rem}}.specification{margin-bottom:4rem}@media only screen and (max-width:1200px){.specification-top-wr{background-position-y:0}}.specification-top-item{margin-top:2rem;padding-bottom:5rem}.specification-top-item ul{align-items:center;display:flex;flex-direction:row;flex-wrap:wrap;margin:0 -.5rem}@media only screen and (max-width:767px){.specification-top-item ul{justify-content:center;margin:0}}.specification-top-item li{margin:.5rem}.specification-top-item .btn{font-size:15px;line-height:2.54;padding-left:40px;padding-right:40px;text-transform:uppercase}@media only screen and (max-width:550px){.specification-top-item .btn{font-size:13px;padding-left:10px;padding-right:10px}}.specification-top-item .btn-blue{color:#fff;-webkit-text-decoration:underline;text-decoration:underline}.specification-top-item .btn-blue:hover{color:#fff;opacity:1}.specification-top-item .btn-submit{box-shadow:none}.specification li{font-size:1rem;margin-top:1.25rem}.specification-news-bloc,.specification-news-bloc .news-bloc{padding-bottom:2rem;padding-top:2rem}.one-new-info-item,.specification-info{color:#3b454e;font-size:16px;line-height:24px}.one-new-info-item div,.one-new-info-item p,.specification-info div,.specification-info p{font-size:16px;line-height:24px;margin:0;padding:8px 0}.one-new-info-item div:empty,.one-new-info-item p:empty,.specification-info div:empty,.specification-info p:empty{height:0}.one-new-info-item div:has(>.ProseMirror-trailingBreak),.one-new-info-item p:has(>.ProseMirror-trailingBreak),.specification-info div:has(>.ProseMirror-trailingBreak),.specification-info p:has(>.ProseMirror-trailingBreak){padding:0}.one-new-info-item div:last-child,.one-new-info-item p:last-child,.specification-info div:last-child,.specification-info p:last-child{padding-bottom:0}.one-new-info-item strong,.specification-info strong{font-weight:700}.one-new-info-item em,.specification-info em{font-style:italic}.one-new-info-item s,.specification-info s{-webkit-text-decoration:line-through;text-decoration:line-through}.one-new-info-item ol,.one-new-info-item ul,.specification-info ol,.specification-info ul{margin:0;padding:2px 0 2px 16px}.one-new-info-item ol:last-child,.one-new-info-item ul:last-child,.specification-info ol:last-child,.specification-info ul:last-child{margin-bottom:0}.one-new-info-item ol li,.one-new-info-item ul li,.specification-info ol li,.specification-info ul li{line-height:24px}.one-new-info-item ol li div,.one-new-info-item ol li p,.one-new-info-item ul li div,.one-new-info-item ul li p,.specification-info ol li div,.specification-info ol li p,.specification-info ul li div,.specification-info ul li p{margin:0;padding:0}.one-new-info-item ul,.specification-info ul{list-style:none;padding:2px 0 2px 16px}.one-new-info-item ul li,.specification-info ul li{display:flex;font-size:16px;line-height:24px;margin-bottom:0;padding:6px 0}.one-new-info-item ul li:last-child,.specification-info ul li:last-child{margin-bottom:0}.one-new-info-item ul li:before,.specification-info ul li:before{color:#0f89ff;content:"•";font-size:24px;margin-right:10px}.one-new-info-item ol,.specification-info ol{list-style-type:auto;padding:2px 0 2px 30px}.one-new-info-item ol li,.specification-info ol li{padding:6px 0}.one-new-info-item img,.specification-info img{margin-bottom:24px;margin-top:32px}.one-new-info-item h1,.one-new-info-item h2,.one-new-info-item h3,.one-new-info-item h4,.one-new-info-item h5,.one-new-info-item h6,.specification-info h1,.specification-info h2,.specification-info h3,.specification-info h4,.specification-info h5,.specification-info h6{color:#3b454e;font-weight:600;line-height:1.2;margin:0;padding:32px 0 8px;text-transform:none}.one-new-info-item h1:first-child,.one-new-info-item h2:first-child,.one-new-info-item h3:first-child,.one-new-info-item h4:first-child,.one-new-info-item h5:first-child,.one-new-info-item h6:first-child,.specification-info h1:first-child,.specification-info h2:first-child,.specification-info h3:first-child,.specification-info h4:first-child,.specification-info h5:first-child,.specification-info h6:first-child{padding-top:16px}.one-new-info-item h1,.specification-info h1{font-size:40px;line-height:48px;padding:32px 0 8px}.one-new-info-item h2,.specification-info h2{font-size:30px;line-height:36px}.one-new-info-item h3,.specification-info h3{font-size:24px;line-height:32px}.one-new-info-item h4,.specification-info h4{font-size:20px;line-height:24px;padding-top:28px}.one-new-info-item h5,.specification-info h5{font-size:16px;line-height:19px;padding-top:20px}.one-new-info-item h6,.specification-info h6{font-size:12px;line-height:16px;padding-top:8px}.one-new-info-item hr,.specification-info hr{background:#d9d9d9;border:0;display:block;height:1px;margin:8px 0;width:100%}.one-new-info-item a,.specification-info a{color:#0081eb;-webkit-text-decoration:underline;text-decoration:underline}.one-new-info-item code,.specification-info code{background:#efefef;border-radius:6px;color:#616161;color:#3b454e;margin:16px 0;padding:16px}.one-new-info-item pre,.specification-info pre{background:#efefef;border-radius:6px;color:#616161;color:#3b454e;font-family:"Courier",monospace;margin:0;padding:38px 16px 16px}.one-new-info-item pre code,.specification-info pre code{background:none;color:inherit;margin:0;padding:0}.one-new-info-item pre .hljs-comment,.one-new-info-item pre .hljs-quote,.specification-info pre .hljs-comment,.specification-info pre .hljs-quote{color:#616161}.one-new-info-item pre .hljs-attribute,.one-new-info-item pre .hljs-link,.one-new-info-item pre .hljs-name,.one-new-info-item pre .hljs-regexp,.one-new-info-item pre .hljs-selector-class,.one-new-info-item pre .hljs-selector-id,.one-new-info-item pre .hljs-tag,.one-new-info-item pre .hljs-template-variable,.one-new-info-item pre .hljs-variable,.specification-info pre .hljs-attribute,.specification-info pre .hljs-link,.specification-info pre .hljs-name,.specification-info pre .hljs-regexp,.specification-info pre .hljs-selector-class,.specification-info pre .hljs-selector-id,.specification-info pre .hljs-tag,.specification-info pre .hljs-template-variable,.specification-info pre .hljs-variable{color:#f98181}.one-new-info-item pre .hljs-built_in,.one-new-info-item pre .hljs-builtin-name,.one-new-info-item pre .hljs-literal,.one-new-info-item pre .hljs-meta,.one-new-info-item pre .hljs-number,.one-new-info-item pre .hljs-params,.one-new-info-item pre .hljs-type,.specification-info pre .hljs-built_in,.specification-info pre .hljs-builtin-name,.specification-info pre .hljs-literal,.specification-info pre .hljs-meta,.specification-info pre .hljs-number,.specification-info pre .hljs-params,.specification-info pre .hljs-type{color:#fbbc88}.one-new-info-item pre .hljs-bullet,.one-new-info-item pre .hljs-string,.one-new-info-item pre .hljs-symbol,.specification-info pre .hljs-bullet,.specification-info pre .hljs-string,.specification-info pre .hljs-symbol{color:#b9f18d}.one-new-info-item pre .hljs-section,.one-new-info-item pre .hljs-title,.specification-info pre .hljs-section,.specification-info pre .hljs-title{color:#faf594}.one-new-info-item pre .hljs-keyword,.one-new-info-item pre .hljs-selector-tag,.specification-info pre .hljs-keyword,.specification-info pre .hljs-selector-tag{color:#70cff8}.one-new-info-item pre .hljs-emphasis,.specification-info pre .hljs-emphasis{font-style:italic}.one-new-info-item pre .hljs-strong,.specification-info pre .hljs-strong{font-weight:700}.one-new-info-item img,.specification-info img{display:block;height:auto;max-width:100%;width:auto}.one-new-info-item blockquote,.specification-info blockquote{border-left:4px solid #e2e4e4;margin:0 0 24px;padding-left:16px}.faq{margin-bottom:2.5rem;margin-top:2.5rem}.faq-top-wr{background-position-y:-.5rem}.faq-qst{margin-bottom:2.5rem}.faq-qst li{cursor:pointer;margin-bottom:24px}.faq-qst li:first-child{margin-top:0}.faq-qst li:hover{box-shadow:0 6px 35px 0 #d0d0d0}.faq-qst-title{border:1px solid #e6e6e6;font-size:1.5rem;padding:20px 90px 20px 30px;position:relative}@media screen and (max-width:767px){.faq-qst-title{font-size:.9rem;padding:10px 70px 10px 10px}}.faq-qst-title span{background:#f4f5f7;border-left:1px solid #e6e6e6;height:100%;position:absolute;right:0;top:0;width:60px}.faq-qst-title span:after{border-color:#b2b4b8;border-style:solid;border-width:2px 0 0 2px;content:"";height:20px;left:20px;margin-top:-5px;position:absolute;top:50%;transform:translateY(-50%) rotate(-135deg);transition:all .35s;width:20px}.faq-qst-title-arrow{box-shadow:0 6px 35px 0 #d0d0d0;margin-bottom:1.25rem;margin-top:1.25rem;transition:all .35s}.faq-qst-title-arrow span:after{top:50%;transform:rotate(45deg) translateY(-50%)}.faq-qst-title-arrow .b-toggle{border:1px solid #e6e6e6;border-top:none;_display:block;max-height:100%;opacity:1;padding:1.25rem 1.875rem;transition:opacity .3s,max-height .3s}.b-toggle{background:#fff;border:1px solid #e6e6e6;border-top:none;_display:none;font-size:1rem;line-height:1.5;max-height:0;opacity:0;overflow:hidden;padding:8px 12px 12px}@media screen and (max-width:767px){.b-toggle{font-size:.7rem;line-height:1.2}}.pagination{margin-bottom:26px;margin-top:26px}.pagination ul{align-items:center;display:flex;justify-content:center}.pagination li{background:none;border:none;box-shadow:none;flex-basis:auto;flex:0 0 auto;margin:3px;min-width:auto;width:auto}.pagination a{background-color:#e5e7ea;border-radius:50%;color:#9f9f9f;display:block;font-size:15px;height:40px;line-height:40px;text-align:center;width:40px}.pagination a.pagination-current,.pagination a:hover{background-color:#fff;box-shadow:0 6px 35px 0 #d0d0d0;color:#212121}.pagination a.pagination-ban{background-color:#e5e7ea;box-shadow:none;color:#9f9f9f;cursor:default}.footer{flex:0 0 auto}.footer .container-1{width:1450px}.footer-bottom{background:radial-gradient(138.47% 87.35% at 50.69% 25.61%,#f3f6f8 0,#fff 100%);padding-bottom:10px;padding-top:10px}.footer-bottom .container{align-items:center;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between}.footer-bottom a,.footer-bottom p{color:#96989c}.footer-bottom p{font-size:15px}.footer-bottom ul{align-items:center;display:flex;flex-direction:row;flex-wrap:wrap}.footer-bottom li{margin:10px}.footer-bottom a{font-size:1em;padding:5px}.footer-bottom a:hover{color:#282e38}.contact{background-position:0;background-repeat:no-repeat;background-size:auto auto;background-size:initial;margin:20px 0;padding-left:55px}.contact p{font-size:1.375em}.contact-mail{background-image:url(' +
          oe +
          ')}.contact-main{flex:1 0 auto;margin-bottom:4rem;margin-top:2.875rem}@media only screen and (max-width:767px){.contact-main{margin:0 .8rem}}.contact-main .container{display:flex;flex-wrap:wrap;justify-content:space-between}.contact-main .container>div{display:flex;flex:1 1;flex-direction:column;justify-content:center}.contact-main .container form{box-shadow:0 6px 30px #e3e3e4;margin-bottom:0}@media only screen and (max-width:767px){.contact-main .container form{width:100%}}.contact-main-mail{display:flex;flex:1 0 auto;font-size:14px;margin:7px 15px;max-width:235px}.contact-main-item-page{border-bottom:1px dashed;-o-border-image:linear-gradient(180deg,red,transparent) 1 100%;border-image:linear-gradient(180deg,red,transparent) 1 100%;display:flex;flex-direction:column;margin:50px 0}.contact-main-item-page h4{font-family:"Play-Regular",sans-serif;font-size:36px;font-weight:400;line-height:41.65px;margin:0 0 10px;text-align:center}.contact-main-item-page div span{color:#c6d8fb;font-size:14px}.contact-main-item-page div a{color:#fff;font-size:15px}.contact-main-item-page>div{display:flex;flex-direction:column}.contact-main-item-page span{color:#9f9f9f;font-size:18px}.contact-main-item-page p{font-size:15px}@media only screen and (max-width:767px){.contact-main-item-page p{font-size:16px}}.contact-main-item{align-items:center;border-bottom:1px dashed;-o-border-image:linear-gradient(180deg,red,transparent) 1 100%;border-image:linear-gradient(180deg,red,transparent) 1 100%;display:flex;flex-direction:column;flex-wrap:wrap;justify-content:center;margin:50px 0}.contact-main-item h4{font-family:"Play-Regular",sans-serif;font-size:36px;font-weight:400;line-height:41.65px;margin:0 0 10px;text-align:center}.contact-main-item div span{color:#c6d8fb;font-size:14px}.contact-main-item div a{color:#fff;font-size:15px}.contact-main-item>div{align-content:center;align-items:center;display:flex;flex-wrap:wrap;justify-content:space-between;margin:10px 0}.contact-main-item span{color:#9f9f9f;font-size:18px}.contact-main-item p{font-size:15px}@media only screen and (max-width:767px){.contact-main-item p{font-size:16px}}.contact-main-icon{background:linear-gradient(180deg,#619420,#619420);border-radius:4px;display:flex;flex-direction:column;height:58px;justify-content:center;margin-right:17px;padding:11px;text-align:center;width:58px}.contact-main-icon img{width:100%}.contact-page-top{align-items:center;display:flex;justify-content:space-between;padding-bottom:3.3rem}@media only screen and (max-width:767px){.contact-page-top{flex-wrap:wrap;justify-content:center;padding-bottom:.3rem}}.contact-page-top-wr{background-position-y:-.5rem}.contact-page-top h1{margin-bottom:1.875rem}@media only screen and (max-width:767px){.contact-page-top h1{margin-bottom:.875rem}}.contact-page-top p{color:#282e38;font-size:1.15rem}.contact-page-top .btn{box-shadow:none;line-height:3.7777777778;padding-left:60px;padding-right:60px}@media only screen and (max-width:767px){.contact-page-top .btn{margin-top:.5rem}}.contact-main-form{padding:2.8rem 4rem 2.2rem}@media only screen and (max-width:1200px){.contact-main-form{padding-left:2rem;padding-right:2rem}}@media only screen and (max-width:767px){.contact-main-form{padding-left:1rem;padding-right:1rem}}.contact-main-form .title{margin-bottom:.875rem;margin-top:0}.contact-main-form input,.contact-main-form textarea{background-color:#f4f5f7;border:1px solid #eee;border-radius:20px;font-size:1rem;margin:10px 0 0;padding:10px 35px 10px 15px;width:100%}.contact-main-form textarea{height:5rem;min-height:2.5rem;resize:vertical}.contact-main-form>div{margin-top:1.625rem}.four{color:#fff}.four-wr{background-position-y:0;background-size:900% 150%;display:flex;flex:1 0;flex-direction:column;height:100%;justify-content:center;overflow:hidden}.four-title{font-size:12.5rem}@media only screen and (max-width:1025px){.four-title{font-size:10.5rem}}@media only screen and (max-width:767px){.four-title{font-size:8.5rem}}.four-first{padding-bottom:8%}.four-second{padding-bottom:6%}.four-first,.four-second{display:flex;flex:1 0;flex-direction:column;justify-content:center}.four-first-wrong{font-size:1.5rem;margin-bottom:5.25rem}@media only screen and (max-width:767px){.four-first-wrong{margin-bottom:3rem}}.four .btn{font-size:18px;line-height:3;padding-left:5rem;padding-right:5rem}@media only screen and (max-width:767px){.four .btn{padding-left:2rem;padding-right:2rem}}.four-second img{max-width:110px;width:100%}.four-second-break{font-size:2.875rem;margin-bottom:1.875rem;margin-top:2.5rem}@media only screen and (max-width:767px){.four-second-break{font-size:1.5rem;margin-bottom:.5rem;margin-top:.5rem}}.four-second-back{font-size:1.5rem;margin-bottom:10%}.four-second-dont-worry{display:inline-block;font-size:1.125rem;line-height:1.5;margin-bottom:1.875rem;max-width:590px;width:100%}@media only screen and (max-width:767px){.four-second-dont-worry{line-height:normal}}.zayvki-filter{margin-left:52px}@media only screen and (max-width:1025px){.zayvki-filter{margin-left:0}}.zayvki-filter .title{font-family:"Play-Bold",sans-serif}.zayvki-filter--top{align-items:center;display:flex;flex-direction:row;justify-content:space-between;margin-right:50px}@media only screen and (max-width:1025px){.zayvki-filter--top__btn-group{margin-left:1rem}}.zayvki-filter--top__btn-group ul{display:flex;flex-wrap:wrap}.zayvki-filter--top__btn-group ul li{text-transform:uppercase}.zayvki-filter--top__btn-group ul li:after{border-right:1px solid #f3f3f3;content:"";margin:0 11px}@media only screen and (max-width:1025px){.zayvki-filter--top__btn-group ul li:after{border:none}}.zayvki-filter--top__btn-group ul li:last-child:after{border:none;margin:0}@media only screen and (max-width:550px){.zayvki-filter--top__btn-group ul li{margin:0 4px;width:45%}}.zayvki-filter--bot{display:flex;flex-direction:row;flex-wrap:wrap;margin:0 -30px}@media only screen and (max-width:767px){.zayvki-filter--bot{margin:0 10px}}.zayvki-filter-main{margin:2.5rem 0 .5rem}.zayvki-filter-main--top{flex-direction:row;justify-content:space-between}.zayvki-filter-main--top,.zayvki-filter-main--top__btn-group ul{display:flex;flex-wrap:wrap}.zayvki-filter-main--top__btn-group ul li{text-transform:uppercase}.zayvki-filter-main--top__btn-group ul li:after{border-right:1px solid #f3f3f3;content:"";margin:0 11px}@media only screen and (max-width:1025px){.zayvki-filter-main--top__btn-group ul li:after{border:none}}.zayvki-filter-main--top__btn-group ul li:last-child:after{border:none;margin:0}@media only screen and (max-width:550px){.zayvki-filter-main--top__btn-group ul li{width:100%}}.zayvki-filter-main--bot{display:flex;flex-direction:row;flex-wrap:wrap;margin:0 -30px}@media only screen and (max-width:767px){.zayvki-filter-main--bot{margin:0 10px}}.zayvki-item{display:flex}.zayvki-border{border-top:1px solid #f3f3f3}.zayvki-main{border-radius:24px;box-shadow:0 15px 116px hsla(206,6%,48%,.05),0 32px 75px hsla(206,6%,48%,.1);display:flex;flex-direction:column;margin-bottom:80px;margin-top:55px}.zayvki-table{align-self:center;border:1px solid #e6e6e6;border-radius:6px;margin-bottom:1.875rem;margin-top:1.875rem;overflow:hidden;width:90%}@media only screen and (max-width:1025px){.zayvki-table{width:100%}}.zayvki-table table{border-collapse:collapse;color:#212121;width:100%}.zayvki-table th{background:#f3f6f8;color:#96989c;font-family:"Play-Bold",sans-serif;font-size:15px}.zayvki-table td,.zayvki-table th{text-align:left}.zayvki-table th{font-size:1.125rem;padding:12px 13px}.zayvki-table th:first-child{padding-left:22px}@media only screen and (max-width:1200px){.zayvki-table th{padding:8px 4px}}@media only screen and (max-width:1025px){.zayvki-table th{font-size:.75rem}}.zayvki-table td{font-size:1rem;padding:20px 13px;position:relative}.zayvki-table td:first-child{padding-left:30px}.zayvki-table td:nth-child(2){width:220px}@media only screen and (max-width:1025px){.zayvki-table td:nth-child(2){width:auto}}@media only screen and (max-width:1200px){.zayvki-table td{padding:15px 4px}}@media only screen and (max-width:1025px){.zayvki-table td{font-size:.75rem}}.zayvki-table tbody tr{border-bottom:1px solid #e6e6e6}.zayvki-table tbody tr:last-child{border-bottom:none}.zayvki-table tbody tr:hover{background:#f7f7f7}.zayvki-table .table--row{align-items:center;display:flex;flex-direction:row;justify-content:flex-start}@media only screen and (max-width:1200px){.zayvki-table .table--row{flex-wrap:wrap}}.zayvki-table .table--row .table--row{flex:1}.zayvki-table .table--row p span{display:block}.zayvki-table dd{font-size:0;margin:0 1rem;width:12px}@media only screen and (max-width:1200px){.zayvki-table dd{margin:0 .35rem}}.zayvki-table img{margin-right:15px;width:30px}.zayvki-table .qt{color:#212121;font-size:.85rem;font-weight:600;text-transform:uppercase}.zayvki-table .currency{color:#9a9a9a;font-size:.8rem;white-space:nowrap}@media only screen and (max-width:767px){.zayvki-table .currency{white-space:normal}}.zayvki-table span.status{display:inline-block;font-size:.75rem;overflow:hidden;padding-left:12px;text-overflow:ellipsis;text-transform:uppercase;white-space:nowrap;width:135px}@media only screen and (max-width:1025px){.zayvki-table span.status{font-size:.5rem;width:88px}}@media only screen and (max-width:767px){.zayvki-table span.status{width:65px}}.zayvki-table span.status.new-zayvka--marker{border-radius:50%;display:inline-block;height:10px;padding:0;width:10px}.zayvki-table span.status.new-zayvka--marker__v{border-radius:5px;height:26px;left:10px;margin-top:-13px;padding:0;position:absolute;top:50%;width:5px}.zayvki-table .status--row{align-items:center;display:flex;flex-direction:row;justify-content:flex-start}.zayvki-table button{background-color:transparent;background-position:50%;background-repeat:no-repeat;background-size:90%;border:none;cursor:pointer;display:inline-block;height:27px;margin-right:10px;width:25px}.zayvki-table button:hover{background-size:100%;transform:rotate(10deg)}.zayvki-table button.view{background-image:url(' +
          ne +
          ");height:18px;margin-left:20%;width:28px}.zayvki-table button.delete{background-image:url(" +
          ie +
          ');height:19px;width:19px}@media only screen and (max-width:767px){.zayvki-table{overflow:auto}.zayvki-table thead{display:none}.zayvki-table img{margin-right:5px;width:22px}.zayvki-table td{align-items:center;display:inline-flex;padding-bottom:10px;padding-top:10px;width:33%}.zayvki-table td:first-child{margin-right:15px;padding-left:20px;width:auto}.zayvki-table td:nth-child(2){min-width:40%;width:auto}.zayvki-table .table--row{flex:none;flex-wrap:nowrap}.zayvki-table .qt{font-size:.75rem;white-space:nowrap}.zayvki-table span.status{white-space:normal}}@media only screen and (max-width:1200px){.requisites-bg{background-position-y:0}}.requisites--top{display:flex;flex-direction:row;justify-content:space-between;margin:0 0 2.125rem}.requisites--top__btn-group div{display:flex;flex-wrap:wrap}@media only screen and (max-width:767px){.requisites--top__btn-group div{margin-left:1rem}}.requisites--top__btn-group div div button{text-transform:uppercase}.requisites--top__btn-group div div:after{border-right:1px solid #f3f3f3;content:"";margin:0 11px}@media only screen and (max-width:1025px){.requisites--top__btn-group div div:after{border:none}}.requisites--top__btn-group div div:last-child:after{border:none;margin:0}@media only screen and (max-width:550px){.requisites--top__btn-group div div{width:100%}}.wallets-main ul{justify-content:left}.wallets-main ul li{display:flex;flex:1 0 auto;padding:10px}.wallets-main ul li img{display:flex;flex-direction:column;height:50px;justify-content:center;padding:5px;width:50px}.requisites-main{margin-bottom:2.6rem;min-height:307px}.requisites-main--txt,.requisites-main--txt__{color:#9f9f9f;font-size:.875rem;margin-bottom:1.65rem;margin-top:10px;text-transform:uppercase}.requisites-main--txt__,.requisites-main--txt____{margin-bottom:.85rem;margin-top:2.5rem}.requisites-main--verified{font-family:"Conv_MuseoSansCyrl_2",sans-serif;font-size:1.25rem;line-height:1.5}.requisites-main img{max-width:12rem}.requisites-main span{display:inline-block;width:100%}.requisites-select-block .form{padding:2.8rem 0;position:relative;width:100%}.requisites-select-block .form:after,.requisites-select-block .form:before{opacity:.1;position:absolute;z-index:0}.requisites-select-block .form:after{content:url(' +
          Y +
          ");right:-18rem;top:-5.5rem;width:46rem}.requisites-select-block .form:before{bottom:-24rem;content:url(" +
          K +
          ');left:-18.5rem;width:46rem}.requisites-select-block--btn-group{display:flex;flex-wrap:wrap;justify-content:center;position:relative;z-index:1}.requisites-select-block p{margin-top:10px}.api .container-api{display:flex;flex-direction:column;margin:3.3rem 6.6rem}@media only screen and (max-width:767px){.api .container-api{margin:.5rem 1rem}}.api .container-api h2{margin-left:0}@media only screen and (max-width:767px){.api .container-api h2{margin:auto}}.api-block{background:linear-gradient(0deg,#f7f8fa,#fff);color:#9f9f9f;padding-bottom:3rem}.api-block__main{align-items:center;background:#fff;border:1px solid #f3f3f3;display:flex;justify-content:space-between;margin-bottom:2.3125rem;margin-top:1.3125rem;padding:1.875rem 3rem}@media only screen and (max-width:1200px){.api-block__main{flex-wrap:wrap}}@media only screen and (max-width:767px){.api-block__main{padding:.5rem 1rem}}.api-block__main .title__{font-size:1.375rem;margin-bottom:1.1875rem;margin-top:0}.api-block__info{background:#fff;border:1px solid #f3f3f3;margin-bottom:2.3125rem;margin-top:1.3125rem;padding:1.875rem 3rem 2rem}@media only screen and (max-width:767px){.api-block__info{padding:.5rem 1rem}}.api-block__info--wr{background:#fbfbfb;border-radius:15px 15px 0 0;overflow:hidden}.api-block__info--h{align-items:center;background:#f3f3f3;display:flex;flex-direction:row;justify-content:flex-start;padding:15px}.api-block__info--h span{background:#9f9f9f;border-radius:50%;display:inline-block;height:8px;margin-right:5px;width:8px}.api-block__info--h span:first-child{background:#619420}.api-block__info--txt{padding:15px}.api-block__info .title__sub{color:#212121;font-size:1rem;margin:2rem 0 .75rem;text-transform:uppercase}.api-block__info p{line-height:1.18;margin-bottom:.25rem;word-break:break-all}.api-block__info span{color:#619420;font-weight:400}.api-block__info dd{margin-bottom:.75rem;margin-left:6%}.api-block__info dd:last-child{margin-left:2%}.api-block .title,.api-block .title__{color:#212121}.api-block__img{margin-right:3.625rem;min-width:120px}@media only screen and (max-width:1025px){.api-block__img{margin-right:1.5rem}}@media only screen and (max-width:767px){.api-block__img{margin-bottom:.75rem;margin-right:0;text-align:center;width:100%}}.api-block__img img{max-width:124px;width:100%}.api-block__txt{flex:1;margin-right:3rem}@media only screen and (max-width:1025px){.api-block__txt{margin-right:0}}.api-block__txt p{font-size:.875rem}.api-block__txt div{align-items:center;display:flex}.api-block__txt div p{margin-right:10px;max-width:70px;width:100%}.api-block__txt div span{color:#434343;font-size:.875rem}@media only screen and (max-width:767px){.api-block__txt div span{word-break:break-all}}.api-block__txt div p,.api-block__txt div span{margin-bottom:1.25rem}.api-block__txt div p.form__option__text,.api-block__txt div span.form__option__text,.api-block__txt div.form__option--wr p{margin-bottom:0}.api-block__btns{border-left:2px solid #f7f9fa;display:flex;flex-direction:column;padding-left:1rem}@media only screen and (max-width:1025px){.api-block__btns{align-items:center;border-left:none;flex-direction:row;justify-content:flex-end;margin-top:1.5rem;padding-left:0;width:100%}}@media only screen and (max-width:767px){.api-block__btns{flex-direction:column;flex-wrap:wrap}}.api-block__btns .btn{box-shadow:none;margin:5px;min-width:10rem}.api-block .table{width:100%}.api-block .table .key{align-items:center;display:flex}.api-block .table .key img{margin-right:12px;width:15px}.api-block .table span{color:#9f9f9f}.api-block .table .btn{opacity:.5;padding-left:5px;padding-right:5px}.api-block .table .btn:hover{opacity:1}.api-block table{border-collapse:collapse}.api-block table td{color:#434343;font-size:.875rem;padding:1.25rem 2.5rem;white-space:nowrap}.api-block table td:first-child{width:65%}@media only screen and (max-width:1025px){.api-block table td:first-child{width:55%}}@media only screen and (max-width:767px){.api-block table td:first-child{width:auto}}.api-block table td:nth-child(2){width:25%}@media only screen and (max-width:767px){.api-block table td:nth-child(2){width:auto;word-break:normal}}.api-block table td:nth-child(3){text-align:center;width:10%}@media only screen and (max-width:767px){.api-block table td:nth-child(3){white-space:nowrap;width:auto}}@media only screen and (max-width:1200px){.api-block table td{white-space:normal}}@media only screen and (max-width:767px){.api-block table td{padding:8px;word-break:break-all}}.api-block table thead tr{background:#f3f3f3;border-top:none}.api-block table thead span{font-size:1rem;font-weight:600}@media only screen and (max-width:767px){.api-block table thead span{font-size:.75rem}}.api-block table tbody span{font-size:.875rem}.api-block table tr{background:#fff;border:1px solid #f3f3f3}.api__info{font-size:.875rem;margin-top:1.5625rem}.form__option{align-items:center;display:flex}@media only screen and (max-width:1200px){.form__option{flex-wrap:wrap}.form__option label{margin:5px 0}}.form__option label{align-items:center;color:rgba(33,33,33,.65);cursor:pointer;display:flex;font-size:.875rem;margin-right:20px;position:relative}.form__option__text{margin-bottom:0;padding-left:25px;position:relative;white-space:nowrap}.form__option__text:before{background:#f4f5f7;border:1px solid #e6e6e6;border-radius:4px;content:"";height:13px;left:0;position:absolute;top:0;width:13px}.form__option input{height:0;left:0;margin:0;padding:0;position:absolute;top:0;width:0}.form__option input[type=checkbox]:checked+.form__option__text:after{border:1px solid rgba(40,164,151,.65);border-left:transparent;border-top:transparent;content:"";height:7px;left:5px;position:absolute;top:2px;transform:rotate(35deg);width:4px}.form__option i{border-radius:50%;cursor:pointer;display:inline-block;flex:none;height:13px;line-height:13px;width:13px}.footer-support{background-color:#282e39;color:#fff;margin-top:0}.footer-support h4{font-size:36px}.footer-support span{color:#9f9f9f;display:inline-block;font-size:1.125em;margin-bottom:5px}.footer-support p{font-size:1.125em}.footer-support .container{align-items:center;border-bottom:1px dashed #ced3e6;display:flex;flex-wrap:wrap}.footer-support .container>div:last-child{flex:1 0;justify-content:center}@media only screen and (max-width:767px){.footer-support .container>div:last-child{padding:0 15px}}.footer-support .btn-submit{box-shadow:none;line-height:3.8;margin-top:20px;min-width:15rem}.popup{align-items:center;background-color:rgba(0,0,0,.05)!important;display:table;flex-direction:column;height:100%;justify-content:center;left:0;margin-top:0!important;opacity:0;position:fixed;top:0;transition:all .35s;visibility:hidden;width:100%;z-index:9998}.popup-open{opacity:1;top:0;visibility:visible}.popup .title{margin-bottom:0;margin-top:0}.popup .modal-header{padding:0 14px}.popup-wr{display:flex;flex-direction:column;flex-wrap:wrap;height:100%;justify-content:center;margin:0;max-height:90%;overflow:auto;position:absolute;top:0;width:100%;z-index:10}@media only screen and (max-width:1025px){.popup-wr{max-width:79%}}.popup-wr-item{background:#fff;border-radius:30px;margin:1rem auto;max-width:450px;overflow:hidden;padding-top:22px;position:relative;width:94%;z-index:10}.popup-wr-item.kyc-modal{border-radius:15px;max-width:700px}.popup-wr-item--b{max-width:800px}@media only screen and (max-width:550px){.popup-wr-item{max-width:280px}}.popup-wr-item::-webkit-scrollbar{height:0;width:0}.popup-wr-item::-webkit-scrollbar-track-piece{background:transparent}.popup-wr-item::-webkit-scrollbar-thumb:vertical{background:#272c35;height:0}.popup-wr-item::-webkit-scrollbar-thumb:vertical:hover{background:#71ca55}.popup-wr-item::-webkit-scrollbar-thumb:horizontal{background:#272c35;width:0}.popup-wr-item::-webkit-scrollbar-thumb:horizontal:hover{background:#71ca55}.popup-wr .title{background-color:#fff;border-bottom:1px solid #e6e6e6;margin:0;padding:1.5rem 3rem}@media only screen and (max-width:550px){.popup-wr .title{font-size:1.2rem}}.popup-close-bloc{height:100%;left:0;position:fixed;top:0;width:100%;z-index:9}.popup-close-btn{color:#9f9f9f;cursor:pointer;font-size:28px;position:absolute;right:13px;top:-18px}.popup form>div{margin-bottom:1rem}@media only screen and (max-width:767px){.popup form>div{margin-bottom:.35rem}}.popup-top{background:#fff;padding:1.5rem 14px 1rem}.popup-top .title{margin:0 0 .5rem;padding:0 0 .5rem}@media only screen and (max-width:550px){.popup-top{padding-left:1.5rem;padding-right:1.5rem;padding-top:.5rem}}.popup-top .form-information-sent-received-wr{margin:1rem 0 2rem;padding:1.25rem 2rem}@media only screen and (max-width:550px){.popup-top .form-information-sent-received-wr{margin-bottom:.5rem;padding-bottom:0;padding-left:1rem;padding-right:1rem}}.popup-top .form-information-sent-received-wr .form-information-sent-received_img{padding:0 .93rem}.popup-top .form-information-sent-received-wr p.title{border-bottom:none;font-size:1.5rem;margin-bottom:0}@media only screen and (max-width:1025px){.popup-top .form-information-sent-received-wr p.title{font-size:1.1rem;justify-content:center;margin:0 auto}}.popup input,.popup textarea{background-color:#f9f9f9;background-position:100%;background-position-y:8px;background-repeat:no-repeat;background-size:8px;border:none;border-radius:6px;border-top:1px solid #e6e6e6;font-family:"Conv_MuseoSansCyrl_0",sans-serif;font-size:1.25rem;font-weight:100;margin-top:10px;outline:none;padding-bottom:15px;padding-right:30px;padding-top:15px;resize:none;text-indent:10px;width:100%}.popup input:active,.popup input:focus,.popup input:hover,.popup input:visited,.popup textarea:active,.popup textarea:focus,.popup textarea:hover,.popup textarea:visited{border:none;border-top:1px solid #e6e6e6;outline:none}.popup input::-webkit-input-placeholder,.popup textarea::-webkit-input-placeholder{color:#9f9f9f}.popup input:-moz-placeholder,.popup input::-moz-placeholder,.popup textarea:-moz-placeholder,.popup textarea::-moz-placeholder{color:#9f9f9f}.popup input:-ms-input-placeholder,.popup textarea:-ms-input-placeholder{color:#9f9f9f}.popup textarea{max-height:4.5rem}.popup label{display:inline-block;margin-bottom:1.3rem;position:relative;width:100%}.popup label span{color:#9f9f9f;cursor:pointer;font-size:.875rem;line-height:1.29;position:relative;z-index:1}.popup label.popup-succes input{background-image:url(' +
          ae +
          ");border-top-color:green}.popup label.popup-error input{background-image:url(" +
          se +
          ');border-top-color:red}.popup label.margin-b-0{margin-bottom:0}.popup .btn{font-size:1rem;line-height:3.75;margin-top:1rem;width:100%}.popup-registration_passwords-bloc{display:flex;margin:0 -10px}.popup-registration_passwords-bloc>div{flex:1 1;margin-left:10px;margin-right:10px}@media only screen and (max-width:767px){.popup-registration_passwords-bloc{flex-wrap:wrap;margin:0}.popup-registration_passwords-bloc>div{margin:0 0 1rem;min-width:200px}}.popup-personal-date p{font-size:15px;line-height:20px}.popup-personal-date a{-webkit-text-decoration:underline;text-decoration:underline}.popup .d-flex{align-items:center;display:flex;justify-content:space-between}.popup .d-flex.d-email{margin-bottom:-14px}.popup .d-flex.d-email label p.input-img{margin-top:0!important}.popup .d-flex__col{align-items:stretch;margin:0 -14px;width:auto}@media only screen and (max-width:767px){.popup .d-flex__col{flex-direction:column;flex-wrap:wrap;justify-content:center}}.popup .d-flex__col>div{margin:0 14px}.popup .d-flex__col>div p{margin:0}.popup .d-flex__col>div label{margin-bottom:15px;margin-top:0}.popup .d-flex a{-webkit-text-decoration:underline;text-decoration:underline}.popup .d-flex a:hover{color:#a5a7a5}.popup .flex-start{flex-direction:row;justify-content:center}.popup .flex-start img{margin-right:15px;max-width:24px}.popup .flex-row{margin:0 -7.5px;width:auto}.popup .flex-row input{margin:1.875rem 7.5px .5rem;min-width:3rem;padding:15px 10px;text-align:center;text-indent:0}@media only screen and (max-width:650px){.popup .flex-row input{margin:1.875rem 5px .5rem;min-width:2rem;padding:10px}}.input-img{align-items:center;display:flex;margin-top:10px;position:relative}.input-img img{left:1.25rem;margin:0;position:absolute;top:.9rem;width:1.5rem}.input-img input{margin:0;padding-left:4rem}.modal-header{position:relative}.popup-personal-room__bot{border-top:1px solid #e6e6e6;margin:0 -14px;width:auto}@media only screen and (max-width:650px){.popup-personal-room__bot{flex-direction:column;flex-wrap:wrap;justify-content:center}}.popup-personal-room__bot>div{flex:1 1;margin:0 14px}.popup-personal-room__bot>div .btn{margin-top:0}@media only screen and (max-width:650px){.popup-personal-room__bot>div .btn{margin-top:15px}}.popup-bottom{background:#f4f5f7;padding:.7rem 1.43rem 1rem}.popup-bottom__{padding:.7rem 14px 1rem}@media only screen and (max-width:650px){.popup-bottom__{flex-direction:column;flex-wrap:wrap;justify-content:center}}.popup-bottom__>p,.popup-bottom__>ul{flex:1 1;line-height:normal;white-space:normal}@media only screen and (max-width:650px){.popup-bottom__>ul{margin-top:15px!important}}.popup-bottom__>p img{margin-right:20px;max-width:70px;width:100%}@media only screen and (max-width:650px){.popup-bottom__>p img{max-width:40px}}.popup-bottom-title{font-size:18px;line-height:1.82;white-space:nowrap}.popup-bottom ul{display:flex;justify-content:center;margin-top:0}.popup-bottom li{margin:5px}@media only screen and (max-width:1025px){.popup-bottom li{margin:0}}.popup-bottom a{margin:5px;opacity:.7}.popup-bottom a:hover{opacity:1}@media only screen and (max-width:550px){.popup-bottom a{display:inline-block;width:35px}}.popup-bottom img{max-width:40px;width:100%}@media only screen and (max-width:550px){.popup-bottom.d-flex{flex-wrap:wrap;justify-content:center}}.modal-mask{background-color:rgba(0,0,0,.5);display:table;height:100%;left:0;margin-top:0!important;position:fixed;top:0;transition:opacity .3s ease;width:100%;z-index:9998}.modal-mask .modal-wrapper{display:table-cell;height:100%;margin:0;overflow:auto;position:absolute;top:0;vertical-align:middle;width:100%}.modal-mask .modal-wrapper .modal-container{background-color:#fff;border-radius:10px;box-shadow:0 4px 20px rgba(33,33,33,.12);font-family:Helvetica,Arial,sans-serif;margin:1rem auto;max-width:440px;padding:22px 14px 44px;transition:all .3s ease;width:94%}.modal-mask .modal-wrapper .modal-container>div{margin-top:0!important}@media only screen and (max-width:767px){.modal-mask .modal-wrapper .modal-container>div,.modal-mask .modal-wrapper .modal-container>div p{padding-left:0;padding-right:0}}.modal-mask .modal-wrapper .modal-container .modal-header h3{color:#212121;font-size:28px;font-weight:300;line-height:34px;margin-top:0}.modal-mask .modal-wrapper .modal-container .modal-header{margin-top:0!important;position:relative}@media screen and (max-width:824px){.modal-mask .modal-wrapper .modal-container .modal-header{padding:8px 0 0}}.modal-mask .modal-wrapper .modal-container .modal-header .btn_close{color:#9f9f9f;cursor:pointer;font-size:28px;position:absolute;right:7px;top:-12px}.modal-mask .modal-wrapper .modal-container .modal-body{margin:1.5rem 0 0!important}.modal-mask .modal-wrapper .modal-container .modal-body__txt{margin-bottom:24px}.modal-mask .modal-wrapper .modal-container .modal-body .about_description{padding:10px 0;text-align:justify}.modal-mask .modal-wrapper .modal-container .modal-body p{border:none}.modal-mask .modal-wrapper .modal-container .modal-default-button{float:right}.modal-mask .modal-wrapper .modal-container .modal-footer .btn_position{align-items:center;display:flex;justify-content:center;text-align:center}.modal-mask .modal-wrapper .modal-container .modal-footer .btn_position .ok_btn{align-items:center;background-color:#e5e7ea;border:1px solid #e5e7ea;border-radius:10px;color:#9f9f9f;cursor:pointer;display:flex;height:30px;justify-content:center;letter-spacing:1px;width:100px}.modal-mask .modal-wrapper .modal-container .modal-footer .btn_position .ok_btn:hover{background-color:#dadce0}.modal-mask .modal-wrapper .modal-container .btn{font-size:14px;line-height:34px}@media only screen and (max-width:767px){.modal-mask .modal-wrapper .modal-container{padding:8px}}.modal-mask .form-ruls{background:transparent;margin-top:14px;padding-bottom:0;padding-top:0}.modal-mask .form-ruls p{border:none!important;font-size:12px;font-weight:300;justify-content:center;line-height:14px;padding-bottom:0;padding-top:0}.modals-block-inputs{background:#f3f3f7;border-radius:10px;padding:20px 10px}.modals-block-inputs--item{margin-top:1.5rem;position:relative;text-align:left}.modals-block-inputs--item:first-child{margin-top:0!important}.modals-block-inputs--item p{padding:0!important}.modals-block-inputs--item .error{bottom:-14px;color:#96989c;font-size:12px;font-weight:300;left:4px;line-height:14px;position:absolute}.modals-block-inputs--item label{display:flex;flex-direction:column;position:relative;width:100%}.modals-block-inputs--item label .card{bottom:16px;left:21px;position:absolute;width:23px}.modals-block-inputs--item .label{display:inline-block;font-size:16px;font-weight:300;line-height:19px;margin-bottom:12px}.modals-block-inputs--item input{background:#fff;border:1px solid #dedede;border-radius:13px;box-sizing:border-box;font-size:16px;font-weight:300;line-height:20px;padding:16px 20px}.modals-block-inputs--item input.input-card{padding:14px 20px 14px 52px}.modals-block-inputs .bp-dropdown{background:#fff;border:1px solid #dedede;border-radius:13px;box-sizing:border-box;padding:4px 20px 5px 9px}.modals-block-inputs .bp-dropdown__btn{background:#fff!important;padding-right:20px;position:relative}.modals-block-inputs .bp-dropdown__icon{margin-top:-7px;position:absolute;right:0;top:50%;z-index:2}.modals-block-inputs .dropper img{margin-right:10px}.modals-block-inputs .bp-dropdown__body{border:1px solid #dedede;border-top:none;margin-top:5px}.modals-block-inputs .bp-dropdown__body li{border:none;border-bottom:1px solid #dedede}.modals-block-inputs .bp-dropdown__body li:last-child{border-bottom:none}.modals-block-data{border-bottom:1px solid #dedede;border-top:1px solid #dedede;margin-bottom:24px!important;margin-top:24px!important;padding-bottom:10px!important;padding-top:10px!important}.modals-block-data>p{align-items:center;color:#9f9f9f;display:flex;font-size:16px;font-weight:300;justify-content:space-between;line-height:19px;margin-bottom:5px;margin-top:5px;padding-bottom:5px;padding-top:5px;width:100%}.modals-block-data>p b,.modals-block-data>p input{color:#212121}.modals-block-data>p label{white-space:nowrap}.modals-block-data>p input{font-size:16px;font-weight:700;line-height:19px;max-width:130px;text-align:right;width:auto}.modal-enter,.modal-leave-active{opacity:0}.modal-enter .modal-container,.modal-leave-active .modal-container{transform:scale(1.1)}@media only screen and (max-width:767px){.modal-mask .modal-wrapper .modal-container .modal-body{margin-bottom:6px;margin-top:6px}}.modal-body__txt h3{border-bottom:1px solid #dedede;color:#212121;font-family:"Conv_MuseoSansCyrl_0",sans-serif;font-size:1.75rem;line-height:normal;margin-bottom:14px;padding-bottom:14px;text-align:center}@media only screen and (max-width:767px){.modal-body__txt h3{font-size:16px;margin-bottom:4px;padding-bottom:4px}}.modal-body__txt div{font-family:"Conv_MuseoSansCyrl_0",sans-serif;font-size:1rem;margin-bottom:8px}.modal-body__txt div:last-child{margin-bottom:0}@media only screen and (max-width:767px){.modal-body__txt div{font-size:12px;margin-bottom:4px}}.modal-verif .dropzone .dz-message{margin:.5rem 0 0}.notification-box{border:1px solid;border-radius:10px;color:#fff;margin:25px;padding:20px}.notification-box img{width:100%}.notification-box .time{color:#bbb;font-size:12px;font-style:italic;margin-left:35px;margin-top:-45px}.notification-box.high{background:#d85b5b;border-color:#d85b5b}.notification-box.medium{background-color:#fff3cd;border-color:#ffeeba;color:#856404}.notification-box.low{background-color:#cce5ff;border-color:#b8daff;color:#004085}.deposit-modal__title{margin-bottom:24px;text-align:center}.deposit-modal__subtitle{margin-bottom:16px;text-align:center}.deposit-modal__buttons{display:flex;justify-content:center;margin:0 -10px}.deposit-modal__buttons:last-child{margin-bottom:-20px}.deposit-modal__btn{margin:0 10px 20px;min-width:120px}.deposit-modal__btn--submit{display:block;flex:0 0 calc(100% - 20px);font-size:16px;padding:8px 36px}.deposit-modal__tabs{display:flex;flex-wrap:wrap;justify-content:center;margin:0 -5px}.deposit-modal__tabs:last-child{margin-bottom:-10px}.deposit-modal__tab{background:#fff;border:1px solid #eee;color:#111;line-height:24px!important;margin:0 5px 10px;padding:5px 15px}.deposit-modal__tab.is-active,.deposit-modal__tab:hover{background:#4070f4;color:#fff}.deposit-modal__body{margin-top:24px}.deposit-modal__balance{align-items:center;background:#fff;border:1px solid #ccc;border-radius:6px;color:#000;display:flex;flex-wrap:nowrap;justify-content:space-between;margin:0 0 24px;padding:16px 24px}.deposit-modal__balance-logo{flex:0 0 50px;margin-right:16px;max-width:50px}.deposit-modal__balance-logo img{display:block;height:50px;-o-object-fit:cover;object-fit:cover;width:100%}.deposit-modal__balance-wrap{flex:1 1 auto}.deposit-modal__balance-name{color:#111;font-size:18px;font-weight:600;margin-bottom:4px}.deposit-modal__balance-symbol{color:#111;font-size:16px;font-weight:500}.deposit-modal__balance-right{text-align:right}.deposit-modal__balance-label{color:#111;margin-bottom:4px}.deposit-modal__balance-value{color:#4070f4;font-size:18px;font-weight:800}.deposit-modal__alert{background:#fff4d2;border:1px solid #ddc06a;border-radius:5px;color:#b78f18;margin:0 0 24px;padding:10px}.deposit-modal__label{align-items:flex-end;display:flex;font-weight:500;justify-content:space-between;margin-bottom:8px}.deposit-modal__max{text-align:right}.deposit-modal__max p{margin-bottom:4px}.deposit-modal__max p:last-child{margin-bottom:0}.deposit-modal__input{background:#f3f6f8;border-radius:6px;border-radius:4px;color:#96989c;font-size:14px;height:64px;line-height:18px;padding:10px 20px;text-align:left;width:100%}.deposit-modal__address,.deposit-modal__count,.deposit-modal__group,.deposit-modal__tag{margin-bottom:24px}.deposit-modal__data{border:2px solid #4070f4;border-radius:6px;margin-bottom:24px;padding:8px 16px}.deposit-modal__data-row{align-items:center;border-bottom:1px solid #eee;display:flex;flex-wrap:nowrap;justify-content:space-between}.deposit-modal__data-row:last-child{border-bottom:0}.deposit-modal__data-logo{flex:0 0 50px;margin-right:16px;max-width:50px}.deposit-modal__data-name{flex:1 1 auto;font-size:14px;font-weight:500;text-align:left}.deposit-modal__data-sum{float:right;font-size:16px;font-weight:600;margin-left:24px}.deposit-modal__data-img{margin-left:16px}.deposit-modal__data-img--reverse{transform:rotate(180deg)}.deposit-modal__rate{align-items:center;display:flex;justify-content:space-between;margin-bottom:8px}.done-banner-block{margin-top:24px}.done-banner-block__text{border:1px solid #b9b9b9;border-radius:5px;padding:16px}.done-banner-block__text p{margin-bottom:16px}.done-banner-block__text p:last-child{margin-bottom:0}.done-banner-block__text a{color:#619420;-webkit-text-decoration:underline;text-decoration:underline}.m-top-18{margin-top:18px}.p-top-16{padding-top:16px}.exchangeform__date{align-items:center;background:#fff;border:1px solid #dedede;border-radius:14px;display:flex;flex-direction:row;justify-content:flex-start;min-height:50px;padding:8px 22px 10px 6px}.exchangeform__date p,.exchangeform__date span{margin:0 6px}.exchangeform__date-icon{align-items:center;display:inline-flex;flex:none;flex-direction:column;justify-content:center;padding:0}.exchangeform__date-icon img{height:auto;max-width:30px;position:static;transform:none;width:100%}.exchangeform__date-name{color:#212121!important;display:block!important;flex:1;font-size:16px!important;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}.exchangeform-step-2-page .container--form h2{font-family:"Conv_MuseoSansCyrl_2",sans-serif;font-size:1.5em;font-weight:100;margin-top:20px;text-transform:none}.exchangeform-step-2-page .form{max-width:714px}.exchangeform-step-2-page .form-v2{flex-direction:column}@media screen and (min-width:861px){.exchangeform-step-2-page .form-v2{padding-bottom:0}}.exchangeform-step-2-page .form-v2>div{padding:40px 36px}.exchangeform-step-2-page .form--title{margin-bottom:0}.dataInput .exchangeform-step-2-page .form--title{margin-bottom:24px}.exchangeform-step-2-page .form-v2--input{flex:1;min-width:calc(50% - 20px)}.exchangeform-step-2-page .form-v2--input input{max-width:448px;padding-top:15px}.exchangeform-step-2-page .form-v2--number{max-width:448px;position:relative}.exchangeform-step-2-page .give{background:#f9fbfd}.exchangeform-step-2-page .btn-submitForm{font-family:"Roboto-Medium",sans-serif;font-size:20px;font-weight:500;line-height:23.44px}.exchangeform-step-2-page .info-title{color:#191d26;font-size:1.5rem;letter-spacing:.2px;line-height:28px;margin-bottom:12px}.exchangeform-step-2-page .form-v2--number .currency--symbol{align-items:center;color:#96989c;display:flex;flex-direction:column;justify-content:center;position:absolute;right:20px;text-transform:uppercase;top:50%;transform:translateY(-50%)}.exchangeform-step-2-page .form-v2--number .currency--symbol img{height:auto;max-width:30px;position:static;transform:none;width:100%}.exchangeform-step-2--info{padding:8px}@media screen and (min-width:861px){.exchangeform-step-2--info{padding:40px 36px}}.exchangeform-step-2--info p{color:#96989c;font-size:1rem;letter-spacing:.2px;line-height:28px}.exchangeform-step-2--info ol{list-style-type:decimal;margin-top:12px;padding-left:20px}.exchangeform-step-2--info li{font-family:"Conv_MuseoSansCyrl_2",sans-serif;font-size:1rem;margin-bottom:12px}.exchangeform-step-2--info li:last-child{margin-bottom:0}.exchangeform-step-2--info li span{color:#191d26;font-family:"Conv_MuseoSansCyrl_0",sans-serif;font-size:1rem;letter-spacing:.2px;line-height:24px}.exchangeform-step-2--info li a{color:#3daea4;font-family:"Conv_MuseoSansCyrl_2",sans-serif}.exchangeform-step-2--info li a:hover{color:#017cd1}.form-v2--group{align-items:flex-start;display:flex;justify-content:space-between;margin:0 -10px}@media screen and (max-width:767px){.form-v2--group{margin:0 -5px}}.form-v2--group .form-v2--input{margin:0 10px}@media screen and (max-width:767px){.form-v2--group .form-v2--input{margin:0 5px}}.label{color:#96989c;display:block;font-family:"Conv_MuseoSansCyrl_0",sans-serif;font-size:14px;font-weight:300;letter-spacing:.2px;line-height:28px;margin-bottom:4px;min-height:28px}.contact-main-icon{flex:none}.contact-main-icon p{font-size:15px}.popup .d-flex__col>div{flex:1 0 auto;min-width:200px}.item-page{color:#4e5155;font-size:16px;line-height:24px}.item-page>div:not(.widget):not(.news-bloc):not(.reviews-bloc):not(.partner-block):not(.choose):not(.reserves),.item-page>p:not(.widget):not(.news-bloc):not(.reviews-bloc):not(.partner-block):not(.choose):not(.reserves){font-size:16px;line-height:24px;margin:0;padding:8px 0}.item-page>div:not(.widget):not(.news-bloc):not(.reviews-bloc):not(.partner-block):not(.choose):not(.reserves):empty,.item-page>p:not(.widget):not(.news-bloc):not(.reviews-bloc):not(.partner-block):not(.choose):not(.reserves):empty{height:0}.item-page>div:not(.widget):not(.news-bloc):not(.reviews-bloc):not(.partner-block):not(.choose):not(.reserves):has(>.ProseMirror-trailingBreak),.item-page>p:not(.widget):not(.news-bloc):not(.reviews-bloc):not(.partner-block):not(.choose):not(.reserves):has(>.ProseMirror-trailingBreak){padding:0}.item-page>div:not(.widget):not(.news-bloc):not(.reviews-bloc):not(.partner-block):not(.choose):not(.reserves):last-child,.item-page>p:not(.widget):not(.news-bloc):not(.reviews-bloc):not(.partner-block):not(.choose):not(.reserves):last-child{padding-bottom:0}.item-page>ol,.item-page>ul{margin:0;padding:2px 0 2px 16px}.item-page>ol:last-child,.item-page>ul:last-child{margin-bottom:0}.item-page>ol li,.item-page>ul li{line-height:24px}.item-page>ol li div,.item-page>ol li p,.item-page>ul li div,.item-page>ul li p{margin:0;padding:0}.item-page>ul{list-style:none;padding:2px 0 2px 16px}.item-page>ul li{display:flex;font-size:16px;line-height:24px;margin-bottom:0;padding:6px 0}.item-page>ul li:last-child{margin-bottom:0}.item-page>ul li:before{color:#619420;content:"•";font-size:24px;margin-right:10px}.item-page>ol{list-style-type:auto;padding:2px 0 2px 30px}.item-page>ol li{padding:6px 0}.item-page>:not(.widget):not(.news-bloc):not(.reviews-bloc):not(.partner-block):not(.choose):not(.reserves) strong{font-weight:700}.item-page>:not(.widget):not(.news-bloc):not(.reviews-bloc):not(.partner-block):not(.choose):not(.reserves) em{font-style:italic}.item-page>:not(.widget):not(.news-bloc):not(.reviews-bloc):not(.partner-block):not(.choose):not(.reserves) s{-webkit-text-decoration:line-through;text-decoration:line-through}.item-page>:not(.widget):not(.news-bloc):not(.reviews-bloc):not(.partner-block):not(.choose):not(.reserves) img{display:block;height:auto;margin-bottom:24px;margin-top:32px;max-width:100%;width:auto}.item-page>:not(.widget):not(.news-bloc):not(.reviews-bloc):not(.partner-block):not(.choose):not(.reserves) hr{background:#d9d9d9;border:0;display:block;height:1px;margin:8px 0;width:100%}.item-page>:not(.widget):not(.news-bloc):not(.reviews-bloc):not(.partner-block):not(.choose):not(.reserves) a{color:#0081eb;-webkit-text-decoration:underline;text-decoration:underline}.item-page>:not(.widget):not(.news-bloc):not(.reviews-bloc):not(.partner-block):not(.choose):not(.reserves) code{background:#efefef;border-radius:6px;color:#616161;color:#3b454e;margin:16px 0;padding:16px}.item-page>:not(.widget):not(.news-bloc):not(.reviews-bloc):not(.partner-block):not(.choose):not(.reserves) blockquote{border-left:4px solid #e2e4e4;margin:0 0 24px;padding-left:16px}.item-page h1:not(.title),.item-page h2:not(.title),.item-page h3:not(.title),.item-page h4:not(.title),.item-page h5:not(.title),.item-page h6:not(.title){color:#1d1d26;font-weight:600;line-height:1.2;margin:0;padding:32px 0 8px;text-transform:none}.item-page h1:not(.title):first-child,.item-page h2:not(.title):first-child,.item-page h3:not(.title):first-child,.item-page h4:not(.title):first-child,.item-page h5:not(.title):first-child,.item-page h6:not(.title):first-child{padding-top:16px}.item-page h1:not(.title){font-size:40px;line-height:48px;padding:32px 0 8px}.item-page h2:not(.title){font-size:30px;line-height:36px}.item-page h3:not(.title){font-size:24px;line-height:32px}.item-page h4:not(.title){font-size:20px;line-height:24px;padding-top:28px}.item-page h5:not(.title){font-size:16px;line-height:19px;padding-top:20px}.item-page h6:not(.title){font-size:12px;line-height:16px;padding-top:8px}.item-page pre{background:#efefef;border-radius:6px;color:#616161;color:#3b454e;font-family:"Courier",monospace;margin:0;padding:38px 16px 16px}.item-page pre code{background:none;color:inherit;margin:0;padding:0}.item-page pre .hljs-comment,.item-page pre .hljs-quote{color:#616161}.item-page pre .hljs-attribute,.item-page pre .hljs-link,.item-page pre .hljs-name,.item-page pre .hljs-regexp,.item-page pre .hljs-selector-class,.item-page pre .hljs-selector-id,.item-page pre .hljs-tag,.item-page pre .hljs-template-variable,.item-page pre .hljs-variable{color:#f98181}.item-page pre .hljs-built_in,.item-page pre .hljs-builtin-name,.item-page pre .hljs-literal,.item-page pre .hljs-meta,.item-page pre .hljs-number,.item-page pre .hljs-params,.item-page pre .hljs-type{color:#fbbc88}.item-page pre .hljs-bullet,.item-page pre .hljs-string,.item-page pre .hljs-symbol{color:#b9f18d}.item-page pre .hljs-section,.item-page pre .hljs-title{color:#faf594}.item-page pre .hljs-keyword,.item-page pre .hljs-selector-tag{color:#70cff8}.item-page pre .hljs-emphasis{font-style:italic}.item-page pre .hljs-strong{font-weight:700}.item-page .widget h1,.item-page .widget h2,.item-page .widget h3,.item-page .widget h4,.item-page .widget h5,.item-page .widget h6{padding:0}.item-page .widget h1:first-child,.item-page .widget h2:first-child,.item-page .widget h3:first-child,.item-page .widget h4:first-child,.item-page .widget h5:first-child,.item-page .widget h6:first-child{padding-top:0}.pointer{cursor:pointer}.transs{background:#fff;display:flex;flex-direction:column;min-height:100vh;transition:all .2s}.main{flex:1}.main-wr{display:flex;flex:1;flex-direction:column;position:relative}body{background:#fff;margin:0 auto}.popup-close-bloc{background:rgba(0,0,0,.2)}.under-header{min-height:100px}.faded-down-enter-active,.faded-down-leave-active{transition:all .3s ease}.faded-down-enter,.faded-down-leave-to{opacity:0;position:absolute;transform:translateY(-20px)}.faded-enter-active,.faded-leave-active{transition:all .3s ease}.faded-enter,.faded-leave-to{opacity:0;transform:translateY(20px)}.slide-enter-active,.slide-leave-active{transition:all .5s ease}.slide-enter,.slide-leave-to{opacity:0;transform:translateX(1550px)}.swal2-popup.swal2-toast{background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;overflow-y:hidden;padding:1em;pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{font-size:1em;margin:.5em 1em;padding:0;text-align:left;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{font-size:1em;height:2em;margin:.5em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{font-size:.8em;margin:.5em 0 0;padding:.5em 0 0}.swal2-popup.swal2-toast .swal2-close{align-self:center;font-size:2em;grid-column:3/3;grid-row:1/99;height:.8em;margin:0;width:.8em}.swal2-popup.swal2-toast .swal2-html-container{font-size:1em;margin:.5em 1em;overflow:visible;overflow:initial;padding:0;text-align:left;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{align-self:center;grid-column:1;grid-row:1/99;height:2em;margin:.25em;width:2em}.swal2-popup.swal2-toast .swal2-icon{align-self:center;grid-column:1;grid-row:1/99;height:2em;margin:0 .5em 0 0;min-width:2em;width:2em}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{align-items:center;display:flex;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{height:2em;width:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{height:auto;justify-content:flex-start;margin:.5em 0 0;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{font-size:1em;margin:.25em .5em;padding:.4em .6em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{border-radius:50%;height:3em;position:absolute;transform:rotate(45deg);width:1.6em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{border-radius:4em 0 0 4em;left:-.5em;top:-.8em;transform:rotate(-45deg);transform-origin:2em 2em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{border-radius:0 4em 4em 0;left:.9375em;top:-.25em;transform-origin:0 1.5em}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{height:2em;width:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{height:2.6875em;left:.4375em;top:0;width:.4375em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{left:.1875em;top:1.125em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{right:.1875em;top:.9375em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}.swal2-container{-webkit-overflow-scrolling:touch;bottom:0;box-sizing:border-box;display:grid;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);height:100%;left:0;overflow-x:hidden;padding:.625em;position:fixed;right:0;top:0;transition:background-color .1s;z-index:1060}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:transparent!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{align-self:start;grid-column:2;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{align-self:start;grid-column:3;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{align-self:center;grid-row:2}.swal2-container.swal2-center>.swal2-popup{align-self:center;grid-column:2;grid-row:2;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{align-self:center;grid-column:3;grid-row:2;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{align-self:end;grid-column:1;grid-row:3}.swal2-container.swal2-bottom>.swal2-popup{align-self:end;grid-column:2;grid-row:3;justify-self:center}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{align-self:end;grid-column:3;grid-row:3;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{align-self:stretch;grid-row:1/4}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{background:#fff;border:none;border-radius:5px;box-sizing:border-box;color:#545454;display:none;font-family:inherit;font-size:1rem;grid-template-columns:minmax(0,100%);max-width:100%;padding:0 0 1.25em;position:relative;width:32em}.swal2-popup:focus{outline:none}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{word-wrap:break-word;color:inherit;font-size:1.875em;font-weight:600;margin:0;max-width:100%;padding:.8em 1em 0;position:relative;text-align:center;text-transform:none}.swal2-actions{align-items:center;box-sizing:border-box;display:flex;flex-wrap:wrap;justify-content:center;margin:1.25em auto 0;padding:0;width:auto;z-index:1}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{align-items:center;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-color:#2778c4 transparent;border-radius:100%;border-style:solid;border-width:.25em;display:none;height:2.2em;justify-content:center;margin:0 1.875em;width:2.2em}.swal2-styled{box-shadow:0 0 0 3px transparent;font-weight:500;margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{background:transparent none repeat 0 0/auto auto padding-box border-box scroll;background:initial;background-color:#7066e0;border:0;border-radius:.25em;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{background:transparent none repeat 0 0/auto auto padding-box border-box scroll;background:initial;background-color:#dc3741;border:0;border-radius:.25em;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{background:transparent none repeat 0 0/auto auto padding-box border-box scroll;background:initial;background-color:#6e7881;border:0;border-radius:.25em;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px hsla(208,8%,47%,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:none}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{border-top:1px solid #eee;color:inherit;font-size:1em;justify-content:center;margin:1em 0 0;padding:1em 1em 0}.swal2-timer-progress-bar-container{border-bottom-left-radius:5px;border-bottom-right-radius:5px;bottom:0;grid-column:auto!important;left:0;overflow:hidden;position:absolute;right:0}.swal2-timer-progress-bar{background:rgba(0,0,0,.2);height:.25em;width:100%}.swal2-image{margin:2em auto 1em;max-width:100%}.swal2-close{align-items:center;background:transparent;border:none;border-radius:5px;color:#ccc;cursor:pointer;font-family:serif;font-family:monospace;font-size:2.5em;height:1.2em;justify-content:center;justify-self:end;margin-bottom:-1.2em;margin-right:0;margin-top:0;overflow:hidden;padding:0;transition:color .1s,box-shadow .1s;width:1.2em;z-index:2}.swal2-close:hover{background:transparent;color:#f27474;transform:none}.swal2-close:focus{box-shadow:inset 0 0 0 3px rgba(100,150,200,.5);outline:none}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{word-wrap:break-word;color:inherit;font-size:1.125em;font-weight:400;justify-content:center;line-height:normal;margin:1em 1.6em .3em;overflow:auto;padding:0;text-align:center;word-break:break-word;z-index:1}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 3px}.swal2-file,.swal2-input,.swal2-textarea{background:transparent;border:1px solid #d9d9d9;border-radius:.1875em;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;box-sizing:border-box;color:inherit;font-size:1.125em;transition:border-color .1s,box-shadow .1s;width:auto}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5);outline:none}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{background:#fff;margin:1em 2em 3px}.swal2-range input{width:80%}.swal2-range output{color:inherit;font-weight:600;text-align:center;width:20%}.swal2-range input,.swal2-range output{font-size:1.125em;height:2.625em;line-height:2.625em;padding:0}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{background:transparent;font-size:1.125em;margin-left:auto;margin-right:auto;width:75%}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{background:transparent;color:inherit;font-size:1.125em;max-width:100%;min-width:50%;padding:.375em .625em}.swal2-checkbox,.swal2-radio{align-items:center;background:#fff;color:inherit;justify-content:center}.swal2-checkbox label,.swal2-radio label{font-size:1.125em;margin:0 .6em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;background:#f0f0f0;color:#666;font-size:1em;font-weight:300;justify-content:center;margin:1em 0 0;overflow:hidden;padding:.625em}.swal2-validation-message:before{background-color:#f27474;border-radius:50%;color:#fff;content:"!";display:inline-block;font-weight:600;height:1.5em;line-height:1.5em;margin:0 .625em;min-width:1.5em;text-align:center;width:1.5em}.swal2-icon{border:.25em solid #000;border-radius:50%;box-sizing:content-box;cursor:default;font-family:inherit;height:5em;justify-content:center;line-height:5em;margin:2.5em auto .6em;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:5em}.swal2-icon .swal2-icon-content{align-items:center;display:flex;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{flex-grow:1;position:relative}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{background-color:#f27474;border-radius:.125em;display:block;height:.3125em;position:absolute;top:2.3125em;width:2.9375em}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{border-radius:50%;height:7.5em;position:absolute;transform:rotate(45deg);width:3.75em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{border-radius:7.5em 0 0 7.5em;left:-2.0635em;top:-.4375em;transform:rotate(-45deg);transform-origin:3.75em 3.75em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{border-radius:0 7.5em 7.5em 0;left:1.875em;top:-.6875em;transform:rotate(-45deg);transform-origin:0 3.75em}.swal2-icon.swal2-success .swal2-success-ring{border:.25em solid hsla(98,55%,69%,.3);border-radius:50%;box-sizing:content-box;height:100%;left:-.25em;position:absolute;top:-.25em;width:100%;z-index:2}.swal2-icon.swal2-success .swal2-success-fix{height:5.625em;left:1.625em;position:absolute;top:.5em;transform:rotate(-45deg);width:.4375em;z-index:1}.swal2-icon.swal2-success [class^=swal2-success-line]{background-color:#a5dc86;border-radius:.125em;display:block;height:.3125em;position:absolute;z-index:2}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{left:.8125em;top:2.875em;transform:rotate(45deg);width:1.5625em}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{right:.5em;top:2.375em;transform:rotate(-45deg);width:2.9375em}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{align-items:center;background:transparent;flex-wrap:wrap;font-weight:600;margin:1.25em auto;max-width:100%;padding:0}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{background:#2778c4;border-radius:2em;color:#fff;flex-shrink:0;height:2em;line-height:2em;text-align:center;width:2em;z-index:20}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{background:#2778c4;flex-shrink:0;height:.4em;margin:0 -1px;width:2.5em;z-index:10}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{height:50px;overflow:scroll;position:absolute;top:-9999px;width:50px}.swal2-rtl .swal2-close{margin-left:0;margin-right:0}.swal2-rtl .swal2-timer-progress-bar{left:auto;right:0}.leave-russia-now-and-apply-your-skills-to-the-world{align-items:center;background:#20232a;bottom:0;color:#fff;display:flex;flex-direction:column;justify-content:center;left:0;padding:25px 0 20px;position:fixed;right:0;text-align:center;top:0;z-index:1939}.leave-russia-now-and-apply-your-skills-to-the-world div{line-height:146%;margin:10px;max-width:560px}.leave-russia-now-and-apply-your-skills-to-the-world iframe{margin:16px auto;max-height:55.5555555556vmin;max-width:100%}.leave-russia-now-and-apply-your-skills-to-the-world strong{border-bottom:2px dashed #fff}.leave-russia-now-and-apply-your-skills-to-the-world button{align-items:center;background:transparent;border:none;color:#aaa;cursor:pointer;display:flex;font-size:48px;font-weight:700;height:48px;justify-content:center;margin-bottom:-10px;margin-right:10px;position:fixed;right:0;top:0;width:48px;z-index:1940}.leave-russia-now-and-apply-your-skills-to-the-world button:hover{color:#fff}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotate(2deg)}33%{transform:translateY(0) rotate(-2deg)}66%{transform:translateY(.3125em) rotate(2deg)}to{transform:translateY(0) rotate(0deg)}}@keyframes swal2-toast-hide{to{opacity:0;transform:rotate(1deg)}}@keyframes swal2-toast-animate-success-line-tip{0%{left:.0625em;top:.5625em;width:0}54%{left:.125em;top:.125em;width:0}70%{left:-.25em;top:.625em;width:1.625em}84%{left:.75em;top:1.0625em;width:.5em}to{left:.1875em;top:1.125em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{right:1.375em;top:1.625em;width:0}65%{right:.9375em;top:1.25em;width:0}84%{right:0;top:.9375em;width:1.125em}to{right:.1875em;top:.9375em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}to{transform:scale(1)}}@keyframes swal2-hide{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.5)}}@keyframes swal2-animate-success-line-tip{0%{left:.0625em;top:1.1875em;width:0}54%{left:.125em;top:1.0625em;width:0}70%{left:-.375em;top:2.1875em;width:3.125em}84%{left:1.3125em;top:3em;width:1.0625em}to{left:.8125em;top:2.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{right:2.875em;top:3.375em;width:0}65%{right:2.875em;top:3.375em;width:0}84%{right:0;top:2.1875em;width:3.4375em}to{right:.5em;top:2.375em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}to{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;opacity:0;transform:scale(.4)}50%{margin-top:1.625em;opacity:0;transform:scale(.4)}80%{margin-top:-.375em;transform:scale(1.15)}to{margin-top:0;opacity:1;transform:scale(1)}}@keyframes swal2-animate-error-icon{0%{opacity:0;transform:rotateX(100deg)}to{opacity:1;transform:rotateX(0deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-1turn)}to{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{opacity:0;transform:rotate(45deg)}25%{opacity:.4;transform:rotate(-25deg)}50%{opacity:.8;transform:rotate(15deg)}75%{opacity:1;transform:rotate(-5deg)}to{opacity:1;transform:rotateX(0)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent;box-sizing:border-box;max-width:100%;pointer-events:none;width:360px}body.swal2-toast-shown .swal2-container.swal2-top{bottom:auto;left:50%;right:auto;top:0;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{bottom:auto;left:auto;right:0;top:0}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{bottom:auto;left:0;right:auto;top:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{bottom:auto;left:0;right:auto;top:50%;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{bottom:auto;left:50%;right:auto;top:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{bottom:auto;left:auto;right:0;top:50%;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{bottom:0;left:0;right:auto;top:auto}body.swal2-toast-shown .swal2-container.swal2-bottom{bottom:0;left:50%;right:auto;top:auto;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{bottom:0;left:auto;right:0;top:auto}.swal2-container{z-index:9999!important}.swal2-container.swal2-shown{z-index:9998}.swal2-actions .swal2-confirm.swal2-styled{background-color:#75c41c;background:-webkit-gradient(left bottom,right top,color-stop(0,#75c41c),color-stop(60%,#40b279),color-stop(75%,#2daf99),color-stop(90%,#26aea9),color-stop(100%,#26aea9));background:linear-gradient(45deg,#75c41c,#40b279 60%,#2daf99 75%,#26aea9 90%,#26aea9);box-shadow:0 20px 40px 0 rgba(23,22,37,.15);color:#fff;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#75c41c",endColorstr="#26aea9",GradientType=1);padding-left:30px;padding-right:30px}.swal2-actions .swal2-confirm.swal2-styled:hover{background:#66a81b;background:-webkit-gradient(left bottom,right top,color-stop(0,#66a81b),color-stop(60%,#379667),color-stop(75%,#2a9c87),color-stop(90%,#22948e),color-stop(100%,#0e8c86));background:linear-gradient(45deg,#66a81b,#379667 60%,#2a9c87 75%,#22948e 90%,#0e8c86);color:#7fd21e;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#66a81b",endColorstr="#0e8c86",GradientType=1)}input::-webkit-inner-spin-button,input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}.stop-scrolling{height:100%;overflow:hidden}.p20{padding:20px}.exchangeform-step-2-page .container--form h2{color:#000}.only-mobile{display:none}@media only screen and (max-width:1200px){.only-mobile{display:block}}',
        "",
      ]),
        (T.locals = {}),
        (e.exports = T);
    },
    ,
    function (e, t, r) {
      e.exports = r.p + "fonts/Play-Bold.543d602.ttf";
    },
    function (e, t, r) {
      e.exports = r.p + "fonts/Play-Regular.9d48871.ttf";
    },
    function (e, t, r) {
      e.exports = r.p + "fonts/Roboto-Regular.a8d6ac0.ttf";
    },
    function (e, t, r) {
      e.exports = r.p + "fonts/Roboto-Light.8be2d14.ttf";
    },
    function (e, t, r) {
      e.exports = r.p + "fonts/Roboto-Medium.7429a63.ttf";
    },
    function (e, t, r) {
      e.exports = r.p + "img/search.4495ab5.svg";
    },
    function (e, t, r) {
      e.exports = r.p + "img/bg-t.e733ef4.svg";
    },
    function (e, t, r) {
      e.exports = r.p + "img/bg-t-2.f1509bf.svg";
    },
    function (e, t, r) {
      e.exports = r.p + "img/001.f83ed95.svg";
    },
    function (e, t, r) {
      e.exports = r.p + "img/002.ebb3754.svg";
    },
    function (e, t) {
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxjaXJjbGUgY3g9IjI1IiBjeT0iMjUiIHI9IjI1IiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjUiLz4KICAgIDxjaXJjbGUgY3g9IjI0Ljk0OTEiIGN5PSIyNC45NDg3IiByPSIxNy45NDg3IiBmaWxsPSJ3aGl0ZSIvPgogICAgPHBhdGggZD0iTTMxLjM3MjkgMTkuMjk5NEwyMS42MSAyOS4zMDQ4TDE3LjY3NTcgMjUuMjg3N0MxNy4yODcxIDI0Ljg4ODUgMTYuNjggMjQuODg4NSAxNi4yOTE0IDI1LjI4NzdDMTUuOTAyOSAyNS42ODY5IDE1LjkwMjkgMjYuMzEwNyAxNi4yOTE0IDI2LjcwOTlMMjAuOTA1NyAzMS40NTA2QzIxLjEgMzEuNjUwMiAyMS4zNDI5IDMxLjc1IDIxLjU4NTcgMzEuNzVDMjEuODI4NiAzMS43NSAyMi4wNzE0IDMxLjY1MDIgMjIuMjY1NyAzMS40NTA2TDMyLjcwODYgMjAuNzIxNkMzMy4wOTcxIDIwLjMyMjQgMzMuMDk3MSAxOS42OTg2IDMyLjcwODYgMTkuMjk5NEMzMi4zNjg2IDE4LjkwMDIgMzEuNzM3MSAxOC45MDAyIDMxLjM3MjkgMTkuMjk5NFoiIGZpbGw9IiM2OUMwMzYiLz4KPC9zdmc+Cg==";
    },
    function (e, t, r) {
      e.exports = r.p + "img/payment-processing.b8cf369.png";
    },
    function (e, t, r) {
      e.exports = r.p + "img/payment-refunded.0446c6f.png";
    },
    function (e, t, r) {
      e.exports = r.p + "img/payment-deleted.93c3d47.png";
    },
    function (e, t, r) {
      e.exports = r.p + "img/top-waves.42fec65.svg";
    },
    function (e, t, r) {
      e.exports = r.p + "img/right-waves.5b26573.svg";
    },
    function (e, t) {
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzY4IiBoZWlnaHQ9IjIxIiB2aWV3Qm94PSIwIDAgMzY4IDIxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBvcGFjaXR5PSIwLjc1Ij4KPGxpbmUgeDE9IjI0IiB5MT0iMTAiIHgyPSIxNTMiIHkyPSIxMCIgc3Ryb2tlPSIjRDBEMkRCIi8+CjwvZz4KPHBhdGggZD0iTTE2NiAxMC41SDE2NyIgc3Ryb2tlPSIjRDBEMkRCIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTgwIDEwLjVIMTg4IiBzdHJva2U9IiNEMEQyREIiIHN0cm9rZS13aWR0aD0iOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGQ9Ik0yMDEgMTAuNUgyMDIiIHN0cm9rZT0iI0QwRDJEQiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPGcgb3BhY2l0eT0iMC43NSI+CjxsaW5lIHgxPSIyMTUiIHkxPSIxMCIgeDI9IjM0NCIgeTI9IjEwIiBzdHJva2U9IiNEMEQyREIiLz4KPC9nPgo8L3N2Zz4K";
    },
    function (e, t, r) {
      e.exports = r.p + "img/quotes.172360d.png";
    },
    function (e, t, r) {
      e.exports = r.p + "img/synchronization.3d30b54.svg";
    },
    function (e, t, r) {
      e.exports = r.p + "img/view.27ea301.svg";
    },
    function (e, t, r) {
      e.exports = r.p + "img/delete.770b0da.svg";
    },
    function (e, t) {
      e.exports =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNTA1Ljk0Myw3OS41OTRjLTguMDc3LTguMDc3LTIxLjE3Mi04LjA3Ny0yOS4yNDksMEwxNjcuNzU1LDM4OC41MzJMMzUuMzA2LDI1Ni4wODNjLTguMDc2LTguMDc3LTIxLjE3Mi04LjA3Ny0yOS4yNDgsMCAgICBjLTguMDc3LDguMDc3LTguMDc3LDIxLjE3MiwwLDI5LjI0OWwxNDcuMDc0LDE0Ny4wNzRjNC4wMzgsNC4wMzksOS4zMzIsNi4wNTgsMTQuNjI1LDYuMDU4YzUuMjkzLDAsMTAuNTg3LTIuMDE5LDE0LjYyNS02LjA1OSAgICBsMzIzLjU2Mi0zMjMuNTYyQzUxNC4wMTksMTAwLjc2Nyw1MTQuMDE5LDg3LjY3Miw1MDUuOTQzLDc5LjU5NHoiIGZpbGw9IiM3OWM4MWMiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K";
    },
    function (e, t, r) {
      e.exports = r.p + "img/close.d2b0c26.svg";
    },
    function (e, t, r) {
      e.exports = r.p + "img/chrome.798a35f.svg";
    },
    function (e, t, r) {
      e.exports = r.p + "img/firefox.7c095ff.svg";
    },
    function (e, t, r) {
      e.exports = r.p + "img/opera.ace956f.svg";
    },
    function (e, t) {
      e.exports =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNiIgdmlld0JveD0iMCAwIDEwIDYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xLjc2NjY4IDAuNzQxNjc1TDUuMDAwMDIgMy45NzUwMUw4LjIzMzM1IDAuNzQxNjc1QzguNTU4MzUgMC40MTY2NzUgOS4wODMzNSAwLjQxNjY3NSA5LjQwODM1IDAuNzQxNjc1QzkuNzMzMzUgMS4wNjY2NyA5LjczMzM1IDEuNTkxNjcgOS40MDgzNSAxLjkxNjY3TDUuNTgzMzUgNS43NDE2N0M1LjI1ODM1IDYuMDY2NjcgNC43MzMzNSA2LjA2NjY3IDQuNDA4MzUgNS43NDE2N0wwLjU4MzM1IDEuOTE2NjdDMC4yNTgzNSAxLjU5MTY3IDAuMjU4MzUgMS4wNjY2NyAwLjU4MzM1IDAuNzQxNjc1QzAuOTA4MzUgMC40MjUwMDggMS40NDE2OCAwLjQxNjY3NSAxLjc2NjY4IDAuNzQxNjc1WiIgZmlsbD0iIzNCNTQ4MyIvPgo8L3N2Zz4K";
    },
    function (e, t, r) {
      "use strict";
      r(253);
    },
    function (e, t, r) {
      var o = r(41)(function (i) {
        return i[1];
      });
      o.push([
        e.i,
        "input[data-v-ff655f22],textarea[data-v-ff655f22]{color:#fff}",
        "",
      ]),
        (o.locals = {}),
        (e.exports = o);
    },
    function (e, t, r) {
      "use strict";
      r(266);
    },
    function (e, t, r) {
      var o = r(41)(function (i) {
        return i[1];
      });
      o.push([
        e.i,
        ".hide[data-v-0a14a553]{position:absolute;top:-9999px}.flick[data-v-0a14a553]{font-size:0}.hide:focus+.flex-row .flick[data-v-0a14a553]{animation:flick-0a14a553 2s .2s infinite;font-size:18px}@keyframes flick-0a14a553{50%{color:#fff}}.number[data-v-0a14a553]{align-items:center;background:#fafafa;border:1px solid #eee;border-radius:7px;display:flex;font-size:18px;height:48px;justify-content:center;margin:8px;position:relative;top:8px;width:42px}.popup-wr .title[data-v-0a14a553]{font-size:22px;margin:0;padding:1rem}.popup-personal-date p[data-v-0a14a553]{font-size:11px;font-weight:700;line-height:2;margin-top:20px}.popup .btn[data-v-0a14a553]{box-shadow:none;font-size:1rem;line-height:2.75;margin-top:1rem}.popup input[data-v-0a14a553],.popup textarea[data-v-0a14a553]{font-size:13px;padding-bottom:12px;padding-top:12px}.popup-bottom img[data-v-0a14a553]{max-width:30px}.popup-wr-item[data-v-0a14a553]{border-radius:10px;box-shadow:none;max-width:300px}.input-img img[data-v-0a14a553]{left:1.25rem;width:1rem}.popup .d-flex a[data-v-0a14a553]{color:#3296c8;font-size:10px;font-weight:700;text-align:right;-webkit-text-decoration:none;text-decoration:none}.popup-bottom-title[data-v-0a14a553]{font-size:15px;font-weight:700}",
        "",
      ]),
        (o.locals = {}),
        (e.exports = o);
    },
    function (e, t, r) {
      e.exports = r.p + "img/user-popup.5b457ed.svg";
    },
    function (e, t, r) {
      "use strict";
      r(267);
    },
    function (e, t, r) {
      var o = r(41)(function (i) {
        return i[1];
      });
      o.push([
        e.i,
        ".popup-wr .title[data-v-534e4249]{margin:0;padding:1rem}.popup-personal-date p[data-v-534e4249]{font-size:11px;font-weight:700;line-height:2;margin-top:20px}.popup .btn[data-v-534e4249]{box-shadow:none;font-size:1rem;line-height:2.75;margin-top:1rem}.popup input[data-v-534e4249],.popup textarea[data-v-534e4249]{font-size:13px;margin-top:10px;padding-bottom:12px;padding-top:12px}.popup-bottom img[data-v-534e4249]{max-width:30px;width:100%}.popup .d-flex[data-v-534e4249]{justify-content:flex-start}.popup .d-flex__col[data-v-534e4249]{justify-content:space-between}.popup-wr-item[data-v-534e4249]{border-radius:10px;box-shadow:none;max-width:550px}.input-img img[data-v-534e4249]{left:1.25rem;margin:0;position:absolute;top:22px;width:1.1rem}",
        "",
      ]),
        (o.locals = {}),
        (e.exports = o);
    },
    function (e, t, r) {
      "use strict";
      r(273);
    },
    function (e, t, r) {
      var o = r(41)(function (i) {
        return i[1];
      });
      o.push([
        e.i,
        ".popup-wr[data-v-ece72776]{border-radius:5px;height:575px;padding:0;width:475px}.error-box[data-v-ece72776]{color:#4584f6}.error-box[data-v-ece72776],.success-box[data-v-ece72776]{align-items:center;display:flex;flex-direction:column;font-size:225px}.success-box[data-v-ece72776]{color:#d52b1e}.qr-block .btn[data-v-ece72776]{font-weight:700;margin-top:20px;width:245px}.qr-block[data-v-ece72776]{align-items:center;background:#fff;color:#000;display:flex;flex-direction:column;font-size:20px;padding:35px}.qrcode-image[data-v-ece72776]{padding:15px}.qr-block-title[data-v-ece72776]{color:#2f323e;font-size:20px}.hide[data-v-ece72776]{position:absolute;top:-999px}.blurred[data-v-ece72776],.small-text[data-v-ece72776]{color:#9899a0}.small-text[data-v-ece72776]{font-size:13px;margin:0}.number-wr[data-v-ece72776]{display:flex;flex-direction:row;justify-content:space-between;width:242px}.number[data-v-ece72776]{align-items:center;border:1px solid #ddd;border-radius:7px;font-size:18px;height:48px;width:32px}.mobile-bar[data-v-ece72776],.number[data-v-ece72776]{display:flex;justify-content:center}.mobile-bar[data-v-ece72776]{flex-direction:row}.flick[data-v-ece72776]{font-size:0}.hide:focus+.number-wr .flick[data-v-ece72776]{animation:flick-ece72776 1s step-end infinite;font-size:18px}.mobile[data-v-ece72776]{font-size:20px}.helper-token-text[data-v-ece72776]{margin-bottom:5px;margin-top:20px}.app-links-block[data-v-ece72776]{margin-top:20px}.app-link[data-v-ece72776]{margin:0 5px;opacity:.4}.app-link[data-v-ece72776]:hover{opacity:.9}.mobile-bar[data-v-ece72776]{padding-top:10px}.copied-text-2fa[data-v-ece72776]{color:#2c921b}.app-link img[data-v-ece72776]{height:20px;opacity:.4;width:20px}.p-input-secter[data-v-ece72776]{padding:10px 15px}.p-input-secter p[data-v-ece72776]{font-size:18px}.p-input-secter i.fal.fa-copy[data-v-ece72776]{color:#9899a0;font-size:20px;padding:5px}@keyframes flick-ece72776{0%{color:auto}50%{color:#fff}}",
        "",
      ]),
        (o.locals = {}),
        (e.exports = o);
    },
    function (e, t, r) {
      "use strict";
      r(274);
    },
    function (e, t, r) {
      var o = r(41)(function (i) {
        return i[1];
      });
      o.push([
        e.i,
        ".hide[data-v-500a55cc]{position:absolute;top:-9999px}.flick[data-v-500a55cc]{font-size:0}.hide:focus+.flex-row .flick[data-v-500a55cc]{animation:flick-500a55cc 2s .2s infinite;font-size:18px}@keyframes flick-500a55cc{50%{color:#fff}}.number[data-v-500a55cc]{align-items:center;background:#fafafa;border:1px solid #eee;border-radius:7px;display:flex;font-size:18px;height:48px;justify-content:center;margin:8px;position:relative;top:8px;width:42px}.popup-wr .title[data-v-500a55cc]{font-size:22px;margin:0;padding:1rem}.popup-personal-date p[data-v-500a55cc]{font-size:11px;font-weight:700;line-height:2;margin-top:20px}.popup .btn[data-v-500a55cc]{box-shadow:none;font-size:1rem;line-height:2.75;margin-top:1rem}.popup input[data-v-500a55cc],.popup textarea[data-v-500a55cc]{font-size:13px;padding-bottom:12px;padding-top:12px}.popup-bottom img[data-v-500a55cc]{max-width:30px}.popup-wr-item[data-v-500a55cc]{border-radius:10px;box-shadow:none;max-width:300px}.input-img img[data-v-500a55cc]{left:1.25rem;width:1rem}.popup .d-flex a[data-v-500a55cc]{color:#3296c8;font-size:10px;font-weight:700;text-align:right;-webkit-text-decoration:none;text-decoration:none}.popup-bottom-title[data-v-500a55cc]{font-size:15px;font-weight:700}",
        "",
      ]),
        (o.locals = {}),
        (e.exports = o);
    },
    function (e, t, r) {
      "use strict";
      r(275);
    },
    function (e, t, r) {
      var o = r(41)(function (i) {
        return i[1];
      });
      o.push([
        e.i,
        "@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro);",
      ]),
        o.push([
          e.i,
          ".top-left[data-v-7d5b2f10]{align-items:center;box-shadow:0 0 15px 0 rgba(0,0,0,.35);color:#fff;display:flex;left:0;line-height:1.3;margin:20px;max-width:350px;padding:20px;position:fixed;top:0;transform:translateX(-420px);z-index:1000}.top-left.do-show[data-v-7d5b2f10]{animation:slide-in-left 1s ease-in-out forwards,slide-in-left 1s ease-in-out 5s reverse forwards}.top-left[data-notification-status=notice][data-v-7d5b2f10]{background-color:#29b6f6}.top-left[data-notification-status=notice][data-v-7d5b2f10]:before{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='%23077CB2' d='M12 3.984c4.407 0 8.016 3.609 8.016 8.016 0 4.406-3.608 8.016-8.016 8.016S3.984 16.407 3.984 12 7.593 3.984 12 3.984m0-2C6.478 1.984 1.984 6.477 1.984 12c0 5.521 4.493 10.016 10.016 10.016S22.016 17.522 22.016 12c0-5.523-4.495-10.016-10.016-10.016zm0 2'/%3E%3Cpath fill='%23077CB2' d='M11.016 6.984V9h1.968V6.984h-1.968zm0 10.032h1.968v-6h-1.968v6z'/%3E%3C/svg%3E\") 50%/cover no-repeat;content:\"\";display:block;height:30px;margin-right:20px;min-width:30px;width:30px}.top-left[data-notification-status=warning][data-v-7d5b2f10]{background-color:#ffca28}.top-left[data-notification-status=warning][data-v-7d5b2f10]:before{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='%23C19100' d='M12 3.984c4.407 0 8.016 3.609 8.016 8.016 0 4.406-3.608 8.016-8.016 8.016S3.984 16.407 3.984 12 7.593 3.984 12 3.984m0-2C6.478 1.984 1.984 6.477 1.984 12c0 5.521 4.493 10.016 10.016 10.016S22.016 17.522 22.016 12c0-5.523-4.495-10.016-10.016-10.016zm0 2'/%3E%3Cpath fill='%23C19100' d='M11.016 17.016h1.968V15h-1.968v2.016zm0-10.033v6.001h1.968V6.983h-1.968z'/%3E%3C/svg%3E\") 50%/cover no-repeat;content:\"\";display:block;height:30px;margin-right:20px;min-width:30px;width:30px}.top-left[data-notification-status=error][data-v-7d5b2f10]{background-color:#ef5350}.top-left[data-notification-status=error][data-v-7d5b2f10]:before{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='%23C71612' d='M12 3.984c4.407 0 8.016 3.609 8.016 8.016 0 4.406-3.608 8.016-8.016 8.016S3.984 16.407 3.984 12 7.593 3.984 12 3.984m0-2C6.478 1.984 1.984 6.477 1.984 12c0 5.521 4.493 10.016 10.016 10.016S22.016 17.522 22.016 12c0-5.523-4.495-10.016-10.016-10.016zm0 2'/%3E%3Cpath fill='%23C71612' d='m13.406 12 2.578 2.578-1.406 1.406L12 13.406l-2.578 2.578-1.406-1.406L10.594 12 8.016 9.421l1.406-1.405L12 10.593l2.578-2.577 1.406 1.405L13.406 12z'/%3E%3C/svg%3E\") 50%/cover no-repeat;content:\"\";display:block;height:30px;margin-right:20px;min-width:30px;width:30px}.top-left[data-notification-status=success][data-v-7d5b2f10]{background-color:#66bb6a}.top-left[data-notification-status=success][data-v-7d5b2f10]:before{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='%233A813D' d='M12 3.984c4.407 0 8.016 3.609 8.016 8.016 0 4.406-3.608 8.016-8.016 8.016S3.984 16.407 3.984 12 7.593 3.984 12 3.984m0-2C6.478 1.984 1.984 6.477 1.984 12c0 5.521 4.493 10.016 10.016 10.016S22.016 17.522 22.016 12c0-5.523-4.495-10.016-10.016-10.016zm0 2'/%3E%3Cpath fill='%233A813D' d='m10.477 13.136 5.085-5.085 1.406 1.406-6.492 6.492-3.446-3.445 1.406-1.406 2.041 2.038z'/%3E%3C/svg%3E\") 50%/cover no-repeat;content:\"\";display:block;height:30px;margin-right:20px;min-width:30px;width:30px}.top-left[data-notification-status=question][data-v-7d5b2f10]{background-color:#8d6e63}.top-left[data-notification-status=question][data-v-7d5b2f10]:before{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='%23513F39' d='M12 3.984c4.407 0 8.016 3.609 8.016 8.016 0 4.406-3.608 8.016-8.016 8.016S3.984 16.407 3.984 12 7.593 3.984 12 3.984m0-2C6.478 1.984 1.984 6.477 1.984 12c0 5.521 4.493 10.016 10.016 10.016S22.016 17.522 22.016 12c0-5.523-4.495-10.016-10.016-10.016zm0 2'/%3E%3Cpath fill='%23513F39' d='M12.001 6.314h-.002A3.606 3.606 0 0 0 8.39 9.923h1.784c0-.977.85-1.784 1.826-1.784.977 0 1.827.807 1.827 1.784 0 1.826-2.718 1.614-2.718 4.544h1.784c0-2.038 2.717-2.294 2.717-4.544a3.607 3.607 0 0 0-3.609-3.609zm-.892 10.872h1.784V15.36h-1.784v1.826z'/%3E%3C/svg%3E\") 50%/cover no-repeat;content:\"\";display:block;height:30px;margin-right:20px;min-width:30px;width:30px}.top-left[data-notification-status=plain][data-v-7d5b2f10]{background-color:#333}.top-right[data-v-7d5b2f10]{align-items:center;box-shadow:0 0 15px 0 rgba(0,0,0,.35);color:#fff;display:flex;line-height:1.3;margin:20px;max-width:350px;padding:20px;position:fixed;right:0;top:0;z-index:9000}.top-right.do-show[data-v-7d5b2f10]{animation:fade-in 1s ease-in-out forwards,fade-in 1s ease-in-out 3s reverse forwards}.top-right[data-notification-status=notice][data-v-7d5b2f10]{background-color:#29b6f6}.top-right[data-notification-status=notice][data-v-7d5b2f10]:before{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='%23077CB2' d='M12 3.984c4.407 0 8.016 3.609 8.016 8.016 0 4.406-3.608 8.016-8.016 8.016S3.984 16.407 3.984 12 7.593 3.984 12 3.984m0-2C6.478 1.984 1.984 6.477 1.984 12c0 5.521 4.493 10.016 10.016 10.016S22.016 17.522 22.016 12c0-5.523-4.495-10.016-10.016-10.016zm0 2'/%3E%3Cpath fill='%23077CB2' d='M11.016 6.984V9h1.968V6.984h-1.968zm0 10.032h1.968v-6h-1.968v6z'/%3E%3C/svg%3E\") 50%/cover no-repeat;content:\"\";display:block;height:30px;margin-right:20px;min-width:30px;width:30px}.top-right[data-notification-status=warning][data-v-7d5b2f10]{background-color:#ffca28}.top-right[data-notification-status=warning][data-v-7d5b2f10]:before{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='%23C19100' d='M12 3.984c4.407 0 8.016 3.609 8.016 8.016 0 4.406-3.608 8.016-8.016 8.016S3.984 16.407 3.984 12 7.593 3.984 12 3.984m0-2C6.478 1.984 1.984 6.477 1.984 12c0 5.521 4.493 10.016 10.016 10.016S22.016 17.522 22.016 12c0-5.523-4.495-10.016-10.016-10.016zm0 2'/%3E%3Cpath fill='%23C19100' d='M11.016 17.016h1.968V15h-1.968v2.016zm0-10.033v6.001h1.968V6.983h-1.968z'/%3E%3C/svg%3E\") 50%/cover no-repeat;content:\"\";display:block;height:30px;margin-right:20px;min-width:30px;width:30px}.top-right[data-notification-status=error][data-v-7d5b2f10]{background-color:#ef5350}.top-right[data-notification-status=error][data-v-7d5b2f10]:before{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='%23C71612' d='M12 3.984c4.407 0 8.016 3.609 8.016 8.016 0 4.406-3.608 8.016-8.016 8.016S3.984 16.407 3.984 12 7.593 3.984 12 3.984m0-2C6.478 1.984 1.984 6.477 1.984 12c0 5.521 4.493 10.016 10.016 10.016S22.016 17.522 22.016 12c0-5.523-4.495-10.016-10.016-10.016zm0 2'/%3E%3Cpath fill='%23C71612' d='m13.406 12 2.578 2.578-1.406 1.406L12 13.406l-2.578 2.578-1.406-1.406L10.594 12 8.016 9.421l1.406-1.405L12 10.593l2.578-2.577 1.406 1.405L13.406 12z'/%3E%3C/svg%3E\") 50%/cover no-repeat;content:\"\";display:block;height:30px;margin-right:20px;min-width:30px;width:30px}.top-right[data-notification-status=success][data-v-7d5b2f10]{background-color:#66bb6a}.top-right[data-notification-status=success][data-v-7d5b2f10]:before{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='%233A813D' d='M12 3.984c4.407 0 8.016 3.609 8.016 8.016 0 4.406-3.608 8.016-8.016 8.016S3.984 16.407 3.984 12 7.593 3.984 12 3.984m0-2C6.478 1.984 1.984 6.477 1.984 12c0 5.521 4.493 10.016 10.016 10.016S22.016 17.522 22.016 12c0-5.523-4.495-10.016-10.016-10.016zm0 2'/%3E%3Cpath fill='%233A813D' d='m10.477 13.136 5.085-5.085 1.406 1.406-6.492 6.492-3.446-3.445 1.406-1.406 2.041 2.038z'/%3E%3C/svg%3E\") 50%/cover no-repeat;content:\"\";display:block;height:30px;margin-right:20px;min-width:30px;width:30px}.top-right[data-notification-status=question][data-v-7d5b2f10]{background-color:#8d6e63}.top-right[data-notification-status=question][data-v-7d5b2f10]:before{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='%23513F39' d='M12 3.984c4.407 0 8.016 3.609 8.016 8.016 0 4.406-3.608 8.016-8.016 8.016S3.984 16.407 3.984 12 7.593 3.984 12 3.984m0-2C6.478 1.984 1.984 6.477 1.984 12c0 5.521 4.493 10.016 10.016 10.016S22.016 17.522 22.016 12c0-5.523-4.495-10.016-10.016-10.016zm0 2'/%3E%3Cpath fill='%23513F39' d='M12.001 6.314h-.002A3.606 3.606 0 0 0 8.39 9.923h1.784c0-.977.85-1.784 1.826-1.784.977 0 1.827.807 1.827 1.784 0 1.826-2.718 1.614-2.718 4.544h1.784c0-2.038 2.717-2.294 2.717-4.544a3.607 3.607 0 0 0-3.609-3.609zm-.892 10.872h1.784V15.36h-1.784v1.826z'/%3E%3C/svg%3E\") 50%/cover no-repeat;content:\"\";display:block;height:30px;margin-right:20px;min-width:30px;width:30px}.top-right[data-notification-status=plain][data-v-7d5b2f10]{background-color:#333}.bottom-right[data-v-7d5b2f10]{align-items:center;bottom:0;box-shadow:0 0 15px 0 rgba(0,0,0,.35);color:#fff;display:flex;line-height:1.3;margin:20px;max-width:350px;padding:20px;position:fixed;right:0;transform:translateX(420px);z-index:1000}@keyframes slide-in-right-7d5b2f10{to{transform:translateX(0)}}.bottom-right.do-show[data-v-7d5b2f10]{animation:slide-in-right-7d5b2f10 1s ease-in-out forwards,slide-in-right-7d5b2f10 1s ease-in-out 3s reverse forwards}.bottom-right[data-notification-status=notice][data-v-7d5b2f10]{background-color:#29b6f6}.bottom-right[data-notification-status=notice][data-v-7d5b2f10]:before{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='%23077CB2' d='M12 3.984c4.407 0 8.016 3.609 8.016 8.016 0 4.406-3.608 8.016-8.016 8.016S3.984 16.407 3.984 12 7.593 3.984 12 3.984m0-2C6.478 1.984 1.984 6.477 1.984 12c0 5.521 4.493 10.016 10.016 10.016S22.016 17.522 22.016 12c0-5.523-4.495-10.016-10.016-10.016zm0 2'/%3E%3Cpath fill='%23077CB2' d='M11.016 6.984V9h1.968V6.984h-1.968zm0 10.032h1.968v-6h-1.968v6z'/%3E%3C/svg%3E\") 50%/cover no-repeat;content:\"\";display:block;height:30px;margin-right:20px;min-width:30px;width:30px}.bottom-right[data-notification-status=warning][data-v-7d5b2f10]{background-color:#ffca28}.bottom-right[data-notification-status=warning][data-v-7d5b2f10]:before{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='%23C19100' d='M12 3.984c4.407 0 8.016 3.609 8.016 8.016 0 4.406-3.608 8.016-8.016 8.016S3.984 16.407 3.984 12 7.593 3.984 12 3.984m0-2C6.478 1.984 1.984 6.477 1.984 12c0 5.521 4.493 10.016 10.016 10.016S22.016 17.522 22.016 12c0-5.523-4.495-10.016-10.016-10.016zm0 2'/%3E%3Cpath fill='%23C19100' d='M11.016 17.016h1.968V15h-1.968v2.016zm0-10.033v6.001h1.968V6.983h-1.968z'/%3E%3C/svg%3E\") 50%/cover no-repeat;content:\"\";display:block;height:30px;margin-right:20px;min-width:30px;width:30px}.bottom-right[data-notification-status=error][data-v-7d5b2f10]{background-color:#ef5350}.bottom-right[data-notification-status=error][data-v-7d5b2f10]:before{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='%23C71612' d='M12 3.984c4.407 0 8.016 3.609 8.016 8.016 0 4.406-3.608 8.016-8.016 8.016S3.984 16.407 3.984 12 7.593 3.984 12 3.984m0-2C6.478 1.984 1.984 6.477 1.984 12c0 5.521 4.493 10.016 10.016 10.016S22.016 17.522 22.016 12c0-5.523-4.495-10.016-10.016-10.016zm0 2'/%3E%3Cpath fill='%23C71612' d='m13.406 12 2.578 2.578-1.406 1.406L12 13.406l-2.578 2.578-1.406-1.406L10.594 12 8.016 9.421l1.406-1.405L12 10.593l2.578-2.577 1.406 1.405L13.406 12z'/%3E%3C/svg%3E\") 50%/cover no-repeat;content:\"\";display:block;height:30px;margin-right:20px;min-width:30px;width:30px}.bottom-right[data-notification-status=success][data-v-7d5b2f10]{background-color:#66bb6a}.bottom-right[data-notification-status=success][data-v-7d5b2f10]:before{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='%233A813D' d='M12 3.984c4.407 0 8.016 3.609 8.016 8.016 0 4.406-3.608 8.016-8.016 8.016S3.984 16.407 3.984 12 7.593 3.984 12 3.984m0-2C6.478 1.984 1.984 6.477 1.984 12c0 5.521 4.493 10.016 10.016 10.016S22.016 17.522 22.016 12c0-5.523-4.495-10.016-10.016-10.016zm0 2'/%3E%3Cpath fill='%233A813D' d='m10.477 13.136 5.085-5.085 1.406 1.406-6.492 6.492-3.446-3.445 1.406-1.406 2.041 2.038z'/%3E%3C/svg%3E\") 50%/cover no-repeat;content:\"\";display:block;height:30px;margin-right:20px;min-width:30px;width:30px}.bottom-right[data-notification-status=question][data-v-7d5b2f10]{background-color:#8d6e63}.bottom-right[data-notification-status=question][data-v-7d5b2f10]:before{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='%23513F39' d='M12 3.984c4.407 0 8.016 3.609 8.016 8.016 0 4.406-3.608 8.016-8.016 8.016S3.984 16.407 3.984 12 7.593 3.984 12 3.984m0-2C6.478 1.984 1.984 6.477 1.984 12c0 5.521 4.493 10.016 10.016 10.016S22.016 17.522 22.016 12c0-5.523-4.495-10.016-10.016-10.016zm0 2'/%3E%3Cpath fill='%23513F39' d='M12.001 6.314h-.002A3.606 3.606 0 0 0 8.39 9.923h1.784c0-.977.85-1.784 1.826-1.784.977 0 1.827.807 1.827 1.784 0 1.826-2.718 1.614-2.718 4.544h1.784c0-2.038 2.717-2.294 2.717-4.544a3.607 3.607 0 0 0-3.609-3.609zm-.892 10.872h1.784V15.36h-1.784v1.826z'/%3E%3C/svg%3E\") 50%/cover no-repeat;content:\"\";display:block;height:30px;margin-right:20px;min-width:30px;width:30px}.bottom-right[data-notification-status=plain][data-v-7d5b2f10]{background-color:#333}.bottom-left[data-v-7d5b2f10]{align-items:center;bottom:0;box-shadow:0 0 15px 0 rgba(0,0,0,.35);color:#fff;display:flex;left:0;line-height:1.3;margin:20px;max-width:350px;padding:20px;position:fixed;z-index:1000}.bottom-left.do-show[data-v-7d5b2f10]{animation:fade-in 1s ease-in-out forwards,fade-in 1s ease-in-out 3s reverse forwards}.bottom-left[data-notification-status=notice][data-v-7d5b2f10]{background-color:#29b6f6}.bottom-left[data-notification-status=notice][data-v-7d5b2f10]:before{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='%23077CB2' d='M12 3.984c4.407 0 8.016 3.609 8.016 8.016 0 4.406-3.608 8.016-8.016 8.016S3.984 16.407 3.984 12 7.593 3.984 12 3.984m0-2C6.478 1.984 1.984 6.477 1.984 12c0 5.521 4.493 10.016 10.016 10.016S22.016 17.522 22.016 12c0-5.523-4.495-10.016-10.016-10.016zm0 2'/%3E%3Cpath fill='%23077CB2' d='M11.016 6.984V9h1.968V6.984h-1.968zm0 10.032h1.968v-6h-1.968v6z'/%3E%3C/svg%3E\") 50%/cover no-repeat;content:\"\";display:block;height:30px;margin-right:20px;min-width:30px;width:30px}.bottom-left[data-notification-status=warning][data-v-7d5b2f10]{background-color:#ffca28}.bottom-left[data-notification-status=warning][data-v-7d5b2f10]:before{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='%23C19100' d='M12 3.984c4.407 0 8.016 3.609 8.016 8.016 0 4.406-3.608 8.016-8.016 8.016S3.984 16.407 3.984 12 7.593 3.984 12 3.984m0-2C6.478 1.984 1.984 6.477 1.984 12c0 5.521 4.493 10.016 10.016 10.016S22.016 17.522 22.016 12c0-5.523-4.495-10.016-10.016-10.016zm0 2'/%3E%3Cpath fill='%23C19100' d='M11.016 17.016h1.968V15h-1.968v2.016zm0-10.033v6.001h1.968V6.983h-1.968z'/%3E%3C/svg%3E\") 50%/cover no-repeat;content:\"\";display:block;height:30px;margin-right:20px;min-width:30px;width:30px}.bottom-left[data-notification-status=error][data-v-7d5b2f10]{background-color:#ef5350}.bottom-left[data-notification-status=error][data-v-7d5b2f10]:before{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='%23C71612' d='M12 3.984c4.407 0 8.016 3.609 8.016 8.016 0 4.406-3.608 8.016-8.016 8.016S3.984 16.407 3.984 12 7.593 3.984 12 3.984m0-2C6.478 1.984 1.984 6.477 1.984 12c0 5.521 4.493 10.016 10.016 10.016S22.016 17.522 22.016 12c0-5.523-4.495-10.016-10.016-10.016zm0 2'/%3E%3Cpath fill='%23C71612' d='m13.406 12 2.578 2.578-1.406 1.406L12 13.406l-2.578 2.578-1.406-1.406L10.594 12 8.016 9.421l1.406-1.405L12 10.593l2.578-2.577 1.406 1.405L13.406 12z'/%3E%3C/svg%3E\") 50%/cover no-repeat;content:\"\";display:block;height:30px;margin-right:20px;min-width:30px;width:30px}.bottom-left[data-notification-status=success][data-v-7d5b2f10]{background-color:#66bb6a}.bottom-left[data-notification-status=success][data-v-7d5b2f10]:before{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='%233A813D' d='M12 3.984c4.407 0 8.016 3.609 8.016 8.016 0 4.406-3.608 8.016-8.016 8.016S3.984 16.407 3.984 12 7.593 3.984 12 3.984m0-2C6.478 1.984 1.984 6.477 1.984 12c0 5.521 4.493 10.016 10.016 10.016S22.016 17.522 22.016 12c0-5.523-4.495-10.016-10.016-10.016zm0 2'/%3E%3Cpath fill='%233A813D' d='m10.477 13.136 5.085-5.085 1.406 1.406-6.492 6.492-3.446-3.445 1.406-1.406 2.041 2.038z'/%3E%3C/svg%3E\") 50%/cover no-repeat;content:\"\";display:block;height:30px;margin-right:20px;min-width:30px;width:30px}.bottom-left[data-notification-status=question][data-v-7d5b2f10]{background-color:#8d6e63}.bottom-left[data-notification-status=question][data-v-7d5b2f10]:before{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='%23513F39' d='M12 3.984c4.407 0 8.016 3.609 8.016 8.016 0 4.406-3.608 8.016-8.016 8.016S3.984 16.407 3.984 12 7.593 3.984 12 3.984m0-2C6.478 1.984 1.984 6.477 1.984 12c0 5.521 4.493 10.016 10.016 10.016S22.016 17.522 22.016 12c0-5.523-4.495-10.016-10.016-10.016zm0 2'/%3E%3Cpath fill='%23513F39' d='M12.001 6.314h-.002A3.606 3.606 0 0 0 8.39 9.923h1.784c0-.977.85-1.784 1.826-1.784.977 0 1.827.807 1.827 1.784 0 1.826-2.718 1.614-2.718 4.544h1.784c0-2.038 2.717-2.294 2.717-4.544a3.607 3.607 0 0 0-3.609-3.609zm-.892 10.872h1.784V15.36h-1.784v1.826z'/%3E%3C/svg%3E\") 50%/cover no-repeat;content:\"\";display:block;height:30px;margin-right:20px;min-width:30px;width:30px}.bottom-left[data-notification-status=plain][data-v-7d5b2f10]{background-color:#333}.bar-top[data-v-7d5b2f10]{align-items:center;box-shadow:0 0 15px 0 rgba(0,0,0,.35);color:#fff;display:flex;left:0;line-height:1.3;padding:20px;position:fixed;right:0;top:0;transform:translateY(-100%);width:100%;z-index:1000}.bar-top.do-show[data-v-7d5b2f10]{animation:slide-show 1s forwards,slide-show 1s 3s reverse forwards}.bar-top[data-notification-status=notice][data-v-7d5b2f10]{background-color:#29b6f6}.bar-top[data-notification-status=notice][data-v-7d5b2f10]:before{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='%23077CB2' d='M12 3.984c4.407 0 8.016 3.609 8.016 8.016 0 4.406-3.608 8.016-8.016 8.016S3.984 16.407 3.984 12 7.593 3.984 12 3.984m0-2C6.478 1.984 1.984 6.477 1.984 12c0 5.521 4.493 10.016 10.016 10.016S22.016 17.522 22.016 12c0-5.523-4.495-10.016-10.016-10.016zm0 2'/%3E%3Cpath fill='%23077CB2' d='M11.016 6.984V9h1.968V6.984h-1.968zm0 10.032h1.968v-6h-1.968v6z'/%3E%3C/svg%3E\") 50%/cover no-repeat;content:\"\";display:block;height:30px;margin-right:20px;min-width:30px;width:30px}.bar-top[data-notification-status=warning][data-v-7d5b2f10]{background-color:#ffca28}.bar-top[data-notification-status=warning][data-v-7d5b2f10]:before{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='%23C19100' d='M12 3.984c4.407 0 8.016 3.609 8.016 8.016 0 4.406-3.608 8.016-8.016 8.016S3.984 16.407 3.984 12 7.593 3.984 12 3.984m0-2C6.478 1.984 1.984 6.477 1.984 12c0 5.521 4.493 10.016 10.016 10.016S22.016 17.522 22.016 12c0-5.523-4.495-10.016-10.016-10.016zm0 2'/%3E%3Cpath fill='%23C19100' d='M11.016 17.016h1.968V15h-1.968v2.016zm0-10.033v6.001h1.968V6.983h-1.968z'/%3E%3C/svg%3E\") 50%/cover no-repeat;content:\"\";display:block;height:30px;margin-right:20px;min-width:30px;width:30px}.bar-top[data-notification-status=error][data-v-7d5b2f10]{background-color:#ef5350}.bar-top[data-notification-status=error][data-v-7d5b2f10]:before{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='%23C71612' d='M12 3.984c4.407 0 8.016 3.609 8.016 8.016 0 4.406-3.608 8.016-8.016 8.016S3.984 16.407 3.984 12 7.593 3.984 12 3.984m0-2C6.478 1.984 1.984 6.477 1.984 12c0 5.521 4.493 10.016 10.016 10.016S22.016 17.522 22.016 12c0-5.523-4.495-10.016-10.016-10.016zm0 2'/%3E%3Cpath fill='%23C71612' d='m13.406 12 2.578 2.578-1.406 1.406L12 13.406l-2.578 2.578-1.406-1.406L10.594 12 8.016 9.421l1.406-1.405L12 10.593l2.578-2.577 1.406 1.405L13.406 12z'/%3E%3C/svg%3E\") 50%/cover no-repeat;content:\"\";display:block;height:30px;margin-right:20px;min-width:30px;width:30px}.bar-top[data-notification-status=success][data-v-7d5b2f10]{background-color:#66bb6a}.bar-top[data-notification-status=success][data-v-7d5b2f10]:before{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='%233A813D' d='M12 3.984c4.407 0 8.016 3.609 8.016 8.016 0 4.406-3.608 8.016-8.016 8.016S3.984 16.407 3.984 12 7.593 3.984 12 3.984m0-2C6.478 1.984 1.984 6.477 1.984 12c0 5.521 4.493 10.016 10.016 10.016S22.016 17.522 22.016 12c0-5.523-4.495-10.016-10.016-10.016zm0 2'/%3E%3Cpath fill='%233A813D' d='m10.477 13.136 5.085-5.085 1.406 1.406-6.492 6.492-3.446-3.445 1.406-1.406 2.041 2.038z'/%3E%3C/svg%3E\") 50%/cover no-repeat;content:\"\";display:block;height:30px;margin-right:20px;min-width:30px;width:30px}.bar-top[data-notification-status=question][data-v-7d5b2f10]{background-color:#8d6e63}.bar-top[data-notification-status=question][data-v-7d5b2f10]:before{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='%23513F39' d='M12 3.984c4.407 0 8.016 3.609 8.016 8.016 0 4.406-3.608 8.016-8.016 8.016S3.984 16.407 3.984 12 7.593 3.984 12 3.984m0-2C6.478 1.984 1.984 6.477 1.984 12c0 5.521 4.493 10.016 10.016 10.016S22.016 17.522 22.016 12c0-5.523-4.495-10.016-10.016-10.016zm0 2'/%3E%3Cpath fill='%23513F39' d='M12.001 6.314h-.002A3.606 3.606 0 0 0 8.39 9.923h1.784c0-.977.85-1.784 1.826-1.784.977 0 1.827.807 1.827 1.784 0 1.826-2.718 1.614-2.718 4.544h1.784c0-2.038 2.717-2.294 2.717-4.544a3.607 3.607 0 0 0-3.609-3.609zm-.892 10.872h1.784V15.36h-1.784v1.826z'/%3E%3C/svg%3E\") 50%/cover no-repeat;content:\"\";display:block;height:30px;margin-right:20px;min-width:30px;width:30px}.bar-top[data-notification-status=plain][data-v-7d5b2f10]{background-color:#333}.bar-bottom[data-v-7d5b2f10]{align-items:center;bottom:0;box-shadow:0 0 15px 0 rgba(0,0,0,.35);color:#fff;display:flex;left:0;line-height:1.3;padding:20px;position:fixed;right:0;width:100%;z-index:1000}.bar-bottom.do-show[data-v-7d5b2f10]{animation:fade-in 1s ease-in-out forwards,fade-in 1s ease-in-out 3s reverse forwards}.bar-bottom[data-notification-status=notice][data-v-7d5b2f10]{background-color:#29b6f6}.bar-bottom[data-notification-status=notice][data-v-7d5b2f10]:before{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='%23077CB2' d='M12 3.984c4.407 0 8.016 3.609 8.016 8.016 0 4.406-3.608 8.016-8.016 8.016S3.984 16.407 3.984 12 7.593 3.984 12 3.984m0-2C6.478 1.984 1.984 6.477 1.984 12c0 5.521 4.493 10.016 10.016 10.016S22.016 17.522 22.016 12c0-5.523-4.495-10.016-10.016-10.016zm0 2'/%3E%3Cpath fill='%23077CB2' d='M11.016 6.984V9h1.968V6.984h-1.968zm0 10.032h1.968v-6h-1.968v6z'/%3E%3C/svg%3E\") 50%/cover no-repeat;content:\"\";display:block;height:30px;margin-right:20px;min-width:30px;width:30px}.bar-bottom[data-notification-status=warning][data-v-7d5b2f10]{background-color:#ffca28}.bar-bottom[data-notification-status=warning][data-v-7d5b2f10]:before{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='%23C19100' d='M12 3.984c4.407 0 8.016 3.609 8.016 8.016 0 4.406-3.608 8.016-8.016 8.016S3.984 16.407 3.984 12 7.593 3.984 12 3.984m0-2C6.478 1.984 1.984 6.477 1.984 12c0 5.521 4.493 10.016 10.016 10.016S22.016 17.522 22.016 12c0-5.523-4.495-10.016-10.016-10.016zm0 2'/%3E%3Cpath fill='%23C19100' d='M11.016 17.016h1.968V15h-1.968v2.016zm0-10.033v6.001h1.968V6.983h-1.968z'/%3E%3C/svg%3E\") 50%/cover no-repeat;content:\"\";display:block;height:30px;margin-right:20px;min-width:30px;width:30px}.bar-bottom[data-notification-status=error][data-v-7d5b2f10]{background-color:#ef5350}.bar-bottom[data-notification-status=error][data-v-7d5b2f10]:before{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='%23C71612' d='M12 3.984c4.407 0 8.016 3.609 8.016 8.016 0 4.406-3.608 8.016-8.016 8.016S3.984 16.407 3.984 12 7.593 3.984 12 3.984m0-2C6.478 1.984 1.984 6.477 1.984 12c0 5.521 4.493 10.016 10.016 10.016S22.016 17.522 22.016 12c0-5.523-4.495-10.016-10.016-10.016zm0 2'/%3E%3Cpath fill='%23C71612' d='m13.406 12 2.578 2.578-1.406 1.406L12 13.406l-2.578 2.578-1.406-1.406L10.594 12 8.016 9.421l1.406-1.405L12 10.593l2.578-2.577 1.406 1.405L13.406 12z'/%3E%3C/svg%3E\") 50%/cover no-repeat;content:\"\";display:block;height:30px;margin-right:20px;min-width:30px;width:30px}.bar-bottom[data-notification-status=success][data-v-7d5b2f10]{background-color:#66bb6a}.bar-bottom[data-notification-status=success][data-v-7d5b2f10]:before{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='%233A813D' d='M12 3.984c4.407 0 8.016 3.609 8.016 8.016 0 4.406-3.608 8.016-8.016 8.016S3.984 16.407 3.984 12 7.593 3.984 12 3.984m0-2C6.478 1.984 1.984 6.477 1.984 12c0 5.521 4.493 10.016 10.016 10.016S22.016 17.522 22.016 12c0-5.523-4.495-10.016-10.016-10.016zm0 2'/%3E%3Cpath fill='%233A813D' d='m10.477 13.136 5.085-5.085 1.406 1.406-6.492 6.492-3.446-3.445 1.406-1.406 2.041 2.038z'/%3E%3C/svg%3E\") 50%/cover no-repeat;content:\"\";display:block;height:30px;margin-right:20px;min-width:30px;width:30px}.bar-bottom[data-notification-status=question][data-v-7d5b2f10]{background-color:#8d6e63}.bar-bottom[data-notification-status=question][data-v-7d5b2f10]:before{background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='%23513F39' d='M12 3.984c4.407 0 8.016 3.609 8.016 8.016 0 4.406-3.608 8.016-8.016 8.016S3.984 16.407 3.984 12 7.593 3.984 12 3.984m0-2C6.478 1.984 1.984 6.477 1.984 12c0 5.521 4.493 10.016 10.016 10.016S22.016 17.522 22.016 12c0-5.523-4.495-10.016-10.016-10.016zm0 2'/%3E%3Cpath fill='%23513F39' d='M12.001 6.314h-.002A3.606 3.606 0 0 0 8.39 9.923h1.784c0-.977.85-1.784 1.826-1.784.977 0 1.827.807 1.827 1.784 0 1.826-2.718 1.614-2.718 4.544h1.784c0-2.038 2.717-2.294 2.717-4.544a3.607 3.607 0 0 0-3.609-3.609zm-.892 10.872h1.784V15.36h-1.784v1.826z'/%3E%3C/svg%3E\") 50%/cover no-repeat;content:\"\";display:block;height:30px;margin-right:20px;min-width:30px;width:30px}.bar-bottom[data-notification-status=plain][data-v-7d5b2f10]{background-color:#333}",
          "",
        ]),
        (o.locals = {}),
        (e.exports = o);
    },
    function (e, t, r) {
      "use strict";
      r(276);
    },
    function (e, t, r) {
      var o = r(41)(function (i) {
        return i[1];
      });
      o.push([
        e.i,
        ".ie_block[data-v-cfae6e7c]{align-items:center;background:#aaa;border-radius:20px;color:#111;display:flex;flex-direction:column;font-size:25px;justify-content:center;margin:0 auto;padding:15px;text-align:center;width:50%}.ie_block>div[data-v-cfae6e7c]{color:#333;display:flex;font-weight:700;margin-top:20px}.ie_block a[data-v-cfae6e7c]:hover{color:#0ab}.ie_block img[data-v-cfae6e7c]{height:30px;margin-right:15px;width:30px}",
        "",
      ]),
        (o.locals = {}),
        (e.exports = o);
    },
    function (e, t, r) {
      "use strict";
      r(277);
    },
    function (e, t, r) {
      var o = r(41)(function (i) {
        return i[1];
      });
      o.push([
        e.i,
        ".technocal-work{background:hsla(0,0%,100%,.95);color:#000;display:block;height:100%;left:0;padding-top:100px;position:absolute;top:0;width:100%;z-index:1000}.technocal-work .four{color:#000}",
        "",
      ]),
        (o.locals = {}),
        (e.exports = o);
    },
    function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "strict", function () {
          return o;
        });
      var o = !1;
    },
    function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "state", function () {
          return n;
        }),
        r.d(t, "getters", function () {
          return c;
        }),
        r.d(t, "mutations", function () {
          return l;
        }),
        r.d(t, "actions", function () {
          return d;
        });
      var o = r(0),
        n =
          (r(10),
          r(6),
          r(31),
          function () {
            return { data: !1, load: !0, block: !1 };
          }),
        c = {
          data: function (e) {
            return e.data;
          },
          load: function (e) {
            return e.load;
          },
          block: function (e) {
            return e.block;
          },
        },
        l = {
          data: function (e, t) {
            return (e.data = t);
          },
          load: function (e, t) {
            return (e.load = t);
          },
          block: function (e, t) {
            return (e.block = t);
          },
        },
        d = {
          getList: function (e) {
            var t = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function r() {
                var o, n;
                return regeneratorRuntime.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (o = e.commit)("load", !1),
                          (r.next = 4),
                          t.app.$rest
                            .api("GET:user/auth/api/get/list")
                            .then(function (e) {
                              return e.data;
                            })
                            .catch(function () {
                              return null;
                            })
                        );
                      case 4:
                        (n = r.sent), o("load", !0), n && o("data", n.keys);
                      case 7:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
          create: function (e, t) {
            var r = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function o() {
                var n, c, l;
                return regeneratorRuntime.wrap(function (o) {
                  for (;;)
                    switch ((o.prev = o.next)) {
                      case 0:
                        return (
                          (n = e.commit),
                          (c = e.dispatch),
                          n("load", !1),
                          (o.next = 4),
                          r.app.$rest
                            .api("POST:user/auth/api/create", { name: t })
                            .then(function (e) {
                              return e.data;
                            })
                            .catch(function (e) {
                              return (
                                c(
                                  "notify/add",
                                  { type: "error", message: e.message },
                                  { root: !0 }
                                ),
                                null
                              );
                            })
                        );
                      case 4:
                        if (((l = o.sent), n("load", !0), !l)) {
                          o.next = 9;
                          break;
                        }
                        return (
                          n("block", l.access), o.abrupt("return", c("getList"))
                        );
                      case 9:
                        return o.abrupt("return", !1);
                      case 10:
                      case "end":
                        return o.stop();
                    }
                }, o);
              })
            )();
          },
          remove: function (e, t) {
            var r = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function o() {
                var n, c, l;
                return regeneratorRuntime.wrap(function (o) {
                  for (;;)
                    switch ((o.prev = o.next)) {
                      case 0:
                        return (
                          (n = e.commit),
                          (c = e.dispatch),
                          n("load", !1),
                          (o.next = 4),
                          r.app.$rest
                            .api("DELETE:user/auth/api/delete", { apiKey: t })
                            .then(function (e) {
                              return e.data;
                            })
                            .catch(function (e) {
                              return (
                                c(
                                  "notify/add",
                                  { type: "error", message: e.message },
                                  { root: !0 }
                                ),
                                null
                              );
                            })
                        );
                      case 4:
                        if (((l = o.sent), n("load", !0), !l)) {
                          o.next = 8;
                          break;
                        }
                        return o.abrupt("return", c("getList"));
                      case 8:
                        return o.abrupt("return", !0);
                      case 9:
                      case "end":
                        return o.stop();
                    }
                }, o);
              })
            )();
          },
        };
    },
    function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "state", function () {
          return n;
        }),
        r.d(t, "mutations", function () {
          return c;
        }),
        r.d(t, "actions", function () {
          return l;
        }),
        r.d(t, "getters", function () {
          return d;
        });
      var o = r(0),
        n =
          (r(10),
          function () {
            return { info: [], load: !1, errorData: "" };
          }),
        c = {
          changeData: function (e, data) {
            e.info = data;
          },
          changeError: function (e, t) {
            e.error = t;
          },
          changeLoad: function (e, t) {
            e.load = t;
          },
        },
        l = {
          getContacts: function (e, t) {
            var r = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function o() {
                var n, c, l;
                return regeneratorRuntime.wrap(function (o) {
                  for (;;)
                    switch ((o.prev = o.next)) {
                      case 0:
                        return (
                          (n = e.commit),
                          (c = e.dispatch),
                          n("changeLoad", !1),
                          (o.next = 4),
                          r.app.$rest
                            .api("GET:public/contacts/list", { lang: t })
                            .then(function (e) {
                              return e.data;
                            })
                            .catch(function (e) {
                              return (
                                c(
                                  "notify/add",
                                  { type: "error", message: e.message },
                                  { root: !0 }
                                ),
                                null
                              );
                            })
                        );
                      case 4:
                        (l = o.sent),
                          n("changeLoad", !0),
                          l && n("changeData", l.contacts);
                      case 7:
                      case "end":
                        return o.stop();
                    }
                }, o);
              })
            )();
          },
        },
        d = {
          getData: function (e) {
            return e.info;
          },
          getLoad: function (e) {
            return e.load;
          },
          getError: function (e) {
            return e.errorData;
          },
        };
    },
    function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, "state", function () {
          return state;
        }),
        __webpack_require__.d(__webpack_exports__, "getters", function () {
          return getters;
        }),
        __webpack_require__.d(__webpack_exports__, "mutations", function () {
          return mutations;
        }),
        __webpack_require__.d(__webpack_exports__, "actions", function () {
          return actions;
        });
      var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(0),
        regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(10),
        regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default =
          __webpack_require__.n(
            regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__
          ),
        core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(28),
        core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2___default =
          __webpack_require__.n(
            core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__
          ),
        core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(15),
        core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default =
          __webpack_require__.n(
            core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__
          ),
        core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(6),
        core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default =
          __webpack_require__.n(
            core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__
          ),
        core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(40),
        core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5___default =
          __webpack_require__.n(
            core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__
          ),
        core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(112),
        core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6___default =
          __webpack_require__.n(
            core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__
          ),
        core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(25),
        core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default =
          __webpack_require__.n(
            core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__
          ),
        core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(11),
        core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8___default =
          __webpack_require__.n(
            core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8__
          ),
        core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(76),
        core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_9___default =
          __webpack_require__.n(
            core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_9__
          ),
        core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(134),
        core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_10___default =
          __webpack_require__.n(
            core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_10__
          ),
        _plugins_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(22),
        bignumber_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(156),
        bignumber_js__WEBPACK_IMPORTED_MODULE_12___default =
          __webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_12__),
        state = function () {
          return {
            apiRequests: {
              getOrder: Object(
                _plugins_utils__WEBPACK_IMPORTED_MODULE_11__.a
              )(),
              getRoutes: Object(
                _plugins_utils__WEBPACK_IMPORTED_MODULE_11__.a
              )(),
            },
            info: null,
            load: !0,
            errorData: "",
            order: {},
            verificationsStatus: {},
            favoriteRates: [],
          };
        },
        getters = {
          getRequestState: _plugins_utils__WEBPACK_IMPORTED_MODULE_11__.b,
          info: function (e) {
            return e.info;
          },
          load: function (e) {
            return e.load;
          },
          errorData: function (e) {
            return e.errorData;
          },
          favoriteRates: function (e) {
            return e.favoriteRates;
          },
          order: function (e) {
            return e.order;
          },
          verificationsStatus: function (e) {
            return e.verificationsStatus;
          },
        },
        mutations = {
          setRequestState: _plugins_utils__WEBPACK_IMPORTED_MODULE_11__.d,
          info: function (e, data) {
            return (e.info = data);
          },
          errorData: function (e, t) {
            return (e.errorData = t);
          },
          load: function (e, t) {
            return (e.load = t);
          },
          favoriteRates: function (e, data) {
            return (e.favoriteRates = data);
          },
          order: function (e, data) {
            return (e.order = data);
          },
          verificationsStatus: function (e, t) {
            return (e.verificationsStatus = t);
          },
        };
      function divideStringByFirstSpace(e) {
        var t = e.indexOf(" ");
        return -1 === t ? [e, ""] : [e.slice(0, t), e.slice(t + 1)];
      }
      var actions = {
        routes: function (e) {
          var t = this;
          return Object(
            _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.a
          )(
            regeneratorRuntime.mark(function r() {
              var o, n, c, l, d, m;
              return regeneratorRuntime.wrap(function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      if (
                        ((o = e.commit),
                        (n = e.dispatch),
                        !e.state.apiRequests.getRoutes.isPending)
                      ) {
                        r.next = 4;
                        break;
                      }
                      return (
                        console.log("Routes already loading..."),
                        r.abrupt("return")
                      );
                    case 4:
                      return (
                        o("setRequestState", { getRoutes: "pending" }),
                        o("load", !1),
                        (c = "GET:public/exchanger/route/get"),
                        t.app.$rest.config.newRouteV2Method &&
                          (c = "GET:public/exchanger/route-v2/get"),
                        console.time("routes-store"),
                        (r.next = 10),
                        t.app.$rest
                          .api(c)
                          .then(function (e) {
                            return e.data;
                          })
                          .catch(function (e) {
                            return (
                              o("setRequestState", { getRoutes: "rejected" }),
                              n(
                                "notify/add",
                                {
                                  type: "plain",
                                  message: e.message,
                                  code: e.errorCode,
                                },
                                { root: !0 }
                              )
                            );
                          })
                      );
                    case 10:
                      if (
                        ((l = r.sent),
                        o("load", !0),
                        o("setRequestState", { getRoutes: "success" }),
                        !l || !t.app.$rest.config.newRouteV2Method)
                      ) {
                        r.next = 18;
                        break;
                      }
                      return (
                        (d = l.routes
                          .filter(function (element) {
                            return !0 === element.isShowWeb;
                          })
                          .map(function (e) {
                            var t = l.currencies[e.from];
                            if (t && t.isActive) {
                              var r = l.currencies[e.to];
                              if (r && r.isActive) {
                                var o = 0 === t.xml.indexOf("CASH"),
                                  n = 0 === r.xml.indexOf("CASH"),
                                  c = Number(
                                    e.reserveAmountAdditional + r.reserveAmount
                                  ),
                                  d = c < 1 ? 8 : c < 10 ? 4 : c < 100 ? 2 : 0;
                                return (
                                  (c =
                                    new bignumber_js__WEBPACK_IMPORTED_MODULE_12__.BigNumber(
                                      c
                                    )
                                      .decimalPlaces(d, 1)
                                      .toNumber()),
                                  {
                                    from: {
                                      name: o
                                        ? divideStringByFirstSpace(t.name)[0]
                                        : t.name,
                                      isCash: o,
                                      cityName: o
                                        ? divideStringByFirstSpace(t.name)[1]
                                        : "",
                                      positionIn: t.positionIn,
                                      symbol: t.symbol,
                                      xml: t.xml,
                                      image: {
                                        files: [
                                          { type: "small", url: t.image },
                                        ],
                                      },
                                    },
                                    to: {
                                      name: n
                                        ? divideStringByFirstSpace(r.name)[0]
                                        : r.name,
                                      cityName: n
                                        ? divideStringByFirstSpace(r.name)[1]
                                        : "",
                                      isCash: n,
                                      positionOut: r.positionOut,
                                      symbol: r.symbol,
                                      xml: r.xml,
                                      image: {
                                        files: [
                                          { type: "small", url: r.image },
                                        ],
                                      },
                                    },
                                    rate: { amount: c },
                                    seo: { friendlyURL: e.seoFriendlyURL },
                                    routeId: e.routeId,
                                    isShowWeb: e.isShowWeb,
                                  }
                                );
                              }
                            }
                          })
                          .filter(function (e) {
                            return e;
                          })),
                        o("info", d),
                        console.timeEnd("routes-store"),
                        r.abrupt("return", d)
                      );
                    case 18:
                      if (!l) {
                        r.next = 23;
                        break;
                      }
                      return (
                        (m = l.routes
                          .filter(function (element) {
                            return !0 === element.isShowWeb;
                          })
                          .map(function (e) {
                            var t = 0 === e.from.xml.indexOf("CASH"),
                              r = 0 === e.to.xml.indexOf("CASH"),
                              o = Number(e.rate.amount),
                              n = o < 1 ? 8 : o < 10 ? 4 : o < 100 ? 2 : 0;
                            return (
                              (o =
                                new bignumber_js__WEBPACK_IMPORTED_MODULE_12__.BigNumber(
                                  o
                                )
                                  .decimalPlaces(n, 1)
                                  .toNumber()),
                              {
                                from: {
                                  name: t
                                    ? divideStringByFirstSpace(e.from.name)[0]
                                    : e.from.name,
                                  isCash: t,
                                  cityName: t
                                    ? divideStringByFirstSpace(e.from.name)[1]
                                    : "",
                                  positionIn: e.from.positionIn,
                                  symbol: e.from.symbol,
                                  xml: e.from.xml,
                                  image: e.from.image,
                                },
                                to: {
                                  name: r
                                    ? divideStringByFirstSpace(e.to.name)[0]
                                    : e.to.name,
                                  cityName: r
                                    ? divideStringByFirstSpace(e.to.name)[1]
                                    : "",
                                  isCash: r,
                                  positionOut: e.to.positionOut,
                                  symbol: e.to.symbol,
                                  xml: e.to.xml,
                                  image: e.to.image,
                                },
                                rate: { amount: o },
                                seo: { friendlyURL: e.seo.friendlyURL },
                                routeId: e.routeId,
                                isShowWeb: e.isShowWeb,
                              }
                            );
                          })),
                        o("info", m),
                        console.timeEnd("routes-store"),
                        r.abrupt("return", m)
                      );
                    case 23:
                      return r.abrupt("return", null);
                    case 24:
                    case "end":
                      return r.stop();
                  }
              }, r);
            })
          )();
        },
        getBuyRouteCurrencyId: function (e, t) {
          var r = this;
          return Object(
            _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.a
          )(
            regeneratorRuntime.mark(function o() {
              var n, c;
              return regeneratorRuntime.wrap(function (o) {
                for (;;)
                  switch ((o.prev = o.next)) {
                    case 0:
                      return (
                        e.commit,
                        e.dispatch,
                        (n = t.id),
                        (o.next = 4),
                        r.app.$rest
                          .api("GET:public/exchanger/route/get", {
                            fromCurrencyId: n,
                          })
                          .catch(function (e) {
                            return (
                              (r.errorloadRouteGetOne = !0),
                              (r.loadRouteGetOne = !0),
                              Promise.reject(e)
                            );
                          })
                      );
                    case 4:
                      if (!(c = o.sent)) {
                        o.next = 7;
                        break;
                      }
                      return o.abrupt("return", c.data.routes);
                    case 7:
                      return o.abrupt("return", null);
                    case 8:
                    case "end":
                      return o.stop();
                  }
              }, o);
            })
          )();
        },
        getSellRouteCurrencyId: function (e, t) {
          var r = this;
          return Object(
            _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.a
          )(
            regeneratorRuntime.mark(function o() {
              var n, c;
              return regeneratorRuntime.wrap(function (o) {
                for (;;)
                  switch ((o.prev = o.next)) {
                    case 0:
                      return (
                        e.commit,
                        e.dispatch,
                        (n = t.id),
                        (o.next = 4),
                        r.app.$rest
                          .api("GET:public/exchanger/route/get", {
                            toCurrencyId: n,
                          })
                          .catch(function (e) {
                            return (
                              (r.errorloadRouteGetOne = !0),
                              (r.loadRouteGetOne = !0),
                              Promise.reject(e)
                            );
                          })
                      );
                    case 4:
                      if (!(c = o.sent)) {
                        o.next = 7;
                        break;
                      }
                      return o.abrupt("return", c.data.routes);
                    case 7:
                      return o.abrupt("return", null);
                    case 8:
                    case "end":
                      return o.stop();
                  }
              }, o);
            })
          )();
        },
        favRoutes: function (e) {
          var t = this;
          return Object(
            _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.a
          )(
            regeneratorRuntime.mark(function r() {
              var o, n, c;
              return regeneratorRuntime.wrap(function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      return (
                        (o = e.commit),
                        (n = e.dispatch),
                        o("load", !1),
                        (r.next = 4),
                        t.app.$rest
                          .api("GET:public/exchanger/favorite/get")
                          .then(function (e) {
                            return e.data;
                          })
                          .catch(function (e) {
                            return (
                              n(
                                "notify/add",
                                { type: "error", message: e.message },
                                { root: !0 }
                              ),
                              null
                            );
                          })
                      );
                    case 4:
                      (c = r.sent),
                        o("load", !0),
                        c && o("favoriteRates", c.rates);
                    case 7:
                    case "end":
                      return r.stop();
                  }
              }, r);
            })
          )();
        },
        createOrder: function (e, t) {
          var r = this;
          return Object(
            _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.a
          )(
            regeneratorRuntime.mark(function o() {
              var n, c, l, d, m, f, x, h, w, _, v, y, k, j, z, M;
              return regeneratorRuntime.wrap(function (o) {
                for (;;)
                  switch ((o.prev = o.next)) {
                    case 0:
                      return (
                        (n = e.commit),
                        (c = e.dispatch),
                        (l = t.routeId),
                        (d = t.fromValues),
                        (m = t.toValues),
                        (f = t.routeValues),
                        (x = t.email),
                        (h = t.captcha),
                        (w = t.agreement),
                        (_ = t.amount),
                        (v = t.lang),
                        (y = t.skipPreview),
                        (k = t.hideOutData),
                        (j = t.vuexActionV2),
                        n("load", !1),
                        (z = localStorage.getItem("partner")),
                        (o.next = 6),
                        r.app.$rest
                          .api("POST:public/exchanger/order/create", {
                            routeId: l,
                            fromValues: d,
                            toValues: m,
                            routeValues: f,
                            email: x,
                            captcha: h,
                            agreement: w,
                            amount: _,
                            skipPreview: y,
                            hideOutData: k,
                            lang: v,
                            partner: z || void 0,
                          })
                          .then(function (e) {

                            return e.data;
                          })
                          .catch(function (e) {
                            return j
                              ? (n("load", !0), Promise.reject(e))
                              : c(
                                  "notify/add",
                                  { type: "error", message: e.message },
                                  { root: !0 }
                                );
                          })
                      );
                    case 6:
                      if (((M = o.sent), n("load", !0), !M)) {
                        o.next = 10;
                        break;
                      }
                      return o.abrupt("return", M);
                    case 10:
                      return o.abrupt("return", !1);
                    case 11:
                    case "end":
                      return o.stop();
                  }
              }, o);
            })
          )();
        },
        getOrder: function getOrder(_ref9, _ref10) {
          var _this6 = this;
          return Object(
            _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.a
          )(
            regeneratorRuntime.mark(function _callee6() {
              var commit,
                dispatch,
                type,
                orderUID,
                orderSecret,
                vuexActionV2,
                disableLoaders,
                apiResult;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                for (;;)
                  switch ((_context6.prev = _context6.next)) {
                    case 0:
                      return (
                        (commit = _ref9.commit),
                        (dispatch = _ref9.dispatch),
                        (type = _ref10.type),
                        (orderUID = _ref10.orderUID),
                        (orderSecret = _ref10.orderSecret),
                        (vuexActionV2 = _ref10.vuexActionV2),
                        (disableLoaders = _ref10.disableLoaders),
                        disableLoaders ||
                          (commit("setRequestState", { getOrder: "pending" }),
                          commit("load", !1)),
                        (_context6.next = 5),
                        _this6.app.$rest
                          .api("GET:public/exchanger/order/get", {
                            type: type,
                            orderUID: orderUID,
                            orderSecret: orderSecret,
                          })
                          .then(function (e) {
                            window.location.reload();
                            return e.data;
                          })
                          .catch(function (e) {
                            return (
                              commit("setRequestState", {
                                getOrder: "rejected",
                              }),
                              vuexActionV2
                                ? (commit("load", !0), Promise.reject(e))
                                : (dispatch(
                                    "notify/add",
                                    { type: "error", message: e.message },
                                    { root: !0 }
                                  ),
                                  null)
                            );
                          })
                      );
                    case 5:
                      (apiResult = _context6.sent),
                        commit("load", !0),
                        apiResult &&
                          (commit("setRequestState", { getOrder: "success" }),
                          apiResult.order.route.from.paymentDetails &&
                            apiResult.order.route.from.paymentDetails
                              .merchant &&
                            apiResult.order.route.from.paymentDetails.merchant
                              .template &&
                            (apiResult.order.route.from.paymentDetails.merchant.template =
                              JSON.parse(
                                apiResult.order.route.from.paymentDetails
                                  .merchant.template,
                                function (key, value) {
                                  return "string" == typeof value &&
                                    value.startsWith("/Function(") &&
                                    value.endsWith(")/")
                                    ? ((value = value.substring(
                                        10,
                                        value.length - 2
                                      )),
                                      eval("( function " + value + ")"))
                                    : "type" === key
                                    ? eval(value)
                                    : value;
                                }
                              )),
                          commit(
                            "verificationsStatus",
                            apiResult.verifications || {}
                          ),
                          commit("order", apiResult.order));
                    case 8:
                    case "end":
                      return _context6.stop();
                  }
              }, _callee6);
            })
          )();
        },
        changeOrder: function (e, t) {
          var r = this;
          return Object(
            _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.a
          )(
            regeneratorRuntime.mark(function o() {
              var n, c, l, d, m;
              return regeneratorRuntime.wrap(function (o) {
                for (;;)
                  switch ((o.prev = o.next)) {
                    case 0:
                      return (
                        (n = e.commit),
                        (c = e.dispatch),
                        (l = t.orderUID),
                        (d = t.orderSecret),
                        (m = t.status),
                        n("load", !1),
                        (o.next = 5),
                        r.app.$rest
                          .api("PUT:public/exchanger/order/update-status", {
                            orderUID: l,
                            orderSecret: d,
                            status: m,
                          })
                          .then(function (e) {
                            return e.data;
                          })
                          .catch(function (e) {
                            return (
                              c(
                                "notify/add",
                                { type: "error", message: e.message },
                                { root: !0 }
                              ),
                              null
                            );
                          })
                      );
                    case 5:
                      c("getOrder", { orderSecret: d, orderUID: l });
                    case 6:
                    case "end":
                      return o.stop();
                  }
              }, o);
            })
          )();
        },
      };
    },
    function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "state", function () {
          return n;
        }),
        r.d(t, "getters", function () {
          return c;
        }),
        r.d(t, "mutations", function () {
          return l;
        }),
        r.d(t, "actions", function () {
          return d;
        });
      var o = r(0),
        n =
          (r(6),
          r(10),
          function () {
            return {
              partnerOrder: {},
              partnerRoutes: [],
              load: !0,
              errorData: "",
            };
          }),
        c = {
          getDataPartnerRoutes: function (e) {
            return e.partnerRoutes;
          },
          getLoad: function (e) {
            return e.load;
          },
          getErrorData: function (e) {
            return e.errorData;
          },
          getPartnerOrder: function (e) {
            return e.partnerOrder;
          },
        },
        l = {
          changePartnerRoutes: function (e, data) {
            return (e.partnerRoutes = data);
          },
          changePartnerOrder: function (e, data) {
            return (e.partnerOrder = data);
          },
          changeErrorData: function (e, t) {
            return (e.errorData = t);
          },
          changeLoad: function (e, t) {
            return (e.load = t);
          },
        },
        d = {
          getPartnerRoutes: function (e) {
            var t = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function r() {
                var o, n, c;
                return regeneratorRuntime.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (o = e.commit),
                          (n = e.dispatch),
                          o("changeLoad", !1),
                          (r.next = 4),
                          t.app.$rest
                            .api("GET:user/exchanger/partner-route/get")
                            .then(function (e) {
                              return e.data;
                            })
                            .catch(function (e) {
                              return n(
                                "notify/add",
                                {
                                  type: "plain",
                                  message: e.message,
                                  code: e.statusCode,
                                },
                                { root: !0 }
                              );
                            })
                        );
                      case 4:
                        (c = r.sent),
                          o("changeLoad", !0),
                          o("changePartnerRoutes", c.routes);
                      case 7:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
          createPartnerOrder: function (e, t) {
            var r = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function o() {
                var n, c, l, d, m, f, x;
                return regeneratorRuntime.wrap(function (o) {
                  for (;;)
                    switch ((o.prev = o.next)) {
                      case 0:
                        return (
                          (n = e.commit),
                          (c = t.routeId),
                          (l = t.toValues),
                          (d = t.routeValues),
                          (m = t.agreement),
                          (f = t.amount),
                          (o.next = 4),
                          r.app.$rest
                            .api("POST:user/exchanger/order/partner/create", {
                              routeId: c,
                              toValues: l,
                              routeValues: d,
                              agreement: m,
                              amount: f,
                            })
                            .then(function (e) {


                              return e.data;
                            })
                            .catch(function (e) {
                              return n("changeLoad", !0), Promise.reject(e);
                            })
                        );
                      case 4:
                        return (
                          (x = o.sent),
                          n("changeLoad", !0),
                          o.abrupt("return", x)
                        );
                      case 7:
                      case "end":
                        return o.stop();
                    }
                }, o);
              })
            )();
          },
          getPartnerOrder: function (e, t) {
            var r = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function o() {
                var n, c, l, d, m;
                return regeneratorRuntime.wrap(function (o) {
                  for (;;)
                    switch ((o.prev = o.next)) {
                      case 0:
                        return (
                          (n = e.commit),
                          (c = e.dispatch),
                          (l = t.orderUID),
                          (d = t.orderSecret),
                          n("changeLoad", !1),
                          (o.next = 5),
                          r.app.$rest
                            .api("GET:user/exchanger/order/partner/get", {
                              orderUID: l,
                              orderSecret: d,
                            })
                            .then(function (e) {
                              return e.data;
                            })
                            .catch(function (e) {
                              return (
                                c(
                                  "notify/add",
                                  { type: "error", message: e.message },
                                  { root: !0 }
                                ),
                                null
                              );
                            })
                        );
                      case 5:
                        (m = o.sent),
                          n("changeLoad", !0),
                          m && n("changePartnerOrder", m.order);
                      case 8:
                      case "end":
                        return o.stop();
                    }
                }, o);
              })
            )();
          },
        };
    },
    function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "state", function () {
          return c;
        }),
        r.d(t, "getters", function () {
          return l;
        }),
        r.d(t, "mutations", function () {
          return d;
        }),
        r.d(t, "actions", function () {
          return m;
        });
      var o = r(17),
        n = r(0),
        c =
          (r(10),
          r(6),
          r(33),
          r(31),
          function () {
            return {
              faq: [{}, {}, {}, {}, {}],
              langs: null,
              groups: null,
              oneFaq: {},
              load: !0,
              isActive: !1,
              errorData: "",
              total_pages: 1,
              current_page: 1,
            };
          }),
        l = {
          getData: function (e) {
            return e.faq;
          },
          getLangs: function (e) {
            return e.langs;
          },
          getGroups: function (e) {
            return e.groups;
          },
          getOneFaq: function (e) {
            return e.oneFaq;
          },
          getLoad: function (e) {
            return e.load;
          },
          getError: function (e) {
            return e.errorData;
          },
          getCurrentPage: function (e) {
            return e.current_page;
          },
          getTotalPages: function (e) {
            return e.total_pages;
          },
        },
        d = {
          changeFaq: function (e, data) {
            return (e.faq = data);
          },
          changeError: function (e, t) {
            return (e.errorData = t);
          },
          changeOneFaq: function (e, t) {
            return (e.oneFaq = t);
          },
          changeLangs: function (e, t) {
            return (e.langs = t);
          },
          changeGroups: function (e, t) {
            return (e.groups = t);
          },
          changeLoad: function (e, t) {
            return (e.load = t);
          },
          changeTotalPages: function (e, t) {
            return (e.total_pages = t);
          },
          changeCurrentPage: function (e, t) {
            return (e.current_page = t);
          },
        },
        m = {
          getLangsGroups: function (e) {
            var t = this;
            return Object(n.a)(
              regeneratorRuntime.mark(function r() {
                var n, c, l, d, m, f, x, h;
                return regeneratorRuntime.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        if (((n = e.commit), (c = e.state).groups && c.langs)) {
                          r.next = 13;
                          break;
                        }
                        return (
                          (l = t.app.$rest
                            .api("GET:public/faq/get/group")
                            .then(function (e) {
                              return e.data;
                            })
                            .then(function (e) {
                              return e.faqGroups;
                            })),
                          (d = t.app.$rest
                            .api("GET:public/server/lang/all")
                            .then(function (e) {
                              return e.data;
                            })
                            .then(function (e) {
                              return e.lang;
                            })),
                          (r.next = 6),
                          Promise.all([l, d])
                        );
                      case 6:
                        (m = r.sent),
                          (f = Object(o.a)(m, 2)),
                          (x = f[0]),
                          (h = f[1]),
                          n("changeLoad", !0),
                          x && n("changeGroups", x),
                          h && n("changeLangs", h);
                      case 13:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
          getFaqFull: function (e, t) {
            var r = this;
            return Object(n.a)(
              regeneratorRuntime.mark(function o() {
                var n, c, l;
                return regeneratorRuntime.wrap(function (o) {
                  for (;;)
                    switch ((o.prev = o.next)) {
                      case 0:
                        return (
                          (n = e.commit),
                          (c = e.dispatch),
                          n("changeLoad", !1),
                          c("getLangsGroups"),
                          (o.next = 5),
                          r.app.$rest
                            .api("GET:public/faq/get/list", t)
                            .then(function (e) {
                              return e.data;
                            })
                            .catch(function (e) {
                              return (
                                c(
                                  "notify/add",
                                  { type: "error", message: e.message },
                                  { root: !0 }
                                ),
                                null
                              );
                            })
                        );
                      case 5:
                        (l = o.sent),
                          n("changeLoad", !0),
                          l &&
                            (n("changeFaq", l.faq),
                            n("changeCurrentPage", l.count.select_page || 1),
                            n("changeTotalPages", l.count.pages || 1));
                      case 8:
                      case "end":
                        return o.stop();
                    }
                }, o);
              })
            )();
          },
          getOneFaq: function (e, t) {
            var r = this;
            return Object(n.a)(
              regeneratorRuntime.mark(function o() {
                var n, c, l;
                return regeneratorRuntime.wrap(function (o) {
                  for (;;)
                    switch ((o.prev = o.next)) {
                      case 0:
                        return (
                          (n = e.commit),
                          (c = e.dispatch),
                          n("changeLoad", !1),
                          c("getLangsGroups"),
                          (o.next = 5),
                          r.app.$rest
                            .api("GET:public/faq/get/one", { id: t })
                            .then(function (e) {
                              return e.data;
                            })
                            .catch(function (e) {
                              return (
                                c(
                                  "notify/add",
                                  { type: "error", message: e.message },
                                  { root: !0 }
                                ),
                                null
                              );
                            })
                        );
                      case 5:
                        (l = o.sent),
                          n("changeLoad", !0),
                          l && n("changeOneFaq", l);
                      case 8:
                      case "end":
                        return o.stop();
                    }
                }, o);
              })
            )();
          },
        };
    },
    function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "state", function () {
          return n;
        }),
        r.d(t, "getters", function () {
          return c;
        }),
        r.d(t, "mutations", function () {
          return l;
        }),
        r.d(t, "actions", function () {
          return d;
        });
      var o = r(0),
        n =
          (r(10),
          function () {
            return {
              history: !1,
              load: !0,
              block: !1,
              total_pages: 1,
              current_page: 1,
              status: {
                deleted: { color: "red" },
                done: { color: "green" },
                errorPayment: { color: "red" },
                new: { color: "gold" },
                returned: { color: "cyan" },
              },
            };
          }),
        c = {
          history: function (e) {
            return e.history;
          },
          load: function (e) {
            return e.load;
          },
          status: function (e) {
            return e.status;
          },
          block: function (e) {
            return e.block;
          },
          getCurrentPage: function (e) {
            return e.current_page;
          },
          getTotalPages: function (e) {
            return e.total_pages;
          },
        },
        l = {
          history: function (e, t) {
            return (e.history = t);
          },
          load: function (e, t) {
            return (e.load = t);
          },
          block: function (e, t) {
            return (e.block = t);
          },
          changeTotalPages: function (e, t) {
            return (e.total_pages = t);
          },
          changeCurrentPage: function (e, t) {
            return (e.current_page = t);
          },
        },
        d = {
          getListPartnerOrder: function (e) {
            var t = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function r() {
                var o, n, c;
                return regeneratorRuntime.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (o = e.commit),
                          (n = e.dispatch),
                          o("load", !1),
                          (r.next = 4),
                          t.app.$rest
                            .api("GET:user/exchanger/order/partner/history")
                            .then(function (e) {
                              return e.data;
                            })
                            .catch(function (e) {
                              return (
                                n(
                                  "notify/add",
                                  { type: "error", message: e.message },
                                  { root: !0 }
                                ),
                                null
                              );
                            })
                        );
                      case 4:
                        if (((c = r.sent), o("load", !0), !c)) {
                          r.next = 11;
                          break;
                        }
                        return (
                          o("history", c.orders),
                          o("changeCurrentPage", c.select_page || 1),
                          o("changeTotalPages", c.count.pages || 1),
                          r.abrupt("return", c)
                        );
                      case 11:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
        };
    },
    function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "state", function () {
          return n;
        }),
        r.d(t, "getters", function () {
          return c;
        }),
        r.d(t, "mutations", function () {
          return l;
        }),
        r.d(t, "actions", function () {
          return d;
        });
      var o = r(0),
        n =
          (r(10),
          r(6),
          r(13),
          r(11),
          function () {
            return { menu: !1, user: !1, buttons: [] };
          }),
        c = {
          menu: function (e) {
            return e.menu;
          },
          user: function (e) {
            return e.user;
          },
          buttons: function (e) {
            return e.buttons;
          },
        },
        l = {
          menu: function (e, data) {
            return (e.menu = data);
          },
          user: function (e, data) {
            return (e.user = data);
          },
          all: function (e, data) {
            return Object.keys(e).forEach(function (t) {
              return "buttons" !== t ? (e[t] = data) : "";
            });
          },
          buttons: function (e, data) {
            return (e.buttons = data);
          },
        },
        d = {
          buttons: function (e) {
            var t = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function r() {
                var o, n, c;
                return regeneratorRuntime.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (o = e.commit),
                          (n = e.dispatch),
                          (r.next = 3),
                          t.app.$rest
                            .api("GET:public/site/page/static/list")
                            .then(function (e) {
                              return e.data;
                            })
                            .catch(function (e) {
                              return (
                                n(
                                  "notify/add",
                                  { type: "error", message: e.message },
                                  { root: !0 }
                                ),
                                null
                              );
                            })
                        );
                      case 3:
                        (c = r.sent) && o("buttons", c.pages);
                      case 5:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
        };
    },
    function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "state", function () {
          return n;
        }),
        r.d(t, "getters", function () {
          return c;
        }),
        r.d(t, "mutations", function () {
          return l;
        }),
        r.d(t, "actions", function () {
          return d;
        });
      var o = r(0),
        n =
          (r(91),
          r(10),
          function () {
            return {
              news: [{}, {}, {}, {}, {}, {}],
              oneNews: {},
              langs: [],
              groups: null,
              isActive: !1,
              load: !0,
              errorData: {},
              total_pages: 1,
              current_page: 1,
            };
          }),
        c = {
          getData: function (e) {
            return e.news;
          },
          getOneNews: function (e) {
            return e.oneNews;
          },
          getLangs: function (e) {
            return e.langs;
          },
          getLoad: function (e) {
            return e.load;
          },
          getError: function (e) {
            return e.errorData;
          },
          getCurrentPage: function (e) {
            return e.current_page;
          },
          getTotalPages: function (e) {
            return e.total_pages;
          },
        },
        l = {
          changeData: function (e, data) {
            return (e.news = data);
          },
          changeError: function (e, t) {
            return (e.errorData = t);
          },
          changeOneNews: function (e, t) {
            return (e.oneNews = t);
          },
          changeLangs: function (e, t) {
            return (e.langs = t);
          },
          changeLoad: function (e, t) {
            return (e.load = t);
          },
          changeTotalPages: function (e, t) {
            return (e.total_pages = t);
          },
          changeCurrentPage: function (e, t) {
            return (e.current_page = t);
          },
        },
        d = {
          getNewsFull: function (e, filter) {
            var t = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function r() {
                var o, n, c;
                return regeneratorRuntime.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (o = e.commit),
                          (n = e.dispatch),
                          o("changeLoad", !1),
                          (r.next = 4),
                          t.app.$rest
                            .api("GET:public/news/list/full", filter)
                            .then(function (e) {
                              return e.data;
                            })
                            .catch(function (e) {
                              return (
                                n(
                                  "notify/add",
                                  { type: "error", message: e.message },
                                  { root: !0 }
                                ),
                                null
                              );
                            })
                        );
                      case 4:
                        (c = r.sent),
                          o("changeLoad", !0),
                          c &&
                            (o("changeData", c.news),
                            o("changeCurrentPage", c.count.select_page || 1),
                            o("changeTotalPages", c.count.pages || 1));
                      case 7:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
          getOneNews: function (e, t) {
            var r = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function o() {
                var n, link, c, l, d;
                return regeneratorRuntime.wrap(function (o) {
                  for (;;)
                    switch ((o.prev = o.next)) {
                      case 0:
                        return (
                          (n = e.commit),
                          (link = t.link),
                          (c = t.lang),
                          (l = t.id),
                          n("changeLoad", !1),
                          (o.next = 5),
                          r.app.$rest
                            .api("GET:public/news/get/one", {
                              link: link,
                              lang: c,
                              id: l,
                            })
                            .then(function (e) {
                              return e.data;
                            })
                            .catch(function () {
                              return null;
                            })
                        );
                      case 5:
                        return (
                          (d = o.sent),
                          n("changeLoad", !0),
                          n("changeOneNews", d),
                          o.abrupt("return", Boolean(d))
                        );
                      case 9:
                      case "end":
                        return o.stop();
                    }
                }, o);
              })
            )();
          },
          createComment: function (e, t) {
            var r = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function o() {
                var n, c, l, d, m, f;
                return regeneratorRuntime.wrap(function (o) {
                  for (;;)
                    switch ((o.prev = o.next)) {
                      case 0:
                        return (
                          (n = e.commit),
                          (c = e.dispatch),
                          (l = t.news_id),
                          (d = t.message),
                          (m = t.name_author),
                          n("changeLoad", !1),
                          (o.next = 5),
                          r.app.$rest
                            .api("POST:user/news/comment/create", {
                              news_id: l,
                              message: d,
                              name_author: m,
                            })
                            .then(function (e) {
                              return e.data;
                            })
                            .catch(function (e) {
                              return r.$swal("", e.message, "error"), null;
                            })
                        );
                      case 5:
                        return (
                          (f = o.sent),
                          n("changeLoad", !0),
                          f && c("getOneNews", { id: l }),
                          o.abrupt("return", Boolean(f))
                        );
                      case 9:
                      case "end":
                        return o.stop();
                    }
                }, o);
              })
            )();
          },
        };
    },
    function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "state", function () {
          return n;
        }),
        r.d(t, "getters", function () {
          return c;
        }),
        r.d(t, "mutations", function () {
          return l;
        }),
        r.d(t, "actions", function () {
          return d;
        });
      var o = r(0),
        n =
          (r(10),
          function () {
            return { webAlerts: [], load: !1 };
          }),
        c = {
          webAlerts: function (e) {
            return e.webAlerts;
          },
          load: function (e) {
            return e.load;
          },
        },
        l = {
          webAlerts: function (e, data) {
            return (e.webAlerts = data);
          },
          load: function (e, t) {
            return (e.load = t);
          },
        },
        d = {
          getList: function (e, data) {
            var t = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function r() {
                var o, n;
                return regeneratorRuntime.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (o = e.commit)("load", !1),
                          (r.next = 4),
                          t.app.$rest
                            .api("GET:public/web-alerts/get/list", data)
                            .then(function (e) {
                              return e.data.webAlerts;
                            })
                            .catch(function () {
                              return !1;
                            })
                        );
                      case 4:
                        (n = r.sent) && o("webAlerts", n), o("load", !0);
                      case 7:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
        };
    },
    function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "state", function () {
          return o;
        }),
        r.d(t, "getters", function () {
          return n;
        }),
        r.d(t, "mutations", function () {
          return c;
        }),
        r.d(t, "actions", function () {
          return l;
        });
      r(186), r(6);
      var o = function () {
          return { notifies: [], timeout: 5e3, backup: [] };
        },
        n = {
          notifies: function (e) {
            return e.notifies;
          },
          timeout: function (e) {
            return e.timeout;
          },
          backup: function (e) {
            return e.backup;
          },
        },
        c = {
          del: function (e) {
            return e.notifies.splice(0, 1);
          },
          add: function (e, data) {
            return e.notifies.push(data);
          },
          backup: function (e, data) {
            return e.backup.unshift(data);
          },
        },
        l = {
          add: function (e, t) {
            var r = e.commit,
              o = e.state,
              n = t.type,
              c = void 0 === n ? "success" : n,
              l = t.position,
              d = void 0 === l ? "top-right" : l,
              m = t.message,
              f = void 0 === m ? "" : m,
              x = t.code,
              h = {
                type: c,
                position: d,
                message: f,
                code: void 0 === x ? null : x,
              };
            if (
              o.notifies.some(function (e) {
                return e.message === f;
              })
            )
              return console.log("duplicate message ".concat(f));
            r("add", h), r("backup", h);
          },
        };
    },
    function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "state", function () {
          return c;
        }),
        r.d(t, "getters", function () {
          return l;
        }),
        r.d(t, "mutations", function () {
          return d;
        }),
        r.d(t, "actions", function () {
          return m;
        });
      var o = r(0),
        n = (r(10), r(22)),
        c = function () {
          return {
            apiRequests: { getJivoSite: Object(n.a)() },
            technical_work: !1,
            jivosite: { widgetId: "", error: {} },
            captcha: {
              requiredCaptchaCreateOrder: !1,
              sitekey: "",
              module: "",
            },
          };
        },
        l = {
          getRequestState: n.b,
          getTechnicalWorkStatus: function (e) {
            return e.technical_work;
          },
          getJivoSite: function (e) {
            return e.jivosite.widgetId;
          },
          getCaptchaConf: function (e) {
            return e.captcha;
          },
        },
        d = {
          setRequestState: n.d,
          setWorkStatus: function (e, t) {
            return (e.technical_work = t);
          },
          setJivoSite: function (e, t) {
            var r = t.widgetId,
              o = t.error;
            return (e.jivosite = { widgetId: r, error: o });
          },
          setCaptchaSettings: function (e, t) {
            var r = t.requiredCaptchaCreateOrder,
              o = t.captcha_public,
              n = t.captcha_module;
            e.captcha = { requiredForCreateOrder: r, sitekey: o, module: n };
          },
        },
        m = {
          updateSettings: function (e) {
            var t = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function r() {
                var o, n;
                return regeneratorRuntime.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (o = e.commit)("setRequestState", {
                            getJivoSite: "pending",
                          }),
                          (r.next = 4),
                          t.app.$rest
                            .api("GET:public/site/status/get", {})
                            .then(function (e) {
                              return e.data;
                            })
                            .catch(function (e) {
                              console.error("public/site/status/get", e),
                                o("setWorkStatus", !0),
                                o("setJivoSite", { error: e }),
                                o("setRequestState", {
                                  getJivoSite: "rejected",
                                });
                            })
                        );
                      case 4:
                        if ((n = r.sent)) {
                          r.next = 7;
                          break;
                        }
                        return r.abrupt("return", null);
                      case 7:
                        return (
                          o("setWorkStatus", Boolean(n.offlineStatus)),
                          o("setJivoSite", { widgetId: n.jivosite }),
                          o("setCaptchaSettings", {
                            requiredCaptchaCreateOrder:
                              n.requiredCaptchaCreateOrder,
                            captcha_module: n.captcha_module,
                            captcha_public: n.captcha_public,
                          }),
                          o("setRequestState", { getJivoSite: "success" }),
                          r.abrupt("return", { widgetId: n.jivosite })
                        );
                      case 12:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
        };
    },
    function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "state", function () {
          return o;
        }),
        r.d(t, "getters", function () {
          return n;
        }),
        r.d(t, "mutations", function () {
          return c;
        }),
        r.d(t, "actions", function () {
          return l;
        });
      var o = function () {
          return { info: [], activeReviews: [], load: !1, errorData: "" };
        },
        n = {
          info: function (e) {
            return e.info;
          },
          load: function (e) {
            return e.load;
          },
          activeReviews: function (e) {
            return e.activeReviews;
          },
          errorData: function (e) {
            return e.errorData;
          },
          current_page: function (e) {
            return e.current_page;
          },
          total_page: function (e) {
            return e.total_page;
          },
        },
        c = {
          info: function (e, data) {
            return (e.info = data);
          },
          activeReviews: function (e, data) {
            return (e.activeReviews = data);
          },
          errorData: function (e, t) {
            return (e.error = t);
          },
          load: function (e, t) {
            return (e.load = t);
          },
          total_page: function (e, t) {
            return (e.total_page = t);
          },
          current_page: function (e, t) {
            return (e.current_page = t);
          },
        },
        l = {
          getPartners: function (e, param) {
            var t = e.commit,
              r = e.dispatch;
            param || (param = {}),
              t("load", !1),
              this.app.$rest
                .api("GET:public/partners-block/list", {
                  onlyReviewPartners: param.onlyReviewPartners || void 0,
                })
                .then(function (e) {
                  if ((t("load", !0), !e.success))
                    return r(
                      "notify/add",
                      { type: "error", message: e.error.message },
                      { root: !0 }
                    );
                  var o = {};
                  for (var n in e.data.partners)
                    !0 === e.data.partners[n].isShowReviews &&
                      (o[n] = e.data.partners[n]);
                  t("activeReviews", o),
                    e.success && t("info", e.data.partners);
                });
          },
        };
    },
    function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "state", function () {
          return c;
        }),
        r.d(t, "getters", function () {
          return l;
        }),
        r.d(t, "mutations", function () {
          return d;
        }),
        r.d(t, "actions", function () {
          return m;
        });
      var o = r(0),
        n =
          (r(10),
          {
            current: [
              "new",
              "waitPayment",
              "inProgress",
              "errorPayout",
              "inProgressPayout",
              "hold",
              "errorPayment",
            ],
            deleted: ["deleted", "returned"],
            done: ["done"],
            all: void 0,
          }),
        c = function () {
          return {
            history: [],
            load: !0,
            block: !1,
            total_pages: 1,
            current_page: 1,
            status: {
              deleted: { color: "red" },
              done: { color: "green" },
              errorPayment: { color: "red" },
              errorPayout: { color: "red" },
              hold: { color: "blue" },
              inProgress: { color: "#1af" },
              inProgressPayout: { color: "grey" },
              new: { color: "gold" },
              returned: { color: "cyan" },
              waitPayment: { color: "green" },
            },
          };
        },
        l = {
          history: function (e) {
            return e.history;
          },
          load: function (e) {
            return e.load;
          },
          status: function (e) {
            return e.status;
          },
          block: function (e) {
            return e.block;
          },
          getCurrentPage: function (e) {
            return e.current_page;
          },
          getTotalPages: function (e) {
            return e.total_pages;
          },
        },
        d = {
          history: function (e, t) {
            return (e.history = t);
          },
          load: function (e, t) {
            return (e.load = t);
          },
          block: function (e, t) {
            return (e.block = t);
          },
          changeTotalPages: function (e, t) {
            return (e.total_pages = t);
          },
          changeCurrentPage: function (e, t) {
            return (e.current_page = t);
          },
        },
        m = {
          getList: function (e, data) {
            var t = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function r() {
                var o, c, l, d, m, f, x, h;
                return regeneratorRuntime.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (o = e.commit),
                          (c = e.dispatch),
                          data || (data = {}),
                          (d = (l = data).status),
                          (m = l.page),
                          (f = l.limit) || (f = 10),
                          m || (m = 1),
                          (x = void 0),
                          n[d] && (x = n[d]),
                          o("load", !1),
                          (r.next = 10),
                          t.app.$rest
                            .api("GET:user/exchanger/order/history", {
                              statuses: x,
                              page: m,
                              limit: f,
                            })
                            .then(function (e) {
                              return e.data;
                            })
                            .catch(function (e) {
                              return (
                                c(
                                  "notify/add",
                                  { type: "error", message: e.message },
                                  { root: !0 }
                                ),
                                null
                              );
                            })
                        );
                      case 10:
                        if (((h = r.sent), o("load", !0), !h)) {
                          r.next = 17;
                          break;
                        }
                        return (
                          o("history", h.orders),
                          o("changeCurrentPage", h.count.select_page || 1),
                          o("changeTotalPages", h.count.pages || 1),
                          r.abrupt("return", h)
                        );
                      case 17:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
        };
    },
    function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "state", function () {
          return n;
        }),
        r.d(t, "getters", function () {
          return c;
        }),
        r.d(t, "mutations", function () {
          return l;
        }),
        r.d(t, "actions", function () {
          return d;
        });
      var o = r(0),
        n =
          (r(10),
          function () {
            return { info: [], errorData: "", load: !1 };
          }),
        c = {
          getData: function (e) {
            return e.info;
          },
          getLoad: function (e) {
            return e.load;
          },
          getError: function (e) {
            return e.errorData;
          },
        },
        l = {
          changeData: function (e, data) {
            return (e.info = data);
          },
          changeError: function (e, t) {
            return (e.error = t);
          },
          changeLoad: function (e, t) {
            return (e.load = t);
          },
        },
        d = {
          getReserve: function (e) {
            var t = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function r() {
                var o, n, c;
                return regeneratorRuntime.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (o = e.commit),
                          (n = e.dispatch),
                          o("changeLoad", !1),
                          (r.next = 4),
                          t.app.$rest
                            .to("admin/exchanger/currency/get/reserves")
                            .then(function (e) {
                              return e.data;
                            })
                            .catch(function (e) {
                              return (
                                n(
                                  "notify/add",
                                  { type: "error", message: e.message },
                                  { root: !0 }
                                ),
                                null
                              );
                            })
                        );
                      case 4:
                        if (((c = r.sent), o("changeLoad", !0), !c)) {
                          r.next = 9;
                          break;
                        }
                        return (
                          o("changeData", c.currencies), r.abrupt("return", c)
                        );
                      case 9:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
        };
    },
    function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "state", function () {
          return c;
        }),
        r.d(t, "getters", function () {
          return l;
        }),
        r.d(t, "mutations", function () {
          return d;
        }),
        r.d(t, "actions", function () {
          return m;
        });
      var o = r(0),
        n = (r(10), r(22)),
        c = function () {
          return {
            apiRequests: {
              getReviews: Object(n.a)(),
              createReview: Object(n.a)(),
            },
            reviews: {},
          };
        },
        l = { getRequestState: n.b },
        d = {
          setRequestState: n.d,
          setReviewsState: function (e, t) {
            var r = t.reviews,
              o = t.lang,
              n = t.page,
              c = t.limit;
            if (!r || !Array.isArray(r))
              throw new Error(
                "[store/reviews/setReviewsState] reviews is not array"
              );
            if (!o || "string" != typeof o)
              throw new Error(
                "[store/reviews/setReviewsState] lang is not string"
              );
            e.reviews[o] = { list: r, page: n, limit: c, updateAt: Date.now() };
          },
        },
        m = {
          updateListReviews: function (e, t) {
            var r = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function o() {
                var n, c, l, d, m, f;
                return regeneratorRuntime.wrap(function (o) {
                  for (;;)
                    switch ((o.prev = o.next)) {
                      case 0:
                        return (
                          (n = e.commit),
                          (c = e.dispatch),
                          (l = t.limit),
                          (d = t.page),
                          (m = t.lang),
                          n("setRequestState", { getReviews: "pending" }),
                          l || (l = 10),
                          d || (d = 1),
                          m || (m = "en"),
                          (o.next = 8),
                          r.app.$rest
                            .api("GET:public/reviews/get", {
                              limit: l,
                              page: d,
                              lang: m,
                            })
                            .then(function (e) {
                              return e.data;
                            })
                            .catch(function (e) {
                              return (
                                n("setRequestState", {
                                  getReviews: "rejected",
                                }),
                                c(
                                  "notify/add",
                                  { type: "error", message: e.message },
                                  { root: !0 }
                                ),
                                null
                              );
                            })
                        );
                      case 8:
                        if (!(f = o.sent)) {
                          o.next = 13;
                          break;
                        }
                        return (
                          n("setRequestState", { getReviews: "success" }),
                          n("setReviewsState", {
                            reviews: f.reviews,
                            lang: m,
                            page: d,
                            limit: l,
                          }),
                          o.abrupt("return", {
                            reviews: f.reviews,
                            select_page: f.count.select_page,
                            total_pages: f.count.pages,
                            lang: m,
                            limit: l,
                          })
                        );
                      case 13:
                        return o.abrupt("return", null);
                      case 14:
                      case "end":
                        return o.stop();
                    }
                }, o);
              })
            )();
          },
          createReview: function (e, t) {
            var r = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function o() {
                var n, c, l;
                return regeneratorRuntime.wrap(function (o) {
                  for (;;)
                    switch ((o.prev = o.next)) {
                      case 0:
                        return (
                          (n = e.dispatch),
                          (c = e.commit)("setRequestState", {
                            createReview: "pending",
                          }),
                          (o.next = 4),
                          r.app.$rest
                            .api("POST:public/reviews/create", t)
                            .then(function (e) {
                              return e.data;
                            })
                            .catch(function (e) {
                              return (
                                c("setRequestState", {
                                  createReview: "rejected",
                                }),
                                n(
                                  "notify/add",
                                  { type: "error", message: e.message },
                                  { root: !0 }
                                ),
                                null
                              );
                            })
                        );
                      case 4:
                        if (!(l = o.sent)) {
                          o.next = 9;
                          break;
                        }
                        return (
                          c("setRequestState", { createReview: "success" }),
                          n(
                            "notify/add",
                            {
                              message: r.app.i18n.t(
                                "page.main.messages.reviewSuccess"
                              ),
                            },
                            { root: !0 }
                          ),
                          o.abrupt("return", l)
                        );
                      case 9:
                      case "end":
                        return o.stop();
                    }
                }, o);
              })
            )();
          },
        };
    },
    function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "state", function () {
          return n;
        }),
        r.d(t, "getters", function () {
          return c;
        }),
        r.d(t, "mutations", function () {
          return l;
        }),
        r.d(t, "actions", function () {
          return d;
        });
      var o = r(0),
        n =
          (r(10),
          function () {
            return {
              history: !1,
              load: !0,
              block: !1,
              total_pages: 1,
              current_page: 1,
            };
          }),
        c = {
          history: function (e) {
            return e.history;
          },
          load: function (e) {
            return e.load;
          },
          block: function (e) {
            return e.block;
          },
          getCurrentPage: function (e) {
            return e.current_page;
          },
          getTotalPages: function (e) {
            return e.total_pages;
          },
        },
        l = {
          history: function (e, t) {
            return (e.history = t);
          },
          load: function (e, t) {
            return (e.load = t);
          },
          block: function (e, t) {
            return (e.block = t);
          },
          changeTotalPages: function (e, t) {
            return (e.total_pages = t);
          },
          changeCurrentPage: function (e, t) {
            return (e.current_page = t);
          },
        },
        d = {
          getList: function (e, t) {
            var r = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function o() {
                var n, c, l;
                return regeneratorRuntime.wrap(function (o) {
                  for (;;)
                    switch ((o.prev = o.next)) {
                      case 0:
                        return (
                          (n = e.commit),
                          (c = e.dispatch),
                          n("load", !1),
                          (o.next = 4),
                          r.app.$rest
                            .api("GET:user/affiliate/orders", {
                              page: t,
                              limit: 10,
                            })
                            .then(function (e) {
                              return e.data;
                            })
                            .catch(function (e) {
                              return (
                                c(
                                  "notify/add",
                                  { type: "error", message: e.message },
                                  { root: !0 }
                                ),
                                null
                              );
                            })
                        );
                      case 4:
                        (l = o.sent),
                          n("load", !0),
                          l &&
                            (n("history", l.orders),
                            n("changeCurrentPage", l.count.select_page || 1),
                            n("changeTotalPages", l.count.pages || 1));
                      case 7:
                      case "end":
                        return o.stop();
                    }
                }, o);
              })
            )();
          },
        };
    },
    function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "state", function () {
          return n;
        }),
        r.d(t, "getters", function () {
          return c;
        }),
        r.d(t, "mutations", function () {
          return l;
        }),
        r.d(t, "actions", function () {
          return d;
        });
      var o = r(0),
        n =
          (r(91),
          r(24),
          r(36),
          r(10),
          function () {
            return {
              rules: [],
              rule: {},
              langs: !1,
              isActive: !1,
              load: !1,
              errorData: "",
              total_pages: 1,
              current_page: 1,
            };
          }),
        c = {
          getData: function (e) {
            return e.rules;
          },
          getRule: function (e) {
            return e.rule;
          },
          getLangs: function (e) {
            return e.langs;
          },
          getLoad: function (e) {
            return e.load;
          },
          getError: function (e) {
            return e.errorData;
          },
          getCurrentPage: function (e) {
            return e.current_page;
          },
          getTotalPages: function (e) {
            return e.total_pages;
          },
        },
        l = {
          changeData: function (e, data) {
            return (e.rules = data);
          },
          changeError: function (e, t) {
            return (e.errorData = t);
          },
          changeRule: function (e, t) {
            return (e.rule = t);
          },
          changeLangs: function (e, t) {
            return (e.langs = t);
          },
          changeLoad: function (e, t) {
            return (e.load = t);
          },
          changeTotalPages: function (e, t) {
            return (e.total_pages = t);
          },
          changeCurrentPage: function (e, t) {
            return (e.current_page = t);
          },
        },
        d = {
          getLangs: function (e) {
            var t = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function r() {
                var o, n, c;
                return regeneratorRuntime.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        if (((o = e.commit), (n = e.dispatch), e.state.langs)) {
                          r.next = 6;
                          break;
                        }
                        return (
                          (r.next = 4),
                          t.app.$rest
                            .api("GET:public/server/lang/all")
                            .then(function (e) {
                              return e.data;
                            })
                            .catch(function (e) {
                              return (
                                n(
                                  "notify/add",
                                  { type: "error", message: e.message },
                                  { root: !0 }
                                ),
                                null
                              );
                            })
                        );
                      case 4:
                        (c = r.sent) && o("changeLangs", c.lang);
                      case 6:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
          getTitleRules: function (e, filter) {
            var t = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function r() {
                var o, n, c;
                return regeneratorRuntime.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (o = e.commit),
                          (n = e.dispatch),
                          o("changeLoad", !1),
                          (r.next = 4),
                          t.app.$rest
                            .api("GET:public/rule/list", filter)
                            .then(function (e) {
                              return e.data;
                            })
                            .catch(function (e) {
                              return (
                                n(
                                  "notify/add",
                                  { type: "error", message: e.message },
                                  { root: !0 }
                                ),
                                null
                              );
                            })
                        );
                      case 4:
                        if (((c = r.sent), o("changeLoad", !0), !c)) {
                          r.next = 11;
                          break;
                        }
                        return (
                          o("changeData", c.rules),
                          o("changeCurrentPage", c.count.select_page || 1),
                          o("changeTotalPages", c.count.pages || 1),
                          r.abrupt("return", c.rules)
                        );
                      case 11:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
          getRule: function (e, data) {
            var t = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function r() {
                var o, n, link, c, l;
                return regeneratorRuntime.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (o = e.commit),
                          (n = e.dispatch),
                          o("changeLoad", !1),
                          (link = data.link),
                          (c = data.lang),
                          (r.next = 5),
                          t.app.$rest
                            .api("GET:public/rule/get", { link: link, lang: c })
                            .then(function (e) {
                              return e.data;
                            })
                            .catch(function (e) {
                              return (
                                n(
                                  "notify/add",
                                  { type: "error", message: e.message },
                                  { root: !0 }
                                ),
                                null
                              );
                            })
                        );
                      case 5:
                        (l = r.sent),
                          o("changeLoad", !0),
                          l &&
                            ((l.rule.stripedContent = l.rule.content.replace(
                              /<\/?[^>]+>/gi,
                              " "
                            )),
                            o("changeRule", l.rule));
                      case 8:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
        };
    },
    function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "state", function () {
          return c;
        }),
        r.d(t, "getters", function () {
          return l;
        }),
        r.d(t, "mutations", function () {
          return d;
        }),
        r.d(t, "actions", function () {
          return m;
        });
      var o = r(0),
        n = (r(10), r(22)),
        c = function () {
          return {
            apiRequests: { getSocials: Object(n.a)() },
            socials: { data: [], error: {} },
          };
        },
        l = {
          getRequestState: n.b,
          getSocials: function (e) {
            return e.socials;
          },
        },
        d = {
          setRequestState: n.d,
          setSocials: function (e, t) {
            var data = t.data,
              r = t.error;
            e.socials = { data: data, error: r };
          },
        },
        m = {
          updateSocials: function (e) {
            var t = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function r() {
                var o, n;
                return regeneratorRuntime.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (o = e.commit)("setRequestState", {
                            getSocials: "pending",
                          }),
                          (r.next = 4),
                          t.app.$rest
                            .api("GET:public/social-networks/list")
                            .then(function (e) {
                              return e.data;
                            })
                            .catch(function (e) {
                              o("setRequestState", { getSocials: "rejected" }),
                                o("setSocials", { error: e });
                            })
                        );
                      case 4:
                        (n = r.sent),
                          o("setSocials", { data: n.socials }),
                          o("setRequestState", { getSocials: "success" });
                      case 7:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
        };
    },
    function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "state", function () {
          return f;
        }),
        r.d(t, "getters", function () {
          return x;
        }),
        r.d(t, "mutations", function () {
          return h;
        }),
        r.d(t, "actions", function () {
          return w;
        });
      r(12), r(15), r(19), r(13), r(20);
      var o = r(21),
        n = r(4),
        c = r(0),
        l = (r(11), r(6), r(10), r(22));
      function d(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(r), !0).forEach(function (t) {
                Object(n.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : d(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var f = function () {
          return {
            apiRequests: {
              login: Object(l.a)("success"),
              restPassword: Object(l.a)("success"),
              verificationInit: Object(l.a)("success"),
              registration: Object(l.a)("success"),
            },
            info: null,
            load: !0,
            errorData: "",
            login: !1,
            isOpenKycModal: !1,
            reg: !1,
            reset: !1,
            auth: !1,
            qr: "",
            create: !1,
            verifications: [],
            wallets: [],
          };
        },
        x = {
          getRequestState: l.b,
          info: function (e) {
            return e.info;
          },
          load: function (e) {
            return e.load;
          },
          login: function (e) {
            return e.login;
          },
          isOpenKycModal: function (e) {
            return e.isOpenKycModal;
          },
          reset: function (e) {
            return e.reset;
          },
          reg: function (e) {
            return e.reg;
          },
          auth: function (e) {
            return e.auth;
          },
          errorData: function (e) {
            return e.errorData;
          },
          qr: function (e) {
            return e.qr;
          },
          create: function (e) {
            return e.create;
          },
          verifications: function (e) {
            return e.verifications;
          },
          wallets: function (e) {
            return e.wallets;
          },
        },
        h = {
          setRequestState: l.d,
          setRequestError: l.c,
          info: function (e, data) {
            return (e.info = data);
          },
          login: function (e, data) {
            return (e.login = data);
          },
          changeStatusOpenKycModal: function (e, data) {
            return (e.isOpenKycModal = data);
          },
          reg: function (e, data) {
            return (e.reg = data);
          },
          reset: function (e, data) {
            return (e.reset = data);
          },
          auth: function (e, data) {
            return (e.auth = data);
          },
          errorData: function (e, t) {
            return (e.errorData = t);
          },
          load: function (e, t) {
            return (e.load = t);
          },
          qr: function (e, data) {
            return (e.qr = data);
          },
          create: function (e, data) {
            return (e.create = data);
          },
          verifications: function (e, data) {
            return (e.verifications = data);
          },
          wallets: function (e, data) {
            return (e.wallets = data);
          },
        },
        w = {
          reg: function (e, t) {
            var r = this;
            return Object(c.a)(
              regeneratorRuntime.mark(function o() {
                var n, c, l, d, m, f, x, h, w, _, v, y;
                return regeneratorRuntime.wrap(function (o) {
                  for (;;)
                    switch ((o.prev = o.next)) {
                      case 0:
                        return (
                          (n = e.commit),
                          (c = e.dispatch),
                          (l = t.email),
                          (d = t.password),
                          (m = t.first_name),
                          (f = t.captcha),
                          (x = t.last_name),
                          (h = void 0 === x ? "" : x),
                          (w = t.return_to),
                          h ||
                            ((_ = m.split(" ")).length > 1 &&
                              ((m = _[0]), (h = _[1]))),
                          n("setRequestState", { registration: "pending" }),
                          (v = localStorage.getItem("partner")),
                          (o.next = 7),
                          r.app.$rest
                            .api("POST:user/auth/register", {
                              email: l,
                              password: d,
                              first_name: m,
                              last_name: h,
                              partner_code: v || void 0,
                              captcha: f || void 0,
                              return_to: String(w),
                              lang: r.app.i18n.locale,
                            })
                            .catch(function (e) {
                              return (
                                n("setRequestState", {
                                  registration: "rejected",
                                }),
                                n("setRequestError", {
                                  errorCode: e.errorCode,
                                  message: e.message,
                                  key: "registration",
                                }),
                                null
                              );
                            })
                        );
                      case 7:
                        if (!(y = o.sent)) {
                          o.next = 14;
                          break;
                        }
                        return (
                          n("reg", !1),
                          n("login", !0),
                          c(
                            "notify/add",
                            {
                              message: r.app.i18n.t(
                                "page.main.messages.checkEmail"
                              ),
                            },
                            { root: !0 }
                          ),
                          n("setRequestState", { registration: "success" }),
                          o.abrupt("return", y)
                        );
                      case 14:
                      case "end":
                        return o.stop();
                    }
                }, o);
              })
            )();
          },
          login: function (e, t) {
            var r = this;
            return Object(c.a)(
              regeneratorRuntime.mark(function o() {
                var n, c, l, d, f, x, code, h;
                return regeneratorRuntime.wrap(function (o) {
                  for (;;)
                    switch ((o.prev = o.next)) {
                      case 0:
                        return (
                          (n = e.commit),
                          (c = e.dispatch),
                          (l = e.state),
                          (d = t.email),
                          (f = t.password),
                          (x = t.captcha),
                          (code = t.code),
                          n("setRequestState", { login: "pending" }),
                          n("load", !1),
                          (o.next = 6),
                          r.app.$rest
                            .api(
                              "POST:user/auth/sign-in",
                              m(
                                m(
                                  { email: d, password: f },
                                  x ? { captcha: x } : {}
                                ),
                                code ? { code: code } : {}
                              )
                            )
                            .then(function (e) {
                              return e.data;
                            })
                            .catch(function (e) {
                              n("setRequestState", { login: "rejected" }),
                                n("setRequestError", {
                                  errorCode: e.errorCode,
                                  message: e.message,
                                  key: "login",
                                });
                            })
                        );
                      case 6:
                        (h = o.sent) &&
                          (n("setRequestState", { login: "success" }),
                          "startKyc" !== l.login ||
                            h.verificationPerson ||
                            n("changeStatusOpenKycModal", !0),
                          n("info", h),
                          n("load", !0),
                          n("login", !1),
                          c(
                            "notify/add",
                            {
                              message: r.app.i18n.t(
                                "page.main.messages.signIn"
                              ),
                            },
                            { root: !0 }
                          ),
                          r.app.$rest.ws.readyState &&
                            r.app.$rest.ws.close &&
                            r.app.$rest.ws.close(),
                          localStorage.getItem("orders") &&
                            c(
                              "updateOrders",
                              JSON.parse(localStorage.getItem("orders"))
                            ));
                      case 8:
                      case "end":
                        return o.stop();
                    }
                }, o);
              })
            )();
          },
          authSocket: function () {
            var e = this;
            return Object(c.a)(
              regeneratorRuntime.mark(function t() {
                var r, o;
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.next = 2),
                          e.app.$rest
                            .api("POST:user/auth/socket/get/token", {})
                            .then(function (e) {
                              return e.data;
                            })
                        );
                      case 2:
                        return (
                          (r = t.sent),
                          (t.next = 5),
                          e.app.$rest.ws
                            .request("auth", { token: r.token })
                            .catch(function () {
                              return null;
                            })
                        );
                      case 5:
                        return (
                          (o = t.sent),
                          t.abrupt("return", { sendWs: o, token: r.token })
                        );
                      case 7:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          verificationInit: function () {
            var e = this;
            return Object(c.a)(
              regeneratorRuntime.mark(function t() {
                var r;
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.next = 2),
                          e.app.$rest
                            .api("POST:user/verification/init", {})
                            .then(function (e) {
                              return e.data;
                            })
                        );
                      case 2:
                        return (r = t.sent), t.abrupt("return", r);
                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          editEmail: function (e, t) {
            var r = this;
            return Object(c.a)(
              regeneratorRuntime.mark(function o() {
                var n, c, l, d;
                return regeneratorRuntime.wrap(function (o) {
                  for (;;)
                    switch ((o.prev = o.next)) {
                      case 0:
                        return (
                          (n = e.commit),
                          (c = e.dispatch),
                          (l = t.email),
                          n("load", !1),
                          (o.next = 5),
                          r.app.$rest
                            .api("PUT:user/profile/edit/email", {
                              email: l,
                              lang: r.app.i18n.locale,
                            })
                            .then(function (e) {
                              return e.data;
                            })
                            .catch(function (e) {
                              return (
                                c(
                                  "notify/add",
                                  { type: "error", message: e.message },
                                  { root: !0 }
                                ),
                                null
                              );
                            })
                        );
                      case 5:
                        if (((d = o.sent), n("load", !0), !d)) {
                          o.next = 10;
                          break;
                        }
                        return (
                          c(
                            "notify/add",
                            {
                              message: r.app.i18n.t(
                                "page.main.messages.checkEmail"
                              ),
                            },
                            { root: !0 }
                          ),
                          o.abrupt("return", d)
                        );
                      case 10:
                      case "end":
                        return o.stop();
                    }
                }, o);
              })
            )();
          },
          updateOrders: function (e, t) {
            var r = this;
            return Object(c.a)(
              regeneratorRuntime.mark(function o() {
                var n, c;
                return regeneratorRuntime.wrap(function (o) {
                  for (;;)
                    switch ((o.prev = o.next)) {
                      case 0:
                        return (
                          (n = e.commit)("load", !1),
                          (o.next = 4),
                          r.app.$rest.api(
                            "PUT:user/exchanger/order/update/owner",
                            { orders: t }
                          )
                        );
                      case 4:
                        if (((c = o.sent), n("load", !0), !c)) {
                          o.next = 8;
                          break;
                        }
                        return o.abrupt(
                          "return",
                          localStorage.removeItem("orders")
                        );
                      case 8:
                      case "end":
                        return o.stop();
                    }
                }, o);
              })
            )();
          },
          editPassword: function (e, t) {
            var r = this;
            return Object(c.a)(
              regeneratorRuntime.mark(function o() {
                var n, c, l, d, m;
                return regeneratorRuntime.wrap(function (o) {
                  for (;;)
                    switch ((o.prev = o.next)) {
                      case 0:
                        return (
                          (n = e.commit),
                          (c = e.dispatch),
                          (l = t.oldPassword),
                          (d = t.newPassword),
                          n("load", !1),
                          (o.next = 5),
                          r.app.$rest
                            .api("PUT:user/profile/edit/password", {
                              oldPassword: l,
                              newPassword: d,
                            })
                            .then(function (e) {
                              return e.data;
                            })
                            .catch(function (e) {
                              return (
                                c(
                                  "notify/add",
                                  { type: "error", message: e.message },
                                  { root: !0 }
                                ),
                                null
                              );
                            })
                        );
                      case 5:
                        if (((m = o.sent), n("load", !0), !m)) {
                          o.next = 12;
                          break;
                        }
                        return (
                          c("notify/add", {}, { root: !0 }),
                          o.abrupt("return", !0)
                        );
                      case 12:
                        return o.abrupt("return", !1);
                      case 13:
                      case "end":
                        return o.stop();
                    }
                }, o);
              })
            )();
          },
          editMain: function (e, t) {
            var r = this;
            return Object(c.a)(
              regeneratorRuntime.mark(function o() {
                var n, c, l, d, m, f, x, h, w;
                return regeneratorRuntime.wrap(function (o) {
                  for (;;)
                    switch ((o.prev = o.next)) {
                      case 0:
                        return (
                          (n = e.commit),
                          (c = e.dispatch),
                          (l = t.phone),
                          (d = t.dateOfBirth),
                          (m = t.first_name),
                          (f = t.last_name),
                          (x = t.notifyLogin),
                          (h = t.notifyChangePass),
                          n("load", !1),
                          (o.next = 5),
                          r.app.$rest
                            .api("POST:user/profile/edit/main", {
                              phone: l || void 0,
                              dateOfBirth: d || void 0,
                              firstName: m || void 0,
                              lastName: f || void 0,
                              notifyLogin: void 0 !== x ? x : void 0,
                              notifyChangePass: void 0 !== h ? h : void 0,
                            })
                            .then(function (e) {
                              return e.data;
                            })
                            .catch(function (e) {
                              return (
                                c(
                                  "notify/add",
                                  { type: "error", message: e.message },
                                  { root: !0 }
                                ),
                                null
                              );
                            })
                        );
                      case 5:
                        if (((w = o.sent), n("load", !0), c("checkAuth"), !w)) {
                          o.next = 10;
                          break;
                        }
                        return o.abrupt(
                          "return",
                          c(
                            "notify/add",
                            {
                              message: r.app.i18n.t(
                                "page.main.messages.editMain"
                              ),
                            },
                            { root: !0 }
                          )
                        );
                      case 10:
                      case "end":
                        return o.stop();
                    }
                }, o);
              })
            )();
          },
          restPassword: function (e, t) {
            var r = this;
            return Object(c.a)(
              regeneratorRuntime.mark(function o() {
                var n, c, l, d, f;
                return regeneratorRuntime.wrap(function (o) {
                  for (;;)
                    switch ((o.prev = o.next)) {
                      case 0:
                        return (
                          (n = e.commit),
                          (c = e.dispatch),
                          (l = t.email),
                          (d = t.captcha),
                          n("load", !1),
                          n("setRequestState", { restPassword: "pending" }),
                          (o.next = 6),
                          r.app.$rest
                            .api(
                              "POST:user/auth/reset-password",
                              m(
                                { email: l, lang: r.app.i18n.locale },
                                d ? { captcha: d } : {}
                              )
                            )
                            .then(function (e) {
                              return e.data;
                            })
                            .catch(function (e) {
                              return (
                                n("setRequestState", {
                                  restPassword: "rejected",
                                }),
                                n("setRequestError", {
                                  errorCode: e.errorCode,
                                  message: e.message,
                                  key: "restPassword",
                                }),
                                c(
                                  "notify/add",
                                  { type: "error", message: e.message },
                                  { root: !0 }
                                ),
                                null
                              );
                            })
                        );
                      case 6:
                        if (((f = o.sent), n("load", !0), !f)) {
                          o.next = 11;
                          break;
                        }
                        return (
                          n("setRequestState", { restPassword: "success" }),
                          o.abrupt(
                            "return",
                            c(
                              "notify/add",
                              {
                                message: r.app.i18n.t(
                                  "page.main.messages.checkEmailInstructions"
                                ),
                              },
                              { root: !0 }
                            )
                          )
                        );
                      case 11:
                      case "end":
                        return o.stop();
                    }
                }, o);
              })
            )();
          },
          resetPassword: function (e, t) {
            var r = this;
            return Object(c.a)(
              regeneratorRuntime.mark(function o() {
                var n, c, l, d, m;
                return regeneratorRuntime.wrap(function (o) {
                  for (;;)
                    switch ((o.prev = o.next)) {
                      case 0:
                        return (
                          (n = e.commit),
                          (c = e.dispatch),
                          (l = t.token),
                          (d = t.password),
                          n("load", !1),
                          (o.next = 5),
                          r.app.$rest
                            .api("POST:user/auth/reset-password/confirm", {
                              token: l,
                              password: d,
                              lang: r.app.i18n.locale,
                            })
                            .then(function (e) {
                              return e.data;
                            })
                            .catch(function (e) {
                              return (
                                c(
                                  "notify/add",
                                  { type: "error", message: e.message },
                                  { root: !0 }
                                ),
                                null
                              );
                            })
                        );
                      case 5:
                        if (((m = o.sent), n("load", !0), !m)) {
                          o.next = 11;
                          break;
                        }
                        return (
                          c(
                            "notify/add",
                            {
                              message: r.app.i18n.t(
                                "page.main.messages.changedPassword"
                              ),
                            },
                            { root: !0 }
                          ),
                          m.resultAuth &&
                            (n("info", m.resultAuth),
                            c(
                              "notify/add",
                              {
                                message: r.app.i18n.t(
                                  "page.main.messages.signIn"
                                ),
                              },
                              { root: !0 }
                            )),
                          o.abrupt("return", !0)
                        );
                      case 11:
                      case "end":
                        return o.stop();
                    }
                }, o);
              })
            )();
          },
          confirmEmail: function (e, t) {
            var r = this;
            return Object(c.a)(
              regeneratorRuntime.mark(function o() {
                var n, c, l;
                return regeneratorRuntime.wrap(function (o) {
                  for (;;)
                    switch ((o.prev = o.next)) {
                      case 0:
                        return (
                          (n = e.commit),
                          (c = e.dispatch),
                          (l = t.secretCode),
                          n("load", !1),
                          (o.next = 5),
                          r.app.$rest
                            .api("POST:user/profile/edit/email/confirm", {
                              secretCode: l,
                              lang: r.app.i18n.locale,
                            })
                            .then(function (e) {
                              return e.data;
                            })
                            .catch(function (e) {
                              return (
                                c(
                                  "notify/add",
                                  { type: "error", message: e.message },
                                  { root: !0 }
                                ),
                                null
                              );
                            })
                        );
                      case 5:
                        n("load", !0);
                      case 6:
                      case "end":
                        return o.stop();
                    }
                }, o);
              })
            )();
          },
          otpCreate: function (e) {
            var t = this;
            return Object(c.a)(
              regeneratorRuntime.mark(function r() {
                var o, n, c;
                return regeneratorRuntime.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (o = e.commit),
                          (n = e.dispatch),
                          o("load", !1),
                          (r.next = 4),
                          t.app.$rest
                            .api("POST:user/profile/secure/otp/create")
                            .then(function (e) {
                              return e.data;
                            })
                            .catch(function (e) {
                              return (
                                n(
                                  "notify/add",
                                  { type: "error", message: e.message },
                                  { root: !0 }
                                ),
                                null
                              );
                            })
                        );
                      case 4:
                        (c = r.sent), o("load", !0), c && o("qr", c.otp);
                      case 7:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
          otpDelete: function (e, t) {
            var r = this;
            return Object(c.a)(
              regeneratorRuntime.mark(function o() {
                var n, c, code, l;
                return regeneratorRuntime.wrap(function (o) {
                  for (;;)
                    switch ((o.prev = o.next)) {
                      case 0:
                        return (
                          (n = e.commit),
                          (c = e.dispatch),
                          (code = t.code),
                          n("load", !1),
                          n("qr", !1),
                          (o.next = 6),
                          r.app.$rest
                            .api("DELETE:user/profile/secure/otp/delete", {
                              code: code,
                            })
                            .then(function (e) {
                              return e.data;
                            })
                            .catch(function (e) {
                              return n("load", !0), Promise.reject(e);
                            })
                        );
                      case 6:
                        if (((l = o.sent), c("checkAuth"), n("load", !0), l)) {
                          o.next = 11;
                          break;
                        }
                        return o.abrupt("return", !1);
                      case 11:
                        c(
                          "notify/add",
                          {
                            message: r.app.i18n.t(
                              "page.main.messages.2faDeleted"
                            ),
                          },
                          { root: !0 }
                        );
                      case 12:
                      case "end":
                        return o.stop();
                    }
                }, o);
              })
            )();
          },
          otpConfirm: function (e, code) {
            var t = this;
            return Object(c.a)(
              regeneratorRuntime.mark(function r() {
                var o, n, c, l;
                return regeneratorRuntime.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (o = e.commit),
                          (n = e.dispatch),
                          (c = e.state),
                          o("load", !1),
                          (r.next = 4),
                          t.app.$rest
                            .api("POST:user/profile/secure/otp/confirm", {
                              code: code,
                              userId: c._id,
                            })
                            .then(function (e) {
                              return e.data;
                            })
                            .catch(function (e) {
                              return (
                                n(
                                  "notify/add",
                                  { type: "error", message: e.message },
                                  { root: !0 }
                                ),
                                null
                              );
                            })
                        );
                      case 4:
                        return (
                          (l = r.sent),
                          o("load", !0),
                          l &&
                            (n(
                              "notify/add",
                              {
                                message: t.app.i18n.t(
                                  "page.main.messages.2faConfirmed"
                                ),
                              },
                              { root: !0 }
                            ),
                            n("checkAuth")),
                          r.abrupt("return", Boolean(l))
                        );
                      case 8:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
          checkAuth: function (e) {
            var t = this;
            return Object(c.a)(
              regeneratorRuntime.mark(function r() {
                var n, c;
                return regeneratorRuntime.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        (n = e.commit), (r.next = 3);
                        break;
                      case 3:
                        return (
                          n("load", !1),
                          (r.next = 6),
                          t.app.$rest
                            .api("GET:user/auth/session/get")
                            .then(function (e) {
                              return e.data;
                            })
                            .catch(function (e) {
                              return 40301 === e.errorCode ? 403 : null;
                            })
                        );
                      case 6:
                        return (
                          (c = r.sent),
                          n("load", !0),
                          c && "object" === Object(o.a)(c) && n("info", c),
                          r.abrupt("return", c)
                        );
                      case 10:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
          deleteAccount: function (e) {
            var t = this;
            return Object(c.a)(
              regeneratorRuntime.mark(function r() {
                var o, n, c;
                return regeneratorRuntime.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (o = e.commit),
                          (n = e.dispatch),
                          (r.next = 3),
                          t.app.$rest
                            .api("DELETE:user/profile/access/delete")
                            .then(function (e) {
                              return e.data;
                            })
                            .catch(function (e) {
                              return (
                                n(
                                  "notify/add",
                                  { type: "error", message: e.message },
                                  { root: !0 }
                                ),
                                null
                              );
                            })
                        );
                      case 3:
                        (c = r.sent),
                          o("info", null),
                          c &&
                            n(
                              "notify/add",
                              {
                                message: t.app.i18n.t(
                                  "page.main.messages.goodBye"
                                ),
                              },
                              { root: !0 }
                            );
                      case 6:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
          blockAccount: function (e) {
            var t = this;
            return Object(c.a)(
              regeneratorRuntime.mark(function r() {
                var o, n, c;
                return regeneratorRuntime.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (o = e.commit),
                          (n = e.dispatch),
                          (r.next = 3),
                          t.app.$rest
                            .api("PUT:user/profile/access/block")
                            .then(function (e) {
                              return e.data;
                            })
                            .catch(function (e) {
                              return (
                                n(
                                  "notify/add",
                                  { type: "error", message: e.message },
                                  { root: !0 }
                                ),
                                null
                              );
                            })
                        );
                      case 3:
                        (c = r.sent),
                          o("info", null),
                          c &&
                            n(
                              "notify/add",
                              {
                                message: t.app.i18n.t(
                                  "page.main.messages.goodBye"
                                ),
                              },
                              { root: !0 }
                            );
                      case 6:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
          getVerifications: function (e) {
            var t = this;
            return Object(c.a)(
              regeneratorRuntime.mark(function r() {
                var o, n, c;
                return regeneratorRuntime.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (o = e.commit),
                          (n = e.dispatch),
                          (r.next = 3),
                          t.app.$rest
                            .api("GET:user/verification/get", { limit: 999 })
                            .then(function (e) {
                              return e.data;
                            })
                            .catch(function (e) {
                              return (
                                n(
                                  "notify/add",
                                  { type: "error", message: e.message },
                                  { root: !0 }
                                ),
                                null
                              );
                            })
                        );
                      case 3:
                        (c = r.sent) && o("verifications", c.verifications);
                      case 5:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
          getWallets: function (e) {
            var t = this;
            return Object(c.a)(
              regeneratorRuntime.mark(function r() {
                var o, n, c;
                return regeneratorRuntime.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (o = e.commit),
                          (n = e.dispatch),
                          (r.next = 3),
                          t.app.$rest
                            .api("GET:user/wallets/balance", {})
                            .then(function (e) {
                              return e.data;
                            })
                            .catch(function (e) {
                              return (
                                n(
                                  "notify/add",
                                  { type: "error", message: e.message },
                                  { root: !0 }
                                ),
                                null
                              );
                            })
                        );
                      case 3:
                        (c = r.sent) && o("wallets", c.wallets);
                      case 5:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
          getWalletAddress: function (e, t) {
            var r = this;
            return Object(c.a)(
              regeneratorRuntime.mark(function o() {
                var n, c, l, d;
                return regeneratorRuntime.wrap(function (o) {
                  for (;;)
                    switch ((o.prev = o.next)) {
                      case 0:
                        return (
                          e.commit,
                          (n = e.dispatch),
                          (c = t.walletId),
                          (l = t.network),
                          (o.next = 4),
                          r.app.$rest
                            .api("GET:user/wallets/address", {
                              walletId: c,
                              network: l,
                            })
                            .then(function (e) {
                              return e.data;
                            })
                            .catch(function (e) {
                              return (
                                n(
                                  "notify/add",
                                  { type: "error", message: e.message },
                                  { root: !0 }
                                ),
                                null
                              );
                            })
                        );
                      case 4:
                        if (!(d = o.sent)) {
                          o.next = 7;
                          break;
                        }
                        return o.abrupt("return", d.wallet);
                      case 7:
                      case "end":
                        return o.stop();
                    }
                }, o);
              })
            )();
          },
          destroyAuth: function (e) {
            var t = this;
            return Object(c.a)(
              regeneratorRuntime.mark(function r() {
                var o, n, c;
                return regeneratorRuntime.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (o = e.commit),
                          (n = e.dispatch),
                          o("load", !1),
                          (r.next = 4),
                          t.app.$rest
                            .api("DELETE:user/auth/session/destroy")
                            .then(function (e) {
                              return e.data;
                            })
                            .catch(function (e) {
                              return (
                                n(
                                  "notify/add",
                                  { type: "error", message: e.message },
                                  { root: !0 }
                                ),
                                null
                              );
                            })
                        );
                      case 4:
                        if (
                          ((c = r.sent), o("load", !0), o("info", null), !c)
                        ) {
                          r.next = 12;
                          break;
                        }
                        return (
                          n(
                            "notify/add",
                            {
                              message: t.app.i18n.t(
                                "page.main.messages.goodBye"
                              ),
                            },
                            { root: !0 }
                          ),
                          r.abrupt("return", !0)
                        );
                      case 12:
                        return r.abrupt("return", !1);
                      case 13:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
        };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, r) {
      var map = {
        "./en-gb": 189,
        "./en-gb.js": 189,
        "./ru": 190,
        "./ru.js": 190,
        "./uk": 191,
        "./uk.js": 191,
      };
      function o(e) {
        var t = n(e);
        return r(t);
      }
      function n(e) {
        if (!r.o(map, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return map[e];
      }
      (o.keys = function () {
        return Object.keys(map);
      }),
        (o.resolve = n),
        (e.exports = o),
        (o.id = 464);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, r) {
      "use strict";
      r(291);
    },
    function (e, t, r) {
      var o = r(41)(function (i) {
        return i[1];
      });
      o.push([
        e.i,
        '#preloader[data-v-28cb2dcd]{height:100%;left:0;position:fixed;top:0;width:100%}#loader[data-v-28cb2dcd]{animation:spin-28cb2dcd 2s linear infinite;border:3px solid transparent;border-radius:50%;border-top-color:#00c3d3;display:block;height:150px;left:50%;margin:-75px 0 0 -75px;position:relative;top:50%;width:150px}#loader[data-v-28cb2dcd]:before{animation:spin-28cb2dcd 3s linear infinite;border:3px solid transparent;border-radius:50%;border-top-color:#00d05c;bottom:5px;content:"";left:5px;position:absolute;right:5px;top:5px}#loader[data-v-28cb2dcd]:after{animation:spin-28cb2dcd 1.5s linear infinite;border:3px solid transparent;border-radius:50%;border-top-color:#3ac125;bottom:15px;content:"";left:15px;position:absolute;right:15px;top:15px}@keyframes spin-28cb2dcd{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}',
        "",
      ]),
        (o.locals = {}),
        (e.exports = o);
    },
    function (e) {
      e.exports = JSON.parse(
        '{"defaultLang":"en","baseUrl":"","wsUrl":"","projectName":"CoinLuxy","server":{"dev":{"port":8080,"host":"localhost"}},"__proxy_path":"/service","__proxy_to_rest_api":"/service","servicePath":"/service","fsPath":"/service/fs","apiPath":"/service/api/v1/","logoPath":"/service/fs/img/logo/big/logo.png","faviconPath":"/service/fs/img/favicon/32/favicon.png","styles":{"exchangeForm":"v2"},"eslint":{"status":false},"i18nStrategy":"prefix","targetBuild":"static","buildSSR":false,"newRouteV2Method":true}'
      );
    },
  ]),
  [[315, 40, 4, 41]],
]);
