import React from "react";
import instaIcon from "../../assets/iconesfooter/insta.webp";
import mailIcon from "../../assets/iconesfooter/mail.webp";
import phoneIcon from "../../assets/iconesfooter/phone.webp";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <ul className="social-links">
        <li>
          <a
            href="tel:0695548295"
            title="Contacter"
            aria-label="Contacter par téléphone"
          >
            <img src={phoneIcon} alt="Icône de téléphone" />
          </a>
        </li>
        <li>
          <a href="mailto:just-for-dream@outlook.fr" title="Envoyer un email">
            <img src={mailIcon} alt="Icône de mail" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/Nelly_chippendale/"
            title="lien instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instaIcon} alt="Icône instagram" />
          </a>
        </li>
      </ul>
      <p className="copyright">
        Mentions légales | Politique de confidentialité | Site crée par Morgane
        Cobigo{" "}
      </p>
    </div>
  );
}

export default Footer;
