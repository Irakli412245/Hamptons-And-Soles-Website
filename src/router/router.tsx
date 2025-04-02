import {createBrowserRouter} from "react-router-dom";
import Layout from "../components/Layout/Layout.tsx";
import Home from "../pages/Home/Home.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true, element: <Home/>
            }
        ]
    },
]);

export default router;