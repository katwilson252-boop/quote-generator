const quotes = [
    { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
    { text: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
    { text: "If you can dream it, you can do it.", author: "Zig Ziglar" },
    { text: "I'm not arguing, I'm just explaining why I'm right.", author: "Anonymous" },
    { text: "Life is short. Smile while you still have teeth.", author: "Mallory Hopkins" },
    { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    { text: "Do something today that your future self will thank you for.", author: "Sean Patrick Flanery" }
];

const colors = ["#FFADAD", "#FFD6A5", "#FDFFB6", "#CAFFBF", "#9BF6FF", "#A0C4FF", "#BDB2FF", "#FFC6FF", "#FF9CEE"];

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const tweetBtn = document.getElementById("tweet-quote");
const body = document.body;

let currentQuote = {};

// Function to show random quote
function showQuote() {
    currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    quoteText.textContent = `"${currentQuote.text}"`;
    authorText.textContent = `— ${currentQuote.author}`;
    body.style.backgroundColor = randomColor;
}

// Function to tweet the current quote
function tweetQuote() {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${currentQuote.text}" — ${currentQuote.author}`)}`;
    window.open(tweetUrl, "_blank");
}

// Event listeners
newQuoteBtn.addEventListener("click", showQuote);
tweetBtn.addEventListener("click", tweetQuote);

// Show a quote on page load
window.onload = showQuote;
