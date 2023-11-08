
import { Box, Link, Typography } from "@mui/material"
import NavBar from "../components/NavBar"
import Sidebar from "../components/SideBar"
import { Outlet, Route, Routes } from "react-router-dom"
import CRM from "../components/DashBoardPages/CRM"
import Home from "../components/DashBoardPages/Home"
import Economics from "../components/DashBoardPages/Economics"
import Settings  from "../components/DashBoardPages/Settings"
import Meetings from "../components/DashBoardPages/Meetings"
import Analytics from "../components/DashBoardPages/Clients"
import Help from "../components/DashBoardPages/Help"
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
    navbar: {
      zIndex: 1,     },
  
  });
const Dashboard=()=>{
    const classes= useStyles()
    return(
            <div >
                <NavBar/>
                <Sidebar className={classes.navbar} />
                
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