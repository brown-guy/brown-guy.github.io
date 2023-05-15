import React from 'react'
import './Card.css'

function Card(props) {
    return (

        <div class="card" >
            <div className='image-container'>
                <img src={props.src} class="card-img-top image-fluid mb-2" alt="..." />
            </div>
            <div className='thumbnail-container'>
                <img src={props.thumb} class="img-thumbnail thumbnail" alt="..." />
            </div>
            <div class="card-body">
                <h6 class="card-title bolder">{props.title}</h6>
                <p class="card-text text-muted small">{props.content}</p>

            </div>
        </div>

    )
}

export default Card