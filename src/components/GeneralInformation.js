import React, { Component } from 'react';

class GeneralInformation extends Component {
  /* constructor(props) {
    super(props);

    
  } */

  render() {

    const { fullName, title, ubication, contactEmail, contactNumber, linkedin, src } = this.props;

    return (
      <div className="GeneralInformation">
        <div>
          <img src={src} alt="pfp" className='pfp'/>

          <p className='fullName bold'>{fullName}</p>
          <p className='title'>{title}</p>

          <p className='bold'>Location</p>

          <p className='ubication'>{ubication} </p>

          <p className='bold'>Email</p>

          <p className='contactEmail'>{contactEmail} </p>

          <p className='bold'>Number</p>

          <p className='contactNumber'>{contactNumber} </p>

          <p className='bold'>LinkedIn</p>

          <p className='linkedin'>{linkedin}</p>
        </div>
      </div>
    );
  }
}

export default GeneralInformation;