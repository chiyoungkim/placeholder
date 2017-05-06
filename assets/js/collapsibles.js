/**
 * Created by chiyo on 2/10/2017.
 */
$(function () {
    $("#pf-section-1").collapse({
        toggle: true
    });
    $("#pf-section-2").collapse({
        toggle: true
    });
});

$(".open-all").click(function(e){
    e.stopPropagation();
    var section = $(this).parent().parent().attr("id");
    $("#"+section+ " .panel-collapse").collapse("show");
    var collection = $("#"+section).find(".panel-collapse .collapse");
    collection.each(
        function(item){
            $("#"+collection[item].id).collapse("show");
        });
});