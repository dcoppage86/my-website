import React from 'react'
import { Container, Row, Image } from 'react-bootstrap'
import dakota from '../assets/images/dakota.png'
import SkillsCard from './SkillsCard'


function Home() {
    return (
        <Container className="home-container">
            <div className="welcome-div" md={6}>
                <Image className="avatar" src={dakota} roundedCircle />
                <h1 className="welcome">
                    HI, I'M <strong className="dakota">DAKOTA</strong>,
                    <br></br>
                    SOFTWARE 
                    <br></br>
                    ENGINEER
                </h1>
            </div>
            <br></br>
            <br></br>
            <Row className="card-container">
                <SkillsCard/>
            </Row>
        </Container>
    )
}

export default Home