import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./gallery.css";
import { galleryList } from "./galleryList";

const Gallery = () => {
  const navigate = useNavigate();

  const handleRetourAccueil = () => {
    navigate("Home");
  };

  return (
    <div className="gallery">
      <h1 className="gallery_title">Galerie</h1>
      <p>
        Bienvenue dans la galerie ! Ici, vous trouverez une sélection de photos.
      </p>
      <button onClick={handleRetourAccueil} className="back-home-button">
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <div className="gallery-container">
        {galleryList.map((gallery, index) => (
          <div key={index} className="gallery-card">
            <img
              src={gallery.image}
              alt={gallery.title}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
