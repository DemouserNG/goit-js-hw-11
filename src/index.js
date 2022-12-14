import './css/styles.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
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

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

searchForm.addEventListener('submit', onSubmitForm);
loadMoreBtn.refs.button.addEventListener('click', fetchHits);
  


function onSubmitForm(e) {
    e.preventDefault();
    
    newsApiaServise.query = e.currentTarget.elements.searchQuery.value;

    loadMoreBtn.show();
    newsApiaServise.resetPage();
    clearHitsContainer(); 
    fetchHits();
  
};

function fetchHits() {
    loadMoreBtn.disable();

    newsApiaServise.fetchPixbayPhotos()
        .then(hits => {
            renderCard(hits);
            lightbox.refresh();
            loadMoreBtn.enable();
            newsApiaServise.incrementPage();
    })   
             
 };

function renderCard(photos) {
    const card = renderPhotoCard(photos);
    galleryCard.insertAdjacentHTML('beforeend', card);

};

function clearHitsContainer() {
    galleryCard.innerHTML = '';
};
