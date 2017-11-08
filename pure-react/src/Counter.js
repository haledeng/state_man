import React, {
	Component
} from 'react';


const buttonStyle = {
	display: 'block',
	margin: '10px'
};


class Counter extends Component {
	render() {
		return (
			<div style={{margin:'20px'}}>
				<button style={buttonStyle} onClick={this.props.increment}>increment</button>
        		<button style={buttonStyle} onClick={this.props.decrement}>decrement</button>
        		<p>final result: <span style={{color:'red'}}>{this.props.count}</span></p>
			</div>
		)
	}
}

export default Counter