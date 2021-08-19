import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import dakota from '../assets/images/dakota.png'

function Home() {
    return (
        <Container className="home-container">
            <Row>
                <Col xs={6} md={4}>
                    <Image src={dakota} roundedCircle />
                </Col>
                <Col>
                    <h1 className="welcome">
                        HI, I'M <strong className="dakota">DAKOTA</strong>,
                        <br></br>
                        SOFTWARE 
                        <br></br>
                        ENGINEER
                    </h1>
                </Col>
            </Row>
        </Container>
    )
}

export default Home