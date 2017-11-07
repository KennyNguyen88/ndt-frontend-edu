/**
 * Created by HaiLong on 6/6/2017.
 */
$.fn.timeLayer = function (minTime, maxTime, jumpSeq) {
    var sTime = minTime;
    var tSeq = timeDivide(minTime, maxTime, jumpSeq);
    var tdTotal = 8;
    var timeTemplate;
    if (deviceWidth < 544){
        tdTotal = 6;
    }
    timeTemplate =
        "<div class='time-controls'>" +
        "<div class='time-control-button'>" +
        "<span class='time-previous-button'><i id='pre-btn' class='fa fa-caret-left' aria-hidden='true'></i></span>" +
        "</div>" +
        "<div id='date' class='date'>" + moment().format('dddd, MM/DD/YYYY') +"</div>" +
        "<div class='time-control-button rightalign'>" +
        "<span class='time-next-button'><i id='next-btn' class='fa fa-caret-right' aria-hidden='true'></i></span>" +
        "</div>" +
        "</div>" +
        "<div class='cover-table'>" +
        "<div class='embed-responsive embed-responsive-4by3'>" +
        "<div class='embed-responsive-item'>" +
        "<table id='time-table' class='time-table' border='0' cellspacing='0' cellpadding='0'>" +
        "<tbody>";
    for (var i = 0; i <= parseInt((tSeq/tdTotal).toString().split('.')[0], 10); i++){
        timeTemplate += "<tr>";
        for(var j = 0; j < tdTotal; j++){
            var d = j + i * tdTotal;
            if(d <= tSeq){
                timeTemplate += "<td class='time time-"+ d +"'>";
                timeTemplate += "<div class='time-contents'>"+ sTime.split(' ')[0] + "<small>"+ sTime.split(' ')[1] +"</small>" +"</div>";
                timeTemplate += "</td>";
                sTime = timeAdder(sTime, jumpSeq);
            }else {
                break;
            }
        }
        timeTemplate += "</tr>";
    }
    timeTemplate += "</tbody>" + "</table>" + "</div></div></div>";
    this.append(timeTemplate);
}
function timeAdder(hours, minAdded) {
    var time = hours.split(':');
    var sHours = parseInt(time[0], 10),
        sMin = parseInt(time[1], 10);
    var sFormat = hours.split(' ')[1];
    var sAddMin = sMin + minAdded;
    var sAddHours, sMinRemain, sNewHours;
    if(sAddMin >= 60){
        sAddHours = parseInt((sAddMin/60).toString().split('.')[0], 10);
        sMinRemain = sAddMin - (sAddHours * 60);
        if ( (sHours + sAddHours) > 12){
            sFormat = (sFormat == "AM" ? "PM" : "AM");
            sNewHours = ((sHours + sAddHours - 12).toString().length < 2 ? ("0" + (sHours + sAddHours - 12)) : (sHours + sAddHours - 12)) + ":" + (sMinRemain.toString().length < 2 ? "0" + sMinRemain : sMinRemain) + " " + sFormat;
        }else {
            sNewHours = ((sHours + sAddHours).toString().length < 2 ? "0" + ((sHours + sAddHours)) : (sHours + sAddHours)) + ":" + (sMinRemain.toString().length < 2 ? "0" + sMinRemain : sMinRemain) + " " + sFormat;
        }
    }else{
        if(sHours > 12){
            sFormat = (sFormat == "AM" ? "PM" : "AM");
            sNewHours = ((sHours - 12).toString().length <2 ? ("0"+(sHours - 12)) : (sHours - 12)) + ":" + (sAddMin.toString().length < 2 ? "0" + sAddMin : sAddMin) + " " + sFormat;
        }else {
            sNewHours = (sHours.toString().length < 2 ? ("0" + sHours) : sHours) + ":" + (sAddMin.toString().length < 2 ? "0" + sAddMin : sAddMin) + " " + sFormat;
        }

    }
    return sNewHours;
}
function timeDivide(hours1, hours2, min) {
    var sTime1 = hours1.split(':');
    var sTime2 = hours2.split(':');
    var sHour1 = parseInt(sTime1[0], 10);
    var sMin1 = parseInt(sTime1[1], 10);
    var sHour2 = parseInt(sTime2[0], 10);
    var sMin2 = parseInt(sTime2[1], 10);
    var nMin, nHours, sMinTotal, sSeq;

    if(sHour1 > sHour2){
        return 0;
    }
    if(sMin2 < sMin1){
        sHour1 = sHour1 + 1;
        sMin2 = sMin2 + 60;
        nMin = sMin2 - sMin1;
        nHours = sHour2 - sHour1;
        sMinTotal = nMin + (nHours * 60);
        sSeq = parseInt((sMinTotal/min).toString().split('.')[0], 10);
    }else {
        nMin = sMin2 - sMin1;
        nHours = sHour2 - sHour1;
        sMinTotal = nMin + (nHours * 60);
        sSeq = parseInt((sMinTotal/min).toString().split('.')[0], 10);
    }
    return sSeq;
}