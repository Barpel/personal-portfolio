import React, { Component } from 'react';
import './App.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faCss3Alt, faHtml5, faNode, faAngular, faReact, faVuejs, faJs } from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt, faEdit, faSitemap, faLaptop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import UpperFold from './cmps/UpperFold/UpperFold.component';
import NavBar from './cmps/NavBar/NavBar.component';
import AboutPage from './cmps/AboutPage/AboutPage.component';
import Portfolio from './cmps/Portfolio/Portfolio.component';

library.add(fab, faMobileAlt, faEdit, faSitemap, faLaptop);


class App extends Component {
  upperFold = {
    content1: 'Hey! I\'m',
    content2: 'A Full-Stack web developer.',
    name: 'Bar Peled',
    btnContent: 'View my work'
  }

  about = {
    skills: [
      {
        key: 'Responsive',
        description: 'My work fits to any device.',
        icon: <FontAwesomeIcon icon={faMobileAlt} />
      },
      {
        key: 'Layouts',
        description: 'Layout structuring from scratch - based on intuitive UI/UX.',
        icon: <FontAwesomeIcon icon={faEdit} />
      },
      {
        key: 'SPA',
        description: 'No more long loading times and redirecting - Single Page Applications.',
        icon: <FontAwesomeIcon icon={faSitemap} />
      },
      {
        key: 'PWA',
        description: 'Progressive Web Applications make the user feel comfortable on any mobile device',
        icon: <FontAwesomeIcon icon={faLaptop} />
      }
    ],
    me: {
      imgURL: 'https://res.cloudinary.com/barpel/image/upload/v1544090021/GigIt/bar.jpg',
      title: 'Bar Peled',
      description1: 'I\'m a junior Full Stack Web Developer from Tel Aviv, Israel.',
      description2: 'I love Front-End, handling UI/UX, planning and coding and I\'m passionate about development.',
      description3: 'I always like finding ways to learn more and challenge myself.',
    },
    programingLngs: [
      {
        name: 'HTML',
        icon: < FontAwesomeIcon icon={faHtml5} />
      },
      {
        name: 'CSS',
        icon: < FontAwesomeIcon icon={faCss3Alt} />
      },
      {
        name: 'JavaScript',
        icon: < FontAwesomeIcon icon={faJs} />
      },
      {
        name: 'nodeJS',
        icon: < FontAwesomeIcon icon={faNode} />
      },
      {
        name: 'angular',
        icon: < FontAwesomeIcon icon={faAngular} />
      },
      {
        name: 'react',
        icon: < FontAwesomeIcon icon={faReact} />
      },
      {
        name: 'vue',
        icon: < FontAwesomeIcon icon={faVuejs} />
      },
    ],
    bonus: 'Also: MongoDB, express, MySQL and jQuery'
  }
  portfolio = {
    header: 'Portfolio - My Work',
    projects: [
      {
        name: 'Appsus',
        url: 'https://barpel.github.io/Appsus/#/',
        imgURL: 'https://res.cloudinary.com/barpel/image/upload/v1546877419/appsus.jpg',
        lngs: ['Vue', 'CSS']
      },
      {
        name: 'Gig It',
        url: 'https://gigit-app.herokuapp.com/',
        imgURL: 'https://res.cloudinary.com/barpel/image/upload/v1546900354/gigitUploads/gigit.jpg',
        lngs: ['Vue', 'Sass', 'Express', 'MongoDB']
      },
    ]
  }

  render() {
    return (
      <div className="App">
        {
          <UpperFold
            content1={this.upperFold.content1}
            content2={this.upperFold.content2}
            name={this.upperFold.name}
            btnContent={this.upperFold.btnContent}
          ></UpperFold>
        }
        {
          <NavBar></NavBar>
        }
        {
          <AboutPage
            skills={this.about.skills}
            userInfo={this.about.me}
            programingLngs={this.about.programingLngs}
            moreLngs={this.about.bonus}
          ></AboutPage>
        }
        {
          <Portfolio portfolioData={this.portfolio}></Portfolio>
        }
      </div>
    );
  }
}

export default App;
