import { Box } from "@mui/material"
import LoginForm from "../components/LoginForm"
import LoginContent from "../components/LoginContent"

const LoginPage=()=>{
    return (
        <Box sx={{display:"inline-flex",width:"100%",height:"960px", margin:"0px"}}>
            <LoginContent />
            <LoginForm />

        </Box>
        
    )
}

export default LoginPage