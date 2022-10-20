import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from '../../Shared/NewsSummeryCard/NewsSummeryCard';

const Category = () => {
    const allNews = useLoaderData()
    
    return (
        <div>
            <h2>Total news  are: {allNews.length}</h2>
            {
                allNews.map((news, idx) => <NewsSummeryCard
                    key={idx}
                    news={news}
                ></NewsSummeryCard>)
            }
        </div>
    );
};

export default Category;