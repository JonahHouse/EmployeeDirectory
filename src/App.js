import React, { Component } from 'react';
import './App.css';
import Search from './Components/Search'
import TableRow from './Components/TableRow'
import data from './Components/db/employee.json'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {


  state = {
    searchResults: [],
    searchOption: 'first_name'
  }

  handleSearchOption = (event) => {
    this.setState({ searchOption: [event.target.value] })
  }

  handleSearch = (event) => {
    const newData = data.filter(employees => {
      if (this.state.searchOption == "first_name") {
        return employees.first_name.toLowerCase().match(event.target.value)
      } else if (this.state.searchOption == "last_name") {
        return employees.last_name.toLowerCase().match(event.target.value)
      } else if (this.state.searchOption == "email") {
        return employees.email.toLowerCase().match(event.target.value)
      } else if (this.state.searchOption == "role") {
        return employees.role.toLowerCase().match(event.target.value)
      }
    });
    this.setState({
      searchResults: newData
    })
  }



  render() {

    return (
      <>
        <Router>
          <Route path="/">
            <Search
              handleSearchOption={this.handleSearchOption}
              handleSearch={this.handleSearch} />
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.searchResults.map((row, index) =>
                    <TableRow
                      firstName={row.first_name}
                      lastName={row.last_name}
                      email={row.email}
                      role={row.role}
                      key={index} />
                  )
                }
              </tbody>
            </table>
          </Route>
        </Router>
      </>
    );
  }
}

export default App;
