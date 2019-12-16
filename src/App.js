import React, {Component} from 'react';

import { CardList } from './components/card-list/card-list.component'

import { SearchBox } from './components/search-list/search-list.component'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      inputField: ''
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users =>  this.setState({monsters:users}))
  }

  render()  {

    const {monsters, inputField} = this.state;

    const filteredMonster = monsters.filter( monster => monster.name.toLowerCase().includes(inputField.toLowerCase()))

    return (
      <div className="App">
        <h1>Monsters Rolling</h1>
        <SearchBox placehHolder = {"Search monster ..."} handleChange = { (e) => this.setState({inputField:e.target.value})}></SearchBox>
        <CardList name="Sebas" monsters={filteredMonster}></CardList>
      </div>
    );
    }
}



export default App;
