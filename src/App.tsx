import React, { Component } from 'react';
import Number from './Number';
import { Form, Input } from './Input';

interface IState {
    counter: number;
}

class App extends Component<{}, IState> {
    state = {
        counter: 0,
    };
    render() {
        const { counter } = this.state;

        return (
            <div>
                <Form><Input/></Form>
                <Number count={counter} /> <button onClick={this.add}>add</button>
                <button onClick={this.minus}>minus</button>
            </div>
        );
    }
    add = () => {
        this.setState((prev) => {
            return {
                counter: prev.counter + 1,
            };
        });
    };
    minus = () => {
        this.setState((prev) => {
            return { counter: prev.counter - 1 };
        });
    };
}

export default App;