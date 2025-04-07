import {createBrowserRouter} from "react-router-dom";
import Layout from "../components/Layout/Layout.tsx";
import Home from "../pages/Home/Home.tsx";
import Services from "../components/Services/Services.tsx";
import {About} from "../components/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true, element: <Home/>
            },
            {
                path: "/services", element: <Services/>
            },
            {
                path: 'about', element: <About/>
            }
        ]
    },
]);

export default router;