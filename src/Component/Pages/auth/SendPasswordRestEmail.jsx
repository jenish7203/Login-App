import React, { useState } from "react";
import { Grid, TextField, Button, Box, Alert } from "@mui/material";

const SendPasswordRestEmail = () => {


  const [error, setError] = useState({ status:false, msg:"", type:"" })


    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget)
        const actualData = {
            email: data.get('email'),
        }
        if (actualData.email) {
            console.log(actualData);
            document.getElementById("password-rest-email-form").reset();
            setError({status:true, msg:"Password Reset Email Sent Check Your Email !!", type:'success'})
        }else{
            alert("All fields are Required");
            setError({status:true, msg:"Please Provide Valid Email", type:'error'})
        }
    }


  return (
    <>
        
        <Grid container justifyContent='center'>
            <Grid item sm={6} xs={12}>
                <Box onSubmit={handleSubmit} component='form' noValidate sx={{mt:3}} id='password-rest-email-form'>
                    <TextField margin='normal' required fullWidth id='email' name='email' type='email' label='Email Address'/>
                    <Box textAlign="center">
                        <Button type='submit' variant='contained' sx={{mt:3, mb:2, px:5}}>Send</Button>
                    </Box>

                    { error.status ? <Alert severity={error.type}>{error.msg}</Alert> : '' }

                </Box>
            </Grid>
        </Grid>

    </>
  );
};

export default SendPasswordRestEmail;
