import { Box } from "@mui/material"
import ResetPasswordContent from "../components/ResetPasswordContent"
import ResetPasswordForm from "../components/ResetPasswordForm"


const ResetPasswordPage=()=>{
    return (
        <Box sx={{display:"inline-flex",width:"100%",height:"960px", margin:"0px"}}>
           
            <ResetPasswordContent/>
            <ResetPasswordForm/>
        </Box>
        
    )
}

export default ResetPasswordPage