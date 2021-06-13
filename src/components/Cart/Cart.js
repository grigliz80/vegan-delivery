import React, { useContext, useState } from 'react'
import cls from './Cart.module.css'
import Modal from '../UI/Modal'
import CartItem from './CartItem'
import CartContext from '../../store/cart-context'

const Cart = props => {
    const [thanks, setThanks] = useState(false)
    
    const cartCtx = useContext(CartContext)

    const totalAmount = `${cartCtx.totalAmount.toFixed(2)} грн.`

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id)
    }

    const cartItemAddHandler = item => {
        cartCtx.addItem({...item, amount: 1})
    }

    const cartItems = (
        <ul className={cls['cart-items']}>
            {cartCtx.items.map(item => (
                <CartItem 
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />                
            ))}
        </ul>
    )
    

    const thanksHandler = () => {
        setThanks(true)
        console.log('Ordering...')     
    }

    const isItems = cartCtx.items.length > 0

    return(
        <Modal onCloseCart={props.onCloseCart}>
            {!thanks && cartItems}
            <div className={cls.total}>
                <span>{isItems ? "Підсумкова вартість:" : "Ваш кошик порожній.."}</span>
                <span className={cls.total_price}>{isItems ? totalAmount : null}</span>
            </div>
            {thanks && isItems &&<h1 style={{color: 'orange'}}>Дякуємо Вам за покупку</h1>}
            <div className={cls.actions}>
                <button className={cls['button--alt']} onClick={props.onCloseCart}>Закрити</button>
                {isItems && !thanks && <button className={cls.button} onClick={thanksHandler}>Замовити</button>}
            </div>
        </Modal>
    )
}

export default Cart