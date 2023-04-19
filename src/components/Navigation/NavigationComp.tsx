import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route, Link, useNavigate} from "react-router-dom";
import HomeCompo from "../Doctor_EveryWhere_App/HomeCompo";
import AppointmentCompo from "../Doctor_EveryWhere_App/AppointmentCompo";
import CreateAppointmentCompo from "../Doctor_EveryWhere_App/CreateAppointmentCompo";
import DoctorCompo from "../Doctor_EveryWhere_App/DoctorCompo";
import CreateaDoctorCompo from "../Doctor_EveryWhere_App/CreateDoctorCompo";
import PatientCompo from "../Doctor_EveryWhere_App/PatientCompo";
import CreatePatientCompo from "../Doctor_EveryWhere_App/CreatePatientCompo";


export default function NavigationComp(){
    // const naviate = useNavigate();
    
    const logOutHandeler = () => {
        // naviate("/")
    }
    
    return(
        <>
            <BrowserRouter>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Link to="/">Home</Link>
                        <Link to="/appointment">Appointments</Link>
                        <Link to="/B-appointment">Book-Appointment</Link>
                        <Link to="/doctor">Doctors</Link>
                        {/* <Link to="/c-doctor">Register-Doctor</Link> */}
                        <Link to="/patient">Patients</Link>
                        <Link to="/c-patient">Register-Patient</Link>
                        {/* <Link to="/login" onClick={logOutHandeler}>LogOut</Link> */}
                    </Nav>
                </Container>
            </Navbar>
            <Routes>
                <Route path ='/' element={<HomeCompo/>}></Route>
                <Route path='/appointment' element={<AppointmentCompo/>}></Route>
                <Route path='/B-appointment' element={<CreateAppointmentCompo/>}></Route>
                <Route path='/doctor' element={<DoctorCompo/>}></Route>
                <Route path='/c-doctor' element={<CreateaDoctorCompo/> }></Route>
                <Route path='/patient' element={<PatientCompo/> }></Route>
                <Route path='/c-patient' element={<CreatePatientCompo/> }></Route>
            </Routes>
            </BrowserRouter>
        </>
    );
}

