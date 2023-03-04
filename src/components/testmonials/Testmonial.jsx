import React from 'react'
import BannerItems from '../banner/banner-item'
import Myheading from '../Title/heading'




const Testmonial = () => {
  return (
    <div className=" bg-white p-0">
    
    <BannerItems  title="Testimonial" item1="Home" item2="pages" item3="Testimonial"/>

{/* Testimonial Start */}
<div className="container-xxl py-6">
        <div className="container">
          <Myheading  delay="0.2s" title =" Testimonails" desc="What our Client Says"/>
          <div>
            <div className="testimonial-item rounded p-4">
              <i className="fa fa-quote-left fa-2x text-primary mb-3" />
              <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
              <div className="d-flex align-items-center">
                <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-1.jpg" />
                <div className="ps-3">
                  <h6 className="mb-1">Client Name</h6>
                  <small>Profession</small>
                </div>
              </div>
            </div>
            <div className="testimonial-item rounded p-4">
              <i className="fa fa-quote-left fa-2x text-primary mb-3" />
              <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
              <div className="d-flex align-items-center">
                <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-2.jpg" />
                <div className="ps-3">
                  <h6 className="mb-1">Client Name</h6>
                  <small>Profession</small>
                </div>
              </div>
            </div>
            <div className="testimonial-item rounded p-4">
              <i className="fa fa-quote-left fa-2x text-primary mb-3" />
              <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
              <div className="d-flex align-items-center">
                <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-3.jpg" />
                <div className="ps-3">
                  <h6 className="mb-1">Client Name</h6>
                  <small>Profession</small>
                </div>
              </div>
            </div>
            <div className="testimonial-item rounded p-4">
              <i className="fa fa-quote-left fa-2x text-primary mb-3" />
              <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
              <div className="d-flex align-items-center">
                <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-4.jpg" />
                <div className="ps-3">
                  <h6 className="mb-1">Client Name</h6>
                  <small>Profession</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}


  
    <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
  </div>
  )
}

export default Testmonial