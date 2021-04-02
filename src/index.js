
import './styles.css';
import getCountries from './js/fetch-countries'
import  { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import debounce from 'lodash.debounce';
import refs from './js/refs'


function createMarkup(e) {
    const query = e.target.value
    getCountries(query)
        .then(data => {
            if (data.length > 1 && data.length <= 10) {
                const markup = data.map(({ name }) => `<li>${name}</li>`).join('')
                refs.countriesList.innerHTML = ''
                refs.countriesList.insertAdjacentHTML('beforeend', markup)
            }
            else if (data.length === 1) {
                console.log(data);
                const languages = data[0].languages.map(({ name }) => `<li>${name}</li>`).join('')
                const markup = data.map(({ name, flag, capital, population}) => {
                    return `<li class="countryList">
                    <h1>${name}</h1>
                    <div class="img"><img src="${flag}" width="280"></div>
                    <p>Capital: ${capital}</p>
                    <p>Population: ${population}</p>
                    <p>Languages:</p>
                    <ul>${languages}</ul>
                    </li>`
                }).join('')
                refs.countriesList.innerHTML = ''
                refs.countriesList.insertAdjacentHTML('beforeend', markup)
                
            }
            else if (data.length > 10) {
                refs.countriesList.innerHTML = ''
                error({
                    text: "Too many matches found. Please enter a more specific query!",
                delay: 2000,
                })
            }
            else {
                error({
                text: "Too many matches found!",
                delay: 2000,
                })
            }
        })
}

refs.input.addEventListener('input', debounce(createMarkup, 500))
