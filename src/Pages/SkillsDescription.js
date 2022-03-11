import React from 'react'
import Education from './Education'
import { Link } from 'react-router-dom'
const SkillsDescription = () => {
  return (
    <>
      <div className='getting__starded'>
        {/* --------------------------------left side----------------------------------------------------- */}
        <div className='left__gettingStarted'>
          <div className='get__sContent'>
            <div className='one__top'>
              <span>UP NEXT</span>
              <h1>skills</h1>
            </div>
            <div className='one__line'>
              <div className='two__left'>
                1
              </div>
              <div className='one__right'>
                Gather information about your<br></br> accomplishments at previous jobs <br></br>to fill in this section.
              </div>
            </div>
            <div className='one__line'>
              <div className='two__left'>
                2
              </div>
              <div className='one__right'>
                Need help to fill out your work <br></br>experience? Simply click to
                <br></br>add pre-written examples unique <br></br>to your industry.
              </div>
            </div>
            <div className='one__line'>
              <div className='two__left'>
                3
              </div>
              <div className='one__right'>
                Be sure to include keywords from the <br></br>job posting. This will make your<br></br>
                resume more attractive to recruiters.
              </div>
            </div>
            <div className='one__two__box'>
              <div>
                <input type='checkbox'></input>
              </div>
              <div className='one__two__box__comment'>
                Don't Show me tips in the feature
              </div>
            </div>
            
              <Link to='/skills'>
              <div className='one__button'>
                <input type='submit' value='ENTER MY WORK EXPRIENCE' />
              </div>    
              </Link>
         
            <div className='back'>
              <h3>Back</h3>
            </div>
          </div>
        </div>

        {/* --------------------------------right side----------------------------------------------------- */}
        <div className='right__gettingStarted'>
          <img src='./images/logo2.svg' />
        </div>
      </div>
    </>
  )
}

export default SkillsDescription