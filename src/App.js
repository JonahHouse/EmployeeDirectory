import React, { Component } from "react";
import "./App.css";
import Search from "./Components/Search";
import TableRow from "./Components/TableRow";
import employeeData from "./Components/db/employee.json";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  state = {
    searchQuery: "",
    searchResults: [],
    searchOption: "first_name",
    sortOption: "first_name",
  };

  handleSortOption = async (event) => {
    await this.setState({
      sortOption: event.target.value,
    });
    this.handleSearch();
  };

  handleSearchOption = async (event) => {
    await this.setState({
      searchOption: event.target.value,
    });
    this.handleSearch();
  };

  handleSearchChange = async (event) => {
    await this.setState({
      searchQuery: event.target.value,
    });
    this.handleSearch();
  };

  handleSearch = (event) => {
    const newData = employeeData.filter((employees) => {
      if (this.state.searchOption === "first_name") {
        return employees.first_name.toLowerCase().match(this.state.searchQuery);
      } else if (this.state.searchOption === "last_name") {
        return employees.last_name.toLowerCase().match(this.state.searchQuery);
      } else if (this.state.searchOption === "email") {
        return employees.email.toLowerCase().match(this.state.searchQuery);
      } else if (this.state.searchOption === "role") {
        return employees.role.toLowerCase().match(this.state.searchQuery);
      }
    });
    if (this.state.sortOption === "first_name") {
      newData.sort((a, b) => {
        let nameA = a.first_name.toUpperCase();
        let nameB = b.first_name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      });
    } else if (this.state.sortOption === "last_name") {
      newData.sort((a, b) => {
        let nameA = a.last_name.toUpperCase();
        let nameB = b.last_name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      });
    }
    this.setState({
      searchResults: newData,
    });
  };

  render() {
    return (
      <>
        <Router>
          <Route path="/">
            <h1 className="text-center m-5">Employee Directory</h1>
            <Search
              handleSearchChange={this.handleSearchChange}
              handleSearchOption={this.handleSearchOption}
              handleSortOption={this.handleSortOption}
            />

            <table className="table w-50" style={{ margin: "0 auto" }}>
              <thead>
                <tr>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                </tr>
              </thead>
              <tbody>
                {this.state.searchResults.length === 0
                  ? employeeData.map((row, index) => (
                    <TableRow
                      firstName={row.first_name}
                      lastName={row.last_name}
                      email={row.email}
                      role={row.role}
                      key={index}
                    />
                  ))
                  : this.state.searchResults.map((row, index) => (
                    <TableRow
                      firstName={row.first_name}
                      lastName={row.last_name}
                      email={row.email}
                      role={row.role}
                      key={index}
                    />
                  ))
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
