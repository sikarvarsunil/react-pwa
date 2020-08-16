import React from 'react';
import {Carousel} from 'react-bootstrap';

const Home = () => {

    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./assets/images/slide1.jpeg"
                height='800'
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
                src="./assets/images/slide2.jpeg"
                alt="Third slide"
                height='800'
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./assets/images/slide3.jpeg"
                alt="Third slide"
                height='800'
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Home;