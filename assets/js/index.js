$( "#foot-shop" ).click(function() {
    $("#foot-chat").removeClass( "foot-active" );
    $("#foot-order").removeClass( "foot-active" );
    $("#foot-profile").removeClass( "foot-active" );
    $("#foot-shop").addClass("foot-active");
    $("#shop-component").css("display", "block");
    $("#order-component").css("display", "none");
    $("#chat-component").css("display", "none");
    $("#profile-component").css("display", "none");
});
$( "#foot-order" ).click(function() {
    $("#foot-chat").removeClass( "foot-active" );
    $("#foot-shop").removeClass( "foot-active" );
    $("#foot-profile").removeClass( "foot-active" );
    $("#foot-order").addClass("foot-active");
    $("#shop-component").css("display", "none");
    $("#order-component").css("display", "block");
    $("#chat-component").css("display", "none");
    $("#profile-component").css("display", "none");
});
$( "#foot-chat" ).click(function() {
    $("#foot-shop").removeClass( "foot-active" );
    $("#foot-order").removeClass( "foot-active" );
    $("#foot-profile").removeClass( "foot-active" );
    $("#foot-chat").addClass("foot-active");
    $("#shop-component").css("display", "none");
    $("#order-component").css("display", "none");
    $("#chat-component").css("display", "block");
    $("#profile-component").css("display", "none");
});
$( "#foot-profile" ).click(function() {
    $("#foot-chat").removeClass( "foot-active" );
    $("#foot-order").removeClass( "foot-active" );
    $("#foot-shop").removeClass( "foot-active" );
    $("#foot-profile").addClass("foot-active");
    $("#shop-component").css("display", "none");
    $("#order-component").css("display", "none");
    $("#chat-component").css("display", "none");
    $("#profile-component").css("display", "block");
});
