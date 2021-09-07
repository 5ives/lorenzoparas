import React from 'react';
import { AiOutlineCode } from "react-icons/ai";
import { FaGithub } from 'react-icons/fa';

const projects = [
    {
        name: 'recipeScraper',
        repoLink: 'https://github.com/lorenzoparas/recipeScraper',
        description: 'A web-scraper which converts online recipes from allrecipes.com into a simplified, cleaner format.',
        tech: 'Shell, Python (Flask), HTML/CSS'
    },
    {
        name: 'spotifyStats',
        repoLink: 'https://github.com/lorenzoparas/spotifyStats',
        description: 'A web-app which allows a user to preview their Spotify account statistics (e.g., top songs/artists listened to)',
        tech: 'Javascript (React), HTML/CSS'
    },
    {
        name: 'breakfromhome.com',
        repoLink: 'https://github.com/lorenzoparas/hackiethon2021',
        description: 'A web application which improves the health and productivity of WFH users with a pomodoro-reminder, account-based system.',
        tech: 'MongoDB, Express, React, Node.js'
    },
    {
        name: 'lorenzoparas (this website!)',
        repoLink: 'https://github.com/lorenzoparas/lorenzoparas',
        description: 'My portfolio site used to showcase my other development projects, and other stuff about me.',
        tech: 'Javascript (React), HTML/CSS'
    },
]

const projectStyle = {
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

const projectWrapperStyle = {
    textAlign: 'center',
    display: 'flex',
    position: 'relative',
    flexWrap: 'wrap'
}

const nameStyle = {
    fontFamily: 'NTR, sans-serif',
    color: 'white',
    fontWeight: '700',
    marginTop: '12px'
}

const descriptionStyle = {
    lineHeight: 1.5,
    fontSize: '12px',
    fontFamily: 'NTR, sans-serif',
    marginTop: '12px',
    fontWeight: '800'
}

const repoStyle = {
    position: 'absolute',
    top: '2rem',
    right: '1.75rem'
}

const techStyle = {
    fontFamily: 'NTR, sans-serif',
    fontSize: '12px',
    marginTop: '12px'
}

function ProjectGrid() {
    return (
        <div style={projectWrapperStyle}>
            {
                projects.map((project) => {
                    return (
                        <div style={projectStyle}>
                            <AiOutlineCode size={"32px"} color={"white"}/>
                            <a rel="noreferrer" target="_blank" href={project.repoLink} style={repoStyle}>
                                <FaGithub size={"32px"} color={"white"}/>
                            </a>
                            <div style={nameStyle}>{project.name}</div>
                            <div style={descriptionStyle}>{project.description}</div>
                            <div style={techStyle}>{project.tech}</div>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default ProjectGrid;
    