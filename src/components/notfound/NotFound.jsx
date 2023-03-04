import React from 'react'
import BannerItems from '../banner/banner-item'

const NotFound= () => {
  return (
    <div className="container-xxl bg-white p-0">
    {/* Spinner Start
    <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
      <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div> */}
    {/* Spinner End */}
    {/* Navbar & Hero Start */}
    <BannerItems  title="Not Found " item1="Home" item2="pages" item3="Not Found"/>
   
    <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
  </div>
  )
}

export default NotFound