import React, { useRef, useState } from 'react'
import cls from './MealItemForm.module.css'
import Input from '../../UI/Input'

const MealItemForm = props => {

    const [amountIsValid, setAmountIsValid] = useState(true)

    const amountInputRef = useRef()

    const submitHandler = event => {
        event.preventDefault()

        const enteredAmount = amountInputRef.current.value
        const enteredAmountNumber = +enteredAmount
        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false)
            return
        }
        props.onAddToCart(enteredAmountNumber)
    }

    return(
        <form className={cls.form} onSubmit={submitHandler}>
            <Input 
                ref={amountInputRef}
                label="K-сть:" 
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }} />
                <br/>
            <button>Додати</button>
            {!amountIsValid && <p>Уведіть правильну к-сть (1 - 5)</p>}
        </form>
    )
}

export default MealItemForm