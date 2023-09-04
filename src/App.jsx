import React from "react";

import Headers from './headers/Headers.jsx';
import Main from './main/Main.jsx';
import Question from "./questions/Question.jsx";
import Materials from "./Materials/Materials.jsx";
import Contact from "./contact/Contact.jsx"

import { RouterProvider, createHashRouter,createBrowserRouter, Outlet } from "react-router-dom";

const router = createHashRouter([{
    path: '/',
    element: <>
        <nav><Headers /></nav>
        <Outlet /></>,
    children: [
        {
            index: true,
            element: <Main />
        },
        {
            path: 'question',
            element: <Question />
        },
        {
            path: 'materials',
            element: <Materials />
        },
        {
            path: 'contact',
            element: <Contact />
        }]
},
{
    path: '*',
    element: <p>Page not found</p>
}
])


export default () => {
    return <>
        <div>
            <RouterProvider router={router} />
        </div>
    </>
} 