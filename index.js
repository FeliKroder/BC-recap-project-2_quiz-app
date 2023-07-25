// phew… not a lot going on here. Please add some code!

console.clear();

// TOGGLE BOOKMARK BUTTON
const bookmarkToggle = document.querySelector('[data-js="bookmark"]');

bookmarkToggle.addEventListener("click", () => {
  bookmarkToggle.classList.toggle("bookmark--active");
});

// ANSWER BUTTON
const showAnswerButton = document.querySelector('[data-js="button-answer"]');
const cardAnswer = document.querySelector('[data-js="card-answer"]');

showAnswerButton.addEventListener("click", () => {
  cardAnswer.classList.toggle("card__answer--active");
  showAnswerButton.textContent = cardAnswer.classList.contains("invisible")
    ? "Show answer"
    : "Hide answer";
  // wie mache ich nach dem 1. "hide answer" dann wieder "show answer"??
});
