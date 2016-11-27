function validateForm() {
    var a = document.getElementById('username').value;
    var b = document.getElementById('password').value;	    
    
    
if (a == null || a == "") {
        alert("Please fill the name");
        return false;
}
else if(b ==null || b =="")   
 {
        alert("Please enter the password");
	return false;
}

}
