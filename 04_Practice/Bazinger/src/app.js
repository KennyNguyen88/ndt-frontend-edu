import "./scss/styles.scss";

import "./../node_modules/materialize-css/dist/js/materialize";

//require all images
var req = require.context("./images", true, /\.(png|svg|jpe?g|gif)$/);
req.keys().forEach(function(key){
    req(key);
});

$(document).ready(function(){
    var vpheight = $(window).height();
    $('#slider').slider({full_width: true, height: vpheight});
    $('#testimonial_slider').slider({full_width: true});
    $(".button-collapse").sideNav();
});