import refs from './refs';
import galeryItemTemplate from '../templates/galeryItemTemplate.hbs';
export default {
  clearMarkup() {
    refs.list.innerHTML = '';
  },
  appendMarkup(data) {
    refs.list.insertAdjacentHTML('beforeend', galeryItemTemplate(data));
  },
};
