
import { Box, Link, Typography } from "@mui/material"
import NavBar from "../components/NavBar"
import Sidebar from "../components/SideBar"

const Dashboard=()=>{
    return(
            <div >
                <NavBar/>
                <Sidebar  />
                <footer style={{display:"flex",justifyContent:"space-between",margin:"10px 100px 10px 300px"}}>
                    <Box>
                        <Typography sx={{color:"grey"}}>&#169; 2023, by hari</Typography>
                    </Box>
                    <Box >
                        <Link ml={2} mb={2}>link1</Link>
                        <Link ml={2} mb={2}>link2</Link>
                        <Link ml={2} mb={2}>link3</Link>
                        <Link ml={2} mb={2}>link4</Link>
                    </Box>
              </footer>
            </div>
    )
}

export default Dashboard