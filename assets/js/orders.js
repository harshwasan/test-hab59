$( "#pending" ).click(function() {
    $("#declined").removeClass( "order-active" )
    $("#complete").removeClass( "order-active" )
    $("#accepted").removeClass( "order-active" )
    $("#pending").addClass("order-active");
    $("#pending-component").css("display", "block");
    $("#completed-component").css("display", "none");
    $("#accepted-component").css("display", "none");
    $("#declined-component").css("display", "none");
});
$( "#complete" ).click(function() {
    $("#pending").removeClass( "order-active" )
    $("#declined").removeClass( "order-active" )
    $("#accepted").removeClass( "order-active" )
    $("#complete").addClass("order-active");
    $("#pending-component").css("display", "none");
    $("#completed-component").css("display", "block");
    $("#accepted-component").css("display", "none");
    $("#declined-component").css("display", "none");
});
$( "#accepted" ).click(function() {
    $("#pending").removeClass( "order-active" )
    $("#complete").removeClass( "order-active" )
    $("#declined").removeClass( "order-active" )
    $("#accepted").addClass("order-active");
    $("#pending-component").css("display", "none");
    $("#completed-component").css("display", "none");
    $("#accepted-component").css("display", "block");
    $("#declined-component").css("display", "none");
});
$( "#declined" ).click(function() {
    $("#pending").removeClass( "order-active" )
    $("#complete").removeClass( "order-active" )
    $("#accepted").removeClass( "order-active" )
    $("#declined").addClass("order-active");
    $("#pending-component").css("display", "none");
    $("#completed-component").css("display", "none");
    $("#accepted-component").css("display", "none");
    $("#declined-component").css("display", "block");
});