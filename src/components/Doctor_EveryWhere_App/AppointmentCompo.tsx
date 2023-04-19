// import { Button } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { getRequest } from '../../api/apiCallCommon';
import Button from 'react-bootstrap/Button';

const columns: GridColDef[] = [
  { field: 'clinicName', headerName: 'Clinic Name', width: 200 },
  { field: 'date', headerName: 'Date', width: 250 },
  { field: 'doctorEmail', headerName: 'Doctor Email', width: 300 },
  { field: 'patientEmail', headerName: 'Patient Email', width: 300 },
  { field: 'startTime', headerName: 'Start Time', width: 200 },
  { field: 'endTime', headerName: 'End Time', width: 200 },
]

function AppointmentCompo() {

  const naviate = useNavigate();

  const [userData, setUserData] = useState<any>([])

  const getListofAllAppintments = () => {
    const axiospromise = getRequest('http://localhost:9091' + "/appointment", ' ');
    console.log('axiospromise', axiospromise);
    axiospromise.then((data: any) => setUserData(data.data))
  }

  useEffect(() => {
    getListofAllAppintments();
    return () => {

    };
  }, []);

  return (
    <>
      {console.log('UserData', userData)}
      <div className='tag'>
        <h1 className='Tag'>List of All Appointment</h1>
      </div>
      <hr />
      <div className='btn-A'>
        <span><Button variant="success" onClick={getListofAllAppintments}>Get List Of Appointments</Button></span>
        <span><Button className='sbutton' as="a" variant="success" onClick={() => naviate('/B-appointment')} >Book Appointment</Button></span>
      </div >
      <div>
        {userData && userData.length > 0 ? (
          <div style={{ height: 475, width: '100%' }}>
            <DataGrid
              rows={userData}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10]}
              checkboxSelection
            />
          </div>
        ) : (
          <div>No Data availabel</div>
        )}
      </div>
      <div className='btn-A'>
      </div>
      <hr />
    </>
  )
}

export default AppointmentCompo
