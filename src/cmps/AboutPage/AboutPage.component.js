import React from 'react';
import './AboutPage.component.scss';

export default props => {
    return (
        <section className="about" id="about">
            <div className="about-skills">
                {
                    props.skills.map(skill =>
                        <div className="skill">
                            <span>
                                {skill.icon}
                            </span>
                            <h2>
                                {skill.key}
                            </h2>
                            <h4>
                                {skill.description}
                            </h4>
                        </div>
                    )
                }
            </div>
            {
                <div className="about-info">
                    <div className="user-info">
                        <img src={props.userInfo.imgURL} />
                        <h2>{props.userInfo.title}</h2>
                        <h4>
                        {props.userInfo.description1}<br/>
                        {props.userInfo.description2}<br/>
                        {props.userInfo.description3}
                        </h4>
                    </div>
                    <div className="programing-lngs">
                        {
                            props.programingLngs.map(lng =>
                                <span className={lng.name}>
                                    {lng.icon}
                                    <span>{lng.name}</span>
                                </span>
                            )
                        }
                        {
                            <h2 className="more-lngs">
                                {props.moreLngs}
                            </h2>
                        }
                    </div>
                </div>
            }

        </section>
    )
}