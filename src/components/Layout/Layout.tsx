import {useEffect} from "react";
import {Outlet} from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css';

import Header from "../Header/Header.tsx";
import Footer from "../Footer/Footer.tsx";

const Layout = () => {
    useEffect(() => {
        AOS.init({
            duration: 2500,
            once: false,
            easing: 'ease-out-cubic',
            mirror: true,
            offset: 10,
            delay: 50,
            anchorPlacement: 'top-bottom',
            disableMutationObserver: false
        })
    }, []);

    return (
        <div className=''>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;