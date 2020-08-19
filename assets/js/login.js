function logincheck(){
    // debugger;
    var u = document.getElementById('input_login_username');
    var p = document.getElementById('input_login_password');
    var err = document.getElementById('login_err');
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

     
        const url = "https://e-kharidana.herokuapp.com/api/login";
        params = {          
            "email": u.value ,
            "password":p.value          
        }
        $.ajax(url, {
            type: 'POST',
            contentType: 'application/json', 
            data: JSON.stringify(params),
            success: function (response, status, xhr) {  
                if(!response.err)
                {  
                    console.log(response);
                    $("#login-foot").css("display", "none");
                    $("#foot").css("display", "flex");
                    $("#vendor-login-page").css("display", "none");
                    $("#vendor-dashboard").css("display", "block");
                }              
                else{
                    err.style.display = "block";

                }
              
    
    
            },
            error: function (err) {
                alert(err);
            }
    
        }); 
    }
}