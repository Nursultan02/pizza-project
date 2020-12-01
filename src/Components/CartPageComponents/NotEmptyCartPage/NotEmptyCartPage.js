import React from 'react';
import classes from './NotEmptyCartPage.module.css'
import CartHeader from "./CartHeader/CartHeader";
import CartProducts from "./CartProducts/CartProducts";
import CartFooter from "./CartFooter/CartFooter";

const NotEmptyCartPage = () => {
    return (
        <div className={classes.NotEmptyCartPage}>
            <div className={classes.CartContent}>
                <CartHeader />
                <hr/>
                <CartProducts />
                <CartFooter />
            </div>
        </div>
    );
};

export default NotEmptyCartPage;
