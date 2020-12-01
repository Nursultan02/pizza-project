import React, {Component} from 'react';
import classes from './AllPizza.module.css'
import PizzaMainItem from "../../PizzaMainItem/PizzaMainIteam";
import {products} from '../../../../data'
import {ProductConsumer} from "../../../../Context";

class AllPizza extends Component {

    state = {
        products: [...products]
    }
    render() {
        return (
            <div className={classes.AllPizza}>
                <h2>Все Пиццы</h2>

                <ProductConsumer>
                    {value => {
                        return (
                            <div className={classes.pizzaWrapper}>
                            {value.products.map(product => (
                                <PizzaMainItem
                                    key={product.id}
                                    id={product.id}
                                    img={product.img}
                                    price={product.price[0]}
                                    name={product.name}
                                    lengthClass={product.lengthClass}
                                />
                            ))}
                        </div>)
                    }}
                </ProductConsumer>
            </div>
        );
    }
}

export default AllPizza;