import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const {id} =useParams()
    const category = useLoaderData()
    // console.log(category)
    return (
        <div>
            { id && <h2>This is all news category {category.length}</h2>}
            {
                category.map(news=><NewsCard key={news._id}
                     news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;