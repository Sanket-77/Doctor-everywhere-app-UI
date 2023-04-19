import { Button } from '@mui/material';
import { url } from 'inspector';
import React from 'react'
import HigherOrderWrapper from '../HigherOrderExample/HigherOrderComponent';
import home from './img/ap.png'
import Appointments from './img/Appointments.png'
import Doctor from './img/Doctors.png'
import About from './img/About.png'
import Aboutus from './img/Aboutus.png'
import { useNavigate } from 'react-router-dom';

function HomeCompo(props: any) {

  const containerStyle = {
    backgroundImage: `url(${home})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const buttonStyle = {
    backgroundColor: '#082ff3', /* Green */
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
  };

  const naviate = useNavigate();

  return (
    <>
      {console.log('props which come from HOC', props)}

      <section  style={containerStyle} className='Homesection1'>
        {/* <img src={home} height={565} width={1380} alt="Image Load" /> */}
        <button className='CornerButton' style={buttonStyle} onClick={()=>{naviate('/B-appointment')}} >Book Appointment Here</button>
      </section>

      <hr />
      <section>
        <div className="container text-center">
          <div className="row">
            <div className="col"><div className="card" >
              <img src={Doctor} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Doctor</h5>
                <p className="card-text">Quality Doctors for your best care</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                <Button variant='contained'onClick={()=>{naviate('/doctor')}} >Choose Doctors </Button>
              </div>
            </div></div>
            <div className="col"><div className="card" >
              <img src={Appointments} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Appointment</h5>
                <p className="card-text">Find your Doctor and make an Appointment.</p>
                {/* <a href="#" className="btn btn-primary">Appointment List</a> */}
                <Button variant='contained' onClick={()=>{naviate('/appointment')}}>Appointment List</Button>
              </div>
            </div>
            </div>
            <div className="col"><div className="card" >
              <img src={About} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Contact Us</h5>
                <p className="card-text">Perfect health care solution</p>
                <a href="#" className="btn btn-primary">About Us</a>
              </div>
            </div></div>
          </div>
        </div>
      </section>
      <hr />
      <section>
      <img src={Aboutus} height={700} width={1380} alt="Image Load" />
      </section>
      <footer className='footer'>
        Copyright & copy; 2023 Doctor EveryWhere App - We are commited to your health
        {/* Thank you for using our doctor appointment booking service. We hope your experience was efficient and hassle-free. Your health and well-being are important to us, and we look forward to serving you again in the future. */}
        </footer>
    </>
  )
}

export default HomeCompo;

