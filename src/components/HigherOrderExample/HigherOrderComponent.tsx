//  Higher order component => This is component which use to Share common ligic through out the application
import React, { Component } from 'react'
import { getRequest } from '../../api/apiCallCommon';

const HigherOrderWrapper = (WrappedComponent: any)=> {
  return class HigherOrderComponent extends Component <{},any> {
    constructor(props: any) {
      super(props)

      this.state = {
        userData: [],
        doctorData: [],
        patientData: []
      }
    }
  
    componentDidMount(): void { 

      const axiospromise = getRequest('https://reqres.in/api/users', '');
          console.log('axiospromise', axiospromise);
          axiospromise.then((data: any) => this.setState({userData:data['data'].data}))

      const axiospromise2 = getRequest('http://localhost:9092/doctors', '');
          console.log('axiospromise', axiospromise2);
          axiospromise2.then((data: any) => this.setState({doctorData:data.data}))

      const axiospromise3 = getRequest('http://localhost:9093/patient', '');
          console.log('axiospromise', axiospromise3);
          axiospromise3.then((data: any) => this.setState({patientData:data.data}))
    }
  
    render() {
      return (
        <>
        {console.log(this.state)}
        <div>
          {/* <h1>Data fetching common logic </h1> */}
          {/* {this.state.userData && this.state.userData.map((item:any) => {
            return<>
            <div>{item.email}</div>
            <div>{item.avatar}</div></>
          })} */}
          <WrappedComponent data = {this.state.userData}  patientData = {this.state.patientData} doctorData = {this.state.doctorData}/>
        </div>
        </>
      )
    }
  }
}

export default HigherOrderWrapper
