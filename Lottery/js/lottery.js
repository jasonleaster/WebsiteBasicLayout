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

        var vOptionsCtx = new Vue({
            el: '#options',
            data: {
                selected: 30,
                running: false,
                btns: [
                    30, 10, 5, 2, 1
                ]
            },
            mounted: function() {
                var myCanvas = document.getElementById("myCanvas");
                myCanvas.innerHTML = tagsHtmlBuilder();

                TagCanvas.Start('myCanvas', '', {
                    textColour: '#ff0000',
                    textHeight: 14,
                    outlineColour: '#ff00ff',
                    reverse: true,
                    depth: 0.8,
                    speed: 0.1
                });
            },
            methods: {
                changeSpeed: function(speed) {
                    TagCanvas.SetSpeed('myCanvas', [speed, speed]);
                    TagCanvas.Reload('myCanvas');
                },
                startLottery: function () {
                    debugger;
                    this.changeSpeed(20);
                    $("#result").css('display','none');
                    console.log('game started!');
                },
                stopLottery: function () {
                    this.changeSpeed(0.1);
                    $("#result").css('display','block');
                    console.log('game stoped!');
                },
                resetHandler: function() {

                }
            },
        });

    };
})();