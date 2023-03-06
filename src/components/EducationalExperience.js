import React, { Component } from 'react';

class EducationalExperience extends Component {
  /* constructor(props) {
    super(props);

    
  } */

  render() {
    const { educ } = this.props;

    return (
      <div className="EducationalExperience">

        <p className='educ-title'>Education</p>

        {educ.map((school, index) => (
          <div key={index}>
            <div className='name-and-year'>
              <p className='bold'>{school.name}</p>
              <p>{school.startYear}-{school.endYear}</p>
            </div>
            <p className='school-mod'>{school.description}</p>
          </div>
        ))}

      </div>
    );
  }
}

export default EducationalExperience;