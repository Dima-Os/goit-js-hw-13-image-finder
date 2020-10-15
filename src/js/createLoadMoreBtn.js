import refs from './refs';

export default () => {
  if (refs.body.lastElementChild.nodeName !== 'BUTTON') {
    const loadMoreBtn = document.createElement('button');
    loadMoreBtn.classList.add(
      'button',
      'btn',
      'btn-primary',
      'btn-lg',
      'btn-block',
    );
    loadMoreBtn.setAttribute('type', 'button');
    loadMoreBtn.textContent = 'load more...';
    refs.body.insertAdjacentElement('beforeend', loadMoreBtn);
    refs.loadMoreBtn = document.querySelector('.button');
  }
};

// btn btn-primary btn-lg btn-block
