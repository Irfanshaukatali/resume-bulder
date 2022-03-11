import React from 'react'
import styles from '../../Styles/header.module.css';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'
export default function Header() {
    const {loginUpdate} = useSelector((state)=>state)
  return (
    <> 
        <div className={styles.logo}>
           <img className='header___logo' src='./images/actual3.png'/>
        </div>
        <div className={styles.contents}>
            <div>
                Resume Templates
            </div>
            <div >
                <Link to = '/aboutus' >
                    Aboutus    
                </Link>
            </div>
            <div>
               <Link to = '/contactus'>
                    ContactUs       
               </Link>
            </div>
            <div>
                <Link to='/login'>
                    {loginUpdate.userName}
                </Link>
                
            </div>
            {/* <div>
                <Link to='/gettingStart'>
                    GetStarted
                </Link>
                
            </div> */}
        </div>
        
    </>
  )
}