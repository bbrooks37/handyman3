import React from 'react';
import './App.css'; // Import your CSS file

// Import the profile image from the public folder
const profileImage = '/BB handyman.jpg';

function AboutPage() {
    return (
        <div className="about-page">
            <div className="about-content">
                <div className="profile-section">
                    <img src={profileImage} alt="Brandon Brooks" className="profile-image" />
                    <div className="profile-text">
                        <h2>About Brandon Brooks</h2>
                        <p>Owner and Operator of Brandon Brooks Handyman Services</p>
                    </div>
                </div>

                <p>
                    Hello! I'm Brandon Brooks, dedicated to providing reliable and high-quality handyman services to homeowners in Lakeland, Florida, and the surrounding areas.
                </p>
                <p>
                    With years of experience in yard repairs and maintenance, I take pride in my attention to detail and commitment to customer satisfaction. I understand the importance of having a trustworthy handyman you can rely on, and I strive to exceed your expectations with every job.
                </p>
                <p>
                    My goal is to make your life easier by taking care of those tasks around your home that you don't have the time or expertise to handle. Whether it's yard cleanup, moving assistance, mulching, repairs, or general handy services, I'm here to help.
                </p>
                <p>
                    I'm passionate about serving my local community and building lasting relationships with my clients. Thank you for considering Brandon Brooks Handyman Services for your home repair needs!
                </p>

                <div className="availability">
                    <p>
                        <strong>Weekend Availability:</strong> We are available for appointments on Saturdays and Sundays. Please contact us to schedule your weekend service!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;