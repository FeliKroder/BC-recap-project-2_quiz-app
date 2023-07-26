console.clear();

const form = document.querySelector('[data-js="form"]');
const cardContainer = document.querySelector('[data-js="card-container"]');

// CREATE NEW CARDS
// USING INPUT VALUES

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  // CREATE ELEMENT
  const cardTaglist1 = document.createElement("ul");
  const newCard = document.createElement("li");
  const cardArticle = document.createElement("article");
  const cardQuestion = document.createElement("h2");
  const cardButton = document.createElement("button");
  const cardAnswer = document.createElement("p");
  const cardTagList2 = document.createElement("ul");
  const cardTagListItem = document.createElement("li");

  // ADD CSS
  cardTaglist1.classList.add("card-list");
  newCard.classList.add("card-list__item");
  cardArticle.classList.add("card");
  cardQuestion.classList.add("card__question");
  cardButton.classList.add("card__button-answer");
  cardAnswer.classList.add("card__answer");

  // APPEND CARD
  cardContainer.append(cardTaglist1);
  cardTaglist1.append(
    newCard,
    cardArticle,
    cardQuestion,
    cardButton,
    cardAnswer
  );
});
