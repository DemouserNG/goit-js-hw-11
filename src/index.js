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
    API.fetchPhotos(inputValue).then(onFormSearch);
   
};


function onFormSearch(photos) {
    renderCard(photos);
}

function renderCard(photos) {
    const card = renderPhotoCard(photos);
    galleryCard.insertAdjacentHTML('beforeend', card);
}





// function onInputSearch(e) {
//     e.preventDefault();

//     const query = inputSearch.value.trim();
    
    

//     API.fetchCountries(query)
//         .then(onfetchSearch)
//         .catch(onfetchError); 
// };

// function onfetchSearch(countries) {

//      if (countries.length > 10) {
                
//                 Notify.info("Too many matches found. Please enter a more specific name.");
//                 onClearRender();

//             } else if (countries.length >= 2 && countries.length <= 10) {

//                 renderList(countries);
//                 cardCountry.innerHTML = '';
        
//             } else if (countries.length === 1) {
                
//                 renderCard(countries);
//                 listCountry.innerHTML = '';
//     }
// };


// function renderList(countries) {
//     const list = renderCountryList(countries);
//     listCountry.insertAdjacentHTML('beforeend', list);
// }

// function renderCard(countries) {
//     const card = renderCountryCard(countries);
//     cardCountry.insertAdjacentHTML('beforeend', card);
    
// }

// function onfetchError(error) {
//     Notify.failure("Oops, there is no country with that name");
//     onClearRender();
    
// }

// function onClearRender() {
//     listCountry.innerHTML = '';
//     cardCountry.innerHTML = '';
// };
