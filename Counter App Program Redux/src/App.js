import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Action";

const Counter = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        <div className="counter-container">
            <div className="counter-box">
                <h1 className="counter-display">Count: {count}</h1>

                <div className="button-group">
                    <button onClick={() => dispatch(increment())}>Increment</button>

                    <button onClick={() => dispatch(decrement())}>Decrement</button>

                </div>
            </div>
        </div>
    );
};

export default Counter;