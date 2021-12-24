import React from 'react'
import Menu from '../common/menu'
import {Carousel} from 'react-bootstrap'

const Home = () => {
    return (
        <React.Fragment>
            <Menu/>         
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                    className="d-block w-60"
                    src="LogoUAI.png?text=Second slide&bg=eee"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h5>Sede Rosario</h5>
                    <p>Ingeniería en Sistemas Informáticos.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-60"
                    src="LogoUAIinformatica.png?text=First slide&bg=f5f5f5"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h5>Sede Rosario</h5>
                    <p>Ingeniería en Sistemas Informáticos.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </React.Fragment>
    )
}

export default Home 