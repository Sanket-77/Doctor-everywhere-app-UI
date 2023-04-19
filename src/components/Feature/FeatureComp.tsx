import React, { useState } from "react";
import ButtonComp from "../commonComp/ButtonComp";

export default function FeatureComp(props: any){
    console.log('props => ',props)

    const [FeatureState, setFeatureState] = useState(" state value");
    
    const MethidTriggerChild =() =>{
        setFeatureState('value update via click from child')
    }

    return(
        <div>
            <h1>This is my Feature copmponent : {props.userData}</h1>
            <h2>Feature copmonent state value: {FeatureState}</h2>
            <ButtonComp BtnName={'Feature Button'} BtnVarient={'success'} onClickprop={MethidTriggerChild}/>
        </div>
    );
}