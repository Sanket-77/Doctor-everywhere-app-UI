import { useEffect, useState } from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { getRequest } from "../api/apiCallCommon";
import { USER_LIST } from "../api/apiEndPointList";
import HigherOrderWrapper from "./HigherOrderExample/HigherOrderComponent";

const columns: GridColDef[] = [
    { field: 'first_name', headerName: 'First Name', width: 170 },
    { field: 'email', headerName: 'Email', width: 170 },
    { field: 'avatar', headerName: 'User Image', width: 170 },
]

function useInformation(props:any) {
    const [userData, setUserData] = useState<any>([])

    // const fetchUserData = () => {
    //     const fetchpromise = fetch('https://reqres.in/api/users');
    //     console.log('fetchpromise', fetchpromise);
    //     fetchpromise.then((res) => res.json()).then((data) => console.log('fetch response', data))

    //     const axiospromise = getRequest('https://reqres.in/api/users', '');
    //     console.log('axiospromise', axiospromise);
    //     axiospromise.then((data: any) => setUserData(data['data'].data))
    // }

    // useEffect(() => {
    //     fetchUserData();
    //     return () => {

    //     };
    // }, []);

    return (
        <>
            {/* {console.log('userData', userData)}
            {userData && userData.length > 0 ? (
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={userData}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </div> */}
                
            {props && props.data.length > 0 ? (
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={props.data}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </div>

                // userData.map((item: any) => (
                //     <div key={item.id}>
                //         <ul className='usrInfo'>
                //             <li>Name : {item.first_name} {item.last_name }</li>
                //             <li>Email : {item.email}</li>
                //             <li>Avatar <img src={item.avatar} alt="img" /></li>
                //         </ul>
                //     </div>
                // ))
            ) : (
                <div>No Data availabel</div>
            )}
        </>
    )
}

export default HigherOrderWrapper(useInformation); 