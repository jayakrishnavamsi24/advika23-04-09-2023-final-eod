import React, { Component } from 'react';
import './index.css'

class EventTimer extends Component {
    constructor(props) {
      super(props);
      this.state = {
        distance: 0,
      };
    }
  
    componentDidMount() {
      const countDownDate = new Date("Sep 15, 2023 10:00:00").getTime();
      this.timerInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        this.setState({ distance });
      }, 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.timerInterval);
    }
  
    render() {
      const {distance} = this.state 
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      return (
        <div className="timer-container">
          <p className='timer-title'> Event Starts In : </p>
          <h1 className='timerr'>{days}d:{hours}h:{minutes}m:{seconds}s</h1>
        </div>
      );
    }
  }
  

export default EventTimer

