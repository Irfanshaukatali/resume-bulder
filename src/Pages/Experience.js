import React, { useState } from 'react'
import WorkExperience from './WorkExperience'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { workExpFill } from '../actions/workExpAction'
import { doc, getDocFromCache, getDoc, setDoc } from "firebase/firestore";
import { async } from '@firebase/util'
import { db } from './Login';
function Experience() {
    const dispatch = useDispatch();
    const { workExpUpdate, loginUpdate } = useSelector(state => state)
    const { uid } = loginUpdate

    const [job, setJob] = useState({
        jobTitle: workExpUpdate.jobTitle,
        company: workExpUpdate.company,
        cityTown: workExpUpdate.cityTown,
        country: workExpUpdate.country,
        startDate: workExpUpdate.startDate,
        startYear: workExpUpdate.startYear,
        endDate: workExpUpdate.endDate,
        endYear: workExpUpdate.endYear
    })
    let obj = {}
    function handleWorkExp(e) {
        let { name, value } = e.target
        console.log(name, value);
        setJob({
            ...job,
            [name]: value
        })
        // if(name=='jobTitle'){
        //     setJob({
        //         ...job,
        //         jobTitle:value
        //     })
        // }
    }
    async function handleWorkClick() {
        obj.jobTitle = job.jobTitle;
        obj.company = job.company;
        obj.cityTown = job.cityTown;
        obj.country = job.country;
        obj.startDate = job.startDate;
        obj.startYear = job.startYear;
        obj.endDate = job.endDate;
        obj.endYear = job.endYear;


        try {
            dispatch(workExpFill(obj))
            const docRef = doc(db, "users", `${uid}`);
            const docExp = await getDoc(docRef);
            const data = docExp.data()
            await setDoc(doc(db, "users", `${uid}`), {
                ...data, Experience: obj
            });
            console.log("Cached document data:", docExp.data());
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <div className='Sign__up__section'>
                <div className='your__self'>
                    <h1>Work Experience</h1>
                    <span>Start with your most recent position.</span>
                </div>
                <div>
                    <div className='input__section'>
                        <option>Job Title</option>
                        <input type='text' onChange={handleWorkExp} name='jobTitle' value={job.jobTitle} />
                    </div>
                    <div className='input__section'>
                        <option>Company</option>
                        <input type='text' onChange={handleWorkExp} name='company' value={job.company} />
                    </div>
                    <div className='exp__section'>
                        <div className='exp__left'>
                            <label>City/Town</label>
                            <input type='text' onChange={handleWorkExp} name='cityTown' value={job.cityTown}></input>
                        </div>
                        <div className='exp__right'>
                            <label>Country</label>
                            <input type='text' onChange={handleWorkExp} name='country' value={job.country}></input>
                        </div>
                    </div>
                    <br></br>
                    <div className='exp__section'>
                        <div className='exp__left'>
                            <label>Start Date</label>
                            <select className='exp__dropdown' onChange={handleWorkExp} name='startDate' value={job.startDate}>
                                <option >MONTH</option>
                                <option >January</option>
                                <option >February</option>
                                <option >March</option>
                                <option >April</option>
                                <option >May</option>
                                <option >June</option>
                                <option >July</option>
                                <option >August</option>
                                <option >September</option>
                                <option >October</option>
                                <option >November</option>
                                <option >December</option>
                            </select>
                        </div>
                        <div className='exp__right'>
                            <label>Year</label>
                            <select className='exp__dropdown' onChange={handleWorkExp} name='startYear' value={job.startYear}>
                                <option >YEAR</option>
                                <option >2022</option>
                                <option >2021</option>
                                <option >2020</option>
                                <option >2019</option>
                                <option >2018</option>
                                <option >2017</option>
                                <option >2015</option>
                                <option >2014</option>
                                <option >2013</option>
                                <option >2012</option>
                                <option >2011</option>
                                <option >2010</option>
                            </select>
                        </div>
                    </div>
                    <br></br>
                    <div className='exp__section'>
                        <div className='exp__left'>
                            <label>End Date</label>
                            <select className='exp__dropdown' onChange={handleWorkExp} name='endDate' value={job.endDate}>
                                <option >MONTH</option>
                                <option >January</option>
                                <option >February</option>
                                <option >March</option>
                                <option >April</option>
                                <option >May</option>
                                <option >June</option>
                                <option >July</option>
                                <option >August</option>
                                <option >September</option>
                                <option >October</option>
                                <option >November</option>
                                <option >December</option>

                            </select>
                        </div>
                        <div className='exp__right'>
                            <label>Year</label>
                            <select className='exp__dropdown' onChange={handleWorkExp} name='endYear' value={job.endYear}>
                                <option >YEAR</option>
                                <option >2022</option>
                                <option >2021</option>
                                <option >2020</option>
                                <option >2019</option>
                                <option >2018</option>
                                <option >2017</option>
                                <option >2015</option>
                                <option >2014</option>
                                <option >2013</option>
                                <option >2012</option>
                                <option >2011</option>
                                <option >2010</option>
                            </select>
                        </div>
                    </div>
                    <br></br>
                    <div className='one__two__box__exp'>
                        <div>
                            <input type='checkbox'></input>
                        </div>
                        <div className='one__two__box__comment__exp'>
                            Don't Show me tips in the feature
                        </div>
                    </div>
                    <br></br>

                    <Link to='/experience-description'>
                        <div className='input__section save__button'>
                            <input type='submit' value='SAVE AND CONTINUE' onClick={handleWorkClick} className='save__submit' />
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

export default Experience