import React, {Component} from 'react';
import classes from './GrillPizza.module.css'
import {ProductConsumer} from "../../../../Context";
import PizzaMainItem from "../../PizzaMainItem/PizzaMainIteam";

class GrillPizza extends Component {
    render() {
        return (
            <div className={classes.GrillPizza}>

                <h2>Гриль Пиццы</h2>

                <div className={classes.grillWrapper}>
                    <ProductConsumer>
                        {value => (
                            <div className={classes.pizzaWrapper}>
                                {
                                    (value.products.filter(product => (product.type === 'Grill'))).map(product => (
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
            </div>
        );
    }
}

export default GrillPizza;