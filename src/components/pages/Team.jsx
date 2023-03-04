import React from 'react'
import BannerItems from '../banner/banner-item'
import MySpinner from '../home/Spinar'

const Team = () => {
  return (
    <div className=" bg-white p-0">
      <MySpinner/>
   
    {/* Navbar & Hero Start */}

    <BannerItems  title="Our Team" item1="Home" item2="pages" item3="Our Team"/>

    {/* Navbar & Hero End */}
    {/* Team Start */}
    <div className="container-xxl py-6">
      <div className="container">
        <div className="mx-auto text-center wow fadeInUp" data-wow-delay="0.1s" >
          <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">Our Team</div>
          <h2 className="mb-5">Meet Our Team Members</h2>
        </div>
        <div className="row g-4">
          <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item">
              <h5>Abdul Basir AMIRI</h5>
              <p className="mb-4">Chief Executive Officer</p>
              <img className="img-fluid rounded-circle w-100 mb-4" src="img/team-1.jpg" alt="" />
              <div className="d-flex justify-content-center">
                <a className="btn btn-square text-info bg-white m-1" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square text-info bg-white m-1" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-square text-info bg-white m-1" href><i className="fab fa-linkedin-in" /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="team-item">
              <h5>Waqar </h5>
              <p className="mb-4">Asisitant</p>
              <img className="img-fluid rounded-circle w-100 mb-4" src="img/team-2.jpg" alt="" />
              <div className="d-flex justify-content-center">
                <a className="btn btn-square text-info bg-white m-1" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square text-info bg-white m-1" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-square text-info bg-white m-1" href><i className="fab fa-linkedin-in" /></a>
              </div>
            </div>
          </div>
      
    
        </div>
      </div>
    </div>
    {/* Team End */}
    {/* Footer Start */}
    {/* Footer End */}
    {/* Back to Top */}
    <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
  </div>

  )
}

export default Team