import { useState } from "react";
import img1 from "../assets/gallery/delivery-unloading.jpg";
import img2 from "../assets/gallery/delivery-handoff.jpg";
import img3 from "../assets/gallery/delivery-carrying.jpg";
import img4 from "../assets/gallery/delivery-neighborhood.jpg";
import img5 from "../assets/gallery/delivery-packages.jpg";
import img6 from "../assets/gallery/supplies-shop.jpg";
import img7 from "../assets/gallery/supplies-packing.jpg";
import img8 from "../assets/gallery/backpack-distribution.jpg";
import ren1 from "../assets/gallery/renovation-1.jpg";
import ren2 from "../assets/gallery/renovation-2.jpg";
import ren3 from "../assets/gallery/renovation-3.jpg";
import ren4 from "../assets/gallery/renovation-4.jpg";
import ren5 from "../assets/gallery/renovation-5.jpg";
import ren6 from "../assets/gallery/renovation-6.jpg";
import ren7 from "../assets/gallery/renovation-7.jpg";
import { useLanguage } from "../context/LanguageContext";

const IMAGES = [
  { img: img1, title: "Community Impact" },
  { img: img2, title: "Direct Assistance" },
  { img: img3, title: "Local Support" },
  { img: img4, title: "Real Change" },
  { img: img5, title: "Active Relief" },
  { img: img6, title: "Resource Distribution" },
  { img: img7, title: "Dedicated Team" },
  { img: img8, title: "Meaningful Help" },
  { img: ren1, title: "School Renovation" },
  { img: ren2, title: "Infrastructure" },
  { img: ren3, title: "Team Work" },
  { img: ren4, title: "Classroom Setup" },
  { img: ren5, title: "Building Progress" },
  { img: ren6, title: "Foundation Work" },
  { img: ren7, title: "Facility Improvement" },
];

function Gallery() {
  const { t } = useLanguage();
  const [imagesToDisplay, setImagesToDisplay] = useState(9);
  const displayedImages = IMAGES.slice(0, imagesToDisplay);
  const hasMore = imagesToDisplay < IMAGES.length;

  const handleShowMore = () => {
    setImagesToDisplay(imagesToDisplay + 3);
  };

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="gallery__header">
          <p className="gallery__tagline">{t.gallery.title}</p>
          <h2 className="gallery__title">{t.gallery.lede}</h2>
        </div>

        <div className="gallery__grid">
          {displayedImages.map((item, idx) => (
            <div key={idx} className="gallery-card">
              <img src={item.img} alt={item.title} loading="lazy" />
              <div className="gallery-card__overlay">
                <h3 className="gallery-card__title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="gallery__load-more">
            <button className="btn btn--solid" onClick={handleShowMore}>
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Gallery;
