import { Box, Button, Container, Typography } from '@mui/material';
import error401pic from "../../public/401.png"
import React from 'react'

function Error401() {
  return (
    <Box sx={{backgroundColor:"#DDF2FD",height:"950px"}}>
        <Container sx={{paddingTop:"10vh"}}>
            <Typography variant='h2' sx={{color:"grey"}}>401</Typography>
            <Typography variant='h6' sx={{color:"grey"}}>You are not authorized</Typography>
            <Typography variant='body1' sx={{color:"grey"}}>You have no access to this page, Go Home!</Typography>
            <Box>
                <img style={{height:"600px", width:"700px",objectFit:"contain"}} src={error401pic} alt='error404'/ >
            </Box>
            <Button href='/dashboard' variant='contained' sx={{width:"20%",marginBottom:"20px"}}>go to home</Button>
        </Container>

    </Box>
  )
}

export default Error401