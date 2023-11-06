import { Box, Button, Container, Typography } from '@mui/material';
import error401pic from "../../public/500.png"
import React from 'react'

function Error500() {
  return (
    <Box sx={{backgroundColor:"#DDF2FD",height:"950px"}}>
        <Container sx={{paddingTop:"10vh"}}>
            <Typography variant='h2' sx={{color:"grey"}}>500</Typography>
            <Typography variant='h6' sx={{color:"grey"}}>Internet service error</Typography>
            <Typography variant='body1' sx={{color:"grey"}}>Oops something went wrong</Typography>
            <Box>
            <Container>
            <img style={{height:"600px", width:"700px",objectFit:"contain"}} src={error401pic} alt='error404'/ >
            </Container>
                
            </Box>
            <Button href='/dashboard' variant='contained' sx={{width:"20%",marginBottom:"20px"}}>go to home</Button>
        </Container>

    </Box>
  )
}

export default Error500