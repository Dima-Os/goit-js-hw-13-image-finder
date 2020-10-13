import notify from './notify';

export default {
  apiKey: '18695501-5acbf60d27f3b96795a230f12',
  URL: 'https://pixabay.com/api/',
  searchRequest: null,
  currentPage: 1,
  fecthImg() {
    return fetch(
      `${this.URL}?key=${this.apiKey}&image_type=photo&orientation=horizontal&q=${this.searchRequest}&page=${this.currentPage}&per_page=12`,
    )
      .then(responce => {
        if (responce.ok) {
          return responce.json();
        }
      })
      .then(({ hits, total }) => {
        if (total === 0) {
          console.log('результатов 0');
        }
        return hits;
      })
      .catch(error => {
        notify.error(error);
      });
  },
};
