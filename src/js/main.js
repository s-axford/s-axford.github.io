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
                    $(this).parent().animate({
                        width: "15em"
                    }, {
                        duration: 300,
                        specialEasing: {
                            width: 'linear'
                        }
                    });
                    // $(this).animate({
                    //     width: "15em"
                    // }, {
                    //     duration: 100,
                    //     specialEasing: {
                    //         width: 'linear'
                    //     }
                    // });
                    $(this).fadeIn(300, function(){
                        if (!--count) {
                            $(selected).toggleClass("active");
                            $(selected).parent().css("width", "15em");
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
                $(this).parent().animate({
                    width: 0
                }, {
                    duration: 300,
                    specialEasing: {
                        width: 'linear'
                    }
                });
                // $(this).animate({
                //     width: 0
                // }, {
                //     duration: 100,
                //     specialEasing: {
                //         width: 'linear'
                //     }
                // });
                $(this).fadeOut(300, function(){
                    if (!--count) {
                        $(selected).toggleClass("active");
                        $(selected).parent().css("width", "70%");
                        $(selected).css('width', '');
                        content.css("display", "block");
                    }
                });
            });
        }
    })
});