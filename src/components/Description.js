import React, { Component } from 'react';

class Description extends Component {
  /* constructor(props) {
    super(props);

    
  } */

  render() {
    return (
      <div className="Description">
        <p className='desc-title'>Profile</p>
        <p className='description'>{this.props.desc}</p>
      </div>
    );
  }
}

export default Description;