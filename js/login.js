document.getElementById("login-btn").addEventListener('click',function(){
//get email field
 const userEmailInput = document.getElementById("email-field");
//  console.log(userEmailInput.value);
    const userEmail = userEmailInput.value;
    // console.log(userEmail);
//get password field
    const userPassInput = document.getElementById("password-field");
    const userPassword = userPassInput.value;
    // console.log(userPassword);
if(userEmail =='rakib@gmail.com' && userPassword =='rakib1'){
    window.location.href ="banking.html"
}
else{
    window.location.href ="invalid.html"
}







//clear the  input field
    userEmailInput.value = '';
    userPassInput.value ='';
})