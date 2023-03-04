import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';

var style={

}

const MySpinner = () => {
  const [ spinner, setSpinner ] = useState(true);

  // It will be executed before rendering

  useEffect(() => {
    setTimeout(() => setSpinner(false), 1000)
  }, [spinner]);

  // [] means like componentDidMount

  return spinner && <div>
     <div  id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center" >
     <Spinner  
      animation="border" variant="primary"/>
     </div>
  </div>;
};

export default MySpinner;