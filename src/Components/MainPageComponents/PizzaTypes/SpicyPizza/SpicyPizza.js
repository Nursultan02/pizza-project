import React, {Component} from 'react';
import classes from './SpicyPizza.module.css'
import PizzaMainItem from "../../PizzaMainItem/PizzaMainIteam";
import {ProductConsumer} from "../../../../Context";

class SpicyPizza extends Component {
    render() {
        return (
            <div className={classes.SpicyPizza}>
                <h2>Острые Пиццы</h2>

                <ProductConsumer>
                    {value => (
                        <div className={classes.pizzaWrapper}>
                            {
                                (value.products.filter(product => (product.type === 'Spicy'))).map(product => (
                                    <PizzaMainItem
                                        key={product.id}
                                        id={product.id}
                                        img={product.img}
                                        price={product.price[0]}
                                        name={product.name}
                                        lengthClass={product.lengthClass}
                                    />
                                ))
                            }
                        </div>
                    )}
                </ProductConsumer>
            </div>
        );
    }
}

export default SpicyPizza;