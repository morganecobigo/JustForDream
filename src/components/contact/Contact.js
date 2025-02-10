import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import backgroundFond from "../../assets/contact/image-contact.webp";
import "./contact.css";

const Contact = () => {
  const initialFormState = {
    nom: "",
    type: "particulier",
    telephone: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [formSubmitted, setFormSubmitted] = useState(false); // Pour afficher un message après soumission
  const [submittedName, setSubmittedName] = useState(""); // Stocke temporairement le nom soumis
  const [error, setError] = useState(""); // Gestion des erreurs d'envoi

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Sauvegarder le nom avant réinitialisation
    setSubmittedName(formData.nom);

    // Configurer EmailJS
    const serviceID = "service_cby313p"; // Remplacez par votre service ID EmailJS
    const templateID = "template_bdyctl8"; // Remplacez par votre template ID EmailJS
    const userID = "JqJW1L-C2okF7fYJf"; // Remplacez par votre user ID EmailJS

    emailjs
      .send(
        serviceID,
        templateID,
        {
          nom: formData.nom,
          type: formData.type,
          telephone: formData.telephone,
          email: formData.email,
          message: formData.message,
        },
        userID
      )
      .then(
        (response) => {
          console.log(
            "Email envoyé avec succès!",
            response.status,
            response.text
          );
          setFormSubmitted(true); // Affiche le message de confirmation
          setFormData(initialFormState); // Réinitialise le formulaire
          setTimeout(() => setFormSubmitted(false), 5000); // Masque le message après 5s
        },
        (err) => {
          console.error("Échec de l'envoi d'email:", err);
          setError("Un problème est survenu. Merci de réessayer plus tard.");
        }
      );
  };

  return (
    <div className="contact">
      <p className="phrase_contact">
        Ajoutez une touche de glamour et de sensualité à votre événement !
        <br />
        <br />
        Pour une prestation de striptease inoubliable ou simplement pour obtenir
        plus d'informations,
        <br />
        <br />
        <strong>contactez-moi dès maintenant</strong> et faites de votre soirée
        un moment unique.
      </p>

      <div className="form-image-wrapper">
        <img
          src={backgroundFond}
          alt="fond pour formulaire"
          className="contact-fond"
        />

        <div className="form-container">
          <h1>Contactez-moi</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="nom">Nom</label>
            <input
              type="text"
              id="nom"
              name="nom"
              placeholder="Votre nom"
              value={formData.nom}
              onChange={handleChange}
            />

            <label htmlFor="type">Vous êtes</label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
            >
              <option value="particulier">Particulier</option>
              <option value="professionnel">Professionnel</option>
            </select>

            <label htmlFor="telephone">Téléphone</label>
            <input
              type="text"
              id="telephone"
              name="telephone"
              placeholder="Votre numéro de téléphone"
              value={formData.telephone}
              onChange={handleChange}
            />

            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Votre e-mail"
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Votre message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit">Envoyer</button>
          </form>

          {/* Affichage du message de confirmation */}
          {formSubmitted && (
            <div className="confirmation-message">
              <p>
                Merci, {submittedName || "utilisateur"}! Votre message a bien
                été envoyé.
              </p>
            </div>
          )}
          {/* Affichage des erreurs */}
          {error && <div className="error-message">{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
