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
        // console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            <h3>Name: ${country.name.common}</h3>
            <p>Capital: ${country.capital ? country.capital[0] : 'No capital'}</p>
            <button onclick = "loadCountryDetails('${country.cca2}')">Country Details</button>
        `;
        countriesContainer.appendChild(countryDiv);
    })
};
const loadCountryDetails = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]))
}
const displayCountryDetails = (country) => {
    console.log(country);
    const detailsContainer = document.getElementById('country-details');
    detailsContainer.innerHTML = `
    <h3>Details: ${country.name.common}</h3>
    <img src= "${country.flags.png}">
    `;
}

loadCountries();