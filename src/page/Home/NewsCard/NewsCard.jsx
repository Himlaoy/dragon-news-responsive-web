import React from 'react';
import moment from 'moment';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBeer, FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const NewsCard = ({ news }) => {

    const { _id, total_view, rating, details, image_url, thumbnail_url, title, author, published_date } = news;

    return (
        <div>
            <Card className=" mb-4">
                <Card.Header className='d-flex align-items-center'>
                    <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
                    <div className='flex-grow-1 ps-2'>
                        <p className='mb-0'>{author?.name}</p>
                        <p><small>{moment(author?.published_date).format('yyyy mm ')}</small></p>
                    </div>
                    <div>
                        <FaRegBookmark></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Img variant="top" src={thumbnail_url} />
                    <Card.Title>{title}</Card.Title>
                    <Card.Text >
                        {details > 259 ? <>{details}</> : <>{details.slice(0, 250)}.... <Link to={`/news/${_id}`}>ReadMore</Link></>}
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
                    <div>
                        <Rating
                            placeholderRating={rating?.number}
                            emptySymbol={<FaRegStar></FaRegStar> }
                            placeholderSymbol={<FaStar className='text-warning'></FaStar> }
                            fullSymbol={ <FaStar></FaStar>}
                        >

                        </Rating>
                        <span>{rating?.number}</span>
                    </div>
                    <div className='d-flex align-items-center'>
                        <FaEye></FaEye>
                        <p>{total_view}</p>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;