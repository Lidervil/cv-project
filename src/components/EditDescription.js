import React, { Component } from 'react';

class EditDescription extends Component {
    /* constructor(props) {
        super(props);
    } */

    render() {
        return(
            <div className="Description">
                <p className='desc-title'>Profile</p>
                <textarea className='description' placeholder='Description about yourself and why should anyone hire you' rows='7' cols='50' maxLength='364'/>
            </div>
        )
    }
}

export default EditDescription;