import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';
import NewsApiaServise from './api-pixabay';
import LoadMoreBtn from './btn-load-more';
import  renderPhotoCard  from "./render-function";

 
const searchForm = document.querySelector('#search-form');
const galleryCard = document.querySelector('.gallery');
// const loadMorBtn = document.querySelector('.load-more');


const loadMoreBtn = new LoadMoreBtn({
    selector: '.load-more',
    hidden: 'true'
});
const newsApiaServise = new NewsApiaServise();

searchForm.addEventListener('submit', onSubmitForm);
loadMoreBtn.refs.button.addEventListener('click', fetchHits);
  


function onSubmitForm(e) {
    e.preventDefault();

    loadMoreBtn.show();
    newsApiaServise.resetPage();

    newsApiaServise.query = e.currentTarget.elements.searchQuery.value;
    clearHitsContainer();
    fetchHits();

 
};

function fetchHits() {
       loadMoreBtn.disable();
    newsApiaServise.fetchPixbayPhotos()
        .then(hits => {
            renderCard(hits);
            loadMoreBtn.enable();
    });
}

function renderCard(photos) {
    const card = renderPhotoCard(photos);
    galleryCard.insertAdjacentHTML('beforeend', card);

};

function clearHitsContainer() {
    galleryCard.innerHTML = '';
};
