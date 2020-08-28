import React , { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import * as ReactBootStrap from 'react-bootstrap';

import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

// import { SearchForm } from "./components/search-form.component";
// import { SearchBox } from '../../../monsters-rolodex/src/components/search-box/search-box.component';


class App extends Component {

  constructor() {
    super();

    this.state = {
      employees: [],
      searchField: ''
    }
  }

  
  render() {

    const renderEmployee = (employee, index) => {
      return(
        <tr key={index}>
            <td>{employee.name}</td>
            <td>{employee.phone}</td>
            <td>{employee.email}</td>
            <td>{employee.dob}</td>
          </tr>
        )
      }

      const employees = [
        {name: "Brandon Jenkins", phone: "713-555-1234", email: "info@email.com", dob: "1/20/1997"},
        {name: "Tim Willis", phone: "713-555-1234", email: "info@email.com", dob: "6/15/1975"},
        {name: "Ashley Jones", phone: "713-555-1234", email: "info@email.com", dob: "10/11/2000"},
        {name: "Danielle Norris", phone: "713-555-1234", email: "info@email.com", dob: "6/19/1985"},
        {name: "Louis Toney", phone: "713-555-1234", email: "info@email.com", dob: "12/25/1962"},
        {name: "Jim Chutney", phone: "713-555-1234", email: "info@email.com", dob: "5/9/1951"},
        {name: "Taargus Taargus", phone: "713-555-1234", email: "info@email.com", dob: "9/26/1976"},
        {name: "Tony Tarbus", phone: "713-555-1234", email: "info@email.com", dob: "4/24/1983"},
        {name: "Jimmy Rangus", phone: "713-555-1234", email: "info@email.com", dob: "8/11/1979"},
        {name: "Steve Brule", phone: "713-555-1234", email: "info@email.com", dob: "9/5/1988"},
        {name: "Eric Heidecker", phone: "713-555-1234", email: "info@email.com", dob: "11/26/1995"},
      ]

      return (
        <div className="employee-table">
          {/* <SearchForm 
            search={this.StaticRange.search}
          /> */}

          <Form>
            <Form.Group controlId="formSearch">
              <Form.Label>Search</Form.Label>
              <Form.Control type="search" placeholder="Search" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
            <br />

          <ReactBootStrap.Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Date of Birth</th>
              </tr>
            </thead>
            <tbody>
              {/* {employees.map(renderEmployee)} */}
              {employees.map(renderEmployee)}
            </tbody>
          </ReactBootStrap.Table>
        </div>
      );
    }

}

export default App;
