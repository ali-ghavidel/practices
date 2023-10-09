import React, { Component, Fragment } from 'react';
import './Timer.css'

var interval;
class Timer extends Component {
  
    constructor () {
        super();
        this.state = {
          time: 10,
        };
      }
      handleTimeStart = () => {
        interval = setInterval(()=>{
          this.setState({
            time: this.state.time - 1
          });
        },1000);
      }
      handleTimeStop = () => {
        clearInterval(interval);
      }
    componentDidMount(){
        this.handleTimeStart();
    }

    componentDidUpdate(){
        if( this.state.time === 0){
            this.handleTimeStop();
        }
    }
    
    render () {
        if(this.state.time > 9){
            return(
                <h2 className="timer">
                    00:00:{this.state.time}
                </h2>
            )
        }else{
            return(
                <Fragment>
                  <h2 className="timer">
                    00:00:0{this.state.time}
                  </h2>
                  <div>
                    <button onClick={this.handleTimeStart}>
                      start
                    </button>
                    <button onClick={this.handleTimeStop}>
                      stop
                    </button>
                  </div>
                </Fragment>
              );
        }
        
      }
}

export default Timer;
