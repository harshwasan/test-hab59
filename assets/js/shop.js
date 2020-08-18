$(document).ready(function(){
    $("#search-product").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#test .shop-card-component").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
});