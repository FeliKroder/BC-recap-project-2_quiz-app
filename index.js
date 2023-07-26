// phew… not a lot going on here. Please add some code!

console.clear();

// TOGGLE BOOKMARK BUTTON
const bookmarkToggle = document.querySelector('[data-js="bookmark"]');

bookmarkToggle.addEventListener("click", () => {
  bookmarkToggle.classList.toggle("bookmark--active");
});

// SHOW/HIDE ANSWER BUTTON
const showAnswerButton = document.querySelector('[data-js="button-answer"]');
const cardAnswer = document.querySelector('[data-js="card-answer"]');

showAnswerButton.addEventListener("click", () => {
  cardAnswer.classList.toggle("card__answer--active");
  showAnswerButton.textContent = showAnswerButton.classList.toggle(
    "card__answer--active"
  )
    ? "Hide answer"
    : "Show answer";
});

//
