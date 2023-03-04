import React from 'react'
import { Link } from 'react-router-dom';
import MySpinner from '../home/Spinar';
// import background from "../../assets/banner1.jpeg";
const BannerItems = (props) => {
    const {title, item1,item2,item3}= props;
  return (
    <div className=" position-relative p-0" >
      <MySpinner/>
      <div className="banner page-header" 
      
      style={{ 
        // backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '55vh'}} 
    
      >
        <div className="container text-center text-info">
          <h1 className="text-info animated zoomIn mb-3">{title}</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center text-info">
              <li className="breadcrumb-item "><Link className="text-blue" to="/">{item1} </Link></li>
              <li className="breadcrumb-item"><Link className="text-blue" to="/page">{item2}</Link></li>
              <li className="breadcrumb-item text-green " aria-current="page">{item3}</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default BannerItems