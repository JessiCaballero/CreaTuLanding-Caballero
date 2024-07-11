import React from 'react'
import { CiShoppingCart, CiBellOn, CiCreditCard1 } from "react-icons/ci";
import './CartWidget.css'
const CartWidget = () => {
    return (
        <div className='icons'>
            <CiBellOn />
            <span>0</span>
            <CiShoppingCart/>
            <CiCreditCard1 />
        </div>
    )
}

export default CartWidget