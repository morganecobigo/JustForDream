import React, { useState } from "react";
import { servicesList } from "../services/servicesList";
import "./services.css";

function Services({ id }) {
  const [selectedServices, setSelectedServices] = useState(null);
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);

  const openModal = (services) => {
    setSelectedServices(services);
  };

  const closeModal = () => {
    setSelectedServices(null);
    setIsPhoneModalOpen(false);
  };

  const openPhoneModal = () => {
    setIsPhoneModalOpen(true);
  };

  return (
    <div id={id} className="services">
      <h3 className="services-title">Prestations</h3>
      <div className="services-container">
        {servicesList.map((services, index) => (
          <div
            key={index}
            onClick={() => openModal(services)}
            className="services-card"
          >
            <img
              src={services.image}
              alt={services.title}
              className="service-image"
            />
            <p className="prestations_subtitle">{services.subtitle}</p>
            <p className="prestations_title">{services.title}</p>
          </div>
        ))}
      </div>

      {/* Modal for service details */}
      {selectedServices && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <img
              src={selectedServices.image}
              alt={selectedServices.title}
              className="modal-image"
            />
            <h4>{selectedServices.title}</h4>
            <p>{selectedServices.description}</p>
            <div className="skills-used">
              {selectedServices.autres.map((skill, idx) => (
                <p key={idx}>{skill}</p>
              ))}
            </div>
            <div
              className="modal_phone"
              onClick={(e) => {
                e.preventDefault();
                openPhoneModal();
              }}
            >
              Me contacter
            </div>
          </div>
        </div>
      )}

      {/* Modal for phone number */}
      {isPhoneModalOpen && selectedServices && (
        <div className="modal-two" onClick={closeModal}>
          <div className="phone_modal" onClick={(e) => e.stopPropagation()}>
            <span className="close_button" onClick={closeModal}>
              &times;
            </span>
            <p className="service-title">Just For Dream</p>
            <p className="phone">+33 6 95 54 82 95</p>
            <a href={`tel:${selectedServices.phone || "+33 6 95 54 82 95"}`}>
              Appeler maintenant
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Services;
