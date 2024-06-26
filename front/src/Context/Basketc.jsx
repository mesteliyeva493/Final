
import React from 'react'
import { createContext, useState } from "react";
const basketc = createContext(null)


function BasketContextProvider({ children }) {
    const [basket, setBasket] = useState(localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : []);
    const addBasket = (product) => {
        const target = basket.find((item) => item.product._id == product._id)
        if (target) {
            target.count += 1
            target.totalPrice = target.count * target.product.price
            setBasket([...basket])
            localStorage.setItem("basket", JSON.stringify([...basket]))
        } else {
            const newItem = {
                _id: product._id,
                product: product,
                count: 1,
                totalPrice: product.price
            }
            setBasket([...basket, newItem])
            localStorage.setItem("basket", JSON.stringify([...basket, newItem]))

        }
    }
    const decrease = (product) => {
        const target = basket.find((item) => item.product._id == product._id)
        if (target.count > 0) {
            target.count -= 1
            target.totalPrice = target.count * target.product.price
            setBasket([...basket])
        }
        localStorage.setItem("basket", JSON.stringify([...basket]))
    }

    const increase = (product) => {
        const target = basket.find((item) => item.product._id == product._id)
        target.count += 1
        target.totalPrice = target.count * target.product.price
        setBasket([...basket])
        localStorage.setItem("basket", JSON.stringify([...basket]))
    }
    const deletedBasket = (product) => {
        const target = basket.find((item) => item.product._id == product._id)
        basket.splice(basket.indexOf(target), 1)
        setBasket([...basket])
        localStorage.setItem("basket", JSON.stringify([...basket]))
    }

    const values = {
        basket, addBasket, deletedBasket, decrease, increase
    }
    return (
        <basketc.Provider value={values}>{children}

        </basketc.Provider>
    )
}

export { basketc, BasketContextProvider }
