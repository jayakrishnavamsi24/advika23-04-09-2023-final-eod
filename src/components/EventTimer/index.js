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
      const countDownDate = new Date("Sep 14, 2023 10:00:00").getTime();
      this.timerInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        if(distance < 0) {
          this.setState({distance: 0})
        }
        else {
          this.setState({ distance });
        }
      }, 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.timerInterval);
    }
  
    render() {
      const {distance} = this.state 
      const styleColor = (distance === 0) ? "red-color" : "green-color"
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      return (
        <div className='glow'>
          <div className="timer-container">
            <p className='timer-title'> Event Starts In : </p>
            <h1 className={`timerr ${styleColor}`}>{days}d:{hours}h:{minutes}m:{seconds}s</h1>
          </div>
        </div>
      );
    }
  }
  

export default EventTimer
