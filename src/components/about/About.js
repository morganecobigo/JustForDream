import React from "react";
import backgroundImage from "../../assets/about/fondbio.webp";
import photobio from "../../assets/about/photobio.webp";
import "./about.css";

const About = ({ id }) => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div id={id} className="about-container" style={backgroundStyle}>
      <h2>À PROPOS DE MOI</h2>
      <div className="about-me">
        <img src={photobio} alt="me" className="photo_bio" />
        <div className="about-text">
          <p>Bonjour, mon nom de scène est Nelly.</p>
          <p>
            Après un parcours scolaire discret, je décide à 18 ans de rejoindre
            l'armée. J'intègre les prestigieux rangs des Parachutistes
            d'Infanterie de Marine après avoir réussi avec succès le concours
            d'entrée.
          </p>
          <p>
            Dans l'armée, je suis reconnu pour mon endurance et ma discipline.
            Je me distingue dans des missions à haute intensité, notamment lors
            de déploiements à l’étranger. Le parachutisme et la rigueur de
            l'armée ont été les piliers de ma vie pendant plus de 11 ans.
          </p>
          <p>
            En 2017, je prends la décision de quitter l'armée et de me
            reconvertir, puis quelques mois plus tard je décide de me lancer
            dans une nouvelle aventure, un domaine qui m'a toujours fasciné mais
            que je n'avais jamais exploré à fond en raison de mon engagement
            militaire.
          </p>
          <p>
            En 2018, je rejoins une troupe de Chippendales, qui se produisent
            principalement dans des casinos, cabarets et lors de spectacles pour
            un public féminin.{" "}
          </p>
          <p>
            je combine mes compétences de danseur avec toujours une petite
            touche d'humour et d’énergie typique dans les spectacles
            Chippendales.{" "}
          </p>
          <p>
            Aujourd'hui, je lance ce site pour vous proposer des prestations
            pour les anniversaires, EVJF, divorces, départ à la retraite...
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
