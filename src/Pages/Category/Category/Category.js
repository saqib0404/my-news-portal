import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useTitle } from '../../../Hooks/useTitle';
import NewsSummeryCard from '../../Shared/NewsSummeryCard/NewsSummeryCard';

const Category = () => {
    const allNews = useLoaderData()
    useTitle('Category');

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