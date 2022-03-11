import React, { useState } from 'react'
import Skills from './Skills'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { summaryFill } from '../actions/summaryAction'
import { db } from './Login'
import { doc, getDoc, setDoc } from "firebase/firestore";
const Summary = () => {
    const dispatch = useDispatch()
    const { summaryUpdate, loginUpdate } = useSelector((state) => state)
    const { uid } = loginUpdate
    const [form, setForm] = useState({
        summaryDesc: summaryUpdate.summaryDesc
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
        obj.summaryDesc = form.summaryDesc;
        dispatch(summaryFill(obj))
        
        try {
            const docRef = doc(db, "users", `${uid}`);
            const docSumm = await getDoc(docRef);
            const data = docSumm.data()
            await setDoc(doc(db, "users", `${uid}`),{
                ...data, skill_summary:obj
            })
            console.log("Cached document data:", docSumm.data());
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <div className='Sign__up__section'>
                <div className='your__self'>
                    <h1>Summary</h1>
                    <span>Briefly describe the value taht you bring through your skills. background and experience</span>
                </div>
                <br></br>
                <form>
                    <div className='exp__dcp__area'>

                        <textarea onChange={handleChange} name='summaryDesc' value={form.summaryDesc}
                            placeholder='Sell yourself for the job include 3-5 sentence. Customize your summary to
                            the job you are applying to'>
                        </textarea>
                    </div>
                    <br></br>

                    <Link to='/finalize'>
                        <div className='input__section save__button'>
                            <input type='submit' value='SAVE AND CONTINUE' className='save__submit' onClick={handleClick} />
                        </div>
                    </Link>
                </form>
                <div className='back'>
                    <h3>Back</h3>
                </div>
            </div>
        </>
    )
}

export default Summary