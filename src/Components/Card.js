import React from 'react'
import './Card.css';

function Card({ title, description, image, url }) {
    return (
        <div>
            <div className="card">
                <img src={image} alt={title} className='news-img' />
                <div className='news-content'>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        Read More →
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card
