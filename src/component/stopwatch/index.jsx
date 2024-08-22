
import React, { Component } from 'react'

export default class Stopwatch extends Component {
    state = {
        hour:0,
        minute:0,
        second:0,
        disabled:false,
        interval: "",
        intervals:[]
    }
    start = () => {
       let a = setInterval(() => {
            const {second,minute,hour,disabled} = this.state
            if(second === 59){
                if(minute === 59){
                    this.setState({
                        minute:0,
                        second:0,
                        hour:hour + 1
                    })
                }else{
                    this.setState({
                        minute:minute + 1,
                        second:0
                    })
                }
               
            }else{
                this.setState({
                    second:second + 1
                })
            }
           
        },1000);
        this.setState({
            disabled:true,
            interval:a
        }) 
    }
    stop = () => {
        clearInterval(this.state.interval);
        this.setState({
            disabled:false
        })
    }
    clearIntervals =() => {
       clearInterval(this.state.interval)
        this.setState({
            hour:0,
            minute:0,
            second:0,
            disabled:false
        })
    }
    saveIntervals = () => {
      const {hour,minute,second,intervals} = this.state
      intervals.push(`${hour} : ${minute} : ${second}`)
      this.state({
        intervals:interval
      })
        
    }
    deleteInternal = (index) => {
const {intervals} = this.state
intervals.splice(index,1)
this.setState({
    intervals: intervals
})
    }
  render() {
    const {hour,minute,second,disabled,intervals}  = this.state
    return (
     <div className='container'>
<div className='row mt-3'>
<div className='col-md-6 offset-3'>
<div className='card'>
<div className='card-header'>
<h1 className='text-center'>StopWatch</h1>
</div>
<div className='card-body'>
<h2 className='text-center'>{hour}: {minute} :{second}</h2>
</div>
<div className='card-footer d-flex justify-content-around '>
<button className='btn btn-success' disabled={disabled} onClick={this.start}>start</button>
<button className='btn btn-danger' onClick={this.stop}>stop</button>
<button className='btn btn-info' onClick={this.clearIntervals}>clear</button>
<button className='btn btn-primary' onClick={this.saveIntervals}>interval</button>
</div>
{
    intervals.map((item,index) => {
        return <div key={index} className='py-2 px-5 d-flex align-items-center justify-content-between'>
            <h3>{item}</h3>
            <button className='btn btn-danger' onClick={() => this.deleteInternal(index)}>x</button>
        </div>
    })
}
</div>

</div>
</div>
     </div>
    )
  }
}
