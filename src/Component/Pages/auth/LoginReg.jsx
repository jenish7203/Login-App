import React, { useState } from 'react'
import { Grid, Card, Typography, Tabs, Tab, Box } from '@mui/material';
import Bg1 from '../../../images/undraw_web_shopping_re_owap.png'
import UserLogin from './UserLogin';
import UserRegistration from './UserRegistration';
import { ShoppingBag } from '@mui/icons-material'; 





const TabPanel = (props) => {

    const {children, value, index} = props;
    
    return(
        <div role='TabPanel' hidden={value !== index}>
            {
                value === index && (
                    <Box>{children}</Box>
                )
            }
        </div>
    )
}

const LoginReg = () => {

  const [value, setValue] = useState(0);

  const handleChange = (event, newvalue) => {
    setValue(newvalue);
  }


  return (
    <>
        <Grid container sx={{ height: "90vh" }}>

            <Grid   item    lg={7}  sm={5}  sx={{
                backgroundImage: `url(${Bg1})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display:{xs:'none', sm:'block'}
              }}>
            </Grid>

            <Grid   item    lg={5}  sm={7} xs={12}>
              <Card sx={{ width: "100%", height: "100%" }}>
                <Box sx={{mx:3, height:550}}>
                  <Box sx={{ borderBottom: 1, borderColor:'divider' }}>
                    <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary">
                      <Tab label="Login" sx={{textTransform:'none', fontWeight:'bold'}}></Tab>
                      <Tab label="Registration" sx={{textTransform:'none', fontWeight: 'bold'}}></Tab>
                    </Tabs>
                  </Box>

                    <TabPanel value={value} index={0}>
                      <UserLogin/>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                      <UserRegistration/>
                    </TabPanel>

                </Box>

                <Box textAlign='center' sx={{mt:2}}>
                  <ShoppingBag sx={{color:'purple', fontSize:100}}/>
                  <Typography variant='h5' sx={{fontWeight:'bold'}}>Jenish-shoop</Typography>
                </Box>

              </Card>
            </Grid>
      </Grid>
    </>
  );
}

export default LoginReg