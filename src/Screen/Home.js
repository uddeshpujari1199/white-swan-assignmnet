import React from 'react'
import './home.css'
import SideNav from '../Component/SideNav'
import NavBar from '../Component/NavBar'
import Card from '../Component/Card'
import MicIcon from '@mui/icons-material/Mic';

function Home() {
  return (
    <div className='home'>
      <div className='sid-nav'>
      <SideNav/>
      </div>
      <div className='home-side'>
        <NavBar/>
        <div className='main-sec'>
          <h1 className='heding-text'>What can I do for you today?</h1>
          <div className='card-align'>
          <Card color='blue' textColor='white' boarderRadius='20% 0 0 0' text1='Ask Me' text2='Anything.'/>
          <Card color='white' textColor='black' boarderRadius='0 0 0 0' text1='Ask Me about' text2='Education'/>
          <Card color='white' textColor='black' boarderRadius='0 0 0 0' text1='Need advice on' text2='Medication'/>
          </div>
          <div>
            <input name='text' className='textInput' placeholder='Enter Your Queries'  />
            {/* <div className='input-icon'>
            <MicIcon/>
            </div> */}
            <div className='lower-text'>
              <p>Try to search this-</p>
              <div className='lower-text-sub1'>
                <p>How do I cook pasta al dente?
                </p>
                <p>How do I cook pasta al dente?
                </p>
              </div>
              <p className='sub2'>How do I cook pasta al dente?</p>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Home