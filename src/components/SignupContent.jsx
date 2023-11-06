import { Box } from '@mui/material'
import React from 'react'
import signuppagepic from "../public/signuppagepic.png"


function SignUpContent() {
  return (
    <Box sx={{height:"100%",width:"100%"}}>
        
            <img src={signuppagepic} style={{objectFit:"fill",width:"100%",height:"100%"}} alt='loginpage'></img>
     
        
    </Box>
  )
}

export default SignUpContent