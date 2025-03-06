import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './App.css';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function ServicePage() {
    const { serviceName } = useParams();
    const [services, setServices] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [selectedService, setSelectedService] = useState(null);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                let apiEndpoint = "";
                let propertyName = "";

                switch (serviceName) {
                    case "Yard Work":
                        apiEndpoint = "http://localhost:5000/api/services";
                        propertyName = "service_name";
                        break;
                    case "Mulching":
                        apiEndpoint = "http://localhost:5000/api/mulching";
                        propertyName = "material";
                        break;
                    case "Moving":
                        apiEndpoint = "http://localhost:5000/api/moving";
                        propertyName = "service_name"; // Use service_name for Moving
                        break;
                    case "Handy Services":
                        apiEndpoint = "http://localhost:5000/api/handy_services";
                        propertyName = "service_type";
                        break;
                    // ... (other cases)
                }

                const response = await axios.get(apiEndpoint);
                setServices(response.data);
            } catch (err) {
                if (err.response) {
                    setError(`API Error: ${err.response.status} - ${err.response.data.error}`);
                } else if (err.request) {
                    setError("Network Error: Could not reach the server.");
                } else {
                    setError("Error: Something went wrong.");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, [serviceName]);

    if (loading) {
        return <div>Loading service details...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    function openModal(service, propertyName) {
        setSelectedService({ ...service, displayProperty: propertyName });
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="service-page">
            <h2>Our Services</h2>
            <div className="services-container">
                {Array.isArray(services) && services.map((service, index) => {
                    let propertyName = "";
                    switch (serviceName) {
                        case "Yard Work":
                            propertyName = "service_name";
                            break;
                        case "Mulching":
                            propertyName = "material";
                            break;
                        case "Moving":
                            propertyName = "service_name"; // Use service_name for Moving
                            break;
                        case "Handy Services":
                            propertyName = "service_type";
                            break;
                        // ... (other cases)
                    }
                    let displayName = service[propertyName];

                    // Add "Half Day" if applicable (for Yard Work and Gutter Cleaning)
                    if (serviceName === "Yard Work" && service.duration === "Half Day" && (service.service_name === "Yard Work" || service.service_name === "Gutter Cleaning")) {
                        displayName += " - Half Day";
                    }

                    return (
                        <div key={service.id || index} className="service-item-details">
                            <p className="service-name">
                                {displayName}
                            </p>

                            {/* Conditionally display area_sq_ft for Mulching */}
                            {serviceName === "Mulching" && (
                                <p className="service-area">Area: {service.area_sq_ft} sq ft</p>
                            )}

                            {/* Conditionally display description for Moving and Handy Services */}
                            {(serviceName === "Moving" || serviceName === "Handy Services") && (
                                <p className="service-description">{service.description}</p>
                            )}

                            <p className="service-price">Price: ${service.price}</p>
                            <button className="quote-button" onClick={() => openModal(service, propertyName)}>
                                Request a Quote
                            </button>

                            <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={closeModal}
                                style={customStyles}
                                contentLabel="Request a Quote"
                            >
                                <h2>Request a Quote</h2>
                                {selectedService && (
                                    <div>
                                        <p>Service: {selectedService[selectedService.displayProperty]}</p>
                                        <p>Price: ${selectedService.price}</p>
                                        <form>
                                            <button type="submit">Submit Quote Request</button>
                                        </form>
                                    </div>
                                )}
                                <button onClick={closeModal}>Close</button>
                            </Modal>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ServicePage;