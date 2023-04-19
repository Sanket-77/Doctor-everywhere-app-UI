import { Box, Button, TextField } from "@mui/material";
import React, { Component, useState } from "react";
import { postRequest } from "../../api/apiCallCommon";
import { LOGIN_USER } from "../../api/apiEndPointList";
import ButtonComp from "../commonComp/ButtonComp";

// class LoginComponent extends Component<{}, { name: String, optionalDetails: any, yesorno: boolean }>{
//     constructor(props: any) {
//         super(props)

//         // This.state is a variable of that particular component which used store information about the component state or variable. It will store multiple properties, multiple type in single state. 
//         // state are related with that perticular component

//         this.state = {
//             name: '',
//             optionalDetails: [
//                 {
//                     option1: '',
//                     option2: 12435452
//                 }
//             ],
//             yesorno: true,
//         };
//     }


//     // classs component lifecycle will be work based on there diff lifecycle phases.
//     // phases are mounting, updating and unmounting. 

//     // 1 => Mounting : content will get ready to load in this phase and component will rerender after changes get loaded. This phase execute on the load of component get loaded. Render method will invoke after contentget loaded. Mounting will use methods like componentDidmount() and render() to execute statment on component.

//     componentDidMount(): void {

//         // this.state = This method will update state value and re-render the component

//         let changeno = ('  sanket  ')
//         this.setState({
//             name: 'name are change into component Didmount or mounting phase',
//             optionalDetails: [
//                 {
//                     option1: 'change both value',
//                     option2: changeno

//                 }
//             ]
//         })
//     }

//     // 2> Update phase will call 2 methods 1- componentDidUpdate and setstate. componentdidupdate will trigger all previous props state also capture current props and state. basis on that we can make changes within our omponent
//     // This methos will invoke while your component Dom change are trigger.

//     componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{ name: String; optionalDetails: any; yesorno: boolean; }>, snapshot?: any): void {
//         console.log('prevProps =>', prevProps);
//         console.log('prevState =>', prevState);
//         console.log('currentstate =>', this.state);
//         console.log('snapshot =>', snapshot);

//         // if(this.state.name !==prevState.name){
//         //     setInterval(() =>{
//         //         console.log('set time execution');
//         //     },1000);
//         // }   
//     }

//     // 3> Unmount phase => what ever the service call or any continues intigration is going on will be close in this phase. It will clean up your all calls within in component happen.

//     //  Method will be use componentwillunmount 
//     // Avoid memory leakage this will helpfull
//     componentWillUnmount(): void {
//         clearInterval('');
//     }

//     handlerChangeMethod = () => {
//         this.setState({
//             name: 'update state while change'
//         })
//     }

//     render(): React.ReactNode {
//         return (
//             <>
//                 <h1>Login component</h1>
//                 {/* {console.log('Trigger changes this.state',this.state)}
//                 <h3>{this.state.name}</h3>
//                 <ul>
//                     {this.state.optionalDetails.map((item:any, index:any)=>
//                         <li key={index}> opt:{item.option1}, opt2:{item.option2}</li>
//                     )}
//                 </ul> */}
//                 {/* {this.state.yesorno ? <div>yes value </div>:<div>no value</div>}
//                 <input type={'button'} value={'click me'} onClick={this.handlerChangeMethod}/> */}
//                 {/* <ButtonComp BtnName={'Login Button'} BtnVarient={'success'}/> */}
//                 <Box
//                     component="form"
//                     sx={{
//                         '& > :not(style)': { m: 1, width: '25ch' },
//                     }}
//                     noValidate
//                     autoComplete="off"
//                 >
//                     <TextField id="outlined-basic" label="Email" variant="outlined" />
//                     <TextField id="outlined-basic" label="Password" variant="outlined" />
//                     <Button variant="contained">Submit</Button>
//                 </Box>

//             </>
//         )
//     }
// }

const LoginComponent = () => {

    const [userDetail, setUserDetail] = useState({});

    const userDataHandeler = (e: any) => {
        console.log('Details input tracked', e.target.value);

        setUserDetail({
            ...userDetail,
            [e.target.name]: e.target.value
        })
        console.log('Details input tracked after', e.target.value);
    }

    const postHandeler = () => {
        console.log('LOGIN_USER url detail', LOGIN_USER)
        const headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          }
        postRequest(LOGIN_USER, userDetail).then((res) => {console.log('Server response', res)}).catch((error) => console.log(error))
    }

    return (
        <>
            {console.log('UserDetailsState', userDetail)}
            <h1>Login component</h1>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField type="email" id="outlined-basic" name="Email" label="Email" variant="outlined" onChange={userDataHandeler} />
                <TextField type="password" id="outlined-basic" name="Password" label="Password" variant="outlined" onChange={userDataHandeler} />
                <Button variant="contained" onClick={postHandeler}>Submit</Button>
            </Box>

        </>
    )
}


export default LoginComponent;
