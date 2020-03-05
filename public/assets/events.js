window.onload = function() {
  let toggleAnswer = document.getElementById("toggleAnswer");
  let answer = document.getElementById("answer");

  toggleAnswer.onclick = function() {
    const isVisible = answer.classList.toggle("visible")
    if (isVisible) {
      toggleAnswer.innerHTML = "<em>Hide Answer</em>";
    } else {
      toggleAnswer.innerHTML = "Show Answer";
    }
  }
}