import React, { Component } from 'react';

class Skills extends Component {
  /* constructor(props) {
    super(props);

    
  } */

  render() {

    const { skills } = this.props;

    return (
      <div className="Skills">
        <p className='skilltitle'>Skills</p>

        {skills.map((skill, index) => (
          <div key={index}>
            <p>{skill.name}</p>
            <p>{skill.points}</p>
          </div>
        ))}

        {/* <p>HTML</p>
        <p>■■■■■</p>
        <p>CSS</p>
        <p>■■■</p>
        <p>JavaScript</p>
        <p>■■■■</p>
        <p>Webpack</p>
        <p>■■■■■</p>
        <p>Jest</p>
        <p>■■■</p>
        <p>Git</p>
        <p>■■■■</p>
        <p>React</p>
        <p>■</p> */}
      </div>
    );
  }
}

export default Skills;