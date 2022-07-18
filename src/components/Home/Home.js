import React from 'react';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';
import RecentlyPost from '../RecentlyPost/RecentlyPost';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div>
                <h2 className='text-center text-primary my-5'>Recommendation</h2>
            </div>
            <Card></Card>
            <RecentlyPost></RecentlyPost>
        </div>
    );
};

export default Home;