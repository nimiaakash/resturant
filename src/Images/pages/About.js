 import React from 'react'
 import Layout from '../components/Layout/Layout'
 import { Box, Typography } from '@mui/material'
 
 const About = () => {
   return (
     <Layout>
      <Box sx={{
        my:12,
        textAlign:'center',
        p:12,
        "$ h4":{
          fontWeight:'bold',
          my:2
        },
        "& p":{
          textAlign:"justify"
        },
        '@media(max-width:600)':
        {
          mt:-1,
          '$ h4':{
            fontSize:'1.5rem'
          }
        }
      }}>
        <Typography  variant='h4'>
          Welcome to my Resturant
        </Typography>
        <p1>
        What is food in paragraph?
Food is what people, plants and animals eat to live.
 Every organism needs energy to carry on with the process of living which comes from food. 
 Food usually comes from animals and plants. 
 It is eaten by living things to provide energy and nutrition.

        </p1>
        <br/>
        <p1>
        What is the description of food?
Food is any substance consumed by an organism for nutritional support. 
Food is usually of plant, animal, or fungal origin and contains essential nutrients such as carbohydrates, 
fats, proteins, vitamins, or minerals.
        </p1>
      </Box>
     </Layout>
   )
 }
 
 export default About
 