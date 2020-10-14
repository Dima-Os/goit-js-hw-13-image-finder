import './scss/styles.scss';
import 'normalize.css';
import 'material-design-icons';
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
  if (!apiService.searchRequest) {
    notify.noticeEmpty();
    return;
  }
  apiService.resetPage();
  updateMarkup.clearMarkup();
  apiService.fecthImg().then(({ hits, total }) => {
    updateMarkup.appendMarkup(hits);
    if (total > 12) {
      createLoadMoreBtn();
      refs.loadMoreBtn.addEventListener('click', onLoadMoreHandler);
    }
  });
};

const onLoadMoreHandler = () => {
  // window.scrollTo({
  //   top: document.documentElement.offsetHeight,
  //   behavior: 'smooth',
  // });
  apiService.fecthImg().then(({ hits }) => updateMarkup.appendMarkup(hits));
  console.log(document.documentElement.offsetHeight);
};

refs.userInput.addEventListener('input', debounce(onInputHandler, 500));
