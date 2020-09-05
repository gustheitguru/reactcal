import React, {Component} from 'react';

class Button extends Component {
	
	render() {
		return (
				<div className={`column-${this.props.cols}`}>
					<button type="button" onClick={(e)=> this.props.action(this.props.symbol)} className="calc-button btn btn-outline-success">{this.props.symbol}</button>
				</div>
			);
	}	
}

export default Button;