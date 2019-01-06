import React, { Component } from 'react';
import './UpperFold.component.scss'

class UpperFold extends Component {

    createCircles() {
        const circleCount = 200;
        var circleList = [];
        for (var i = 0; i < circleCount; i++) {
            circleList.push(<div className="circle"></div>)
        }
        return circleList
    }
    render() {
        const { props } = this;
        return (

            <section className="upper-fold" >
                <div className="upper-fold-background">
                    {
                        this.createCircles()
                    }
                    <div className="circle"></div>

                </div>
                <div className="upper-fold-content">
                    <h1>
                        {props.content1}&nbsp;
                    <span>{props.name}.</span>
                    </h1>
                    <h1>{props.content2}</h1>
                    <a href="">
                    {props.btnContent}&nbsp;
                    <span> &nbsp;⇨</span>
                    </a>
                </div>
            </section>
        )
    }
}

export default UpperFold;