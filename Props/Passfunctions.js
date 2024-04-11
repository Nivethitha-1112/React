//Pass a function from parent to child compoent, so the child component triggers the function passed down as props.
import React from 'react'
import { useState } from 'react';
import './passfunctions.css'

// Child component representing an item in the shopping list
const ListItem = ({ item, onRemove }) => {
    return (
        <div className='list-item'>
            <span>{item}</span>
            <button onClick={onRemove}>Remove</button>
        </div>
    );
}
//parent component representing the shopping list
const ShoppingList = () => {
    const [items, setItems] = useState(["Apple", "Orange", "Strawberry"]);
    //create a state variable and update the values for it in a list.

    //function to remove the items from the list
    const Handleremove = (index) => {
        const updateditems = [...items]; //creating a copy of items using spread operator
        updateditems.splice(index, 1);
        setItems(updateditems); //Update the state with the new array that doesn't contain the removed item
    }
    return (
        <div className='shopping-list'>
            <h2>PROPS EXAMPLE: 05</h2>
            <p>Passing Functions</p>
            <h3>Shopping List Program</h3>
            {items.map((item, index) => (
                <ListItem
                    key={index}
                    item={item}
                    onRemove={() => Handleremove(index)}
                />
            ))}
        </div>
    );
}
export default ShoppingList;