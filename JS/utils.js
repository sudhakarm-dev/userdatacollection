// This function is to remove the warning message and back to main content
const removescreen = document.getElementById("warn-container");
const container = document.getElementById("container");
const removeWrapper = document.getElementById("warn-container-wrapper");
const handle = document.getElementById("handle");
function removeWarnScreen(){
    handle.style.top = "-20px";
    removeWrapper.classList.add("animate");
    setTimeout(()=>{
        removescreen.style.display = "none";
        container.style.display = "block";
    },2000);
}


// Function to move the signin and signup
const signUp = document.getElementById("signupBtn");
const signIn = document.getElementById("signinBtn");
const signinCard = document.getElementById("signinCard");
const signupCard = document.getElementById("signupCard");

signUp.addEventListener('click',(e)=>{
    e.preventDefault();
    signinCard.style.left = "-100%";
    signupCard.style.left = "0%";
});

signIn.addEventListener('click',(e)=>{
    e.preventDefault();
    signupCard.style.left = "100%";
    signinCard.style.left = "0%";
});