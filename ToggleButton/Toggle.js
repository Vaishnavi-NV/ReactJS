import React from 'react'
import Switch from 'react-switch'

class Toggle extends React.Component 
{
	constructor()
	{
		super();
		this.state = { check : true	}
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(check)
	{
		this.setState({check})
	}

	render()
	{
		return(
			<div>
				<h1>Toggle Switch</h1>
				<Switch 
					className = "react-switch"
					onChange = {this.handleChange}
					checked = {this.state.check}
				/>
				<p>The switch is <b>{this.state.check  ? 'on' : 'off'}</b></p>
			</div>
		)
	}
}

export default Toggle;