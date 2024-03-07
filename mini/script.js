// Generate Quotes from API 

const quoteContainer = document.getElementById('main-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('x-twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];


// LOADER FUNCTION
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// HIDE LOADER FUNCTION
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// FUNCTION TO SHOW NEW QUOTE
function newQuote() {
    loading();
    // math.floor to round down to nearest whole number
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // Check if Author field is blank and replace it with 'Unknown' copilot
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }
// TO REDUCE FONT SIZE FOR LONG QUOTES
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
    complete();
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



// X-TWITTER FUNCTION quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}


// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

getQuotes();