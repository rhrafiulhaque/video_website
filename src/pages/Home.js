import React from 'react';
import Footer from '../components/Footer';
import VideoGrid from '../components/Grid/VideoGrid';
import Navbar from '../components/Navbar';
import Paginations from '../components/Paginations';
import Tags from '../components/Tags';

const Home = () => {
    return (
        <div>
            <Tags/>
            <VideoGrid/>
            <Paginations/>
        </div>
    );
};

export default Home;