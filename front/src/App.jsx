import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router=createBrowserRouter(ROUTES)
import './App.css'
import ROUTES from './Router/Router';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     

     <RouterProvider router={router} />
    </>
  )
}

export default App
