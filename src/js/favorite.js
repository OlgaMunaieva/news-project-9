const key = { 'api-key': 'AKwAkjVAbzaYm1bK9yzcr2BnwjHsxavz' };
const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

const test = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Kiwi' },
  { id: 4, name: 'Lemon' },
];
const storageTest = localStorage.setItem('test - key', JSON.stringify(test));

const str = localStorage.getItem('test - key');

const strParse = JSON.parse(str);

let newStorage = [];

function updateStorage(strParse) {
  newStorage = strParse.reduce((acc, fruit) => {
    if (fruit.id === 2) {
      console.log('to e banan dlia mavp');
      return acc;
    }
    acc.push(fruit);
    return acc;
  }, []);
}
updateStorage(strParse);
console.log(newStorage);

const testDiv = document.querySelector('.test-div');

function makeMarkUp(arr) {
  const markUp = arr
    .map(el => {
      return `<h2>${el.id}</h2><div>${el.name}</div>`;
    })
    .join('');
  testDiv.insertAdjacentHTML('beforeend', markUp);
  localStorage.setItem('test - key', JSON.stringify(newStorage));
}

makeMarkUp(newStorage);

testDiv.addEventListener('click', onCLick);

function onCLick(evt) {
  console.log(evt.target.closest('div').dataset.name);
  const testTakeId = evt.target.closest('div');
  console.log(testTakeId.dataset.name);
}
