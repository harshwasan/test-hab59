function check(){
    var u = document.getElementById('input_username');
    var p = document.getElementById('input_password');
    var err = document.getElementById('err');
    var count = 0;

    if (u.value == "" || u.value == undefined || u.value == null) {       
        count = count + 1;

    }
    if (p.value == "" || p.value == undefined || p.value == null) {      
        count = count + 1;
    }
    if (count > 0) {
        err.style.display = "block";
    }
    else {
        err.style.display = "none";

            //insert validation and ajax here


    }
}