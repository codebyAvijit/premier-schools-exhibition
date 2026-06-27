import "./ImageCollage.css";

import { heroImages } from "../../../../../constants/heroImages";

const ImageCollage = () => {
  return (
    <div className="image-collage">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`image-collage__item image-collage__item--${index + 1}`}
        >
          <img src={image} alt={`Student ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageCollage;
