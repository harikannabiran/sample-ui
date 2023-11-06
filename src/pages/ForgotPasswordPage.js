import { Box } from "@mui/material"
import ForgotPasswordContent from "../components/ForgotPasswordContent"
import ForgotPasswordForm from "../components/ForgotPasswordForm"


const ForgotPasswordPage=()=>{
    return (
        <Box sx={{display:"inline-flex",width:"100%",height:"960px", margin:"0px"}}>
           
            <ForgotPasswordContent/>
            <ForgotPasswordForm/>
        </Box>
        
    )
}

export default ForgotPasswordPage