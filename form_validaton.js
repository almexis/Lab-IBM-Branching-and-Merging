function checkdata() {
    var username = document.getElementById("name");
    var emailid = document.getElementById("email");
    var zipco = document.getElementById ("zipcode");

//Check if username field is empty
if (username.value == ""){
    alert("Please enter the name");
    username.focus();
    return false;
}
//Check if email field is empty
if (emailid.value == ""){
    alert ("Please enter the email");
    emailid.focus;
    return false;

}
if (zipco.value == ""){
    alert ("Please enter the Zipcode");
    zipco.focus();
    return false;
}
//if all the well return true
return true;

}
