import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import dakota from '../assets/images/dakota.png'
import SkillsCard from './SkillsCard'


function Home() {
    return (
        <Container className="home-container">
            <Row>
                <Col Image className="avatar">
                    <Image src={dakota} roundedCircle />
                </Col>
                <Col md={6}>
                    <h1 className="welcome">
                        HI, I'M <strong className="dakota">DAKOTA</strong>,
                        <br></br>
                        SOFTWARE 
                        <br></br>
                        ENGINEER
                    </h1>
                </Col>
            </Row>
            <br></br>
            <br></br>
            <Row className="card-container">
                <SkillsCard/>
            </Row>
        </Container>
    )
}

export default Home