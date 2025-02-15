import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const plus = () => {
        setCount(count + 1);
    };

    const minus = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h1>Счёт: {count}</h1>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
        </div>
    );
};

export default Counter;
