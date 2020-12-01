import React from 'react';
import classes from './CartHeader.module.css'
import {ProductConsumer} from "../../../../Context";

const CartHeader = () => {
    return (
        <div className={classes.CartHeader}>
            <h3> <i className={'fas fa-shopping-cart'} /> Корзина</h3>
            <ProductConsumer>
                {value => (
                    <small onClick={value.methods.clearCart()}><i className={'fas fa-trash-alt'} /> Очистить корзину</small>
                )}
            </ProductConsumer>
        </div>
    );
};

export default CartHeader;
