import React from 'react'
import BannerItems from '../banner/banner-item'
import MyUnivercity from '../univercity/univercity-card'



const Service = () => {
  return (
    <div className="bg-white p-0 " >
    <BannerItems  title="Service" item1="Home" item2="pages" item3="Service"/>
    {/* Navbar & Hero End */}
    {/* Service Start */}
    {/* <ServiceItem/> */}
   <MyUnivercity/>
    {/* Service End */}
  </div>
    
  )
}

export default Service