const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsItemsEl = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.innerText = ingredient;
  item.classList.add("item");
  return item;
});

const ingredientsEl = document.querySelector("#ingredients");
ingredientsEl.append(...ingredientsItemsEl);