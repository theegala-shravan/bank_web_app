import React from 'react'
import '../css/Landing.css'; 
const Landing = () => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>Welcome to Shravan Bank</h1>
        <p>Your trusted partner in financial management</p>
      </header>
      <section className="landing-content">
        <div className="content-section">
          <h2>About Us</h2>
          <p>At Shravan Bank, we are dedicated to providing the highest quality of banking services to our customers. With over 20 years of experience in the industry, we offer a range of services including personal and business banking, loans, and investment solutions tailored to your needs.</p>
        </div>
        <div className="content-section">
          <h2>Our Services</h2>
          <ul>
            <li><strong>Personal Banking:</strong> Enjoy a range of personal banking products including savings and checking accounts, credit cards, and personal loans.</li>
            <li><strong>Business Banking:</strong> Benefit from our business accounts, merchant services, and business loans designed to support your company’s growth.</li>
            <li><strong>Loans:</strong> We offer various loan options including home loans, auto loans, and personal loans with competitive rates.</li>
            <li><strong>Investment Solutions:</strong> Explore our investment products and services to help you plan for your future and achieve your financial goals.</li>
          </ul>
        </div>
        <div className="content-section">
          <h2>Why Choose Us?</h2>
          <p>Our commitment to customer satisfaction, innovative banking solutions, and secure transactions make us a preferred choice for individuals and businesses alike. We leverage the latest technology to ensure that your banking experience is seamless and efficient.</p>
        </div>
        <div className="content-section">
          <h2>Contact Us</h2>
          <p>If you have any questions or need assistance, our dedicated customer service team is here to help. You can reach us via phone, email, or visit one of our branches.</p>
        </div>
      </section>
      <footer className="landing-footer">
        <p>&copy; {new Date().getFullYear()} Shravan Bank. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Landing
