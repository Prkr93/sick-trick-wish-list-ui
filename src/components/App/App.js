import { Component } from 'react';
import './App.css';
import {trickData} from '../../apiCalls';
import TrickList from '../TrickList/TrickList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tricks: []
    }
  }


  componentDidMount() {
    this.setData();
  }

  setData() {
    Promise.all([trickData]).then(data => this.setTricks(data))
  }

  setTricks(tricks) {
    this.setState({tricks: tricks[0]})
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        {this.state.tricks && <TrickList tricks={this.state.tricks} />}
      </div>
    );
  }
}

export default App;
