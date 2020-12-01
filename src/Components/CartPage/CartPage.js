import React, {Component} from 'react';
import classes from './CartPage.module.css'
import HeaderLogo from "../MainPageComponents/HeaderLogo/HeaderLogo";
import {ProductConsumer} from "../../Context";
import EmptyCartPage from "../CartPageComponents/EmptyCartPage/EmptyCartPage";
import NotEmptyCartPage from "../CartPageComponents/NotEmptyCartPage/NotEmptyCartPage";

class CartPage extends Component {
    render() {
        return (
            <div className={classes.CartPage}>
                <header>
                    <HeaderLogo />
                </header>

                <ProductConsumer>
                    {value => (
                        value.isCartEmpty ? <EmptyCartPage/> : <NotEmptyCartPage/>
                    )}
                </ProductConsumer>
            </div>
        );
    }
}

export default CartPage;