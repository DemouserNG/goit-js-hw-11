import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';
import NewsApiaServise from './js/api-pixabay';
import LoadMoreBtn from './js/btn-load-more';
import  renderPhotoCard  from "./js/render-function";

 
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
            
            // if (hits.total === 0) {
            //     loadMoreBtn.hide();
            //     Notify.info('Sorry, there are no images matching your search query. Please try again.');
            // };

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
