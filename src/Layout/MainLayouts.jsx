import React from 'react';
// import Navbar from '../Pages/Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Nav from '../Pages/Shared/Nav';

const MainLayouts = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Nav></Nav>

            <div className='mt-16'>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;