$(document).ready(function() {
    //
    // add your jQuery code here

    $("button").addClass("makeRed");
    $("#button1").mouseenter(function() { $("#button1").removeClass("makeRed").addClass("makeBorder"); })
    $("#button1").mouseleave(function() { $("#button1").addClass("makeRed").removeClass("makeBorder") })
    $("#button2").mouseenter(function() { $("#button2").removeClass("makeRed").addClass("makeBorder"); })
    $("#button2").mouseleave(function() { $("#button2").addClass("makeRed").removeClass("makeBorder") })
    
   /* $("#button1").on("click", function() {
        $("#para1").slideToggle('fast');
    }); */
    
   /*  $("#button1").on("click", function() {
        $("#para1").hide('fast');
    });
    
    $("#button1").on("click", function() {
        $("#para1").show('fast');
    }); */
    
    $("#button1").on("click", function() {
        $("#para1").fadeToggle('fast');
    });
    
        $("#button2").on("click", function() {
        $("#para2").fadeToggle('fast');
    });
    
});
