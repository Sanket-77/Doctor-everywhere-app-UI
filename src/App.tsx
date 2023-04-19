import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginComponent1 from './components/Loginpage/LoginComponent1';
import NavigationComp from './components/Navigation/NavigationComp';
import ProtectedRoute from './components/Navigation/ProtectedRoute';
import UserInformation from './components/UserInformation';

function App() {

  // jsx is extention will help to convert the real Dom into Javascript ext and for visual Dom.

  // const isAuthenticated = false;
 
  const isAuthenticated = useSelector((state:any) => state.LoginReducer)

  return (
    <>
        {isAuthenticated ? (
          <NavigationComp />
        ) : (
          <Router>
            <Routes>
              <Route 
              path='/userinfo'
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={true}>
                  <UserInformation/>
                </ProtectedRoute>
              }
              />
              <Route path='/login' element={<LoginComponent1/>}></Route>
            </Routes>
          </Router>
        )}
    </>
  )
}

export default App;
