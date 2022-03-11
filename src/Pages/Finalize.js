import React from 'react'
import Summary from './Summary'
import { useSelector } from 'react-redux'
import UpdateResume from './UpdateResume'
const Finalize = () => {
  const { summaryUpdate, skillUpdate, workExpUpdate, contactUpdate, updateResumeUpdate: { color, fontSize, fontStyle }, workExpDescUpdate, educationUpdate
  } = useSelector((state) => state)
  const [state, setState] = React.useState(false)
  function changeTemplates() {
    setState(!state)
  }

  return (
    <>
      <div className='final__page__outpage'>
        {state ?
          <div className={`blank__resume fontSize${fontSize} fontStyle${fontStyle}`}>
            <div className='resume__yourself'>
              <div className='heading__youself'>
                <div className={`heading__graphics color${color}`} ></div>
                <div className='heading__name'>
                  <h1>{contactUpdate.name}</h1>
                </div>
              </div>
              <div className='about__yoyself'>
                <p>
                  {contactUpdate.streatAddress},&nbsp;
                  {contactUpdate.city},&nbsp;
                  {contactUpdate.country},&nbsp;
                  {contactUpdate.phoneNumber},&nbsp;
                  {contactUpdate.email}
                </p>
              </div>
            </div>
            <div className='resume__summary'>
              <span><b className={`color${color} `} >PROFESSIONAL SUMMARY</b></span>
              <br></br>
              <sp>{summaryUpdate.summaryDesc}</sp>
            </div>
            <div className='resume__summary__skill'>
              <span><b className={`color${color}`}>SKILLS</b></span>
              <br></br>
              <sp >
                <span><b>-</b>&nbsp;{skillUpdate.skillOne}</span>
                <span><b>-</b>&nbsp;{skillUpdate.skill2}</span>
                <span><b>-</b>&nbsp;{skillUpdate.skill3}</span>
                <br></br>
                <span><b>-</b>&nbsp;{skillUpdate.skill4}</span>
                <span><b>-</b>&nbsp;{skillUpdate.skill5}</span>
              </sp>
            </div>
            <div className='resume__summary'>
              <span><b className={`color${color}`}>EXPERIENCE</b></span>
              <br></br>
              <sp>
                <span>{workExpUpdate.jobTitle}&nbsp;&nbsp;|&nbsp;&nbsp;
                  {workExpUpdate.startDate}&nbsp;
                  {workExpUpdate.startYear}&nbsp;-&nbsp;
                  {workExpUpdate.endDate}&nbsp;
                  {workExpUpdate.endYear}
                </span><br></br>
                <span>{workExpUpdate.company}&nbsp;
                  | &nbsp; {workExpUpdate.cityTown},
                  &nbsp; {workExpUpdate.country}</span><br></br>
                <span>
                  {workExpDescUpdate.jobDescription}
                </span>
              </sp>
            </div>
            <div className='resume__summary'>
              <span><b className={`color${color}`}>EDUCATION</b></span>
              <br></br>
              <sp>
                <span>{educationUpdate.collegeName}&nbsp;&nbsp;|&nbsp;&nbsp;
                  {educationUpdate.graduateMonth}&nbsp; {educationUpdate.graduateYear}
                </span><br></br>
                <span>{educationUpdate.cityTown},&nbsp;
                  {educationUpdate.country},&nbsp;
                  {educationUpdate.degree}&nbsp;
                </span>
              </sp>
            </div>
          </div>
          :
          <div className='blank__resume'>
            <br/>
            <br/>
            {/*********** ************************************************************** <h1>{contactUpdate.name}</h1> */}
          
          </div>

        }
        <button className='template__button' onClick={changeTemplates}>
          <p>C</p><br />
          <p>H</p><br />
          <p>A</p><br />
          <p>N</p><br />
          <p>G</p><br />
          <p>E</p><br />
        </button>
        <div className='final__update__attributes'>
          <UpdateResume />
        </div>
      </div>
    </>
  )
}

export default Finalize