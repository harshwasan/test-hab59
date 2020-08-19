function registercheck() {
    // debugger;
    var u = document.getElementById('input_username');
    var p = document.getElementById('input_password');
    var c = document.getElementById('input_cpassword');
    var err = document.getElementById('register_err');
    var count = 0;

    if (u.value == "" || u.value == undefined || u.value == null) {
        count = count + 1;

    }
    if (p.value == "" || p.value == undefined || p.value == null) {
        count = count + 1;
    }
    if (c.value == "" || c.value == undefined || c.value == null) {
        count = count + 1;
    }
    else {
        if (c.value != p.value) {
            count = count + 1;
        }
        else {

        }


    }

    if (count > 0) {
        err.style.display = "block";
    }
    else {
        err.style.display = "none";
        var hu = document.getElementById('hdn_username');
        var hp = document.getElementById('hdn_password');
        //insert validation and ajax here
        hu.value= u.value;
        hp.value=p.value;
        $("#login-foot").css("display", "none");
        $("#vendor-login-page").css("display", "none");
        $("#vendor-shop-registration").css("display", "block");


    }
}