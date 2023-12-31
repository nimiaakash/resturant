import React from 'react'
import Layout from '../components/Layout/Layout';
import {Link} from 'react-router-dom'
import  food from '../Images/food.jpg'
import '../styles/HomeStyles.css'
const Home = () => {
  return (
    <Layout>
      <div className='home' style={{backgroundImage:`url(${food})`}}>
        <div className='headercontainer'>
          <h1> Food Website</h1>
          <p1 className='best'> Best Food In India</p1>
          <Link to='/menu'>
            <br></br>
          <button className='order'>
            ORDER NOW
          </button>
          </Link>
           

        </div>
      </div>
    </Layout>
  )
}

export default Home
