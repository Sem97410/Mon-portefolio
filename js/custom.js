// JavaScript Document

//const { $ } = require("dom7");

//const { $ } = require("dom7");


$(window).load(function () {
    "use strict";
    // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})

$(document).ready(function () {
    "use strict";

    // scroll menu
    var sections = $('.section'),
        nav = $('.navbar-fixed-top,footer'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function () {
        var $el = $(this),
            id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height + 2
        }, 600);

        return false;
    });


    // Menu opacity
    if ($(window).scrollTop() > 80) {
        $(".navbar-fixed-top").addClass("bg-nav");
    } else {
        $(".navbar-fixed-top").removeClass("bg-nav");
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
            $(".navbar-fixed-top").addClass("bg-nav");
        } else {
            $(".navbar-fixed-top").removeClass("bg-nav");
        }
    });



    // Parallax
    var parallax = function () {
        $(window).stellar();
    };

    $(function () {
        parallax();
    });

    // AOS
    AOS.init({
        duration: 1200,
        once: true,
        disable: 'mobile'
    });

    //  isotope
    $('#projects').waitForImages(function () {
        var $container = $('.portfolio_container');
        $container.isotope({
            filter: '*',
        });

        $('.portfolio_filter a').click(function () {
            $('.portfolio_filter .active').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    animationEngine: "jquery"
                }
            });
            return false;
        });

    });

    $('.portfolio_item').click(function() {
        //get id of portfolio item clicked
        var idPortFolioClicked = $(this).attr('id');

        //add custom html content for the specific id

        if(idPortFolioClicked == "demo01"){

            $('#animatedModal .modal-content').html('<div class="container">'+
                '<div class="portfolio-padding">'+
                    '<div class="col-md-8 col-md-offset-2">'+
                        '<h2><a href="http://bushidoramen.re/" target="_blank">Le Bushido Ramen</a></h2>'+
                        '<div class="h-50"></div>'+
                        '<br /> <img src="img/vignette/Site/bushido/vignette_bushido.png" alt="" class="img-responsive" />'+
                        '<br /> <img src="img/vignette/Site/bushido/vignette_bushido2.png" alt="" class="img-responsive" />'+
                        '<br /> <img src="img/vignette/Site/bushido/vignette_bushido3.png" alt="" class="img-responsive" />'+
                        '<br /> </div>'+
                '</div>'+
            '</div>');

            //launch modal
            $("#demo01").animatedModal();

        }else if(idPortFolioClicked == "demo02"){

            $('#animatedModal .modal-content').html('<div class="modal-content">'+
            '<div class="container">'+
                '<div class="portfolio-padding">'+
                    '<div class="col-md-8 col-md-offset-2">'+
                        '<h2><a href="https://hostingmedia.fr/" target="_blank">HostingMedia</a></h2>'+
                        '<div class="h-50"></div>'+
                        '<br /> <img src="img/vignette/Site/hostingmedia/vignette_hostingMedia.png" alt="" class="img-responsive" />'+
                        '<br /> <img src="img/vignette/Site/hostingmedia/vignette_hostingMedia2.png" alt="" class="img-responsive" />'+
                        '<br /> <img src="img/vignette/Site/hostingmedia/vignette_hostingMedia3.png" alt="" class="img-responsive" />'+
                        '<br /> </div>'+
                    '</div>'+
                '</div>'+
            '</div>');

            //launch modal
            $("#demo02").animatedModal();

        }else if(idPortFolioClicked == "demo03"){

            $('#animatedModal .modal-content').html('<div class="modal-content">'+
            '<div class="container">'+
                '<div class="portfolio-padding">'+
                    '<div class="col-md-8 col-md-offset-2">'+
                        '<h2><a href="page_annexe/Jeux/Floppy bird/floppy.html" target="_blank">Testez le en cliquant ici</a></h2>'+
                        '<div class="h-50"></div>'+
                        '<br /> <img src="img/vignette/Jeux/Floppy/vignette_floppy.png" alt="" class="img-responsive" />'+
                        '<br /> <img src="img/vignette/Jeux/Floppy/vignette_floppy2.png" alt="" class="img-responsive" />'+
                        '<br /> </div>'+
                    '</div>'+
                '</div>'+
            '</div>');

           

            //launch modal
            $("#demo03").animatedModal();
            
        }else if(idPortFolioClicked == "demo04"){

            $('#animatedModal .modal-content').html('<div class="modal-content">'+
            '<div class="container">'+
                '<div class="portfolio-padding">'+
                    '<div class="col-md-8 col-md-offset-2">'+
                        '<h2>Grand Etang</a></h2>'+
                        '<div class="h-50"></div>'+
                        '<img src="img/vignette/photo/grand_etang.jpg" alt="Photo de Grand Etang" class="img-responsive" />'+
                    '</div>'+
                '</div>'+
            '</div>');

            //launch modal
            $("#demo04").animatedModal();
            
        }else if(idPortFolioClicked == "demo05"){

            $('#animatedModal .modal-content').html('<div class="modal-content">'+
            '<div class="container">'+
                '<div class="portfolio-padding">'+
                    '<div class="col-md-8 col-md-offset-2">'+
                        '<h2>Grand Etang</a></h2>'+
                        '<div class="h-50"></div>'+
                        '<img src="img/vignette/photo/grand_etang2.jpg" alt="Photo de Grand Etang" class="img-responsive" />'+
                    '</div>'+
                '</div>'+
            '</div>');

            //launch modal
            $("#demo05").animatedModal();
            
        }else if(idPortFolioClicked == "demo06"){

            $('#animatedModal .modal-content').html('<div class="modal-content">'+
            '<div class="container">'+
                '<div class="portfolio-padding">'+
                    '<div class="col-md-8 col-md-offset-2">'+
                        '<h2>Grand Etang</a></h2>'+
                        '<div class="h-50"></div>'+
                        '<img src="img/vignette/photo/grand_etang3.jpg" alt="Photo de Grand Etang" class="img-responsive" />'+
                    '</div>'+
                '</div>'+
            '</div>');

            //launch modal
            $("#demo06").animatedModal();
            
        }else if(idPortFolioClicked == "demo07"){

            $('#animatedModal .modal-content').html('<div class="modal-content">'+
            '<div class="container">'+
                '<div class="portfolio-padding">'+
                    '<div class="col-md-8 col-md-offset-2">'+
                        '<h2>La plaine des sables</a></h2>'+
                        '<div class="h-50"></div>'+
                        '<img src="img/vignette/photo/plaine_sables.jpg" alt="Photo de la plaine des sables" class="img-responsive" />'+
                    '</div>'+
                '</div>'+
            '</div>');

            //launch modal
            $("#demo07").animatedModal();
            
        }else if(idPortFolioClicked == "demo08"){

            $('#animatedModal .modal-content').html('<div class="modal-content">'+
            '<div class="container">'+
                '<div class="portfolio-padding">'+
                    '<div class="col-md-8 col-md-offset-2">'+
                        '<h2>La plaine des sables</a></h2>'+
                        '<div class="h-50"></div>'+
                        '<img src="img/vignette/photo/plaine_sables2.jpg" alt="Photo de la plaine des sables" class="img-responsive" />'+
                    '</div>'+
                '</div>'+
            '</div>');

            //launch modal
            $("#demo08").animatedModal();
            
        }else if(idPortFolioClicked == "demo09"){

            $('#animatedModal .modal-content').html('<div class="modal-content">'+
            '<div class="container">'+
                '<div class="portfolio-padding">'+
                    '<div class="col-md-8 col-md-offset-2">'+
                        '<h2>La plaine de sables</a></h2>'+
                        '<div class="h-50"></div>'+
                        '<img src="img/vignette/photo/plaine_sables3.jpg" alt="Photo de Grand Etang" class="img-responsive" />'+
                    '</div>'+
                '</div>'+
            '</div>');

            //launch modal
            $("#demo09").animatedModal();
            
        }else if(idPortFolioClicked == "demo10"){

            $('#animatedModal .modal-content').html('<div class="modal-content">'+
            '<div class="container">'+
                '<div class="portfolio-padding">'+
                    '<div class="col-md-8 col-md-offset-2">'+
                        '<h2>Premier essai d\' un paysage</a></h2>'+
                        '<div class="h-50"></div>'+
                        '<img src="img/vignette/Dessin/Paysage.png" alt="Dessin paysage" class="img-responsive" />'+
                    '</div>'+
                '</div>'+
            '</div>');

            //launch modal
            $("#demo10").animatedModal();
            
        }else if(idPortFolioClicked == "demo11"){

            $('#animatedModal .modal-content').html('<div class="modal-content">'+
            '<div class="container">'+
                '<div class="portfolio-padding">'+
                    '<div class="col-md-8 col-md-offset-2">'+
                        '<h2>Entrainement sur les formes basique</a></h2>'+
                        '<div class="h-50"></div>'+
                        '<img src="img/vignette/Dessin/formes.jpg" alt="Dessin formes" class="img-responsive" />'+
                    '</div>'+
                '</div>'+
            '</div>');


            //launch modal
            $("#demo11").animatedModal();
            
        }else if(idPortFolioClicked == "demo12"){

            $('#animatedModal .modal-content').html('<div class="modal-content">'+
            '<div class="container">'+
                '<div class="portfolio-padding">'+
                    '<div class="col-md-8 col-md-offset-2">'+
                        '<h2>Entrainement sur les formes basique</a></h2>'+
                        '<div class="h-50"></div>'+
                        '<img src="img/vignette/Dessin/perspective_ombre.jpg" alt="Dessin perspective et ombre" class="img-responsive" />'+
                    '</div>'+
                '</div>'+
            '</div>');


            //launch modal
            $("#demo12").animatedModal();
            
        }
       

        console.log(idPortFolioClicked);

      });

    //animatedModal
    //$("#demo01,#demo02,#demo03,#demo04,#demo05,#demo06,#demo07,#demo08,#demo09").animatedModal();
    // Contact Form 	

    // validate contact form
    $(function () {
        $('#contact-form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true
                },
                phone: {
                    required: false
                },
                message: {
                    required: true
                }

            },
            messages: {
                name: {
                    required: "This field is required",
                    minlength: "your name must consist of at least 2 characters"
                },
                email: {
                    required: "This field is required"
                },
                message: {
                    required: "This field is required"
                }
            },
            submitHandler: function (form) {
                $(form).ajaxSubmit({
                    type: "POST",
                    data: $(form).serialize(),
                    url: "process.php",
                    success: function () {
                        $('#contact :input').attr('disabled', 'disabled');
                        $('#contact').fadeTo("slow", 1, function () {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor', 'default');
                            $('#success').fadeIn();
                        });
                    },
                    error: function () {
                        $('#contact').fadeTo("slow", 1, function () {
                            $('#error').fadeIn();
                        });
                    }
                });
            }
        });

    });
});