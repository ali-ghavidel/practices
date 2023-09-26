import React, { Component } from 'react';
import './Timer.css'

var interval;

class Timer extends Component {
    
    constructor () {
        super();
        this.state = {
          time: 10,
        };
      }
    
    componentDidMount(){
        interval = setInterval(()=>{
            this.setState({
              time: this.state.time - 1
            });
          },1000);
    }

    componentDidUpdate(){
        if( this.state.time === 0){
            clearInterval(interval);
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
                <h2 className="timer">
                  00:00:0{this.state.time}
                </h2>
              );
        }
        
      }
}

export default Timer;
