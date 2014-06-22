$(function(){
    var drawHeatmap = function() {
        var canvases = $("canvas");

        var config = {
            element: $("body")[0],
            radius: 25,
            opacity: 70,
            // width: $(document).height(),
            height: $(document).height()
        };
        
        //creates and initializes the heatmap
        var heatmap = h337.create(config);

        // let's get some data
        var data = {
            max: 10,
            data: []
        };
        
        $.ajax({url: '/points/summary.json'}).done(function(summary){
            data.data = summary;
            heatmap.store.setDataSet(data);

            if (canvases.length > 0) {
                canvases.remove();
            }
        });
    }

    $("body").on("click", function(e) {
        var json = {
            point: {
                x: e.pageX,
                y: e.pageY
            }
        };

        $.ajax({
            type: "POST",
            url: "/points.json",
            contentType: 'application/json',
            dataType: "json",
            data: JSON.stringify(json)
        }).done(function() {
            drawHeatmap();
        });
    });
 
    $(window).on("resize scroll", function(){
        drawHeatmap();
    });

    drawHeatmap();
});
