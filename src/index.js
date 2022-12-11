import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';
import API from './api-photo';
import  renderPhotoCard  from "./render-function";

 
const searchForm = document.querySelector('#search-form');
const galleryCard = document.querySelector('.gallery');

searchForm.addEventListener('submit', onSubmitForm);
  

function onSubmitForm(e) {
    e.preventDefault();

    const inputValue = searchForm.elements.searchQuery.value;
    // console.log(inputValue); 
    API.fetchPhotos(inputValue)
        .then(onFormSearch);
   
};


function onFormSearch(photos) {
    renderCard(photos);
}

function renderCard(photos) {
    const card = renderPhotoCard(photos);
    galleryCard.insertAdjacentHTML('beforeend', card);
}
