import React from 'react';
import classes from './PizzaMainIteam.module.css'
import {ProductConsumer} from "../../../Context";

const PizzaMainItem = (props) => {
    return (
        <div className={classes.PizzaMainItem}>
            <img src={props.img} alt=""/>
            <h4>{props.name}</h4>
            <div className={classes.choose}>
                <ProductConsumer>
                    {value => (
                        <React.Fragment>
                            {[26, 30, 40].map((length, index) => (
                                <div
                                    key={index}
                                    onClick={value.methods.plusClass(index, props.id)}
                                    className={index===props.lengthClass ? classes.activeClass : null}
                                >{length} см.</div>
                            ))}
                        </React.Fragment>
                    )}
                </ProductConsumer>
            </div>
            <div className={classes.itemFoot}>
                <span>от {props.price}<i className={'fas fa-ruble-sign'}/></span>
                <ProductConsumer>
                    {value => (
                        <React.Fragment>
                            {value.products[props.id-1].inCart ? <AddedButton /> : <Button onClick={value.methods.addToCart(props.id)} />}
                        </React.Fragment>
                    )}
                </ProductConsumer>

            </div>
        </div>
    );
};

const Button = (props) => {
    return (
        <button className={classes.Button} onClick={props.onClick}>
            + Добавить
        </button>
    )
}

const AddedButton = () => {
    return (
        <button disabled={true} className={classes.AddedButton}>
            Добавлено
        </button>
    )
}

export default PizzaMainItem;
