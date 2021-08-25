import React from 'react'
import { Container, Row } from 'react-bootstrap'
import PortfolioCard from './PortfolioCard'

function Portfolio() {
    return (
        <Container className="portfolio-container">
            <Row>
                <PortfolioCard/>
            </Row>
        </Container>
    )
}

export default Portfolio