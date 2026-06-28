import "./Gallery.css";

import galleryFrame from "../../../assets/images/gallery/galleryFrame.png";

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="container">
        <h2 className="gallery__title">Gallery</h2>
      </div>

      <img
        src={galleryFrame}
        alt="Premier Schools Exhibition Gallery"
        className="gallery__frame"
      />
    </section>
  );
};

export default Gallery;
