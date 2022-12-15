import './css/styles.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import NewsApiaServise from './js/api-pixabay';
import LoadMoreBtn from './js/btn-load-more';
import  renderPhotoCard  from "./js/render-function";

 
const searchForm = document.querySelector('#search-form');
const galleryCard = document.querySelector('.gallery');

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

    newsApiaServise.fetchPixbayPhotos()
        .then(photo => {
        if (photo.hits === 0) {
            Notify.failure('Sorry, there are no images matching your search query. Please try again.');
            loadMoreBtn.hide();
        }
            return;
        });
    
    loadMoreBtn.show();
    newsApiaServise.resetPage();
    clearHitsContainer(); 
    fetchHits();
  
};

function fetchHits() {
    loadMoreBtn.disable();

    newsApiaServise.fetchPixbayPhotos()
        .then(photo => {
            renderCard(photo);
            lightbox.refresh();
            loadMoreBtn.enable();
            newsApiaServise.incrementPage();
            
        })
    .then(totalHits => {
      const photoAll = document.querySelectorAll('a.gallery__image');
      console.log(photoAll);

      if (photoAll.length === totalHits) {
        loadMoreBtn.hide();
        Notify.warning(
          `We're sorry, but you've reached the end of search results. Please start a new search`);
      }

      return totalHits;
    });
    
};

function renderCard(photos) {
    const card = renderPhotoCard(photos);
    galleryCard.insertAdjacentHTML('beforeend', card);

};

function clearHitsContainer() {
    galleryCard.innerHTML = '';
};
