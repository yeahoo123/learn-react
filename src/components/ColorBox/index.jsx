import React, { useState } from 'react';

function ColorBox() {
    const [color, setColor] = useState("white")
    return (
        <div>
            <button onClick={()=>color === "white" ? setColor("black"): setColor("white")}>{color}</button>
        </div>
    );
}

export default ColorBox;