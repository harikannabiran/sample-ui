import { Container, Card, CardContent,Typography,Box,FormGroup,FormControl,InputLabel,OutlinedInput,IconButton,InputAdornment ,Button,} from '@mui/material';
import React from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { ChevronLeft } from '@mui/icons-material';

function ResetPasswordForm() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  return (
    <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center',width:"600px",height:"80%" }}>
            <Card  sx={{height:"100%",width:"600px",boxShadow:"none",marginTop:"30rem"}}>
                <CardContent >
                <Typography ml={7} sx={{textAlign:"left"}} variant='h5'>Reset password</Typography>
                    <Typography ml={7} sx={{textAlign:"left"}} variant='subtitle1'>Your new password must be different from previously used password</Typography>
                    <FormGroup>
                   
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
                        <Box mt={2} mb={2}>
                            <Button type='submit' variant='contained' sx={{width:"80%"}}>Reset Password</Button>
                        </Box>
                        <Box mt={2} mb={2}>
                            <Button href='/login' disableTouchRipple  variant='text' sx={{width:"80%"}}><ChevronLeft/> Back to login</Button>
                        </Box>
                    </FormGroup>
                </CardContent>
            </Card>
    </Container>
  )
}

export default ResetPasswordForm