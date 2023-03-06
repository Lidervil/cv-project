import React, { Component } from 'react';

class EditGeneralInformation extends Component {
    /* constructor(props) {
        super(props);
    } */

    render() {

        const { fullName, title, ubication, contactEmail, contactNumber, linkedin, src, handleChangePFP } = this.props;

        return(
            <div className="GeneralInformation">
                <div>
                    <img src={src} alt="pfp" className='pfp'/>
                    <input type="text" value={src} className='pfp-url' onChange={handleChangePFP}/>
                    <input className='fullName bold' placeholder={fullName} />
                    <input className='title' placeholder={title} />
                    <p className='bold'>Location</p>
                    <input className='ubication' placeholder={ubication}/>
                    <p className='bold'>Email</p>
                    <input className='contactEmail' placeholder={contactEmail}/>
                    <p className='bold'>Number</p>
                    <input className='contactNumber' placeholder={contactNumber}/>
                    <p className='bold'>LinkedIn</p>
                    <input className='linkedin' placeholder={linkedin}/>
                </div>
            </div>
        )
    }
}

export default EditGeneralInformation;