import React from 'react'
import BannerItems from '../banner/banner-item'
import MyCard from './Card'
import Card from './Card'


const MyUnivercity = () => {
  return (
  
 <div className="container-xxl position-relative p-0" >
    <BannerItems  title="All univercity" item1="Home" item2="pages" item3="Univercity"/>
    
        <MyCard/>
   
    </div>

  )
}

export default MyUnivercity