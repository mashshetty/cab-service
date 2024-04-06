import React from 'react';
import Head from 'next/head';

const AboutSection = () => {
  return (
    <>
    <Head>
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
        <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
        <link href="https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap" rel="stylesheet" />
        <link href="css/style.css" rel="stylesheet" />
        <link href="css/responsive.css" rel="stylesheet" />
    </Head>
    <section id="about" className="about_section layout_padding">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-5 offset-lg-2 offset-md-1">
            <div className="detail-box">
              <h2>
                About <br />
                <span className='main-text'>Subramanya Cab Service</span>
              </h2>
              <p>
              Amma Cab Service is a leading provider of the most affordable cab service in Subramanya and one can book cabs by call or logging on to our website. We provide professional Cab Services with the best economical rates and with the best travel experience through our courteous drivers and time bound services.

              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="img-box">
              <img src="images/about-img.png" alt="about-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default AboutSection;
