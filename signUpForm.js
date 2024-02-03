function onChange(){
    var pass1=document.querySelector("input[name=userPassword]")
    var pass2=document.querySelector("input[name=userConfirmPassword]")
    var error=document.getElementById("error")
    if (pass1.value==pass2.value){
        pass2.setCustomValidity('')
        pass1.style.border='1px solid green'
        pass2.style.border='1px solid green'
        pass1.innerHTML=''
        valid=true
        error.innerHTML= ""
    }
    else{
        
        pass1.style.border='1px solid red'
        pass2.style.border='1px solid red'
        error.innerHTML= "<span style='color: red;'>"+
        "*Passwords do not match</span>"
        pass2.setCustomValidity('Passwords do not match')
    }
}