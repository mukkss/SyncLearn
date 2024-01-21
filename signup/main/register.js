function signupvalidation(){
    let name = document.forms.signUp.name.value;
    let email = document.forms.signUp.email.value;
    let password = document.forms.signUp.password.value;
    let confirmpsw = document.forms.signUp.confirmpsw.value;
    let regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
    if(name ==""||regname.test(name)){
        alert("Please enter a valid name");
        name.focus();
        return false;
    }
    if(email ==""||regemail.test(email)){
        alert("Please enter a valid name");
        email.focus();
        return false;
    }
    if(password ==""||regpassword.test(password)){
        alert("Please enter a valid name");
        password.focus();
        return false;
    }
    if(confirmpsw ==""||regconfirmpsw.test(confirmpsw)){
        alert("Please enter a valid name");
        confirmpsw.focus();
        return false;
    }
}

function homeRed(){
    window.location.href="../Home/home.html"
}
