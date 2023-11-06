import { Box } from '@mui/material'
import React from 'react'
import ResetPasswordpagepic from "../public/resetpasswordpagepic.png"


function ResetPasswordContent() {
  return (
    <Box sx={{height:"100%",width:"100%"}}>
        
            <img src={ResetPasswordpagepic} style={{objectFit:"fill",width:"100%",height:"100%"}} alt='loginpage'></img>
     
        
    </Box>
  )
}

export default ResetPasswordContent