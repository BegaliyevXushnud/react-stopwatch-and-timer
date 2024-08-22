
import React, { Component } from 'react';

export default class Timer extends Component {
  state = {
    hour: 0,
    minute: 0,
    second: 0,
    disabled: false,
    intervalId: null
  };

  start = () => {
    const intervalId = setInterval(() => {
      const { second, minute, hour } = this.state;
      if (second === 0) {
        if (minute === 0) {
          if (hour === 0) {
            clearInterval(this.state.intervalId);
            this.setState({ disabled: false });
            alert("Timer finished!");
          } else {
            this.setState({
              hour: hour - 1,
              minute: 59,
              second: 59
            });
          }
        } else {
          this.setState({
            minute: minute - 1,
            second: 59
          });
        }
      } else {
        this.setState({
          second: second - 1
        });
      }
    }, 1000);

    this.setState({
      disabled: true,
      intervalId
    });
  };

  stop = () => {
    clearInterval(this.state.intervalId);
    this.setState({
      disabled: false
    });
  };

  reset = () => {
    clearInterval(this.state.intervalId);
    this.setState({
      hour: 0,
      minute: 0,
      second: 0,
      disabled: false
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: Number(event.target.value)
    });
  };

  render() {
    const { hour, minute, second, disabled } = this.state;
    return (
      <div className='container'>
        <div className='row mt-3'>
          <div className='col-md-6 offset-3'>
            <div className='card'>
              <div className='card-header'>
                <h1 className='text-center'>Timer</h1>
              </div>
              <div className='card-body'>
                <div className="input-group mb-3">
                  <input 
                    type="number" 
                    className="form-control" 
                    placeholder="Hours" 
                    name="hour" 
                    value={hour} 
                    onChange={this.handleChange} 
                    disabled={disabled} 
                  />
                  <input 
                    type="number" 
                    className="form-control" 
                    placeholder="Minutes" 
                    name="minute" 
                    value={minute} 
                    onChange={this.handleChange} 
                    disabled={disabled} 
                  />
                  <input 
                    type="number" 
                    className="form-control" 
                    placeholder="Seconds" 
                    name="second" 
                    value={second} 
                    onChange={this.handleChange} 
                    disabled={disabled} 
                  />
                </div>
                <h2 className='text-center'>{hour}:{minute}:{second}</h2>
              </div>
              <div className='card-footer d-flex justify-content-around'>
                <button className='btn btn-success' disabled={disabled} onClick={this.start}>Start</button>
                <button className='btn btn-danger' onClick={this.stop}>Stop</button>
                <button className='btn btn-info' onClick={this.reset}>Reset</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
