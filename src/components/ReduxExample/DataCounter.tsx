import { Box, Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import { getRequest } from '../../api/apiCallCommon';
import HigherOrderWrapper from '../HigherOrderExample/HigherOrderComponent'

function DataCounter(props:any) {
    const [num, setNum] = useState(0);

    const storevalue = useSelector((state: any) => state.incdecReducer)

    const dispatch = useDispatch();

    const increment = () => {
        // setNum(num +10)
        dispatch({ type: 'Increment' })
    }
    const Decrement = () => {
        // setNum(num - 10)
        dispatch({ type: 'Decrement' })

    }

    const [userData, setUserData] = useState<any>([])

    // const fetchUserData = () => {
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
        {console.log('props which come from HOC', props)}
            <div style={{ margin: 50 }}>
                <Button variant="contained" onClick={increment}> + Increment</Button>
                <TextField type="text" id="outlined-basic" name="Password" label="Password" variant="outlined" value={storevalue} />
                <Button variant="contained" onClick={Decrement} > - Decrement</Button>
            </div>
            <div>
                <Box>
                    {/* {userData && userData.length > 0 ? (
                        userData.map((item: any) => (
                            <div key={item.id}>
                                <ul className='usrInfo'>
                                    <li>Name : {item.first_name} {item.last_name}</li>  
                                    <li>Email : {item.email}</li>
                                    <li>Avatar <img src={item.avatar} alt="img" /></li>
                                </ul>
                            </div>
                        ))
                    ) : null} */}
                    {props && props.data.length > 0 ? (
                        props.data.map((item: any) => (
                            <div key={item.id}>
                                <ul className='usrInfo'>
                                    <li>Name : {item.first_name} {item.last_name}</li>  
                                    <li>Email : {item.email}</li>
                                    <li>Avatar <img src={item.avatar} alt="img" /></li>
                                </ul>
                            </div>
                        ))
                    ) : null}
                </Box>
            </div>
        </>
    )
}

export default HigherOrderWrapper(DataCounter);
