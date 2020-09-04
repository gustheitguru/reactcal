import React, {Component} from 'react';

class Button extends Component {
	
	render() {
		return (
				<div>
					<button type="button" class="calc-button btn btn-outline-success">{this.props.symbol}</button>
				</div>
			);
	}	
}

export default Button;