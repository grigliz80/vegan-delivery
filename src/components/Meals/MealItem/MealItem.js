import React, { useContext } from 'react'
import CartContext from '../../../store/cart-context'
import cls from './MealItem.module.css'
import MealItemForm from './MealItemForm'

const MealItem = props => {

    const cartCtx = useContext(CartContext)

    const price = `${props.price.toFixed(2)} грн.`

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }

    return(
        <li className={cls.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={cls.description}>{props.description}</div>
                <div className={cls.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler}/>
            </div>
        </li>
    )
}

export default MealItem