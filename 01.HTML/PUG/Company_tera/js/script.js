function sliderTab(slider){
    slider.owlCarousel({
        items: 1,
        loop:true,
        dots: false,
        margin: 20,
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
}
function triggerSliderNext(slider, tg){
    tg.click(function() {
        slider.trigger('next.owl.carousel');
    });
}
function triggerSliderPrev(slider, tg){
    tg.click(function() {
        slider.trigger('prev.owl.carousel',[300]);
    });
}
$(window).on('load', function() {
    //Preloader
    $('#status').fadeOut();
    $('#preloader').delay(250).fadeOut('slow');
    $('body').delay(250).css({'overflow':'visible'});
    $('#slider-wrapper').attr("style", "top:" + ($('.phone-img').position().top + $('.phone-img').height()+ 10) + "px");
});
var resizeTimer;

$(window).on('resize', function(e) {

    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {

        $('#slider-wrapper').attr("style", "top:" + ($('.phone-img').position().top + $('.phone-img').height()) + "px");

    }, 250);

});

$(document).ready(function() {
    /*Button Demo*/
    var sticky = new Waypoint.Sticky({
        element: $('.demo-ctrl')[0]
    });
    $(".demo-ctrl").click(function() {
        $('html, body').animate({
            scrollTop: ($("#tera-demo").offset().top - 50)
        }, 1000);
    });
    /*Carousel Banner*/
    $('.fadeOut').owlCarousel({
        items: 1,
        animateOut: 'fadeOut',
        loop: true,
        autoplay: true,
        dots: false,
        mouseDrag: false,
        touchDrag: false,
        smartSpeed: 500
    });
    /*Modal choose Theme*/
    $('.tabs').tabslet({
        mouseevent: 'click',
        attribute: 'href'
    });
    //Du lich
    var sliderDuLich = $('#slider-du-lich');
    sliderTab(sliderDuLich);
    triggerSliderNext(sliderDuLich,$('.slider-du-lich-next'));
    triggerSliderPrev(sliderDuLich,$('.slider-du-lich-prev'));
    //Nha hang
    var sliderNhaHang = $('#slider-nha-hang');
    sliderTab(sliderNhaHang);
    triggerSliderNext(sliderNhaHang,$('#slider-nha-hang-next'));
    triggerSliderPrev(sliderNhaHang,$('#slider-nha-hang-prev'));
    //Thoi trang
    var sliderThoiTrang = $('#slider-thoi-trang');
    sliderTab(sliderThoiTrang);
    triggerSliderNext(sliderThoiTrang,$('#slider-thoi-trang-next'));
    triggerSliderPrev(sliderThoiTrang,$('#slider-thoi-trang-prev'));
    //Cong ty
    var sliderCongTy = $('#slider-cong-ty');
    sliderTab(sliderCongTy);
    triggerSliderNext(sliderCongTy,$('#slider-cong-ty-next'));
    triggerSliderPrev(sliderCongTy,$('#slider-cong-ty-prev'));
    //Lam dep
    var sliderLamDep = $('#slider-lam-dep');
    sliderTab(sliderLamDep);
    triggerSliderNext(sliderLamDep,$('#slider-lam-dep-next'));
    triggerSliderPrev(sliderLamDep,$('#slider-lam-dep-prev'));
    //Dien gia
    var sliderDienGia = $('#slider-dien-gia');
    sliderTab(sliderDienGia);
    triggerSliderNext(sliderDienGia,$('#slider-dien-gia-next'));
    triggerSliderPrev(sliderDienGia,$('#slider-dien-gia-prev'));
    /*Slider Loi ich*/
    $('#slider-loiich').owlCarousel({
        items: 1,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 850,
        loop: true,
        dotsData: true,
        autoplay: false
    });
    /*Slider Clients*/
    $('#slider-clients').owlCarousel({
        loop:true,
        margin:70,
        autoWidth:true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    });
    $('.customNextBtn').click(function() {
        $('#slider-clients').trigger('next.owl.carousel');
    });
    $('.customPrevBtn').click(function() {
        $('#slider-clients').trigger('prev.owl.carousel', [300]);
    });
    /*Mobile Navigation*/
    $('#btnMenu').click(function () {
        if($(this).attr("aria-expanded") == "false"){
            $('.navbar').addClass("navbar-toggler-bg");
        }else {
            $('.navbar').removeClass("navbar-toggler-bg");
        }
    });
    /* Pause Video when Close Modal*/
    var iframe = $('#vimeo-top-player')[0];
    var player = $f(iframe);
    $('#vimeo-close').click(function() {
        player.api('pause');
    });
    /*Button scroll down*/
    $("#scroll-down").click(function() {
        $('html, body').animate({
            scrollTop: $("#tera-step").offset().top
        }, 1000);
    });
    /* Modal - popup */
    var modal = $('#teramodal');
    var modal_dang_ky = $('#modal_dang_ky');
    var modal_chon_theme = $('#modal_chon_theme');
    $('.btn_dang_ky').click(function(){
        $(".demo-ctrl").hide();
        modal.modal();
    });
    modal.on('show.bs.modal', function (e) {
        setTimeout(function (){
            $('#reg_name').focus();
        }, 2000);
    });
    modal.on('hide.bs.modal', function (e) {
        modal_dang_ky.show();
        modal_chon_theme.hide();
        $(".demo-ctrl").show();
    });
    $('#modal').on('hide.bs.modal', function (e) {
        player.api('pause');
    });
    $('#btn_chon_theme').click(function(){
        modal_dang_ky.toggle("slide",650,function(){
            modal_chon_theme.toggle("slide", {
                direction: "right"
            },400);
        });
    });
    /* Animation on scroll */
    $('.animate').each(function(){
        var waypoint = new Waypoint({
            element: $(this),
            handler: function() {
                var animation = this.element.attr("data-animate");
                this.element.addClass(animation);
                this.element.addClass('animated');
            },
            offset: '70%'
        })
    });
    /* Scroll to top */
    $("#scroll-top").click(function() {
        $('html, body').animate({
            scrollTop: $("#banner").offset().top
        }, 1000);
    });
    if( $(window).scrollTop() > 700 ) {
        $('#scroll-top').fadeIn();
    } else {
        $('#scroll-top').fadeOut();
    }
    $(window).scroll(function() {
        if( $(window).scrollTop() > 700 ) {
            $('#scroll-top').fadeIn();
        } else {
            $('#scroll-top').fadeOut();
        }
    });

    /*Tinh nang Nav*/
    $('#link_chinhsach').click(function(e){

        $('html, body').animate({
            scrollTop: ($("#tera-loi-ich").offset().top - 10)
        }, 1000);
    });
    /*Bang gia Nav*/
    $('#link_banggia').click(function(){
        $('html, body').animate({
            scrollTop: ($("#tera-price").offset().top - 10)
        }, 1000);
    });


});