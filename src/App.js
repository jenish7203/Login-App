import logo from './logo.svg';
import './App.css';
import { Layout } from './Component/Pages/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Component/Pages/Home"
import About from "./Component/Pages/About"
import Contact from "./Component/Pages/Contact"
import LoginReg from './Component/Pages/auth/LoginReg';
import SendPasswordRestEmail from './Component/Pages/auth/SendPasswordRestEmail';
import ResetPassword from './Component/Pages/auth/ResetPassword';
import DashBord from './Component/Pages/DashBord';
import ChangePassword from './Component/Pages/auth/ChangePassword';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LoginReg />} />
            <Route path="/sendpasswordrestemail" element={<SendPasswordRestEmail />}/>
            <Route path="/reset" element={<ResetPassword />} />
            <Route path="/changepassword" element={<ChangePassword/>}></Route>
          </Route>

          <Route path="/dashbord" element={<DashBord />} />
          <Route path="*" element={<h1>Error 404 Pages Not Found !!</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
