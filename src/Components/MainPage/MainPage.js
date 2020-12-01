import React, {Component} from 'react';
import classes from './MainPage.module.css'
import HeaderLogo from "../MainPageComponents/HeaderLogo/HeaderLogo";
import GoCartButton from "../MainPageComponents/GoCartButton/GoCartButton";
import Nav from "../MainPageComponents/Nav/Nav";
import {Route, Switch} from 'react-router-dom'
import AllPizza from "../MainPageComponents/PizzaTypes/AllPizza/AllPizza";
import VegetarianPizza from "../MainPageComponents/PizzaTypes/VegetarianPizza/VegetarianPizza";
import MeatPizza from "../MainPageComponents/PizzaTypes/MeatPizza/MeatPizza";
import GrillPizza from "../MainPageComponents/PizzaTypes/GrillPizza/GrillPizza";
import SpicyPizza from "../MainPageComponents/PizzaTypes/SpicyPizza/SpicyPizza";

class MainPage extends Component {
    render() {
        return (
            <div className={classes.MainPage}>
                <header>
                    <HeaderLogo />
                    <GoCartButton />
                </header>
                <hr/>

                <Nav />

                <Switch>
                    <Route path={'/meat'} component={MeatPizza} />
                    <Route path={'/vegetarian'} component={VegetarianPizza} />
                    <Route path={'/grill'} component={GrillPizza} />
                    <Route path={'/spicy'} component={SpicyPizza} />
                    <Route path={'/'} component={AllPizza} />
                </Switch>


            </div>
        );
    }
}

export default MainPage;