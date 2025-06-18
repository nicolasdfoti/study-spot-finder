// MAIN JS: Adds functionality to the general index

import { loadHeaderFooter } from "./utils.mjs";
import { loadAndStoreSpots, loadBooks } from "./externalServices.mjs";

document.addEventListener("DOMContentLoaded", async () => {
    await loadHeaderFooter();
    await loadAndStoreSpots();
})

async function showBooks() {

  const data = await loadBooks();
  const booksContainer = document.getElementById("books-container");

  data.items.slice(0, 3).forEach(book => {
    const info = book.volumeInfo;

    const div = document.createElement("div");
    div.classList.add("books");
    div.innerHTML = `
      <h4>${info.title}</h4>
      <p>${info.authors?.join(", ") || "Unknown author"}</p>
      <p>${info.description?.substring(0, 100) || "No description"}</p>
    `;

    booksContainer.appendChild(div);
  });
}

showBooks();