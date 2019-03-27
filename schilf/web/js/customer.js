require([
    'jquery',
    'jquery/ui',
], function ($) {
    'use strict';
    $( "#tabs" ).tabs();

    $(document).ready(function () {
        $("#close-add").on("click",function(){
            $("#add-contact-modal").hide();
        });

        $("#new-contact").on("click",function(e){
            $("#add-contact-modal").show();
            e.stopPropagation();
        });

        $("#add-contact-modal").click(function(e){
            e.stopPropagation();
        });

        $(document).click(function(){
            $("#add-contact-modal").hide();
        });

    });
});