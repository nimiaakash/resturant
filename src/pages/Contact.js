import React from 'react'
import Layout from '../components/Layout/Layout'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import CallIcon from '@mui/icons-material/Call';

import {Box, TableCell,
   Typography,TableRow,TableHead,
   TableContainer, Paper,Table,
    TableBody} from '@mui/material'

const Contact = () => {
  return (
    <Layout>
      <Box sx={{my:10,ml:10,"$ h4":{ fontWeight:'bpld',mb:2}}}>
        <Typography variant='h4'>
          Contact my Resturant 
        </Typography>
        <p>

        </p>
      </Box>
      <Box sx={{m:3,width:"600px",ml:10,
    "@media(max-width:600px)":{
      width:"300px"
    }
    }}>  
        <TableContainer component={Paper} >
          <Table arial-label="contact table">
            <TableHead>
               <TableBody>
               <TableRow>
                <TableCell 
                sx={{bgcolor:"black",color:"white"
              }}
              align='center'
                >
                   Contact Details</TableCell>
              </TableRow>
               </TableBody>
               <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color:'red',pt: 1}}/> 1800-00-000 (Toll free)
                </TableCell>
               </TableRow>
               <TableRow>
               <TableCell>
                  <MarkunreadIcon sx={{ color:'skyblue',pt: 1}}/> 8058585590  (fooddeliver123@gmail.com)
                </TableCell>
               </TableRow>
               <TableRow>
               <TableCell>
                  <CallIcon sx={{ color:'green',pt: 1}}/> 1234567890 
                </TableCell>
               </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact
