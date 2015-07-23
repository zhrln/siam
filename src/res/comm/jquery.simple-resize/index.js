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

        }

        function initEvent(){

        }

        function initElements(){
            addBorderAndHandle();
        }

        function addBorderAndHandle(){
            $this.css({
                'border': '1px solid green'
            });
            this.$handle = $('<i>').css({

            });
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