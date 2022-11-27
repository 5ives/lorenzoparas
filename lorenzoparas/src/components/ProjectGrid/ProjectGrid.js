import React from 'react';
import { AiOutlineCode } from "react-icons/ai";
import { FaGithub } from 'react-icons/fa';
import { ProjectGridHeader } from './ProjectGridStyles';

const liveProjects = [
    {
        name: 'Leetcode Picker',
        repoLink: 'https://github.com/lorenzoparas/leet-picker',
        liveLink: 'https://leetcode-picker.netlify.app/',
        description: 'Pick and solve a random Leetcode question from the famous Blind 75 list!',
        tech: 'TypeScript, JavaScript, HTML/CSS, Python'
    },
    {
        name: 'Wordle Clone',
        repoLink: 'https://github.com/lorenzoparas/wordle-tetris',
        liveLink: 'https://wordletetris.netlify.app/',
        description: 'An identical frontend web-app clone to the famous Wordle game application.',
        tech: 'React, TypeScript, HTML/CSS'
    },
    {
        name: 'lorenzoparas (this website!)',
        repoLink: 'https://github.com/lorenzoparas/lorenzoparas',
        liveLink: 'https://lorenzoparas.me',
        description: 'My portfolio site used to showcase my other development projects, and other stuff about me.',
        tech: 'Javascript (React), HTML/CSS'
    },
    {
        name: 'recipeScraper',
        repoLink: 'https://github.com/lorenzoparas/recipeScraper',
        description: 'A web-scraper which converts online recipes from allrecipes.com into a simplified, cleaner format.',
        tech: 'Shell, Python (Flask), HTML/CSS'
    }
];

const inProgressProjects = [
    {
        name: 'Gobble',
        repoLink: 'https://github.com/lorenzoparas/gobble',
        description: 'An app which provides eating options on a map with various filters and offers.',
        tech: 'TypeScript, Uber Eats API, Mapbox, HTML/CSS'
    },
    {
        name: 'Sydney Transport Parking',
        repoLink: 'https://github.com/lorenzoparas/sydney-transport-parking',
        description: 'An app which provides live info about Sydney\'s transport parking.',
        tech: 'TypeScript, JavaScript, HTML/CSS'
    },
    {
        name: 'Spotify Stats',
        repoLink: 'https://github.com/lorenzoparas/spotifyStats',
        description: 'A web-app which allows a user to preview their Spotify account statistics (e.g., top songs/artists listened to)',
        tech: 'Javascript (React), HTML/CSS'
    }
];

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
    position: 'relative'
}

const liveStyle = {
    marginRight: '8.5em'
}

const techStyle = {
    fontFamily: 'NTR, sans-serif',
    fontSize: '12px',
    marginTop: '12px'
}

const projectLinksStyle = {
    position: 'relative',
    height: 'auto'
}

function ProjectGrid () {
    return (
        <>
            <ProjectGridHeader>Live/Complete Projects</ProjectGridHeader>
            <div style={projectWrapperStyle}>
                {
                    liveProjects.map((project) => {
                        return (
                            <div style={projectStyle}>
                                <div style={projectLinksStyle}>
                                    { 
                                        project.liveLink && (
                                            <a
                                                rel="noreferrer"
                                                target="_blank"
                                                href={project.liveLink}
                                                style={liveStyle}
                                            >
                                                <AiOutlineCode size={"32px"} color={"white"}/>
                                            </a>
                                        )
                                    }
                                    <a rel="noreferrer" target="_blank" href={project.repoLink} style={repoStyle}>
                                        <FaGithub size={"32px"} color={"white"}/>
                                    </a>
                                </div>
                                <div style={nameStyle}>{project.name}</div>
                                <div style={descriptionStyle}>{project.description}</div>
                                <div style={techStyle}>{project.tech}</div>
                            </div>
                        );
                    })
                }
            </div>
            <ProjectGridHeader>Projects in Progress</ProjectGridHeader>
            <div style={projectWrapperStyle}>
                {
                    inProgressProjects.map((project) => {
                        return (
                            <div style={projectStyle}>
                                <div style={projectLinksStyle}>
                                    { 
                                        project.liveLink && (
                                            <a
                                                rel="noreferrer"
                                                target="_blank"
                                                href={project.liveLink}
                                                style={liveStyle}
                                            >
                                                <AiOutlineCode size={"32px"} color={"white"}/>
                                            </a>
                                        )
                                    }
                                    <a rel="noreferrer" target="_blank" href={project.repoLink} style={repoStyle}>
                                        <FaGithub size={"32px"} color={"white"}/>
                                    </a>
                                </div>
                                <div style={nameStyle}>{project.name}</div>
                                <div style={descriptionStyle}>{project.description}</div>
                                <div style={techStyle}>{project.tech}</div>
                            </div>
                        );
                    })
                }
            </div>
        </>
        
    )
}

export default ProjectGrid;
    