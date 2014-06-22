$(function(){
    $("body").on("click", function(e) {
        $().heatMap("send", e);
    });
 
    $(window).on("load resize scroll", function(){
        $().heatMap("draw");
    });
});
