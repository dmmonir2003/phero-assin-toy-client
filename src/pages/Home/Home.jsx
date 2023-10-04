import React from 'react';
import Banner from './Banner/Banner';
import SearchCursor from '../../Shared/SearchCursor/SearchCursor';
import Category from './Category/Category';


const Home = () => {
    return (
        <div>
            <Banner>   </Banner>
            <Category></Category>
            <SearchCursor></SearchCursor>
        </div>
    );
};

export default Home;