import React, { Component } from 'react';

class EditSkills extends Component {
    /* constructor(props) {
        super(props);
    } */

    render() {

        const { skills } = this.props;

    return (
        <div className="Skills">
        
            <p className='skilltitle'>Skills</p>

            <button className="addSkill button-30" onClick={this.props.addSkill} >☑</button>
            <button className="deleteSkill button-30" onClick={this.props.deleteSkill} >☒</button>

            {skills.map((skill, index) => (
            <div key={index}>
                <input className='skillName' placeholder={skill.name} />
                <select className='skillPoints' >
                    <option value="■" selected={skill.points === '■'} >■</option>
                    <option value="■■" selected={skill.points === '■■'} >■■</option>
                    <option value="■■■" selected={skill.points === '■■■'} >■■■</option>
                    <option value="■■■■" selected={skill.points === '■■■■'} >■■■■</option>
                    <option value="■■■■■" selected={skill.points === '■■■■■'} >■■■■■</option>
                </select>
            </div>
            ))}

        </div>

        )
    }
}

export default EditSkills;