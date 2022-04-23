import React, { PropTypes } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {
    decrement,
    increment,
    reset
} from "../actions/actions.counter.js";


function Counter(props) {

    const counter = useSelector((state) => state.counter);

    const dispatch = useDispatch();


    return (

        <div>
            
            <h3>Counter: {counter}</h3>
            <button className="btn btn-success" onClick={() => dispatch(increment())}>Increase</button>
            <button className="btn btn-danger"onClick={() => dispatch(reset())}>Reset</button>
            <button className="btn btn-primary" onClick={() => dispatch(decrement())}>Decrease</button>

        </div>
    )


}

/*
counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}
*/

export default Counter