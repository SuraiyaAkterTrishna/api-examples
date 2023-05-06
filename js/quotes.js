const loadQuotes = () => {
    const url = 'https://api.kanye.rest/';
    fetch(url)
    .then(res => res.json())
    .then(data => displayQuotes(data));
};
const displayQuotes = (quote) => {
    const blockquote = document.getElementById('quote');
    blockquote.innerText = quote.quote;
};