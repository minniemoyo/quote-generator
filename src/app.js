function getQuote(event) {
  event.preventDefault();
  let userQuery = document.querySelector("#search-input");
  let apiKey = "ad4b43cf6af0980of893btef5c61f2c7";
  let prompt = `User instructions: Generate a memorable quote about ${userQuery.value}`;
  let context = `You are a quote expert who loves writing memorable quotes. 
  Your mission is to generate a concise and succinct quote that is appropriate for people of all ages. 
  Please ensure that your quote is written in basic HTML and has quotation marks. Make sure to follow the user instructions.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios(apiUrl).then(displayQuote);
}

function displayQuote(response) {
  let apiResponse = response.data.answer;
  let quoteOutput = document.querySelector("#quoteOutput");
  quoteOutput.innerHTML = `${apiResponse}<blockquote class ="signature">written by<strong> SheCodes AI 🩷</strong></blockquote>`;
}

let searchInput = document.querySelector("#form-input");
searchInput.addEventListener("submit", getQuote);
