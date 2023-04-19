import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Component } from 'react'
import HigherOrderWrapper from '../HigherOrderExample/HigherOrderComponent'

const columns1: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'qualifications', headerName: 'Qualifications', width: 150 },
  { field: 'specialization', headerName: 'Specialization', width: 150 },
  { field: 'clinicNameAndAddress', headerName: 'Clinic Name And Address', width: 250 },
  { field: 'experienceInYears', headerName: 'Experience In Years', width: 100 },
  { field: 'emailID', headerName: 'EmailID', width: 200 },
  { field: 'isDoctorAvailable', headerName: 'Doctor Available', width: 200 },
  { field: 'canDoHomeVisit', headerName: 'Can Do Home Visit', width: 150 },
]

const columns2: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'phone', headerName: 'Phone No', width: 200 },
  { field: 'age', headerName: 'Age', width: 100 },
  { field: 'medicalConditions', headerName: 'Medical Conditions', width: 250 },
  { field: 'email', headerName: 'Email', width: 200 },
]

class CreateAppointmentCompo extends Component<any, any>{
  constructor(props: any) {
    super(props)

    this.state = {
      clinicName: null,
      date: null,
      doctorEmail: null,
      patientEmail: null,
      startTime: null,
      endTime: null
    }
  }

  BookAppointment = () => {
    console.log('state in BookAppointment', this.state);
    fetch('http://localhost:9091/appointment', {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(this.state)
    }).then((result) => { result.json().then((res) => { console.log('Responce', res); alert("Appointment Booked Successfully!") }) })
  }

  render() {
    { console.log('state data', this.state); }
    return (
      <>
        {console.log('props which come from HOC', this.props)}
        <div className='tag'>
          <h1>Schedule Appointments With expert Doctors !</h1>
        </div>
          <div className="form-container">
            <input type="text" onChange={(event) => { this.setState({ clinicName: event.target.value }) }} placeholder='Clinic Name' />
            <input type="text" onChange={(event) => { this.setState({ date: event.target.value }) }} placeholder='Date' />
            <input type="text" onChange={(event) => { this.setState({ doctorEmail: event.target.value }) }} placeholder='Doctor Email Id' />
            <input type="text" onChange={(event) => { this.setState({ patientEmail: event.target.value }) }} placeholder='Patient Email Id' />
            <input type="text" onChange={(event) => { this.setState({ startTime: event.target.value }) }} placeholder='Start Time' />
            <input type="text" onChange={(event) => { this.setState({ endTime: event.target.value }) }} placeholder='End Time' />
            <button onClick={() => { this.BookAppointment() }}>Book-Appointment</button>
          </div>
        <div>
          <div>
            <h1 className='tag'>Doctors Details</h1>
            {this.props && this.props.doctorData.length > 0 ? (
              <div style={{ height: 500, width: '100%' }}>
                <DataGrid
                  rows={this.props.doctorData}
                  columns={columns1}
                  pageSize={20}
                  rowsPerPageOptions={[20]}
                  checkboxSelection
                />
              </div>
            ) : (
              <div>No Data availabel</div>
            )}
          </div>
          <hr />
          <div>
            <h1 className='tag'>Patients Details</h1>
            {this.props && this.props.patientData.length > 0 ? (
              <div style={{ height: 500, width: '100%' }}>
                <DataGrid
                  rows={this.props.patientData}
                  columns={columns2}
                  pageSize={20}
                  rowsPerPageOptions={[20]}
                  checkboxSelection
                />
              </div>
            ) : (
              <div>No Data availabel</div>
            )}
          </div>
        </div>
        <hr />
        
      </>
    )
  }
}

export default HigherOrderWrapper(CreateAppointmentCompo);
