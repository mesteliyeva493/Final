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
import { jwtDecode } from 'jwt-decode'
import { Toaster } from 'react-hot-toast';

function App() {
  const [card, setCard] = useState([])
  const [logo, setLogo] = useState([])
  const [product, setProduct] = useState([])
  const [original, setOriginal] = useState([])
  const [filtering, setFiltering] = useState([])




  const [users, setUsers] = useState([])
  const [oneUser, setOneUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [currentUser, setCurrentUser] = useState(null)

  const getAllUsers = async () => {
    setLoading(true)
    await axios.get(`http://localhost:5050/users`).then(res => {
      setUsers(res.data)
      setLoading(false)
    }).catch(err => {
      setLoading(false)
      setError(err)
    })
  }

  const getOneUser = async (id) => {
    await axios.get(`http://localhost:5050/users/${id}`).then(res => {
      setOneUser(res.data)
    }).catch(err => {
      setError(err)
    })
  }

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5050/users/${id}`).then(res => {
      const updateUsers = users.filter(user => user._id !== id)
      setUsers(updateUsers)
    }).catch(err => {
      setError(err)
    })
  }



  const getMeFunction = async () => {
    const token = localStorage.getItem('token')
    await axios.get(`http://localhost:5050/users/getMe`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      if (token) {
        const decode = jwtDecode(token)
        setCurrentUser(decode)
      }
    }).catch(err => {
      setError(err)
    })
  }
  useEffect(() => {
    getAllUsers()


  }, [])
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      getMeFunction()
    }
  }, [])
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




  const deleteCard = async (id) => {
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

  const [oneProduct, setOneProduct] = useState(null)
  const [productErr, setProductErr] = useState(null)
  


  
  const getOneProduct = async (id) => {
    await axios.get(`http://localhost:5050/product/${id}`).then(res => {
      setOneProduct(res.data)
    }).catch(err => {
      setProductErr(err)
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




  const [orders, setOrders] = useState([])
  const [oneOrder, setOneOrder] = useState(null)
  const [orderErr, setOrderErr] = useState(null)


  const getAllOrders = async () => {
    await axios.get(`http://localhost:5050/orders`).then(res => {
      setOrders(res.data)
    }).catch(err => {
      setOrderErr(err)
    })
  }

  const getOneOrder = async (id) => {
    await axios.get(`http://localhost:5050/orders/${id}`).then(res => {
      setOneOrder(res.data)
    }).catch(err => {
      setOrderErr(err)
    })
  }

  const deleteOrder = async (id) => {
    await axios.delete(`http://localhost:5050/orders/${id}`).then(res => {
      const update = orders.filter(order => order._id !== id)
      setOrders(update)
    }).catch(err => {
      setOrderErr(err)
    })
  }

  useEffect(() => {
    getAllOrders()
  }, [])







  const values = {
    card, setCard, deleteCard, setLogo, logo, deletetLogo, searchingData, setProduct, product, deletetProduct, getOneProduct,
    getAllUsers, getOneUser, deleteUser, users, setUsers, oneUser, setOneUser, loading, setLoading, error, setError, currentUser, setCurrentUser,
    orders, setOrders,oneOrder, setOneOrder,deleteOrder
  }



  return (
    <>

      <mainContext.Provider value={values}>
        <BasketContextProvider>
          <RouterProvider router={router} />
          <Toaster />
        </BasketContextProvider>
      </mainContext.Provider>
    </>
  )
}

export default App