/*! jQuery Placeholder Enhanced 1.5 | @tdecs | under the MIT license */
(function(a) {
    var c = "placeholder" in document.createElement("input") && "placeholder" in document.createElement("textarea"),
        f;
    c || (f = a.fn.val, a.fn.val = function() {
        var a = this[0];
        if (this.length) {
            if (!arguments.length && ("INPUT" === a.nodeName || "TEXTAREA" === a.nodeName)) return a.value === this.attr("placeholder") ? "" : a.value;
            this.hasClass("placeholder") && this.removeClass("placeholder");
            return f.apply(this, arguments)
        }
    });
    a.fn.placeholderEnhanced = function() {
        function f(d) {
            var b = {},
                c = ["placeholder", "name", "id"];
            a.each(d.attributes, function(d, e) {
                e.specified && 0 > a.inArray(e.name, c) && (b[e.name] = e.value)
            });
            return b
        }

        function k(a) {
            a.css({
                position: "absolute",
                left: "-9999em"
            })
        }
        if (this.length) return c || a("form").filter(function() {
            return !a.data(this, "placeholderEnhanced")
        }).each(function() {
            a(this).bind("submit.placeholder", function() {
                a(this).find("input[placeholder], textarea[placeholder]").each(function() {
                    !a(this).val() && !this.disabled && (this.value = "")
                })
            });
            a.data(this, "placeholderEnhanced", !0)
        }), this.each(function() {
            if (!a.data(this, "placeholderEnhanced")) {
                var d = this,
                    b = a(d),
                    h = b.attr("placeholder"),
                    j = "password" === d.type,
                    e, g;
                !j || c ? g = function() {
                    b.hasClass("placeholder") && (c || (d.value = ""), b.removeClass("placeholder"))
                } : c || (g = function() {
                    b.css({
                        position: "",
                        left: ""
                    });
                    k(e)
                }, e = a("<input>", a.extend(f(d), {
                    type: "text",
                    value: h,
                    tabindex: -1
                })).addClass("placeholder").bind("focus.placeholder", function() {
                    b.trigger("focus.placeholder")
                }).insertBefore(b));
                b.bind("blur.placeholder", function() {
                    b.val() || (c ? b.addClass("placeholder") : j ? (e.css({
                        position: "",
                        left: ""
                    }), k(b)) : b.val(h).addClass("placeholder"))
                }).bind("focus.placeholder", g).trigger("blur.placeholder");
                a.data(d, "placeholderEnhanced", !0)
            }
        })
    };
    a(function() {
        a("input[placeholder], textarea[placeholder]").placeholderEnhanced()
    })
})(jQuery);