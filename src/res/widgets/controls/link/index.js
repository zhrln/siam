/**
 * Created by yanjing on 7/15/15.
 */
;define([
    'jquery',
    'jquery/simpleDrag',
    'jquery/simpleResize'
], function($){

    var Link = function(options){
        this.el = options.el;
        this.$el = $(this.el);
        this.opts = $.extend({},{

        },options);
        this.init();
    };

    var fn = Link.prototype;

    fn.init = function(){
        this.$el.simpleDrag();
        this.$el.simpleResize();
    };

    return Link;
});