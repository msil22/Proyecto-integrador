import { createBrowserRouter } from "react-router-dom";
import About from "../views/Acerca-de";
import Home from "../views/Home";

const router = createBrowserRouter([
    {path: '/', element: <Home />},
    {path: '/About', element: <About />}
]);

export default router
