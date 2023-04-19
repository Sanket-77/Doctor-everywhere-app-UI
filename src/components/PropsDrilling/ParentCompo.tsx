import React, { useState } from 'react'
import ChildOne from './ChildOne';

export default function ParentCompo() {
    const [userData, setuserData] = useState(
        {
            name: "Test user",
            phoneNo: "9637967737"
        }
    );

    const handelerDataChange = (event:any) => {
        setuserData({
            ...userData,
            name: event.target.value
        }) 
    }

    const getChildDataHandeler = (childData: any) => {
        console.log('Data pass from child ', childData);

    }

    return (
        <div>
            <h1>Parent component</h1>
            <div>
                <span>User Name: {userData.name}</span> <br />
                <span>User phoneNo: {userData.phoneNo}</span>
            </div>
            <div>
                <input type={"text"} value={userData.name} onChange={handelerDataChange}  />
            </div>
            <h2>Data Share with Child compo using props Drilling </h2>
            <ChildOne Data={userData} getchildData={getChildDataHandeler}/>
        </div>
    )
}

