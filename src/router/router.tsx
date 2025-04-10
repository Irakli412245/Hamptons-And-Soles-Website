import {createBrowserRouter} from "react-router-dom";

import Layout from "../components/Layout/Layout.tsx";
import HomePage from "../pages/HomePage.tsx";
import AboutPage from "../pages/AboutPage.tsx";
import ShoesPage from "../pages/Services/ShoesPage.tsx";
import CasaliSoleProtectorsPage from "../pages/Services/CasaliSoleProtectorsPage.tsx";

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
                path: "/shoes", element: <ShoesPage/>
            },
            {
                path: "/casali-sole-protectors", element: <CasaliSoleProtectorsPage/>
            },
        ]
    },
]);

export default router;