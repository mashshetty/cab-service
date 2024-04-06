import React from 'react'
import Head from 'next/head'
import StarIcon from '@mui/icons-material/Star';

function OurFleet() {
  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
        <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
        <link href="https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap" rel="stylesheet" />
        <link href="css/style.css" rel="stylesheet" />
        <link href="css/responsive.css" rel="stylesheet" />
      </Head>
      <div id="our-fleet" className="fleet-section">
        <h2 className='fleetheading'>Have a Glance At  <span className="main-text">Our Fleet</span> </h2>
        <div className="fleets">
          <div className="fleet-card">
            <img src="https://www.cartoq.com/wp-content/uploads/2024/02/2024-Maruti-Suzuki-Dzire-sedan-render.jpg" className='fleetImg' alt="fleet-image" />
            <div className="vname">
              <div className="vehicle-name">Tata Innova  </div>
              <span className="seater-info">6+1 / Seater <span className="star"><StarIcon fontSize='small'/> <StarIcon fontSize='small'/> <StarIcon fontSize='small'/> <StarIcon fontSize='small'/> <StarIcon fontSize='small'/> </span> (5.0)</span>
              <div className="book-btns">
              <div className="car-book-now-btn">Book Now</div><div className="car-book-now-btn call-btn">Call Now</div>

              </div>
            </div>
          </div>

          <div className="fleet-card">
            <img src="https://www.cartoq.com/wp-content/uploads/2024/02/2024-Maruti-Suzuki-Dzire-sedan-render.jpg" className='fleetImg' alt="fleet-image"  />
            <div className="vname">
              <div className="vehicle-name">Tata Innova  </div>
              <span className="seater-info">6+1 / Seater <span className="star"><StarIcon fontSize='small'/> <StarIcon fontSize='small'/> <StarIcon fontSize='small'/> <StarIcon fontSize='small'/> <StarIcon fontSize='small'/> </span> (5.0)</span>
              <div className="book-btns">
              <div className="car-book-now-btn">Book Now</div><div className="car-book-now-btn call-btn">Call Now</div>

              </div>
            </div>
          </div>

          <div className="fleet-card">
            <img src="https://www.cartoq.com/wp-content/uploads/2024/02/2024-Maruti-Suzuki-Dzire-sedan-render.jpg" className='fleetImg' alt="fleet-image" />
            <div className="vname">
              <div className="vehicle-name">Tata Innova</div>
              <span className="seater-info">6+1 / Seater <span className="star"><StarIcon fontSize='small'/> <StarIcon fontSize='small'/> <StarIcon fontSize='small'/> <StarIcon fontSize='small'/> <StarIcon fontSize='small'/> </span> (5.0)</span>
              <div className="book-btns">
              <div className="car-book-now-btn">Book Now</div><div className="car-book-now-btn call-btn">Call Now</div>

              </div>
            </div>
          </div>

          <div className="fleet-card">
            <img src="https://www.cartoq.com/wp-content/uploads/2024/02/2024-Maruti-Suzuki-Dzire-sedan-render.jpg" className='fleetImg' alt="fleet-image"  />
            <div className="vname">
              <div className="vehicle-name">Tata Innova  </div>
              <span className="seater-info">6+1 / Seater <span className="star"><StarIcon fontSize='small'/> <StarIcon fontSize='small'/> <StarIcon fontSize='small'/> <StarIcon fontSize='small'/> <StarIcon fontSize='small'/> </span>  (5.0)</span>
              <div className="book-btns">
              <div className="car-book-now-btn">Book Now</div><div className="car-book-now-btn call-btn">Call Now</div>

              </div>
            </div>
          </div>

          <div className="fleet-card">
            <img src="https://indiarentacar.com/wp-content/uploads/2022/09/12-seater-traveller01.jpg" className='fleetImg' alt="fleet-image"  />
            <div className="vname">
              <div className="vehicle-name">Tata Innova </div>
              <span className="seater-info">6+1 / Seater <span className="star"><StarIcon fontSize='small'/> <StarIcon fontSize='small'/> <StarIcon fontSize='small'/> <StarIcon fontSize='small'/> <StarIcon fontSize='small'/> </span>  (5.0)</span>
              <div className="book-btns">
              <div className="car-book-now-btn">Book Now</div><div className="car-book-now-btn call-btn">Call Now</div>

              </div>
            </div>
          </div>

          <div className="fleet-card">
            <img src="https://spn-sta.spinny.com/blog/20221125173434/Toyota-Innova-Crysta-1160x653.webp?compress=true&quality=80&w=1200&dpr=2.6" className='fleetImg' alt="fleet-image"  />
            <div className="vname">
              <div className="vehicle-name">Tata Innova  </div>
              <span className="seater-info">6+1 / Seater <span className="star"><StarIcon fontSize='small'/> <StarIcon fontSize='small'/> <StarIcon fontSize='small'/> <StarIcon fontSize='small'/> <StarIcon fontSize='small'/> </span>  (5.0)</span>
              <div className="book-btns">
              <div className="car-book-now-btn">Book Now</div><div className="car-book-now-btn call-btn">Call Now</div>

              </div>
            </div>
          </div>

          <div className="fleet-card">
            <img src="https://www.cartoq.com/wp-content/uploads/2024/02/2024-Maruti-Suzuki-Dzire-sedan-render.jpg" className='fleetImg' alt="fleet-image"  />
            <div className="vname">
              <div className="vehicle-name">Tata Innova </div>
              <span className="seater-info">6+1 / Seater <span className="star"><StarIcon fontSize='small'/> <StarIcon fontSize='small'/> <StarIcon fontSize='small'/> <StarIcon fontSize='small'/> <StarIcon fontSize='small'/> </span>  (5.0)</span>
              <div className="book-btns">
              <div className="car-book-now-btn">Book Now</div><div className="car-book-now-btn call-btn">Call Now</div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default OurFleet