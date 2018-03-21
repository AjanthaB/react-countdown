import React, { Component } from 'react';
import Clock from "./Clock.jsx";
import './App.css'

import * as moment from 'moment';

class App extends Component {

	constructor(propeties) {
		super(propeties);

		this.state = {
			deadline: moment().add(5 ,'days').format("MMMM-DD-YYYY"),
			today: moment().add(1, 'days').format("YYYY-MM-DD")
		}

		console.log(this.state);
	}

	onChangeDate(value) {
		const d = moment(value, 'YYYY-MM-DD').format("MMMM-DD-YYYY")
		this.setState({
			deadline: d
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
					<input  min={this.state.today} onChange={event => this.onChangeDate(event.target.value)} type="date" placeholder="new date"/>
				</div>
			</div>
		)
	}
}

export default App;