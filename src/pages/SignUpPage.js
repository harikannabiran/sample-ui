import { Box } from "@mui/material"
import SignUpContent from "../components/SignupContent"
import SignupForm from "../components/SignupForm"


const SignUpPage=()=>{
    return (
        <Box sx={{display:"inline-flex",width:"100%",height:"960px", margin:"0px"}}>
            <SignUpContent/>
            <SignupForm/>
        </Box>
        
    )
}

export default SignUpPage