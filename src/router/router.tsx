import {createBrowserRouter} from "react-router-dom";

import Layout from "../components/Layout/Layout.tsx";
import HomePage from "../pages/HomePage.tsx";
import AboutPage from "../pages/AboutPage.tsx";
import ContactPage from "../pages/ContactPage.tsx";
import ShoesPage from "../pages/Services/ShoesPage.tsx";
import CasaliSoleProtectorsPage from "../pages/Services/CasaliSoleProtectorsPage.tsx";
import BagPage from "../pages/Services/BagPage.tsx";
import JacketPage from "../pages/Services/JacketPage.tsx";
import DelicateCleaningPage from "../pages/Services/DelicateCleaningPage.tsx";
import ErrorPage from "../pages/ErrorPage.tsx";
import {ProductDetails, Products} from "../components/Product";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true, element: <HomePage/>
            },
            {
                path: '/about', element: <AboutPage/>
            },
            {
                path: '/contacts', element: <ContactPage/>
            },
            {
                path: "/shoes-restoration", element: <ShoesPage/>
            },
            {
                path: "/casali-sole-protectors", element: <CasaliSoleProtectorsPage/>
            },
            {
                path: '/bag-restoration', element: <BagPage/>
            },
            {
                path: '/jacket-restoration', element: <JacketPage/>
            },
            {
                path: '/delicate-cleaning', element: <DelicateCleaningPage/>
            },
            {
                path: '/products', element: <Products/>
            },
            {
                path: 'products/:id', element: <ProductDetails/>
            },
            {
                path: '*', element: <ErrorPage/>
            },
        ]
    },
]);

export default router;