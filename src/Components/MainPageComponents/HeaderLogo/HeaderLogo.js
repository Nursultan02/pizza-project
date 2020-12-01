import React from 'react';
import classes from './HeaderLogo.module.css'

const HeaderLogo = () => {
    return (
        <div className={classes.HeaderLogo}>
            <img src="/images/pizza-logo.svg" alt="img here gonna be"/>
            <div>
                <h3>NexxioPizZa</h3>
                <span>самая вкусная пицца во вселенной</span>
            </div>
        </div>
    );
};

export default HeaderLogo;
