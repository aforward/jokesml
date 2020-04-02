window.onload = function() {
  let toggleAnswer = document.getElementById("toggleAnswer");
  let question = document.getElementById("question");
  let answer = document.getElementById("answer");

  let showJoke = (joke) => {
    question.innerHTML = joke.question;
    answer.innerHTML = joke.answer;
  };

  let nextJoke = () => {
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
      let me = this;
      if (me.readyState != 4) { return; }
      if (me.status != 200) { return ; }

      const joke = JSON.parse(me.responseText);
      showJoke(joke);
    };

    xhttp.open("GET", "api.php", true);
    xhttp.send();
  }

  nextJoke();

  toggleAnswer.onclick = function() {
    const isVisible = answer.classList.toggle("visible")
    if (isVisible) {
      toggleAnswer.innerHTML = "<em>Next Joke</em>";
      nextJoke();
    } else {
      toggleAnswer.innerHTML = "Show Answer";
    }
  }
}