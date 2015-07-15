/**
 * Created by yanjing on 7/15/15.
 */
;define(['jquery'], function($){

    var simpleDrag = function(node, opts) {

        $.extend(this, {
            init: function() {
                init();
            },
            options: function() {
                return opts;
            }
        });

        var isMove = false,
            $this = $(node),
            nodeOffset = {},
            pageOffset = {};

        function initProp(){
            $this.css({
                'cursor': 'move',
                'position': 'absolute'
            });
            nodeOffset = {
                x: 0,
                y: 0,
                w: $this.width(),
                h: $this.height()
            };
            pageOffset = {
                w: 640,
                h: $(document).height()
            };
        }

        function initEvent(){
            $(document)
                .on('mousemove', function(e){
                    if(isMove){
                        var pos = {
                            x: e.pageX - nodeOffset.x,
                            y: e.pageY - nodeOffset.y
                        };

                        $this.css({
                            'left': pos.x < 0 ? 0 : (pos.x + nodeOffset.w > pageOffset.w ? pageOffset.w - nodeOffset.w : pos.x),
                            'top': pos.y < 0 ? 0 : (pos.y + nodeOffset.h > pageOffset.h ? pageOffset.h - nodeOffset.h : pos.y)
                        });
                        return false;
                    }
                })
                .on('mouseup', function(){
                    isMove = false;
                });

            $this
                .on('mousedown', function(e){
                    if(e.button !== 2 && e.button !== 3){
                        isMove = true;
                        nodeOffset.x = e.pageX - parseInt($this.css("left"));
                        nodeOffset.y = e.pageY - parseInt($this.css("top"));
                    }
                });
        }

        function init(){
            initProp();
            initEvent();
        }
        init();

    };

    $.fn.simpleDrag = function(conf) {

        var el = this.eq(typeof conf == 'number' ? conf : 0).data("simpleDrag");
        if (el) { return el; }

        var opts = {
            onInit: function(e,o){},
            api: false
        };

        $.extend(opts, conf);

        this.each(function() {
            el = new simpleDrag(this, opts);
            $(this).data("simpleDrag", el);
        });

        return opts.api ? el: this;

    };

});