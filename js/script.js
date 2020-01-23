
    $('.mobile__btn').on('click', function(){
        $(this).toggleClass('mobile__btn_active');
        $('.nav-list').toggleClass('menu__active');
    });
    $('.nav-list li').on('click',function(){
        $('.nav-list').removeClass('menu__active');
        $('.mobile__btn').removeClass('mobile__btn_active');
    })
    // $('.lang-items a').on('click', function(e){
    //     e.preventDefault();
    // })
    $("#news-slider").owlCarousel({
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [1000, 2],
        itemsMobile: [599, 1],
        pagination: false,
        autoplay: true,
        loop: true,
        responsive: {
            1024: {
                items: 3
            },
            768: {
                items: 2
            },
            596: {
                items: 2
            },
            0: {
                items: 1
            }
        }
    });
    $(".rooms__slider").owlCarousel({
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [1000, 2],
        itemsMobile: [599, 1],
        pagination: false,
        autoplay: true,
        loop: true,
        responsive: {
            1024: {
                items: 4
            },
            768: {
                items: 3
            },
            596: {
                items: 2
            },
            0: {
                items: 1
            }
        }
    });
    $(window).scroll(function () {
        let sc = $(window).scrollTop();
        if (sc > 100) {
            $(".nav").addClass("sticky")
            $(".toggle-wrap").addClass("sticky_2");
            $(".menu").addClass("sticky_2");
            $(".contact-info").addClass("none");
            $(".logo, .bars, .logo-img,.logo-text,.Vertical,.social-info").addClass("none");
    
        } else {
            $(".nav").removeClass("sticky");
            $(".toggle-wrap").removeClass("sticky_2");
            $(".menu").removeClass("sticky_2");
            $(".contact-info").removeClass("none");
            $(".logo, .bars, .logo-img,.logo-text,.Vertical,.social-info").removeClass("none");
        }
    });
    let language = {
        RuTr: {
            Main:"Главная",
            Main2:"О нас",
            Main3:"Комнаты",
            Main4:"Сервис",
            Main5:"Отзывы",
            Main6:"Забронировать",
            Consult:"Консультация",
            type1:"Введите ваше имя",
            type2:"Введите ваш номер телефона",
            type3:"Введите вашу почту",
        },
        EngTr: {
            Main:"home",
            Main2:"about",
            Main3:"rooms",
            Main4:"service",
            Main5:"testimonials",
            Main6:"booking",
            Consult:"Consultation",
            type1:"Type your name",
            type2:"Type your phone number",
            type3:"Type your email",
            Send:"Send"
        }
    };

    if (window.location.hash) {
        if (window.location.hash === "#Eng"){
            nav.textContent = language.EngTr.Main;
            nav2.textContent = language.EngTr.Main2;
            nav3.textContent = language.EngTr.Main3;
            nav4.textContent = language.EngTr.Main4;
            nav5.textContent = language.EngTr.Main5;
            nav6.textContent = language.EngTr.Main6;
            Consult.textContent = language.EngTr.Consult;
            type1.placeholder = language.EngTr.type1;
            type2.placeholder = language.EngTr.type2;
            type3.placeholder = language.EngTr.type3;
            send.textContent = language.EngTr.Send;
        }
    };
    let dataReload = document.querySelectorAll("[data-reload]");
    for (let i = 0; i <= dataReload.length; i++) {
        dataReload[i].onclick = function () {
            location.reload(true);
        }
    }
