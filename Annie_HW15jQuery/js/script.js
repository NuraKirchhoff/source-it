/**
 * Created by Nura on 7/14/2015.
 */
$(document).ready(function(){

    /*** ACCORDION ***/
  $('.accordion .active .slider').slideDown();
    $('.accordion .active').siblings().find('.slider').slideUp();
    $('.accordion>li>a').click(function(e){
        e.preventDefault();
        $(this).next().slideToggle();
        $(this).parent().siblings().find('.slider').slideUp();
    });

    /*** OPEN/CLOSE ***/
    $('.title').on('click', function() {
        $(this).siblings('div').animate({
            'height': 'toggle'
    }, 1000);
});

    /*** TABS ***/
    $('.tab-content').each(function(i){
        if ( i != 0 ) $(this).hide();
    });
    //$('.tab-content').hide();
    /*var hId = $('.tabset .active>a').attr('href');
    $(hId).show();*/
    //$('.tabset .active>a').attr('href').show(); - ? ?????? ?? ????????
    $('.tabset>li>a').click(function(e){
        e.preventDefault();
        var tabId = $(this).attr('href');
        $(this).addClass('active');
        $(this).siblings().removeClass();
        $('.tab-content').hide();
        $(tabId).show();
    })
});



