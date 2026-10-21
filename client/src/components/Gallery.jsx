import img1 from "../assets/gallery/delivery-unloading.jpg";
import img2 from "../assets/gallery/delivery-handoff.jpg";
import img3 from "../assets/gallery/delivery-carrying.jpg";
import img4 from "../assets/gallery/delivery-neighborhood.jpg";
import img5 from "../assets/gallery/delivery-packages.jpg";
import img6 from "../assets/gallery/supplies-shop.jpg";
import img7 from "../assets/gallery/supplies-packing.jpg";
import img8 from "../assets/gallery/backpack-distribution.jpg";
import Reveal from "./Reveal";
import { useLanguage } from "../context/LanguageContext";

const IMAGES = [img1, img2, img3, img4, img5, img6, img7, img8];

function Gallery() {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <Reveal as="p" className="eyebrow eyebrow--center">
          {t.gallery.title}
        </Reveal>
        <Reveal as="h2" className="section-title--center" delay={60}>
          {t.gallery.lede}
        </Reveal>

        <div className="gallery__grid">
          {t.gallery.items.map((item, i) => (
            <Reveal key={item.caption} className="gallery-card" delay={(i % 4) * 90}>
              <img src={IMAGES[i]} alt={item.caption} loading="lazy" />
              <p className="gallery-card__caption">{item.caption}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
