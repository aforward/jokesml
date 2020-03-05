window.onload = function() {
  let toggleAnswer = document.getElementById("toggleAnswer");
  let question = document.getElementById("question");
  let answer = document.getElementById("answer");

  let showJoke = (joke) => {
    question.innerHTML = joke.question;
    answer.innerHTML = joke.answer;
  };

  let nextJoke = () => {
    const joke = {
      question: "What do you call a cow with no legs?",
      answer: "Ground beef.",
    };
    showJoke(joke);
  };

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