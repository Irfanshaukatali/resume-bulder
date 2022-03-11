import React from 'react'
import Header from '../Components/subComponents/Header';
import styles from '../Styles/getstarted.css';
import { Link } from 'react-router-dom'
function Getstarted() {
  return (
    <>
        <div className='getting__starded'>
             {/* --------------------------------left side----------------------------------------------------- */}
            <div className='left__gettingStarted'>
                <div className='get__sContent'>
                   <div className='one__top'>
                   <span>3 SIMPLE STEPS</span>
                    <h1>Getting Started</h1>
                   </div>
                   <div className='one__line'>
                      <div className='one__left'>
                        1
                      </div>  
                      <div className='one__right'>
                      Save time using pre-written bullets <br></br>crafted by resume experts.
                      </div> 
                   </div>
                   <div className='one__line'>
                      <div className='one__left'>
                        2
                      </div>  
                      <div className='one__right'>
                      Select a recruiter approved template <br></br>that will get your resume noticed.
                      </div> 
                   </div>
                   <div className='one__line'>
                      <div className='one__left'>
                        3
                      </div>  
                      <div className='one__right'>
                      Download or print your new resume!
                      </div> 
                   </div>
                   <Link to='/contact'>
                   <div className='one__button'>
                     <input type='submit' value='CONTINUE'/>   
                    </div>
                    </Link>
                    <div className='one__link'>
                        <p>By clicking <b> “Continue”</b>, you agree to our 
                        <a href=''>Terms and Conditions</a>
                        and <a href=''> Privacy Policy</a>.</p>    
                    </div>
                </div>
            </div> 

            {/* --------------------------------right side----------------------------------------------------- */}
            <div className='right__gettingStarted'>
                <img src='./images/logo1.svg'/>
            </div>   
        </div>
    </>
  )
}

export default Getstarted