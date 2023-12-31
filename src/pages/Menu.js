import React from 'react'
import { MenuList} from '../data/data'
import Layout from '../components/Layout/Layout'
import { Box, Card, CardActionArea, CardMedia } from '@mui/material'

const Menu = () => {
  return (
    <Layout>
      <Box>
        {
          MenuList.map(menu=>(
            <Card>
              <CardActionArea>
                <CardMedia 
                sx={{minHeight:'400px'}}
                 component={'img'} 
                 src={menu.image}
                 alt={menu.name}
                 
                 />
              </CardActionArea>
            </Card>
          ))
        }
      </Box>
    </Layout>
  )
}

export default Menu
