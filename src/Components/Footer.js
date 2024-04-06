import React from 'react';
import Head from 'next/head';
const Footer = () => {
  return (
    <>
    <Head>
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
        <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
        <link href="https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap" rel="stylesheet" />
        <link href="css/style.css" rel="stylesheet" />
        <link href="css/responsive.css" rel="stylesheet" />
    </Head>
    <footer id="picassoFooter">
        <div className='footer-part1'>
            <h3 className='footer-heading'> Subramanya Cab Service</h3>
            <span>Amma Cab Service offers the most affordable cab service in Subramanya. Book via call or website for professional, courteous drivers and timely service.</span>
        </div>
      <div className="footer-navigation">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact-us">Contact</a></li>
        </ul>
      </div>
      <div className="footer-contact">
        <h3>Contact Us</h3>
        <p>Email: info@example.com</p>
        <p>Phone: +123 456 7890</p>
      </div>
      <div className="footer-social">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">FB</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">TW</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">IG</a>
        </div>
      </div>
      
    </footer>
    </>
  );
};

export default Footer;
