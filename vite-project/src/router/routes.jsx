import { createBrowserRouter } from "react-router-dom";;
import Home from "../views/Home";
import EmpresaProfile from "../views/Perfil-Empresa";

const router = createBrowserRouter([
    {path:'/', element: <Home />},
    {path:'/perfil-empresa', element: <EmpresaProfile />}
]);

export default router
