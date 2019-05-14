import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom'

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

class App extends Component {

  constructor(props){
  super(props);
  

  
  
  this.state = {
    hours : 0,
    minutes : 0,
    seconds : 0

  }

  this.updateInputhour = this.updateInputhour.bind(this);
  this.updateInputmin = this.updateInputmin.bind(this);
  this.updateInputsec = this.updateInputsec.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.startTimer = this.startTimer.bind(this);
  }

  updateInputhour(event){
    this.setState({hours : event.target.value});
    }
  
  
  updateInputmin(event){
    this.setState({minutes : event.target.value});
    }
  
  updateInputsec(event){
  this.setState({seconds : event.target.value});
  }
  
  
  

  handleSubmit(){
    

    if(this.hour>=0)    
            {

                const element = (<div> <h1>{this.hour}</h1><h2>{this.min}</h2> 
                                <h3>{this.sec--}</h3>  </div>);


                if(this.sec<0){
                  this.min--;
                  this.sec=59;
                }

                if(this.min<0){
                    this.hour--;
                    this.min=59;
                }

                

              
            ReactDOM.render(element, document.getElementById('root'));
            }
            
            else{
                clearInterval(this.myTimer);
                const element = (<h1>Timer has been completed</h1> );
                ReactDOM.render(element, document.getElementById('root'));
                
            }


    
  }


  

    

  startTimer(){

    this.hour = this.state.hours;
    this.min = this.state.minutes;
    this.sec = this.state.seconds;

    var flag = 1;
    if(this.sec>60 || this.sec<0 || this.min<0 || this.min>60 || this.hour<0 )
                {alert("Enter Valid Values");flag=0;}    
    if(flag)
        this.myTimer = setInterval(this.handleSubmit, 1000);
      
    
  }
  
  
  
  render(){
  return (
      <div>
      <img src={logo} className="App-logo" alt="logo" />
      <h3>Hours</h3>  
      <input type="number" onChange={this.updateInputhour}></input>
      <h3>Minutes</h3>  
      <input type="number" onChange={this.updateInputmin}></input>
      <h3>Seconds</h3>
      <input type="number" onChange={this.updateInputsec}></input> <br></br>
      <input type="submit" onClick={this.startTimer} value="Start!"></input>
      </div>
    );
  }
  } 

  export default App;
