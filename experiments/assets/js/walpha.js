/**
 * Created by chiyo on 2/13/2017.
 */
$(document).ready(function () {
    var cw = $('.walphabutton').width();
    $('.walphabutton').css({'height': cw + 'px'});
});
$(window).resize(function () {
    var cw = $('.walphabutton').width();
    $('.walphabutton').css({'height': cw + 'px'});
});