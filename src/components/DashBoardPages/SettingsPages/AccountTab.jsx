import {  Box, Button, Container, TextField, Typography } from '@mui/material';
import profilepic from "../../../public/profilepic.jpg"
import React from 'react'

function AccountTab() {
  return (
    <Box sx={{textAlign:"left"}}>
        <Container sx={{display:"flex",marginLeft:"10px",padding:"0px"}}>
        <img style={{objectFit:"contain", width:"150px",height:"150px", borderRadius:"5px"}} src={profilepic} alt='profile'/>
        <Container sx={{width:"400px",marginLeft:"1%",paddingTop:"2%",paddingLeft:"10px"}}>
            <Button  variant='contained' sx={{margin:"10px 20px"}}>upload new photo</Button>
            <Button variant='outlined' sx={{margin:"10px 20px"}} color='error'>reset</Button>
            <Typography variant='body2' sx={{color:"grey",textAlign:"left",paddingLeft:"8%"}}> Allowed JPG,GIF or PNG, Max size of 800kb</Typography>
        </Container>  
        </Container> 
        <Container sx={{marginLeft:"10px",padding:"0px"}}>
            <Box sx={{display:"flex",justifyContent:"space-between"}}>
                <TextField sx={{width:"100%",margin:"20px 20px 20px 0px"}} variant='outlined' label="Username" placeholder='Username'/>
                <TextField sx={{width:"100%",margin:"20px 20px 20px 0px"}}  variant='outlined' label="Name" placeholder='Name'/>
            </Box>
            <Box  sx={{display:"flex",justifyContent:"space-between"}}>
                <TextField sx={{width:"100%",margin:"20px 20px 20px 0px"}}  variant='outlined' label="Email" placeholder='Email' />
                <TextField sx={{width:"100%",margin:"20px 20px 20px 0px"}} variant='outlined' label="Role" placeholder='Role' />
            </Box>
            <Box  sx={{display:"flex",justifyContent:"space-between"}}>
                <TextField sx={{width:"100%",margin:"20px 20px 20px 0px"}} variant='outlined' label="Status" placeholder='Status' />
                <TextField sx={{width:"100%",margin:"20px 20px 20px 0px"}} variant='outlined' label="Company" placeholder='Company' />
            </Box>
        </Container>
        <Container sx={{textAlign:"left",marginLeft:"10px",padding:"0px"}}>
            <Button sx={{marginRight:"10px"}} variant='contained'>Save Changes</Button>
            <Button variant='outlined'>Cancel</Button>
        </Container>
    </Box>
  )
}

export default AccountTab