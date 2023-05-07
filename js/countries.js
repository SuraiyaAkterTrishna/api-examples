const loadCountries = () => {
    const url = 'https://restcountries.com/v3.1/all';
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountries(data));
};
const displayCountries = (countries) => {
    /* for (const country of countries) {
        console.log(country);
    } */
    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            <h3>Name: ${country.name.common}</h3>
            <p>Capital: ${country.capital ? country.capital[0] : 'No capital'}</p>
        `;
        countriesContainer.appendChild(countryDiv);
    })
}
loadCountries();