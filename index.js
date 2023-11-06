function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(res => res.json())
  .then(data => renderBooks(data));
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});


//function fetchBooks() {

// This line declares a JavaScript function named fetchBooks. This function will be responsible for fetching data from an external API.
// return fetch('https://anapioficeandfire.com/api/books')

// This line uses the fetch function to make an HTTP GET request to the specified URL, which is the API for books in the "An API of Ice and Fire." The function returns a promise that resolves to the response object.
// .then(res => res.json())

// This line chains a then method to the promise returned by fetch. It processes the response object by calling the json method on it, which parses the response body as JSON. This line ensures that the response data is converted from JSON to a JavaScript object.
// .then(data => renderBooks(data));

// After the JSON data has been extracted from the response, this line chains another then method. It calls the renderBooks function, passing the parsed JSON data as an argument. The renderBooks function will be responsible for displaying the books on the web page.