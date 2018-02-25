(function() {
    window.onload = function() {

        /*
            动态创建tagcanvas需要的元素。
         */
        var tagsHtmlBuilder = function() {
            var html = ['<ul>'];
            for (var i = 0; i < 100; i++) {
                html.push('<li><a href="#">' + i + '</a></li>');
            }
            html.push('</ul>');
            return html.join('');
        };

        var myCanvas = document.getElementById("myCanvas");
        myCanvas.innerHTML = tagsHtmlBuilder();

        TagCanvas.Start('myCanvas', '', {
            textColour: '#ff0000',
            textHeight: 14,
            outlineColour: '#ff00ff',
            reverse: true,
            depth: 0.8,
            maxSpeed: 0.05
        });

    };
})();