import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import Meals from '../Meals/Meals';
import { Row } from 'react-bootstrap';


const Resturent = () => {
    const [serchtext, setSerchText] = useState('')
    const [meals, setMeals] = useState([])


    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${serchtext}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [serchtext])
    const handeltext = e => {
        const textValue = e.target.value
        setSerchText(textValue);
    }

    return (
        <div>
            <input className='my-4 w-50' onChange={handeltext} type="text"
                placeholder="Search meal by name" />

            <div className='container'>
                <Row xs={1} md={3} className="g-5">
                    {
                        meals.map(mel => <Meals mel={mel}></Meals>)
                    }
                </Row>
            </div>

        </div>
    );
};

export default Resturent;