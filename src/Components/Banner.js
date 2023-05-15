import React from 'react'
import './Banner.css'



function Banner() {
    return (
        <div className='container-fluid banner d-flex align-content-center justify-content-center'>
            <div className='row d-flex justify-content-center flex-wrap align-content-center'>

                <div className='col-5 p-0 m-0 d-flex flex-wrap align-content-center text-start master'>
                    <h4 className='d-block w-100 fw-bolder m-0 h-4'>
                        Become a Master
                    </h4>

                    <p className='d-block w-100 mx-0 skills'>
                        Learn New Skills Online <br /> Find Best Courses
                    </p>
                    <button className='btn btn-warning py-2 px-4 quote'>Get a Quote</button>
                    <button className='btn btn-outline-warning py-2 px-4 quote'>Read more</button>
                </div>

                <div className='col-3 d-flex flex-wrap align-content-center p-0'>
                    <img className='banner-image' src='Images/img-02img-removebg-preview.png' alt='Img of a working lady' />

                </div>

            </div>
        </div>
    )
}

export default Banner