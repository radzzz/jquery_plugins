$.fn.placeholder = function() {
    return this.each(function(){
        $(this).attr("placeholder", $(this).attr("title"));        
    });
};

$.fn.color_add = function(opt) {
    return this.each(function(){
        opt = $.extend({
            color: opt
        }, opt);   
       
    });
};