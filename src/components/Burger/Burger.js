import React from 'react';
import './Burger.css';
import BurgerIngg from './BurgerIng/BurgerIng';

const burger = (props) => {
    return(
        <div className="Burger">
            <BurgerIngg type="bread-top"/>
            <BurgerIngg type="cheese"/>
            <BurgerIngg type="meat"/>
            <BurgerIngg type="bread-bottom"/>
        </div>

    );
};

export default burger;