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
                     <a href={website}><button>Website</button></a>
                </div>
            </div>
    )
}

export default Card
