const ask = document.querySelector(".btn");
const prnt = document.querySelector(".print");
let input = document.querySelector("input");
const answers = ["YES", "NO", "MAYBE", "IT WILL HAPPEN", "IT'S UNLIKELY TO HAPPEN", "PROBEBLY", "NEVER"]
ask.addEventListener("click", function () {

    if (input.value === "" || input.value == null) {
        prnt.innerHTML = "please fill the blank.";
    } else {
        prnt.innerHTML = "Your question : " + input.value.toLocaleUpperCase();
        let pick = Math.floor(Math.random() * answers.length);
        let random = answers[pick];
        prnt.innerHTML += "<br>" + "Your Answer : " + random;
        input.value = "";
    }
});