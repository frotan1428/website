import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CradItems = (props) => {

    const {image,title,desc}= props
  return (

<Card style={{ width: '19rem' }}>
    <Card.Img  variant="top" src={require("../../assets/3.jpeg")}  />
    <Card.Body className='text-center'>
      <Card.Title>{title}</Card.Title>
      <Link className="btn btn-info rounded-pill py-3 px-5 mt-2" to="/details">{desc}</Link>
    </Card.Body>
  </Card>


  )
}

export default CradItems