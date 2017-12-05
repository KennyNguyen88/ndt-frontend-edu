import "./scss/styles.scss";
import "./../node_modules/materialize-css/dist/js/materialize";
//require all images
var req = require.context("./images", true, /\.(png|svg|jpe?g|gif)$/);
req.keys().forEach(function(key){
    req(key);
});

$(document).ready(function(){
    $('#front_slider').slider({
        height: $(window).height()
    });

    $('select').material_select();
    $('.datepicker').pickadate();
    $('#main_slider').slider();
    //detail page
    if ($('.slider').height() <= 0)
    {
        $('.nav-wrapper').removeClass('top');
        $('.nav-wrapper').addClass('no-top');
    }
    //
    $(window).bind('scroll', function () {
            if ($(window).scrollTop() >= $('.slider').height()) {
                $('.nav-wrapper').removeClass('top');
                $('.nav-wrapper').addClass('no-top');

            } else {
                $('.nav-wrapper').removeClass('no-top');
                $('.nav-wrapper').addClass('top');
            }


    });

});