var calendars = {};
var deviceWidth = $(window).width();

$(window).on('load', function() {
    $('#mobile-label-1').attr("style", "right:" + "-" + ($('.label-card').width() + "px"));
    $('#mobile-label-2').attr("style", "right:" + "-" + ($('.label-card').width() + "px"));
});
var resizeTimer;
$(window).on('resize', function(e) {
    deviceWidth = $(window).width();
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        $('#mobile-label-1').attr("style", "right:" + "-" + ($('.label-card').width() + "px"));
        $('#mobile-label-2').attr("style", "right:" + "-" + ($('.label-card').width() + "px"));
    }, 250);
    if ($('#timeLayer').length){
        var date = $('#date.date').text();
        $('#timeLayer').html("");
        $('#timeLayer').timeLayer('01:00 AM', '22:00 PM', 15);
        $('#date.date').text(date);
        initTimeLayerEvent();
    }
});
$(document).ready(function () {
    $('.spinner .btn:first-of-type').on('click', function() {
        $('.spinner input').val( parseInt($('.spinner input').val(), 10) + 1);
    });
    $('.spinner .btn:last-of-type').on('click', function() {
        $('.spinner input').val( parseInt($('.spinner input').val(), 10) - 1);
    });
    $('#lbl-header-1').on('click', function () {
        if($('#mobile-label-1').css("right") !== '0px') {
            $('#mobile-label-1').animate({right: '0px'});
        }else{
            var rPos = '-' + $('.label-card').width() + 'px';
            $('#mobile-label-1').animate({right: rPos});
        }
    });
    $('#lbl-header-2').on('click', function () {
        if($('#mobile-label-2').css("right") !== '0px') {
            $('#mobile-label-2').animate({right: '0px'});
        }else{
            var rPos = '-' + $('.label-card').width() + 'px';
            $('#mobile-label-2').animate({right: rPos});
        }
    });
    $('#inpTo').change(function () {
        var dotTxt = "";
        if($('#inpTo').val().toString().length < 1){
            dotTxt = "...................................................................................................................................................................................................................................................................................................";
        }
        $('#to').text($('#inpTo').val() + dotTxt);
    });
    $('#inpFrom').change(function () {
        var dotTxt = "";
        if($('#inpFrom').val().toString().length < 1){
            dotTxt = "...................................................................................................................................................................................................................................................................................................";
        }
        $('#from').text($('#inpFrom').val() + dotTxt);
    });
    $('#txtMessage').change(function () {
        var dotTxt = "";
        if($('#txtMessage').val().toString().length < 1){
            dotTxt = "...................................................................................................................................................................................................................................................................................................";
        }
        $('#message').text($('#txtMessage').val() + dotTxt);
    });
    $('#amount').change(function () {
        var total = 0;
        var amount = $('#amount').val();
        var price = $('#price').find('option:selected').val();
        if(isNaN(amount) == false){
            total = price * amount;
            $('#total').text("$" + total + ".00");
        }
    });
    $('#price').change(function () {
        var total = 0;
        var amount = $('#amount').val();
        var price = $('#price').find('option:selected').val();
        if(isNaN(amount) == false){
            total = price * amount;
            $('#total').text("$" + total + ".00");
        }
    });

    var thisMonth = moment().format('YYYY-MM');
    var eventArray = [
    ];

    if($('#calendar').length){
        calendars.calendar = $('#calendar').clndr({
            events: eventArray,
            clickEvents: {
                click: function (target) {
                    $('#clndr-table tr td').removeClass('event');
                    var oldAtt = target.element.getAttribute('class');
                    target.element.setAttribute('class', oldAtt + ' event');
                    var selectedDate = target.element.innerText + " " + $('.month').text();
                    var date = new Date(selectedDate);
                    var dateFormat = moment(date).format('dddd, MM/DD/YYYY');
                    $('#date.date').text(dateFormat);
                },
                today: function () {
                },
                nextMonth: function () {
                },
                previousMonth: function () {
                },
                onMonthChange: function () {
                },
                nextYear: function () {
                },
                previousYear: function () {
                },
                onYearChange: function () {
                },
                nextInterval: function () {
                },
                previousInterval: function () {
                },
                onIntervalChange: function () {
                }
            },
            multiDayEvents: {
                singleDay: 'date',
                endDate: 'endDate',
                startDate: 'startDate'
            },
            showAdjacentMonths: false,
            adjacentDaysChangeMonth: false
        });
    }

    if($('#timeLayer').length){
        $('#timeLayer').timeLayer('01:00 AM', '22:00 PM', 15);
    };
    initTimeLayerEvent();
});

function initTimeLayerEvent() {
    $('#timeLayer tr td').on('click',function () {
        $('#timeLayer tr td').removeClass('active');
        var oldAttr = this.getAttribute('class');
        var newAttr = oldAttr + " active";
        this.setAttribute('class', newAttr);
    });
    $('#pre-btn').on('click',function () {
        var date = moment($('#date.date').text(), 'dddd, MM/DD/YYYY');
        var preDay = moment(date).add(-1, 'd');
        var dateFormat = moment(preDay).format('dddd, MM/DD/YYYY');
        $('#date.date').text(dateFormat);
    });
    $('#next-btn').on('click',function () {
        var date = moment($('#date.date').text(), 'dddd, MM/DD/YYYY');
        var nextDay = moment(date).add(1, 'd');
        var dateFormat = moment(nextDay).format('dddd, MM/DD/YYYY');
        $('#date.date').text(dateFormat);
    });
}