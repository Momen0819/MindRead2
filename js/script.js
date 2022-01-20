/*global $,owl,smoothScroll,alert,Placeholdem,WOW*/
$(document).ready(function () {
    "use strict";

    $('[data-toggle="tooltip"]').tooltip({
        trigger: 'hover',
        placement: 'top',
        animate: true,
        delay: 50,
        container: 'body'
    });

    $('select').select2();

    $("#dropdown2, #dropdown3").mCustomScrollbar({
        theme: "dark-3",
        scrollInertia: 100
    });

    $('.dropdown-content').on("click", function (e) {
        e.stopPropagation();
    });

    //toggle label
    $('#check input').change(function () {
        if ($(this).is(':checked')) {
            $('.contact-form').fadeOut(1500);
        } else {
            $('.contact-form').fadeIn(1500);
        }
    });


    $(".course-slider").owlCarousel({
        transitionStyle: "fadeUp",
        navigation: true,
        slideSpeed: 500,
        paginationSpeed: 400,
        singleItem: true,
        responsive: true,
        autoPlay: 5000,
        pagination: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        stopOnHover: true
    });

    /* ---------------------------------------------
     Scrool To Top Button Function
    --------------------------------------------- */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $(".toTop").css("right", "20px");
        } else {
            $(".toTop").css("right", "-60px");
        }
    });

    $(".toTop").on("click", function () {
        $("html,body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });


    /* ---------------------------------------------
     Add Sticky Header
    --------------------------------------------- */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 52) {
            $('.header-content').addClass('sticky');
            $('.has-search').css('display', 'inline-block');
        } else {
            $('.header-content').removeClass('sticky');
            $('.has-search').css('display', 'none');
            $('.con1 .fixed-search').slideUp();
        }
    });


    /* ---------------------------------------------
     Loader Screen
    --------------------------------------------- */
    $(window).load(function () {
        $("body").css('overflow-y', 'auto');
        $('.page-loader').fadeOut(1000);
    });


    //for smoth scroll
    smoothScroll.init({
        speed: 800,
        updateURL: false,
        offset: 85
    });

    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true,
        offset: 100,
        scrollContainer: null // optional scroll container selector, otherwise use window
    });
    wow.init();


    $('.open-fix-search').on('click', function () {
        $('.fixed-search').stop();
        $('.fixed-search').slideToggle();
    });

    $('.open-mob-nav').on('click', function () {
        $('.main-head .header-content .main-nav').stop();
        $('.main-head .header-content .main-nav').slideToggle();
    });

    $('input.autocomplete').autocomplete({
        data: {
            "كورس برمجة": null,
            "امير ناجح": null,
            "بحث تلقائي": 'http://placehold.it/250x250'
        },
        limit: 20 // The max amount of results that can be shown at once. Default: Infinity.
    });

    $(".ads-slider").owlCarousel({
        navigation: true,
        slideSpeed: 200,
        responsive: true,
        autoPlay: 7000,
        pagination: false,
        items: 3,
        stopOnHover: true,
        mouseDrag: true,
        navigationText: ["<span class='testi-left'><i class='fa fa-angle-left'></i></span>", "<span class='testi-right'><i class='fa fa-angle-right'></i></span>"],
        itemsCustom: [
			[0, 1],
			[450, 1],
			[600, 1],
			[700, 2],
			[1000, 2],
			[1200, 3],
			[1400, 3],
			[1600, 3]
        ]
    });

    $(".team-slider, .testo-slider").owlCarousel({
        navigation: false,
        slideSpeed: 200,
        responsive: true,
        autoPlay: 5000,
        pagination: false,
        items: 3,
        stopOnHover: true,
        mouseDrag: true,
        itemsCustom: [
			[0, 1],
			[450, 1],
			[600, 1],
			[700, 2],
			[1000, 2],
			[1200, 3],
			[1400, 3],
			[1600, 3]
        ]
    });

    $(".ordinary-slider").owlCarousel({
        navigation: true,
        slideSpeed: 200,
        responsive: true,
        autoPlay: 5000,
        pagination: false,
        items: 2,
        stopOnHover: true,
        mouseDrag: true,
        navigationText: ["<span class='ordi-left'><i class='fa fa-angle-left'></i></span>", "<span class='ordi-right'><i class='fa fa-angle-right'></i></span>"],
        itemsCustom: [
			[0, 1],
			[450, 1],
			[600, 1],
			[700, 1],
			[1000, 2],
			[1200, 2],
			[1400, 2],
			[1600, 2]
        ]
    });

    // Item carousel
    $(".clients-slider").owlCarousel({
        autoPlay: 2500,
        stopOnHover: true,
        items: 5,
        mouseDrag: false,
        pagination: false,
        navigation: false,
        itemsCustom: [
			[0, 1],
			[450, 2],
			[600, 2],
			[700, 3],
			[1000, 4],
			[1200, 5],
			[1400, 5],
			[1600, 7]
        ]
    });

    $("#showHide").click(function () {
        if ($("#pass").attr("type") === "password") {
            $("#pass").attr("type", "text");
        } else {
            $("#pass").attr("type", "password");
        }

    });


    $('.open-coup').click(function () {
        $('.coup-form').stop();
        $('.coup-form').slideToggle(function () {
            $('.open-coup').toggleClass('active');
        });
    });

    $("#input-fa").fileinput({
        //        theme: "explorer",
        uploadUrl: "/file-upload-batch/2",
        allowedFileExtensions: ["jpg", "png"]
    });

    $(".list-group, .mbl-messages").mCustomScrollbar({
        theme: "dark-3",
        scrollInertia: 100
    });

    $("#input-folder-5, #input-folder-6").fileinput({
        theme: "explorer",
        uploadUrl: "/file-upload-batch/2"
    });

    //    $('.form-editor').summernote();

    $('.add-multi').click(function () {
        $('.c_multi').stop();
        $('.c_multi').slideToggle();
    });

    $('.add-lessons').click(function () {
        $('.lessons').append('<div class="single-lesson col-xs-12"><button type="button" class="rem-lesson waves-effect"  data-toggle="tooltip" title="حذف الدرس"><i class="fa fa-trash"></i></button><div class="form-group col-md-12 col-xs-12"><div class="input-field m_lesson"><label for="l_name">عنوان الدرس</label><input type="text" class="form-control" id="l_name"></div></div><div class="form-group col-md-12 col-xs-12"><div class="input-field m_lesson"><label for="l_vid">أدخل لينك فيديو الدرس</label><input type="text" class="form-control" id="l_vid"></div></div><div class="form-group l_files col-md-12 col-xs-12"><div class="input-field m_lesson"><label for="input-folder-6">ملفات الدرس</label><input id="input-folder-6" type="file" multiple class="file-loading"></div></div></div>');
    });

    $('.reply_com').click(function () {
        $('.com_input').focus();
    });

    $('.add_com').click(function () {
        $('.new_coment .com-form').stop();
        $('.new_coment .com-form').slideToggle();
    });

});