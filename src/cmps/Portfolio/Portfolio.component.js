import React, { Component } from 'react';
import './Portfolio.component.scss';

export default props => {
    return (
        <section className="portfolio" id="portfolio">
            <h2>{props.portfolioData.header}</h2>
            <div className="project-wrapper">
                {props.portfolioData.projects.map(project => {
                    return (
                        <div className="project">
                            <img src={project.imgURL} />
                            <div className="project-info">
                                <div>
                                    <h4>{project.name}</h4>
                                    <h5>{project.lngs.map(lng => {
                                        return <span>{lng}, </span>
                                    })}</h5>
                                </div>
                                <a href={project.url} target="_blank">
                                    <span>See more</span>
                                </a>
                            </div>
                        </div>

                    )
                })}
            </div>
        </section>
    )
}
