import React, {Component} from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component{
  constructor(props) {
      super(props);
      this.state = {
        deadline: 'December 25, 2018',
        newDeadline: ''
      }
      this.changeDeadline = this.changeDeadline.bind(this);
  }

  changeDeadline() {
      this.setState({deadline: this.state.newDeadline, newDeadline: ''});
  }

  render(){
    return(
      <div className = "App">
        <div className = "App-title"> Countdown to {this.state.deadline} </div>
        <Clock deadline={this.state.deadline}/>
        <Form inline>
          <FormControl
            className = "Deadline-input"
            placeholder = "Countdown Date Deadline"
            onChange = {event => {this.setState({newDeadline: event.target.value})}}
            value = {this.state.newDeadline}
          />
          <Button onClick = {() => this.changeDeadline()}>
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default App;
