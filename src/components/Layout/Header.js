import React, { Fragment } from 'react'
import cls from './Header.module.css'
import headerImg from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

const Header = props => {
    return(
        <Fragment>
            <header className={cls.header}>            
                <h1>Веган - доставка</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={cls['main-image']}>
                <img src={headerImg} alt="header-img" title="зображення шапки"/>
            </div>
        </Fragment>
    )
}

export default Header