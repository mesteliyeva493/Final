import { useState, useEffect } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter(ROUTES)
import mainContext from './Context/Context.jsx';
import { BasketContextProvider } from './Context/Basketc.jsx'
import ROUTES from './Router/Router';
import axios from 'axios'
function App() {
  const [data, setData] = useState([])
  const [datal,setDatal]=useState([])
  const [original, setOriginal] = useState([])
  const [filtering, setFiltering] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5050/card').then((res) => {
      setData(res.data)
      setOriginal(res.data)
      setFiltering(res.data)

    })
  }, [])

  useEffect(() => {
    axios.get('http://localhost:5050/logo').then((res) => {
      setDatal(res.data)

    })
  }, [])


  const deleteData = async (id) => {
    await axios.delete(`http://localhost:5050/card/${id}`).then(() => {
      const filtering = data.filter(item => item._id != id)
      setData(filtering)
      setOriginal(res.data)
      setFiltering(res.data)
     

    })
  }

  const deletetData = async (id) => {
    await axios.delete(`http://localhost:5050/logo/${id}`).then(() => {
      const filtering = data.filter(item => item._id != id)
      setDatal(filtering)
     

    })
  }



  const values = {
    data, setData, deleteData,setDatal,datal,deletetData
  }



  return (
    <>

      <mainContext.Provider value={values}>
        <BasketContextProvider>
          <RouterProvider router={router} />
        </BasketContextProvider>
      </mainContext.Provider>
    </>
  )
}

export default App