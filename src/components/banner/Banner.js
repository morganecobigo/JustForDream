import React from "react";
import Noeudpap from "../../assets/banner/noeudpap.webp";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner_container">
      <img className="noeud_pap" src={Noeudpap} alt="noeud" />
      <p className="citation_banner">
        Les folies sont les seules choses que l'on ne regrette jamais.
      </p>
    </div>
  );
};

export default Banner;
