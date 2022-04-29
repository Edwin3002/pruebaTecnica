import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Footer } from './Footer';
import { CardsCruds } from './CardsCruds';


const Home = () => {
    return (
        <div>
            <CardsCruds/>
            <Footer/>
        </div>
    );
};

export default Home;