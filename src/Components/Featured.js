import React from 'react'
import './Featured.css'

function Featured(props) {
    return (
        <div className='container w-75 m-auto my-5'>
            <div className='row featured-row m-auto'>
                <div className=' col-6 d-flex flex-wrap justify-content-end align-content-center position-relative p-0'>
                    <img src={props.student.studentPic} alt='Student img' className='img-thumbnail p-0 w-100 h-100' />
                    <div className='bottom-div bg-light w-75 text-center d-flex flex-column justify-content-center'>
                        <h5 className='p-0 m-0'>{props.student.firstName} {props.student.lastName}</h5>
                        <p className='text-muted p-0 m-0'>{props.student.designation}</p>
                    </div>
                    <img src={props.student.topLeft} alt='top-left illustration' className='top-left' />
                </div>
                <div className='col-6'>
                    <h1 className='bolder featured-heading'>
                        Successful Student <br /> <span className='text-warning'>Feedback</span>
                    </h1>

                    <p className='small'>{props.student.feedback}</p>

                    <h6 className='heading small'>The courses that {props.student.firstName} has taken</h6>
                    <div className='course-card'>
                        <h6 className='heading ps-5 pt-4  small'>{props.student.course}</h6>
                        <p className='text-muted ps-5  small'>{props.student.organization}</p>
                        <div className='parent'>
                            <img src={props.student.thumbnail} alt='thumbnail' className='course-card-thumbnail' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured