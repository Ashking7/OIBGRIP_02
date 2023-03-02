import React from 'react'

import './Home.css';
import 'bootstrap/dist/css/bootstrap.css'

import vect from "../Image/blue-vector-png-1.png";
import pic from "../Image/img2.jpeg";



export const Home = () => {
  return (
    <div>
    <div className='intro'>
      
      <div className='i-left'>
        <div className='i-name'>
          <span>HELLO I AM</span>
          <span>ASHAY CHAUDHARI</span>
          <span>ENTHUSIASTIC STUDENT</span>
        </div>
        <form action='#/Contact' method='get'>
        <button className='i-button'> Hire me </button>
        </form>
      </div>
      
      <div className='i-right'>

        <img className='vect' src={vect} alt="vectoryellow.."/>
        <img className='pic' src={pic} alt="logo.."/>

      </div>

    </div>


    
  {/* const now = 60;
  return <ProgressBar now={now} label={`${now}%`} />;

 */}



    </div>
    )
}