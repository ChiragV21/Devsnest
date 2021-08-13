import React from 'react';

const Card=(props)=>{
    return (
        <>
            <div className="container">
                <div className="content">
                    <h1>{props.food}</h1>
                    <h2>you have consumed {props.calory} cals today</h2>
                </div>
            </div>
        </>
    );
}

export default Card;