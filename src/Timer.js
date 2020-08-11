import React, { Component } from "react";

class Timer extends Component {
  state = {
    time: 0,
    color: "#" + Math.floor(Math.random() * 16777215).toString(16)
  };

  // add your code here

  //good place to set up interval/timeout functions and fetch data
  //anything asynchronous in componentDidMount()
  componentDidMount() {
    //assign interval variable within scope of our class
    this.interval = setInterval(this.clockTick, 1000)
  }

  //clean up after ourselves: get rid of any intervals
  //that were set up in componentDidMount()
  componentWillUnmount() {
    clearInterval(this.interval) //built-in method that you can use
  }

  render() {
    const { time, color } = this.state;
    return (
      <section className="Timer" style={{ background: color }}>
        <h1>{time}</h1>
        <button onClick={this.stopClock}>Stop</button>
        <aside className="mountText">Mounted</aside>
        <small onClick={this.handleClose}>X</small>
      </section>
    );
  }

  //clock functions
  clockTick = () => {
    this.setState(prevState => ({
      time: prevState.time + 1
    }));
  };

  stopClock = () => {
    clearInterval(this.interval);
  };

  // for the 'x' button, passing a function as props from the parent component.
  handleClose = () => {
    this.props.removeTimer(this.props.id);
  };
}

export default Timer;
