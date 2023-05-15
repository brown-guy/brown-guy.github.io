import React from 'react'
import PricingCard from './PricingCard'


function Pricing() {
    const packages = [
        {
            perk1: 'Access to 25 courses',
            perk2: 'Course Discussions',
            perk3: 'Offline Viewing',
            perk4: 'Certificate after completion',
            perk5: 'Private sessions'
        }
    ]
    return (
        <div className='container'>
            <div className='row'>

                <PricingCard />

            </div>
        </div>
    )
}

export default Pricing