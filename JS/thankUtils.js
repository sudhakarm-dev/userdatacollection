// Hiding side panel
const closeBtn1 = document.getElementById("closeBtn1");
const sidePanel = document.getElementById("sidePanel");

closeBtn1.onclick = function(){
    sidePanel.style.display = "none";
}

// Showing Notification panel

const notificationIcon = document.getElementById("notificationIcon");
notificationIcon.onclick = function(){
    sidePanel.style.display = "flex";
}

// Update Kyc button
const kycBtn = document.getElementById("updateKYC");
const closeBtn2 = document.getElementById("closeBtn2");
const kycCard = document.getElementById("kyc-container");

kycBtn.onclick = function(){
    kycCard.style.display = "block";
}
closeBtn2.onclick = function(){
    kycCard.style.display = "none";
}

// changeing page title
let User = "John";
document.title = `Hi ${User}`;