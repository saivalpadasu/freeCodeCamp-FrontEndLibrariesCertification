let counter;
class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isTimerOn: false,
      sessionLabel: "Session",
      sessionLengthText: "Session Length",
      breakLengthText: "Break Length",
      title: "25 + 5 Clock",
      breakTime: 5,
      pauseTimer: false,
      sessionTime: 25,
      sessionMin: 25,
      sessionSec: "00",
    };
  }
  
  //Increasing Break Time
  plusBreakTime = () => {
    if (this.state.isTimerOn === false && this.state.breakTime < 60){
      this.setState({
        breakTime: this.state.breakTime + 1,
      });
    } 
  };
  
  //Decreasing Break Time
  minusBreakTime = () => {
    if(this.state.isTimerOn === false && this.state.breakTime > 1){
      this.setState({
        breakTime: this.state.breakTime - 1,
      });
    } 
  };
  
  //Increasing Session Time
  plusSessionTime = () => {
    if (this.state.isTimerOn === false && this.state.sessionTime < 60 && this.state.sessionTime < 9){
      this.setState({
        sessionTime: this.state.sessionTime + 1,
        sessionMin: "0" + (parseInt(this.state.sessionTime) + 1),
        sessionSec: "00",
      });
    } else if(this.state.isTimerOn === false && this.state.sessionTime < 60 && parseInt(this.state.sessionTime) >= 9){
      this.setState({
        sessionTime: this.state.sessionTime + 1,
        sessionMin: parseInt(this.state.sessionTime) + 1,
        sessionSec: "00"
      })
    }
  };
  
  //Decreasing Session Time
  minusSessionTime = () => {
    if(this.state.sessionTime > 1 && this.state.sessionTime > 10 && this.state.isTimerOn === false){
      this.setState({
        sessionTime: this.state.sessionTime - 1,
        sessionMin: this.state.sessionMin - 1,
        sessionSec: "00"
      });
    } else if(this.state.sessionTime > 1 && this.state.sessionTime <= 10){
        this.setState({
          sessionTime: this.state.sessionTime - 1,
          sessionMin: "0" + (this.state.sessionMin - 1),
          sessionSec: "00",
        });
    };
  };
  
  //Clock Start/Stop
  clockTimer = () => {
    if(this.state.isTimerOn === false){
      this.setState({
        isTimerOn: true,
      })
      let sec = this.state.sessionMin * 60 + parseInt(this.state.sessionSec);
      
      const current = Date.now();
      const past = current + sec * 1000;
      
      counter = setInterval(() => {
        const leftSec = Math.round((past - Date.now()) / 1000);
        if(this.state.sessionMin === "00" && this.state.sessionSec ==="00") {
          document.getElementById("beep").play();
        }
        
        if(leftSec < 0){
          clearInterval(counter);
          this.break();
          return;
        }
        
        this.displayTimer(leftSec);
      }, 1000);
    } else {
      clearInterval(counter);
      let pauseMin = this.state.sessionMin;
      let pauseSec = this.state.sessionSec;
      this.setState({
        isTimerOn: false,
        sessionMin: pauseMin,
        sessionSec: pauseSec,
      });
    }
  };
  
  //Timer Display
  displayTimer = (sec) => {
    const min = Math.floor(sec/60);
    const remainingSec = sec % 60;
    if(remainingSec >= 10 && min >= 10){
      this.setState({
        sessionMin: min,
        sessionSec: remainingSec,
      });
    } else if(remainingSec <= 9){
      this.setState({
        sessionMin: "0" + min,
        sessionSec: "0" + remainingSec,
      });
    } else{
      this.setState({
        sessionMin: "0" + min,
        sessionSec: remainingSec,
      });
    }
  };
  
  break = () => {
    if(this.state.pauseTimer ===  false){
      if(this.state.breakTime > 9){
        this.setState({
          sessionLabel: "Break",
          sessionMin: this.state.breakTime,
          sessionSec: "00",
          isTimerOn: false,
          pauseTimer: true
        })
        this.clockTimer()
      } else{
        this.setState({
          sessionLabel: "Break",
          sessionMin: "0" + this.state.breakTime,
          sessionSec: "00",
          isTimerOn: false,
          pauseTimer: true,
        });
        this.clockTimer();
      }
    } else {
      if(this.state.sessionTime > 9) {
        this.setState({
          sessionLabel: "Session",
          sessionMin: this.state.sessionTime,
          sessionSec: "00",
          isTimerOn: false,
          pauseTimer: false,
        });
        this.clockTimer();
      } else{
        this.setState({
          sessionLabel: "Session",
          sessionMin: "0" + this.state.sessionTime,
          sessionSec: "00",
          isTimerOn: false,
          pauseTimer: false,
        });
        this.clockTimer();
      }
    }
  };
  
  //Timer Reset
  timerReset = () => {
    clearInterval(counter);
    this.setState({
      sessionLabel: "Session",
      breakTime: 5,
      sessionTime: 25,
      sessionMin: 25,
      sessionSec: "00",
      isTimerOn: false,
      pauseTimer: false,
    });
    document.getElementById("beep").currentTime = 0;
    document.getElementById("beep").pause();
  }
  
  render(){ 
    return(
      <div className="clock-container">
        <div className="clock">
          
          <div className="clock-title">
            <h1>25 + 5 Clock</h1>
          </div>
          
          <div className="length-container">
            
            <div className="break-container">
              <h5 id="break-label">{this.state.breakLengthText}</h5>
              <button className="btn btn-danger" id="break-decrement" onClick={() => this.minusBreakTime()}>-</button>
              <div id="break-length">{this.state.breakTime}</div>
              <button className="btn btn-primary" id="break-increment" onClick={() => this.plusBreakTime()}>+</button>
            </div>
            
            <div className="session-container">
              <h5 id="session-label">{this.state.sessionLengthText}</h5>
              <button className="btn btn-danger" id="session-decrement"  onClick={() => this.minusSessionTime()}>-</button>
              <div id="session-length">{this.state.sessionTime}</div>
              <button className="btn btn-primary" id="session-increment" onClick={() => this.plusSessionTime()}>+</button>
            </div>
            
          </div>
          
          <div className="timer-container">
            <h3 id="timer-label">{this.state.sessionLabel}</h3>
            <div id="time-left">
              <audio type="audio/mp3" id="beep" src="https://www.pacdv.com/sounds/interface_sound_effects/sound10.mp3"></audio>
              {this.state.sessionMin}:{this.state.sessionSec}
            </div>
          </div>
          
          <div className="playback-container">
            <button id="start_stop" onClick={() => this.clockTimer()}>Start/Stop</button>
            <button id="reset" onClick={() => this.timerReset()}>Reset</button>
          </div>
        </div>
      </div>
    )
  }
}
ReactDOM.render(<Clock />, document.getElementById('output'));