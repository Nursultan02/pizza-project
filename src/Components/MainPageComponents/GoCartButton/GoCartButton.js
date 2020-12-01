import React from 'react';
import classes from './GoCartButton.module.css'
import {Link} from 'react-router-dom'

const GoCartButton = () => {
    return (
        <button className={classes.GoCartButton}>
            <Link to="/cart">Го В Корзину <i className={'fas fa-shopping-cart'}/></Link>
        </button>
    );
};

export default GoCartButton;
