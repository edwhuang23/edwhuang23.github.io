'use strict';

const createElement = React.createElement;

class ExperienceBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="row item">
        <div class="twelve columns">
          <h3>props.position_name, <a href={props.company_website_link} target="_blank">props.company_name</a></h3>
          <p class="info"><em class="date">props.time_period</em></p>
          <p>
            props.description
          </p>

        </div>
      </div>
    );
  }
}