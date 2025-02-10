import React, { useEffect, useRef, useState } from "react";
import videoFile from "../../assets/carousel/fond_carousel.mp4";
import "./hero.css";
import { heroList } from "./heroList";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  // Fonction pour passer à l'élément suivant
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % heroList.length);
  };

  // Fonction pour passer à l'élément précédent
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + heroList.length) % heroList.length);
  };

  // Défilement automatique toutes les 4 secondes
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval); // Nettoie l'intervalle lorsque le composant est démonté
  }, []); // Le tableau vide permet de n'exécuter l'intervalle qu'une seule fois au montage

  return (
    <div className="hero">
      <div className="fond_carousel">
        <video
          className="background-video"
          ref={videoRef}
          autoPlay
          loop
          muted
          onError={(e) => console.error("Video failed to load", e)}
        >
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="carousel-container">
        <div className="carousel-wrapper">
          {heroList.map((item, index) => {
            const position =
              (index - currentIndex + heroList.length) % heroList.length;
            const isCenter = position === 0;
            const isLeft = position === heroList.length - 1;
            const isRight = position === 1;

            return (
              <div
                key={index}
                className={`carousel-item ${isCenter ? "center" : ""} ${
                  isLeft ? "left" : ""
                } ${isRight ? "right" : ""}`}
              >
                <img src={item.image} alt={item.alt} />
                {isCenter && <p className="carousel-label">{item.label}</p>}
              </div>
            );
          })}
        </div>
        <button className="carousel-button prev" onClick={prevSlide}>
          &#8249;
        </button>
        <button className="carousel-button next" onClick={nextSlide}>
          &#8250;
        </button>
      </div>
      <p className="catchphrase">
        Transformez votre soirée en un moment inoubliable avec une prestation
        dans votre établissement ou à domicile, <br />
        alliant élégance, sensualité et spectacle personnalisé, pour une
        expérience unique et mémorable !
      </p>
    </div>
  );
};

export default Hero;
