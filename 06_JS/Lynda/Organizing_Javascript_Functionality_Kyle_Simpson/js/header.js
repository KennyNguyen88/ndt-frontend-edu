// // put event handlers for header links here

var Header = (function(){
    "use strict";

    function headerLinkClicks(evt){
        evt.preventDefault();

        var url = $(evt.target).attr("href");

        $.ajax(url, {dataType: "text"})
            .then(function(contents){
                $modal.html(contents).show();
            });
    }

    function init(){
        $modal = $("[rel='js-modal']");

        $("[rel='js-header']").on("click","[rel*='js-']", headerLinkClicks);
    }

    EVT.on("init", init);

    var $modal;

    return {
      init: init
    };

})();

