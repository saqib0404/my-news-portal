import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';

const News = () => {
    const news = useLoaderData();
    console.log(news);
    const { image_url, details, author, category_id, title, rating } = news;
    return (
        <div>
            <Card >
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title className='text-center'>{title}</Card.Title>
                    <div className='d-flex justify-content-around my-4'>
                        <p><b>Author: </b>{author.name}</p>
                        <p><b>Published Date: </b>{author.published_date}</p>
                        <p className='d-flex align-items-center'><FaStar className='text-warning me-2'></FaStar><b>{rating.number}</b></p>
                    </div>
                    <Card.Text>{details}</Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="primary">Go to this category</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;