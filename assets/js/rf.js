function check(){
    debugger;
    var n=document.getElementById('input_name');
    var p=document.getElementById('input_Phone');
    var a=document.getElementById('input_address');
    var aa=document.getElementById('input_aadhaar_no');
    var pn=document.getElementById('input_pan_no');
    var l=document.getElementById('input_file_liscense');
    var nerr=document.getElementById('err_full_name');
    var perr=document.getElementById('err_Phone_no');
    var aerr=document.getElementById('err_address');
    var aaerr=document.getElementById('err_aadhaar_no');
    var pnerr=document.getElementById('err_pan_no');
    var lerr=document.getElementById('err_file_liscense');
    var count=0;

    
    if(n.value==""|| n.value== undefined|| n.value==null){
    nerr.style.display="block";
    count=count+1;
        
    }
    else{
        nerr.style.display="none";
    
    }
    if(p.value==""|| p.value== undefined|| p.value==null){
    
        perr.style.display="block";
        count=count+1;
    }
    else{
        perr.style.display="none";
        
    }
    if(a.value==""|| a.value== undefined|| a.value==null){
        aerr.style.display="block";
        count=count+1;
        
    }
    else{
    
        aerr.style.display="none";
    }
    if(aa.value==""|| aa.value== undefined|| aa.value==null){
    
        aaerr.style.display="block";
        count=count+1;
    }
    else{
    
        aaerr.style.display="none";
    }
    if(pn.value==""|| pn.value== undefined|| pn.value==null){
    
        pnerr.style.display="block";
        count=count+1;
    }
    else{
        pnerr.style.display="none";
        
    }
    if(!(l.files.length > 0)){
    
        lerr.style.display="block";
        count=count+1;
    }
    else{
    
        lerr.style.display="none";
        }
    
        if(count>0)
        {
            
    
        }
        else{
    
            window.location="/rf2.html"
        }
    }