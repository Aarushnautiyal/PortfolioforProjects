import React, { useEffect, useState } from 'react'
import data from '../../data'
import Card from '../Card/Card'
const Projects = () => {
    const [records, setrecords] = useState([])
    const cards = records.map(record=>{
        return(
        <Card 
        key={record.id} 
        heading={record.heading} 
        description={record.description} 
        github={record.github} 
        website={record.website}
        />)})

        useEffect(() => {
            setrecords(data)
        },[])
        
    const handleChange=(e)=>{
        console.log(e.target.value)
        const records = data.filter(ele=>ele.sub.includes(e.target.value))
        setrecords(records)
    }
    return (
        <section className="project" id='projects'>
        <h2 className="declaration--heading">Projects</h2>
        <h3 className="declaration--heading mgr1">Category
            <select name="" id="" className="selector" onChange={handleChange}>
                <option value="">-Select a category-</option>
                <option value="react">React</option>
                <option value="html">Html Css</option>
            </select>
        </h3>

        <div className="card--container flx">{cards}</div>
    </section>
    )
}

export default Projects
