$(window).scroll(function() {
  var windowWidth = $(this).width();
  var windowHeight = $(this).height();
  var windowScrollTop = $(this).scrollTop();

  // effect - No1
  if (windowScrollTop > 60) {
    $(".banner h2").css("display", "none");
    $(".banner .info").css("display", "block");
  } else {
    $(".banner h2").css("display", "block");
    $(".banner .info").css("display", "none");
  }

  // effect - No2
  var firstAnimation = function() {
    $(".clients .clients-info").each(function() {
      $(this)
        .delay(00)
        .animate({ opacity: 1, height: "180", width: "250" }, 1000);
    });
  };

  // effect - No3
  var secondAnimation = function() {
    $(".method:eq(0)")
      .delay(1000)
      .animate({ opacity: 1 }, "slow", function() {
        $(this)
          .find("h4")
      });
    $(".method:eq(1)")
      .delay(2000)
      .animate({ opacity: 1 }, "slow", function() {
        $(this)
          .find("h4")
      });
    $(".method:eq(2)")
      .delay(3000)
      .animate({ opacity: 1 }, "slow", function() {
        $(this)
          .find("h4")
      });
    $(".method:eq(3)")
      .delay(4000)
      .animate({ opacity: 1 }, "slow", function() {
        $(this)
          .find("h4")
      });
  };

  // effect - No4
  var thirdAnimation = function() {
    $(".blogs")
      .find("p")
      .delay(1400)
      .animate({ opacity: 1, left: 0 }, "slow");
    $(".blogs")
      .find("img")
      .delay(2000)
      .animate({ opacity: 1, right: 0 }, "slow");
    $(".blogs")
      .find("button")
      .delay(2500)
      .animate({ opacity: 1, bottom: 0 }, "slow");
  };

  if (windowWidth <= 549) {
    if (windowScrollTop > 600) {
      firstAnimation();
    }
    if (windowScrollTop > 1750) {
      secondAnimation();
    }
    if (windowScrollTop > 3500) {
      thirdAnimation();
    }
  } else if (windowWidth > 549 && windowWidth <= 991) {
    if (windowScrollTop > 480) {
      firstAnimation();
    }
    if (windowScrollTop > 1150) {
      secondAnimation();
    }
    if (windowScrollTop > 2200) {
      thirdAnimation();
    }
  } else {
    if (windowScrollTop > 450) {
      firstAnimation();
    }
    if (windowScrollTop > 850) {
      secondAnimation();
    }
    if (windowScrollTop > 1600) {
      thirdAnimation();
    }
  }
});

var scrollToElement = function(el, ms) {
	var speed = ms ? ms : 600;
	$("html,body").animate(
		{
			scrollTop: $(el).offset().top
		},
		speed
	);
};

$(document).ready(function() {
	$(".nav-link").on("click", function(e) {
		e.preventDefault();
		var el = $(this).attr("href");
		scrollToElement(el);
	});

	$(window).scroll(function() {
		var x = $(window).scrollTop();

		if (x >= 42) {
			$("#navbar").fadeIn(300);
		} else {
			$("#navbar").fadeOut(300);
		}
	});
});

(function() {
	"use strict";

	// WAIT FOR ALL TO BE LOADED
	window.onload = function() {
		// add loaded class to html
		var root = document.documentElement;
		root.className += " loaded";

		// TYPING EFFECT
		Typed.new("#typed", {
			stringsElement: document.getElementById("typed-strings"),
			loop: false,
			typeSpeed: 7,
			backSpeed: 2,
			startDelay: 1000,
			backDelay: 1200
		});
	}; // all loaded
})();

/*
	PLUGINS
*/

!(function(t, s, e) {
	"use strict";
	var i = function(t, s) {
		var i = this;
		(this.el = t),
			(this.options = {}),
			Object.keys(r).forEach(function(t) {
				i.options[t] = r[t];
			}),
			Object.keys(s).forEach(function(t) {
				i.options[t] = s[t];
			}),
			(this.isInput = "input" === this.el.tagName.toLowerCase()),
			(this.attr = this.options.attr),
			(this.showCursor = !this.isInput && this.options.showCursor),
			(this.elContent = this.attr
				? this.el.getAttribute(this.attr)
				: this.el.textContent),
			(this.contentType = this.options.contentType),
			(this.typeSpeed = this.options.typeSpeed),
			(this.startDelay = this.options.startDelay),
			(this.backSpeed = this.options.backSpeed),
			(this.backDelay = this.options.backDelay),
			e && this.options.stringsElement instanceof e
				? (this.stringsElement = this.options.stringsElement[0])
				: (this.stringsElement = this.options.stringsElement),
			(this.strings = this.options.strings),
			(this.strPos = 0),
			(this.arrayPos = 0),
			(this.stopNum = 0),
			(this.loop = this.options.loop),
			(this.loopCount = this.options.loopCount),
			(this.curLoop = 0),
			(this.stop = !1),
			(this.cursorChar = this.options.cursorChar),
			(this.shuffle = this.options.shuffle),
			(this.sequence = []),
			this.build();
	};
	(i.prototype = {
		constructor: i,
		init: function() {
			var t = this;
			t.timeout = setTimeout(function() {
				for (var s = 0; s < t.strings.length; ++s) t.sequence[s] = s;
				t.shuffle && (t.sequence = t.shuffleArray(t.sequence)),
					t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos);
			}, t.startDelay);
		},
		build: function() {
			var t = this;
			if (
				(this.showCursor === !0 &&
					((this.cursor = s.createElement("span")),
					(this.cursor.className = "typed-cursor"),
					(this.cursor.innerHTML = this.cursorChar),
					this.el.parentNode &&
						this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)),
				this.stringsElement)
			) {
				(this.strings = []), (this.stringsElement.style.display = "none");
				var e = Array.prototype.slice.apply(this.stringsElement.children);
				e.forEach(function(s) {
					t.strings.push(s.innerHTML);
				});
			}
			this.init();
		},
		typewrite: function(t, s) {
			if (this.stop !== !0) {
				var e = Math.round(70 * Math.random()) + this.typeSpeed,
					i = this;
				i.timeout = setTimeout(function() {
					var e = 0,
						r = t.substr(s);
					if ("^" === r.charAt(0)) {
						var o = 1;
						/^\^\d+/.test(r) &&
							((r = /\d+/.exec(r)[0]), (o += r.length), (e = parseInt(r))),
							(t = t.substring(0, s) + t.substring(s + o));
					}
					if ("html" === i.contentType) {
						var n = t.substr(s).charAt(0);
						if ("<" === n || "&" === n) {
							var a = "",
								h = "";
							for (
								h = "<" === n ? ">" : ";";
								t.substr(s + 1).charAt(0) !== h &&
								((a += t.substr(s).charAt(0)), s++, !(s + 1 > t.length));

							);
							s++, (a += h);
						}
					}
					i.timeout = setTimeout(function() {
						if (s === t.length) {
							if (
								(i.options.onStringTyped(i.arrayPos),
								i.arrayPos === i.strings.length - 1 &&
									(i.options.callback(),
									i.curLoop++,
									i.loop === !1 || i.curLoop === i.loopCount))
							)
								return;
							i.timeout = setTimeout(function() {
								i.backspace(t, s);
							}, i.backDelay);
						} else {
							0 === s && i.options.preStringTyped(i.arrayPos);
							var e = t.substr(0, s + 1);
							i.attr
								? i.el.setAttribute(i.attr, e)
								: i.isInput
									? (i.el.value = e)
									: "html" === i.contentType
										? (i.el.innerHTML = e)
										: (i.el.textContent = e),
								s++,
								i.typewrite(t, s);
						}
					}, e);
				}, e);
			}
		},
		backspace: function(t, s) {
			if (this.stop !== !0) {
				var e = Math.round(70 * Math.random()) + this.backSpeed,
					i = this;
				i.timeout = setTimeout(function() {
					if ("html" === i.contentType && ">" === t.substr(s).charAt(0)) {
						for (
							var e = "";
							"<" !== t.substr(s - 1).charAt(0) &&
							((e -= t.substr(s).charAt(0)), s--, !(s < 0));

						);
						s--, (e += "<");
					}
					var r = t.substr(0, s);
					i.attr
						? i.el.setAttribute(i.attr, r)
						: i.isInput
							? (i.el.value = r)
							: "html" === i.contentType
								? (i.el.innerHTML = r)
								: (i.el.textContent = r),
						s > i.stopNum
							? (s--, i.backspace(t, s))
							: s <= i.stopNum &&
								(i.arrayPos++,
								i.arrayPos === i.strings.length
									? ((i.arrayPos = 0),
										i.shuffle && (i.sequence = i.shuffleArray(i.sequence)),
										i.init())
									: i.typewrite(i.strings[i.sequence[i.arrayPos]], s));
				}, e);
			}
		},
		shuffleArray: function(t) {
			var s,
				e,
				i = t.length;
			if (i)
				for (; --i; )
					(e = Math.floor(Math.random() * (i + 1))),
						(s = t[e]),
						(t[e] = t[i]),
						(t[i] = s);
			return t;
		},
		reset: function() {
			var t = this;
			clearInterval(t.timeout);
			this.el.getAttribute("id");
			(this.el.textContent = ""),
				"undefined" != typeof this.cursor &&
					"undefined" != typeof this.cursor.parentNode &&
					this.cursor.parentNode.removeChild(this.cursor),
				(this.strPos = 0),
				(this.arrayPos = 0),
				(this.curLoop = 0),
				this.options.resetCallback();
		}
	}),
		(i["new"] = function(t, e) {
			var r = Array.prototype.slice.apply(s.querySelectorAll(t));
			r.forEach(function(t) {
				var s = t._typed,
					r = "object" == typeof e && e;
				s && s.reset(),
					(t._typed = s = new i(t, r)),
					"string" == typeof e && s[e]();
			});
		}),
		e &&
			(e.fn.typed = function(t) {
				return this.each(function() {
					var s = e(this),
						r = s.data("typed"),
						o = "object" == typeof t && t;
					r && r.reset(),
						s.data("typed", (r = new i(this, o))),
						"string" == typeof t && r[t]();
				});
			}),
		(t.Typed = i);
	var r = {
		strings: ["These are the default values", "Try them", "Use your own!", ".."],
		stringsElement: null,
		typeSpeed: 0,
		startDelay: 0,
		backSpeed: 0,
		shuffle: !1,
		backDelay: 500,
		loop: !1,
		loopCount: !1,
		showCursor: !0,
		cursorChar: "|",
		attr: null,
		contentType: "html",
		callback: function() {},
		preStringTyped: function() {},
		onStringTyped: function() {},
		resetCallback: function() {}
	};
})(window, document, window.jQuery);



setTimeout(function() {
  $("#slide1").css("opacity", "1");
}, 800);

setInterval(function() {
  $(".button").toggleClass("opacity");
}, 1000);
//Navigation
$(".mobile_nav").click(function() {
  $(".mobile_nav_menu").animate({ right: 0 });
});
$(".mobile_close").click(function() {
  $(".mobile_nav_menu").animate({ right: -270 });
});
