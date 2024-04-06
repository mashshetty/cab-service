import React from 'react'
import Head from 'next/head'

function services() {
    return (
        <>
            <Head>
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
                <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
                <link href="https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap" rel="stylesheet" />
                <link href="css/style.css" rel="stylesheet" />
                <link href="css/responsive.css" rel="stylesheet" />
            </Head>
            <section id="services" className='contact_section layout_padding-bottom'>
    <div className="container">
        <div className="heading_container">
            <h2>Our <span className="main-text">Services</span></h2>
        </div>
    </div>
    <div className="container-fluid">
       
        <div className="service-cards">
                    <div className="scard">Family Trip</div>
                    <div className="scard">Long Travel</div>
                    <div className="scard">Group Travel</div>
                    <div className="scard">Local Travel</div>
                    <div className="scard">Cab Booking</div>
                    <div className="scard">Airport Taxi</div>
                    <div className="scard">Round Package</div>
                    <div className="scard">One Day Trip</div>
                    <div className="scard">Two Day Trip</div>
                    <div className="scard">Five Day Trip</div>
                    <div className="scard">Airport Pickup & Drop</div>
                    <div className="scard">Railway Station Pickup & Drop</div>
                    <div className="scard">Outstation Travels</div>
                </div>

      
    </div>
    </section>

        </>
    )
}

export default services