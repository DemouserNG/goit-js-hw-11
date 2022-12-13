
export default function renderPhotoCard(photos) {
    const cardEl = photos.map(photo => {
        return `<div class="photo-card">
  <img src="${photo.webformatURL} " alt="" loading="lazy" width="360" />
  <div class="info">
    <p class="info-item">
      <b>Likes ${photo.likes}</b>
    </p>
    <p class="info-item">
      <b>Views ${photo.views}</b>
    </p>
    <p class="info-item">
      <b>Comments ${photo.comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads ${photo.downloads}</b>
    </p>
  </div>
</div>`

    })
        .join('');
    
    return cardEl;
};


