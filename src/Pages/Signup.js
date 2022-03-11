import React, { useState } from 'react';
import Header from '../Components/subComponents/Header';
import { Link } from 'react-router-dom'
import Workexprence from './WorkExperience';
import { useDispatch, useSelector } from 'react-redux'
import { contactFill } from '../actions/contactAction'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { db } from './Login';
function Signup() {
  const { contactUpdate, loginUpdate } = useSelector((state) => state)
  console.log(contactUpdate)
  const { uid } = loginUpdate;
  // console.log(uid)
  console.log(loginUpdate)
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: contactUpdate.name,
    email: contactUpdate.email,
    streatAddress: contactUpdate.streatAddress,
    city: contactUpdate.city,
    country: contactUpdate.country,
    phoneNumber: contactUpdate.phoneNumber
  });
  let obj = {}
  function handleChange(e) {
    let { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
    // if(name=='name'){
    //   setForm({
    //     ...form,
    //     name:value
    //   })
    // }else if(name=='email'){
    //   setForm({
    //     ...form,
    //     email:value
    //   })
    // }
  }
  async function handleClick() {
    obj.name = form.name;
    obj.email = form.email;
    obj.streatAddress = form.streatAddress;
    obj.city = form.city;
    obj.country = form.country;
    obj.phoneNumber = form.phoneNumber;


    try {
      dispatch(contactFill(obj))
      // const user = setDoc()
      // Add a new document in collection "cities"
      await setDoc(doc(db, "users",`${uid}`), {
       contact:obj
      });
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <div className='Sign__up__section'>
        <div className='your__self'>
          <h1>Tell us about yourself</h1>
          <span>With this info, recruiters will be able to find you.</span>
        </div>
        <div>
          <div className='input__section'>
            <option>name</option>
            <input type='text' onChange={handleChange} name='name' value={form.name} />
          </div>
          <div className='input__text__check'>
            <option>Email</option>
            <div className='input__parent'>
              <div >
                <input type='email' className='input__text' onChange={handleChange} name='email' value={form.email}></input>
              </div>
              <div className='check__box'>
                <input type='checkbox' ></input>
              </div>
              <div className='dont__show'>
                <span>Dont show on my resume</span>
              </div>
            </div>

          </div>
          <div className='input__section' >
            <option>Streat address</option>
            <input type='text' onChange={handleChange} name='streatAddress' value={form.streatAddress} />
          </div>
          <div className='city__input'>
            <option>City</option>
            <input type='text' onChange={handleChange} value={form.city} name='city' />
          </div>
          <div className='input__section'>
            <option>Country</option>
            <input type='text' onChange={handleChange} name='country' value={form.country} />
          </div>
          <div className='city__input'>
            <option>Phonenumber</option>
            <label><input type='text' onChange={handleChange} value={form.phoneNumber} name='phoneNumber' />
              <span>+ Add Another no</span></label>
          </div>
          <br></br>

          <Link to='/workexperience'>
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

export default Signup