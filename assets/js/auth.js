



$( "#login-auth" ).click(function() {
 
});
$( "#register-auth" ).click(function() {
   
   
   
});
$( "#next-shop-form" ).click(function() {
    $("#vendor-shop-registration-owner-form").css("display", "none");
    $("#vendor-shop-registration-shop-form").css("display", "block");
});
$( "#next-dashboard" ).click(function() {
  
    
    var hu = document.getElementById('hdn_username');
    var hp = document.getElementById('hdn_password');
    const url = "https://e-kharidana.herokuapp.com/api/register";
    params = {

        "name": "JJwewewe",
        "email": hu.value ,
        "enc_password":hp.value,
        "salt": "JJ",
        "profilePic": "jj",
        "soName": "hhhhh",
        "gender": "Male",
        "address": "address",
        "pincode": "565656",
        "mobile": "848484848484",
        "aadhaar": "777777"


    }
    $.ajax(url, {
        type: 'POST',
        contentType: 'application/json', 
        data: JSON.stringify(params),
        success: function (response, status, xhr) {
            console.log(response);
            $("#vendor-shop-registration-shop-form").css("display", "none");
            $("#foot").css("display", "flex");
            $("#vendor-shop-registration").css("display","none");
            $("#vendor-dashboard").css("display", "block");

        },
        error: function (err) {
            alert(err);
        }

    });

});
$( "#logout-auth" ).click(function() {
    $("#login-foot").css("display", "flex");
    $("#foot").css("display", "none");
    $("#vendor-login-page").css("display", "block");
    $("#vendor-dashboard").css("display", "none");
});