import React, { useState } from 'react';

const Counter = () => {

    const [curr, currSet] = useState(0);
    const [currs, currsSet] = useState(0);
    const [num, setNum] = useState(0);
    const [nums, setsNum] = useState(0);

    return (
        <>

            <h2>THA-19:There are 4 counter component instances that each manage their own state.</h2>
            <button onClick={() => {
                currSet(curr + 1)
            }}>{curr}</button>

            <button onClick={() => {
                currsSet(currs + 1)
            }}>{currs}</button>

            <button onClick={() => {
                setNum(num + 1)
            }}>{num}</button>

            <button onClick={() => {
                setsNum(nums + 1)
            }}>{nums}</button>

        </>
    );
};

export default Counter;