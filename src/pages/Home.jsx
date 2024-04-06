import React from 'react'
import Head from 'next/head'

function Home() {
    return (
        <>
            <Head>
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
                <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
                <link href="https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap" rel="stylesheet" />
                <link href="css/style.css" rel="stylesheet" />
                <link href="css/responsive.css" rel="stylesheet" />
            </Head>
            <div>
                <div class="hero_area">
                    <header class="header_section">
                        <div class="container-fluid">
                            <nav class="navbar navbar-expand-lg custom_nav-container ">
                                <a class="navbar-brand " href="/">
                                    <span className='org-name'>
                                        Subramanya Cab Service
                                    </span>
                                </a>
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>

                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <div class="d-flex ml-auto flex-column flex-lg-row align-items-center">
                                        <ul class="navbar-nav  ">
                                            <li class="nav-item active">
                                                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#about"> About</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#services"> Services </a>
                                            </li>
                                            
                                            <li class="nav-item">
                                                <a class="nav-link" href="#contact-us">Contact Us</a>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </header>

                    <section class=" slider_section ">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-7 ">
                                    <div class="box">
                                        <div class="detail-box">
                                            <h4>
                                                Welcome to
                                            </h4>
                                            <h1>
                                                Subramanya Cab Service
                                            </h1>
                                        </div>
                                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                            <ol class="carousel-indicators">
                                                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                                            </ol>
                                            <div class="carousel-inner">
                                                <div class="carousel-item active">

                                                    <div class="img-box">
                                                        <img src="images/slider-img.png" alt="slider-image" />
                                                    </div>
                                                </div>
                                                <div class="carousel-item">
                                                    <div class="img-box">
                                                        <img src="images/slider-img.png" alt="slider-image" />
                                                    </div>
                                                </div>
                                                <div class="carousel-item">
                                                    <div class="img-box">
                                                        <img src="images/slider-img.png" alt="slider-image" />
                                                    </div>
                                                </div>
                                                <div class="carousel-item">
                                                    <div class="img-box">
                                                        <img src="images/slider-img.png" alt="alider-image" />
                                                    </div>
                                                </div>
                                                <div class="carousel-item">
                                                    <div class="img-box">
                                                        <img src="images/slider-img.png" alt="slider-image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div class="btn-box">
                                            <a href="" class="btn-1">
                                                Read More
                                            </a>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-5 ">
                                    <div class="slider_form">
                                        <h4>
                                            Get A Taxi Now
                                        </h4>
                                        <form action="">
                                            <input type="text" placeholder="Car Type" />
                                            <input type="text" placeholder="Pick Up Location" />
                                            <input type="text" placeholder="Drop Location" />
                                            <div class="btm_input">
                                                <input type="text" placeholder="Your Phone Number" />
                                                <button>Book Now</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>
            </div>
        </>
    )
}

export default Home