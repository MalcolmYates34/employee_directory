import logo from './logo.svg';
import './App.css';
import Search from "./componets/search"
import Table from "./componets/table"
import api from "./utils/api"
import { Component } from 'react';


class App extends Component {
  state = {
    employeeList: [],
    searchName: "",
    originalList: []
  }
 
componentDidMount () {
  api.getRandomPeople().then(employees => {
    this.setState({
      employeeList: employees.data.results,
      originalList: employees.data.results
    })
  })
}


  render () {
    return (
      <div className="App">
        <Search employeeList={this.state.employeeList}/>
        <Table employeeList={this.state.employeeList} />
      </div>
    );
  
  }
}

export default App;
