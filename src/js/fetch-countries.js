export default async function getCountries(countryName) {
  return fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
    .then(resp => resp.json())
    .catch(() => console.log('error'));
}

// ======================== with axios ================================

// import axios from 'axios';
// export default async function getCountries(countryName) {
//   return axios
//     .get(`https://restcountries.eu/rest/v2/name/${countryName}`)
//     .then(resp => resp.data)
//     .catch(error => console.log(error));
// }
