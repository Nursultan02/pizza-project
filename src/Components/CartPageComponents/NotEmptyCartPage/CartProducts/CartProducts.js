import React from 'react';
import classes from './CartProducts.module.css'
import CartProductItem from "./CartProductItem/CartProductItem";
import {ProductConsumer} from "../../../../Context";

const CartProducts = () => {
    return (
        <ProductConsumer>
            {value => (
                <div className={classes.CartProducts}>
                    {value.inCart.map(id => (
                        <CartProductItem
                            key={value.products[id].id}
                            id={value.products[id].id}
                            img={value.products[id].img}
                            name={value.products[id].name}
                            item={value.products[id].item}
                            length={value.products[id].pizzaLength[value.products[id].lengthClass]}
                            totalCost={value.products[id].totalCost}
                            onAddItem={value.methods.addItem}
                            onMinusItem={value.methods.minusItem}
                            onDeleteItem={value.methods.deleteItem}
                        />
                    ))}
                </div>
            )}
        </ProductConsumer>
    );
};

export default CartProducts;
