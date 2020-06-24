import React from "react";
import { Input } from "reactstrap";

const Search = (props) => {
  return (
    <>
      <div className="w-25" style={{ margin: "40px auto" }}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Search By
            </label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect01"
            onChange={props.handleSearchOption}
          >
            <option defaultValue value="first_name">
              First Name
            </option>
            <option value="last_name">Last Name</option>
            <option value="email">Email</option>
            <option value="role">Role</option>
          </select>
        </div>
        <div className="input-group mb-3">
          <Input
            onChange={props.handleSearchChange}
            type="text"
            className="form-control"
            aria-describedby="button-addon2"
          ></Input>
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Sort By
            </label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect02"
            onChange={props.handleSortOption}
          >
            <option value="first_name">First Name</option>
            <option value="last_name">Last Name</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Search;
