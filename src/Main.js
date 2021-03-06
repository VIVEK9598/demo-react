import React, { Component } from 'react'
import Navbar from './Navbar'
import Counter from './Counter';

class Main extends Component {
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
        const index = counter.indexOf(app)
        counter[index] = { ...app }
        counter[index].value--;
        this.setState({ counter });
    }

    handleDelete = deleteId => {
        const counter = this.state.counter.filter(c => c.id !== deleteId)
        this.setState({ counter })
    }
    handleReset = () => {
        const counter = this.state.counter.map(c => {
            c.value = 0
            return c;
        })
        this.setState({ counter })
    }

    render() {
        const { handleDecrement, handleDelete, handleIncrement, handleReset } = this
        return (
            <React.Fragment>
                <Navbar totalCounter={this.state.counter.filter(c => c.value > 0).length} />
                <main className="container">
                    <Counter
                        counter={this.state.counter}
                        onIncrement={handleIncrement}
                        onDecrement={handleDecrement}
                        onReset={handleReset}
                        onDelete={handleDelete} />
                </main>
            </React.Fragment>
        )
    }
}
export default Main;