import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '31953221-a38c3b213a2db269dddf8e264';
  

async function fetchPhotos(name) {

  const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=1`);
  // const photo = await response.json();
  return response;

};  

export default { fetchPhotos };