export { addRemoveToLocalStorage, updateStorage };

function addRemoveToLocalStorage(evt) {
  if (localStorage.getItem('cards') === null) {
    localStorage.setItem('cards', '[]');
  }

  if (evt.target.tagName !== 'BUTTON') {
    return;
  }

  btnAddtoStorage = evt.target;
  const btnDivID = evt.target.closest('li.list-news__item').dataset.id;

  if (evt.target.hasAttribute('checked')) {
    btnAddtoStorage.removeAttribute('checked');

    let storage = localStorage.getItem('cards');
    const parseStorage = JSON.parse(storage);
    updateStorage(parseStorage, btnDivID);
    return;
  }

  btnAddtoStorage.setAttribute('checked', true);

  const choosenCardID = evt.target.closest('li.list-news__item').dataset.id;
  const choosenCardImg = evt.target.closest('div');
  const imageUrl = choosenCardImg.childNodes[1].src;
  const section = choosenCardImg.childNodes[3].textContent;
  const titleDiv = evt.target.closest('article');
  const title = titleDiv.childNodes[3].textContent;
  const abstract = titleDiv.childNodes[5].textContent;
  const published_date = titleDiv.childNodes[7].childNodes[1].textContent;
  const url = titleDiv.childNodes[7].childNodes[3].href;

  let storage = localStorage.getItem('cards');

  // додаємо елемент
  const params = {
    id: choosenCardID,
    imageUrl: imageUrl,
    section: section,
    title: title,
    abstract: abstract,
    published_date: published_date,
    url: url,
  };

  const parseStorage = JSON.parse(storage);
  parseStorage.push(params);
  const strStorage = JSON.stringify(parseStorage);
  localStorage.setItem('cards', strStorage);
}

// _____

function updateStorage(parseStorage, btnDivID) {
  const newStorage = parseStorage.reduce((acc, card) => {
    if (card.id === btnDivID) {
      return acc;
    }
    acc.push(card);
    return acc;
  }, []);
  const strStorage = JSON.stringify(newStorage);
  localStorage.setItem('cards', strStorage);
}
