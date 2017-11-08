import React, {
    Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    onIncrement() {
        let {
            count
        } = this.state;
        count++;
        this.setState({
            count: count
        });
    }
    onDecrement() {
        let {
            count
        } = this.state;
        count--;
        this.setState({
            count,
        });
    }
    render() {
        return (
            <Counter count={this.state.count} increment={this.onIncrement.bind(this)} decrement={this.onDecrement.bind(this)}></Counter>
        );
    }
}

export default App;