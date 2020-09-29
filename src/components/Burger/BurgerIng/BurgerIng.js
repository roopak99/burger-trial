import React, { Component } from 'react';
import './BurgerIngg.css';
import PropTypes from 'prop-types';

class BurgerIngg extends Component {
    render(){
        let ingg = null;

    switch(this.props.type){
        case('bread-bottom') : 
            ingg = <div className="BreadBottom"></div>;
            break;
        case('bread-top') :
            ingg = (
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>
            );
            break;
        case('meat'):
        ingg= <div className="Meat"></div> ;
        break;
        case('cheese'):
        ingg= <div className="Cheese"></div> ;
        break; 
        case('bacon'):
        ingg= <div className="Bacon"></div> ;
        break;     
        case('salad'):
        ingg= <div className="Salad"></div> ;
        break; 

        default : ingg = null;
    }
    return ingg;
    }
}
BurgerIngg.propTypes = {
    type : PropTypes.string.isRequired
};

export default BurgerIngg;