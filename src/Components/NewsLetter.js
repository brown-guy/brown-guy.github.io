import React from 'react'
import './NewsLetter.css'
import { MdEmail } from "react-icons/md";

// MdEmail
function NewsLetter() {
    return (
        <div className='container w-75 m-auto'>
            <div className='row justify-content-center my-5 '>
                <div className='col-6 d-flex justify-content-end'>
                    <img src='Images/illustrated-cool-girl-min.png' className='img-fluid newsletter-image pe-5' alt='illustrated-cool-girl-min' />
                </div>
                <div className='col-6 d-flex flex-wrap flex-row justify-content-start align-content-center'>
                    <h6 className='w-100 text-warning'>Subscribe now</h6>
                    <h1 className='heading-main'>Get every single <br /> update you will need</h1>

                    <form className="row news-form w-75">
                        <div className='col-1 m-0 p-0 d-flex justify-content-center align-items-center'>
                            <i className=''><MdEmail /></i>
                        </div>
                        <div className="col-8 ms-0 my-0 p-0">
                            <label for="inputemail2" className="visually-hidden">email</label>
                            <input type="email" className="form-control news-input ps-0" id="inputemail2" placeholder="Enter Email Address" />
                        </div>
                        <div className="col-3 m-0 p-0">
                            <button type="submit" className="btn btn-warning w-100">Subscribe Now</button>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default NewsLetter