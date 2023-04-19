import React from "react";
import Button from 'react-bootstrap/Button';

export default function ButtonComp(props:any){
    console.log('btn props', props);
    return(
        <div>
            <Button variant ={props.BtnVarient ? props.BtnVarient : "primary"} onClick={props.onClickprop}>{props.BtnName ? props.BtnName : 'Default value'}</Button>
        </div>
    );
}
    