import React from 'react'
import {connect} from "react-redux"
import {increment,decrement} from "../services/actions/counterAction";

const Counter = ({increment,decrement, count}) => {
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={()=>increment()}>Increment</button>
            <button onClick={()=>decrement()}>Decrement</button>
        </div>
    )
}
const mapStateToProps = (state) => ({
    count: state.counterReducer.count
})
export default connect(mapStateToProps, {increment, decrement})(Counter);
