import { Box, Button, Container, Typography } from '@mui/material';
import error404pic from "../../public/404.png"
import React from 'react'

function Error404() {
  return (
    <Box sx={{backgroundColor:"#DDF2FD",height:"950px"}}>
        <Container sx={{paddingTop:"10vh"}}>
            <Typography variant='h2' sx={{color:"grey"}}>404</Typography>
            <Typography variant='h6' sx={{color:"grey"}}>Page not found</Typography>
            <Typography variant='body1' sx={{color:"grey"}}>We could find the page you are looking for</Typography>
            <Box>
            <Container>
            <img style={{height:"600px", width:"700px",objectFit:"contain"}} src={error404pic} alt='error404'/ >
            </Container>
                
            </Box>
            <Button href='/dashboard' variant='contained' sx={{width:"20%",marginBottom:"20px"}}>go to home</Button>
        </Container>

    </Box>
  )
}

export default Error404