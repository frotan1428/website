import React from 'react'
import BannerItems from '../banner/banner-item'
import MySpinner from '../home/Spinar'
import Myheading from '../Title/heading'
import Myslides from '../Title/Myslides'

const Contact = () => {
  return (
    <div className=" bg-white p-0">
   
    {/* Spinner Start
    <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
      <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div> */}
    {/* Spinner End */}
    {/* Navbar & Hero Start */}
    <div className=" position-relative p-0 top-page">
    <BannerItems itle="Contact" item1="Home" item2="pages" item3="Contact"/>
    <MySpinner/>
    </div>
    {/* Navbar & Hero End */}
    {/* Contact Start */}
    <div className="container-xxl py-6">
      <div className="container">

        <Myheading delay="0.1" title="Contact Us"  desc=""/>
        <div className="row justify-content-center">
          <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.3s">
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="name" placeholder="Your Name" />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input type="email" className="form-control" id="email" placeholder="Your Email" />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="subject" placeholder="Subject" />
                    <label htmlFor="subject">Subject</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: '150px'}} defaultValue={""} />
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-success w-100 py-3" type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* Contact End */}
  </div>
  )
}

export default Contact