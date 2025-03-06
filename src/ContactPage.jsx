import React from "react";
import "./App.css";

function ContactPage() {
    return (
        <div className="contact-page">
            <div className="contact-container"> {/* Added a container for better structure */}
                <h2>Contact Us</h2>
                <p>We're here to help with all your handyman needs in Lakeland, Florida!</p>

                <div className="contact-info">
                    <h3>Contact Information</h3>
                    <p><strong>Phone:</strong> 813-503-5735</p>
                    <p>
                        <strong>Email:</strong>{" "}
                        <a href="mailto:brandon37.brooks@gmail.com">brandon37.brooks@gmail.com</a>
                    </p>
                </div>

                <div className="contact-form-container"> {/* Added a container for the form */}
                    <h3>Send Us a Message</h3>
                    <form
                        className="contact-form"
                        action="YOUR_FORM_SUBMISSION_ENDPOINT"
                        method="post"
                    >
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Name:</label>
                            <input type="text" id="name" name="name" className="form-control" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input type="email" id="email" name="email" className="form-control" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Message:</label>
                            <textarea id="message" name="message" className="form-control" required />
                        </div>
                        <button type="submit" className="submit-button">Send</button>
                    </form>
                </div>

                <div className="map-placeholder">
                    {/* Replace with your actual map component or embed */}
                    <p>Map of our service area coming soon!</p>
                </div>

                <div className="scheduling-link">
                    {/* Replace with your actual scheduling link */}
                    <a href="YOUR_SCHEDULING_LINK">Schedule a Consultation</a>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;