import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'
import cls from './HeaderCartButton.module.css'

const HeaderCartButton = props => {

    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
    const cartCtx = useContext(CartContext)

    const { items } = cartCtx
    
    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0)


    const btnClasses = `${cls.button} ${btnIsHighlighted ? cls.bump : ''}`

    useEffect(() => {
        if(items.length === 0) {
            return
        }        
        setBtnIsHighlighted(true)

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false)
        }, 300)

        return () => {
            clearTimeout(timer)
        }
    }, [items])

    return(
        <button className={btnClasses} onClick={props.onClick}>
            <span className={cls.icon}>
                <CartIcon />
            </span>
            <span>Кошик</span>
            <span className={cls.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton