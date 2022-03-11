import React, { useState } from 'react'
import SkillsDescription from './SkillsDescription'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { skillFill } from '../actions/skillAction'
import { db } from './Login'
import { doc, getDoc, setDoc } from "firebase/firestore";
import { async } from '@firebase/util'
const Skills = () => {
    const dispatch = useDispatch();
    const { skillUpdate ,loginUpdate} = useSelector((state) => state)
    const {uid} = loginUpdate
    console.log(skillUpdate)
    const [data, setData] = useState({
        skillOne: skillUpdate.skillOne,
        skill2: skillUpdate.skill2,
        skill3: skillUpdate.skill3,
        skill4: skillUpdate.skill4,
        skill5: skillUpdate.skill5,
    })
    let obj = {}
    function handleChange(e) {
        let { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }
   async function handleClick() {
        obj.skillOne = data.skillOne;
        obj.skill2 = data.skill2;
        obj.skill3 = data.skill3;
        obj.skill4 = data.skill4;
        obj.skill5 = data.skill5;
       

        
        // Get a document, forcing the SDK to fetch from the offline cache.
        try {
            dispatch(skillFill(obj))
            const docRef = doc(db, "users", `${uid}`);
            const docSkill= await getDoc(docRef);
            const data = docSkill.data()
            await setDoc(doc(db, "users", `${uid}`),{
                ...data , skill:obj
            })
            console.log("Cached document data:", docSkill.data());
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <div className='Sign__up__section'>
                <div className='your__self'>
                    <h1>Skills</h1>
                    <span>Add a few skills to show employers what you're good at.</span>
                </div>
                <div>
                    <div className='input__section'>
                        <input type='text' placeholder='Skill#1' onChange={handleChange} name='skillOne' value={data.skillOne} />
                    </div>
                    <div className='input__section'>
                        <input type='text' placeholder='Skill#1' onChange={handleChange} name='skill2' value={data.skill2} />
                    </div>
                    <div className='input__section'>
                        <input type='text' placeholder='Skill#1' onChange={handleChange} name='skill3' value={data.skill3} />
                    </div>
                    <div className='input__section'>
                        <input type='text' placeholder='Skill#1' onChange={handleChange} name='skill4' value={data.skill4} />
                    </div>
                    <div className='input__section'>
                        <input type='text' placeholder='Skill#1' onChange={handleChange} name='skill5' value={data.skill5} />
                    </div>

                    <br></br>
                    <div className='manage__add__workexp__edu'>
                        <span>+ Add work experience</span>
                    </div>
                    <br></br>

                    <Link to='/summary'>
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

export default Skills