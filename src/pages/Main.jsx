import React from 'react'
import { Container, Carousel, Card } from 'react-bootstrap'
import firstImg from '../Images/gruzovyie-dronyi.jpg'
import secondImg from '../Images/image1.jpg'
import { useTranslation } from 'react-i18next';

function Main() {
  const { t, i18n } = useTranslation()

  return (
    <Container className="">
      <Card>
        <Card.Footer className="text-center">
          <h2>{t("Wlcome")}</h2>
        </Card.Footer>
          <Card.Body>
            <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={firstImg}
                alt="First slide"
              />
              
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={secondImg}
                alt="Second slide"
              />
            </Carousel.Item>
            
          </Carousel>
        </Card.Body>
        <Card.Footer className="text-center">
          <h4>{t("YouCan")}</h4>
        </Card.Footer>
      </Card>
    </Container>
  )
}

export default Main