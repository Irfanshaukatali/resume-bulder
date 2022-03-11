import React from 'react'
import {Link} from 'react-router-dom'
const ManageWorkExp = () => {
    return (
        <>
            <div className='Sign__up__section'>
                <div className='your__self'>
                    <h1>Manage Work Experience</h1>
                    <span>Add. edit or delete your wok experience.</span>
                </div>
                <br></br>
                <div className='line__bar'></div>
                <br></br>
                <div className='manage__up__del'>
                    <span><b>Lorem </b>Address, United State</span>
                    <br></br>
                    <span>Month, jan sample</span>
                </div>
                <br></br>
                <div className='line__bar'></div>
                <br></br>
                <div className='manage__add__workexp'>
                    <span>+ Add work experience</span>
                </div>
                <form>
                     <br></br>
                     <Link to='/educaiton-description'>
                     <div className='input__section save__button'>
                        <input type='submit' value='SAVE AND CONTINUE' className='save__submit' />
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

export default ManageWorkExp