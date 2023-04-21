import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const {id} =useParams()
    const category = useLoaderData()
    return (
        <div>
            {
                category.map(ctg=><NewsCard ctg={ctg._id}> </NewsCard>)
            }
        </div>
    );
};

export default Category;