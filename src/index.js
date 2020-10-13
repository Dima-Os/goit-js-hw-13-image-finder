import './scss/styles.scss';
import 'normalize.css';
import 'material-design-icons';
import renderSearchForm from './js/renderSearchForm';
import refs from './js/refs';
import apiService from './js/apiService';
import { debounce } from 'debounce';
// import notify from './js/notify';
import updateMarkup from './js/updateMarkup';

renderSearchForm();

const onInputHandler = event => {
  apiService.searchRequest = event.target.value;
  updateMarkup.clearMarkup();
  apiService.fecthImg().then(data => updateMarkup.appendMarkup(data));
};

refs.userInput.addEventListener('input', debounce(onInputHandler, 500));
