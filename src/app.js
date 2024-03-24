function showInProgress() {
  //show that the system is generating the quote
  quoteOutput.classList.remove("hidden");
  quoteOutput.innerHTML = "⏳ Generating your quote...";
  quoteOutput.classList.add("blink_me");
}

function getQuote(event) {
  event.preventDefault();

  //show working in progess for user experience
  showInProgress();

  //get AI answer
  let userQuery = document.querySelector("#search-input");
  let apiKey = "ad4b43cf6af0980of893btef5c61f2c7";
  let prompt = `User instructions: Generate a memorable quote about ${userQuery.value}`;
  let context = `You are a quote expert who loves writing memorable quotes. Your mission is to generate a concise and succinct quote that is appropriate for people of all ages. 
  Please ensure that your quote is written in a basic HTML programming language. Please make sure you ONLY return the quote in quotation marks and do NOT include the word 'html' in your response. 
  Make sure to follow the user instructions.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios(apiUrl).then(displayQuote);
}

function displayQuote(response) {
  quoteOutput.classList.remove("blink_me");
  let apiResponse = response.data.answer;
  console.log(apiResponse);
  new Typewriter("#quoteOutput", {
    strings: `${apiResponse}<blockquote class ="signature">written by<strong> SheCodes AI 🩷</strong></blockquote>`,
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

let searchInput = document.querySelector("#form-input");
let quoteOutput = document.querySelector("#quoteOutput");
searchInput.addEventListener("submit", getQuote);
