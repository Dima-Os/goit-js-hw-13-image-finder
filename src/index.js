import './scss/styles.scss';
import 'normalize.css';
import 'material-design-icons';
import 'basiclightbox/dist/basicLightbox.min.css';
import renderSearchForm from './js/renderSearchForm';
import refs from './js/refs';
import apiService from './js/apiService';
import { debounce } from 'debounce';
import notify from './js/notify';
import updateMarkup from './js/updateMarkup';
import createLoadMoreBtn from './js/createLoadMoreBtn';

renderSearchForm();

const onInputHandler = event => {
  apiService.searchRequest = event.target.value;
  apiService.resetPage();
  updateMarkup.clearMarkup();
  if (apiService.searchRequest === '') {
    notify.noticeEmpty();
    updateMarkup.clearMarkup();
    return;
  }
  apiService.fecthImg().then(({ hits, total }) => {
    updateMarkup.appendMarkup(hits);
    if (total > 12) {
      createLoadMoreBtn();
      refs.loadMoreBtn.addEventListener('click', onLoadMoreHandler);
    }
  });
};

const onLoadMoreHandler = () => {
  apiService.fecthImg().then(({ hits }) => {
    console.log(hits.length);
    if (hits.length < 12) {
      refs.loadMoreBtn.remove();
    }
    updateMarkup.appendMarkup(hits);
    window.scrollTo(0, document.documentElement.offsetHeight);
  });
};

refs.userInput.addEventListener('input', debounce(onInputHandler, 500));
