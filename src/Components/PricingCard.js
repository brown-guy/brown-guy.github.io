import React from 'react'
import './PricingCard.css'
import { FcCheckmark } from "react-icons/fc";
import { FiCheck } from "react-icons/fi";


function PricingCard() {
    return (
        <div className='container-fluid main-div w-100 py-5'>

            <div className='row justify-content-center'>
                <div className='col-10'>
                    <div className='row content-div justify-content-center'>
                        <div className='col-9 mb-4'>
                            <h6 className='text-warning'>Our plans</h6>
                            <h1>Get in Reasonable Price</h1>
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-3  price-card position-relative'>
                            <div className='top-div d-flex align-items-center justify-content-center'>
                                STARTER
                            </div>
                            <div >
                                <div className='price-div'>
                                    <h3><span>$</span><span className='price'>19.</span><span>00</span></h3>
                                </div>
                                <p className='muted'>A private limited is the most popular</p>
                            </div>
                            <hr />
                            <div className=''>
                                <ul id='perks-list' className='p-0'>
                                    <li className='mb-2'>
                                        <FcCheckmark className='me-3' />
                                        Access to 25 courses
                                    </li>
                                    <li className='mb-2'>
                                        <FcCheckmark className='me-3' />
                                        Course Discussions
                                    </li>
                                    <li className='mb-2'>
                                        <FcCheckmark className='me-3' />
                                        Offline Viewing
                                    </li>
                                    <li className='mb-2'>
                                        <FiCheck className='me-3' />
                                        Certificate after completion
                                    </li>
                                    <li className='mb-2'>
                                        <FiCheck className='me-3' />
                                        Private sessions
                                    </li>
                                </ul>
                            </div>
                            <div className=''>
                                <button className='btn purchase-button btn-outline-primary w-100'>
                                    Purchase Now
                                </button>
                            </div>
                        </div>
                        <div className='col-3  price-card position-relative'>
                            <div className='top-div top-div-2 d-flex align-items-center justify-content-center'>
                                PREMIUM
                            </div>
                            <div >
                                <div className='price-div'>
                                    <h3><span>$</span><span className='price'>29.</span><span>00</span></h3>
                                </div>
                                <p className='muted'>A private limited is the most popular</p>
                            </div>
                            <hr />
                            <div className=''>
                                <ul id='perks-list' className='p-0'>
                                    <li className='mb-2'>
                                        <FcCheckmark className='me-3' />
                                        Access to 25 courses
                                    </li>
                                    <li className='mb-2'>
                                        <FcCheckmark className='me-3' />
                                        Course Discussions
                                    </li>
                                    <li className='mb-2'>
                                        <FcCheckmark className='me-3' />
                                        Offline Viewing
                                    </li>
                                    <li className='mb-2'>
                                        <FcCheckmark className='me-3' />
                                        Certificate after completion
                                    </li>
                                    <li className='mb-2'>
                                        <FiCheck className='me-3' />
                                        Private sessions
                                    </li>
                                </ul>
                            </div>
                            <div className=''>
                                <button className='btn btn-warning w-100'>
                                    Purchase Now
                                </button>
                            </div>
                        </div>
                        <div className='col-3  price-card position-relative'>
                            <div className='top-div top-div-3 d-flex align-items-center justify-content-center'>
                                ENTERPRISE
                            </div>
                            <div >
                                <div className='price-div'>
                                    <h3><span>$</span><span className='price'>49.</span><span>00</span></h3>
                                </div>
                                <p className='muted'>A private limited is the most popular</p>
                            </div>
                            <hr />
                            <div className=''>
                                <ul id='perks-list' className='p-0'>
                                    <li className='mb-2'>
                                        <FcCheckmark className='me-3' />
                                        Access to 25 courses
                                    </li>
                                    <li className='mb-2'>
                                        <FcCheckmark className='me-3' />
                                        Course Discussions
                                    </li>
                                    <li className='mb-2'>
                                        <FcCheckmark className='me-3' />
                                        Offline Viewing
                                    </li>
                                    <li className='mb-2'>
                                        <FcCheckmark className='me-3' />
                                        Certificate after completion
                                    </li>
                                    <li className='mb-2'>
                                        <FcCheckmark className='me-3' />
                                        Private sessions
                                    </li>
                                </ul>
                            </div>
                            <div className=''>
                                <button className='btn purchase-button btn-outline-primary w-100'>
                                    Purchase Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingCard