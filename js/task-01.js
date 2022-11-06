
const categoryItemsEl = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${categoryItemsEl.length} \n`);
categoryItemsEl.forEach((item) => {
  console.log(`Category: ${item.querySelector("h2").innerText}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
});