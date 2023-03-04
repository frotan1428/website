import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MySpinner from '../home/Spinar';
import CradItems from './card-Items';
const MyCard = () => {
  return (

    <>
      <div className="container-xxl bg-white p-0">
      <MySpinner/>

    <div className="container-xxl py-6">
      <div className="container">
        <div className="mx-auto text-center wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
          <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">our university</div>
          <h2 className="mb-5">All Universities</h2>
          
        </div>
        <Container>
            <Row>
                <Col>
                <CradItems  title="Study In India" desc="More Deatils"/>
                </Col>

                <Col>
                <CradItems  title="Studey In Germany" desc="More Deatils"/>
                </Col>
                <Col>
                <CradItems  title="Studey In USA" desc="More Deatils"/>
                </Col>
                
            </Row>
        </Container>
    
    
    
      </div>
    </div>
  
    
 
    <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
  </div>
    </>


  
    
  )
}

export default MyCard