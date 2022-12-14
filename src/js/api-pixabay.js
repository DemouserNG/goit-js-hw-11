import axios from 'axios';

   const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '31953221-a38c3b213a2db269dddf8e264';
    const filter = 'image_type=photo&orientation=horizontal&safesearch=true';
    
    
    export default class NewsApiaServise  {
      
      constructor() {
    
    this.searchQuery = '';
    this.page = 1;

  }

 fetchPixbayPhotos() {
      //     try {
      //       const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${name}&${filter}&per_page=40&page=1`);
      //       const photo = await response.data;
      //       return photo;

      //     } catch (error) {
      //       console.log(error);
      //  };
    
        return fetch(`${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&${filter}&per_page=40&page=${this.page}`)
          .then(response => response.json())
          .then(data => {
            this.incrementPage();
            // console.log(this);
            return data.hits;
          });
    
      };
      
  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page =1
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;

  }
}