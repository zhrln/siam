/**
 * Created by yanjing on 7/15/15.
 */
;define(['jquery'], function($){

    var simpleResize = function(node, opts) {

        $.extend(this, {
            init: function() {
                init();
            },
            options: function() {
                return opts;
            }
        });

        var $this = $(node);

        function initProp(){
            $this.css({
                'background-color': 'rgba(0, 168, 255, 0.3)'
            });
        }

        function initEvent(){

        }

        function initElements(){
            addHandle();
        }

        function addHandle(){
            this.$handle = $('<span class="resize-handler">').css({
                'position': 'absolute',
                'bottom': '0',
                'right': '0',
                'width': '10px',
                'height': '10px',
                'background-color': 'rgba(0, 168, 255, 0.7)',
                'cursor': 'se-resize'
            });
            $this.append(this.$handle);
        }

        function init(){
            initElements();
            initProp();
            initEvent();
            opts.onInit();
        }
        init();

    };

    $.fn.simpleResize = function(conf) {

        var el = this.eq(typeof conf == 'number' ? conf : 0).data("simpleResize");
        if (el) { return el; }

        var opts = {
            onInit: function(e,o){},
            api: false
        };

        $.extend(opts, conf);

        this.each(function() {
            el = new simpleResize(this, opts);
            $(this).data("simpleResize", el);
        });

        return opts.api ? el: this;

    };

});