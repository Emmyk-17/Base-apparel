const input = document.querySelector(".feature");
const submit = document.querySelector(".image");
const errorMsg = document.querySelector(".error");
const image_before = window.getComputedStyle(submit, "::before");

submit.addEventListener("click" , function() {
    if(input.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        submit.style.setProperty("--beforeDisplay","none")
    }
    else {
        errorMsg.innerHTML = "Please enter Email address";
        input.style.border = "2px solid hsl(0, 93%, 68%)";
        submit.style.setProperty("--beforeDisplay","block")
    }
})