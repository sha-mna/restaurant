import React, { useState } from 'react';

function Random() {
    const [counter, setCounter] = useState(1);
    const [name, setName] = useState("John");

    function increment() {
        setCounter(counter + 1);
    }

    function decrement() {
        setCounter(counter - 1);
    }

    function changeName() {
        setName("Abraham");
    }

    return (
        <div>
            <h1>Value is {counter}</h1>
            <button onClick={increment}>Add me</button>
            <button onClick={decrement}>Subtract me</button>
            <h1>My name is {name}</h1>
            <button onClick={changeName}>Change Name</button>
        </div>
    )
}

export default Random;
