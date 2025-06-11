// UTILS: Reusable and exportable functions

// get local storage function to retrieve data
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// set data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}

// render with template function
export function renderWithTemplate(template, parentElement, data, callback) {
  parentElement.innerHTML = template;
  if (callback) {
    callback(data);
  }
}

// load the template function
async function loadTemplate(path) {
    const response = await fetch(path);
    const template = await response.text();
    return template;
}

// load the header and footer function, using the render with template and load template functions
export async function loadHeaderFooter() {
    
    const header = document.getElementById("main-header");
    const footer = document.getElementById("main-footer");

    const headerData = await loadTemplate("/partials/header.html");
    const footerData = await loadTemplate("/partials/footer.html");

    renderWithTemplate(headerData, header);
    renderWithTemplate(footerData, footer);
}