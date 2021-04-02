import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase, reset } from './counterSlice';
import style from './style.module.css';
function CounterFeature() {
    const dispatch = useDispatch()
    const counter = useSelector(state =>state.counter)
    const handleIncreaseClick = () => {
        const action = increase()
        dispatch(action)
    }
    const handleDecreaseClick = () => {
        const action = decrease()
        dispatch(action)
    }
    const handleResetClick = () => {
        const action = reset()
        dispatch(action)
    }
    return (
        <div className={style.counter}>
            Counter: {counter}
            <div>
                <button onClick={handleIncreaseClick}>Increase</button>
                <button onClick={handleResetClick}>Reset</button>
                <button onClick={handleDecreaseClick}>Decrease</button>
            </div>
        </div>
    );
}

export default CounterFeature