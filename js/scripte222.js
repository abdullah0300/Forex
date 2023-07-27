!(function (a) {
  "use strict";
  var e = a(window),
    i = a("body"),
    l = a(".navbar");
  function t() {
    return e.width();
  }
  "ontouchstart" in document.documentElement || i.addClass("no-touch");
  var s = t();
  e.on("resize", function () {
    s = t();
  });
  var n = a(".is-sticky");
  if (n.length > 0) {
    var r = a("#mainnav").offset();
    e.scroll(function () {
      var a = e.scrollTop();
      (e.width() > 991 || n.hasClass("mobile-sticky")) && a > r.top
        ? n.hasClass("has-fixed") || n.addClass("has-fixed")
        : n.hasClass("has-fixed") && n.removeClass("has-fixed");
    });
  }
  a('a.menu-link[href*="#"]:not([href="#"])').on("click", function () {
    if (
      location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") &&
      location.hostname === this.hostname
    ) {
      var e = a(this.hash),
        i = !!this.hash.slice(1) && a("[name=" + this.hash.slice(1) + "]"),
        t = s >= 992 ? l.height() - 1 : 0;
      if ((e = e.length ? e : i).length)
        return a("html, body").animate({ scrollTop: e.offset().top - t }, 1e3, "easeInOutExpo"), !1;
    }
  });
  var d = window.location.href,
    o = d.split("#"),
    m = a(".nav li a");
  m.length > 0 &&
    m.each(function () {
      d === this.href &&
        "" !== o[1] &&
        a(this).closest("li").addClass("active").parent().closest("li").addClass("active");
    });
  var c = a(".dropdown"),
    h = a(".dropdown-toggle");
  c.length > 0 &&
    (c.on("mouseover", function () {
      e.width() > 991 &&
        (a(this).children(".dropdown-menu").stop().fadeIn(400), a(this).addClass("open"));
    }),
    c.on("mouseleave", function () {
      e.width() > 991 &&
        (a(this).children(".dropdown-menu").stop().fadeOut(400), a(this).removeClass("open"));
    }),
    h.on("click", function () {
      if (e.width() < 991)
        return (
          a(this).parent().children(".dropdown-menu").fadeToggle(400),
          a(this).parent().toggleClass("open"),
          !1
        );
    })),
    e.on("resize", function () {
      a(".navbar-collapse").removeClass("in"), c.parent().children(".dropdown-menu").fadeOut("400");
    });
  var p = a(".navbar-toggler"),
    v = a(".is-transparent");
  p.length > 0 &&
    p.on("click", function () {
      a(".remove-animation").removeClass("animated"),
        v.hasClass("active") ? v.removeClass("active") : v.addClass("active");
    });
  var g = a("select");
  g.length > 0 && g.select2(),
    a(".menu-link").on("click", function () {
      a(".navbar-collapse").collapse("hide"), v.removeClass("active");
    }),
    a(document).on("mouseup", function (e) {
      v.is(e.target) ||
        0 !== v.has(e.target).length ||
        (a(".navbar-collapse").collapse("hide"), v.removeClass("active"));
    });
  var u = a(".timeline-carousel");
  if (u.length > 0) {
    var f = !!i.hasClass("is-rtl");
    u.addClass("owl-carousel").owlCarousel({
      navText: ["<i class='ti ti-angle-left'></i>", "<i class='ti ti-angle-right'></i>"],
      items: 6,
      nav: !0,
      margin: 30,
      rtl: f,
      responsive: {
        0: { items: 1 },
        400: { items: 2, center: !1 },
        599: { items: 3 },
        1024: { items: 5 },
        1170: { items: 6 },
      },
    });
  }
  var x = a(".roadmap-carousel");
  if (x.length > 0) {
    var b = !!i.hasClass("is-rtl");
    x.addClass("owl-carousel").owlCarousel({
      items: 6,
      nav: !1,
      dost: !0,
      margin: 30,
      rtl: b,
      responsive: {
        0: { items: 1 },
        400: { items: 2, center: !1 },
        599: { items: 3 },
        1024: { items: 4 },
        1170: { items: 5 },
      },
    });
  }
  var w = a(".roadmap-carousel-withnav");
  if (w.length > 0) {
    var k = !!i.hasClass("is-rtl");
    w.addClass("owl-carousel").owlCarousel({
      navText: ["<i class='ti ti-angle-left'></i>", "<i class='ti ti-angle-right'></i>"],
      items: 5,
      nav: !0,
      dost: !1,
      margin: 30,
      rtl: k,
      responsive: {
        0: { items: 1 },
        400: { items: 2, center: !1 },
        599: { items: 3 },
        1024: { items: 4 },
        1170: { items: 5 },
      },
    });
  }
  var C = a(".prblmsltn-list");
  if (C.length > 0) {
    var y = !!i.hasClass("is-rtl");
    C.addClass("owl-carousel").owlCarousel({
      navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
      items: 1,
      margin: 30,
      nav: !0,
      dost: !1,
      autoplay: !0,
      loop: !0,
      animateOut: "fadeOut",
      autoHeight: !0,
      rtl: y,
    });
  }
  var z = a(".has-carousel");
  if (z.length > 0) {
    var A = !!i.hasClass("is-rtl");
    z.each(function () {
      var e = a(this),
        i = e.data("items") ? e.data("items") : 4,
        l = i >= 3 ? 2 : i,
        t = l >= 2 ? 1 : l,
        s = e.data("delay") ? e.data("delay") : 6e3,
        n = !!e.data("auto"),
        r = !!e.data("loop"),
        d = !!e.data("dots"),
        o = !!e.data("navs"),
        m = !!e.data("center"),
        c = e.data("margin") ? e.data("margin") : 30;
      e.addClass("owl-carousel").owlCarousel({
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        items: i,
        loop: r,
        nav: o,
        dots: d,
        margin: c,
        center: m,
        autoplay: n,
        autoplayTimeout: s,
        autoplaySpeed: 300,
        rtl: A,
        responsive: { 0: { items: 1 }, 480: { items: t }, 768: { items: l }, 1170: { items: i } },
      });
    });
  }
  var P = a(".token-countdown");
  P.length > 0 &&
    P.each(function () {
      var e = a(this),
        i = e.attr("data-date");
      e.countdown(i).on("update.countdown", function (e) {
        a(this).html(
          e.strftime(
            '<div class="col"><span class="countdown-time countdown-time-first">%D</span><span class="countdown-text">D<span>ays</span></span></div><div class="col"><span class="countdown-time">%H</span><span class="countdown-text">H<span>ours</span></span></div><div class="col"><span class="countdown-time">%M</span><span class="countdown-text">M<span>inutes<span></span></div><div class="col"><span class="countdown-time countdown-time-last">%S</span><span class="countdown-text">S<span>econds</span></span></div>'
          )
        );
      });
    });
  var D = a(".countdown-s2");
  D.length > 0 &&
    D.each(function () {
      var e = a(this),
        i = e.attr("data-date");
      e.countdown(i).on("update.countdown", function (e) {
        a(this).html(
          e.strftime(
            '<div class="countdown-s2-item"><span class="countdown-s2-time countdown-time-first">%D</span><span class="countdown-s2-text">Days</span></div><div class="countdown-s2-item"><span class="countdown-s2-time">%H</span><span class="countdown-s2-text">Hours</span></div><div class="countdown-s2-item"><span class="countdown-s2-time">%M</span><span class="countdown-s2-text">Min</span></div><div class="countdown-s2-item"><span class="countdown-s2-time countdown-time-last">%S</span><span class="countdown-s2-text">Sec</span></div>'
          )
        );
      });
    });
  var j = a(".content-popup");
  j.length > 0 &&
    j.magnificPopup({
      type: "inline",
      preloader: !0,
      removalDelay: 400,
      mainClass: "mfp-fade bg-team-exp",
    });
  var L = a(".video-play");
  L.length > 0 &&
    L.magnificPopup({
      type: "iframe",
      removalDelay: 160,
      preloader: !0,
      fixedContentPos: !1,
      callbacks: {
        beforeOpen: function () {
          (this.st.image.markup = this.st.image.markup.replace(
            "mfp-figure",
            "mfp-figure mfp-with-anim"
          )),
            (this.st.mainClass = this.st.el.attr("data-effect"));
        },
      },
    });
  var S = a(".imagebg");
  S.length > 0 &&
    S.each(function () {
      var e = a(this),
        i = e.parent(),
        l = e.data("overlay"),
        t = e.children("img").attr("src"),
        s = void 0 !== l && "" !== l && l.split("-");
      void 0 !== t &&
        "" !== t &&
        (i.hasClass("has-bg-image") || i.addClass("has-bg-image"),
        "" !== s && "dark" === s[0] && (i.hasClass("light") || i.addClass("light")),
        e.css("background-image", 'url("' + t + '")').addClass("bg-image-loaded"));
    });
  var T = a('[class*="mask-ov"]');
  T.length > 0 &&
    T.each(function () {
      var e = a(this).parent();
      e.hasClass("has-maskbg") || e.addClass("has-maskbg");
    });
  var H = a("#contact-form"),
    V = a("#subscribe-form");
  if (H.length > 0 || V.length > 0) {
    if (!a().validate || !a().ajaxSubmit)
      return console.log("contactForm: jQuery Form or Form Validate not Defined."), !0;
    if (H.length > 0) {
      var _ = H.find("select.required"),
        B = H.find(".form-results");
      H.validate({
        invalidHandler: function () {
          B.slideUp(400);
        },
        submitHandler: function (e) {
          B.slideUp(400),
            a(e).ajaxSubmit({
              target: B,
              dataType: "json",
              success: function (i) {
                var l = "error" === i.result ? "alert-danger" : "alert-success";
                B.removeClass("alert-danger alert-success")
                  .addClass("alert " + l)
                  .html(i.message)
                  .slideDown(400),
                  "error" !== i.result &&
                    a(e).clearForm().find(".input-field").removeClass("input-focused");
              },
            });
        },
      }),
        _.on("change", function () {
          a(this).valid();
        });
    }
    if (V.length > 0) {
      var U = V.find(".subscribe-results");
      V.validate({
        invalidHandler: function () {
          U.slideUp(400);
        },
        submitHandler: function (e) {
          U.slideUp(400),
            a(e).ajaxSubmit({
              target: U,
              dataType: "json",
              success: function (i) {
                var l = "error" === i.result ? "alert-danger" : "alert-success";
                U.removeClass("alert-danger alert-success")
                  .addClass("alert " + l)
                  .html(i.message)
                  .slideDown(400),
                  "error" !== i.result && a(e).clearForm();
              },
            });
        },
      });
    }
  }
  /*
  var O = "../ico/images/",
    F = "RTL Mode",
    M = "./rtl/index.html",
    E = "../ico/",
    R = "../ico-user/";
  i.hasClass("is-rtl") && ((O = "../../ico/images/"), (F = "LTR Mode"), (M = "../index.html")),
    i.append(
      '<div class="demo-panel"><div class="demo-list"> <a class="demo-themes" title="See All Demo" href="javascript:void(0)"> <img src="' +
        O +
        'demo-icon.png" /> </a> <a class="demo-mode" href="' +
        M +
        '">' +
        F +
        '</a> <a class="demo-cart" target="_blank" href="http://bit.ly/2uPFhHX"> <i class="fa fa-shopping-cart"> </i> </a> <a class="demo-wp" target="_blank" href="http://bit.ly/2JnGx8h"> <i class="fab fa-wordpress"> </i> <span>WP</span> </a> <a class="demo-toggle" href="javascript:void(0)"> <i class="fas fa-cogs"> </i> </a></div><div class="demo-content"><ul class="color-list"><li> <a href="#" class="color-trigger theme-defalt" title="theme"></a></li><li> <a href="#" class="color-trigger theme-blue" title="theme-blue"></a></li><li> <a href="#" class="color-trigger theme-mint" title="theme-mint"></a></li><li> <a href="#" class="color-trigger theme-orange" title="theme-orange"></a></li><li> <a href="#" class="color-trigger theme-royal" title="theme-royal"></a></li><li> <a href="#" class="color-trigger theme-ruby" title="theme-ruby"></a></li><li> <a href="#" class="color-trigger theme-java" title="theme-java"></a></li></ul></div></div><div class="demo-theme-content"><div class="demo-theme-content-bg"></div> <a class="demo-close" href="javascript:void(0)">&times;</a><div class="demo-theme-wrapper"><div class="demo-theme-all"><div class="row no-gutters"><div class="col-lg-9"><div class="demo-left-promo"><div class="row"><div class="col-md-6"> <a href="http://bit.ly/2uPFhHX" class="demo-offer-image text-center"> <img src="http://cdn.themenio.com/offers/ico-site-offer-html.gif" alt="offer" /> </a></div><div class="col-md-6 d-none d-md-block"> <a href="http://bit.ly/2GrTLis" class="demo-offer-image text-center"> <img src="http://cdn.themenio.com/offers/ico-site-offer-other.gif" alt="offer" /> </a></div></div></div></div><div class="col-lg-3"><div class="demo-right-promo demo-color-bg"></div></div></div><div class="row no-gutters"><div class="col-lg-9"><div class="demo-left"><div class="row"><div class="col-lg-4 col-sm-6"><div class="demo-theme-item demo-theme-item-1"><div class="demo-image"> <a href="' +
        E +
        'index-zinnia-particle-animate.html"> <img src="' +
        O +
        'demo-zinnia.jpg" alt="alt"> </a> <span class="demo-new-badge demo-pink-badge">v1.4.1 New</span></div><div class="demo-text"> <a class="demo-title" href="' +
        E +
        'index-zinnia-particle-animate.html"><h5>Landing V12 <span>Zinnia</span></h5> </a><ul class="demo-item-list"><li> <a href="' +
        E +
        'index-zinnia.html">Default</a></li><li> <a href="' +
        E +
        'index-zinnia-animate.html">Animated</a></li><li> <a href="' +
        E +
        'index-zinnia-particle.html">Particle</a></li><li> <a href="' +
        E +
        'index-zinnia-particle-animate.html">Particle - Ani</a></li></ul></div></div></div><div class="col-lg-4 col-sm-6"><div class="demo-theme-item demo-theme-item-2"><div class="demo-image"> <a href="' +
        E +
        'index-salvia-particle-animate.html"> <img src="' +
        O +
        'demo-salvia.jpg" alt="alt"> </a> <span class="demo-new-badge demo-hot-badge">v1.4 New</span></div><div class="demo-text"> <a class="demo-title" href="' +
        E +
        'index-salvia-particle-animate.html"><h5>Landing V11 <span>Salvia</span></h5> </a><ul class="demo-item-list"><li> <a href="' +
        E +
        'index-salvia.html">Default</a></li><li> <a href="' +
        E +
        'index-salvia-animate.html">Animated</a></li><li> <a href="' +
        E +
        'index-salvia-particle.html">Particle</a></li><li> <a href="' +
        E +
        'index-salvia-particle-animate.html">Particle - Ani</a></li></ul></div></div></div><div class="col-lg-4 col-sm-6"><div class="demo-theme-item demo-theme-item-3"><div class="demo-image"> <a href="' +
        E +
        'index-lungwort-particle-animate.html"> <img src="' +
        O +
        'demo-lungwort.jpg" alt="alt"> </a> <span class="demo-new-badge">v1.3</span></div><div class="demo-text"> <a class="demo-title" href="' +
        E +
        'index-lungwort-particle-animate.html"><h5>Landing V10 <span>Lungwort</span></h5> </a><ul class="demo-item-list"><li> <a href="' +
        E +
        'index-lungwort.html">Default</a></li><li> <a href="' +
        E +
        'index-lungwort-animate.html">Animated</a></li><li> <a href="' +
        E +
        'index-lungwort-particle.html">Particle</a></li><li> <a href="' +
        E +
        'index-lungwort-particle-animate.html">Particle - Ani</a></li></ul></div></div></div><div class="col-lg-4 col-sm-6"><div class="demo-theme-item demo-theme-item-4"><div class="demo-image"> <a href="' +
        E +
        'index-jasmine-particle-animate.html"> <img src="' +
        O +
        'demo-jasmine.jpg" alt="alt"> </a> <span class="demo-new-badge">v1.3</span></div><div class="demo-text"> <a class="demo-title" href="' +
        E +
        'index-jasmine-particle-animate.html"><h5>Landing V9 <span>Jasmine</span></h5> </a><ul class="demo-item-list"><li> <a href="' +
        E +
        'index-jasmine.html">Default</a></li><li> <a href="' +
        E +
        'index-jasmine-animate.html">Animated</a></li><li> <a href="' +
        E +
        'index-jasmine-particle.html">Particle</a></li><li> <a href="' +
        E +
        'index-jasmine-particle-animate.html">Particle - Ani</a></li></ul></div></div></div><div class="col-lg-4 col-sm-6"><div class="demo-theme-item demo-theme-item-5"><div class="demo-image"> <a href="' +
        E +
        'index-lobelia-particle-animate.html"> <img src="' +
        O +
        'demo-lobelia.jpg" alt="alt"> </a> <span class="demo-new-badge">v1.2.3</span></div><div class="demo-text"> <a class="demo-title" href="' +
        E +
        'index-lobelia-particle-animate.html"><h5>Landing V8 <span>Lobelia Dark</span></h5> </a><ul class="demo-item-list"><li> <a href="' +
        E +
        'index-lobelia.html">Default</a></li><li> <a href="' +
        E +
        'index-lobelia-animate.html">Animated</a></li><li> <a href="' +
        E +
        'index-lobelia-particle.html">Particle</a></li><li> <a href="' +
        E +
        'index-lobelia-particle-animate.html">Particle - Ani</a></li></ul></div></div></div><div class="col-lg-4 col-sm-6"><div class="demo-theme-item demo-theme-item-6"><div class="demo-image"> <a href="' +
        E +
        'index-muscari-particle-animate.html"> <img src="' +
        O +
        'demo-muscari.jpg" alt="alt"> </a> <span class="demo-new-badge">v1.2.1</span></div><div class="demo-text"> <a class="demo-title" href="' +
        E +
        'index-muscari-particle-animate.html"><h5>Landing V7 <span>Muscari Light</span></h5> </a><ul class="demo-item-list"><li> <a href="' +
        E +
        'index-muscari.html">Default</a></li><li> <a href="' +
        E +
        'index-muscari-animate.html">Animated</a></li><li> <a href="' +
        E +
        'index-muscari-particle.html">Particle</a></li><li> <a href="' +
        E +
        'index-muscari-particle-animate.html">Particle - Ani</a></li></ul></div></div></div><div class="col-lg-4 col-sm-6"><div class="demo-theme-item demo-theme-item-7"><div class="demo-image"> <a href="' +
        E +
        'index-lavender-particle-animate.html"> <img src="' +
        O +
        'demo-lavender.jpg" alt="alt"> </a> <span class="demo-new-badge">v1.2</span></div><div class="demo-text"> <a class="demo-title" href="' +
        E +
        'index-lavender-particle-animate.html"><h5>Landing V6 <span>Lavender Light</span></h5> </a><ul class="demo-item-list"><li> <a href="' +
        E +
        'index-lavender.html">Default</a></li><li> <a href="' +
        E +
        'index-lavender-animate.html">Animated</a></li><li> <a href="' +
        E +
        'index-lavender-particle.html">Particle</a></li><li> <a href="' +
        E +
        'index-lavender-particle-animate.html">Particle - Ani</a></li></ul></div></div></div><div class="col-lg-4 col-sm-6"><div class="demo-theme-item demo-theme-item-8"><div class="demo-image"> <a href="' +
        E +
        'index-azure-light-pro-tokensales.html"> <img src="' +
        O +
        'demo-azure-pro.jpg" alt="alt"> </a> <span class="demo-new-badge">v1.1</span></div><div class="demo-text"> <a class="demo-title" href="' +
        E +
        'index-azure-light-pro-tokensales.html"><h5>Landing V5 <span>Azure Light Pro</span></h5> </a><ul class="demo-item-list"><li> <a href="' +
        E +
        'index-azure-light-pro.html">Default</a></li><li> <a href="' +
        E +
        'index-azure-light-pro-animate.html">Animated</a></li><li> <a href="' +
        E +
        'index-azure-light-pro-particle.html">Particle</a></li><li> <a href="' +
        E +
        'index-azure-light-pro-particle-animate.html">Particle - Ani</a></li></ul></div></div></div><div class="col-lg-4 col-sm-6"><div class="demo-theme-item demo-theme-item-9"><div class="demo-image"> <a href="' +
        E +
        'index-azure-particle-animate.html"> <img src="' +
        O +
        'demo-azure.jpg" alt="alt"> </a> <span class="demo-new-badge">v1.1</span></div><div class="demo-text"> <a class="demo-title" href="' +
        E +
        'index-azure-particle-animate.html"><h5>Landing V4 <span>Default Azure</span></h5> </a><ul class="demo-item-list"><li> <a href="' +
        E +
        'index-azure.html">Default</a></li><li> <a href="' +
        E +
        'index-azure-animate.html">Animated</a></li><li> <a href="' +
        E +
        'index-azure-particle.html">Particle</a></li><li> <a href="' +
        E +
        'index-azure-particle-animate.html">Particle - Ani</a></li></ul></div></div></div><div class="col-lg-4 col-sm-6"><div class="demo-theme-item demo-theme-item-10"><div class="demo-image"> <a href="' +
        E +
        'index-dark-pro-particle-animate.html"> <img src="' +
        O +
        'demo-dark-pro.jpg" alt="alt"> </a> <span class="demo-new-badge">v1.1</span></div><div class="demo-text"> <a class="demo-title" href="' +
        E +
        'index-dark-pro-tokensales.html"><h5>Landing V3 <span>Default Dark Pro</span></h5> </a><ul class="demo-item-list"><li> <a href="' +
        E +
        'index-dark-pro.html">Default</a></li><li> <a href="' +
        E +
        'index-dark-pro-animate.html">Animated</a></li><li> <a href="' +
        E +
        'index-dark-pro-particle.html">Particle</a></li><li> <a href="' +
        E +
        'index-dark-pro-particle-animate.html">Particle - Ani</a></li></ul></div></div></div><div class="col-lg-4 col-sm-6"><div class="demo-theme-item demo-theme-item-10"><div class="demo-image"> <a href="' +
        E +
        'index-light-tokensales.html"> <img src="' +
        O +
        'demo-pro.jpg" alt="alt"> </a> <span class="demo-new-badge">v1.0</span></div><div class="demo-text"> <a class="demo-title" href="' +
        E +
        'index-light-tokensales.html"><h5>Landing V2 <span>Default Light</span></h5> </a><ul class="demo-item-list"><li> <a href="' +
        E +
        'index-light.html">Default</a></li><li> <a href="' +
        E +
        'index-light-animate.html">Animated</a></li><li> <a href="' +
        E +
        'index-light-particle.html">Particle</a></li><li> <a href="' +
        E +
        'index-light-particle-animate.html">Particle - Ani</a></li></ul></div></div></div><div class="col-lg-4 col-sm-6"><div class="demo-theme-item demo-theme-item-10"><div class="demo-image"> <a href="' +
        E +
        'index-dark-particle-animate.html"> <img src="' +
        O +
        'demo-dark.jpg" alt="alt"> </a> <span class="demo-new-badge">v1.0</span></div><div class="demo-text"> <a class="demo-title" href="' +
        E +
        'index-dark-particle-animate.html"><h5>Landing V1 <span>Default Dark</span></h5> </a><ul class="demo-item-list"><li> <a href="' +
        E +
        'index-dark.html">Default</a></li><li> <a href="' +
        E +
        'index-dark-animate.html">Animated</a></li><li> <a href="' +
        E +
        'index-dark-particle.html">Particle</a></li><li> <a href="' +
        E +
        'index-dark-particle-animate.html">Particle - Ani</a></li></ul></div></div></div></div></div></div><div class="col-lg-3"><div class="demo-right demo-color-bg"><div class="row"><div class="col-lg-12 col-md-6"><div class="demo-theme-item"><div class="demo-image"> <a href="' +
        R +
        'index.html"> <img src="' +
        O +
        'demo-user.jpg" alt="alt"> </a> <span class="demo-new-badge demo-pink-badge">v1.3</span> <span class="demo-free-badge">Free</span></div><div class="demo-text"> <a class="demo-title" href="' +
        R +
        'index.html"><h5>User Center</h5> </a><ul class="demo-item-list"><li> <a href="' +
        R +
        'index.html">DashBoard</a></li><li> <a href="' +
        R +
        'account.html">Accounts</a></li><li> <a href="' +
        R +
        'tokens.html">Contributions</a></li><li> <a href="' +
        R +
        'transactions.html">Transactions</a></li><li> <a href="' +
        R +
        'kyc.html">KYC Default</a></li><li> <a href="' +
        R +
        'kyc-application.html">KYC Application</a></li><li> <a href="' +
        R +
        'kyc-status.html">KYC Status</a></li><li> <a href="' +
        R +
        'activity.html">Activity</a></li><li> <a href="' +
        R +
        'referrals.html">Referrals</a></li><li> <a href="' +
        R +
        'security.html">Security</a></li><li> <a href="' +
        R +
        'signup.html">Signup</a></li><li> <a href="' +
        R +
        'signup-success.html">Signup Success</a></li><li> <a href="' +
        R +
        'login.html">Login</a></li><li> <a href="' +
        R +
        'recovery.html">Recovery</a></li><li> <a href="' +
        R +
        'email-confirm.html">Email Confirm</a></li><li> <a href="' +
        R +
        'faq.html">FAQ Page</a></li><li> <a href="' +
        R +
        'how-to.html">How To Page</a></li><li> <a href="' +
        R +
        'policy.html">Privacy Policy</a></li></ul></div></div><div class="demo-sap"></div></div><div class="col-lg-12 col-md-6"><div class="demo-extra-page-list"><h5>Extra Pages</h5><ul class="demo-extra-item-list"><li> <a href="' +
        E +
        'login-dark.html">Login <span>Dark</span> </a></li><li> <a href="' +
        E +
        'login-light.html">Login <span>Light</span> </a></li><li> <a href="' +
        E +
        'signup-dark.html">Sign Up <span>Dark</span> </a></li><li> <a href="' +
        E +
        'signup-light.html">Sign Up <span>Light</span> </a></li><li> <a href="' +
        E +
        'signup-azure.html">Sign Up <span>Azure</span> </a></li><li> <a href="' +
        E +
        'signup-lavender.html">Sign Up <span>Lavender</span> </a></li><li> <a href="' +
        E +
        'signup-muscari.html">Sign Up <span>Muscari</span> </a></li><li> <a href="' +
        E +
        'signup-lobelia.html">Sign Up <span>Lobelia</span> </a></li><li> <a href="' +
        E +
        '404-dark.html">404 <span>Dark</span> </a></li><li> <a href="' +
        E +
        '404-light.html">404 <span>Light</span> </a></li><li> <a href="' +
        E +
        '404-azure.html">404 <span>Azure</span> </a></li><li></li><li> <a href="' +
        E +
        'index-light-tokensales.html">Token Sales <span>Light</span> </a></li><li> <a href="' +
        E +
        'index-dark-pro-tokensales.html">Token Sales <span>Dark Pro</span> </a></li><li> <a href="' +
        E +
        'index-azure-tokensales.html">Token Sales <span>Azure</span> </a></li><li> <a href="' +
        E +
        'index-azure-light-pro-tokensales.html">Token Sales <span>Azure Pro</span> </a></li><li> <a href="' +
        E +
        'index-dark-tokensales.html">Token Sales <span>Dark</span> </a></li><li></li><li> <a href="' +
        E +
        'blog-archive-dark.html">Blog Archive <span>Dark</span> </a></li><li> <a href="' +
        E +
        'blog-archive-light.html">Blog Archive <span>Light</span> </a></li><li> <a href="' +
        E +
        'blog-archive-dark-pro.html">Blog Archive <span>Dark Pro</span> </a></li><li> <a href="' +
        E +
        'blog-archive-azure.html">Blog Archive <span>Azure</span> </a></li><li> <a href="' +
        E +
        'blog-archive-azure-light-pro.html">Blog Archive <span>Azure Pro</span> </a></li><li></li><li> <a href="' +
        E +
        'blog-single-dark.html">Blog Single <span>Dark</span> </a></li><li> <a href="' +
        E +
        'blog-single-light.html">Blog Single <span>Light</span> </a></li><li> <a href="' +
        E +
        'blog-single-dark-pro.html">Blog Single <span>Dark Pro</span> </a></li><li> <a href="' +
        E +
        'blog-single-azure.html">Blog Single <span>Azure</span> </a></li><li> <a href="' +
        E +
        'blog-single-azure-light-pro.html">Blog Single <span>Azure Pro</span> </a></li></ul></div></div></div></div></div></div></div></div></div>'
    ),
    a(".demo-themes,.demo-close").on("click", function () {
      a(".demo-theme-content").toggleClass("active"), a("html").toggleClass("demo-on");
    }),
    a(".demo-toggle").on("click", function () {
      a(".demo-content").slideToggle("slow");
    });
    */
  var Y = a(".color-trigger");
  Y.length > 0 &&
    Y.on("click", function () {
      var e = a(this).attr("title");
      return a("#layoutstyle").attr("href", "assets/css/" + e + ".css"), !1;
    });
  var J = a(".input-line");
  J.length > 0 &&
    J.each(function () {
      var e = a(this);
      a(this).val().length > 0 && e.parent().addClass("input-focused"),
        e.on("focus", function () {
          e.parent().addClass("input-focused");
        }),
        e.on("blur", function () {
          e.parent().removeClass("input-focused"),
            a(this).val().length > 0 && e.parent().addClass("input-focused");
        });
    });
  var K = a(".animated");
  a().waypoint &&
    K.length > 0 &&
    e.on("load", function () {
      K.each(function () {
        var e = a(this),
          i = e.data("animate"),
          l = e.data("duration"),
          t = e.data("delay");
        e.waypoint(
          function () {
            e.addClass("animated " + i).css("visibility", "visible"),
              l && e.css("animation-duration", l + "s"),
              t && e.css("animation-delay", t + "s");
          },
          { offset: "93%" }
        );
      });
    });
  var Q = a("#preloader"),
    X = a("#loader");
  Q.length > 0 &&
    e.on("load", function () {
      X.fadeOut(300), i.addClass("loaded"), Q.delay(700).fadeOut(300);
    });
  var q = ".slider-pane";
  if (a(q).length > 0) {
    var G = !!i.hasClass("is-rtl");
    a(q).addClass("owl-carousel").owlCarousel({
      items: 1,
      nav: !1,
      dotsContainer: ".slider-nav,.slider-dot",
      margin: 30,
      loop: !0,
      autoplayTimeout: 3e3,
      rtl: G,
      autoplay: !0,
      animateOut: "fadeOut",
      autoplayHoverPause: !0,
    });
  }
  var I = a(".card");
  I.length > 0 &&
    I.each(function () {
      a(".card-header a").on("click", function () {
        var e = a(this);
        e.parent().parent().parent().parent().find(I).removeClass("active"),
          e.parent().parent().parent().addClass("active");
      });
    });
  var N = a("#particles-js"),
    W = "#2b56f5",
    Z = "#00c0fa";
  i.hasClass("io-zinnia") && ((W = "#fff"), (Z = "#fff")),
    N.length > 0 &&
      particlesJS("particles-js", {
        particles: {
          number: { value: 30, density: { enable: !0, value_area: 800 } },
          color: { value: Z },
          shape: {
            type: "circle",
            opacity: 0.2,
            stroke: { width: 0, color: W },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 },
          },
          opacity: {
            value: 0.3,
            random: !1,
            anim: { enable: !1, speed: 1, opacity_min: 0.12, sync: !1 },
          },
          size: { value: 6, random: !0, anim: { enable: !1, speed: 40, size_min: 0.08, sync: !1 } },
          line_linked: { enable: !0, distance: 150, color: W, opacity: 0.5, width: 1.3 },
          move: {
            enable: !0,
            speed: 6,
            direction: "none",
            random: !1,
            straight: !1,
            out_mode: "out",
            bounce: !1,
            attract: { enable: !1, rotateX: 600, rotateY: 1200 },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: !0, mode: "repulse" },
            onclick: { enable: !0, mode: "push" },
            resize: !0,
          },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: !0,
      });
})(jQuery);
