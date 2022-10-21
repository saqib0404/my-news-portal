import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h2>All of our terms and conditions:</h2>
            <ul>
                <li>Bhalo hoy</li>
                <li>Bhalo hoy</li>
                <li>Bhalo hoy</li>
                <li>Bhalo hoy</li>
                <li>Bhalo hoy</li>
                <li>Bhalo hoy</li>
                <li>Bhalo hoy</li>
                <li>Bhalo hoy</li>
            </ul>
            <Link to='/register'><Button>Go Back to Register</Button></Link>
        </div>
    );
};

export default TermsAndConditions;