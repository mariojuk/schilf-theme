require([
    'jquery',
    'jquery/ui',
    'accordion',
], function ($) {
    'use strict';

    $("#element").accordion({
        "openedState": "active",
        "collapsible": true,
        "active": 0,
        "animate": 500
    });
    $(document).ready(function () {
        if ($(window).width() > 767) {
            $(".nav-1, #nav-1").on('click mouseover', function () {
                $('.nav-1 .level-top').addClass('active-menu');
                $('.page-wrapper').addClass('overlay');
                $("#nav-1").show();
            }).mouseleave(function () {
                $('.nav-1 .level-top').removeClass('active-menu');
                $('.page-wrapper').removeClass('overlay');
                $("#nav-1").hide();
            });
            $(".nav-2, #nav-2").on('click mouseover', function () {
                $('.nav-2 .level-top').addClass('active-menu');
                $('.page-wrapper').addClass('overlay');
                $("#nav-2").show();
            }).mouseleave(function () {
                $('.nav-2 .level-top').removeClass('active-menu');
                $('.page-wrapper').removeClass('overlay');
                $("#nav-2").hide();
            });
            $(".nav-3, #nav-3").on('click mouseover', function () {
                $('.nav-3 .level-top').addClass('active-menu');
                $('.page-wrapper').addClass('overlay');
                $("#nav-3").show();
            }).mouseleave(function () {
                $('.nav-3 .level-top').removeClass('active-menu');
                $('.page-wrapper').removeClass('overlay');
                $("#nav-3").hide();
            });
        } else {
            $(".level0-btn-1").insertAfter(".nav-1");
            $("#nav-1").insertAfter(".level0-btn-1");
            $(".level0-btn-2").insertAfter(".nav-2");
            $("#nav-2").insertAfter(".level0-btn-2");
            $(".level0-btn-3").insertAfter(".nav-3");
            $("#nav-3").insertAfter(".level0-btn-3");
            $(".level0-btn").click(function () {
                $(this).next().slideToggle();
            })
        }

        $(function(){

            const $win = $(window);
            const $toggle = $(".header.links");
            const $dropdown = $(".dropdown-links");

            $win.on("click.Bst", function(event){
                if (
                    $toggle.has(event.target).length == 0
                    &&
                    !$toggle.is(event.target)
                ){
                    $dropdown.hide();
                } else {
                    $dropdown.toggle();
                }
            });

        });

        $('.header.links').click(function () {
            $(this).each( function() {
                $(this).find('li:first a').attr('href', '#');
            });
        });

        $('.dropdown-links').on('focusout', function () {
            $(this).hide();
        });

        let getUrl = window.location;
        let baseurl =  getUrl.origin;
        let count = $(".dropdown-links li").length;
        let accountLink = "<li><a href='" + baseurl + "/customer/account/'>My Account</a></li>";
        if (count <= 2) {
            $(".dropdown-links").prepend(accountLink);
        }

    });

    $(document).ready(function() {
        $("#tabs_content .tab_content").hide();
        $(".tabs .tab:first").attr("id","current");
        $("#tabs_content > .tab_content:first").fadeIn();
        $('.tabs .tab a').click(function(e) {
            e.preventDefault();
            if ($(this).attr("id") == "current"){
                return
            }
            else{
                $("#tabs_content .tab_content").hide();
                $(".tabs .tab").attr("id","");
                $(this).parent().attr("id","current");
                $( $(this).attr('href')).fadeIn();
            }
        });
    });

});