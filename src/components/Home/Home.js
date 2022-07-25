import React from 'react';
import AllPost from '../AllPost/AllPost';
import Banner from '../Banner/Banner';
import BlogsPost from '../BlogsPost/BlogsPost';
import Card from '../Card/Card';
// import RecentlyPost from '../RecentlyPost/RecentlyPost';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div>
                <h2 className='text-center text-primary my-5'>Recommendation</h2>
            </div>
            <Card></Card>
            <AllPost></AllPost>

            {/* <RecentlyPost></RecentlyPost> */}
            
        </div>
    );
};

export default Home;