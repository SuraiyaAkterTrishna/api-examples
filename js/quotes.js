const loadQuotes = () => {
    const url = 'https://api.kanye.rest/';
    fetch(url)
    .then(res => res.json())
    .then(data => displayQuotes(data));
};
const displayQuotes = (quotes) => {
    console.log(quotes);
}
loadQuotes();