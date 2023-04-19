import React, { Component } from 'react'

export class CreatePatientCompo extends Component {
  constructor(props: any) {
    super(props)

    this.state = {
      name: null,
      age: null,
      email: null,
      phone: null,
      medicalConditions: null
    }
  }

  create() {
    fetch('http://localhost:9093/patient', {
      method: "post",
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    }).then((result) => { result.json().then((res) => { console.log(res); alert('The Patient has been Added') }) })
  }

  render() {
    return (
      <>
        <div className='tag'>
          <h1>Register Patient</h1>
        </div>
        <div className="Fill-Details-container">
          <input onChange={(event) => { this.setState({ name: event.target.value }) }} placeholder="Name" /> <br /><br />
          <input onChange={(event) => { this.setState({ age: event.target.value }) }} placeholder="Age" /><br /><br />
          <input onChange={(event) => { this.setState({ email: event.target.value }) }} placeholder="Email" /><br /><br />
          <input onChange={(event) => { this.setState({ phone: event.target.value }) }} placeholder="Phone No" /><br /><br />
          <input onChange={(event) => { this.setState({ medicalConditions: event.target.value }) }} placeholder="Medical Condition" /><br /><br />
          <button onClick={() => { this.create() }}>Add Patient</button>
        </div>
      </>
    )
  }
}

export default CreatePatientCompo

