// // put event handlers for header links here

$(document).ready(function(){

    var $modal = $("[rel='js-modal']");

    $("[rel='js-header']").on("click","[rel*='js-']", function(evt){
        evt.preventDefault();

        var url = $(evt.target).attr("href");
        
        $.ajax(url, {dataType: "text"})
        .then(function(contents){
            $modal.html(contents).show();
        })
    })

});