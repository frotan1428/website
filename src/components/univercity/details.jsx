import React from 'react'
import { Link } from 'react-router-dom'
import BannerItems from '../banner/banner-item'
import MySpinner from '../home/Spinar'
import Myheading from '../Title/heading'

const Details = () => {
  return (
    <>
    <div className="container-xxl bg-white p-5 top-page " >
    <MySpinner/>
    </div>
    <div className="container text-center mt-5">
        <h1>Istanbul Ticaret University</h1>
        <h2>misson and vession</h2>

       <div className='text-left'>
            <h4>Misson</h4>
            <p>To become more active in organizing different activities and international events, and to maintain as one of the leading educational institutions in Turkey and all over the world. It also aims to continue its studies to support the information and technology generations who depend on technology in nearly everything, either academically, research, training, or even in entertainment.</p>
       </div>

       <div>
            <h4>Vession</h4>
            <p>To become more active in organizing different activities and international events, and to maintain as one of the leading educational institutions in Turkey and all over the world. It also aims to continue its studies to support the information and technology generations who depend on technology in nearly everything, either academically, research, training, or even in entertainment.</p>
       </div>
       <a className="btn btn-info rounded-pill py-3 px-5 mt-2" href="https://www.globallinkgroup.com.tr/kopyas%C4%B1-i-stanbul-ti-caret-%C3%BCni-cersi-tesi">More details</a>
    </div>
    </>
  )
}

export default Details