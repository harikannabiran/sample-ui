import { Box, Button, Container, Divider, TextField, Typography } from '@mui/material';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import React from 'react'
import { styled } from '@mui/material/styles';

function SecurityTab() {
    const AuthIcon= styled(LockOpenIcon)(({ theme }) => ({
        color: '#5272F2', 
        backgroundColor:"#DDF2FD"
      }));
  return (
    <Box >
    <Container sx={{margin:"0px 0px 10px 0px"}}>
        <Box sx={{width:"50%"}}>
            <TextField type='password' label="Current Password" sx={{margin:"10px", width:"500px",textAlign:"left"}} variant='outlined' placeholder='Current Password'/>
        </Box>
        <Box sx={{width:"50%"}}>
            <TextField type='password' label="New Password" sx={{margin:"10px", width:"500px",textAlign:"left"}} variant='outlined' placeholder='New Password'/>
        </Box>
        <Box sx={{width:"50%"}}>
            <TextField type='password' label="Confirm New Password" sx={{margin:"10px", width:"500px",textAlign:"left"}} variant='outlined' placeholder='Confirm New Password'/>
        </Box>
    </Container>
    <Divider></Divider>
    <Container sx={{margin:"20px 30px"}} >
        <Box sx={{display:"flex",}}>
        <VpnKeyIcon fontSize='large' sx={{color:"grey",paddingTop:"5px",marginRight:"24px"}}/>
            <Typography variant='h5' sx={{color:"grey", textAlign:"left"}}> Two-Factor authentication</Typography>
        </Box>
        <Box>
        <Container sx={{width:"100%",justifyContent:"center",margin:"80px 120px 20px 120px"}}>
        <AuthIcon fontSize='large' sx={{height:"50px",width:"50px",padding:"10px",borderRadius:"10px"}}/>
        </Container>
        <Container sx={{width:"100%",justifyContent:"center",marginLeft:"120px"}}>
            <Typography variant='h6' sx={{color:"grey"}}>Two Factor authentication is not enabled yet</Typography>
            <Typography variant='body1' sx={{width:"400px",color:"grey",marginLeft:"350px"}} >Two factor authentication adds an additional layer of security to your account by requiring more than just a passwordto log in. Learn more.</Typography>
        </Container>
        </Box>
        
    </Container>
    <Box sx={{width:"20%",margin:"50px 30px"}}>
    <Button variant='contained'sx={{margin:"10px 20px"}}>Save Changes</Button>
        <Button variant='outlined'>Cancel</Button>
    </Box>
    
    </Box>
  )
}

export default SecurityTab