import React from 'react'
import BannerItems from '../banner/banner-item'
import MySpinner from '../home/Spinar'
import MyCard from '../univercity/Card'
import ServiceItem from './Service-item'


const Service = () => {
  return (
    <div className="bg-white p-0 " >
    <BannerItems  title="Service" item1="Home" item2="pages" item3="Service"/>
    {/* Navbar & Hero End */}
    {/* Service Start */}
    {/* <ServiceItem/> */}
    <MyCard/>
    {/* Service End */}
  </div>
    
  )
}

export default Service