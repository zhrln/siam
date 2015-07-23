/**
 * Created by yanjing on 7/15/15.
 */
require([
    'jquery',
    'controls/link'
], function($, Link){
    new Link({
        el: '.drag-handler'
    });
});