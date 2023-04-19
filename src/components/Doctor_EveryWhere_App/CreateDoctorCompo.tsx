import React, { Component } from 'react'

export class CreateDoctorCompo extends Component {
  constructor(props: any) {
    super(props)

    this.state = {
      name: null,
      clinicNameAndAddress: null,
      qualifications: null,
      specialization: null,
      experienceInYears: null,
      emailID: null,
      // canDoHomeVisit: null,
      registrationID: null
    }
  }

  AddDoctor() {
    fetch('http://localhost:9092/doctors', {
      method: 'post',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    }).then((result) => { result.json().then((res) => { console.log(res); alert("The Doctor has Been Added") }) })
  }

  render() {
    return (
      <>
        <div className='tag'>
          <h1>Resister Doctor </h1>
        </div>
        <div className="Fill-Details-container">
        <hr />
          <input onChange={(event) => { this.setState({ name: event.target.value }) }} placeholder='Name' /> <br /> <br />
          <input onChange={(event) => { this.setState({ clinicNameAndAddress: event.target.value }) }} placeholder='Clinic Name' /> <br /> <br />
          <input onChange={(event) => { this.setState({ qualifications: event.target.value }) }} placeholder='Qualifications' /> <br /> <br />
          <input onChange={(event) => { this.setState({ specialization: event.target.value }) }} placeholder='Specialization' /> <br /> <br />
          <input onChange={(event) => { this.setState({ experienceInYears: event.target.value }) }} placeholder='Experience In Years' /> <br /> <br />
          <input onChange={(event) => { this.setState({ emailID: event.target.value }) }} placeholder='Email ID' /> <br /> <br />
          <input onChange={(event) => { this.setState({ registrationID: event.target.value }) }} placeholder='Registration ID' /> <br /> <br />
          <button onClick={() => { this.AddDoctor() }}>Add Doctor</button> <br /> <br />
        </div>
      </>
    )
  }
}

export default CreateDoctorCompo


