import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import ServicePage from './ServicePage';
import Signup from './Signup';
import Login from './Login';
import { auth } from './firebase';
import { useState, useEffect } from 'react';
import Account from './Account';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Add this line to set the app element

function HomePage() {
    return (
        <>
            <section className="handyman-hero">
                <div className="hero-content">
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

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setUser(user);
        });
        return () => unsubscribe();
    }, []); // Dependency array added here

    return (
        <Router>
            <div className="handyman-welcome">
                <header className="handyman-header">
                    <nav className="handyman-nav">
                        <img src="/BB handyman.jpg" alt="BB Handyman Logo" />
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                        {user ? (
                            <>
                                <Link to="/account">Account</Link>
                                <button onClick={() => auth.signOut()}>Logout</button>
                            </>
                        ) : (
                            <>
                                <Link to="/signup">Sign Up</Link>
                                <Link to="/login">Log In</Link>
                            </>
                        )}
                    </nav>
                </header>

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/services/:serviceName" element={<ServicePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/account" element={<Account />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
