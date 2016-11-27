function validateForm() {
    var a = document.forms["register"]["name"].value;
    var b = document.forms["register"]["address"].value;	    
    var c = document.forms["register"]["nationality"].value;
    var d = document.forms["register"]["mail"].value;
   
    
if (a == null || a == "") {
        alert("Please fill the name");
        return false;
}
else if(b ==null || b =="")   
 {
        alert("Please fill the address");
	return false;
}
else if(c ==null || c =="")   
 {
        alert("Please fill the nationality");
	return false;
}
else if(d ==null || d =="")   
 {
        alert("Please provide the mail-id");
	return false;
}
}
