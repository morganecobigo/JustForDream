import React, { useEffect, useState } from "react";
import bubble from "../../assets/notice/discours-de-bulle.webp";
import bowtieFilled from "../../assets/notice/noeud-papillon-plein.webp";
import bowtieEmpty from "../../assets/notice/noeud-papillon-vide.webp";
import { noticeList } from "../../components/notice/noticeList";
import "./notice.css";

const Notice = () => {
  const googleReviewLink = "https://g.page/r/Cbm9Y2CbegBIEBI/review";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth <= 480) {
        setVisibleCount(1); // Show 1 item on screens smaller than 768px
      } else {
        setVisibleCount(3); // Default to 3 items for larger screens
      }
    };
    updateVisibleCount(); // Initial check
    window.addEventListener("resize", updateVisibleCount); // Update on resize

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);
  // Fonction pour aller à l'avis précédent
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? noticeList.length - visibleCount : prevIndex - 1
    );
  };

  // Fonction pour aller à l'avis suivant
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === noticeList.length - visibleCount ? 0 : prevIndex + 1
    );
  };
  // Fonction de rendu des bowties (étoiles ou noeuds papillon)
  const renderStars = (bowties) => {
    // Crée les noeuds papillon remplis
    const filledBowties = Array.from({ length: bowties }, (_, index) => (
      <img
        key={`filled-${index}`}
        src={bowtieFilled}
        alt="bow tie filled"
        width={20}
        height={20}
      />
    ));

    // Crée les noeuds papillon vides
    const emptyBowties = Array.from({ length: 5 - bowties }, (_, index) => (
      <img
        key={`empty-${index}`}
        src={bowtieEmpty}
        alt="bow tie empty"
        width={20}
        height={20}
      />
    ));

    // Retourne le tableau combiné de noeuds papillon remplis et vides
    return [...filledBowties, ...emptyBowties];
  };

  return (
    <div className="notice">
      <h2>Qu'en disent les client(e)s ?</h2>

      <div className="notice-carousel">
        {/* Bouton précédent */}
        <button className="button-carousel prev" onClick={handlePrev}>
          &#8249; {/* Flèche gauche */}
        </button>
        <div className="notice-track">
          {noticeList
            .slice(currentIndex, currentIndex + visibleCount)
            .map((notice, index) => (
              <div key={index} className="notice-item">
                <img
                  src={bubble}
                  alt="bulle de discussion"
                  className="bubble"
                />
                <p className="notice-name">{notice.name}</p>
                <div className="bowtie">{renderStars(notice.annotation)}</div>
                <p className="notice-comments">{notice.comments}</p>
              </div>
            ))}
        </div>

        <button className="button-carousel next" onClick={handleNext}>
          &#8250; {/* Flèche droite */}
        </button>
      </div>
      <div className="leave-review">
        <h3>Nous aimerions connaître votre avis !</h3>
        <a
          href={googleReviewLink}
          target="_blank"
          rel="noopener noreferrer"
          className="review-button"
        >
          Laissez un avis sur Google
        </a>
      </div>
    </div>
  );
};

export default Notice;
