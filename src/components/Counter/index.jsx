import React, { useState } from 'react';

function Counter() {
    const [number, setNumber] = useState(0)
    return (
        <div>
            {number}
            <button onClick={()=> setNumber(number + 1)}>Increase</button>
            <button onClick={()=> setNumber(0)}>reset</button>
            <button onClick={()=> setNumber(number - 1)}>Decrease</button>
        </div>
    );
}

export default Counter;