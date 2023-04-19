import { Button } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getRequest } from '../../api/apiCallCommon';
// import CreateAppointmentCompo from './CreateAppointmentCompo';

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'phone', headerName: 'Phone No', width: 200 },
  { field: 'age', headerName: 'Age', width: 100 },
  { field: 'medicalConditions', headerName: 'Medical Conditions', width: 250 },
  { field: 'email', headerName: 'Email', width: 200 },
]

export default function PatientCompo(props:any) {

  const naviate = useNavigate();

  const [userData, setUserData] = useState<any>([])

  const patientData = {...userData};

  const getListofAllPatient = () => {
    const axiospromise = getRequest('http://localhost:9093' + "/patient", ' ');
    console.log('axiospromise', axiospromise);
    axiospromise.then((data: any) => setUserData(data.data))
  }

  useEffect(() => {
    getListofAllPatient();
    return () => {
    };
  }, []);

  return (
    <>
    {console.log('Patient data',patientData)}
      {console.log('userData', userData)}
      <div className='tag'>
        <h1>List Of All Patients</h1>
      </div>
      <hr />
      <div className='container'>
        <span><Button variant='contained'>List Of Patients</Button></span>
        <span className='sbutton'><Button variant='contained' onClick={()=>naviate('/c-patient')}>Register Patient</Button></span>
      </div>
      <div>
        {userData && userData.length > 0 ? (
          <div style={{ height: 500, width: '100%' }}>
            <DataGrid
              rows={userData}
              columns={columns}
              pageSize={20}
              rowsPerPageOptions={[20]}
              checkboxSelection
            />
          </div>
        ) : (
          <div>No Data availabel</div>
        )}
      </div>
    </>
  )
}
