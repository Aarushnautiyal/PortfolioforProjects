import React from 'react'
import {records} from '../../data'
import Card from '../Card/Card'
const Projects = () => {
    console.log(records)
    const cards = records.map(record=>{
        return(
        <Card 
        key={record.id} 
        heading={record.heading} 
        description={record.description} 
        github={record.github} 
        website={record.website}
        />)})
    return (
        <section className="project">
        <h2 className="declaration--heading">Projects</h2>
        <h3 className="declaration--heading mgr1">Category
            <select name="" id="" className="selector">
                <option value="react">React</option>
                <option value="htmlcss">Html Css</option>
            </select>
        </h3>

        <div className="card--container flx">{cards}</div>
    </section>
    )
}

export default Projects
