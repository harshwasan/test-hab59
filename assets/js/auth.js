$( "#login-auth" ).click(function() {
    $("#login-foot").css("display", "none");
    $("#foot").css("display", "flex");
    $("#vendor-login-page").css("display", "none");
    $("#vendor-dashboard").css("display", "block");
});
$( "#logout-auth" ).click(function() {
    $("#login-foot").css("display", "flex");
    $("#foot").css("display", "none");
    $("#vendor-login-page").css("display", "block");
    $("#vendor-dashboard").css("display", "none");
});