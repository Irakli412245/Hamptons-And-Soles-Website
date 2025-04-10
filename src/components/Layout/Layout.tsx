import {useEffect} from "react";
import {Outlet} from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css';

import Header from "../Header/Header.tsx";
import Footer from "../Footer/Footer.tsx";

const Layout = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true,
            easing: 'ease-in-out',
            mirror: false,
        })
    }, [])

    return (
        <div className=''>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;