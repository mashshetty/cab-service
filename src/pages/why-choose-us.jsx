import React from 'react'
import Head from 'next/head'

function whyChooseUs() {
  return (
    <>
    <Head>
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
        <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
        <link href="https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap" rel="stylesheet" />
        <link href="css/style.css" rel="stylesheet" />
        <link href="css/responsive.css" rel="stylesheet" />
    </Head>
    <section className="why_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          Why <br/>
          <span className="main-text">
          Choose Us
          </span>
        </h2>
      </div>
      <div className="why_container">
        <div className="box">
          <div className="img-box">
            <img src="images/delivery-man-white.png" alt="delivery-img" className="img-1"/>
            <img src="images/delivery-man-black.png" alt="delivery-img" className="img-2"/>
          </div>
          <div className="detail-box">
            <h5>
              Best Drivers
            </h5>
            <p>
            Experience excellence in every ride with our best drivers, ensuring safety and comfort throughout your journey. Trust our skilled and professional drivers to deliver a top-notch transportation experience."
            </p>
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            <img src="images/shield-white.png" alt="shield-img" className="img-1"/>
            <img src="images/shield-black.png" alt="shield-img" className="img-2"/>
          </div>
          <div className="detail-box">
            <h5>
              Safe and Secure
            </h5>
            <p>
            Embark on a worry-free adventure with our services, where safety and security are our top priorities. Enjoy a journey free from concerns, knowing that your well-being is our commitment.
            </p>
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            <img src="images/repairing-service-white.png" alt="repair-img" className="img-1"/>
            <img src="images/repairing-service-black.png" alt="repair-img" className="img-2"/>
          </div>
          <div className="detail-box">
            <h5>
              24x7 support
            </h5>
            <p>
            Experience uninterrupted peace of mind with our 24/7 support system. Our dedicated team is always ready to assist you, ensuring a reliable and accessible service around the clock.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default whyChooseUs