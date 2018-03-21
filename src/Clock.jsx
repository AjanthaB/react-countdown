import React, { Component  } from "react";
import './App.css';


class Clock extends Component {
	
	constructor(props) {
		super(props);

		this.state = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0
		};
	}

	componentWillMount() {
		this.setRemainingTime(this.props.deadline);
	}

	componentDidMount() {
		setInterval(() => this.setRemainingTime(this.props.deadline), 1000);
	}

	setleading0(num) {
		return num < 10 ? '0' + num : num;
	}

	setRemainingTime(deadline) {
		const remainTime = Date.parse(deadline) - Date.parse(new Date());
		const seconds = Math.floor((remainTime / 1000) % 60);
		const minutes = Math.floor((remainTime / (1000 * 60)) % 60);
		const hours = Math.floor((remainTime / (1000 * 60 * 60)) % 60);
		const days = Math.floor(remainTime/(1000 * 60 * 60 * 24));

		this.setState({days, seconds, minutes, hours});
	}

	render() {
		return (
			<div>
				<div className="Clock-days"> {this.setleading0(this.state.days)} days </div>
				<div className="Clock-hours">{this.setleading0(this.state.hours)} hours</div>
				<div className="Clock-minutes">{this.setleading0(this.state.minutes)} minutes</div>
				<div className="Clock-seconds">{this.setleading0(this.state.seconds)} seconds</div>
			</div>
		);
	}
}

export default Clock;