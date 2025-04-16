/*
* ----------------------------------------------------------------------------------------
Template Name: Vance
Version : 1.0                                     
* ----------------------------------------------------------------------------------------
*/
(function($) {
    'use strict';

        /*----------------------------------------------------*/
        /* Preloader 
        /*----------------------------------------------------*/

        var prealoaderOption = $(window);
        prealoaderOption.on("load", function() {
            var preloader = jQuery('.spinner');
            var preloaderArea = jQuery('.preloader-area');
            preloader.fadeOut();
            preloaderArea.delay(350).fadeOut('slow');
        });


        /*----------------------------------------------------*/
        /* MainMenu Bg Change 
        /*----------------------------------------------------*/

        var headertopoption = $(window);
        var headTop = $('.header-top-area');

        headertopoption.on('scroll', function() {
            if (headertopoption.scrollTop() > 50) {
                headTop.addClass('menu-strick-bg');
            } else {
                headTop.removeClass('menu-strick-bg');
            }
        });


    jQuery(document).ready(function() {

        /* Menu Controlling */
        $('.nav-toggler, .menu_link').on('click', function() {
            $('#menu').toggleClass('open');
            $('.nav-toggler').toggleClass('on');
        });
        $('.dropdown_toggler').on('click', function() {
            $(this).siblings().toggleClass('d-block');
        });


        /*----------------------------------------------------*/
        /* Smooth Scroll 
		/*----------------------------------------------------*/

        $('a.smoth-scroll').on("click", function(e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });

        /*
         * ----------------------------------------------------------------------------------------
         *  MAGNIFIC POPUP JS
         * ----------------------------------------------------------------------------------------
         */

        $('.video-play').magnificPopup({
            type: 'iframe'
        });

        $('.popup-image').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
		
        /*----------------------------------------------------*/
        /* Scroll spy
		/*----------------------------------------------------*/

        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });
		
		
        /*----------------------------------------------------*/
        /* Testimonial 
		/*----------------------------------------------------*/

        $(".testimonial-list").owlCarousel({
            items: 3,
            autoPlay: true,
            navigation: false,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [980, 2],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            pagination: true,
            autoHeight: true,
        });
		
		
        /*----------------------------------------------------*/
        /* Testimonial 
		/*----------------------------------------------------*/

        $(".team-member-list-carousel").owlCarousel({
            items: 3,
            autoPlay: true,
            navigation: false,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [980, 3],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            pagination: true,
            autoHeight: true,
        });
       
        /*
         * ----------------------------------------------------------------------------------------
         *  PORTFOLIO JS
         * ----------------------------------------------------------------------------------------
         */
        $('#portfolio-grid').imagesLoaded(function () {

            /* Filter menu */
            $('.portfolio-filter').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });

            /* filter menu active class  */
            $('.portfolio-filter button').on('click', function (event) {
                $(this).siblings('.active').removeClass('active');
                $(this).addClass('active');
                event.preventDefault();
            });

            /* Filter active */
            var $grid = $('#portfolio-grid').isotope({
                itemSelector: '.portfolio-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.portfolio-item',
                }
            });

        });
		
		

		
		
        /*----------------------------------------------------*/
        /* CounterUp 
		/*----------------------------------------------------*/

        $(".counter-number").counterUp({
            time: 2000,
            delay: 10
        });

		
        
    });

})(jQuery);