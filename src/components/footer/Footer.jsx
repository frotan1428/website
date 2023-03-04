import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
     <div>
        {/* Footer Start */}
        <div className="container-fluid text-light footer pt-5 wow fadeIn" data-wow-delay="0.1s" style={{marginTop: '6rem',backgroundColor:"#0F6292"}}>
          <div className="container py-5" style={{color:"yellow"}}>
            <div className="row g-5">
              <div className="col-md-6 col-lg-4">
                <h5 className="text-white mb-6">Get In Touch</h5>
                <p><i className="fa fa-map-marker-alt me-3" />Daudzai Business Center, Office No, B3-312,
                 Malek Asghar Square, Kabul, Afghanistan</p>
                <p><i className="fa fa-phone-alt me-3" />+93 782 833 857</p>
                <p><i className="fa fa-envelope me-3" />Optimum.consultancy2016@gmail.com</p>
                <div className="d-flex pt-2">
                  <a className="btn btn-outline-light btn-social" href><i className="fab fa-twitter" /></a>
                  <a className="btn btn-outline-light btn-social" href><i className="fab fa-facebook-f" /></a>
                  <a className="btn btn-outline-light btn-social" href><i className="fab fa-youtube" /></a>
                  <a className="btn btn-outline-light btn-social" href><i className="fab fa-instagram" /></a>
                  <a className="btn btn-outline-light btn-social" href><i className="fab fa-linkedin-in" /></a>
                </div>
              </div>

              <div className="col-md-6 col-lg-4" >
                <h5 className="text-white mb-4"style={{color:"yellow"}}>Popular Link</h5>
                <a className="btn btn-link" href style={{color:"yellow"}}>About Us</a>
                <a className="btn btn-link" href style={{color:"yellow"}}>Contact Us</a>
                <a className="btn btn-link" href style={{color:"yellow"}}>Privacy Policy</a>
                <a className="btn btn-link" href style={{color:"yellow"}}>Terms &amp; Condition</a>
             
              </div>
              <div className="col-md-6 col-lg-3" style={{color:"yellow"}}>
                <h5 className="text-white mb-4">Newsletter</h5>
                <p>Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu</p>
                <div className="position-relative w-100 mt-3">
                  <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Your Email" style={{height: '48px'}} />
                  <a href='www.yahooo.com' className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i className="fa fa-paper-plane text-success fs-4" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="container text-white">
            <div className="copyright">
              <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0 text-white">
                  © <Link className="border-bottom"  style={{color:"yellow"}}  to="/">Optimum Consultancy Service</Link>, All Right Reserved. 
                  {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}

                </div>
                <div className="col-md-6 text-center text-md-end " >
                  <div className="footer-menu text-white" style={{color:"yellow"}} >
                    <Link to="/" style={{color:"yellow"}}>Home</Link>
                    <a href="" style={{color:"yellow"}}>Cookies</a>
                    <a href="" style={{color:"yellow"}}>Help</a>
                    <a href="" style={{color:"yellow"}}>FQAs</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End */}
        {/* Back to Top */}
        <a href="#" className="btn btn-lg btn-danger btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
      </div>
    </div>
  )
}

export default Footer