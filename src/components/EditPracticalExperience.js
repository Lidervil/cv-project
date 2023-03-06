import React, { Component } from 'react';

class EditPracticalExperience extends Component {
    /* constructor(props) {
        super(props);
    } */

    render() {

        const { pract } = this.props;

        return(
            <div className='practical-experience'>

                <div className='pract-title'>Practical experience</div>

                <button className="addPract button-30" onClick={this.props.addPract} >☑</button>
                <button className="deletePract button-30" onClick={this.props.deletePract} >☒</button>

                {pract.map((job, index) => (
                <div key={index}>
                    <div className='name-and-year'>
                        <input className='bold pract-name' placeholder={job.name} maxLength='10' />
                        <input type='number' className='pract-year-start' placeholder={job.startYear} min='1969' max='2023' />
                        <input type='number' className='pract-year-end' placeholder={job.endYear} min='1969' max='2023' />
                    </div>
                    <input className='job-mod' placeholder={job.description} maxLength='150' />
                </div>
                ))}

            </div>
        )
    }
}

export default EditPracticalExperience;