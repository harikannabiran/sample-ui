import { Container, Card, CardContent,Typography,Box,FormGroup ,Button,TextField} from '@mui/material';
import React from 'react'

import { ChevronLeft } from '@mui/icons-material';

function ForgotPasswordForm() {
   
  return (
    <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center',width:"600px",height:"80%" }}>
            <Card  sx={{height:"100%",width:"600px",boxShadow:"none",marginTop:"30rem"}}>
                <CardContent >
                <Typography ml={7} sx={{textAlign:"left"}} variant='h5'>Forgot password</Typography>
                    <Typography ml={7} sx={{textAlign:"left"}} variant='subtitle1'>Please enter your email & we will send instructions to reset password</Typography>
                    <FormGroup>
                   
                    <Box mt={2} mb={2}>
                            <TextField variant='outlined' placeholder='Email'sx={{width:"80%"}}></TextField>
                        </Box>
                        <Box mt={2} mb={2}>
                            <Button href='/resetpassword' type='submit' variant='contained' sx={{width:"80%"}}>Login</Button>
                        </Box>
                        <Box mt={2} mb={2}>
                            <Button href='/login' disableTouchRipple type='submit' variant='text' sx={{width:"80%"}}><ChevronLeft/> Back to login</Button>
                        </Box>
                    </FormGroup>
                </CardContent>
            </Card>
    </Container>
  )
}

export default ForgotPasswordForm