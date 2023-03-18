//.returntop start
$("#j-gotop").click(function (e) {
    e.preventDefault();
    $("body, html").animate({scrollTop: 0}, 350)
});

$(window).scroll(function (e) {

    if (wScroll.time) {
        clearTimeout(wScroll.time);
    }
    ;
    wScroll.time = setTimeout(wScroll, 100);
});

function wScroll(e) {
    var _this = $(this),
        $top = _this.scrollTop(),
        $el = $("#j-gotop");

    if ($top > 300) {
        $el.css("display", "block");

    } else {
        $el.css("display", "none");
    }

}
//.returntop end


var baguetteBox = function() {
    function e(e, i) {
        B.transforms = d(), B.svg = h(), t(), I = document.querySelectorAll(e), [].forEach.call(I, function(e) {
            var t = e.getElementsByTagName("a");
            t = [].filter.call(t, function(e) {
                return L.test(e.href)
            });
            var n = P.length;
            P.push(t), P[n].options = i, [].forEach.call(P[n], function(e, t) {
                m(e, "click", function(e) {
                    e.preventDefault ? e.preventDefault() : e.returnValue = !1, o(n), r(t)
                })
            })
        })
    }

    function t() {
        return (y = g("baguetteBox-overlay")) ? (w = g("baguetteBox-slider"), k = g("previous-button"), A = g("next-button"), void(x = g("close-button"))) : (y = b("div"), y.id = "baguetteBox-overlay", document.getElementsByTagName("body")[0].appendChild(y), w = b("div"), w.id = "baguetteBox-slider", y.appendChild(w), k = b("button"), k.id = "previous-button", k.innerHTML = B.svg ? E : "&lt;", y.appendChild(k), A = b("button"), A.id = "next-button", A.innerHTML = B.svg ? S : "&gt;", y.appendChild(A), x = b("button"), x.id = "close-button", x.innerHTML = B.svg ? N : "X", y.appendChild(x), k.className = A.className = x.className = "baguetteBox-button", void n())
    }

    function n() {
        m(y, "click", function(e) {
            e.target && "IMG" !== e.target.nodeName && "FIGCAPTION" !== e.target.nodeName && a()
        }), m(k, "click", function(e) {
            e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0, u()
        }), m(A, "click", function(e) {
            e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0, c()
        }), m(x, "click", function(e) {
            e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0, a()
        }), m(y, "touchstart", function(e) {
            C = e.changedTouches[0].pageX
        }), m(y, "touchmove", function(e) {
            $ || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, touch = e.touches[0] || e.changedTouches[0], touch.pageX - C > 40 ? ($ = !0, u()) : touch.pageX - C < -40 && ($ = !0, c()))
        }), m(y, "touchend", function() {
            $ = !1
        }), m(document, "keydown", function(e) {
            switch (e.keyCode) {
                case 37:
                    u();
                    break;
                case 39:
                    c();
                    break;
                case 27:
                    a()
            }
        })
    }

    function o(e) {
        if (H !== e) {
            for (H = e, i(P[e].options); w.firstChild;) w.removeChild(w.firstChild);
            q.length = 0;
            for (var t, n = 0; n < P[e].length; n++) t = b("div"), t.className = "full-image", t.id = "baguette-img-" + n, q.push(t), w.appendChild(q[n])
        }
    }

    function i(e) {
        e || (e = {});
        for (var t in M) T[t] = M[t], "undefined" != typeof e[t] && (T[t] = e[t]);
        w.style.transition = w.style.webkitTransition = "fadeIn" === T.animation ? "opacity .4s ease" : "slideIn" === T.animation ? "" : "none", "auto" === T.buttons && ("ontouchstart" in window || 1 === P[H].length) && (T.buttons = !1), k.style.display = A.style.display = T.buttons ? "" : "none"
    }

    function r(e) {
        "block" !== y.style.display && (D = e, s(D, function() {
            p(D), v(D)
        }), f(), y.style.display = "block", setTimeout(function() {
            y.className = "visible"
        }, 50))
    }

    function a() {
        "none" !== y.style.display && (y.className = "", setTimeout(function() {
            y.style.display = "none"
        }, 500))
    }

    function s(t, n) {
        var e = q[t];
        if ("undefined" != typeof e) {
            if (e.getElementsByTagName("img")[0]) return void(n && n());
            imageElement = P[H][t], imageCaption = imageElement.getAttribute("data-caption") || imageElement.title, imageSrc = l(imageElement);
            var i = b("figure"),
                o = b("img"),
                r = b("figcaption");
            e.appendChild(i), i.innerHTML = '<div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>', o.onload = function() {
                var e = document.querySelector("#baguette-img-" + t + " .spinner");
                i.removeChild(e), !T.async && n && n()
            }, o.setAttribute("src", imageSrc), i.appendChild(o), T.captions && imageCaption && (r.innerHTML = imageCaption, i.appendChild(r)), T.async && n && n()
        }
    }

    function l(e) {
        var t = imageElement.href;
        if (e.dataset) {
            var n = [];
            for (var i in e.dataset) "at-" !== i.substring(0, 3) || isNaN(i.substring(3)) || (n[i.replace("at-", "")] = e.dataset[i]);
            keys = Object.keys(n).sort(function(e, t) {
                return parseInt(e) < parseInt(t) ? -1 : 1
            });
            for (var o = window.innerWidth * window.devicePixelRatio, r = 0; r < keys.length - 1 && keys[r] < o;) r++;
            t = n[keys[r]] || t
        }
        return t
    }

    function c() {
        D <= q.length - 2 ? (D++, f(), p(D)) : T.animation && (w.className = "bounce-from-right", setTimeout(function() {
            w.className = ""
        }, 400))
    }

    function u() {
        D >= 1 ? (D--, f(), v(D)) : T.animation && (w.className = "bounce-from-left", setTimeout(function() {
            w.className = ""
        }, 400))
    }

    function f() {
        var e = 100 * -D + "%";
        "fadeIn" === T.animation ? (w.style.opacity = 0, setTimeout(function() {
            B.transforms ? w.style.transform = w.style.webkitTransform = "translate3d(" + e + ",0,0)" : w.style.left = e, w.style.opacity = 1
        }, 400)) : B.transforms ? w.style.transform = w.style.webkitTransform = "translate3d(" + e + ",0,0)" : w.style.left = e
    }

    function d() {
        var e = b("div");
        return "undefined" != typeof e.style.perspective || "undefined" != typeof e.style.webkitPerspective
    }

    function h() {
        var e = b("div");
        return e.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" == (e.firstChild && e.firstChild.namespaceURI)
    }

    function p(e) {
        e - D >= T.preload || s(e + 1, function() {
            p(e + 1)
        })
    }

    function v(e) {
        D - e >= T.preload || s(e - 1, function() {
            v(e - 1)
        })
    }

    function m(e, t, n) {
        e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent("on" + t, n)
    }

    function g(e) {
        return document.getElementById(e)
    }

    function b(e) {
        return document.createElement(e)
    }
    var y, w, k, A, x, C, E = '<svg width="44" height="60"><polyline points="30 10 10 30 30 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>',
        S = '<svg width="44" height="60"><polyline points="14 10 34 30 14 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>',
        N = '<svg width="30" height="30"><g stroke="rgb(160, 160, 160)" stroke-width="4"><line x1="5" y1="5" x2="25" y2="25"/><line x1="5" y1="25" x2="25" y2="5"/></g></svg>',
        T = {},
        M = {
            captions: !0,
            buttons: "auto",
            async: !1,
            preload: 2,
            animation: "slideIn"
        },
        B = {},
        D = 0,
        H = -1,
        $ = !1,
        L = /.+\.(gif|jpe?g|png|webp)/i,
        I = [],
        P = [],
        q = [];
    return [].forEach || (Array.prototype.forEach = function(e, t) {
        for (var n = 0; n < this.length; n++) e.call(t, this[n], n, this)
    }), [].filter || (Array.prototype.filter = function(e, t, n, i, o) {
        for (n = this, i = [], o = 0; o < n.length; o++) e.call(t, n[o], o, n) && i.push(n[o]);
        return i
    }), {
        run: e
    }
}();
! function(s, i, o, l) {
    var c = s(i);
    s.fn.lazyload = function(e) {
        function t() {
            var t = 0;
            r.each(function() {
                var e = s(this);
                if (!a.skip_invisible || e.is(":visible"))
                    if (s.abovethetop(this, a) || s.leftofbegin(this, a));
                    else if (s.belowthefold(this, a) || s.rightoffold(this, a)) {
                    if (++t > a.failure_limit) return !1
                } else e.trigger("appear"), t = 0
            })
        }
        var n, r = this,
            a = {
                threshold: 0,
                failure_limit: 0,
                event: "scroll",
                effect: "show",
                container: i,
                data_attribute: "original",
                skip_invisible: !0,
                appear: null,
                load: null,
                placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
            };
        return e && (l !== e.failurelimit && (e.failure_limit = e.failurelimit, delete e.failurelimit), l !== e.effectspeed && (e.effect_speed = e.effectspeed, delete e.effectspeed), s.extend(a, e)), n = a.container === l || a.container === i ? c : s(a.container), 0 === a.event.indexOf("scroll") && n.bind(a.event, function() {
            return t()
        }), this.each(function() {
            var i = this,
                o = s(i);
            i.loaded = !1, (o.attr("src") === l || o.attr("src") === !1) && o.is("img") && o.attr("src", a.placeholder), o.one("appear", function() {
                if (!this.loaded) {
                    if (a.appear) {
                        var e = r.length;
                        a.appear.call(i, e, a)
                    }
                    s("<img />").bind("load", function() {
                        var e = o.attr("data-" + a.data_attribute);
                        o.hide(), o.is("img") ? o.attr("src", e) : o.css("background-image", "url('" + e + "')"), o[a.effect](a.effect_speed), i.loaded = !0;
                        var t = s.grep(r, function(e) {
                            return !e.loaded
                        });
                        if (r = s(t), a.load) {
                            var n = r.length;
                            a.load.call(i, n, a)
                        }
                    }).attr("src", o.attr("data-" + a.data_attribute))
                }
            }), 0 !== a.event.indexOf("scroll") && o.bind(a.event, function() {
                i.loaded || o.trigger("appear")
            })
        }), c.bind("resize", function() {
            t()
        }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && c.bind("pageshow", function(e) {
            e.originalEvent && e.originalEvent.persisted && r.each(function() {
                s(this).trigger("appear")
            })
        }), s(o).ready(function() {
            t()
        }), this
    }, s.belowthefold = function(e, t) {
        var n;
        return n = t.container === l || t.container === i ? (i.innerHeight ? i.innerHeight : c.height()) + c.scrollTop() : s(t.container).offset().top + s(t.container).height(), n <= s(e).offset().top - t.threshold
    }, s.rightoffold = function(e, t) {
        var n;
        return n = t.container === l || t.container === i ? c.width() + c.scrollLeft() : s(t.container).offset().left + s(t.container).width(), n <= s(e).offset().left - t.threshold
    }, s.abovethetop = function(e, t) {
        var n;
        return n = t.container === l || t.container === i ? c.scrollTop() : s(t.container).offset().top, n >= s(e).offset().top + t.threshold + s(e).height()
    }, s.leftofbegin = function(e, t) {
        var n;
        return n = t.container === l || t.container === i ? c.scrollLeft() : s(t.container).offset().left, n >= s(e).offset().left + t.threshold + s(e).width()
    }, s.inviewport = function(e, t) {
        return !(s.rightoffold(e, t) || s.leftofbegin(e, t) || s.belowthefold(e, t) || s.abovethetop(e, t))
    }, s.extend(s.expr[":"], {
        "below-the-fold": function(e) {
            return s.belowthefold(e, {
                threshold: 0
            })
        },
        "above-the-top": function(e) {
            return !s.belowthefold(e, {
                threshold: 0
            })
        },
        "right-of-screen": function(e) {
            return s.rightoffold(e, {
                threshold: 0
            })
        },
        "left-of-screen": function(e) {
            return !s.rightoffold(e, {
                threshold: 0
            })
        },
        "in-viewport": function(e) {
            return s.inviewport(e, {
                threshold: 0
            })
        },
        "above-the-fold": function(e) {
            return !s.belowthefold(e, {
                threshold: 0
            })
        },
        "right-of-fold": function(e) {
            return s.rightoffold(e, {
                threshold: 0
            })
        },
        "left-of-fold": function(e) {
            return !s.rightoffold(e, {
                threshold: 0
            })
        }
    })
}(jQuery, window, document);
$(function() {
    if (!placeholderSupport()) {
        $("[placeholder]").focus(function() {
            var e = $(this);
            if (e.val() == e.attr("placeholder")) {
                e.val("");
                e.removeClass("placeholder")
            }
        }).blur(function() {
            var e = $(this);
            if (e.val() == "" || e.val() == e.attr("placeholder")) {
                e.addClass("placeholder");
                e.val(e.attr("placeholder"))
            }
        }).blur()
    }
});

function placeholderSupport() {
    return "placeholder" in document.createElement("input")
}(function(e, a) {
    function s() {
        var e = v.elements;
        return "string" == typeof e ? e.split(" ") : e
    }

    function l(e) {
        var t = h[e[f]];
        t || (t = {}, d++, e[f] = d, h[d] = t);
        return t
    }

    function i(e, t, n) {
        t || (t = a);
        if (p) return t.createElement(e);
        n || (n = l(t));
        t = n.cache[e] ? n.cache[e].cloneNode() : c.test(e) ? (n.cache[e] = n.createElem(e)).cloneNode() : n.createElem(e);
        return t.canHaveChildren && !r.test(e) ? n.frag.appendChild(t) : t
    }

    function o(t, n) {
        if (!n.cache) n.cache = {}, n.createElem = t.createElement, n.createFrag = t.createDocumentFragment, n.frag = n.createFrag();
        t.createElement = function(e) {
            return !v.shivMethods ? n.createElem(e) : i(e, t, n)
        };
        t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + s().join().replace(/\w+/g, function(e) {
            n.createElem(e);
            n.frag.createElement(e);
            return 'c("' + e + '")'
        }) + ");return n}")(v, n.frag)
    }

    function t(e) {
        e || (e = a);
        var t = l(e);
        if (v.shivCSS && !u && !t.hasCSS) {
            var n, i = e;
            n = i.createElement("p");
            i = i.getElementsByTagName("head")[0] || i.documentElement;
            n.innerHTML = "x<style>article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}</style>";
            n = i.insertBefore(n.lastChild, i.firstChild);
            t.hasCSS = !!n
        }
        p || o(e, t);
        return e
    }
    var n = e.html5 || {},
        r = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        c = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        u, f = "_html5shiv",
        d = 0,
        h = {},
        p;
    (function() {
        try {
            var e = a.createElement("a");
            e.innerHTML = "<xyz></xyz>";
            u = "hidden" in e;
            var t;
            if (!(t = 1 == e.childNodes.length)) {
                a.createElement("a");
                var n = a.createDocumentFragment();
                t = "undefined" == typeof n.cloneNode || "undefined" == typeof n.createDocumentFragment || "undefined" == typeof n.createElement
            }
            p = t
        } catch (i) {
            p = u = !0
        }
    })();
    var v = {
        elements: n.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video",
        version: "3.6.2pre",
        shivCSS: !1 !== n.shivCSS,
        supportsUnknownElements: p,
        shivMethods: !1 !== n.shivMethods,
        type: "default",
        shivDocument: t,
        createElement: i,
        createDocumentFragment: function(e, t) {
            e || (e = a);
            if (p) return e.createDocumentFragment();
            for (var t = t || l(e), n = t.frag.cloneNode(), i = 0, o = s(), r = o.length; i < r; i++) n.createElement(o[i]);
            return n
        }
    };
    e.html5 = v;
    t(a)
})(this, document);
(function(m) {
    m.fn.extend({
        DY_scroll: function(v) {
            var e = m(this);
            e.each(function() {
                var e = m(this),
                    o = m(this);
                var r = m.extend({
                    prev: e.find(".prev"),
                    next: e.find(".next"),
                    list: e.find("ul"),
                    auto: false,
                    speed: 4,
                    num: 1,
                    toggle: true,
                    mClick: false,
                    mClickName: "",
                    loop: true,
                    cb: null,
                    num: false
                }, v);
                var t = r.list.find("li"),
                    n = r.list.find("li").outerWidth(true),
                    i = r.list.find("li").outerHeight(true),
                    a = 1,
                    s = Math.round(r.list.parent().outerWidth() / n) - 1,
                    l = t.length,
                    c;
                if (l >= r.num) {
                    if (r.toggle) {
                        r.next.click(function() {
                            if (r.list.is(":animated")) {
                                return false
                            }
                            if (a >= l - s) {
                                if (!r.loop) {
                                    return
                                }
                            } else {
                                a++
                            }
                            n = r.list.find("li").outerWidth(true);
                            r.list.animate({
                                "margin-left": -n
                            }, function() {
                                r.list.find("li").eq(0).appendTo(r.list);
                                r.list.css({
                                    "margin-left": 0
                                });
                                u(r.list, true);
                                r.cb && r.cb(r.list)
                            })
                        });
                        r.prev.click(function() {
                            if (r.list.is(":animated")) {
                                return false
                            }
                            if (a <= 1) {
                                if (!r.loop) {
                                    return
                                }
                            } else {
                                a--
                            }
                            n = r.list.find("li").outerWidth(true);
                            r.list.find("li:last").prependTo(r.list);
                            r.list.css({
                                "margin-left": -n
                            });
                            r.list.animate({
                                "margin-left": 0
                            });
                            u(r.list, false);
                            r.cb && r.cb(r.list)
                        })
                    } else {
                        n = r.list.find("li").outerHeight(true);
                        s = Math.round(r.list.parent().outerHeight() / n) - 1;
                        r.next.click(function() {
                            r.prev.show();
                            if (r.list.is(":animated")) {
                                return false
                            }
                            if (!r.loop) {
                                if (a >= l - s - 1) {
                                    r.next.hide()
                                }
                                if (a >= l - s) {
                                    c = "prev";
                                    return
                                } else {
                                    a++
                                }
                            }
                            i = r.list.find("li").outerHeight(true);
                            r.list.animate({
                                "margin-top": -i
                            }, function() {
                                r.list.find("li").eq(0).appendTo(r.list);
                                r.list.css({
                                    "margin-top": 0
                                });
                                u(r.list, true);
                                r.cb && r.cb(r.list)
                            })
                        });
                        r.prev.click(function() {
                            r.next.show();
                            if (r.list.is(":animated")) {
                                return false
                            }
                            if (!r.loop) {
                                if (a <= 2) {
                                    r.prev.hide()
                                }
                                if (a <= 1) {
                                    c = "next";
                                    return
                                } else {
                                    a--
                                }
                            }
                            i = r.list.find("li").outerHeight(true);
                            r.list.find("li:last").prependTo(r.list);
                            r.list.css({
                                "margin-top": -i
                            });
                            r.list.animate({
                                "margin-top": 0
                            });
                            u(r.list, false);
                            r.cb && r.cb(r.list)
                        })
                    }

                    function u(e, t) {
                        if (r.mClick) {
                            if (r.mClickName) {
                                var n = e.find(".active").parents("li").index(),
                                    i = e.find("li").length - 1;
                                if (t) {
                                    e.find("li").eq(n >= i ? 0 : n + 1).find(r.mClickName).click()
                                } else {
                                    e.find("li").eq(n <= 0 ? 0 : n - 1).find(r.mClickName).click()
                                }
                            } else {
                                var n = e.find(".active").index(),
                                    i = e.find("li").length - 1;
                                if (t) {
                                    e.find("li").eq(n >= i ? 0 : n + 1).click()
                                } else {
                                    e.find("li").eq(n <= 0 ? 0 : n - 1).click()
                                }
                            }
                        }
                        if (r.num) {
                            o.find(".num").text(r.list.find("li").eq(0).data("index"))
                        }
                    }
                    if (r.auto) {
                        var f = setInterval(d, r.speed * 1e3);
                        e.hover(function() {
                            clearInterval(f)
                        }, function() {
                            f = setInterval(d, r.speed * 1e3)
                        })
                    }

                    function d() {
                        if (!r.loop) {
                            if (!c) {
                                c = "next"
                            }
                            if (c == "next") {
                                r.next.click()
                            } else {
                                if (c == "prev") {
                                    r.prev.click()
                                }
                            }
                        } else {
                            r.next.click()
                        }
                    }
                    if ("ontouchstart" in document || /Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent) || m(window).innerWidth() <= 1024) {
                        var h = 0,
                            p = 0;
                        r.list[0].addEventListener("touchstart", function(e) {
                            h = e.targetTouches[0]
                        });
                        r.list[0].addEventListener("touchend", function(e) {
                            p = e.changedTouches[0];
                            var t = Math.abs(p.screenX - h.screenX),
                                n = Math.abs(p.screenY - h.screenY);
                            if (t > n && t >= 100) {
                                if (p.screenX - h.screenX > 0) {
                                    r.prev.click()
                                } else {
                                    r.next.click()
                                }
                            }
                        })
                    }
                }
            })
        }
    })
})($);
(function() {
    $.fn.extend({
        DY_scroll2: function(e) {
            var t = $(this),
                p = $.extend({
                    auto: false,
                    feed: 3500,
                    wheel: false,
                    prev: ".prev",
                    next: ".next"
                }, e);
            t.each(function() {
                var e = $(this),
                    i = e.find(".box-list"),
                    o = e.find(".box-page"),
                    r = i.find(".list-wp"),
                    t = r.length,
                    n = t,
                    a = r.innerWidth(),
                    s;
                for (var l = 0; l < n; l++) {
                    o.append('<a class="page-item" href="javascript: void(0);" title=""></a>')
                }
                s = o.find(".page-item");
                s.eq(0).addClass("active");
                r.eq(0).addClass("show");
                s.click(function(e) {
                    e.preventDefault();
                    var t = $(this),
                        n = t.index();
                    a = r.innerWidth();
                    if (!i.is(":animated")) {
                        t.addClass("active").siblings().removeClass("active");
                        i.animate({
                            "margin-left": -n * a
                        }, 550);
                        r.eq(n).addClass("show").siblings().removeClass("show")
                    }
                });
                e.find(p.prev).click(function(e) {
                    e.preventDefault();
                    var t = $(this),
                        n = o.find(".active").index();
                    h(true, n)
                });
                e.find(p.next).click(function(e) {
                    e.preventDefault();
                    var t = $(this),
                        n = o.find(".active").index();
                    h(false, n)
                });
                if (p.auto) {
                    var c = setInterval(d, p.feed);
                    e.hover(function() {
                        clearInterval(c)
                    }, function() {
                        c = setInterval(d, p.feed)
                    })
                }
                if (document.addEventListener && p.wheel) {
                    i[0].addEventListener("mousewheel", function(e) {
                        e.preventDefault();
                        var t = $(this),
                            n = o.find(".active").index();
                        h(e.wheelDelta > 0, n)
                    })
                }
                if ("ontouchstart" in document || /Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent) || $(window).innerWidth() <= 1024) {
                    var u = 0,
                        f = 0;
                    i.on("touchstart", function(e) {
                        u = e.originalEvent.targetTouches[0]
                    });
                    i.on("touchend", function(e) {
                        f = e.originalEvent.changedTouches[0];
                        var t = Math.abs(f.screenX - u.screenX),
                            n = Math.abs(f.screenY - u.screenY),
                            i = o.find(".active").index();
                        if (t > n && t >= 100) {
                            h(f.screenX - u.screenX > 0, i)
                        }
                    })
                }

                function d() {
                    var e = o.find(".active").index(),
                        t = s.length - 1;
                    e = e < t ? e + 1 : 0;
                    s.eq(e).click()
                }

                function h(e, t) {
                    if (e) {
                        t = t > 0 ? t - 1 : s.length - 1
                    } else {
                        t = t < s.length - 1 ? t + 1 : 0
                    }
                    if (!i.is(":animated")) {
                        s.eq(t).click()
                    }
                }
            })
        }
    })
})($);
(function() {
    var i, t, n, o = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        },
        a = [].indexOf || function(e) {
            for (var t = 0, n = this.length; n > t; t++)
                if (t in this && this[t] === e) return t;
            return -1
        };
    t = function() {
        function e() {}
        return e.prototype.extend = function(e, t) {
            var n, i;
            for (n in t) i = t[n], null == e[n] && (e[n] = i);
            return e
        }, e.prototype.isMobile = function(e) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)
        }, e
    }(), n = this.WeakMap || this.MozWeakMap || (n = function() {
        function e() {
            this.keys = [], this.values = []
        }
        return e.prototype.get = function(e) {
            var t, n, i, o, r;
            for (r = this.keys, t = i = 0, o = r.length; o > i; t = ++i)
                if (n = r[t], n === e) return this.values[t]
        }, e.prototype.set = function(e, t) {
            var n, i, o, r, a;
            for (a = this.keys, n = o = 0, r = a.length; r > o; n = ++o)
                if (i = a[n], i === e) return void(this.values[n] = t);
            return this.keys.push(e), this.values.push(t)
        }, e
    }()), i = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (i = function() {
        function e() {
            console.warn("MutationObserver is not supported by your browser."), console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return e.notSupported = !0, e.prototype.observe = function() {}, e
    }()), this.WOW = function() {
        function e(e) {
            null == e && (e = {}), this.scrollCallback = o(this.scrollCallback, this), this.scrollHandler = o(this.scrollHandler, this), this.start = o(this.start, this), this.scrolled = !0, this.config = this.util().extend(e, this.defaults), this.animationNameCache = new n
        }
        return e.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0
        }, e.prototype.init = function() {
            var e;
            return this.element = window.document.documentElement, "interactive" === (e = document.readyState) || "complete" === e ? this.start() : document.addEventListener("DOMContentLoaded", this.start), this.finished = []
        }, e.prototype.start = function() {
            var o, e, t, n;
            if (this.stopped = !1, this.boxes = function() {
                    var e, t, n, i;
                    for (n = this.element.querySelectorAll("." + this.config.boxClass), i = [], e = 0, t = n.length; t > e; e++) o = n[e], i.push(o);
                    return i
                }.call(this), this.all = function() {
                    var e, t, n, i;
                    for (n = this.boxes, i = [], e = 0, t = n.length; t > e; e++) o = n[e], i.push(o);
                    return i
                }.call(this), this.boxes.length)
                if (this.disabled()) this.resetStyle();
                else {
                    for (n = this.boxes, e = 0, t = n.length; t > e; e++) o = n[e], this.applyStyle(o, !0);
                    window.addEventListener("scroll", this.scrollHandler, !1), window.addEventListener("resize", this.scrollHandler, !1), this.interval = setInterval(this.scrollCallback, 50)
                } return this.config.live ? new i(function(a) {
                return function(e) {
                    var o, r, t, n, i;
                    for (i = [], t = 0, n = e.length; n > t; t++) r = e[t], i.push(function() {
                        var e, t, n, i;
                        for (n = r.addedNodes || [], i = [], e = 0, t = n.length; t > e; e++) o = n[e], i.push(this.doSync(o));
                        return i
                    }.call(a));
                    return i
                }
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }, e.prototype.stop = function() {
            return this.stopped = !0, window.removeEventListener("scroll", this.scrollHandler, !1), window.removeEventListener("resize", this.scrollHandler, !1), null != this.interval ? clearInterval(this.interval) : void 0
        }, e.prototype.sync = function() {
            return i.notSupported ? this.doSync(this.element) : void 0
        }, e.prototype.doSync = function(e) {
            var t, n, i, o, r;
            if (!this.stopped) {
                if (null == e && (e = this.element), 1 !== e.nodeType) return;
                for (e = e.parentNode || e, o = e.querySelectorAll("." + this.config.boxClass), r = [], n = 0, i = o.length; i > n; n++) t = o[n], a.call(this.all, t) < 0 ? (this.applyStyle(t, !0), this.boxes.push(t), this.all.push(t), r.push(this.scrolled = !0)) : r.push(void 0);
                return r
            }
        }, e.prototype.show = function(e) {
            return this.applyStyle(e), e.className = "" + e.className + " " + this.config.animateClass
        }, e.prototype.applyStyle = function(t, n) {
            var i, o, r;
            return o = t.getAttribute("data-wow-duration"), i = t.getAttribute("data-wow-delay"), r = t.getAttribute("data-wow-iteration"), this.animate(function(e) {
                return function() {
                    return e.customStyle(t, n, o, i, r)
                }
            }(this))
        }, e.prototype.animate = function() {
            return "requestAnimationFrame" in window ? function(e) {
                return window.requestAnimationFrame(e)
            } : function(e) {
                return e()
            }
        }(), e.prototype.resetStyle = function() {
            var e, t, n, i, o;
            for (i = this.boxes, o = [], t = 0, n = i.length; n > t; t++) e = i[t], o.push(e.setAttribute("style", "visibility: visible;"));
            return o
        }, e.prototype.customStyle = function(e, t, n, i, o) {
            return t && this.cacheAnimationName(e), e.style.visibility = t ? "hidden" : "visible", n && this.vendorSet(e.style, {
                animationDuration: n
            }), i && this.vendorSet(e.style, {
                animationDelay: i
            }), o && this.vendorSet(e.style, {
                animationIterationCount: o
            }), this.vendorSet(e.style, {
                animationName: t ? "none" : this.cachedAnimationName(e)
            }), e
        }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function(o, e) {
            var r, a, s, t;
            t = [];
            for (r in e) a = e[r], o["" + r] = a, t.push(function() {
                var e, t, n, i;
                for (n = this.vendors, i = [], e = 0, t = n.length; t > e; e++) s = n[e], i.push(o["" + s + r.charAt(0).toUpperCase() + r.substr(1)] = a);
                return i
            }.call(this));
            return t
        }, e.prototype.vendorCSS = function(e, t) {
            var n, i, o, r, a, s;
            for (i = window.getComputedStyle(e), n = i.getPropertyCSSValue(t), s = this.vendors, r = 0, a = s.length; a > r; r++) o = s[r], n = n || i.getPropertyCSSValue("-" + o + "-" + t);
            return n
        }, e.prototype.animationName = function(e) {
            var t;
            try {
                t = this.vendorCSS(e, "animation-name").cssText
            } catch (n) {
                t = window.getComputedStyle(e).getPropertyValue("animation-name")
            }
            return "none" === t ? "" : t
        }, e.prototype.cacheAnimationName = function(e) {
            return this.animationNameCache.set(e, this.animationName(e))
        }, e.prototype.cachedAnimationName = function(e) {
            return this.animationNameCache.get(e)
        }, e.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }, e.prototype.scrollCallback = function() {
            var o;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                var e, t, n, i;
                for (n = this.boxes, i = [], e = 0, t = n.length; t > e; e++) o = n[e], o && (this.isVisible(o) ? this.show(o) : i.push(o));
                return i
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, e.prototype.offsetTop = function(e) {
            for (var t; void 0 === e.offsetTop;) e = e.parentNode;
            for (t = e.offsetTop; e = e.offsetParent;) t += e.offsetTop;
            return t
        }, e.prototype.isVisible = function(e) {
            var t, n, i, o, r;
            return n = e.getAttribute("data-wow-offset") || this.config.offset, r = window.pageYOffset, o = r + Math.min(this.element.clientHeight, innerHeight) - n, i = this.offsetTop(e), t = i + e.clientHeight, o >= i && t >= r
        }, e.prototype.util = function() {
            return null != this._util ? this._util : this._util = new t
        }, e.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, e
    }()
}).call(this);
$(function() {
    var e = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: false,
        live: true
    });
    if (!/msie [6|7|8|9]/i.test(navigator.userAgent)) {
        e.init()
    }
});
$(function() {
    $(".n-nav-icon").click(function(e) {
        e.preventDefault();
        var t = $(this),
            n = t.next();
        if (n.is(":hidden")) {
            n.slideDown();
            t.addClass("active")
        } else {
            n.slideUp();
            t.removeClass("active")
        }
    });
    $(".n-nav .box-list>li").each(function(e) {
        $(this).css({
            "animation-delay": e / 10 + "s"
        })
    });
    $(".n-nav .has-next").click(function(e) {
        e.preventDefault();
        var t = $(this),
            n = t.next();
        if (n.is(":hidden")) {
            n.slideDown();
            t.parent().addClass("active")
        } else {
            n.slideUp();
            t.parent().removeClass("active")
        }
    })
});