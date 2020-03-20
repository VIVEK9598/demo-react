import React, { Component } from 'react'
import App from "./App"

class Counter extends Component {


    render() {
        const { onIncrement, onDecrement, onDelete, onReset } = this.props

        return (
            <div>
                <button className="btn btn-primary" onClick={onReset}>Reset</button>

                {this.props.counter.map(counter => (
                    <App key={counter.id}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        onDelete={onDelete}
                        counter={counter} />
                ))}

            </div>
        )
    }
}
export default Counter;