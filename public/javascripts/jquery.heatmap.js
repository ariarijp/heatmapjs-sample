(function($){
    var methods = {
        draw: function() {
            var canvases = $("canvas");
            
            var config = {
                element: $("body")[0],
                radius: 25,
                opacity: 70,
                // width: $(document).height(),
                height: $(document).height()
            };
            
            // creates and initializes the heatmap
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
        }, 
        send: function(/* event */ ev) {
            var json = {
                point: {
                    x: ev.pageX,
                    y: ev.pageY
                }
            };
            
            $.ajax({
                type: "POST",
                url: "/points.json",
                contentType: 'application/json',
                dataType: "json",
                data: JSON.stringify(json)
            }).done(function() {
                methods.draw.apply();
            });
        }
    };

    $.fn.heatMap = function(method){
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.heatMap' );
        }
    };

})(jQuery);
