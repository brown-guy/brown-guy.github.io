import React from 'react';
import './SampleCourse.css';

function SampleCourse() {
    return (
        <section className='container-fluid SampleCourse-section position-relative'>
            <div className='row content-div-SampleCourse-section justify-content-center'>
                <div className='col-9 mb-4'>
                    <h6 className='text-warning'>Our plans</h6>
                    <h1>Get in Reasonable Price</h1>
                </div>
            </div>
            <div className='row info-card justify-content-center w-100'>
                <div className='col-5 h-100'>
                    <img className='w-100 h-100 info-card-img' src='Images/Cards/ux-designer-web-designer.webp' alt='UIUX img' />
                </div>
                <div className='col-3 h-100'>
                    <div className="card course-cards h-100">
                        <div className="card-body d-flex flex-column justify-content-between">
                            <div className=''>

                                <ul class="list-group list-group-flush">
                                    <li className='list-group-item'><strong>Enrolled:</strong> 1200 students</li>

                                    <li className='list-group-item'><strong>Duration:</strong> 2 hours</li>

                                    <li className='list-group-item'><strong>Lectures:</strong> 8</li>

                                    <li className='list-group-item'><strong>Category:</strong> Technology</li>

                                    <li className='list-group-item'><strong>Level:</strong> Intermediate</li>
                                </ul>
                                <div className='w-100 d-flex justify-content-center'>
                                    <img src='Images/infocard.png' alt='Info Img in Card' className='card-img-bottom' />
                                </div>
                            </div>
                            <div className=' d-flex flex-column justify-content-end'>

                                <small className="card-text text-center text-muted">Contact our customer support at:<br /> <a href="/" class="link-info text-bold text-decoration-none">malik@customer.support</a></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SampleCourse