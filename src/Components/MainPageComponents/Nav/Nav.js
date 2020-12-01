import React from 'react';
import classes from './Nav.module.css'
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={classes.Nav}>
            <ul>
                <li>
                    <Link to={'/'}>Все</Link>
                </li>
                <li>
                    <Link to={'/meat'}>Мясные</Link>
                </li>
                <li>
                    <Link to={'/vegetarian'}>Вегетарианская</Link>
                </li>
                <li>
                    <Link to={'grill'}>Гриль</Link>
                </li>
                <li>
                    <Link to={'spicy'}>Острые</Link>
                </li>
            </ul>

            <div className={classes.Sort}>
                <h4>Sort By Types</h4>
            </div>
        </nav>
    );
};

export default Nav;
