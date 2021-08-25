import React from 'react';
import skills from '../assets/data/skills.json'
import { Card } from 'react-bootstrap';

const SkillsCard = () => {
    return (
        skills.map(skill => 
        <Card key={skill.id} className="skill-card">
            <Card.Img className="card-image" src={skill.image_url} />
            <Card.Title className="card-content">{skill.name}</Card.Title>
        </Card>)
    )
}

export default SkillsCard;
