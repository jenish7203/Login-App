import React, { useState } from 'react'
import { TextField, FormControlLabel, Checkbox, Button, Box, Alert } from '@mui/material';
import { useNavigate } from "react-router-dom";

const UserRegistration = () => {

    const [error, setError] = useState({ status:false, msg:"", type:"" })

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget)
        const actualData = {
            name: data.get('name'),
            email: data.get('email'),
            password: data.get('password'),
            password_confirmation: data.get('password_confirmation'),
            tc: data.get('tc'),
        }
        if (actualData.name && actualData.email && actualData.password && actualData.password_confirmation && actualData.tc !== null) {
            if(actualData.password === actualData.password_confirmation){
                console.log(actualData);
                document.getElementById("registration-form").reset();
                setError({status:true, msg:"Registration Success", type:'success'})
                navigate("/dashbord");
            }else{
                setError({status:true, msg:"Password and Confirm Password Doesn't Match", type:'error'})
            }
        }else{
            alert("All fields are Required");
            setError({status:true, msg:"All fields are Required", type:'error'})
        }
    }


  return (
    <>
      
        <Box onSubmit={handleSubmit} component='form' noValidate sx={{mt:3}} id='registration-form'>
            <TextField margin='normal' required fullWidth id='name' name='name' type='text' label='Name'/>
            <TextField margin='normal' required fullWidth id='email' name='email' type='email' label='Email Address'></TextField>
            <TextField margin='normal' required fullWidth id='password' name='password' type='password' label='Enter Your Password'/>
            <TextField margin='normal' required fullWidth id='password_confirmation' name='password_confirmation' type='password' label='Confirm Password'></TextField>
            <FormControlLabel control={<Checkbox value="agree" color="primary" name="tc" id="tc" />} label="I agree to term and condition." />
            <Box textAlign="center">
                <Button type='submit' variant='contained' sx={{mt:3, mb:2, px:5}}>Join</Button>
            </Box>
            
            { error.status ? <Alert severity={error.type}>{error.msg}</Alert> : '' }

        </Box>

    </>
  );
}

export default UserRegistration