import { Button } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getRequest } from '../../api/apiCallCommon';
// import CreateAppointmentCompo from './CreateAppointmentCompo';

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'qualifications', headerName: 'Qualifications', width: 150 },
  { field: 'specialization', headerName: 'Specialization', width: 150 },
  { field: 'clinicNameAndAddress', headerName: 'Clinic Name And Address', width: 250 },
  { field: 'experienceInYears', headerName: 'Experience In Years', width: 100 },
  { field: 'emailID', headerName: 'EmailID', width: 200 },
  { field: 'isDoctorAvailable', headerName: 'Doctor Available', width: 200 },
  { field: 'canDoHomeVisit', headerName: 'Can Do Home Visit', width: 150 },
]

export default function DoctorCompo(props: any) {

  const naviate = useNavigate();

  const [userData, setUserData] = useState<any>([])

  const DoctorData = { userData };

  const getListofAllDoctors = () => {
    const axiospromise = getRequest('http://localhost:9092' + "/doctors", ' ');
    console.log('axiospromise', axiospromise);
    axiospromise.then((data: any) => setUserData(data.data))
  }

  useEffect(() => {
    getListofAllDoctors();
    return () => {
    };
  }, []);

  return (
    <>
    {console.log('DoctorData', DoctorData)}
      {console.log('userData', userData)}
      <div className='tag'>
        <h1>List Of All Doctors</h1>
      </div>
      <hr />
      <div className='btn-A'>
        <span><Button variant='contained'>List Of Doctors</Button></span>
        <span className='sbutton'><Button onClick={() => { naviate('/c-doctor') }} variant='contained'>Resister Doctor</Button></span>
      </div>
      <div>
        {userData && userData.length > 0 ? (
          <div style={{ height: 600, width: '100%' }}>
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
