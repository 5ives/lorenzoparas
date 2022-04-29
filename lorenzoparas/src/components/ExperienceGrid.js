import React from 'react';
import { AiOutlineCalendar } from "react-icons/ai";

const experiences = [
    {
        position: 'Software Engineer',
        company: 'Service NSW',
        dates: 'June 2022 - Present',
        description: `I'm working here now!`
    },
    {
        position: 'Software Engineer',
        company: 'Honeywell',
        dates: 'February 2022 - June 2022',
        description:
            `
            Contributed towards Honeywell's Experion R520 release and Modular Digitization
            project through sprint contributions.
            `
    },
    {
        position: 'Software Engineer',
        company: 'ServiceRocket',
        dates: 'June 2021 - Feburary 2022',
        description:
            `
            Delivered new features and fixed bugs within ServiceRocket's Reporting for 
            Confluence (Cloud) Atlassian application.
            `
    },
    {
        position: 'Software Engineer',
        company: 'Digital Presence',
        dates: 'November 2020 - June 2021',
        description:
            `
            Created webscrapers to discover potential SEO clients and 
            managed the webhosting of sites.
            `
    },
    {
        position: 'IT Support Specialist',
        company: 'Epiroc',
        dates: 'Feburary 2019 - Feburary 2021',
        description:
            `
            Assisted users with software and hardware related problems.
            Managed assets and setup computers for new/existing employees.
            `
    }
]

const experienceStyle = {
    minHeight: '200px',
    minWidth: '200px',
    maxHeight: '200px',
    maxWidth: '200px',
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

const companyStyle = {
    fontFamily: 'NTR, sans-serif',
    color: 'white',
    fontWeight: '700',
    marginTop: '6px'
}

const datesStyle = {
    fontFamily: 'NTR, sans-serif',
    color: 'black',
    fontWeight: '800',
    fontSize: '12px',
    marginTop: '12px'
}

const descriptionStyle = {
    fontFamily: 'NTR, sans-serif',
    color: 'black',
    fontSize: '12px',
    marginTop: '12px',
    lineHeight: 1.5
}

function ExperienceGrid() {
    return (
        <div style={experienceWrapperStyle}>
            {
                experiences.map((experience) => {
                    return (
                        <div style={experienceStyle}>
                            <AiOutlineCalendar size={"32px"} color={"white"} />
                            <div style={positionStyle}>{experience.position}</div>
                            <div style={companyStyle}>@ {experience.company}</div>
                            <div style={datesStyle}>{experience.dates}</div>
                            <div style={descriptionStyle}>{experience.description}</div>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default ExperienceGrid;
