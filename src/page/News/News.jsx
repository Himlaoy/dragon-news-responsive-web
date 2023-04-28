import React from 'react';
import { Button, Card, Collapse } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import NewsInsights from './NewsInsights/NewsInsights';

const News = () => {
    const news = useLoaderData()
    const { _id, details, image_url,  title ,category_id } = news;

   console.log(_id)


    return (
        <div>            
            <Card >
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="danger"><FaArrowLeft></FaArrowLeft> All news in this category</Button></Link>
                </Card.Body>
            </Card>
            <NewsInsights></NewsInsights>
        </div>
    );
};

export default News;