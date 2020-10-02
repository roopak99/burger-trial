import React , {Component} from 'react';
import Aux from '../../hoc/Auxil';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGG_PRICES ={
            salad : 1,
            bacon : 2,
            cheese : 1,
            meat : 3,

};


class BurgerBuilder extends Component {

    state = {
        ingredients :{
            salad : 0,
            bacon : 0,
            cheese : 0,
            meat : 0,
        },
        totalPrice:4
    }

    addInggHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngg = {
            ...this.state.ingredients
        };
        updatedIngg[type]= updatedCount;
        const priceAddition = INGG_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = priceAddition+oldPrice;
        this.setState({totalPrice : newPrice, ingredients:updatedIngg});



    }

    removeInggHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount<=0){
            return null;
        }
        const updatedCount = oldCount - 1;
        const updatedIngg = {
            ...this.state.ingredients
        };
        updatedIngg[type]= updatedCount;
        const priceDeduction = INGG_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice : newPrice, ingredients:updatedIngg});

    }

    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };
        for ( let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <=0;
        }
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                ingredientAdded = {this.addInggHandler}
                ingredientRemoved = {this.removeInggHandler}
                disabled = {disabledInfo}
                price = {this.state.totalPrice} />
            </Aux>

        );
    }
}

export default BurgerBuilder;