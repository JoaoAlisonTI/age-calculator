let userDay = document.getElementById("input-day").value;
let userMonth = document.getElementById("input-month").value;
let userYear = document.getElementById("input-year");
  
let buttonSubmit = document.getElementById("my-button");
let inputs = document.querySelectorAll("input");
let labels = document.querySelectorAll("label");

buttonSubmit.addEventListener("click", () => {
  
  if(userDay.value === "" || userMonth.value === "" || userYear.value === ""){
    errorFunction();
    console.log('error');
  } else {
    //ageCalculate();
    
    for (let i = 0; i < 3; i++) {
        inputs[i].style.borderColor = "hsl(0, 0%, 86%)";
        labels[i].style.color = "hsl(0, 1%, 44%)";
    }
  }
})

function errorFunction() {
  for (let i = 0; i < 3; i++) {
    inputs[i].style.borderColor = "red";
    labels[i].style.color = "red";
    }
}