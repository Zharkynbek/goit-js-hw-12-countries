export default async function getCountries(countryName) {
    return fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(resp => resp.json())
        .catch(() => console.log('error'))
}
