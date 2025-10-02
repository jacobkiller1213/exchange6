(window.webpackJsonp = window.webpackJsonp || []).push([
  [17, 42, 43, 45],
  {
    509: function (t, e, r) {
      "use strict";
      r(112);
      var n = function (t, e) {
          return t >= e ? t : e;
        },
        o = {
          props: {
            currentPage: { type: Number, required: !0 },
            totalPages: { type: Number, required: !0 },
            itemsPerPage: { type: Number, default: 10 },
            totalItems: { type: Number, default: 0 },
            visiblePages: { type: Number, default: 10 },
          },
          data: function () {
            return {};
          },
          computed: {
            lastPage: function () {
              return this.totalPages
                ? this.totalPages
                : this.totalItems % this.itemsPerPage == 0
                ? this.totalItems / this.itemsPerPage
                : Math.floor(this.totalItems / this.itemsPerPage) + 1;
            },
            paginationRange: function () {
              for (
                var t =
                    this.currentPage - this.visiblePages / 2 <= 0
                      ? 1
                      : this.currentPage + this.visiblePages / 2 > this.lastPage
                      ? n(this.lastPage - this.visiblePages + 1, 1)
                      : Math.ceil(this.currentPage - this.visiblePages / 2),
                  e = [],
                  i = 0;
                i < this.visiblePages && i < this.lastPage;
                i++
              )
                e.push(t + i);
              return e;
            },
          },
          methods: {
            pageChanged: function (t) {
              this.$emit("page-changed", t);
            },
            activePage: function (t) {
              return this.currentPage === t ? "pagination-current" : "";
            },
          },
        },
        c = r(7),
        component = Object(c.a)(
          o,
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "pagination" }, [
              e(
                "ul",
                [
                  t.currentPage > 1
                    ? e("li", [
                        e(
                          "a",
                          {
                            attrs: { href: "#", "aria-label": "Previous" },
                            on: {
                              click: function (e) {
                                return e.preventDefault(), t.pageChanged(1);
                              },
                            },
                          },
                          [
                            e("span", { attrs: { "aria-hidden": "true" } }, [
                              t._v("«"),
                            ]),
                          ]
                        ),
                      ])
                    : t._e(),
                  t._v(" "),
                  t._l(t.paginationRange, function (r, i) {
                    return e("li", { key: i }, [
                      e(
                        "a",
                        {
                          class: t.activePage(r),
                          attrs: { href: "#" },
                          on: {
                            click: function (e) {
                              return e.preventDefault(), t.pageChanged(r);
                            },
                          },
                        },
                        [t._v(t._s(r))]
                      ),
                    ]);
                  }),
                  t._v(" "),
                  t.currentPage != t.totalPages
                    ? e("li", [
                        e(
                          "a",
                          {
                            attrs: { href: "#", "aria-label": "Next" },
                            on: {
                              click: function (e) {
                                return (
                                  e.preventDefault(), t.pageChanged(t.lastPage)
                                );
                              },
                            },
                          },
                          [
                            e("span", { attrs: { "aria-hidden": "true" } }, [
                              t._v("»"),
                            ]),
                          ]
                        ),
                      ])
                    : t._e(),
                ],
                2
              ),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.a = component.exports;
    },
    510: function (t, e) {
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzkiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAzOSAzOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB3aWR0aD0iMzgiIGhlaWdodD0iMzgiIHJ4PSIxOSIgZmlsbD0iIzdEOUFBRiIvPgo8cGF0aCBkPSJNMTkuMTY2NSAzMC41MkMxNS4xNjY1IDMwLjUyIDExLjYzMDUgMjguNDcyIDkuNTY2NSAyNS4zNjhDOS42MTQ1IDIyLjE4NCAxNS45NjY1IDIwLjQ0IDE5LjE2NjUgMjAuNDRDMjIuMzUwNSAyMC40NCAyOC43MTg1IDIyLjE4NCAyOC43NjY1IDI1LjM2OEMyNi43MDI1IDI4LjQ3MiAyMy4xNjY1IDMwLjUyIDE5LjE2NjUgMzAuNTJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTkuMTY2NSA3LjhDMjEuODIyNSA3LjggMjMuOTY2NSA5Ljk0NCAyMy45NjY1IDEyLjZDMjMuOTY2NSAxNS4yNTYgMjEuODIyNSAxNy40IDE5LjE2NjUgMTcuNEMxNi41MTA1IDE3LjQgMTQuMzY2NSAxNS4yNTYgMTQuMzY2NSAxMi42QzE0LjM2NjUgOS45NDQgMTYuNTEwNSA3LjggMTkuMTY2NSA3LjhaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K";
    },
    513: function (t, e) {
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxOCAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkgMEM1LjI1IDAgMi4wNDc1IDIuMzMyNSAwLjc1IDUuNjI1QzIuMDQ3NSA4LjkxNzUgNS4yNSAxMS4yNSA5IDExLjI1QzEyLjc1IDExLjI1IDE1Ljk1MjUgOC45MTc1IDE3LjI1IDUuNjI1QzE1Ljk1MjUgMi4zMzI1IDEyLjc1IDAgOSAwWk05IDkuMzc1QzYuOTMgOS4zNzUgNS4yNSA3LjY5NSA1LjI1IDUuNjI1QzUuMjUgMy41NTUgNi45MyAxLjg3NSA5IDEuODc1QzExLjA3IDEuODc1IDEyLjc1IDMuNTU1IDEyLjc1IDUuNjI1QzEyLjc1IDcuNjk1IDExLjA3IDkuMzc1IDkgOS4zNzVaTTkgMy4zNzVDNy43NTUgMy4zNzUgNi43NSA0LjM4IDYuNzUgNS42MjVDNi43NSA2Ljg3IDcuNzU1IDcuODc1IDkgNy44NzVDMTAuMjQ1IDcuODc1IDExLjI1IDYuODcgMTEuMjUgNS42MjVDMTEuMjUgNC4zOCAxMC4yNDUgMy4zNzUgOSAzLjM3NVoiIGZpbGw9IiM2MTk0MjAiLz4KPC9zdmc+Cg==";
    },
    514: function (t, e, r) {
      "use strict";
      r.r(e);
      r(28), r(91), r(25);
      var n = [
          function () {
            var t = this._self._c;
            return t("div", { staticClass: "news-bloc-info_item-photo" }, [
              t("img", { attrs: { src: r(510), alt: "" } }),
            ]);
          },
        ],
        o = (r(11), r(12), r(15), r(6), r(19), r(13), r(20), r(4)),
        c = (r(112), r(3));
      function l(t, e) {
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
            ? l(Object(r), !0).forEach(function (e) {
                Object(o.a)(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var f = {
          components: { pagination: r(509).a },
          props: {
            pagination: { type: Boolean, default: !0 },
            limit: { type: Number, default: 999 },
          },
          computed: d(
            d(
              {},
              Object(c.c)({
                news: "news/getData",
                total_pages: "news/getTotalPages",
                current_page: "news/getCurrentPage",
                load: "news/getLoad",
              })
            ),
            {},
            {
              lang: function () {
                return this.$root.$i18n.locale;
              },
            }
          ),
          watch: {
            lang: function () {
              this.getNewsFull({
                lang: this.$root.$i18n.locale,
                limit: this.limit,
              });
            },
          },
          created: function () {
            this.getNewsFull({
              lang: this.$root.$i18n.locale,
              limit: this.limit,
            });
          },
          methods: d({}, Object(c.b)({ getNewsFull: "news/getNewsFull" })),
        },
        m = r(7),
        component = Object(m.a)(
          f,
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "news-bloc" }, [
              e("div", { staticClass: "bg-right" }, [
                t.news.length
                  ? e(
                      "div",
                      { staticClass: "container" },
                      [
                        e(
                          "transition",
                          { attrs: { name: "faded" } },
                          [
                            t.load
                              ? t._e()
                              : e("loader", { attrs: { responsive: !0 } }),
                          ],
                          1
                        ),
                        t._v(" "),
                        t.pagination
                          ? t._e()
                          : e("div", { staticClass: "zayvki-filter-main" }, [
                              e(
                                "div",
                                { staticClass: "zayvki-filter-main--top" },
                                [
                                  e("h3", { staticClass: "title-other" }, [
                                    t._v(t._s(t.$t("page.news.title"))),
                                  ]),
                                  t._v(" "),
                                  e(
                                    "div",
                                    {
                                      staticClass:
                                        "zayvki-filter-main--top__btn-group",
                                    },
                                    [
                                      e(
                                        "nuxt-link",
                                        {
                                          staticClass: "btn btn-look",
                                          attrs: {
                                            tag: "button",
                                            to: t.localePath("/news/"),
                                          },
                                        },
                                        [t._v(t._s(t.$t("page.news.all")))]
                                      ),
                                    ],
                                    1
                                  ),
                                ]
                              ),
                            ]),
                        t._v(" "),
                        e(
                          "ul",
                          { style: { opacity: t.load ? 1 : 0.5 } },
                          t._l(t.news.slice(0, t.limit), function (n) {
                            return e(
                              "li",
                              {
                                key: n._id,
                                style:
                                  n.title && t.load
                                    ? { cursor: "pointer" }
                                    : {
                                        background: "#EEE",
                                        transition: "all .3s",
                                        minHeight: "370px",
                                        borderRadius: "5px",
                                      },
                                on: {
                                  click: function (e) {
                                    t.$router.push(
                                      t.localePath("/news/".concat(n.link, "/"))
                                    );
                                  },
                                },
                              },
                              [
                                e(
                                  "div",
                                  { staticClass: "news-bloc-img" },
                                  [
                                    n.image && t.load
                                      ? e(
                                          "nuxt-link",
                                          {
                                            attrs: {
                                              to: t.localePath(
                                                "/news/".concat(n.link, "/")
                                              ),
                                            },
                                          },
                                          [
                                            e("img", {
                                              attrs: {
                                                src: t.$rest.urlImg(n.image)
                                                  .medium,
                                                alt: "",
                                              },
                                            }),
                                          ]
                                        )
                                      : t._e(),
                                  ],
                                  1
                                ),
                                t._v(" "),
                                n.title && t.load
                                  ? e(
                                      "div",
                                      { staticClass: "news-bloc-info" },
                                      [
                                        e(
                                          "p",
                                          { staticClass: "news-bloc-title" },
                                          [t._v(t._s(n.title))]
                                        ),
                                        t._v(" "),
                                        e(
                                          "div",
                                          {
                                            staticClass: "news-bloc-info_item",
                                          },
                                          [
                                            e(
                                              "div",
                                              {
                                                staticClass:
                                                  "news-bloc-info_item-photo-name",
                                              },
                                              [
                                                t._m(0, !0),
                                                t._v(" "),
                                                e(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "news-bloc-info_item-name",
                                                  },
                                                  [
                                                    e("p", [
                                                      t._v(
                                                        t._s(
                                                          n.author &&
                                                            n.author.name
                                                            ? n.author.name
                                                            : "Admin"
                                                        )
                                                      ),
                                                    ]),
                                                    t._v(" "),
                                                    e("span", [
                                                      t._v(
                                                        t._s(
                                                          t
                                                            .$moment(
                                                              n.createdAt
                                                            )
                                                            .format(
                                                              "DD MMM YYYY | HH:mm"
                                                            )
                                                        )
                                                      ),
                                                    ]),
                                                  ]
                                                ),
                                                t._v(" "),
                                                e(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "news-bloc-info_item-data",
                                                  },
                                                  [
                                                    e("span", [
                                                      e("img", {
                                                        attrs: {
                                                          src: r(513),
                                                          alt: "",
                                                        },
                                                      }),
                                                      t._v(" "),
                                                      e("span", [
                                                        t._v(t._s(n.views)),
                                                      ]),
                                                    ]),
                                                  ]
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    )
                                  : t._e(),
                              ]
                            );
                          }),
                          0
                        ),
                        t._v(" "),
                        t.pagination
                          ? e("pagination", {
                              attrs: {
                                "current-page": t.current_page,
                                "total-pages": t.total_pages,
                              },
                              on: {
                                "page-changed": function (e) {
                                  return t.getNewsFull({
                                    page: e,
                                    limit: t.limit,
                                    lang: t.$root.$i18n.locale,
                                  });
                                },
                              },
                            })
                          : t._e(),
                      ],
                      1
                    )
                  : e("div", { staticClass: "not-found-news" }, [
                      t._v(t._s(t.$t("page.news.news-not-found"))),
                    ]),
              ]),
            ]);
          },
          n,
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    519: function (t, e, r) {
      var content = r(528);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(42).default)("4fc3239c", content, !0, { sourceMap: !1 });
    },
    520: function (t, e, r) {
      var content = r(531);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(42).default)("f5cf0802", content, !0, { sourceMap: !1 });
    },
    525: function (t, e, r) {
      "use strict";
      var n = r(4),
        o =
          (r(112),
          r(6),
          r(34),
          r(69),
          {
            name: "BpVuejsDropdown",
            props: {
              role: { type: String, required: !1, default: "" },
              align: { type: String, required: !1, default: "auto" },
              alignOrder: {
                type: Array,
                required: !1,
                default: function () {
                  return [
                    "right-bottom",
                    "right-top",
                    "left-bottom",
                    "left-top",
                    "bottom-left",
                    "bottom-right",
                    "top-left",
                    "top-right",
                  ];
                },
              },
              x: { type: Number, required: !1, default: 0 },
              y: { type: Number, required: !1, default: 0 },
              beforeOpen: {
                type: Function,
                required: !1,
                default: function (t) {
                  return t();
                },
              },
              trigger: { type: String, required: !1, default: "click" },
              closeOnClick: { type: Boolean, required: !1, default: !1 },
              isIcon: { type: Boolean, required: !1, default: !0 },
              className: { type: String, required: !1, default: "" },
            },
            data: function () {
              return {
                isHidden: !0,
                isLoading: !1,
                id: null,
                timeout: null,
                top: void 0,
                right: void 0,
                bottom: void 0,
                left: void 0,
                width: void 0,
              };
            },
            watch: {},
            created: function () {
              var t = this,
                e = this.$root;
              e.$on("bp-dropdown:open", function () {
                return (t.isHidden = !0);
              }),
                e.$on("bp-dropdown:hide", function () {
                  return (t.isHidden = !0);
                }),
                "click" !== this.trigger ||
                  e["is-bp-dropdown"] ||
                  (Object.defineProperty(e, "is-bp-dropdown", {
                    enumerable: !1,
                    configurable: !1,
                    writable: !1,
                    value: !0,
                  }),
                  (document.onmousedown = function (t) {
                    var r = t.target;
                    r.closest(".bp-dropdown__btn") ||
                      r.closest(".bp-dropdown__body") ||
                      e.$emit("bp-dropdown:hide");
                  })),
                (this.id = "bp-dropdown-" + this.generateRandomId());
            },
            methods: {
              generateRandomId: function () {
                return Math.random().toString(36).substr(2, 10);
              },
              _onToggle: function (t) {
                "click" === this.trigger && this.checkCustomCallback(t);
              },
              _onBtnEnter: function (t) {
                "hover" === this.trigger &&
                  this.isHidden &&
                  this.checkCustomCallback(t);
              },
              _onBtnLeave: function (t) {
                var e = this;
                if ("hover" === this.trigger) {
                  this.role &&
                    (this.timeout = setTimeout(function () {
                      return (e.isHidden = !0);
                    }, 100));
                  var r = t.toElement;
                  if (r)
                    r.closest(".bp-dropdown__btn") ||
                      r.closest(".bp-dropdown__body") ||
                      this.prepare();
                }
              },
              _onBodyClick: function () {
                this.closeOnClick && (this.isHidden = !0);
              },
              _onBodyEnter: function () {
                this.timeout && clearTimeout(this.timeout);
              },
              _onBodyLeave: function (t) {
                if ("hover" === this.trigger) {
                  var e = t.toElement;
                  e &&
                    (e.closest(".bp-dropdown__btn") ||
                      e.closest(".bp-dropdown__sub") ||
                      this.prepare());
                }
              },
              checkCustomCallback: function (t) {
                var e = this;
                if (this.isHidden) {
                  var r = new Promise(function (t) {
                    (e.isLoading = !0), e.beforeOpen.call(e, t);
                  });
                  r.then(function () {
                    (e.isLoading = !1),
                      t.target.closest(".bp-dropdown__body") ||
                        e.$root.$emit("bp-dropdown:open"),
                      setTimeout(e.prepare, 0);
                  }),
                    r.catch(function () {
                      throw Error("bp-dropdown promise error");
                    });
                } else this.prepare();
              },
              prepare: function () {
                var t = this;
                (this.isHidden = !this.isHidden),
                  this.isHidden ||
                    this.$nextTick(function () {
                      var button = t.$el.firstElementChild,
                        e = document.getElementById(t.id);
                      t.setWidth(button.offsetWidth), t.setPosition(button, e);
                    });
              },
              setWidth: function (t) {
                this.width = t;
              },
              setPosition: function (t, body) {
                if (t && body) {
                  var rect;
                  if ("auto" === this.align)
                    for (
                      var e = document.documentElement.clientWidth,
                        r = document.documentElement.clientHeight,
                        i = 0;
                      i <= this.alignOrder.length;
                      i++
                    ) {
                      var n =
                        i === this.alignOrder.length
                          ? this.alignOrder[0]
                          : this.alignOrder[i];
                      if (
                        (rect = this.calcRectFromAlign(t, body, n)).left >=
                          pageXOffset &&
                        rect.top >= pageYOffset &&
                        rect.right <= pageXOffset + e &&
                        rect.bottom <= pageYOffset + r
                      )
                        break;
                    }
                  else rect = this.calcRectFromAlign(t, body, this.align);
                  (this.top = rect.top), (this.left = rect.left);
                }
              },
              calcRectFromAlign: function (t, body, e) {
                var r,
                  n,
                  o = this.getCoords(t),
                  c = o.top,
                  l = o.left,
                  d = t.offsetWidth,
                  f = t.offsetHeight,
                  m = body.offsetWidth,
                  v = body.offsetHeight;
                return (
                  "top" === e
                    ? ((r = c + pageYOffset - v), (n = l + pageXOffset))
                    : "top-left" === e
                    ? ((r = c + pageYOffset - v), (n = l + pageXOffset - m + d))
                    : "right" === e ||
                      ("right-bottom" === e
                        ? ((r = c + pageYOffset), (n = l + pageXOffset + d))
                        : "right-top" === e
                        ? ((r = c + pageYOffset - v + f),
                          (n = l + pageXOffset + d))
                        : "bottom-left" === e
                        ? ((r = c + pageYOffset + f),
                          (n = l + pageXOffset - m + d))
                        : "left" === e ||
                          ("left-bottom" === e
                            ? ((r = c + pageYOffset), (n = l + pageXOffset - m))
                            : "left-top" === e
                            ? ((r = c + pageYOffset - v + f),
                              (n = l + pageXOffset - m))
                            : "bottom" === e ||
                              "bottom-right" === e ||
                              ((r = c + pageYOffset + f),
                              (n = l + pageXOffset)))),
                  {
                    top: (r += this.y),
                    left: (n += this.x),
                    bottom: r + v,
                    right: n + m,
                  }
                );
              },
              getCoords: function (t) {
                return {
                  top: (t = t.getBoundingClientRect()).top - pageYOffset,
                  left: t.left - pageXOffset,
                };
              },
            },
          }),
        c = (r(530), r(7)),
        component = Object(c.a)(
          o,
          function () {
            var t,
              e = this,
              r = e._self._c;
            return r(
              "div",
              {
                staticClass: "bp-dropdown",
                class: { className: e.className, "bp-dropdown--sub": e.role },
              },
              [
                r(
                  "span",
                  {
                    class:
                      ((t = {}),
                      Object(n.a)(
                        t,
                        "bp-dropdown__".concat(e.role ? "sub" : "btn"),
                        !0
                      ),
                      Object(n.a)(
                        t,
                        "bp-dropdown__".concat(
                          e.role ? "sub" : "btn",
                          "--active"
                        ),
                        !e.isHidden
                      ),
                      Object(n.a)(
                        t,
                        "".concat(e.className, "-bp__btn"),
                        e.className
                      ),
                      Object(n.a)(
                        t,
                        "".concat(e.className, "-bp__btn--active"),
                        !e.isHidden
                      ),
                      t),
                    on: {
                      click: e._onToggle,
                      mouseenter: e._onBtnEnter,
                      mouseleave: e._onBtnLeave,
                    },
                  },
                  [
                    e._t("btn"),
                    e._v(" "),
                    e.isIcon
                      ? e._t("icon", function () {
                          return [
                            e.isLoading
                              ? r(
                                  "svg",
                                  {
                                    staticClass:
                                      "bp-dropdown__icon bp-dropdown__icon--spin",
                                    attrs: { viewBox: "0 0 512 512" },
                                  },
                                  [
                                    r("path", {
                                      attrs: {
                                        fill: "currentColor",
                                        d: "M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z",
                                      },
                                    }),
                                  ]
                                )
                              : r(
                                  "svg",
                                  {
                                    staticClass: "bp-dropdown__icon",
                                    class: Object(n.a)(
                                      {},
                                      "bp-dropdown__icon--".concat(e.align),
                                      e.align
                                    ),
                                    attrs: { viewBox: "0 0 256 512" },
                                  },
                                  [
                                    r("path", {
                                      attrs: {
                                        fill: "currentColor",
                                        d: "M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z",
                                      },
                                    }),
                                  ]
                                ),
                          ];
                        })
                      : e._e(),
                  ],
                  2
                ),
                e._v(" "),
                r("transition", { attrs: { name: "fade" } }, [
                  e.isHidden
                    ? e._e()
                    : r(
                        "div",
                        {
                          staticClass: "bp-dropdown__body",
                          class: Object(n.a)(
                            {},
                            "".concat(e.className, "-bp__body"),
                            e.className
                          ),
                          style: {
                            minWidth: "".concat(e.width, "px"),
                            top: "".concat(e.top, "px"),
                            left: "".concat(e.left, "px"),
                          },
                          attrs: { id: e.id },
                          on: {
                            click: e._onBodyClick,
                            mouseenter: e._onBodyEnter,
                            mouseleave: e._onBodyLeave,
                          },
                        },
                        [e._t("body")],
                        2
                      ),
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
      e.a = component.exports;
    },
    527: function (t, e, r) {
      "use strict";
      r(519);
    },
    528: function (t, e, r) {
      var n = r(41)(function (i) {
        return i[1];
      });
      n.push([t.i, "ul[data-v-85c7a914]{padding:23px 0 20px}", ""]),
        (n.locals = {}),
        (t.exports = n);
    },
    529: function (t, e, r) {
      "use strict";
      (function (t) {
        r(12), r(19), r(13), r(20);
        var n = r(0),
          o = r(4),
          c =
            (r(10),
            r(15),
            r(6),
            r(40),
            r(312),
            r(25),
            r(113),
            r(11),
            r(50),
            r(112),
            r(311),
            r(3)),
          l = r(156),
          d = r(525);
        function f(t, e) {
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
        function m(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? f(Object(r), !0).forEach(function (e) {
                  Object(o.a)(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : f(Object(r)).forEach(function (e) {
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
          components: { Dropdown: d.a },
          data: function () {
            return {
              errorRoutes: "",
              from: "",
              to: "",
              val1: "",
              val2: "",
              amount: "",
              fromValues: {},
              toValues: {},
              routeValues: {},
              email: "",
              valid: 1,
              currentRoute: { to: {}, from: {}, rate: {}, instructions: [] },
            };
          },
          computed: m(
            m(
              {},
              Object(c.c)({
                info: "exchange/info",
                load: "exchange/load",
                profile: "user/info",
              })
            ),
            {},
            {
              instructions: function () {
                if (this.currentRoute && this.currentRoute.instructions)
                  return this.currentRoute.instructions.filter(function (t) {
                    return "createOrder" === t.step;
                  });
              },
              fromList: function () {
                var t = this,
                  e = {};
                return this.info
                  ? this.info
                      .sort(function (a, b) {
                        return a.from.positionIn > b.from.positionIn ? 1 : -1;
                      })
                      .map(function (e) {
                        return m(
                          m({}, e),
                          {},
                          {
                            can: t.info.some(function (r) {
                              return (
                                e.from.name === r.from.name &&
                                t.to.name === r.to.name
                              );
                            }),
                          }
                        );
                      })
                      .filter(function (t) {
                        return !e[t.from.xml] && ((e[t.from.xml] = !0), !0);
                      })
                  : [];
              },
              toList: function () {
                var t = this,
                  e = {};
                return this.info
                  ? this.info
                      .sort(function (a, b) {
                        return a.to.positionOut > b.to.positionOut ? 1 : -1;
                      })
                      .filter(function (t) {
                        return !e[t.to.xml] && ((e[t.to.xml] = !0), !0);
                      })
                      .map(function (e) {
                        return m(
                          m({}, e),
                          {},
                          {
                            can: t.info.some(function (r) {
                              return (
                                e.to.name === r.to.name &&
                                t.from.name === r.from.name
                              );
                            }),
                          }
                        );
                      })
                  : [];
              },
              matchedRoute: function () {
                var t = this;
                return this.info
                  ? this.info.find(function (e) {
                      return (
                        t.from.name === e.from.name && t.to.name === e.to.name
                      );
                    })
                  : { from: {}, rate: {}, to: {} };
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
                var n, o, c, l;
                return regeneratorRuntime.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (r.next = 2), e.routes();
                      case 2:
                        if (
                          ((n = {
                            from: e.$route.query.from,
                            to: e.$route.query.to,
                            amount: e.$route.query.amount,
                          }),
                          (c = n.to),
                          (l = n.amount),
                          ((o = n.from) && c) ||
                            !e.fromList ||
                            !e.fromList[0] ||
                            !e.toList ||
                            ((e.from = e.fromList[0].from),
                            t.nextTick(function () {
                              var t = e.toList.find(function (t) {
                                return t.can;
                              });
                              t && (e.to = t.to);
                            })),
                          l &&
                            (l > 0 && (e.val1 = Math.abs(l)),
                            l < 0 && (e.val2 = Math.abs(l))),
                          (e.info && e.info[0]) ||
                            (e.errorRoutes = "Routes not found"),
                          e.info)
                        ) {
                          r.next = 8;
                          break;
                        }
                        return r.abrupt("return", 0);
                      case 8:
                        o &&
                          (e.from = m(
                            {},
                            e.info.find(function (t) {
                              return t.from.xml === o;
                            }).from
                          )),
                          c &&
                            (e.to = m(
                              {},
                              e.info.find(function (t) {
                                return t.to.xml === c;
                              }).to
                            ));
                      case 10:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
          methods: m(
            m(
              {},
              Object(c.b)({
                routes: "exchange/routes",
                createOrder: "exchange/createOrder",
              })
            ),
            {},
            {
              create: function () {
                var t = this;
                return Object(n.a)(
                  regeneratorRuntime.mark(function e() {
                    var r, n, o, c, l, d, f;
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
                            return (
                              (n = Object.keys(t.fromValues).map(function (e) {
                                return { key: e, value: t.fromValues[e] };
                              })),
                              (o = Object.keys(t.toValues).map(function (e) {
                                return { key: e, value: t.toValues[e] };
                              })),
                              (c = Object.keys(t.routeValues).map(function (e) {
                                return { key: e, value: t.routeValues[e] };
                              })),
                              (l = {
                                routeId: r,
                                fromValues: n,
                                toValues: o,
                                routeValues: c,
                                agreement: !0,
                                email: t.email,
                                lang: t.$root.$i18n.locale,
                                amount: t.val1,
                              }),
                              (e.next = 9),
                              t.createOrder(l)
                            );
                          case 9:
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
                          case 11:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              calculate: function (t) {
                var e =
                  Object(l.BigNumber)(this.currentRoute.rate.out).dividedBy(
                    this.currentRoute.rate.in
                  ) || 1;
                if ("from" === t) {
                  var r = Object(l.BigNumber)(this.val2 || 0)
                    .plus(this.currentRoute.rate.outFeeAmount)
                    .dividedBy(e)
                    .decimalPlaces(this.currentRoute.from.decimal || 2, 2);
                  return r.lte(0)
                    ? ((this.val1 = 0), 0)
                    : ((this.val1 = r), Number(r));
                }
                if ("to" === t) {
                  var n = Object(l.BigNumber)(this.val1 || 0)
                    .multipliedBy(e)
                    .minus(this.currentRoute.rate.outFeeAmount)
                    .decimalPlaces(this.currentRoute.to.decimal || 2, 1);
                  return n.lte(0)
                    ? ((this.val2 = 0), 0)
                    : ((this.val2 = n), Number(n));
                }
              },
              setMaxValueTo: function () {
                (this.val2 = Number(this.currentRoute.rate.amount)),
                  this.calculate("from");
              },
              changeCurrency: function () {
                var t = this;
                return Object(n.a)(
                  regeneratorRuntime.mark(function e() {
                    var r, n;
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (r = {}),
                              t.from.xml && (r.from = t.from.xml),
                              t.to.xml && (r.to = t.to.xml),
                              t.$router.push({ query: r }),
                              (e.next = 6),
                              t.$rest.api(
                                "GET:public/exchanger/route/get/one",
                                {
                                  id: t.matchedRoute
                                    ? t.matchedRoute.routeId
                                    : "",
                                  lang: t.$i18n.locale,
                                }
                              )
                            );
                          case 6:
                            (n = e.sent).success &&
                              (t.currentRoute = n.data.route);
                          case 8:
                          case "end":
                            return e.stop();
                        }
                    }, e);
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
            }
          ),
        };
      }).call(this, r(92));
    },
    530: function (t, e, r) {
      "use strict";
      r(520);
    },
    531: function (t, e, r) {
      var n = r(41)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".bp-dropdown--sub,.bp-dropdown--sub .bp-dropdown__btn,.bp-dropdown--sub .bp-dropdown__sub{width:100%}.bp-dropdown--sub .bp-dropdown__icon{margin-left:auto}.bp-dropdown__btn{border:1px solid #efefef;cursor:pointer;padding:3px 5px;transition:background-color .1s ease}.bp-dropdown__btn,.bp-dropdown__sub{align-items:center;display:inline-flex}.bp-dropdown__btn--active{background-color:#eee}.bp-dropdown__icon{display:inline-block;height:15px;overflow:visible;transition:transform .1s ease;width:15px}.bp-dropdown__icon--spin{animation:spin 2s linear infinite;height:12px;width:12px}.bp-dropdown__icon--top{transform:rotate(-180deg)}.bp-dropdown__icon--right{transform:rotate(-90deg)}.bp-dropdown__icon--bottom{transform:rotate(0)}.bp-dropdown__icon--left{transform:rotate(-270deg)}.bp-dropdown__btn--active .bp-dropdown__icon--top,.bp-dropdown__sub--active .bp-dropdown__icon--top{transform:rotate(0)}.bp-dropdown__btn--active .bp-dropdown__icon--right,.bp-dropdown__sub--active .bp-dropdown__icon--right{transform:rotate(-270deg)}.bp-dropdown__btn--active .bp-dropdown__icon--bottom,.bp-dropdown__sub--active .bp-dropdown__icon--bottom{transform:rotate(-180deg)}.bp-dropdown__btn--active .bp-dropdown__icon--left,.bp-dropdown__sub--active .bp-dropdown__icon--left{transform:rotate(-90deg)}.bp-dropdown__body{background-color:#fff;box-shadow:0 5px 15px -5px rgba(0,0,0,.5);left:0;padding:6px 8px;position:fixed;top:0;z-index:9999}.fade-enter-active,.fade-leave-active{transition:opacity .1s}.fade-enter,.fade-leave-to{opacity:0}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(1turn)}}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    533: function (t, e, r) {
      "use strict";
      (function (t) {
        r(12), r(19), r(13), r(20);
        var n = r(0),
          o = r(4),
          c =
            (r(10),
            r(15),
            r(6),
            r(40),
            r(312),
            r(25),
            r(113),
            r(112),
            r(11),
            r(50),
            r(3)),
          l = r(156),
          d = r(525);
        function f(t, e) {
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
        function m(t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? f(Object(r), !0).forEach(function (e) {
                  Object(o.a)(t, e, r[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
              : f(Object(r)).forEach(function (e) {
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
          components: { Dropdown: d.a },
          data: function () {
            return {
              errorRoutes: "",
              from: "",
              to: "",
              val1: "",
              val2: "",
              amount: "",
              fromValues: {},
              toValues: {},
              routeValues: {},
              email: "",
              valid: 1,
              currentRoute: { to: {}, from: {}, rate: {} },
            };
          },
          computed: m(
            m(
              m({}, Object(c.c)("exchange", ["info", "load"])),
              Object(c.c)("user", { profile: "info" })
            ),
            {},
            {
              fromList: function () {
                var t = this,
                  e = {};
                return this.info
                  ? this.info
                      .sort(function (a, b) {
                        return a.from.positionIn > b.from.positionIn ? 1 : -1;
                      })
                      .map(function (e) {
                        return m(
                          m({}, e),
                          {},
                          {
                            can: t.info.some(function (r) {
                              return (
                                e.from.name === r.from.name &&
                                t.to.name === r.to.name
                              );
                            }),
                          }
                        );
                      })
                      .filter(function (t) {
                        return !e[t.from.xml] && ((e[t.from.xml] = !0), !0);
                      })
                  : [];
              },
              toList: function () {
                var t = this,
                  e = {};
                return this.info
                  ? this.info
                      .sort(function (a, b) {
                        return a.to.positionOut > b.to.positionOut ? 1 : -1;
                      })
                      .filter(function (t) {
                        return !e[t.to.xml] && ((e[t.to.xml] = !0), !0);
                      })
                      .map(function (e) {
                        return m(
                          m({}, e),
                          {},
                          {
                            can: t.info.some(function (r) {
                              return (
                                e.to.name === r.to.name &&
                                t.from.name === r.from.name
                              );
                            }),
                          }
                        );
                      })
                  : [];
              },
              matchedRoute: function () {
                var t = this;
                return this.info
                  ? this.info.find(function (e) {
                      return (
                        t.from.name === e.from.name && t.to.name === e.to.name
                      );
                    })
                  : { from: {}, rate: {}, to: {} };
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
                var n, o, c, l;
                return regeneratorRuntime.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (r.next = 2), e.routes();
                      case 2:
                        if (
                          ((n = e.$route.query),
                          (o = n.from),
                          (c = n.to),
                          (l = n.amount),
                          (o && c) ||
                            !e.fromList ||
                            !e.fromList[0] ||
                            !e.toList ||
                            ((e.from = e.fromList[0].from),
                            t.nextTick(function () {
                              var t = e.toList.find(function (t) {
                                return t.can;
                              });
                              t && (e.to = t.to);
                            })),
                          l &&
                            (l > 0 && (e.val1 = Math.abs(l)),
                            l < 0 && (e.val2 = Math.abs(l))),
                          (e.info && e.info[0]) ||
                            (e.errorRoutes = "Routes not found"),
                          e.info)
                        ) {
                          r.next = 8;
                          break;
                        }
                        return r.abrupt("return", 0);
                      case 8:
                        o &&
                          (e.from = m(
                            {},
                            e.info.find(function (t) {
                              return t.from.xml === o;
                            }).from
                          )),
                          c &&
                            (e.to = m(
                              {},
                              e.info.find(function (t) {
                                return t.to.xml === c;
                              }).to
                            ));
                      case 10:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
          methods: m(
            m(
              {},
              Object(c.b)({
                routes: "exchange/routes",
                createOrder: "exchange/createOrder",
              })
            ),
            {},
            {
              setVal2: function () {
                (this.val2 = Number(this.currentRoute.rate.amount)),
                  this.correctFrom();
              },
              correctFrom: function () {
                var t =
                    Object(l.BigNumber)(this.currentRoute.rate.out).dividedBy(
                      this.currentRoute.rate.in
                    ) || 1,
                  e = Object(l.BigNumber)(this.val2 || 0)
                    .plus(this.currentRoute.rate.outFeeAmount)
                    .dividedBy(t)
                    .decimalPlaces(this.currentRoute.from.decimal || 2);
                if (e.lte(0)) return (this.val1 = 0);
                this.val1 = e;
              },
              create: function () {
                var t = this;
                return Object(n.a)(
                  regeneratorRuntime.mark(function e() {
                    var r, n, o, c, l, d, f;
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
                            return (
                              (n = Object.keys(t.fromValues).map(function (e) {
                                return { key: e, value: t.fromValues[e] };
                              })),
                              (o = Object.keys(t.toValues).map(function (e) {
                                return { key: e, value: t.toValues[e] };
                              })),
                              (c = Object.keys(t.routeValues).map(function (e) {
                                return { key: e, value: t.routeValues[e] };
                              })),
                              (l = {
                                routeId: r,
                                fromValues: n,
                                toValues: o,
                                routeValues: c,
                                agreement: !0,
                                email: t.email,
                                lang: t.$root.$i18n.locale,
                                amount: t.val1,
                              }),
                              (e.next = 9),
                              t.createOrder(l)
                            );
                          case 9:
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
                          case 11:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              correctTo: function () {
                var t =
                    Object(l.BigNumber)(this.currentRoute.rate.out).dividedBy(
                      this.currentRoute.rate.in
                    ) || 1,
                  e = Object(l.BigNumber)(this.val1 || 0)
                    .multipliedBy(t)
                    .minus(this.currentRoute.rate.outFeeAmount)
                    .decimalPlaces(this.currentRoute.to.decimal || 2);
                return e.lte(0)
                  ? (this.val2 = 0)
                  : e.isGreaterThan(this.currentRoute.rate.amount)
                  ? (this.val2 = this.currentRoute.rate.amount)
                  : void (this.val2 = e);
              },
              changeCurrency: function () {
                var t = this;
                return Object(n.a)(
                  regeneratorRuntime.mark(function e() {
                    var r, n;
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (r = {}),
                              t.from.xml && (r.from = t.from.xml),
                              t.to.xml && (r.to = t.to.xml),
                              t.$router.push({ query: r }),
                              (e.next = 6),
                              t.$rest.api(
                                "GET:public/exchanger/route/get/one",
                                {
                                  id: t.matchedRoute
                                    ? t.matchedRoute.routeId
                                    : "",
                                  lang: t.$i18n.locale,
                                }
                              )
                            );
                          case 6:
                            (n = e.sent).success &&
                              (t.currentRoute = n.data.route);
                          case 8:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
            }
          ),
        };
      }).call(this, r(92));
    },
    539: function (t, e, r) {
      var content = r(576);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(42).default)("424cd81b", content, !0, { sourceMap: !1 });
    },
    542: function (t, e, r) {
      var content = r(581);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(42).default)("e741bd52", content, !0, { sourceMap: !1 });
    },
    543: function (t, e, r) {
      var content = r(586);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(42).default)("18d788d0", content, !0, { sourceMap: !1 });
    },
    564: function (t, e, r) {
      "use strict";
      r.r(e);
      r(91), r(314), r(11), r(12), r(15), r(6), r(19), r(13), r(20);
      var n = r(4),
        o = (r(40), r(24), r(36), r(3));
      function c(t, e) {
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
      function l(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? c(Object(r), !0).forEach(function (e) {
                Object(n.a)(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : c(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var d = {
          computed: l(
            l({}, Object(o.c)({ info: "partners/info" })),
            {},
            {
              partnersArray: function () {
                var t = this;
                return this.info.map(function (e) {
                  var link = e.link;
                  return (
                    "ru" !== t.$i18n.locale &&
                      "ua" !== t.$i18n.locale &&
                      link.indexOf("bestchange.ru") &&
                      (link = link.replace("bestchange.ru", "bestchange.com")),
                    { id: e.id, link: link, image: e.image }
                  );
                });
              },
            }
          ),
          created: function () {
            this.getPartners({ onlyReviewPartners: !1 });
          },
          methods: l({}, Object(o.b)({ getPartners: "partners/getPartners" })),
        },
        f = (r(527), r(7)),
        component = Object(f.a)(
          d,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              { staticClass: "container container-dashed partner-block" },
              [
                t.partnersArray.length
                  ? e("div", { staticClass: "our-partner" }, [
                      e(
                        "ul",
                        t._l(t.partnersArray, function (r) {
                          return e("li", { key: r.id }, [
                            e(
                              "a",
                              { attrs: { href: r.link, target: "_blank" } },
                              [
                                e("img", {
                                  attrs: {
                                    src: t.$rest.fsPath + r.image.files.big.url,
                                    alt: "",
                                  },
                                }),
                              ]
                            ),
                          ]);
                        }),
                        0
                      ),
                    ])
                  : t._e(),
              ]
            );
          },
          [],
          !1,
          null,
          "85c7a914",
          null
        );
      e.default = component.exports;
    },
    565: function (t, e, r) {
      "use strict";
      r.r(e);
      r(25);
      var n = [
          function () {
            var t = this._self._c;
            return t("div", { staticClass: "reviews-bloc-photo" }, [
              t("img", { attrs: { src: r(510), alt: "" } }),
            ]);
          },
        ],
        o = (r(11), r(12), r(15), r(6), r(19), r(13), r(20), r(4)),
        c = r(0),
        l = (r(10), r(28), r(3));
      function d(t, e) {
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
      function f(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? d(Object(r), !0).forEach(function (e) {
                Object(o.a)(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : d(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var m = {
          data: function () {
            return { reviews: [] };
          },
          computed: {
            reviewsArray: function () {
              return this.reviews.slice(0, 3);
            },
            lang: function () {
              return this.$root.$i18n.locale;
            },
          },
          watch: {
            lang: function () {
              this.updateList();
            },
          },
          created: function () {
            var t = this;
            return Object(c.a)(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), t.updateList();
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          methods: f(
            f(
              {},
              Object(l.b)({ updateListReviews: "reviews/updateListReviews" })
            ),
            {},
            {
              updateList: function () {
                var t = this;
                return Object(c.a)(
                  regeneratorRuntime.mark(function e() {
                    var r;
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              t.updateListReviews({ lang: t.lang })
                            );
                          case 2:
                            (r = e.sent) && (t.reviews = r.reviews);
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
            }
          ),
        },
        v = r(7),
        component = Object(v.a)(
          m,
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "reviews-bloc" }, [
              e("div", { staticClass: "container" }, [
                e(
                  "h3",
                  { staticClass: "title-other" },
                  [
                    t._v(
                      "\n      " +
                        t._s(t.$t("page.main.reviews.title")) +
                        "\n      "
                    ),
                    e(
                      "nuxt-link",
                      {
                        staticClass: "btn btn-look",
                        attrs: { to: t.localePath("/reviews/") },
                      },
                      [
                        t._v(
                          "\n        " +
                            t._s(t.$t("page.main.reviews.all")) +
                            "\n      "
                        ),
                      ]
                    ),
                  ],
                  1
                ),
                t._v(" "),
                e(
                  "ul",
                  t._l(t.reviewsArray, function (r) {
                    return e("li", { key: r._id }, [
                      e("div", { staticClass: "reviews-bloc-txt" }, [
                        e("p", { staticClass: "reviews-bloc__" }, [
                          t._v(t._s(r.message)),
                        ]),
                        t._v(" "),
                        e("p", { staticClass: "reviews-bloc-date" }, [
                          t._v(
                            t._s(
                              t
                                .$moment(r.createdAt)
                                .format("DD MMM YYYY - HH:mm")
                            )
                          ),
                        ]),
                      ]),
                      t._v(" "),
                      e("div", { staticClass: "reviews-bloc-client" }, [
                        t._m(0, !0),
                        t._v(" "),
                        e("div", [
                          e("p", [
                            t._v(
                              "\n              " +
                                t._s(r.name || "Anonymous") +
                                "\n            "
                            ),
                          ]),
                        ]),
                      ]),
                    ]);
                  }),
                  0
                ),
              ]),
            ]);
          },
          n,
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    566: function (t, e, r) {
      "use strict";
      r.r(e);
      r(511), r(25), r(11), r(12), r(19), r(13), r(20);
      var n = r(4),
        o = (r(312), r(15), r(6), r(3));
      function c(t, e) {
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
      function l(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? c(Object(r), !0).forEach(function (e) {
                Object(n.a)(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : c(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var d = {
          computed: l(
            l({}, Object(o.c)("exchange", ["info"])),
            {},
            {
              toList: function () {
                var t = {};
                return this.info
                  .filter(function (e) {
                    return !t[e.to.xml] && ((t[e.to.xml] = !0), !0);
                  })
                  .sort(function (a, b) {
                    return a.rate.amount < b.rate.amount ? 1 : -1;
                  });
              },
            }
          ),
          created: function () {
            return this.info ? null : this.routes();
          },
          methods: l({}, Object(o.b)({ routes: "exchange/routes" })),
        },
        f = r(7),
        component = Object(f.a)(
          d,
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "reserves" }, [
              e("div", { staticClass: "container" }, [
                e("h3", { staticClass: "title" }, [
                  t._v(
                    "\n      " +
                      t._s(t.$t("page.main.reserves.title")) +
                      "\n      "
                  ),
                  e(
                    "a",
                    {
                      staticClass: "btn btn-look",
                      staticStyle: { display: "none" },
                      attrs: { href: "#all" },
                    },
                    [t._v(t._s(t.$t("page.main.reserves.all")))]
                  ),
                ]),
                t._v(" "),
                t.info
                  ? e(
                      "ul",
                      t._l(t.toList, function (r) {
                        return e("li", { key: r._id }, [
                          e("div", { staticClass: "reserves-icon" }, [
                            e("img", {
                              attrs: {
                                src: t.$rest.urlImg(r.to.image.files).small,
                                alt: "",
                              },
                            }),
                            t._v(" "),
                            e("span", [
                              t._v(
                                t._s(
                                  r.to.name +
                                    (r.to.cityName ? " " + r.to.cityName : "")
                                )
                              ),
                            ]),
                          ]),
                          t._v(" "),
                          e("div", { staticClass: "reserves-cost" }, [
                            e("p", [
                              t._v(
                                t._s(r.rate.amount) + " " + t._s(r.to.symbol)
                              ),
                            ]),
                            t._v(" "),
                            t._e(),
                          ]),
                        ]);
                      }),
                      0
                    )
                  : t._e(),
              ]),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    575: function (t, e, r) {
      "use strict";
      r(539);
    },
    576: function (t, e, r) {
      var n = r(41)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".dropper img[data-v-75107c19]{height:25px;margin:5px;width:25px}.dropper li[data-v-75107c19]{align-items:center;cursor:pointer;display:flex;font-size:15px}.dropper li[data-v-75107c19]:hover{background:rgba(0,150,255,.1)}.dropper[data-v-75107c19],.dropper .bp-dropdown__btn[data-v-75107c19]{width:100%}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    580: function (t, e, r) {
      "use strict";
      r(542);
    },
    581: function (t, e, r) {
      var n = r(41)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".dropper img[data-v-7eb2677e]{height:25px;margin:5px;width:25px}.dropper li[data-v-7eb2677e]{align-items:center;cursor:pointer;display:flex;font-size:15px}.dropper li[data-v-7eb2677e]:hover{background:rgba(0,150,255,.1)}.dropper[data-v-7eb2677e],.dropper .bp-dropdown__btn[data-v-7eb2677e]{width:100%}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    582: function (t, e, r) {
      t.exports = r.p + "img/like.c1d6cbc.svg";
    },
    583: function (t, e, r) {
      t.exports = r.p + "img/credit-card.a15ca16.svg";
    },
    584: function (t, e, r) {
      t.exports = r.p + "img/telephone.24c7834.svg";
    },
    585: function (t, e, r) {
      "use strict";
      r(543);
    },
    586: function (t, e, r) {
      var n = r(41)(function (i) {
        return i[1];
      });
      n.push([
        t.i,
        ".relative[data-v-64816ea2]{position:relative}.notification-box[data-v-64816ea2]{border:0 solid;border-radius:10px;color:#fff;margin:-40px auto -60px;max-width:calc(100vw - 35px);padding:20px}",
        "",
      ]),
        (n.locals = {}),
        (t.exports = n);
    },
    737: function (t, e, r) {
      "use strict";
      r.r(e);
      r(15), r(6), r(11), r(12), r(19), r(13), r(20);
      var n = r(0),
        o = r(4),
        c = (r(10), r(3)),
        l = r(564),
        d = r(514),
        f = r(565),
        m = r(566),
        v = (r(25), r(511), r(24), r(70), r(112), r(529).a),
        _ = (r(575), r(7)),
        h = Object(_.a)(
          v,
          function () {
            var t = this,
              e = t._self._c;
            return t.errorRoutes
              ? e("form", { staticClass: "form", attrs: { action: "" } }, [
                  e("div", { staticClass: "form-wr" }, [
                    e("div", { staticClass: "form-index-top" }, [
                      e("h2", [t._v(t._s(t.errorRoutes))]),
                    ]),
                  ]),
                ])
              : e("transition", { attrs: { name: "faded" } }, [
                  t.info
                    ? e(
                        "form",
                        {
                          staticClass: "form",
                          style: {
                            opacity: t.load ? 1 : 0.9,
                            transition: "all .3s",
                          },
                          attrs: { action: "" },
                        },
                        [
                          e(
                            "div",
                            { staticClass: "form-wr" },
                            [
                              e("div", { staticClass: "form-index-top" }, [
                                e(
                                  "div",
                                  { staticClass: "form-index-item" },
                                  [
                                    e("h3", [
                                      t._v(t._s(t.$t("page.main.from.title"))),
                                    ]),
                                    t._v(" "),
                                    e("p", [
                                      t._v(t._s(t.$t("page.main.from.choose"))),
                                    ]),
                                    t._v(" "),
                                    e(
                                      "div",
                                      {
                                        staticClass:
                                          "form-index-bloc form-select",
                                      },
                                      [
                                        e(
                                          "div",
                                          {
                                            staticClass: "form-index-bloc-item",
                                          },
                                          [
                                            e(
                                              "label",
                                              [
                                                e(
                                                  "dropdown",
                                                  {
                                                    staticClass: "dropper",
                                                    attrs: {
                                                      "close-on-click": !0,
                                                    },
                                                  },
                                                  [
                                                    e(
                                                      "template",
                                                      { slot: "btn" },
                                                      [
                                                        t.from.image
                                                          ? e("img", {
                                                              attrs: {
                                                                alt: t.from
                                                                  .name,
                                                                src: t.$rest.urlImg(
                                                                  t.from.image
                                                                ).small,
                                                              },
                                                            })
                                                          : t._e(),
                                                        t._v(
                                                          "\n                    " +
                                                            t._s(t.from.name) +
                                                            "\n                    " +
                                                            t._s(
                                                              t.from.symbol
                                                            ) +
                                                            "\n                  "
                                                        ),
                                                      ]
                                                    ),
                                                    t._v(" "),
                                                    e(
                                                      "template",
                                                      { slot: "body" },
                                                      [
                                                        e(
                                                          "ul",
                                                          t._l(
                                                            t.fromList,
                                                            function (r) {
                                                              return e(
                                                                "li",
                                                                {
                                                                  key: r.routeId,
                                                                  style: {
                                                                    opacity:
                                                                      r.can
                                                                        ? 1
                                                                        : 0.5,
                                                                  },
                                                                  on: {
                                                                    click:
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        t.from =
                                                                          r.from;
                                                                      },
                                                                  },
                                                                },
                                                                [
                                                                  e("img", {
                                                                    attrs: {
                                                                      alt: r
                                                                        .from
                                                                        .name,
                                                                      src: t.$rest.urlImg(
                                                                        r.from
                                                                          .image
                                                                      ).small,
                                                                    },
                                                                  }),
                                                                  t._v(
                                                                    "\n                        " +
                                                                      t._s(
                                                                        r.from
                                                                          .name
                                                                      ) +
                                                                      "\n                        " +
                                                                      t._s(
                                                                        r.from
                                                                          .symbol
                                                                      ) +
                                                                      "\n                      "
                                                                  ),
                                                                ]
                                                              );
                                                            }
                                                          ),
                                                          0
                                                        ),
                                                      ]
                                                    ),
                                                  ],
                                                  2
                                                ),
                                              ],
                                              1
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "div",
                                      {
                                        staticClass:
                                          "form-index-bloc form-input",
                                      },
                                      [
                                        e(
                                          "div",
                                          {
                                            staticClass: "form-index-bloc-item",
                                          },
                                          [
                                            e("label", [
                                              e("span", [
                                                t._v(t._s(t.from.symbol)),
                                              ]),
                                              t._v(" "),
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
                                                  color:
                                                    "Неверные данные" === t.val1
                                                      ? "red"
                                                      : "",
                                                },
                                                attrs: {
                                                  type: "text",
                                                  placeholder: "1000",
                                                },
                                                domProps: { value: t.val1 },
                                                on: {
                                                  input: [
                                                    function (e) {
                                                      e.target.composing ||
                                                        (t.val1 =
                                                          e.target.value);
                                                    },
                                                    function (e) {
                                                      return t.calculate("to");
                                                    },
                                                  ],
                                                },
                                              }),
                                            ]),
                                          ]
                                        ),
                                        t._v(" "),
                                        e(
                                          "p",
                                          [
                                            "0" !== t.currentRoute.from.min
                                              ? [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(
                                                        t.$t(
                                                          "page.main.from.min"
                                                        ) + " "
                                                      ) +
                                                      "\n                "
                                                  ),
                                                  e("span", [
                                                    t._v(
                                                      t._s(
                                                        t.fixedNumber(
                                                          "ceil",
                                                          t.currentRoute.from
                                                            .decimal,
                                                          t.currentRoute.from
                                                            .min
                                                        )
                                                      )
                                                    ),
                                                  ]),
                                                ]
                                              : t._e(),
                                            t._v(" "),
                                            "0" !== t.currentRoute.from.min &&
                                            "0" !== t.currentRoute.from.max
                                              ? [t._v(" - ")]
                                              : t._e(),
                                            t._v(" "),
                                            "0" !== t.currentRoute.from.max
                                              ? [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(
                                                        t.$t(
                                                          "page.main.from.max"
                                                        ) + " "
                                                      ) +
                                                      "\n                "
                                                  ),
                                                  e("span", [
                                                    t._v(
                                                      t._s(
                                                        t.fixedNumber(
                                                          "floor",
                                                          t.currentRoute.from
                                                            .decimal,
                                                          t.currentRoute.from
                                                            .max
                                                        )
                                                      )
                                                    ),
                                                  ]),
                                                ]
                                              : t._e(),
                                          ],
                                          2
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
                                              "form-index-bloc form-input",
                                          },
                                          [
                                            e(
                                              "div",
                                              {
                                                staticClass:
                                                  "form-index-bloc-item",
                                              },
                                              [
                                                t.fromValues[r._id] &&
                                                !t.fromValues[r._id].match(
                                                  r.regexp
                                                )
                                                  ? e(
                                                      "span",
                                                      {
                                                        staticStyle: {
                                                          padding: "15px",
                                                          color: "red",
                                                          "font-weight": "bold",
                                                        },
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(r.regexp_error)
                                                        ),
                                                      ]
                                                    )
                                                  : t._e(),
                                                t._v(" "),
                                                e("label", [
                                                  e("span", [
                                                    t._v(t._s(r.name)),
                                                  ]),
                                                  t._v(" "),
                                                  e("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          t.fromValues[r._id],
                                                        expression:
                                                          "fromValues[field._id]",
                                                      },
                                                    ],
                                                    style: {
                                                      border:
                                                        !t.fromValues[r._id] ||
                                                        t.fromValues[
                                                          r._id
                                                        ].match(r.regexp)
                                                          ? ""
                                                          : "1px solid red",
                                                    },
                                                    attrs: {
                                                      placeholder:
                                                        r.placeholder,
                                                      type: "text",
                                                    },
                                                    domProps: {
                                                      value:
                                                        t.fromValues[r._id],
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
                                                ]),
                                              ]
                                            ),
                                          ]
                                        );
                                      }
                                    ),
                                  ],
                                  2
                                ),
                                t._v(" "),
                                e(
                                  "div",
                                  { staticClass: "form-exchange text-center" },
                                  [
                                    e("img", {
                                      attrs: { src: r(538), alt: "" },
                                    }),
                                  ]
                                ),
                                t._v(" "),
                                e(
                                  "div",
                                  { staticClass: "form-index-item" },
                                  [
                                    e("h3", [
                                      t._v(t._s(t.$t("page.main.to.title"))),
                                    ]),
                                    t._v(" "),
                                    e("p", [
                                      t._v(t._s(t.$t("page.main.to.choose"))),
                                    ]),
                                    t._v(" "),
                                    t.to && t.from && !t.currentRoute.from.name
                                      ? e(
                                          "p",
                                          { staticStyle: { color: "orange" } },
                                          [
                                            t._v(
                                              t._s(t.$t("page.main.attention"))
                                            ),
                                          ]
                                        )
                                      : t._e(),
                                    t._v(" "),
                                    Number(t.val2) >
                                    Number(t.currentRoute.rate.amount)
                                      ? e(
                                          "p",
                                          { staticStyle: { color: "orange" } },
                                          [
                                            t._v(
                                              "\n            " +
                                                t._s(
                                                  t.$t(
                                                    "page.main.haven_t_reserve"
                                                  )
                                                ) +
                                                "\n            "
                                            ),
                                            e(
                                              "button",
                                              {
                                                staticStyle: {
                                                  "border-radius": "5px",
                                                  border: "1px solid silver",
                                                },
                                                on: {
                                                  click: function (e) {
                                                    return t.setMaxValueTo();
                                                  },
                                                },
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.$t("page.main.correct")
                                                  )
                                                ),
                                              ]
                                            ),
                                          ]
                                        )
                                      : t._e(),
                                    t._v(" "),
                                    e(
                                      "div",
                                      {
                                        staticClass:
                                          "form-index-bloc form-select",
                                      },
                                      [
                                        e(
                                          "div",
                                          {
                                            staticClass: "form-index-bloc-item",
                                          },
                                          [
                                            e(
                                              "label",
                                              [
                                                e(
                                                  "dropdown",
                                                  {
                                                    staticClass: "dropper",
                                                    attrs: {
                                                      "close-on-click": !0,
                                                    },
                                                  },
                                                  [
                                                    e(
                                                      "template",
                                                      { slot: "btn" },
                                                      [
                                                        t.to.image
                                                          ? e("img", {
                                                              attrs: {
                                                                alt: t.to.name,
                                                                src: t.$rest.urlImg(
                                                                  t.to.image
                                                                ).small,
                                                              },
                                                            })
                                                          : t._e(),
                                                        t._v(
                                                          "\n                    " +
                                                            t._s(t.to.name) +
                                                            "\n                    " +
                                                            t._s(t.to.symbol) +
                                                            "\n                  "
                                                        ),
                                                      ]
                                                    ),
                                                    t._v(" "),
                                                    e(
                                                      "template",
                                                      { slot: "body" },
                                                      [
                                                        e(
                                                          "ul",
                                                          t._l(
                                                            t.toList,
                                                            function (r) {
                                                              return e(
                                                                "li",
                                                                {
                                                                  key: r.routeId,
                                                                  style: {
                                                                    opacity:
                                                                      r.can
                                                                        ? 1
                                                                        : 0.5,
                                                                  },
                                                                  on: {
                                                                    click:
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        t.to =
                                                                          r.to;
                                                                      },
                                                                  },
                                                                },
                                                                [
                                                                  e("img", {
                                                                    attrs: {
                                                                      alt: r.to
                                                                        .name,
                                                                      src: t.$rest.urlImg(
                                                                        r.to
                                                                          .image
                                                                      ).small,
                                                                    },
                                                                  }),
                                                                  t._v(
                                                                    "\n                        " +
                                                                      t._s(
                                                                        r.to
                                                                          .name
                                                                      ) +
                                                                      "\n                        " +
                                                                      t._s(
                                                                        r.to
                                                                          .symbol
                                                                      ) +
                                                                      "\n                      "
                                                                  ),
                                                                ]
                                                              );
                                                            }
                                                          ),
                                                          0
                                                        ),
                                                      ]
                                                    ),
                                                  ],
                                                  2
                                                ),
                                              ],
                                              1
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        e("p", [
                                          t._v(
                                            "\n              " +
                                              t._s(
                                                t.$t("page.main.to.reserve") +
                                                  " "
                                              ) +
                                              "\n              "
                                          ),
                                          e("span", [
                                            t._v(
                                              t._s(
                                                t.fixedNumber(
                                                  "floor",
                                                  t.currentRoute.to.decimal,
                                                  t.currentRoute.rate.amount
                                                )
                                              )
                                            ),
                                          ]),
                                        ]),
                                      ]
                                    ),
                                    t._v(" "),
                                    e(
                                      "div",
                                      { staticClass: "form-index-bloc" },
                                      [
                                        e(
                                          "div",
                                          {
                                            staticClass: "form-index-bloc-item",
                                          },
                                          [
                                            e("label", [
                                              e("span", [
                                                t._v(t._s(t.to.symbol)),
                                              ]),
                                              t._v(" "),
                                              e("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: t.val2,
                                                    expression: "val2",
                                                  },
                                                ],
                                                style: {
                                                  color:
                                                    "Неверные данные" === t.val2
                                                      ? "red"
                                                      : "",
                                                },
                                                attrs: {
                                                  type: "text",
                                                  placeholder: "1000",
                                                },
                                                domProps: { value: t.val2 },
                                                on: {
                                                  input: [
                                                    function (e) {
                                                      e.target.composing ||
                                                        (t.val2 =
                                                          e.target.value);
                                                    },
                                                    function (e) {
                                                      return t.calculate(
                                                        "from"
                                                      );
                                                    },
                                                  ],
                                                },
                                              }),
                                            ]),
                                          ]
                                        ),
                                        t._v(" "),
                                        e("p", [
                                          t._v(
                                            "\n              " +
                                              t._s(t.$t("page.main.to.rate")) +
                                              "\n              "
                                          ),
                                          e("span", [
                                            t._v(
                                              "\n                " +
                                                t._s(t.currentRoute.rate.in) +
                                                "\n                " +
                                                t._s(
                                                  t.currentRoute.from.symbol
                                                ) +
                                                "\n              "
                                            ),
                                          ]),
                                          t._v(" "),
                                          e("span", [
                                            t._v(
                                              "\n                = " +
                                                t._s(t.currentRoute.rate.out) +
                                                "\n                " +
                                                t._s(t.currentRoute.to.symbol) +
                                                "\n              "
                                            ),
                                          ]),
                                        ]),
                                      ]
                                    ),
                                    t._v(" "),
                                    t._l(
                                      t.currentRoute.to.fields,
                                      function (r) {
                                        return e(
                                          "div",
                                          {
                                            key: r.id,
                                            staticClass:
                                              "form-index-bloc form-input",
                                          },
                                          [
                                            t.toValues[r._id] &&
                                            !t.toValues[r._id].match(r.regexp)
                                              ? e(
                                                  "span",
                                                  {
                                                    staticStyle: {
                                                      padding: "15px",
                                                      color: "red",
                                                      "font-weight": "bold",
                                                    },
                                                  },
                                                  [t._v(t._s(r.regexp_error))]
                                                )
                                              : t._e(),
                                            t._v(" "),
                                            e(
                                              "div",
                                              {
                                                staticClass:
                                                  "form-index-bloc-item",
                                              },
                                              [
                                                e("label", [
                                                  e("span", [
                                                    t._v(t._s(r.name)),
                                                  ]),
                                                  t._v(" "),
                                                  e("input", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          t.toValues[r._id],
                                                        expression:
                                                          "toValues[field._id]",
                                                      },
                                                    ],
                                                    style: {
                                                      border:
                                                        !t.toValues[r._id] ||
                                                        t.toValues[r._id].match(
                                                          r.regexp
                                                        )
                                                          ? ""
                                                          : "1px solid red",
                                                    },
                                                    attrs: {
                                                      placeholder:
                                                        r.placeholder,
                                                      type: "text",
                                                    },
                                                    domProps: {
                                                      value: t.toValues[r._id],
                                                    },
                                                    on: {
                                                      input: function (e) {
                                                        e.target.composing ||
                                                          t.$set(
                                                            t.toValues,
                                                            r._id,
                                                            e.target.value
                                                          );
                                                      },
                                                    },
                                                  }),
                                                ]),
                                              ]
                                            ),
                                          ]
                                        );
                                      }
                                    ),
                                  ],
                                  2
                                ),
                              ]),
                              t._v(" "),
                              t.currentRoute.fields &&
                              t.currentRoute.fields.length > 0
                                ? e("div", { staticClass: "form-index-item" }, [
                                    e("h3", [
                                      t._v(
                                        t._s(t.$t("page.main.details.title"))
                                      ),
                                    ]),
                                    t._v(" "),
                                    e("p", [
                                      t._v(
                                        t._s(t.$t("page.main.details.choose"))
                                      ),
                                    ]),
                                  ])
                                : t._e(),
                              t._v(" "),
                              t.currentRoute.fields &&
                              t.currentRoute.fields.length > 0
                                ? e(
                                    "div",
                                    { staticClass: "form-index-bottom" },
                                    t._l(t.currentRoute.fields, function (r) {
                                      return e(
                                        "div",
                                        {
                                          key: r.id,
                                          staticClass:
                                            "form-index-bloc form-input",
                                        },
                                        [
                                          t.routeValues[r._id] &&
                                          !t.routeValues[r._id].match(r.regexp)
                                            ? e(
                                                "span",
                                                {
                                                  staticStyle: {
                                                    padding: "15px",
                                                    color: "red",
                                                    "font-weight": "bold",
                                                  },
                                                },
                                                [t._v(t._s(r.regexp_error))]
                                              )
                                            : t._e(),
                                          t._v(" "),
                                          e(
                                            "div",
                                            {
                                              staticClass:
                                                "form-index-bloc-item",
                                            },
                                            [
                                              e("label", [
                                                e("span", [t._v(t._s(r.name))]),
                                                t._v(" "),
                                                e("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value:
                                                        t.routeValues[r._id],
                                                      expression:
                                                        "routeValues[field._id]",
                                                    },
                                                  ],
                                                  style: {
                                                    border:
                                                      !t.routeValues[r._id] ||
                                                      t.routeValues[
                                                        r._id
                                                      ].match(r.regexp)
                                                        ? ""
                                                        : "1px solid red",
                                                  },
                                                  attrs: {
                                                    placeholder: r.placeholder,
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
                                              ]),
                                            ]
                                          ),
                                        ]
                                      );
                                    }),
                                    0
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
                              e("br"),
                              t._v(" "),
                              e(
                                "div",
                                { staticClass: "text-center form-submit" },
                                [
                                  e(
                                    "button",
                                    {
                                      staticClass: "btn btn-submit",
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
                                      t.load
                                        ? e("span", [
                                            t._v(
                                              t._s(
                                                t.$t("page.main.details.submit")
                                              )
                                            ),
                                          ])
                                        : e("loader", {
                                            attrs: {
                                              responsive: !0,
                                              width: "50",
                                              height: "50",
                                            },
                                          }),
                                    ],
                                    1
                                  ),
                                ]
                              ),
                            ],
                            2
                          ),
                          t._v(" "),
                          e("div", { staticClass: "form-ruls" }, [
                            e("p", { staticClass: "text-center" }, [
                              t._v(t._s(t.$t("page.main.details.rules"))),
                            ]),
                          ]),
                        ]
                      )
                    : t._e(),
                ]);
          },
          [],
          !1,
          null,
          "75107c19",
          null
        ).exports,
        y = r(731),
        O = r(533).a,
        w =
          (r(580),
          Object(_.a)(
            O,
            function () {
              this._self._c;
              return this._m(0);
            },
            [
              function () {
                var t = this._self._c;
                return t(
                  "form",
                  { staticClass: "form", attrs: { action: "#" } },
                  [
                    t("div", { staticClass: "form-wr" }, [
                      t("div", { staticClass: "form-index-top" }, [
                        t("h2", [this._v("SOON_V3")]),
                      ]),
                    ]),
                  ]
                );
              },
            ],
            !1,
            null,
            "7eb2677e",
            null
          ).exports),
        x = {
          components: { v1: h, v2: y.default, v3: w },
          data: function () {
            return { activeVersion: this.$rest.config.styles.exchangeForm };
          },
        },
        j = Object(_.a)(
          x,
          function () {
            var t = this,
              e = t._self._c;
            return "v1" === t.activeVersion
              ? e("v1")
              : "v2" === t.activeVersion
              ? e("v2")
              : "v3" === t.activeVersion
              ? e("v3")
              : e("div", [
                  e("h2", [
                    t._v(
                      "Error template " +
                        t._s(t.activeVersion) +
                        " not found please set correct config"
                    ),
                  ]),
                  t._v(" "),
                  e("p", [
                    e("b", [t._v("./config/app.json")]),
                    t._v('\n    "styles:exchangeForm" must be '),
                    e("b", [t._v("v1")]),
                    t._v(" - select options, "),
                    e("b", [t._v("v2")]),
                    t._v(" - list, "),
                    e("b", [t._v("v3")]),
                    t._v(" - inputs\n  "),
                  ]),
                ]);
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        N = [
          function () {
            var t = this._self._c;
            return t("span", [t("img", { attrs: { src: r(582), alt: "" } })]);
          },
          function () {
            var t = this._self._c;
            return t("span", [t("img", { attrs: { src: r(583), alt: "" } })]);
          },
          function () {
            var t = this._self._c;
            return t("span", [t("img", { attrs: { src: r(584), alt: "" } })]);
          },
        ],
        C = Object(_.a)(
          {},
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "services text-center" }, [
              e("ul", [
                e("li", [
                  e("div", { staticClass: "text-center" }, [
                    t._m(0),
                    t._v(" "),
                    e("p", [
                      e("b", [t._v(t._s(t.$t("page.main.stars.guarantee_t")))]),
                    ]),
                    t._v(" "),
                    e("div", { staticClass: "services-txt" }, [
                      t._v(t._s(t.$t("page.main.stars.guarantee"))),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("li", [
                  e("div", { staticClass: "text-center" }, [
                    t._m(1),
                    t._v(" "),
                    e("p", [
                      e("b", [t._v(t._s(t.$t("page.main.stars.privacy_t")))]),
                    ]),
                    t._v(" "),
                    e("div", { staticClass: "services-txt" }, [
                      t._v(t._s(t.$t("page.main.stars.privacy"))),
                    ]),
                  ]),
                ]),
                t._v(" "),
                e("li", [
                  e("div", { staticClass: "text-center" }, [
                    t._m(2),
                    t._v(" "),
                    e("p", [
                      e("b", [t._v(t._s(t.$t("page.main.stars.support_t")))]),
                    ]),
                    t._v(" "),
                    e("div", { staticClass: "services-txt" }, [
                      t._v(t._s(t.$t("page.main.stars.support"))),
                    ]),
                  ]),
                ]),
              ]),
              t._v(" "),
              e("div", { staticClass: "page-main" }, [
                e("h5", {
                  staticClass: "title",
                  domProps: { innerHTML: t._s(t.$t("page.main.stars.title")) },
                }),
              ]),
            ]);
          },
          N,
          !1,
          null,
          null,
          null
        ).exports,
        P = r(294);
      function k(t, e) {
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
      function I(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? k(Object(r), !0).forEach(function (e) {
                Object(o.a)(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : k(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var M = {
          components: {
            partner: l.default,
            news: d.default,
            reviews: f.default,
            reserves: m.default,
            exchanger: j,
            stars: C,
            technicalWork: P.a,
          },
          computed: I(
            I(
              {},
              Object(c.c)({
                info: "exchange/info",
                getTechnicalWorkStatus: "params/getTechnicalWorkStatus",
              })
            ),
            Object(c.c)("notifications", ["webAlerts", "load"])
          ),
          head: function () {
            var t = this.$seo({
              name: this.$i18n.t("meta.main.title"),
              title: this.$i18n.t("meta.main.title"),
              description: this.$i18n.t("meta.main.description"),
              openGraph: {
                title: this.$i18n.t("meta.main.title"),
                description: this.$i18n.t("meta.main.description"),
                content: this.$i18n.t("meta.main.description"),
                image: { url: this.$rest.baseUrl + this.$rest.faviconPath },
              },
            });
            return { meta: t.meta, title: t.title };
          },
          asyncData: function (t) {
            return Object(n.a)(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        t.store, (e.next = 4);
                        break;
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          methods: I(
            I({}, Object(c.b)("notifications", ["getList"])),
            {},
            {
              isNeedShowAlert: function (t) {
                var e = t.timeShowFrom,
                  r = t.timeShowTo,
                  n = this.$moment().utc().format("HH:mm");
                return e <= r ? n >= e && n <= r : n >= r ? n >= e : n <= r;
              },
            }
          ),
          created: function () {
            this.getList({ lang: this.$root.$i18n.locale }),
              this.$route.query.ref &&
                (console.log("Set new ref:", this.$route.query.ref),
                localStorage.setItem("partner", this.$route.query.ref));
          },
        },
        D =
          (r(585),
          Object(_.a)(
            M,
            function () {
              var t = this,
                e = t._self._c;
              return e(
                "div",
                { staticClass: "pages" },
                [
                  e("div", { staticClass: "right-bg form-index-top-wr" }, [
                    e("div", { staticClass: "left-bg" }, [
                      e("div", { staticClass: "form-index" }, [
                        e("div", { staticClass: "container--form" }, [
                          t.webAlerts && t.webAlerts.length
                            ? e(
                                "div",
                                { staticStyle: { padding: "0 0 40px 0" } },
                                [
                                  t._l(
                                    t.webAlerts.filter(function (e) {
                                      return (
                                        e.lang === t.$root.$i18n.locale &&
                                        t.isNeedShowAlert(e)
                                      );
                                    }),
                                    function (r) {
                                      return [
                                        e("div", {
                                          key: r._id,
                                          staticClass: "notification-box",
                                          class: r.level,
                                          domProps: {
                                            innerHTML: t._s(r.content),
                                          },
                                        }),
                                      ];
                                    }
                                  ),
                                ],
                                2
                              )
                            : t._e(),
                          t._v(" "),
                          t._e(),
                          t._v(" "),
                          e(
                            "div",
                            { staticClass: "relative" },
                            [
                              e("exchanger"),
                              t._v(" "),
                              e(
                                "client-only",
                                [
                                  t.getTechnicalWorkStatus
                                    ? e("technicalWork")
                                    : t._e(),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                  t._v(" "),
                  e("div", { staticClass: "container" }, [e("stars")], 1),
                  t._v(" "),
                  e("reserves"),
                  t._v(" "),
                  e("div", { staticClass: "partner-block" }, [e("partner")], 1),
                ],
                1
              );
            },
            [],
            !1,
            null,
            "64816ea2",
            null
          ));
      e.default = D.exports;
    },
  },
]);
