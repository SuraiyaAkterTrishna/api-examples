const loadQuotes = () => {
    const url = 'https://api.kanye.rest/';
    fetch(url)
    .then(res => res.json())
    .then(data => displayQuotes(data));
};
const displayQuotes = (quote) => {
    const quoteContainer = document.getElementById('quotes-container');
    const p = document.createElement('p');
    p.innerText = quote.quote;
    quoteContainer.appendChild(p);
};