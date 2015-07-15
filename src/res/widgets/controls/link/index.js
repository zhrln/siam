/**
 * Created by yanjing on 7/15/15.
 */
;define([
    'jquery',
    'jquery/simpleDrag'
], function($){

    var Link = function(el,options){
        this.el = el;
        this.$el = $(this.el);
        this.opts = $.extend({},{

        },options);
        this.init();
    };

    var fn = Link.prototype;

    fn.init = function(){
        this.$el.simpleDrag();
    };

    return Link;
});