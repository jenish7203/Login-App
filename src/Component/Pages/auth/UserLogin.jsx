import React, { useState } from 'react'
import { TextField, Button, Box, Alert } from '@mui/material';
import { NavLink } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const UserLogin = () => {

    const [error, setError] = useState({ status: false, msg: "", type: "" });
    

    // const navigate = useNavigate();





    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget)
        const actualData = {
            email: data.get('email'),
            password: data.get('password')
        }

        if (actualData.email && actualData.password) {
            console.log(actualData);
            document.getElementById("login-form").reset();
            setError({status:true, msg:"Login Success", type:'success'});
            // navigate("/dashbord"); 
        }else{
            alert("All fields are Required");
            setError({status:true, msg:"All fields are Required", type:'error'})
        }
    }


  return (
    <>
        <Box onSubmit={handleSubmit} component='form' noValidate sx={{mt:3}} id='login-form'>
            <TextField margin='normal' required fullWidth id='email' name='email' type='email' label='Email Address'/>
            <TextField margin='normal' required fullWidth id='password' name='password' type='password' label='Enter Your Password'/>
            <Box textAlign="center">
                <Button type='submit' variant='contained' sx={{mt:3, mb:2, px:5}}>Login</Button>
            </Box>
            <NavLink to="/sendpasswordrestemail">Forgot Password ?</NavLink>
                <br/>
            <NavLink to="/reset">Reset Password</NavLink>
                <br/>
            <NavLink to="/changepassword">Change Password</NavLink>
            
            { error.status ? <Alert severity={error.type}>{error.msg}</Alert> : '' }


        </Box>
    </>
  );
}

export default UserLogin