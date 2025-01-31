import React from 'react'
import { Button, CssBaseline, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ChangePassword from './auth/ChangePassword';

const DashBord = () => {

    const navigate = useNavigate()

    const handleLogout = () => {
        console.log("Loguat Clicked");
        navigate('/login');
    }




  return (
    <>
      
        <CssBaseline />
        <Grid container>
            <Grid item sm={4} sx={{backgroundColor:'gray', p:5, color:'white'}}>
                <h1>DashBord</h1>
                <Typography variant='h5'>Email: Jenihs@gmail.com</Typography>
                <Typography variant='h6'>Name: Jenish</Typography>
                <Button variant='contained' color='warning' size='large' onClick={handleLogout} sx={{mt:8}}>Logout</Button>
            </Grid>
            <Grid item sm={8}>

                <ChangePassword/>

            </Grid>
        </Grid>

    </>
  );
}

export default DashBord