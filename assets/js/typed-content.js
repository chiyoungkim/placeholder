/**
 * Created by chiyo on 2/10/2017.
 */
$(document).load(function () {
    $(function () {
        $("#typed").typed({
            strings: ["Chiyoung <strong>Kim</strong>"],
            typeSpeed: 30,
            callback: function () {
                return elem.siblings('.typed-cursor').remove();
            }
        });
    });
});

function shift(){
    $(".head-wrap").addClass("shift-text");
    terminalHeight();
}

function terminalHeight(){
    var termHeight = $(".terminal-height");
    var value = termHeight.text();
    value = parseInt(value);
    setTimeout(function(){
        if (value > 10){
            value = value-1;
            this.txtValue = value.toString();
            termHeight.text(this.txtValue);
            self.terminalHeight();
        }
        else{
            clearTimeout();
        }
    }, 10);
}