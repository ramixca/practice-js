// Generate Quotes from API 

let apiQuotes = [];

// FUNCTION TO SHOW NEW QUOTE
function newQuote() {
    // math.floor to round down to nearest whole number
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote)
}

async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        alert(error);
        // Catch Error Here
    }
}

getQuotes();