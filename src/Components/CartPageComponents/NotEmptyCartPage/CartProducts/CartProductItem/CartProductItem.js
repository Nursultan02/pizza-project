import React from 'react';
import classes from './CartProductItem.module.css'

const CartProductItem = props => {
    return (
        <div className={classes.CartProductItem}>
            <div className={classes.cartImage}>
                <img src={props.img} alt="oops"/>
            </div>
            <div className={classes.cartItemTitle}>
                <h5>{props.name}</h5>
                <small>{props.length}</small>
            </div>
            <div className={classes.addAndMinus}>
                <div onClick={props.onMinusItem(props.id)}>-</div>
                <strong>{props.item}</strong>
                <div onClick={props.onAddItem(props.id)}>+</div>
            </div>
            <div className={classes.itemCost}>
                <h5>{props.totalCost} <i className={'fas fa-ruble-sign'}/></h5>
            </div>
            <div onClick={props.onDeleteItem(props.id)} className={classes.deleteButton}>
                <i className={'fas fa-times'} />
            </div>
        </div>
    );
};

export default CartProductItem;
