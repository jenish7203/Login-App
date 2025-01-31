import { useState } from 'react'
import { Grid, TextField, Button, Box, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {

    const [error, setError] = useState({ status: false, msg: "", type: "" });

    const navigate = useNavigate()

    const handleSubmit = (e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget)
            const actualData = {
                password: data.get('password'),
                password_confirmation: data.get('password_confirmation'),
            }
            if (actualData.password && actualData.password_confirmation) {
                if(actualData.password === actualData.password_confirmation){
                    console.log(actualData);
                    document.getElementById("password-rest-form").reset();
                    setError({status:true, msg:"Password Reset SeccessFull. Redirecting To Login Pages....", type:'success'})
                    setTimeout(()=> {
                        navigate("/login");
                    }, 3000)
                }else{
                    setError({status:true, msg:"Password and Confirm Password Doesn't Match", type:'error'})
                }
            }else{
                alert("All fields are Required");
                setError({status:true, msg:"All Field are Required", type:'error'})
            }
    }


    return (
        <>

            <Grid container justifyContent='center'>
                <Grid item sm={6} xs={12}>
                <h1>Reset Password</h1>
                    <Box onSubmit={handleSubmit} component='form' noValidate sx={{mt:3}} id='password-rest-form'>
                        <TextField margin='normal' required fullWidth id='password' name='password' label='New Password' type='Password'></TextField>
                        <TextField margin='normal' required fullWidth id='password_confirmation' name='password_confirmation' label='New Password Confirmation' type='password'></TextField>
                        <Box textAlign="center">
                            <Button type='submit' variant='contained' sx={{mt:3, mb:2, px:5}}>Save</Button>
                        </Box>
        
                        { error.status ? <Alert severity={error.type}>{error.msg}</Alert> : '' }
        
                    </Box>
                </Grid>
            </Grid>

        </>
    )
}

export default ResetPassword