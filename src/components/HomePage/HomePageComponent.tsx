import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";
import FeatureComp from "../Feature/FeatureComp";
import ButtonComp from "../commonComp/ButtonComp";
import BasicRating from "../commonComp/BasicRating";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const img1 = require('../../assets/logo192.png');
const img2 = require('../../assets/logo192.png');

// Create component using arrow function  
const HomePageComponent = ({}) =>{

    // Functional component will not use any lifecycle or they dont have ether any lifecycle
    // For execution purpuse it will use lifecycle hooks
    // Hooks are useState, useEffect, useRef, useMemo, useCallback

    // useState => It is use to maintain component state Like using class component state.
    // useState have 2 variable 1. State, 2. Method 
    // Method will use to update current state value.

    const naviate = useNavigate();

    const [userDetails, setuserDetails] = useState({
            name:'user name ',
            optionalDetails:[
                {
                    option1:'',
                    option2:12435452
                }
            ],
            yesorno:true,
    })

    const [ratevalue, setratevalue] = useState<any>(0);

    //useEffect => useEffect will use to maintain 3 phases of component. mounting, updating, unmounting phase will capture into this hook

    useEffect(() => {
    //This place will execute on load of component
    console.log('component state initial value while load comp => ',userDetails.name);

    //  check token for navigation 
    //    tokenCheck();
     
    if(userDetails.name){
        setuserDetails({
            ...userDetails,
            name:'State updated in useEffect hook'
        })
        console.log('component state initial value after load compoenet => ',userDetails.name);
    }

        return() =>{
            // This section will perform unmounting phase. call and subcription  we can stopped here
        }
    }, []); 
    // [] This is dependency array which use to when component will get re-render or not. Its call dependency array. Which value get updated based on that component get rerender.

    // class and function component
    // class component will be depends on there state 
    // Function comp will never depende on there state

    const handelerchangemethod = () => {
        setuserDetails({
            ...userDetails,
            name:'Name update on button click'
        })
    }

    const tokenCheck = () => {
        if(!localStorage.getItem('token')){
            naviate('/login')
        }
    }

    return(
        <>
            {/* <h3>{userDetails.name}</h3>
            <input type={'button'} value={'click me'} onClick={handelerchangemethod}/> */}
            <div className="contener">
                <h1 className="col-sm"> Home Component user state: {userDetails.name}</h1>
            </div>
            {/* <FeatureComp userData={"props value change from parent"}/> */}
            <ButtonComp btnName={"Home page"} onClickprop={handelerchangemethod}/>
            
            <Box
                component="form"
                sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={(e) => setratevalue(e.target.value)}/>
            </Box>
            <BasicRating RatingValue={ratevalue}/>
            
            <Button as="a" variant="success" onClick={() =>naviate('/login')}>Route me to login</Button> <br /> <br />

            <button 
                onClick={()=>{
                    localStorage.removeItem('token')
                    tokenCheck()
                    }}
                    >LogOut</button>
            
            {/* <Container>
            <Row className="justify-content-md-center">
                <Col lg="4" md="4" sm="4">column 1</Col>
                <Col lg="4" md="4" sm="4">column 2</Col>
                <Col lg="4" md="4" sm="4">column 3</Col>
            </Row>
            </Container> */}
        </>
    )
}

export default HomePageComponent;




