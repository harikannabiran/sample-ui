import { ChevronRight } from '@mui/icons-material'
import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'

function LandingPageComp() {
  return (

      <Box  sx={{backgroundColor:"white"}}>
        <Container sx={{marginTop:"40vh"}}>
            <Typography variant='h2' sx={{color:"#5272F2",marginTop:"10px"}}>Let's Start Our Adventure</Typography>
            <Typography variant='h6' sx={{color:"grey",marginTop:"10px"}}>Come on, Hit the road!</Typography>
            <Button variant='contained' href='/login'  sx={{width:"20%",marginTop:"10px"}}>Log In <ChevronRight/></Button>
        </Container>
    </Box>
  )
}

export default LandingPageComp