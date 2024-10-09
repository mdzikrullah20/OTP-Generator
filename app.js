function generateOTP(){
    let OTP = Math.floor(100000 + Math.random()*900000)
    document.getElementsByClassName("otpNum")[0].innerText = `${OTP}`
}
document.querySelector(".genOtp").addEventListener("click",generateOTP)