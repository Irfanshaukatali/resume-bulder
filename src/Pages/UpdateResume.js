import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UpdateResumeFill } from '../actions/updateResumeAction'
const UpdateResume = () => {
    const dispatch = useDispatch()
    const { updateResumeUpdate } = useSelector((state) => state)
    console.log(updateResumeUpdate)
    const [doc, setDoc] = useState({
        color: "color" + updateResumeUpdate.color,
        fontSize: "fontSize" + updateResumeUpdate.fontSize,
        fontStyle:"fontStyle"+ updateResumeUpdate.fontStyle
    })
//  const  [state,setState] = useState(false)
//  function changeTemplates(){
//     setState(!state)
//  }
    function handleFont(e) {
        let {name, value} = e.target
        dispatch(UpdateResumeFill({
            ...updateResumeUpdate,
            fontSize: e.target.value,
            fontStyle:e.target.value
        }))

    }
    let fontStyleArr = [1,2,3,4,5,6]
    let colorArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let fontArr = [1, 2, 3]
    function handleColor(ele) {
        dispatch(UpdateResumeFill({
            ...updateResumeUpdate,
            color: ele
        }))
    }
    return (
        <>
            <div className='attributes__heading'>
                <h1>Here’s Your Resume!</h1>
                <span>What do you want to do next?</span>
            </div>
            <br></br>
            <div className='export__option'>
                <span>Export Options</span>
            </div>
            <div className='attributes__options'>
                <input type='submit' value='Download' className='download__button'></input>
                <br></br>
                <input type='submit' value='Print' className='download__button'></input>
                <br></br>
                <input type='submit' value='Email' className='download__button'></input>
            </div>
            <div className='attribute__line'></div>
            <br></br>
            <div className='export__option'>
                <span>Formating Options</span>
            </div>
            <div className='export__option__layout'>
                <span> Layout </span>
            </div>
            <div className='attributes__layout__option'>
                <input type='button' value='CONDENSED'></input>
                <input type='button' value='STANDERD'></input>
                <input type='button' value='EXPENDED'></input>
            </div>
            <div className='attribute__style__size'>
                <div className='attribute__select__style__size'>
                    <label>Font style</label>
                    <select onChange={handleFont} name='fontStyle'>
                            {
                                fontStyleArr.map((ele)=>{
                                    return <option value={ele}>{ele}</option>
                                })
                            }
                        {/* <option>Railway</option>
                        <option>Hind</option>
                        <option>irfan</option>
                        <option>nazish</option>
                        <option>aman</option> */}
                    </select>
              
                </div>
                <div className='attribute__select__style__size'>
                    <label>Font size</label>
                    <select onChange={handleFont} name='fontSize' id="fontSize">
                        {
                            fontArr.map((ele) => {
                                return <option value={ele}>{ele}</option>
                            })
                        }
                        {/* <option id="fontSize" value={1}>Large</option>
                        <option value={2} id="fontSize">Medium</option>
                        <option value={3} id="fontSize">small</option> */}
                    </select>
                </div>
            </div>
            <div className='export__option__layout'>
                <span> Color </span>
            </div>
            <div className='attribute__forcolor'>
                {
                    colorArr.map((ele) => {
                        return <div onClick={() => { handleColor(ele) }} className={`color${ele} circle`} name='color' ></div>
                    })
                }
            </div>
            <div className='attribute__line'></div>
            <br></br>
            <div className='attributes__options'>
                <input type='submit' value='+ Add new section' className='download__button'></input>
                <br></br>
                <input type='submit' value='Change tamplates' className='download__button' ></input>
            </div>
        </>
    )
}

export default UpdateResume