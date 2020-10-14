import refs from '../js/refs';

export default () => {
  const form = document.createElement('form');
  form.classList.add('search-form');
  form.setAttribute('id', 'search-form');
  const input = document.createElement('input');
  Object.assign(input, formAttributes);
  form.appendChild(input);
  refs.body.appendChild(form);
  refs.userInput = document.querySelector('#search-form > input');
  const list = document.createElement('ul');
  list.classList.add('gallery');
  list.classList.add('row');
  refs.body.insertAdjacentElement('beforeend', list);
  refs.list = document.querySelector('.gallery');
};

const formAttributes = {
  type: 'text',
  name: 'query',
  autocomplete: 'off',
  placeholder: 'Search images...',
};
