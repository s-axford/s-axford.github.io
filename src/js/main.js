let coll = $('.collapsible');

coll.each( function() {
    $(this).on('click', function() {
        let content = $(this).next();
        let selected = $(this);
        if (content.css('display') === "block") {
            let arr = coll.slice(0);
            arr.splice($.inArray(this, arr),1);
            let count = arr.length;
            arr.each(function () {
                if($(this).css("display") === "none"){
                    $(this).animate({
                        width: "15em"
                    }, {
                        duration: 100,
                        specialEasing: {
                            width: 'linear'
                        }
                    });
                    $(this).fadeIn(100, function(){
                        if (!--count) {
                            $(selected).toggleClass("active");
                            content.css("display", "none");

                        }
                    });
                }
            });
        } else {
            let arr = coll.slice(0);
            arr.splice($.inArray(this, arr),1);
            let count = arr.length;
            arr.each(function() {
                $(this).animate({
                    width: 0
                }, {
                    duration: 100,
                    specialEasing: {
                        width: 'linear'
                    }
                });
                $(this).fadeOut(100, function(){
                    if (!--count) {
                        $(selected).toggleClass("active");
                        $(selected).css('width', '');
                        content.css("display", "block");
                    }
                });
            });
        }
    })
});