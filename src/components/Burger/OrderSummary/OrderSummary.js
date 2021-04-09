import React from 'react';
import Aux from '../../../hoc/Auxil'

const orderSummary = (props) => {
    const inggSummary = Object.keys(props.ingredients)
                .map(igKey => {
                    return (<li key={igKey}>  {igKey}: {props.ingredients[igKey]} </li>)
                });
    return(
        <Aux>
            <h3> Your Order</h3>
            <p> Following Ingredients</p>
            <ul>
                {inggSummary}
            </ul>
            <p> Continue to checkout</p>

        </Aux>
    )
}; 

export default orderSummary;