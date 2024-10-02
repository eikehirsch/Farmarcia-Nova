import { createBrowserRouter } from "react-router-dom"

import Home from "../pages/home/Home"
import Atendimento from "../pages/atendimento/Atendimento"


const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/atendimento", element: <Atendimento />}
])

export default router;