import React from 'react';
import classes from './EmptyCartPage.module.css'
import {Link} from "react-router-dom";

const EmptyCartPage = () => {
    return (
        <div className={classes.EmptyCartPage}>
            <div className={classes.CartContent}>
                <h1>Корзина Пустая <i className={'far fa-frown'} /></h1>
                <p>
                    Вероятней всего, вы еще не заказывали пиццу или очистили корзину. <br/>
                    Для того, чтобы заказать, перейдите на главную страницу.
                </p>
                <img src="images/empty-cart.png" alt=""/>
                <Link to={'/'}>
                    <button>
                        Вернуться Назад
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default EmptyCartPage;
