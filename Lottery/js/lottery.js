(function() {
    window.onload = function() {

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
        }

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

        var vResultCtx = new Vue({
            el: '#result',
            data : {
                results: [],
                finished: false,
            }
        });

        var vOptionsCtx = new Vue({
            el: '#options',
            data: {
                selected: 5,
                running: false,
                btns: [
                    30, 10, 5, 2, 1
                ],
                selectedButton: -1,
                candidators: 0,
                results:[1,2,3],
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
                changeCandidator: function (candidators, selectedButton) {
                    this.candidators = candidators;
                    this.selectedButton = selectedButton;
                },
                startLottery: function () {
                    this.changeSpeed(20);
                    vResultCtx.finished = false;
                },
                stopLottery: function () {
                    vResultCtx.results = []
                    for (var i = 0; i < this.candidators; i++) {
                        vResultCtx.results.push(getRandomInt(0, 100));
                    }

                    this.changeSpeed(0.1);
                    vResultCtx.finished = true;
                },
                resetHandler: function() {

                }
            },
        });
    };
})();