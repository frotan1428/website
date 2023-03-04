import React from 'react'
import BannerItems from '../banner/banner-item'
import FeatuersContent from '../pages/featuers-content'
import ServiceItem from '../service/Service-item'
import Myslides from '../Title/Myslides'
import MySpinner from './Spinar'




const Home = () => {
 
  return (
    <div > 
        {/* className="container-xxl bg-white p-0" */}
         {/* <Myslides/> */}
         <BannerItems title="/" item1="Home" item2="pages" item3="home"/>
        <MySpinner/>
     
      
        {/* Navbar & Hero End */}
        {/* About Start */}
      <section id='about'>
      <div >
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 wow zoomIn" data-wow-delay="0.1s">
                {/* <img className="img-fluid" src="img/about.png" /> */}
              </div>
              <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
                <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">About Us</div>
                <h2 className="mb-4">Award Wining Consultancy Agency For Your Business</h2>
                <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod</p>
                <div className="row g-3 mb-4">
                  <div className="col-12 d-flex">
                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                      <i className="fa fa-user-tie text-white" />
                    </div>
                    <div className="ms-4">
                      <h6>Business Planning</h6>
                      <span>Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo</span>
                    </div>
                  </div>
                  <div className="col-12 d-flex">
                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                      <i className="fa fa-chart-line text-white" />
                    </div>
                    <div className="ms-4">
                      <h6>Financial Analaysis</h6>
                      <span>Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo</span>
                    </div>
                  </div>
                </div>
                <a className="btn btn-primary rounded-pill py-3 px-5 mt-2" href>Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
        {/* About End */}
        {/* Newsletter Start */}
        <div className=" bg-success my-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container px-lg-5">
            <div className="row align-items-center" style={{height: '250px'}}>
              <div className="col-12 col-md-6">
                <h3 className="text-white">Ready to get started</h3>
                <small className="text-white">Diam elitr est dolore at sanctus nonumy.</small>
                <div className="position-relative w-100 mt-3">
                  <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Enter Your Email" style={{height: '48px'}} />
                  <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i className="fa fa-paper-plane text-primary fs-4" /></button>
                </div>
              </div>
              <div className="col-md-6 text-center mb-n5 d-none d-md-block">
                <img className="img-fluid mt-5" style={{maxHeight: '250px'}} src="img/newsletter.png" />
              </div>
            </div>
          </div>
        </div>
        {/* Newsletter End */}
        {/* Service Start */}
       <ServiceItem/>
        {/* Service End */}
        {/* Features Start */}
        <FeatuersContent/>
        {/* Features End */}
        {/* Client Start */}
      
        {/* Testimonial End */}
        {/* Team Start */}
        <div >
          <div className="container">
            <div className="mx-auto text-center wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
              <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">Our Team</div>
              <h2 className="mb-5">Meet Our Team Members</h2>
            </div>
            <div className="row g-4">
              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="team-item">
                  <h5>Full Name</h5>
                  <p className="mb-4">Designation</p>
                  <img className="img-fluid rounded-circle w-100 mb-4" src="img/team-1.jpg" alt="" />
                  <div className="d-flex justify-content-center">
                    <a className="btn btn-square text-primary bg-white m-1" href><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-square text-primary bg-white m-1" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-square text-primary bg-white m-1" href><i className="fab fa-linkedin-in" /></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="team-item">
                  <h5>Full Name</h5>
                  <p className="mb-4">Designation</p>
                  <img className="img-fluid rounded-circle w-100 mb-4" src="img/team-2.jpg" alt="" />
                  <div className="d-flex justify-content-center">
                    <a className="btn btn-square text-primary bg-white m-1" href><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-square text-primary bg-white m-1" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-square text-primary bg-white m-1" href><i className="fab fa-linkedin-in" /></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="team-item">
                  <h5>Full Name</h5>
                  <p className="mb-4">Designation</p>
                  <img className="img-fluid rounded-circle w-100 mb-4" src="img/team-3.jpg" alt="" />
                  <div className="d-flex justify-content-center">
                    <a className="btn btn-square text-primary bg-white m-1" href><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-square text-primary bg-white m-1" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-square text-primary bg-white m-1" href><i className="fab fa-linkedin-in" /></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                <div className="team-item">
                  <h5>Full Name</h5>
                  <p className="mb-4">Designation</p>
                  <img className="img-fluid rounded-circle w-100 mb-4" src="img/team-4.jpg" alt="" />
                  <div className="d-flex justify-content-center">
                    <a className="btn btn-square text-primary bg-white m-1" href><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-square text-primary bg-white m-1" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-square text-primary bg-white m-1" href><i className="fab fa-linkedin-in" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team End */}
        
        {/* Back to Top */}
        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
      </div>
  )
}

export default Home