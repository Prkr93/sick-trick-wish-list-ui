import { Component } from 'react';
import './App.css';
import {trickData} from '../../apiCalls';
import TrickList from '../TrickList/TrickList';
import TrickForm from '../TrickForm/TrickForm';

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

  addTrick = (e) => {
    e.preventDefault();
    let newTrick = {
      id: this.state.tricks[this.state.tricks.length - 1].id + 1,
      name: e.target.form.querySelector('#name').value,
      stance: e.target.form.querySelector('#stance').value,
      obstacle: e.target.form.querySelector('#obstacle').value,
      tutorial: e.target.form.querySelector('#tutorial').value
    }
    this.setState({tricks: [...this.state.tricks, newTrick]});
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <TrickForm addTrick={this.addTrick} />
        {this.state.tricks && <TrickList tricks={this.state.tricks} />}
      </div>
    );
  }
}

export default App;
