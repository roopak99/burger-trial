import React , {Component} from 'react';
import Aux from '../../hoc/Auxil';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
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
        totalPrice:4,
        purchseable : false,
        purchasing : false,
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
        this.updatePurchaseState(updatedIngg);


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
        this.updatePurchaseState(updatedIngg);

    }

    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum,el)=>{
                return sum+el;
            },0);
            this.setState({purchseable: sum>0});
    }
    purchaseHandler =() => {
        this.setState({purchasing : true});
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
                <Modal show={this.state.purchasing}> 
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                ingredientAdded = {this.addInggHandler}
                ingredientRemoved = {this.removeInggHandler}
                disabled = {disabledInfo}
                price = {this.state.totalPrice} 
                purchseable={this.state.purchseable}
                purchasing ={this.purchaseHandler}
                />
            </Aux>

        );
    }
}

export default BurgerBuilder;