function displayQuote(event) {
  event.preventDefault();
  let quoteOutput = document.querySelector("#quoteOutput");
  quoteOutput.innerHTML = "This is where the quote will go!";
}

let searchInput = document.querySelector("#form-input");
searchInput.addEventListener("submit", displayQuote);
