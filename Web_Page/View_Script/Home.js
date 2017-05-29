

// ------------------------------------  Scorll bar ---------------------------------------------//

$(document).on({
    mouseenter: function () {
    },
    mouseleave: function () {
    },
    click: function (event) {
        event.preventDefault();
        var Value = $(this).attr('value');
        if (Value == 2) {
            $('html, body').animate({
                scrollTop: $('#about').offset().top
                }, 800);
            
        }
        else if (Value == 3) {

            $('html, body').animate({
                scrollTop: $('#Project').offset().top
            }, 800);
            console.log( $('html, body').animate({
                scrollTop: $('#Project').offset().top
            }, 800));
        }
    }
}, '.font_link');

//----------------------------------- Image Event Modal ---------------------------------------//
$(document).on({
    mouseenter: function () {
        $(this).removeClass('color-blog');

    },
    mouseleave: function () {
        $(this).addClass('color-blog');

    },
    click: function () {

        //     $('#home').attr('mcid', $(this).attr('value'));
        //     $('#home').attr('mc_sname', $(this).attr('mc_sname'));
        //     $('#home').attr('ln_code', $(this).attr('ln_code'));
        //     $('#home').attr('gpid', $(this).attr('gpid'));
        //     $('#home').attr('lnid', $(this).attr('lnid'));
        //     checkkeypadlogin(); 
    }
}, '.city');