import React, { useState } from 'react'
import ChildTwo from './ChildTwo';

export default function ChildOne(props: any) {
    console.log('Props in child compo', props);
    // Props => This is immutebale means we can not make any change within props
    //  We destructure the props data => 
    const{Data}= props

    const[ChildOneUser, setChildOneUser] = useState({
        Address: "Pune",
        Country: "India"
    });

    const buttonHandeler = () => {
        props.getchildData("I am come from child component")
    }

    return (
        <>
            <div>
                <h4>I am child one component </h4>
                <h5>Bind props data in child one component </h5>
                <ul>
                    <li>User Name come from parent : {props.Data.name}</li>
                    <li>User phone NO come from parent : {props.Data.phoneNo}</li>
                </ul>
                <input type='button' value={"Pass Data To Parent"} onClick={buttonHandeler} />
                <ChildTwo data={Data} childdata={ChildOneUser}/>
            </div>
        </>
    )
}

