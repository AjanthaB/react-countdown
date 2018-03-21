import React, { Component } from 'react';
import Clock from "./Clock.jsx";
import './App.css'

class App extends Component {

	constructor(propeties) {
		super(propeties);

		this.state = {
			deadline: "2018-12-25",
			today: new Date()
		}
	}

	onChangeDate(value) {
		this.setState({
			deadline: value
		});
	}
	
	render() {
		return (
			<div className="App"> 
				<div className="Clock-Title">
					Countdown to {this.state.deadline}
				</div>

				<Clock 
					deadline={this.state.deadline}
				/>
				<div>
					<input min={this.state.today} onChange={event => this.onChangeDate(event.target.value)} type="date" placeholder="new date"/>
				</div>
			</div>
		)
	}
}

export default App;