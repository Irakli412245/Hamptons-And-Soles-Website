import {createBrowserRouter} from "react-router-dom";

import Layout from "../components/Layout/Layout.tsx";
import HomePage from "../pages/HomePage.tsx";
import AboutPage from "../pages/AboutPage.tsx";
import ShoesPage from "../pages/Services/ShoesPage.tsx";

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
        ]
    },
]);

export default router;