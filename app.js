fetch('https://restcountries.eu/rest/v2/all')
    .then(fas => fas.json())
    .then(data => displayCountries(data));

const displayCountries = countries => {
    const countriesDIv = document.getElementById('countries');
    countries.forEach(country => {
        // const country = countries[i];
        const countryDIv = document.createElement('div');
        countryDIv.className = 'country';
        const countryInfo = `
            <h3 class = "country-name"> ${country.name} </h3>
            <p> ${country.capital} </p>
            <button onclick="displayCountryDetail('${country.name}')"> button</button>
        `
        countryDIv.innerHTML = countryInfo;
        countriesDIv.appendChild(countryDIv);
    });
}
const displayCountryDetail = name =>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => renderCountryInfo( data[0] ));
}
const renderCountryInfo = country =>{
    console.log(country);
    const countryDIv =document.getElementById('country-info');
    countryDIv.innerHTML=`
        <h1> name : ${country.name} </h1>
        <p>population: ${country.population} </p>
        <p>area: ${country.area} </p>
        <img src="${country.flag}">
    `
}
 
