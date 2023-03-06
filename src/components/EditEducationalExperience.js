import React, { Component } from 'react';

class EditEducationalExperience extends Component {
    /* constructor(props) {
        super(props);
    } */

    render() {
        const { educ } = this.props;

        return(
            <div className="EducationalExperience">

                <p className='educ-title'>Education</p>

                <button className="addSchool button-30" onClick={this.props.addSchool} >☑</button>
                <button className="deleteSchool button-30" onClick={this.props.deleteSchool} >☒</button>

                {educ.map((school, index) => (
                <div key={index}>
                    <div className='name-and-year'>
                        <input className='bold educ-name' placeholder={school.name} maxLength='10' />
                        <input type='number' className='educ-year-start' placeholder={school.startYear} min='1969' max='2023' />
                        <input type='number' className='educ-year-end' placeholder={school.endYear} min='1969' max='2023' />
                    </div>
                    <input className='school-mod' placeholder={school.description} maxLength='45' />
                </div>
                ))}

            </div>
        )
    }
}

export default EditEducationalExperience;