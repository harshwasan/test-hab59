
var x = document.getElementById("location");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "</br>Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        x.innerHTML = "User denied the request for Geolocation."
        break;
      case error.POSITION_UNAVAILABLE:
        x.innerHTML = "Location information is unavailable."
        break;
      case error.TIMEOUT:
        x.innerHTML = "The request to get user location timed out."
        break;
      case error.UNKNOWN_ERROR:
        x.innerHTML = "An unknown error occurred."
        break;
    }
  }

//   function showPosition(position) {
//     var latlon = position.coords.latitude + "," + position.coords.longitude;
  
//     var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false&key=YOUR_KEY";
  
//     document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
//   }

function check(){

    //controls
    var n=document.getElementById('input_Shop_name');
    var p=document.getElementById('input_Shop_Phone');
    var a=document.getElementById('input_Shop_address');
    var pin=document.getElementById('input_Pincode');
    var gst=document.getElementById('input_GSTIN');
    var upi=document.getElementById('input_upi');
    var cat=document.getElementById('Category');
    var images=document.getElementById('input_shop_images');
    var latlong=document.getElementById('location');
    //errors
    var nerr=document.getElementById('err_Shop_name');
    var perr=document.getElementById('err_Shop_Phone_no');
    var aerr=document.getElementById('err_Shop_address');
    var pinerr=document.getElementById('err_Pincode');
    var gsterr=document.getElementById('err_GST_no');
    var upierr=document.getElementById('err_UPI_id');
    var caterr=document.getElementById('err_category_dropdown');
    var imageserr=document.getElementById('err_shop_images');
    var latlongerr=document.getElementById('err_geolocation');

    var count=0;
    if(n.value==""|| n.value== undefined|| n.value==null)
    {
        nerr.style.display="block";
        count=count+1;
            
    }
    else
    {
            nerr.style.display="none";
        
    }
    if(p.value==""|| p.value== undefined|| p.value==null)
    {
    
            perr.style.display="block";
            count=count+1;
    }
    else
    {
              perr.style.display="none";
            
    }   
    if(a.value==""|| a.value== undefined|| a.value==null){
        aerr.style.display="block";
        count=count+1;
        
    }
    else{
    
        aerr.style.display="none";
    }  
    if(pin.value==""|| pin.value== undefined|| pin.value==null){
        pinerr.style.display="block";
        count=count+1;
        
    }
    else{
    
        pinerr.style.display="none";
    }
    if(gst.value==""|| gst.value== undefined|| gst.value==null){
        gsterr.style.display="block";
        count=count+1;
        
    }
    else{
    
        gsterr.style.display="none";
    }  
        
    if(upi.value==""|| upi.value== undefined|| upi.value==null){
        upierr.style.display="block";
        count=count+1;
        
    }
    else{
    
        upierr.style.display="none";
    }  
        
    if(cat.options[cat.selectedIndex].value=="Select"|| cat.value== undefined|| cat.value==null){
        caterr.style.display="block";
        count=count+1;
        
    }
    else{
    
        caterr.style.display="none";
    }  
        
    if(!(images.files.length > 0)){
        imageserr.style.display="block";
        count=count+1;
        
    }
    else{
    
        imageserr.style.display="none";
    }  
        
    if(latlong.innerText==""|| latlong.innerText== undefined|| latlong.innerText==null){
        latlongerr.style.display="block";
        count=count+1;
        
    }
    else{
    
        latlongerr.style.display="none";
    }  
        
    if(count>0)
    {
        

    }
    else{

        window.location="/rf3.html"
    }
        


}