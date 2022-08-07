import React from 'react'
import { Container, Carousel } from 'react-bootstrap'
import firstImg from '../Images/gruzovyie-dronyi.jpg'
import secondImg from '../Images/images.jpg'

function Main() {
  return (
    <Container className="">
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={firstImg}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={secondImg}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    </Container>
  )
}

export default Main