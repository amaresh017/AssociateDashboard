import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var emp_details = [
  {"name": "Amaresh Chauhan", "title": "Lead Developer", "dept": "Project/IT", "manager": "Vishrut"},
  {"name": "Mansoor", "title": "Software Developer", "dept": "Project/Intg.", "manager": "Manjunath"}
]

class AssociateDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      employees: emp_details,
    };
    this.addEmployee = this.addEmployee.bind(this)
  }

  addEmployee(emp) {
    var employee = [{"name": emp[0], "title": emp[1], "dept": emp[2], "manager": emp[3]}]
    this.setState({
      employees: this.state.employees.concat(employee)
    });
  }
  
  render() {
    return (
      <div>
        <h5>Add New Employee : </h5>
        <AddNewAssociate  addNew={this.addEmployee} />
        <ShowList employees={this.state.employees} />
      </div>
    );
  }
}

class AddNewAssociate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: "",
      title: "",
      dept: "",
      manager: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddNew = this.handleAddNew.bind(this);
  }
  
  handleInputChange(event) {
    const attr_value = event.target.value;
    const attr_name = event.target.name;
    this.setState({
      [attr_name]: attr_value
    });
  }

  handleAddNew(event) {
    this.props.addNew([this.state.name, this.state.title, this.state.dept, this.state.manager]);
    this.setState({
      name: "",
      title: "",
      dept: "",
      manager: ""
    });
  }

  render() {
    return (
      <div>
        <label> Name:
          <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
        </label>
        <label> Title:
          <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange} />
        </label>
        <label> Dept:
          <input type="text" name="dept" value={this.state.dept} onChange={this.handleInputChange} />
        </label>
        <label> Manager:
          <input type="text" name="manager" value={this.state.manager} onChange={this.handleInputChange} />
        </label>
        <button onClick={this.handleAddNew}> Add </button> 
      </div>
    );
  }
}

class ShowList extends React.Component {
  render() {
    var emp_lists = this.props.employees.map((emp) =>
      <tr>
        <td>{emp.name}</td>
        <td>{emp.title}</td>
        <td>{emp.dept}</td>
        <td>{emp.manager}</td>
      </tr>
    );
    return (
      <div>
        <h3>Listing Associate Details</h3>
        <table>
          <tbody>
            {emp_lists}
          </tbody>  
        </table>
      </div>
    );
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div align="center">
        <h2>Current Time(India)</h2>
        <h3>{this.state.date.toLocaleTimeString()}</h3>
        <hr/>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">NHT Associates Dashboard</h1>
        </header>
        <div align="center">
          <Clock />
        </div> 
        <AssociateDetails />
      </div>
    );
  }
}

export default App;
