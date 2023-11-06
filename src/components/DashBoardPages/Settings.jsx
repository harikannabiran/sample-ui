import { Box, Tab, Tabs } from '@mui/material'
import React from 'react';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import AccountTab from './SettingsPages/AccountTab';
import SecurityTab from './SettingsPages/SecurityTab';
import InfoTab from './SettingsPages/InfoTab';

function Settings() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box  sx={{width:"100%",height:"100%"}}>
       <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} >
            <Tab label="Account" value="1" />
            <Tab label="Security" value="2" />
            <Tab label="Info" value="3" />
            <Tab label="Billing" value="4" />
            <Tab label="Notification" value="5" />
          </TabList>
        </Box>
        <TabPanel value="1"><AccountTab/></TabPanel>
        <TabPanel value="2"><SecurityTab/></TabPanel>
        <TabPanel value="3"><InfoTab/></TabPanel>
        <TabPanel value="4">Item Four</TabPanel>
        <TabPanel value="5">Item Five</TabPanel>
      </TabContext>
    </Box>
    </Box>
  )
}

export default Settings