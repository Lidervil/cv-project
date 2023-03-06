import React, { Component } from 'react';

class PracticalExperience extends Component {
  /* constructor(props) {
    super(props);

    
  } */

  render() {

    const { pract } = this.props;

    return (
      <div className='practical-experience'>
      
        <div className='pract-title'>Practical experience</div>

        {pract.map((job, index) => (
          <div key={index} >
            <div className='name-and-year'>
            <p className='bold'>{job.name}</p>
            <p>{job.startYear}-{job.endYear}</p>
            </div>
            <p className='job-mod'>{job.description}</p>
          </div>
        ))}

      </div>
    );
  }
}

export default PracticalExperience;