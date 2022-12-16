/*
sign in variables
 */
function validateUser(){
    const login_username = document.getElementById('login-username');
    const login_password = document.getElementById('login-password');

    if (login_username.value === "1234" && login_password.value === "1234") {
        window.location.replace("../views/MainPage.html");
    }else{
        alert("Wrong user name or password");
    }
}



/*
    new user validation
 */
const form = document.getElementById('createAccount');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const username = document.getElementById('username');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    validate();
})

//check if new user is valid
const sendData = (usernameVal,sRate,count)=>{
    if(sRate===count){
        window.alert(`Hello ${usernameVal} you are registered successfully`)
    }
}

//count valid inputs
const Successmsg = (username)=>{
    let form = document.getElementsByClassName('form__input-group');
    var count = form.length - 1;
    for(var i = 0; i<form.length; i++){
        if(form[i].className === 'form__input-group.success'){
            var sRate = 0+i;
            console.log(sRate)
            sendData(username,sRate,count);
        }else{
            return false;
        }
    }
}


//sign up validation
function validate(){
    const firstnameVal = firstname.value.trim();
    const lastnameVal = lastname.value.trim();
    const usernameVal = username.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    let success = 0;

    //first name validation
    if(firstnameVal === ""){
        setErrorMsg(firstname, 'must enter first name');
    }else if(firstnameVal.length < 2){
        setErrorMsg(firstname, 'wrong first name');
    }else{
        success +=1;
        setSuccessMsg(firstname);
    }

    //last name validation
    if(lastnameVal === ""){
        setErrorMsg(lastname, 'must enter last name');
    }else if(lastnameVal.length < 2){
        setErrorMsg(lastname, 'wrong last name');
    }else{
        setSuccessMsg(lastname);
        success +=1;
    }

    //user name validation
    if(usernameVal === ""){
        setErrorMsg(username, 'must enter user name');
    }else if(usernameVal.length < 6){
        setErrorMsg(username, 'can not  be less than 6 characters');
    }else{
        setSuccessMsg(username);
        success +=1;
    }

    //password validation
    if(passwordVal === ""){
        setErrorMsg(password, 'must enter password');
    }else if(passwordVal.length < 6){
        setErrorMsg(password, 'can not  be less than 6 characters');
    }else{
        setSuccessMsg(password);
         success +=1;
    }

    //confirm password validation
    if(cpasswordVal === passwordVal){
        success +=1;
        setSuccessMsg(cpassword);
    } else{
        setErrorMsg(cpassword, 'passwords dont match');
    }
    if (success===5){
        loginForm.classList.remove("signup-form");
        createAccountForm.classList.add("signup-form");
        alert("User Created Successfully")
    }
}

//error message
function setErrorMsg(input, errormsgs){
    const form = input.parentElement;
    const small = form.querySelector('small');
    form.className = "form__input-group error"
    small.innerText = errormsgs;
}

//success message
function setSuccessMsg(input, errormsgs){
    const form = input.parentElement;
    form.className = "form__input-group success";
}



/*
    jump between login and sign up forms
 */
// document.addEventListener("DOMContentLoaded", () =>{
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e =>{
        e.preventDefault();
        loginForm.classList.add("signup-form");
        createAccountForm.classList.remove("signup-form");
    });

    document.querySelector("#linkLogin").addEventListener("click", e =>{
        e.preventDefault();
        loginForm.classList.remove("signup-form");
        createAccountForm.classList.add("signup-form");
    });
// });

