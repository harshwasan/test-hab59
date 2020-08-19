$("#allproducts").click(function () {
    $("#instock").removeClass("order-active")
    $("#outofstock").removeClass("order-active")
    $("#allproducts").addClass("order-active");
    $("#addproduct").removeClass("order-active")
    $("#allproducts-component").css("display", "block");
    $("#outofstock-component").css("display", "none");
    $("#instock-component").css("display", "none");
    $("#addproduct-component").css("display", "none");

});
$("#instock").click(function () {
    $("#allproducts").removeClass("order-active")
    $("#outofstock").removeClass("order-active")
    $("#instock").addClass("order-active");
    $("#addproduct").removeClass("order-active")
    $("#instock-component").css("display", "block");
    $("#outofstock-component").css("display", "none");
    $("#allproducts-component").css("display", "none");
    $("#addproduct-component").css("display", "none");
});
$("#outofstock").click(function () {
    $("#instock").removeClass("order-active")
    $("#allproducts").removeClass("order-active")
    $("#outofstock").addClass("order-active");
    $("#addproduct").removeClass("order-active")
    $("#outofstock-component").css("display", "block");
    $("#instock-component").css("display", "none");
    $("#allproducts-component").css("display", "none");
    $("#addproduct-component").css("display", "none");
});
$("#addproduct").click(function () {
    $("#instock").removeClass("order-active")
    $("#allproducts").removeClass("order-active")
    $("#outofstock").removeClass("order-active")
    $("#addproduct").addClass("order-active");
    $("#addproduct-component").css("display", "block");
    $("#instock-component").css("display", "none");
    $("#allproducts-component").css("display", "none");
    $("#outofstock-component").css("display", "none");

});


function check() {
    var n = document.getElementById('input_product_name');
    var c = document.getElementById('input_product_cost');
    var i = document.getElementById('input_product_image');
    var nerr = document.getElementById('err_product_name');
    var cerr = document.getElementById('err_product_cost');
    var ierr = document.getElementById('err_product_image');
    var count = 0;
    if (n.value == "" || n.value == undefined || n.value == null) {
        nerr.style.display = "block";
        count = count + 1;

    }
    else {
        nerr.style.display = "none";

    }
    if (c.value == "" || c.value == undefined || c.value == null) {

        cerr.style.display = "block";
        count = count + 1;
    }
    else {
        cerr.style.display = "none";

    }
    if (!(i.files.length > 0)) {

        ierr.style.display = "block";
        count = count + 1;
    }
    else {

        ierr.style.display = "none";
    }

    if (count > 0) {


    }
    else {
        // function registerVendor() {


        // }
        //if validation is correct actions to do
        //window.location="/rf2.html"
       
    }

}
