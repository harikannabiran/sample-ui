import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Box, Button, Card, CardContent,  Checkbox, Container, Divider, FormControl, FormControlLabel, FormGroup, IconButton, InputAdornment, InputLabel,  OutlinedInput,  TextField, Typography } from '@mui/material'
import React from 'react'

function LoginForm() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  return (
    <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center',width:"600px" }}>
            <Card  sx={{height:"100%",width:"600px",boxShadow:"none",marginTop:"30rem"}}>
           
                <CardContent >
                <Typography ml={7} sx={{textAlign:"left"}} variant='h5'>Welcome to NeatLab!</Typography>
                    <Typography ml={7} sx={{textAlign:"left"}} variant='subtitle1'>Please sign-in your account and start the adventure</Typography>
                    <FormGroup>
                        <Box mt={2} mb={2}>
                            <TextField variant='outlined' placeholder='Email'sx={{width:"80%"}}></TextField>
                        </Box>
                        <Box mt={2} mb={2}>
                        <FormControl sx={{ m: 1, width: '80%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
                            
                        </Box> 
                        <Box sx={{display:"flex",justifyContent:"space-around"}}>
                            <FormControlLabel control={<Checkbox defaultChecked size='18px'  />} label="Remember me"/>
                           <Button href='/forgotpassword' disableTouchRipple variant='text'>Forgot password</Button>
                        </Box>
                        
                        <Box mt={2} mb={2}>
                            <Button href='/dashboard' type='submit' variant='contained' sx={{width:"80%"}}>Login</Button>
                        </Box>
                    </FormGroup>
                        
                        
                
                    <Typography variant='body1'>New on our platform <Button href='/signup' disableTouchRipple variant='text'>Create an account</Button></Typography>
                    <Divider>or</Divider>
                    <Box>
                        <Button href="www.facebook.com" disableTouchRipple><i className='fa fa-facebook-f' style={{fontSize:"32px",BackgroundColor:'#3b5998',margin:"10px"}}></i></Button>
                        <Button href="www.twitter.com" disableTouchRipple><i className='fa fa-twitter' style={{fontSize:"32px",BackgroundColor:'#3b5998',margin:"10px"}}></i></Button>
                        <Button href="www.github.com" disableTouchRipple><i className='fa fa-github' style={{fontSize:"32px",color:'black',margin:"10px"}}></i></Button>
                        <Button href="www.google.com" disableTouchRipple><i className='fa fa-google-plus' style={{fontSize:"32px",color:'red',margin:"10px"}}></i></Button>
                    </Box>
                </CardContent>
            </Card>
    </Container>
  )
}

export default LoginForm