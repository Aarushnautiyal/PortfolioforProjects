import React from 'react'

const Card = ({heading,description, github, website}) => {
    return (
            <div className="card">
                <h3>{heading}</h3>
                <p>
                    {description}
                </p>
                <div className="list">
                    <a href={github}><button>Github</button></a>
                    <button>Website</button>
                </div>
            </div>
    )
}

export default Card
