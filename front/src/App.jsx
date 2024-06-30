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
  const [card, setCard] = useState([])
  const [logo,setLogo]=useState([])
  const [product,setProduct]=useState([])
  const [original, setOriginal] = useState([])
  const [filtering, setFiltering] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5050/card').then((res) => {
      setCard(res.data)
 
    })
  }, [])

  useEffect(() => {
    axios.get('http://localhost:5050/logo').then((res) => {
      setLogo(res.data)

    })
  }, [])


  useEffect(() => {
    axios.get('http://localhost:5050/product').then((res) => {
      setProduct(res.data)
    })
  }, [])




  const deleteCard= async (id) => {
    await axios.delete(`http://localhost:5050/card/${id}`).then(() => {
      const filtering = card.filter(item => item._id != id)
      setCard(filtering)
  
     

    })
  }

  const deletetLogo = async (id) => {
    await axios.delete(`http://localhost:5050/logo/${id}`).then(() => {
      const filtering = logo.filter(item => item._id != id)
      setLogo(filtering)
     

    })
  }

  
  const deletetProduct = async (id) => {
    await axios.delete(`http://localhost:5050/product/${id}`).then(() => {
      const filtering = logo.filter(item => item._id != id)
      setProduct(filtering)
     

    })
  }



  const searchingData = (e) => {

    const searchedData = e.target.value.trim().toLowerCase()
    if (searchedData == "") {
      setData([...original])
    } else {
      const searching = filtering.filter(item => item.title.trim().toLowerCase().includes(searchedData))
      setData([...searching])
    }
  }











  const values = {
    card, setCard, deleteCard,setLogo,logo,deletetLogo,searchingData,setProduct,product,deletetProduct
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