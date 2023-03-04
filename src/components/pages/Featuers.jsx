import React from 'react'
import BannerItems from '../banner/banner-item'
import MySpinner from '../home/Spinar'
import FeatuersContent from './featuers-content'
import FeatuersItem from './featuers-item'

const Featuers = () => {
  return (
    
    <div className=" bg-white p-0">
       <MySpinner/>
   
    {/* Spinner End */}
    {/* Navbar & Hero Start */}

    <BannerItems  title="Featuers " item1="Home" item2="pages" item3="Featuers"/>
    {/* Navbar & Hero End */}
    {/* Features Start */}
    <FeatuersContent/>
   
    <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
  </div>
  )
}

export default Featuers