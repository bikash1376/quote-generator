let apiQuotes = []
// Get quotes from API

// Show new Quote
function newQuote() {
    const quote = apiQuotes[Math.floor(Math.random()* apiQuotes.length)];
    console.log(quote)
}


async function getQuotes() {
const apiUrl = "https://type.fit/api/quotes"

try {
    const response = await fetch(apiUrl)
    apiQuotes = await response.json();
    newQuote();
} catch(error) {

}
}
getQuotes();