//Redux is used in managing the application's state & also sharing the data between components 
//Instead of using props & usecontext, redux is being used in big applications
//Redux gets the data from one component & keep it store, after that it will be shared with other component
//To install redux - npm i react-redux @reduxjs/toolkit

import React, { useState } from "react";
import { addCustomer as addCustomerAction } from "../slices/customerSlice";
import { useDispatch } from "react-redux";

export default function CustomerAdd() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    // const [customers, setCustomers] = useState([]);

    function addCustomer() {
        if (input) {
            // setCustomers((previousState) => [...previousState, input]);
            dispatch(addCustomerAction(input));
            setInput("");
        }
    }

    return <>
        <div>
            <h3>Add New Customer</h3>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={addCustomer}>Add</button>
        </div>
    </>
}
