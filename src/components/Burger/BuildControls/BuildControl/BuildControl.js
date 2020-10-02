import React from 'react';
import './BuildControl.css';


const buildControl = (props) => 
    <div className="BuildControl">
    <div> {props.label} </div>
    <button onClick={props.removed} disabled={props.disabled}> Less</button>
    <button onClick={props.added}> More</button>
    </div>



export default buildControl;