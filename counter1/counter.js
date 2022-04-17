let shomar = 0;
const counter = document.querySelector("#value");
const button = document.querySelectorAll(".btn");
console.log(button);

button.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      shomar--;
    } else if (styles.contains("increase")) {
      shomar++;
    } else {
      shomar = 0;
    }
    if (shomar > 0) {
      counter.style.color = "green";
    } else if (shomar < 0) {
      counter.style.color = "red";
    } else {
      counter.style.color = "black";
    }
    counter.textContent = shomar;
  });
});
