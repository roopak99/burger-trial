import React from 'react';
import './Burger.css';
import BurgerIngg from './BurgerIng/BurgerIng';

const burger = (props) => {

    let transformedIngg = Object.keys(props.ingredients)
            .map((igkey) => {
                return [...Array(props.ingredients[igkey])].map((_,i) => {
                  return  <BurgerIngg key={igkey+i} type ={igkey} />;
                })
            } )
            .reduce((arr,el) => {
                return arr.concat(el)
            },[]);

    if(transformedIngg.length===0)
    {
        transformedIngg = <p> please add ingredients</p>
    }

    return(
        <div className="Burger">
            <BurgerIngg type="bread-top"/>
            {transformedIngg}
            <BurgerIngg type="bread-bottom"/>
        </div>

    );
};

export default burger;