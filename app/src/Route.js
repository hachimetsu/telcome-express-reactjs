import * as React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Homepage from "../../app/src/pages/Homepage";
import Aboutpage from "../../app/src/pages/Aboutpage";
import Itempage from "../../app/src/pages/Itempage";
import Errorpage from "../../app/src/pages/Errorpage";
// import Adminpage from "./pages/Adminpage";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />
    },
    {
        path: "/about",
        element: <Aboutpage />
    },
    {
        path: "/items",
        element: <Itempage />
    },
    {
        path: "*",
        element: <Errorpage />
    }
]);

export default function Router() {
    return <RouterProvider router={router} />
}