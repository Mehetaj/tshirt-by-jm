import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import './Layout.css'

const Main = () => {
    return (
        <div className='center'>
            <div className='container'>
            <Header/>
            <Outlet/>
            </div>
        </div>
    );
};

export default Main;