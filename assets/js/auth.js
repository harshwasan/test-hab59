$( "#login-auth" ).click(function() {
    $("#login-foot").css("display", "none");
    $("#foot").css("display", "flex");
    $("#vendor-login-page").css("display", "none");
    $("#vendor-dashboard").css("display", "block");
});
$( "#register-auth" ).click(function() {
    $("#login-foot").css("display", "none");
    $("#vendor-login-page").css("display", "none");
    $("#vendor-shop-registration").css("display", "block");
});
$( "#next-shop-form" ).click(function() {
    $("#vendor-shop-registration-owner-form").css("display", "none");
    $("#vendor-shop-registration-shop-form").css("display", "block");
});
$( "#next-dashboard" ).click(function() {
    $("#vendor-shop-registration-shop-form").css("display", "none");
    $("#foot").css("display", "flex");
    $("#vendor-dashboard").css("display", "block");
});
$( "#logout-auth" ).click(function() {
    $("#login-foot").css("display", "flex");
    $("#foot").css("display", "none");
    $("#vendor-login-page").css("display", "block");
    $("#vendor-dashboard").css("display", "none");
});