$(function(){
    $("body").on("click", function(e) {
        $().heatMap("send", e).done(function(){
            console.log("pageX = %d1, pageY = %d2".replace("%d1", e.pageX).replace("%d2", e.pageY));
            $().heatMap("draw");
        });
    });
 
    $(window).on("load resize scroll", function(){
        $().heatMap("draw");
    });
});
