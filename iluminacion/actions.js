$(document).ready(function () {
    ///////////////////////////////////////////////////////////////////////////////////////////////LOADER:
    gsap.to(".loader_logo", { y: 10, duration: 0.7, repeat: -1, yoyo: true, ease: "sine.inOut" });
});

$(window).on('beforeunload', function () {
    $(window).scrollTop(0);
});

$(window).load(function () {

    $(".loader").fadeOut()

    gsap.from(".main_menu_logo1,.main_menu_logo2,.main_menu_item1,.main_menu_item2", { y: -20, opacity: 0, delay: 1.5, duration: 0.7, stagger: 0.1, ease: "sine.inOut" });
    gsap.from(".main_menu_burger", { y: -20, opacity: 0, delay: 1.9, duration: 0.7, ease: "sine.inOut" });
    gsap.from(".banner_container", { y: -20, opacity: 0, delay: 1, duration: 0.5, ease: "sine.inOut" });
    gsap.from(".main_menu_line", { opacity: 0, delay: 2.7, duration: 0.7, ease: "sine.inOut" });
    gsap.from(".socials1", { x: -50, delay: 1.5, duration: 0.5, ease: "sine.inOut" });



    ////////////////////////////////////////////////////////////////////TIPPY

    tippy('.si1a', { content: "Ocultar/Mostrar panel", placement: 'right', followCursor: "vertical" });
    tippy('.si2a', { content: "Ir arriba", placement: 'right', followCursor: "vertical" });
    tippy('.si3a', { content: "Escríbenos en WhatsApp", placement: 'right', followCursor: "vertical" });
    tippy('.si4a', { content: "Facebook", placement: 'right', followCursor: "vertical" });
    tippy('.si5a', { content: "Instagram", placement: 'right', followCursor: "vertical" });

    // tippy('.si1b', { content: "Ocultar/Mostrar panel", placement: 'top', followCursor: "horizontal" });
    // tippy('.si2b', { content: "Ir arriba", placement: 'top', followCursor: "horizontal" });
    // tippy('.si3b', { content: "Escríbenos en WhatsApp", placement: 'top', followCursor: "horizontal" });
    // tippy('.si4b', { content: "Facebook", placement: 'top', followCursor: "horizontal" });
    // tippy('.si5b', { content: "Instagram", placement: 'top', followCursor: "horizontal" });


    $(".si1a").on('click', firstClick2)
    function firstClick2() {
        $('.si1a').html('▜');
        gsap.to(".si1a", { scale: 0.5, x: -15, duration: 0.2, ease: "sine.inOut" });
        gsap.to(".si2a,.si3a,.si4a,.si5a", { x: -50, duration: 0.2, stagger: 0.1, ease: "sine.inOut" });
        $(".si1a").off('click').on('click', secondClick2)
    }
    function secondClick2() {
        $('.si1a').html('▛');
        gsap.to(".si1a", { scale: 1, x: 0, duration: 0.2, ease: "sine.inOut" });
        gsap.to(".si2a,.si3a,.si4a,.si5a", { x: 0, duration: 0.2, stagger: 0.1, ease: "sine.inOut" });
        $(".si1a").off('click').on('click', firstClick2)
    }

    $(".si2a").click(function () { gsap.to(window, 1, { scrollTo: { y: 0 } }); })


    $(".si1b").on('click', firstClick3)
    function firstClick3() {
        $('.si1b').html('▜');
        gsap.to(".si1b", { scale: 0.5, y: 15, duration: 0.2, ease: "sine.inOut" });
        gsap.to(".si2b,.si3b,.si4b,.si5b", { y: 50, duration: 0.2, stagger: 0.1, ease: "sine.inOut" });
        $(".si1b").off('click').on('click', secondClick3)
    }
    function secondClick3() {
        $('.si1b').html('▛');
        gsap.to(".si1b", { scale: 1, y: 0, duration: 0.2, ease: "sine.inOut" });
        gsap.to(".si2b,.si3b,.si4b,.si5b", { y: 0, duration: 0.2, stagger: 0.1, ease: "sine.inOut" });
        $(".si1b").off('click').on('click', firstClick3)
    }

    $(".si2b").click(function () { gsap.to(window, 1, { scrollTo: { y: 0 } }); })



    ////////////////////////////////////////////////////////////////////SCROLLTRIGGER MAIN MENU

    gsap.to(".main_menu_aux", { y: -100, duration: 0 });
    gsap.timeline({
        scrollTrigger: {
            trigger: ".banner_container",
            start: "10%",
            end: "40%",
            scrub: true,
        }
    }).to(".main_menu_aux", { y: 0, duration: 1, ease: "sine.inOut" });



    gsap.to(".main_menu_sub1b", { opacity: 0, duration: 0 });
    gsap.timeline({
        scrollTrigger: {
            trigger: ".banner_container",
            start: "10%",
            end: "70%",
            scrub: true,
        }
    }).to(".main_menu_sub1b", { opacity: 1, duration: 1, ease: "sine.inOut" });



    gsap.to(".main_menu_sub2b", { opacity: 0, duration: 0 });
    gsap.timeline({
        scrollTrigger: {
            trigger: ".banner_container",
            start: "10%",
            end: "70%",
            scrub: true,
        }
    }).to(".main_menu_sub2b", { opacity: 1, duration: 1, ease: "sine.inOut" });



    gsap.to(".main_menu_responsive", { "background": "#FFF", duration: 0 });
    gsap.timeline({
        scrollTrigger: {
            trigger: ".banner_container",
            start: "10%",
            end: "70%",
            scrub: true,
        }
    }).to(".main_menu_responsive", { "background": "#e1f0ff", duration: 1, ease: "sine.inOut" });







    ////////////////////////////////////////////////////////////////////COLOR AND LINE MAIN MENU
    gsap.to('.main_menu_line', { x: 20, "width": "90px", duration: 0 });

    $(".ib1").hover(
        function () {
            gsap.to(".mi1,.mi4", { "color": "#1D8CFF", duration: 0.2, ease: "sine.inOut" });
            gsap.to('.main_menu_line', { x: -365, "width": "50px", duration: 0.5, ease: "sine.inOut" });
        }, function () {
            gsap.to(".mi1", { "color": "#FFF", duration: 0.2, ease: "sine.inOut" });
            gsap.to(".mi4", { "color": "#80a0c1", duration: 0.2, ease: "sine.inOut" });
            gsap.to('.main_menu_line', { x: 20, "width": "90px", duration: 0.5, ease: "sine.inOut" });
        }
    );

    $(".ib2").hover(
        function () {
            gsap.to(".mi2,.mi5", { "color": "#1D8CFF", duration: 0.2, ease: "sine.inOut" });
            gsap.to('.main_menu_line', { x: -220, "width": "100px", duration: 0.5, ease: "sine.inOut" });
        }, function () {
            gsap.to(".mi2", { "color": "#FFF", duration: 0.2, ease: "sine.inOut" });
            gsap.to(".mi5", { "color": "#80a0c1", duration: 0.2, ease: "sine.inOut" });
            gsap.to('.main_menu_line', { x: 20, "width": "90px", duration: 0.5, ease: "sine.inOut" });
        }
    );

    $(".ib3").hover(
        function () {
            gsap.to(".mi3,.mi6", { "color": "#1D8CFF", duration: 0.2, ease: "sine.inOut" });
            gsap.to('.main_menu_line', { x: -105, "width": "90px", duration: 0.5, ease: "sine.inOut" });
        }, function () {
            gsap.to(".mi3", { "color": "#FFF", duration: 0.2, ease: "sine.inOut" });
            gsap.to(".mi6", { "color": "#80a0c1", duration: 0.2, ease: "sine.inOut" });
            gsap.to('.main_menu_line', { x: 20, "width": "90px", duration: 0.5, ease: "sine.inOut" });
        }
    );


    ////////////////////////////////////////////////////////////////////BURGER MENU
    gsap.to(".main_menu_burger_line", { width: "40%", duration: 0 });

    $(".main_menu_burger,.main_menu_burger2").hover(
        function () {
            gsap.to('.main_menu_burger_line', { width: "60%", duration: 0.3, ease: "sine.inOut" });
        }, function () {
            gsap.to('.main_menu_burger_line', { width: "40%", duration: 0.3, ease: "sine.inOut" });
        }
    );


    gsap.to(".main_menu_responsive", { x: 300, duration: 0 });
    gsap.to("#smooth-wrapper", { x: 0, duration: 0 });
    gsap.to(".main_menu_responsive_item", { x: 300, duration: 0 });

    $(".main_menu_burger").on('click', firstClick)
    function firstClick() {
        gsap.to(".bl1", { rotate: "45deg", y: 8, duration: 0.2, ease: "sine.inOut" });
        gsap.to(".bl2", { opacity: 0, duration: 0.2, ease: "sine.inOut" });
        gsap.to(".bl3", { rotate: "-45deg", y: -8, duration: 0.2, ease: "sine.inOut" });
        gsap.to("#smooth-wrapper", { x: -300, duration: 0.5, ease: "sine.inOut" });
        gsap.to(".main_menu_responsive", { x: 0, duration: 0.5, ease: "sine.inOut" });
        gsap.to(".main_menu_responsive_item", { x: 0, duration: 0.5, stagger: 0.05, ease: "sine.inOut" });
        $(".main_menu_burger").off('click').on('click', secondClick)
    }
    function secondClick() {
        gsap.to(".bl1", { rotate: "0deg", y: 0, duration: 0.2, ease: "sine.inOut" });
        gsap.to(".bl2", { opacity: 1, duration: 0.2, ease: "sine.inOut" });
        gsap.to(".bl3", { rotate: "0deg", y: 0, duration: 0.2, ease: "sine.inOut" });
        gsap.to("#smooth-wrapper", { x: 0, duration: 0.5, ease: "sine.inOut" });
        gsap.to(".main_menu_responsive", { x: 300, duration: 0.5, ease: "sine.inOut" });
        gsap.to(".main_menu_responsive_item", { x: 300, duration: 0.5, stagger: 0.05, ease: "sine.inOut" });
        $(".main_menu_burger").off('click').on('click', firstClick)
    }








    ////////////////////////////////////////////////////////////////////NUESTROS

    gsap.to(".onda", { x: "-50%", duration: 10, repeat: -1, ease: "linear" })


    $(".nuestros_productos").hover(
        function () {
            gsap.to($(this).find('.nuestros_productos_icon'), { scale: 1.1, duration: 0.5, ease: "sine.inOut" });
            gsap.to($(this).find('.nuestros_productos_img'), { scale: 1.1, duration: 0.3, ease: "sine.inOut" });
            gsap.to($(this).find('.nuestros_productos_circle1'), { scale: 1.2, opacity: 0, duration: 0.8, ease: "sine.inOut" });
        }, function () {
            gsap.to($(this).find('.nuestros_productos_icon'), { scale: 1, duration: 0.5, ease: "sine.inOut" });
            gsap.to($(this).find('.nuestros_productos_img'), { scale: 1, duration: 0.3, ease: "sine.inOut" });
            gsap.to($(this).find('.nuestros_productos_circle1'), { scale: 1, opacity: 1, duration: 0.8, ease: "sine.inOut" });
        }
    );


    gsap.to(".nuestros_productos", { y: 300, opacity: 0, duration: 0 });
    gsap.to(".nuestros_productos", { y: 0, opacity: 1, delay: 1.5, duration: 0.5, stagger: 0.1, ease: "sine.inOut" })









    ////////////////////////////////////////////////////////////////////UBICANOS


    gsap.to(".ubicanos_title", { x: 300, opacity: 0, duration: 0 });
    gsap.to(".ubicanos_subtitle", { x: -300, opacity: 0, duration: 0 });
    gsap.to(".ubicanos_button", { y: 300, opacity: 0, duration: 0 });
    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".ubicanos",
            start: "-180%",
            end: "-40%",
            toggleActions: "restart none none none",
            onLeaveBack: self => self.disable()
        }
    })

    tl2.to(".ubicanos_title", { x: 0, opacity: 1, duration: 1, ease: "sine.inOut" })
    tl2.to(".ubicanos_subtitle", { x: 0, opacity: 1, duration: 1, ease: "sine.inOut" }, "=-1")
    tl2.to(".ubicanos_button", { y: 0, opacity: 1, duration: 1, ease: "sine.inOut" }, "=-1")







    ////////////////////////////////////////////////////////////////////FOOTER


    $(".footer_item").hover(
        function () {
            gsap.to(this, { x: 5, duration: 0.3, ease: "sine.inOut" });
        }, function () {
            gsap.to(this, { x: 0, duration: 0.3, ease: "sine.inOut" });
        }
    );






    gsap.to(".footer_title", { y: -20, opacity: 0, duration: 0 });
    gsap.timeline({
        scrollTrigger: {
            trigger: ".footer",
            start: "-200%",
            end: "-100%",
            scrub: true,
        }
    }).to(".footer_title", { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "sine.inOut" });

    gsap.to(".footer_item", { y: -20, opacity: 0, duration: 0 });
    gsap.timeline({
        scrollTrigger: {
            trigger: ".footer",
            start: "-200%",
            end: "-100%",
            scrub: true,
        }
    }).to(".footer_item", { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "sine.inOut" });


    $(".footer_up").click(function () { gsap.to(window, 1, { scrollTo: { y: 0 } }); })





    ////////////////////////////////////////////////////////////////////PRODUCTOS

    gsap.to(".detail_main_title", { y: -100, opacity: 0, duration: 0 });
    let tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".detail_main_title",
            start: "-500%",
            end: "-300%",
            toggleActions: "restart none none none",
            onLeaveBack: self => self.disable()
        }
    })
    tl3.to(".detail_main_title", { y: 0, opacity: 1, duration: 0.5, ease: "sine.inOut" })


    gsap.to(".detail_sub1", { x: -800, opacity: 0, duration: 0 });
    let tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".detail_container",
            start: "-200%",
            end: "0%",
            toggleActions: "restart none none none",
            onLeaveBack: self => self.disable()
        }
    })
    tl4.to(".detail_sub1", { x: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "sine.inOut" })

    gsap.to(".detail_sub2", { x: 800, opacity: 0, duration: 0 });
    let tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: ".detail_container",
            start: "-200%",
            end: "0%",
            toggleActions: "restart none none none",
            onLeaveBack: self => self.disable()
        }
    })
    tl5.to(".detail_sub2", { x: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "sine.inOut" })




    $(".p1").click(function () { gsap.to(window, 1, { scrollTo: { y: ".pp1", offsetY: 150 } }); })
    $(".p2").click(function () { gsap.to(window, 1, { scrollTo: { y: ".pp2", offsetY: 150 } }); })
    $(".p3").click(function () { gsap.to(window, 1, { scrollTo: { y: ".pp3", offsetY: 150 } }); })




    gsap.from(".whats", { y: 150, delay: 1.6, duration: 0.5, ease: "sine.inOut" });

    $(".whats").hover(
        function () {
            gsap.to(".whats", { scale: 1.1, duration: 0.4, ease: "sine.inOut" });
            gsap.to(".boton_whatsapp_icon", { scale: 1.3, duration: 0.2, ease: "sine.inOut" });
        }, function () {
            gsap.to(".whats", { scale: 1, duration: 0.4, ease: "sine.inOut" });
            gsap.to(".boton_whatsapp_icon", { scale: 1, duration: 0.2, ease: "sine.inOut" });
        }
    );

    $(".close_overlay").hover(
        function () {
            gsap.to(".close_overlay", { rotate: 180, duration: 1, ease: "elastic(1,0.8)" });
            gsap.to(".close_line1", { "width": "100%", duration: 0.4, ease: "sine.inOut" });
            gsap.to(".close_line2", { "width": "100%", duration: 0.4, ease: "sine.inOut" });
        }, function () {
            gsap.to(".close_overlay", { rotate: 0, duration: 1, ease: "elastic(1,0.8)" });
            gsap.to(".close_line1", { "width": "80%", duration: 0.4, ease: "sine.inOut" });
            gsap.to(".close_line2", { "width": "80%", duration: 0.4, ease: "sine.inOut" });
        }
    );

    $(".whats_link").hover(
        function () {
            gsap.to($(this), { "background": "#00ff4c", duration: 0.2, ease: "sine.inOut" });
            gsap.to($(this).find('.whats_icon'), { scale: 1.2, duration: 0.2, ease: "sine.inOut" });
            gsap.to($(this).find('.whats_text'), { x: 10, duration: 0.3, ease: "sine.inOut" });
        }, function () {
            gsap.to($(this), { "background": "#00d03f", duration: 0.2, ease: "sine.inOut" });
            gsap.to($(this).find('.whats_icon'), { scale: 1, duration: 0.2, ease: "sine.inOut" });
            gsap.to($(this).find('.whats_text'), { x: 0, duration: 0.3, ease: "sine.inOut" });
        }
    );

    $(".close_overlay").click(function () {
        $(".overlay").fadeOut()
    })

    $(".whats").click(function () {
        $(".overlay").fadeIn()
        $(".overlay").css("display","flex")
        gsap.from(".whats_link", { x: -50, opacity:0,stagger:0.2, duration: 0.5, ease: "sine.inOut" });
        gsap.from(".close_overlay", { x: 100, opacity:0, duration: 0.5, ease: "sine.inOut" });
    })










    ////////////////////////////////////////////////////////////////////SMOOTHER
    let smoother = ScrollSmoother.create({
        smooth: 1.8,
        normalizeScroll: true,
        effects: true
    });

    ////////////////////////////////////////////////////////////////////CAROUSEL:

    $(".owl_right").click(function () {
        $(".owl1").trigger('next.owl.carousel');
    })

    $(".owl_left").click(function () {
        $(".owl1").trigger('prev.owl.carousel');
    })

    $('.owl1').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: false,
        mouseDrag: true,
        smartSpeed: 1000,
        responsiveClass: true,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 },
            1200: { items: 4 }
        }
    })






});