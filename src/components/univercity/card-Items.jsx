import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CradItems = (props) => {

    const {image,title,desc}= props
  return (

<Card style={{ width: '16rem' }}>
    <Card.Img width={200} variant="top" src={require("../../assets/logo.jpeg")}  />
    <Card.Body className='text-center'>
      <Card.Title>{title}</Card.Title>
      <Link className="btn btn-info rounded-pill py-3 px-5 mt-2" to="/details">{desc}</Link>
    </Card.Body>
  </Card>


  )
}

export default CradItems