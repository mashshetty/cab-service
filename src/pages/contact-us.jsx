import React from 'react';
import Head from 'next/head';

const ContactSection = () => {
  return (
    <>
    <Head>
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
                <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
                <link href="https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap" rel="stylesheet" />
                <link href="css/style.css" rel="stylesheet" />
                <link href="css/responsive.css" rel="stylesheet" />
            </Head>
    <section id="contact-us" className="contact_section layout_padding-bottom">
      <div className="container">
        <div className="heading_container">
          <h2>
            Any Problems <br />
            <span className="main-text-contact">Any Questions</span>
          </h2>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 offset-md-1">
            <div className="contact_form">
              <h4>
                Get In touch
              </h4>
              <form action="">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Phone Number" />
                <input type="text" placeholder="Message" className="message_input" />
                <button>Send</button>
              </form>
            </div>
          </div>
          <div className="col-md-6 px-0">
            <div className="img-box">
              <img src="images/contact-img.png" alt="contact-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ContactSection;
