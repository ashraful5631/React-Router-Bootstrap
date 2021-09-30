import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='bg-warning mt-3 p-4'>
            <h1>This is home</h1>
            <h2 className='mb-4'>If you want to Order Some food. Just Press the below button</h2>
            <Link className='bg-danger text-light px-4 py-2' to='/resturent'>Find Food</Link>
        </div>
    );
};

export default Home;