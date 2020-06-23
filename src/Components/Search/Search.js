import React from 'react';
import { Input } from 'reactstrap';

const Search = props => {
  return (
    <>
      <div className="w-25" style={{ margin: "40px auto" }}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
          </div>
          <select className="custom-select" id="inputGroupSelect01" onChange={props.handleSearchOption}>
            <option defaultValue value="first_name">First Name</option>
            <option value="last_name">Last Name</option>
            <option value="email">Email</option>
            <option value="role">Role</option>
          </select>
        </div>
        <div className="input-group" >
          <Input onChange={props.handleSearch} type="text" className="form-control" aria-describedby="button-addon2"></Input>
        </div>
      </div>
    </>
  )
}

export default Search;