import refs from './refs';
import galeryItemTemplate from '../templates/galeryItemTemplate.hbs';
import 'basiclightbox/dist/basicLightbox.min.js';
import onClickHandler from './lightBoxHandler';
export default {
  clearMarkup() {
    refs.list.innerHTML = '';
    if (refs.loadMoreBtn) refs.loadMoreBtn.remove();
  },
  appendMarkup(data) {
    refs.list.insertAdjacentHTML('beforeend', galeryItemTemplate(data));
    refs.list.addEventListener('click', onClickHandler);
  },
};
