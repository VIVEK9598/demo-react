import React, { Component } from 'react'
import App from "./App"

class Counter extends Component {
    state = {
        counter: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ]
    };

    handleIncrement = ncounter => {
        const counter = [...this.state.counter]
        const index = counter.indexOf(ncounter)
        counter[index] = { ...ncounter }
        counter[index].value++;
        this.setState({ counter });

    }

    handleDecrement = app => {
        const counter = [...this.state.counter]
        const index=counter.indexOf(app)
        counter[index]={...app} 
        counter[index].value--;
        this.setState({counter});
    }

    handleDelete = deleteId => {
        const counter = this.state.counter.filter(c => c.id !== deleteId)
        this.setState({ counter })
    }
    handleReset = () => {
        // console.log("handle reset clicked", deleteId)
        const counter = this.state.counter.map(c => {
            c.value = 0
            return c;
        })
        this.setState({ counter })
    }


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