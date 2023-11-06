import { Container, Card, CardContent,Typography,Box,FormGroup,FormControl,Divider,Checkbox,TextField,InputLabel,OutlinedInput,IconButton,InputAdornment,FormControlLabel ,Button, } from '@mui/material';
import React from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function SignupForm() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  return (
    <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center',width:"600px",height:"80%" }}>
            <Card  sx={{height:"100%",width:"600px",boxShadow:"none",marginTop:"30rem"}}>
           
                <CardContent >
                <Typography ml={7} sx={{textAlign:"left"}} variant='h5'>Adventures begins here</Typography>
                    <Typography ml={7} sx={{textAlign:"left"}} variant='subtitle1'>Make your app management easy and fun!</Typography>
                    <FormGroup>
                    <Box mt={2}>
                            <TextField variant='outlined' placeholder='Username'sx={{width:"80%"}}></TextField>
                        </Box>
                        <Box mt={2} >
                            <TextField variant='outlined' placeholder='Email'sx={{width:"80%"}}></TextField>
                        </Box>
                        <Box mt={2} >
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
                        <Box ml={7} sx={{display:"flex"}}>
                            <FormControlLabel control={<Checkbox defaultChecked size='18px'  />} label="I agree to terms & condition"/>
                            
                        </Box>
                        
                        <Box mt={2} mb={2}>
                            <Button type='submit' variant='contained' sx={{width:"80%"}}>Sign up</Button>
                        </Box>
                    </FormGroup>
                    <Typography variant='body1'>Already have an account? <Button href='/login' disableTouchRipple variant='text'>Sign in instead</Button></Typography>
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

export default SignupForm