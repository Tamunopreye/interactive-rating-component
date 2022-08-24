const numberButtons = document.querySelectorAll(".btn");
const active = document.querySelector(".active");
const submitBtn = document.querySelector(".submit");
const resultText = document.querySelector(".display-id");
const resultCard = document.querySelector(".backNote");
const questionCard = document.querySelector(".frontCard");

// targetting the selected value
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        numberButtons.forEach((ifSelected) => {
            ifSelected.classList.remove("btn-selected")
        });
        button.classList.add("btn-selected");
        active.classList.remove("active")
    })
})
//Rendering selected value
submitBtn.addEventListener("click", () => {
    const btnSelected = document.querySelector(".btn-selected");
    let selectedValue = btnSelected.textContent;
    resultCard.classList.add("show-card");
    questionCard.classList.add("hide-card");
    resultText.textContent = `You selected ${selectedValue} out of 5`;
});