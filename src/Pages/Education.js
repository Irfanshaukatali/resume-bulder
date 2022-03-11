import React, { useState } from 'react'
import EducationDescription from './EducationDescription'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { educationFill } from '../actions/educationAction'
import { db } from './Login'
import { doc, getDoc,setDoc } from "firebase/firestore";
import { async } from '@firebase/util'

const Education = () => {
    const dispatch = useDispatch()
    const { educationUpdate, loginUpdate } = useSelector((state) => state)
    const { uid } = loginUpdate
    console.log(educationUpdate)
    const [form, setForm] = useState({
        collegeName: educationUpdate.collegeName,
        cityTown: educationUpdate.cityTown,
        country: educationUpdate.country,
        degree: educationUpdate.degree,
        graduateMonth: educationUpdate.graduateMonth,
        graduateYear: educationUpdate.graduateYear,
    })
    let obj = {}
    function handleChange(e) {
        let { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }
   async function handleClick() {
        obj.collegeName = form.collegeName;
        obj.cityTown = form.cityTown;
        obj.country = form.country;
        obj.degree = form.degree;
        obj.graduateMonth = form.graduateMonth;
        obj.graduateYear = form.graduateYear;
       
        
        try {
            dispatch(educationFill(obj))
            const docRef = doc(db, "users", `${uid}`);
            const docEdu = await getDoc(docRef);
            const data = docEdu.data()
            await setDoc(doc(db, "users", `${uid}`),{
                ...data,education:obj
            })
            console.log("Cached document data:", docEdu.data());
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <div className='Sign__up__section'>
                <div className='your__self'>
                    <h1>Education</h1>
                    <span>Start with your most recent education institution.</span>
                </div>
                <div>
                    <div className='input__section'>
                        <option>School Name</option>
                        <input type='text' onChange={handleChange} name='collegeName' value={form.collegeName} />
                    </div>

                    <div className='exp__section'>
                        <div className='exp__left'>
                            <label>City/Town</label>
                            <input type='text' onChange={handleChange} name='cityTown' value={form.cityTown}></input>
                        </div>
                        <div className='exp__right'>
                            <label>Country</label>
                            <input type='text' onChange={handleChange} name='country' value={form.country}></input>
                        </div>
                    </div>
                    <div className='input__section'>
                        <option>Degree</option>
                        <input type='text' onChange={handleChange} name='degree' value={form.degree} />
                    </div>


                    <div className='exp__section'>
                        <div className='exp__left'>
                            <label>Graduation Date</label>
                            <select className='exp__dropdown' onChange={handleChange} name='graduateMonth' value={form.graduateMonth}>
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
                            <label>Select Year</label>
                            <select className='exp__dropdown' onChange={handleChange} name='graduateYear' value={form.graduateYear}>
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
                    <div className='manage__add__workexp__edu'>
                        <span>+ Add work experience</span>
                    </div>
                    <br></br>
                    <Link to='/skills-description'>
                        <div className='input__section save__button'>
                            <input type='submit' value='SAVE AND CONTINUE' className='save__submit' onClick={handleClick} />
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

export default Education