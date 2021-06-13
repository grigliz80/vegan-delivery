import React from 'react'
import cls from './CartItem.module.css'

const CartItem = props => {
  const price = `${props.price.toFixed(2)} грн.`

  return (
    <li className={cls['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={cls.summary}>
          <span className={cls.price}>{price}</span>
          <span className={cls.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={cls.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  )
}

export default CartItem
