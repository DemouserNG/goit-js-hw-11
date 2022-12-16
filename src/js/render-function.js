
export default function renderPhotoCard(photos) {
    const cardEl = photos.map(photo => {
      return `<div class="photo-card"><a href="${photo.largeImageURL}">
  <img src="${photo.webformatURL}" alt="${photo.tags}" loading="lazy" width="260"/></a>
  <div class="info">

  <div class="info-item-field">
    <p class="info-item">
      <b>Likes:</b> ${photo.likes}
    </p>
    <p class="info-item">
      <b>Views:</b> ${photo.views}
    </p>
    </div>

    <div class="info-wrap">
    <p class="info-item">
      <b>Comments:</b> ${photo.comments}
    </p>
    <p class="info-item">
      <b>Downloads:</b> ${photo.downloads}
    </p>
 </div>
  </div>
</div>`

    })
        .join('');
    
    return cardEl;
};



