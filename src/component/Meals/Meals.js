import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Card } from 'react-bootstrap';

const Meals = (props) => {

    const { strMeal, strCategory, strMealThumb, idMeal } = props.mel
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                        {strCategory}
                    </Card.Text>
                    <Link className='bg-success text-light p-2' to={`/resturent/${idMeal}`}>Details</Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Meals;