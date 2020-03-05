window.onload = function() {
  let toggleAnswer = document.getElementById("toggleAnswer");
  let question = document.getElementById("question");
  let answer = document.getElementById("answer");

  let showJoke = (joke) => {
    question.innerHTML = joke.question;
    answer.innerHTML = joke.answer;
  };

  let nextJoke = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState != 4) { return; }
      if (this.status != 200) { return ;}

      const joke = JSON.parse(this.responseText);
      showJoke(joke);
    };

    xhttp.open("GET", "api.php", true);
    xhttp.send();
  }

  nextJoke();

  toggleAnswer.onclick = function() {
    const isVisible = answer.classList.toggle("visible")
    if (isVisible) {
      toggleAnswer.innerHTML = "<em>Hide Answer</em>";
    } else {
      toggleAnswer.innerHTML = "Show Answer";
    }
  }
}