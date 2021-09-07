import React from 'react';
import { AiOutlineCalendar } from "react-icons/ai";

const experiences = [
    {
        position: 'Software Engineer',
        company: 'ServiceRocket',
        dates: 'June 2021 - Present',
        description: [
            `
            Refactored the app’s query section code by applying SOLID design 
            principles, decreasing render time by 93%.
            `,
            `
            Implemented an expansion tree-selector using TypeScript to improve 
            usability and accessibility for users when selecting expansions.
            `
        ]
    },
    {
        position: 'Software Engineer',
        company: 'Digital Presence',
        dates: 'November 2020 - June 2021',
        description: [
            `
            Generated daily potential leads report for Sales team using Python 
            by designing and implementing multiple web-scrapers which acquire a 
            daily average of 120 lead contact details.
            `
        ]
    },
    {
        position: 'STEM Leaders Program',
        company: 'Honeywell',
        dates: 'January 2020 - February 2020',
        description: [
            `
            Innovated the automation of a ticket follow-up system by developing 
            Python scripts which routinely send email reminders to users 
            worldwide, improving IT support ticket completion time by 80% and 
            hardware asset return rate by 65%.
            `
        ]
    },
    {
        position: 'Boostie',
        company: 'Boost',
        dates: 'January 2019 - February 2020',
        description: [
            `
            Made delicious healthy fruit smoothies for customers.
            `
        ]
    },
]

const experienceStyle = {
    minHeight: '200px',
    maxHeight: 'fit-content',
    width: '100%',
    margin: '2px',
    borderRadius: '16px',
    backgroundColor: 'rgba(255, 69, 69, 0.8)',
    textAlign: 'left',
    padding: '2rem 1.75rem',
    position: 'relative',
    display: 'inline-block'
    
}

const experienceWrapperStyle = {
    textAlign: 'center',
    display: 'flex',
    position: 'relative',
    flexWrap: 'wrap'
}

const positionStyle = {
    fontFamily: 'NTR, sans-serif',
    color: 'white',
    fontWeight: '700',
    marginTop: '12px'
}

const datesStyle = {
    fontFamily: 'NTR, sans-serif',
    color: 'black',
    fontWeight: '700',
    fontSize: '12px',
    marginTop: '12px'
}

const descriptionStyle = {
    fontFamily: 'Roboto',
    color: 'black',
    fontSize: '16px',
    marginTop: '12px',
    listStyleType: 'square',
    lineHeight: 1.5
}

function ExperienceGrid() {
    return (
        <div style={experienceWrapperStyle}>
            {
                experiences.map((experience) => {
                    return (
                        <div style={experienceStyle}>
                            <AiOutlineCalendar size={"32px"} color={"white"}/>
                            <div style={positionStyle}>{experience.position} @ {experience.company}</div>
                            <div style={datesStyle}>{experience.dates}</div>
                            <ul>
                                {
                                    experience.description.map(desc => {
                                        return (
                                            <li style={descriptionStyle}>{desc}</li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default ExperienceGrid;
    