function expandCorrespondingBalls(over){
    $(".ball").addClass("hidden");
    $(".overendrow").removeClass("hidden");
    $(".over-" + (over - 1)).removeClass("hidden");
}