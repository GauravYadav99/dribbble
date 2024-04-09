

// Services Page

const checkCircles = document.querySelectorAll(".check-circle");
const optionCards = document.querySelectorAll(".option-card");
const cardTexts = document.querySelectorAll(".option-card p");
const wrappers = document.querySelectorAll(".card-wrapper");
const multiInfo = document.querySelector(".multiple-info");
const finishBtn = document.querySelector(".finish-btn button")
const pressReturn = document.querySelector(".press-return");

wrappers.forEach((wrapper,index) => {
    wrapper.addEventListener("click", () => {
        if (cardTexts[index].style.display === "none") {
            cardTexts[index].style.display = "block";
            multiInfo.style.visibility = "visible";
            pressReturn.style.visibility = "visible";
            finishBtn.disabled = false;
        } else {
            cardTexts[index].style.display = "none";
            multiInfo.style.visibility = "hidden";
            pressReturn.style.visibility = "hidden";
            finishBtn.disabled = true;
        }
        optionCards[index].classList.toggle("pink-border");
        wrapper.classList.toggle("move-up");
        checkCircles[index].classList.toggle("pink-background");
    })
});

// Profile Page

const locationInput = document.getElementById("locationInput");
const nextBtn = document.getElementById("nextBtn");
const fileInput = document.getElementById("fileInput");
const pressReturnProfile = document.querySelector(".press-return-profile");


function dropHandler(event) {
    event.preventDefault();
    handleFileSelect(event);
}

function dragOverHandler(event) {
    event.preventDefault();
}

function handleFileSelect(event) {
    const files = event.target.files || event.dataTransfer.files;

    if (files.length > 0) {
        const file = files[0];

        if (file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onload = function (e) {
                const preview = document.getElementById('preview');
                preview.src = e.target.result;
                preview.style.display = 'block';
                preview.style.border = 'none';
            };

            reader.readAsDataURL(file);
        } else {
            alert('Please select only image files.');
        }
    }
    checkInputs();
}

function checkInputs() {
    if (fileInput.files.length > 0 && locationInput.value.trim() !== '') {
        nextBtn.removeAttribute('disabled');
        pressReturnProfile.style.visibility = "visible";
    } else {
        nextBtn.setAttribute('disabled', 'disabled');
        pressReturnProfile.style.visibility = "hidden";
    }
}

fileInput.addEventListener('change', checkInputs);
locationInput.addEventListener('input', checkInputs);


