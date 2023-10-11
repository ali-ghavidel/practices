import React, { Component, Fragment } from 'react';
import './style.css'
import TimeList from './TimeList';
import { TestContext } from './TestContext';

var interval;
class Timer extends Component {
  
    constructor () {
        super();
        this.state = {
          hour: 0,
          minute: 0,
          second: 0,
          isStart: false
        };
      }
    static contextType = TestContext;
      handleTimeStart = () => {
        
        if(this.state.isStart === false){
          this.setState({
            isStart: true
          });
          interval = setInterval(()=>{
            this.setState({
              second: this.state.second + 1
            });
            if(this.state.second === 59){
              this.setState({
                second: 0,
                minute: this.state.minute +1
              })
            }
            if(this.state.minute === 59) {
              this.setState({
                minute: 0,
                hour: this.state.hour +1
              })
            }
          },1000);
        }
        
      }
      handleTimeStop = () => {
        this.setState({
          isStart: false
        });
        clearInterval(interval);
      }

      handleTimeRest = () => {
        this.handleTimeStop();
        this.setState({
          hour: 0,
          minute: 0,
          second: 0
        })
      }

      handleTimeList = () => {
        let h = this.state.hour;
        let m = this.state.minute;
        let s = this.state.second;
        let newTime = `${h > 9 ? h : "0"+h} : ${m > 9 ? m : '0'+m} : ${s > 9 ? s : '0'+s}`;
        this.context.setTimeArr([... this.context.timeArr, newTime]);
      }
    render () {
        let h = this.state.hour;
        let m = this.state.minute;
        let s = this.state.second;
            return(
                <Fragment>
                  <h2 className="timer" onClick={this.handleTimeList} >
                    {`${h > 9 ? h : "0"+h} : ${m > 9 ? m : '0'+m} : ${s > 9 ? s : '0'+s}`}
                  </h2>
                  <div className='timerButtons'>
                    <button className='timerButtons_style success' onClick={this.handleTimeStart}>
                      start
                    </button>
                    <button className='timerButtons_style danger' onClick={this.handleTimeStop}>
                      stop
                    </button>
                    <button className='timerButtons_style warning' onClick={this.handleTimeRest}>
                      reset
                    </button>
                    <button className='timerButtons_style gray' onClick={this.props.handleSetIsLight}>
                      {this.props.isLight ? 'dark' : 'light'}
                    </button>
                  </div>

                  <TimeList />

                </Fragment>
              );
        }
        
}

export default Timer;
