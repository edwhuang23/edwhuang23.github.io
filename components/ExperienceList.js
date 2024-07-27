'use strict';

import React, { Component } from 'react'
// import ExperienceBlock from './ExperienceBlock.js';
// import experiences from '../config/experiences.json';

class ExperienceList extends Component {
  render() {
    console.log("hello");
    return (
      <div class="nine columns main-col">
        Hello
        {/* {
        experiences.map(experience => {
          <ExperienceBlock
            position_name={experience.position_name}
            company_name={experience.company_name}
            company_website_link={experience.company_website_link}
            time_period={experience.time_period}
            description={experience.description}
           />
        })
        } */}
      </div>
    );
  }
}

// Render your React component
const root = ReactDOM.createRoot(document.getElementById('experience_list'));
root.render(createElement(ExperienceList));