import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';
import NewsApiaServise from './api-photo';
import  renderPhotoCard  from "./render-function";

 
const searchForm = document.querySelector('#search-form');
const galleryCard = document.querySelector('.gallery');
const loadMorBtn = document.querySelector('.load-more');



const newsApiaServise = new NewsApiaServise();

searchForm.addEventListener('submit', onSubmitForm);
loadMorBtn.addEventListener('click', onLoadMore);
  


function onSubmitForm(e) {
    e.preventDefault();
    

    newsApiaServise.query = e.currentTarget.elements.searchQuery.value;
    newsApiaServise.resetPage();

    newsApiaServise.fetchPixbayPhotos()
    .then(hits => {
        clearHitsContainer();
        renderCard(hits);
    });
};

function onLoadMore() {
    newsApiaServise.fetchPixbayPhotos()
        .then(renderCard);
    
}


function renderCard(photos) {
    const card = renderPhotoCard(photos);
    galleryCard.insertAdjacentHTML('beforeend', card);

};

function clearHitsContainer() {
    galleryCard.innerHTML = '';
};
