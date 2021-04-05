import './styles.css';
import refs from './js/refs.js';
import getCountries from './js/fetch-countries';
import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import debounce from 'lodash.debounce';

function oneGetCountry(data) {
  const languages = data[0].languages
    .map(({ name }) => `<li>${name}</li>`)
    .join('');
  const markup = data
    .map(({ name, flag, population, capital }) => {
      return `<li>
                    <h1>${name}</h1>
                    <img src="${flag}" alt="${name}" width="320">
                    <p>Capital: ${capital}</p>
                    <p>Population: ${population}</p>
                    <ul>${languages}</ul>
                    </li>`;
    })
    .join('');
  refs.countriesList.innerHTML = '';
  refs.countriesList.insertAdjacentHTML('beforeend', markup);
}

function createCountries(e) {
  const query = e.target.value;
  refs.countriesList.innerHTML = '';

  if (query.trim() !== '') {
    getCountries(query.trim()).then(data => {
      console.log(data);
      if (data.length > 1 && data.length <= 10) {
        const markup = data.map(({ name }) => `<li>${name}</li>`).join('');
        refs.countriesList.innerHTML = '';
        refs.countriesList.insertAdjacentHTML('beforeend', markup);
      } else if (data.length === 1) {
        oneGetCountry(data);
      } else if (data.length > 10) {
        error({
          text: 'too many matches found',
          delay: 2000,
        });
      } else {
        error({
          text: 'not found',
          delay: 2000,
        });
        refs.countriesList.innerHTML = '';
      }
    });
  }
}

refs.input.addEventListener('input', debounce(createCountries, 500));
