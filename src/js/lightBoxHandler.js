import * as basicLightbox from 'basiclightbox';

export default ev => {
  if (ev.target.nodeName === 'IMG') {
    const instance = basicLightbox.create(
      `<img src=${ev.target.dataset.source} width="800" height="600" class="bigImg">`,
    );
    instance.show();
  }
};
