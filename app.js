const numberButtons = document.querySelectorAll(".btn");
const active = document.querySelector(".active");
const submitBtn = document.querySelector(".submit");
const resultText = document.querySelector(".display-id");
const backNote = document.querySelector(".backNote");
const frontCard = document.querySelector(".frontCard");

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
//Rendering the selected value to BackNote after submit is pressed
submitBtn.addEventListener("click", () => {
    const btnSelected = document.querySelector(".btn-selected");
    let selectedValue = btnSelected.textContent;
    backNote.classList.add("show-card");
    frontCard.classList.add("hide-card");
    resultText.textContent = `You selected ${selectedValue} out of 5`;
});