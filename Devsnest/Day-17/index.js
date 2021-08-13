import React from 'react';
import ReactDOM from 'react-dom';
import Data from './Data';
import Card from './Card';
import './index.css'

function ncard(val) {
    return (
        <Card
            food={val.food}
            calory={val.calory}
        />
    );
}
ReactDOM.render(
    <>
        <h1 style={{textAlign:"center"}}>Calorie Read Only</h1>
        <div className="newCard">
            {Data.map(ncard)}
        </div>
    </>
    , document.getElementById("root")
);