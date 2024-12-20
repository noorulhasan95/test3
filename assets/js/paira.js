/**
 * Author -> ThemeTidy
 * Email -> support@themetidy.com
 * Version -> 1.0
 */

! function(e, a, i) {
    "use strict";
    e(function() {
        t.initDomReady()
    }), e(a).load(function() {
        t.initWindowReady()
    });
    var t = {
        initDomReady: function() {
            this.initMenu(), this.initPairaAnimation(), this.initDomLoadClass(), this.initDialogBox(), this.initParallax()
        },
        initWindowReady: function() {
            this.initToolTip(), this.initIE10ViewPortHack(), this.initWindowLoadClass(), this.initBxCarousel(), this.initGoogleMap()
        },
        initParallax: function() {
            var a = e(".picture-container"),
                i = e(".gallery-background");
            a.length > 0 && a.parallax("50%", .3), i.length > 0 && i.parallax("50%", .3)
        },
        pairaAnimation: function(a, i) {
            a.each(function() {
                var a = e(this),
                    t = a.attr("data-paira-animation"),
                    o = a.attr("data-paira-animation-delay");
                a.css({
                    "-webkit-animation-delay": o,
                    "-moz-animation-delay": o,
                    "animation-delay": o
                }), (i || a).waypoint(function() {
                    a.addClass("animated").addClass(t)
                }, {
                    triggerOnce: !0,
                    offset: "90%"
                })
            })
        },
        initPairaAnimation: function() {
            t.pairaAnimation(e(".paira-animation"))
        },
        initToolTip: function() {
            e('[data-toggle="tooltip"]').length && e('[data-toggle="tooltip"]').tooltip()
        },
        initMenu: function() {
            a.prettyPrint && prettyPrint(), e(i).on("click", ".paira-mega-menu .paira-dropdown-menu", function(e) {
                e.stopPropagation()
            }), e(".paira-mega-menu ul .paira-dropdown-menu").parent().hover(function() {
                var i = e(this).find("ul");
                if (e(i).offset().left + i.width() > e(a).width()) {
                    var t = -e(i).width();
                    i.css({
                        left: t
                    })
                }
            }), e(i).on("click", ".paira-mega-menu .paira-angle-down", function(a) {
                a.preventDefault(), e(this).parents(".paira-dropdown").find(".paira-dropdown-menu").toggleClass("active")
            }), e(i).on("click", ".paira-mega-menu .fa-angle-right", function(a) {
                a.preventDefault(), e(this).parents("a").next().toggleClass("active-on")
            }), e(i).on("click", ".paira-menu-popup .plus", function(a) {
                a.stopPropagation();
                var i = e(this).find(".fa-plus"),
                    t = e(this).find(".fa-minus");
                i.hide(), t.show(), e(this).addClass("minus").removeClass("plus")
            }), e(i).on("click", ".paira-menu-popup .minus", function(a) {
                a.stopPropagation();
                var i = e(this).find(".fa-plus");
                e(this).find(".fa-minus").hide(), i.show(), e(this).addClass("plus").removeClass("minus")
            })
        },
        initDialogBox: function() {
            e(i).on("click", ".paira-quick-view", function(a) {
                a.stopPropagation(), e("#paira-quick-view").modal("show");
                var i = e(".paira-quick-product-image-list");
                i.length > 0 && i.bxSlider({
                    slideWidth: 110,
                    minSlides: 1,
                    maxSlides: 3,
                    slideMargin: 30,
                    pager: !1,
                    responsive: !0,
                    moveSlides: 1,
                    nextText: '<i class="fa fa-angle-right fa-2x"></i>',
                    prevText: '<i class="fa fa-angle-left fa-2x"></i>'
                })
            }), e("#paira-welcome-newsletter").modal("show"), e(i).on("click", ".login-popup", function(a) {
                a.stopPropagation(), e("#paira-login").modal("show")
            }), e(i).on("click", ".menu-pops", function(a) {
                a.stopPropagation(), e("#paira-menu").modal("show")
            }), e(i).on("click", ".search-popup", function(a) {
                a.stopPropagation(), e("#paira-search").modal("show")
            }), e(i).on("click", ".cart-menu-body", function(a) {
                a.stopPropagation(), e("#paira-ajax-cart").modal("show")
            }), e("#paira-welcome-newsletter").modal("show"), e(i).on("click", ".product-cart-con", function(a) {
                a.stopPropagation(), e("#paira-ajax-success-message").modal("show")
            })
        },
        initBxCarousel: function() {
            var a = e(".single-product-image-list"),
                i = e(".bxslider");
            a.length > 0 && a.bxSlider({
                slideWidth: 110,
                minSlides: 1,
                maxSlides: 3,
                slideMargin: 15,
                pager: !1,
                responsive: !0,
                moveSlides: 1,
                nextText: '<i class="fa fa-angle-right fa-2x"></i>',
                prevText: '<i class="fa fa-angle-left fa-2x"></i>'
            }), i.length > 0 && i.bxSlider({
                mode: "horizontal",
                useCSS: !1,
                infiniteLoop: !1,
                hideControlOnEnd: !0,
                easing: !1,
                speed: 0
            })
        },
        initGoogleMap: function() {
            if (e("#googleMap").length > 0) {
                var a, t, o = [
                        ["Jhenidah, Bangladesh", 23.545002, 89.172516, 1],
                        ["Enpek, Bangladesh", 23.545201, 89.165655, 2],
                        ["Paira, Bangladesh", 23.537035, 89.17442, 3],
                        ["ThemeTidy, Bangladesh", 23.542593, 89.16817, 4]
                    ],
                    n = new google.maps.Map(i.getElementById("googleMap"), {
                        zoom: 14,
                        center: new google.maps.LatLng(23.545002, 89.172516),
                        styles: [{
                            elementType: "geometry",
                            stylers: [{
                                color: "#f5f5f5"
                            }]
                        }, {
                            elementType: "labels.icon",
                            stylers: [{
                                visibility: "off"
                            }]
                        }, {
                            elementType: "labels.text.fill",
                            stylers: [{
                                color: "#616161"
                            }]
                        }, {
                            elementType: "labels.text.stroke",
                            stylers: [{
                                color: "#f5f5f5"
                            }]
                        }, {
                            featureType: "administrative.land_parcel",
                            elementType: "labels.text.fill",
                            stylers: [{
                                color: "#bdbdbd"
                            }]
                        }, {
                            featureType: "poi",
                            elementType: "geometry",
                            stylers: [{
                                color: "#eeeeee"
                            }]
                        }, {
                            featureType: "poi",
                            elementType: "labels.text.fill",
                            stylers: [{
                                color: "#757575"
                            }]
                        }, {
                            featureType: "poi.park",
                            elementType: "geometry",
                            stylers: [{
                                color: "#e5e5e5"
                            }]
                        }, {
                            featureType: "poi.park",
                            elementType: "labels.text.fill",
                            stylers: [{
                                color: "#9e9e9e"
                            }]
                        }, {
                            featureType: "road",
                            elementType: "geometry",
                            stylers: [{
                                color: "#ffffff"
                            }]
                        }, {
                            featureType: "road.arterial",
                            elementType: "labels.text.fill",
                            stylers: [{
                                color: "#757575"
                            }]
                        }, {
                            featureType: "road.highway",
                            elementType: "geometry",
                            stylers: [{
                                color: "#dadada"
                            }]
                        }, {
                            featureType: "road.highway",
                            elementType: "labels.text.fill",
                            stylers: [{
                                color: "#616161"
                            }]
                        }, {
                            featureType: "road.local",
                            elementType: "labels.text.fill",
                            stylers: [{
                                color: "#9e9e9e"
                            }]
                        }, {
                            featureType: "transit.line",
                            elementType: "geometry",
                            stylers: [{
                                color: "#e5e5e5"
                            }]
                        }, {
                            featureType: "transit.station",
                            elementType: "geometry",
                            stylers: [{
                                color: "#eeeeee"
                            }]
                        }, {
                            featureType: "water",
                            elementType: "geometry",
                            stylers: [{
                                color: "#c9c9c9"
                            }]
                        }, {
                            featureType: "water",
                            elementType: "labels.text.fill",
                            stylers: [{
                                color: "#9e9e9e"
                            }]
                        }]
                    }),
                    l = new google.maps.InfoWindow;
                for (t = 0; t < o.length; t++) a = new google.maps.Marker({
                    position: new google.maps.LatLng(o[t][1], o[t][2]),
                    map: n
                }), google.maps.event.addListener(a, "click", function(e, a) {
                    return function() {
                        l.setContent(o[a][0]), l.open(n, e)
                    }
                }(a, t))
            }
        },
        ajaxGetData: function(a, i) {
            var o = void 0 !== i ? i : "html";
            return e.ajax({
                url: a,
                type: "get",
                dataType: o,
                beforeSend: function() {
                    t.showLoading()
                },
                error: function() {
                    t.hideLoading();
                    t.showCommonMessage('<i class="fa fa-info-circle font-size-16"></i> Something wrong! Try to reload your page OR contact customer support.')
                }
            })
        },
        showLoading: function() {
            e(".paira-loading").show()
        },
        hideLoading: function() {
            e(".paira-loading").hide()
        },
        showCommonMessage: function(a) {
            var i = e("#paira-common-message");
            i.find(".paira-common-message-details").html(a), i.modal("show")
        },
        initIE10ViewPortHack: function() {
            if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
                var e = i.createElement("style");
                e.appendChild(i.createTextNode("@-ms-viewport{width:auto!important}")), i.querySelector("head").appendChild(e)
            }
        },
        initDomLoadClass: function() {
            e(".paira-dom-ready").show()
        },
        initWindowLoadClass: function() {
            e(".paira-win-ready").show();
            var a = e(".carousel-indicators li").size();
            e(".carousel-indicators-total").text("0" + a), e(i).on("click", "#paira-single-product-gallery a", function(a) {
                a.preventDefault();
                var i = e(this).attr("data-image");
                t.ajaxGetData(i).done(function() {
                    t.hideLoading(), e(".paira-single-product-image img").attr("src", i)
                })
            }), e(i).on("click", ".paira-quick-product-image-list a", function(a) {
                a.preventDefault();
                var i = e(this).attr("data-image");
                t.ajaxGetData(i).done(function() {
                    t.hideLoading(), e(".paira-quick-single-product-image img").attr("src", i)
                })
            })
        }
    }
}(window.jQuery, window, document);