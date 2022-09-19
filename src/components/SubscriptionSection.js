import React from 'react'

export default function Subscription() {
    return (
        <div className="section subscription-section">
            <h1 className='title'>Monthly Subscription</h1>
            <p className='highlight-price'>
                $29 <span>per month</span>
            </p>
            <p className='description-text'>
                Full access for less than $1 a day
            </p>
            <div className='sign-up'>
                <button className='btn'>Sign Up</button>
            </div>
        </div>
    )
}
