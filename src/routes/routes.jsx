import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <h1>Page Not Found!</h1>,
        children: [
            {
                path: "/",
                element: <Home />,
            }
        ]
    },
]);

export default router;