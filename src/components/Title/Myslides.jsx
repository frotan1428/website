import React from 'react'
import Slider from "react-animated-slider"
import  horizontalCss from 'react-animated-slider/build/horizontal.css';
import banner from "../../assets/banner1.jpeg"

const Myslides = (props) => {
  const {title,First, button,image}= props;
         const content = [
        { title: 'Optimum Consultancy Services', description: 'Lorem ipsum',button: "learn more" ,image:banner},
        { title: 'You can trust us', description: 'Lorem ipsum',button: "learn more" ,image:banner},
        { title: 'Her eis your Dream ', description: 'Lorem ipsum',button: "learn more" ,image:banner},
        
       
      ];
  return (
   <>
    <Slider classNames={horizontalCss} 
    autoplay={1000}
    >
          {content.map((item, index) => (
            <div 
              key={index}
              style={{ background: `url('${item.image}') ` ,
              backgroundSize:"cover", height:"45vh",backgroundPosition:"center", backgroundRepeat: "revert"} }
              
            >
            <div className="text-center py-5" style={{marginTop:"50px",flex:"center"}}>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <button className='btn btn-primary'>{item.button}</button>
            </div>
            </div>
          ))}
          </Slider>

   </>
        
 
  )
}

export default Myslides