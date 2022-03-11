import React, { useState } from 'react'
import Experience from './Experience'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { workExpDescFill } from '../actions/workExpDescAction'
import { db } from './Login';
import { doc, getDoc,setDoc } from "firebase/firestore";
function ExperienceDescription() {
  const dispatch = useDispatch()
  const { workExpDescUpdate, loginUpdate } = useSelector(state => state)
  const { uid } = loginUpdate
 console.log(uid)
  const [jobdsp, setJobdsp] = useState({
    jobDescription: workExpDescUpdate.jobDescription
  })
  let obj = {}
  function handleWorkDescChange(e) {
    let { name, value } = e.target
    if (name == 'jobDescription') {
      setJobdsp({
        ...jobdsp,
        jobDescription: value
      })
    }
  }
  async function handleWorkDescClick() {
    obj.jobDescription = jobdsp.jobDescription;


    try {
      dispatch(workExpDescFill(obj))
      const docRef = doc(db, "users", `${uid}`);
      const docDes = await getDoc(docRef);
      const data = docDes.data()
      await setDoc(doc(db, "users", `${uid}`), {
        ...data, Experience_description: obj
    });
      console.log("Cached document data:", docDes.data());
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <div className='Sign__up__section'>
        <div className='your__self'>
          <h1>Work Experience</h1>
          <span>Fresh Produce AssistantAwer</span>
        </div>
        <br></br>
        <div>
          <div className='exp__dcp__area'>
            <label>Job Description</label>
            <textarea onChange={handleWorkDescChange} name='jobDescription' value={jobdsp.jobDescription}
              placeholder='Enter your achievements and responsibilities at this posion Click
                int this textbox to see pre-written exapmles.'>
            </textarea>
          </div>
          <br></br>
          <Link to='/manage-work-experience'>
            <div className='input__section save__button'>
              <input type='submit' value='SAVE AND CONTINUE' className='save__submit' onClick={handleWorkDescClick} />
            </div>
          </Link>


        </div>
        <div className='back'>
          <h3>Back</h3>
        </div>
      </div>
    </>
  )
}

export default ExperienceDescription