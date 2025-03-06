// src/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';


function HomePage() {
  return (
    <>
      <section className="handyman-hero">
        <div className="hero-content">
          <img src={handymanLogo} alt="BB Handyman Logo" />
          <h2>Your Trusted Partner for Yard Repairs and Cleanups</h2>
          <p>We provide reliable and high-quality handyman services to homeowners in Lakeland, Florida, and surrounding areas.</p>
          <a href="#services" className="cta-button">See Our Services</a>
        </div>
      </section>

      <section id="services" className="handyman-services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-item">
            <h3>Yard Cleanup's</h3>
            <p>Trimming trees, pressure washing, pickup leaves and branches as well as dispose of them and more!</p>
            <Link to="/services/Yard%20Work">Learn More</Link>
          </div>
          <div className="service-item">
            <h3>Moving</h3>
            <p>Small moves, trash or junk removal, furniture rearrange, etc...</p>
            <Link to="/services/Moving">Learn More</Link>
          </div>
          <div className="service-item">
            <h3>Mulching</h3>
            <p>lay down mulch by the sq foot, Lay down sod or turf by the sq foot.</p>
            <Link to="/services/Mulching">Learn More</Link>
          </div>
          <div className="service-item">
            <h3>Handy Services</h3>
            <p>Change out light bulbs, Clean cowebs, Clean windows, Pick out weeds, etc...</p>
            <Link to="/services/Handy%20Services">Learn More</Link>
          </div>
        </div>
      </section>

      <section className="handyman-cta">
        <h2>Ready to Get Started?</h2>
        <p>Contact us today for a free estimate!</p>
        <a href="#contact" className="cta-button">Contact Us: 813-503-5735</a>
      </section>
    </>
  );
}

export default HomePage;