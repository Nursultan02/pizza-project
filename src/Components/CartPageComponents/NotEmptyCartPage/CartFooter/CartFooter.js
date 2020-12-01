import React from 'react';
import classes from './CartFooter.module.css'
import {Link} from "react-router-dom";
import {ProductConsumer} from "../../../../Context";

const CartFooter = () => {
    return (
        <ProductConsumer>
            {value => (
                <div className={classes.CartFooter}>
                    <div className={classes.Total}>
                        <small>Всего пицц: <strong>{value.inCart.length} шт.</strong></small>
                        <p>
                            Сумма заказа:
                            <span> {value.priceOfAll}<i className={'fas fa-ruble-sign'}/></span>
                        </p>
                    </div>
                    <div className={classes.Buttons}>
                        <Link to={'/'}><button className={classes.backBtn}>Вернуться назад</button></Link>
                        <button className={classes.payBtn}>Оплатить сейчас</button>
                    </div>
                </div>
            )}
        </ProductConsumer>
    );
};

export default CartFooter;
