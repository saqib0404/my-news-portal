import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsSummeryCard = ({ news }) => {
    // console.log(news);
    const { author, details, image_url, rating, title, _id, total_view } = news;
    return (
        <div>
            <Card className="mb-3">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'>
                        <Image roundedCircle src={author.img} style={{ height: "60px", marginRight: "10px" }}></Image>
                        <div>
                            <small>{author.name}</small> <br />
                            <small>{author.published_date}</small>
                        </div>
                    </div>
                    <div>
                        <FaRegBookmark /> &nbsp;
                        <FaShareAlt />
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} className="mb-2" />
                    <Card.Text>
                        {
                            details.length > 250 ?
                                <>{details.slice(0, 250) + "..."} <Link to={`/news/${_id}`}>Read More</Link></>
                                :
                                <>{details}</>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex justify-content-between">
                    <div className='d-flex align-items-center'>
                        <FaStar className='text-warning me-2'></FaStar>
                        <span>{rating.number}</span>
                    </div>
                    <div className='d-flex align-items-center'>
                        <FaEye className='me-1' />
                        <span>{total_view}</span>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummeryCard;