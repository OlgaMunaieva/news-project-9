// const key = { 'api-key': 'AKwAkjVAbzaYm1bK9yzcr2BnwjHsxavz' };
// const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

// const test = [
//   { id: 1, name: 'Apple' },
//   { id: 2, name: 'Banana' },
//   { id: 3, name: 'Kiwi' },
//   { id: 4, name: 'Lemon' },
// ];
// const storageTest = localStorage.setItem('test - key', JSON.stringify(test));

// const str = localStorage.getItem('test - key');

// const strParse = JSON.parse(str);

// let newStorage = [];

// function updateStorage(strParse) {
//   newStorage = strParse.reduce((acc, fruit) => {
//     if (fruit.id === 2) {
//       console.log('to e banan dlia mavp');
//       return acc;
//     }
//     acc.push(fruit);
//     return acc;
//   }, []);
// }
// updateStorage(strParse);
// console.log(newStorage);

const testDiv = document.querySelector('.test-div');

// function makeMarkUp(arr) {
//   const markUp = arr
//     .map(el => {
//       return `<h2>${el.id}</h2><div>${el.name}</div>`;
//     })
//     .join('');
//   testDiv.insertAdjacentHTML('beforeend', markUp);
//   localStorage.setItem('test - key', JSON.stringify(newStorage));
// }

// makeMarkUp(newStorage);

// testDiv.addEventListener('click', onCLick);

// function onCLick(evt) {
//   console.log(evt.target.closest('div').dataset.name);
//   const testTakeId = evt.target.closest('div');
//   console.log(testTakeId.dataset.name);
// }

import axios from 'axios';
const ENDPOINT = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json';
const API_KEY = 'mc1GG2VGT2VGMPz3mpzlHGRmnyjAqbuI';

// const newsWrapper = document.querySelector('.news-container');

async function getNews() {
  try {
    const url = `${ENDPOINT}?api-key=${API_KEY}`; //фінально сформований урл запит на сервер

    const response = await axios.get(url); //отримання респонсу з сервера
    console.log(response.data.results);

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

function updateNewsList(markup) {
  testDiv.innerHTML = markup;
}

getNews()
  .then(({ results }) => {
    return results.reduce(
      (markup, result) => createMarkup(result) + markup,
      ''
    );
  })
  .then(updateNewsList);

function createMarkup({
  title,
  media,
  section,
  id,
  abstract,
  published_date,
  url,
}) {
  return `<div class="news-card" data-id="${id}"> 
        <div class="image-container">
          <div class="image-category">
            <img src="${media[0]['media-metadata'][2].url}" alt="News image">
            <div class="category-container">
               <span class="category">${section}</span>
             </div>
          </div>
          <button type="button" ">Add to favorite</button>
        </div>
        <div class="content-container">
          <h3 class="content-title">${title}</h3>
          <p class="content-text">${abstract}</p>
          <div class="card-bottom">
            <p class="content-date">${published_date}</p>
            <a href="${url}">Read more</a>
          </div>
        </div>
      </div>`;
}
testDiv.addEventListener('click', onClick);

function onClick(evt) {
  const testTakeId = evt.target.closest('div.news-card');
  console.log(testTakeId.dataset.id);
}
