import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react/cjs/react.development';
import { Col, Card, Row } from 'react-bootstrap';

const Mel = () => {
    const { melID } = useParams()
    const [mel, setMel] = useState({})

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${melID}`
        fetch(url)
            .then(res => res.json())
            .then(mel => setMel(mel.meals[0]))
    }, [])
    return (
        <Row xs={1}>
            <Col>
                <Card>
                    <Card.Img className='w-50 mx-auto' src={mel.strMealThumb} fluid />
                    <Card.Body>
                        <Card.Title><h1>Mel name: {mel.strMeal}</h1></Card.Title>
                        <Card.Text>
                            <strong>Instruction:</strong> {mel.strInstructions}
                        </Card.Text>
                        <Card.Text>
                            <h3>Category: {mel.strCategory}</h3>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

    );
};

export default Mel;