import React from 'react'
import { Link } from 'react-router-dom'
import BannerItems from '../banner/banner-item'
import MySpinner from '../home/Spinar'
import Myheading from '../Title/heading'
import AboutItems from './about-items'

const About = () => {
  return (
    <div>


   <BannerItems  title="About us" item1="Home" item2="pages" item3="About"/>
    {/* Navbar & Hero End */}
    {/* About Start */}
    <div className="py-6">
    <MySpinner/>
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-12 col-md-4 wow fadeInUp" data-wow-delay="0.1s">
            <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">About Us</div>
       <p className="mb-4">Optimum Consultancy Services (OCS), established in 2016, is an educational consultancy organization that assists students in making the right choice concerning pursuing education overseas. Through counseling services, we mentor and guide students toward choosing the right international degree in a country suitable to their profile.
      So far, we could help a maximum number of students from Afghanistan to get admitted to well-established and highly reputed universities in diverse parts of the world, and have a command over the education system worldwide.
      We own five branches across Afghanistan with strong affiliations with educational centers. Our education and coaching centers prepare potential students for international examinations to get admission to high-ranking universities overseas.
      </p>
            <div className="row g-3 mb-4">
              <AboutItems  
              title="vision" 
              desc="To add value for our partner schools and all other stakeholders by being the market leader in delivering one-stop study abroad solutions for the students and assisting them in achieving their objectives through appropriate career counseling & guidance."/>

              <AboutItems  
              title="mession" 
              desc="We are bringing global education within everyone's reach in a very unique way. "/>

              <AboutItems  
              title="Message from CEO" 
              desc="Optimum education consultancy is established with a mission to provide study abroad solutions to students. I’d like to take this opportunity to express my gratitude for considering us to be part of your educational endeavors. We want to make the overall journey of the students from their home country to overseas a charming and hassle-free experience. We strongly believe that the success of an organization is not just based on the profits measured in numbers, but also the quality, service standards, and customer satisfaction. For us creating a sustainable business by exceeding the expectations of the students and the partner institutions precedes everything else.
              We are doing our best to win the trust of the students by being ethical and transparent in our services. The student referrals are an ample testimony to the quality of the services we provide. We believe that positive viva voce is extremely important for our success in this competitive market.
              I once again thank you for believing in us and giving us the opportunity to serve you.
              "/>
            </div>
            <a className="btn btn-primary rounded-pill py-3 px-5 mt-2" href>Read More</a>
          </div>
        </div>
      </div>
    </div>
    {/* About End */}
    
  </div>
  )
}

export default About

