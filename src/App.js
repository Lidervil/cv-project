import React, { Component } from 'react';
import './App.css';
import GeneralInformation from './components/GeneralInformation';
import EditGeneralInformation from './components/EditGeneralInformation';
import Skills from './components/Skills';
import EditSkills from './components/EditSkills';
import Description from './components/Description';
import EditDescription from './components/EditDescription';
import PracticalExperience from './components/PracticalExperience';
import EditPracticalExperience from './components/EditPracticalExperience';
import EducationalExperience from './components/EducationalExperience';
import EditEducationalExperience from './components/EditEducationalExperience';
import logo from './components/pfp.svg.png';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      infoSection: true,
      skillSection: true,
      descSection: true, 
      educSection: true,
      practSection: true,

      fullName: 'Your name',
      title: 'Your title',
      ubication: 'Location',
      contactEmail: 'Your Contact Email',
      contactNumber: 'Your contact Number',
      linkedin: 'Your LinkedIn',
      src: logo,

      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

      skills:[{name:'HTML', points:'■■■■■'}, {name:'CSS', points:'■■■■■'}, {name:'JavaScript', points:'■■■■■'}, {name:'Webpack', points:'■■■■■'}, {name:'Jest', points:'■■■■■'}, {name:'Git', points:'■■■■■'}, {name:'React', points:'■■■■■'}] ,

      education: [{name:'Hardvard', startYear:'2020', endYear:'2023', description:'Computer Science'}, {name:'Hardvard', startYear:'2020', endYear:'2023', description:'Computer Science'},{name:'Hardvard', startYear:'2020', endYear:'2023', description:'Computer Science'}],

      practical: [{name:'Meta', startYear:'2020', endYear:'2023', description:'Designing the new facebook and introducing the metaverse for everyone to see'}, {name:'Meta', startYear:'2020', endYear:'2023', description:'Designing the new facebook and introducing the metaverse for everyone to see'}, {name:'Meta', startYear:'2020', endYear:'2023', description:'Designing the new facebook and introducing the metaverse for everyone to see'}],

    }

    this.buttonHandlerInfo = this.buttonHandlerInfo.bind(this);
    this.buttonHandlerSkill = this.buttonHandlerSkill.bind(this);
    this.buttonHandlerDesc = this.buttonHandlerDesc.bind(this);
    this.buttonHandlerEduc = this.buttonHandlerEduc.bind(this);
    this.buttonHandlerPract = this.buttonHandlerPract.bind(this);
    this.handleChangePFP = this.handleChangePFP.bind(this);
    this.addSkill = this.addSkill.bind(this);
    this.deleteSkill = this.deleteSkill.bind(this);
    this.addSchool = this.addSchool.bind(this);
    this.deleteSchool = this.deleteSchool.bind(this);
    this.addPract = this.addPract.bind(this);
    this.deletePract = this.deletePract.bind(this);
    
  }

  buttonHandlerInfo() {
    this.setState(state => ({
      infoSection: !state.infoSection
    }))

    if (this.state.infoSection === false) {
      
      let fName = document.getElementsByClassName('fullName')[0].value;
      let fTitle = document.getElementsByClassName('title')[0].value;
      let fUbic = document.getElementsByClassName('ubication')[0].value;
      let cEmail = document.getElementsByClassName('contactEmail')[0].value;
      let cNum = document.getElementsByClassName('contactNumber')[0].value;
      let linIn = document.getElementsByClassName('linkedin')[0].value;
      let pfpURL = document.getElementsByClassName('pfp-url')[0].value;
      
      if ( fName === '') {
        fName = 'Your Name';
      }
      if ( fTitle === '') {
        fTitle = 'Your Title';
      }
      if ( fUbic === '') {
        fUbic = 'Location';
      }
      if ( cEmail === '') {
        cEmail = 'Your contact email';
      }
      if ( cNum === '') {
        cNum = 'Your contact Number';
      }
      if ( linIn === '') {
        linIn = 'Your LinkedIn Page';
      }
      if ( pfpURL === '') {
        pfpURL = logo;
      }
      
      this.setState({
        fullName: fName,
        title: fTitle,
        ubication: fUbic,
        contactEmail: cEmail,
        contactNumber: cNum,
        linkedin: linIn,
        src: pfpURL,
      })
    } 
  }
  buttonHandlerSkill() {
    this.setState(state => ({
      skillSection: !state.skillSection
    }))

    if (this.state.skillSection === false) {
      
      const skillName = document.getElementsByClassName('skillName');
      const skillPoints = document.getElementsByClassName('skillPoints');
      
      const nameArr = Array.from(skillName);
      const pointsArr = Array.from(skillPoints);
      
      let skillsArray = [];
      
      for ( let i = 0 ; i < nameArr.length; i++ ) {

        let temporalName = nameArr[i].value;
        if ( temporalName === '') {
          temporalName = nameArr[i].placeholder;
        }

        const temporalPoints = pointsArr[i].value;

        skillsArray.push({name: temporalName, points: temporalPoints});
      } 
      
      this.setState({
        skills: skillsArray,
      })
    } 
  }
  buttonHandlerDesc() {
    this.setState(state => ({
      descSection: !state.descSection
    }))

    if (this.state.descSection === false) {
      let descr = document.getElementsByClassName('description')[0].value;

      if ( descr === '') {
        descr = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
      }

      this.setState({
        description: descr,
      })

    }

  }
  buttonHandlerEduc() {
    this.setState(state => ({
      educSection: !state.educSection
    }))

    if (this.state.educSection === false) {
      
      const educName = document.getElementsByClassName('educ-name');
      const educYearStart = document.getElementsByClassName('educ-year-start');
      const educYearEnd = document.getElementsByClassName('educ-year-end');
      const educMod = document.getElementsByClassName('school-mod');
      
      const nameArr = Array.from(educName);
      const yearStartArr = Array.from(educYearStart);
      const yearEndArr = Array.from(educYearEnd);
      const modArr = Array.from(educMod);
      
      let educArray = [];
      
      for ( let i = 0 ; i < nameArr.length; i++ ) {

        let temporalName = nameArr[i].value;
        if ( temporalName === '') {
          temporalName = nameArr[i].placeholder;
        }

        let temporalYearStart = yearStartArr[i].value;
        if ( temporalYearStart === '') {
          temporalYearStart = yearStartArr[i].placeholder;
        }

        let temporalYearEnd = yearEndArr[i].value;
        if ( temporalYearEnd === '') {
          temporalYearEnd = yearEndArr[i].placeholder;
        }

        let temporalMod = modArr[i].value;
        if ( temporalMod === '') {
          temporalMod = modArr[i].placeholder;
        }

        educArray.push({name: temporalName, startYear: temporalYearStart, endYear: temporalYearEnd, description: temporalMod});
      }

      this.setState({
        education: educArray,
      })
    }  
  }
  buttonHandlerPract() {
    this.setState(state => ({
      practSection: !state.practSection
    }))

    if (this.state.practSection === false) {
      
      const practName = document.getElementsByClassName('pract-name');
      const practYearStart = document.getElementsByClassName('pract-year-start');
      const practYearEnd = document.getElementsByClassName('pract-year-end');
      const practMod = document.getElementsByClassName('job-mod');
      
      const nameArr = Array.from(practName);
      const yearStartArr = Array.from(practYearStart);
      const yearEndArr = Array.from(practYearEnd);
      const modArr = Array.from(practMod);
      
      let practArray = [];
      
      for ( let i = 0 ; i < nameArr.length; i++ ) {

        let temporalName = nameArr[i].value;
        if ( temporalName === '') {
          temporalName = nameArr[i].placeholder;
        }

        let temporalYearStart = yearStartArr[i].value;
        if ( temporalYearStart === '') {
          temporalYearStart = yearStartArr[i].placeholder;
        }

        let temporalYearEnd = yearEndArr[i].value;
        if ( temporalYearEnd === '') {
          temporalYearEnd = yearEndArr[i].placeholder;
        }

        let temporalMod = modArr[i].value;
        if ( temporalMod === '') {
          temporalMod = modArr[i].placeholder;
        }

        practArray.push({name: temporalName, startYear: temporalYearStart, endYear: temporalYearEnd, description: temporalMod});
      }

      this.setState({
        practical: practArray,
      })
    }  
  }

  handleChangePFP(e) {
    this.setState({
      src: e.target.value,
    })
  }

  addSkill() {
    const skillArr = this.state.skills;

    if (skillArr.length > 6) {
      return;
    }

    skillArr.splice( skillArr.length , 0 , {name:'Skill', points:'■'} )

    this.setState({
      skills: skillArr
    })
  }
  
  deleteSkill() {
    const skillArr = this.state.skills;
  
    if (skillArr.length < 2) {
      return;
    }
  
    skillArr.splice( skillArr.length -1, 1 )
  
    this.setState({
      skills: skillArr
    })
    
  }

  addSchool() {
    const SchoolArr = this.state.education;

    if (SchoolArr.length > 2) {
      return;
    }

    SchoolArr.splice( SchoolArr.length , 0 , {name:'School', startYear:'2023', endYear:'2023', description:'Computer Science'} )

    this.setState({
      education: SchoolArr,
    })
  }
  
  deleteSchool() {
    const SchoolArr = this.state.education;
  
    if (SchoolArr.length < 2) {
      return;
    }
  
    SchoolArr.splice( SchoolArr.length -1, 1 )
  
    this.setState({
      education: SchoolArr,
    })
    
  }

  addPract() {
    const practArr = this.state.practical;

    if (practArr.length > 2) {
      return;
    }

    practArr.splice( practArr.length , 0 , {name:'Job/Project', startYear:'2023', endYear:'2023', description:'Awesome Job or project related description!'} )

    this.setState({
      practical: practArr,
    })
  }
  
  deletePract() {
    const practArr = this.state.practical;
  
    if (practArr.length < 2) {
      return;
    }
  
    practArr.splice( practArr.length -1, 1 )
  
    this.setState({
      practical: practArr,
    })
    
  }

  render() {

    const { infoSection, skillSection, descSection, educSection, practSection, fullName, title, ubication, contactEmail, contactNumber, linkedin, src, description, skills, education, practical } = this.state

    return (
      <div className='flex-container'>
        <div className='left-section'>
          { (infoSection) ? <GeneralInformation fullName={fullName} title={title} ubication={ubication} contactEmail={contactEmail} contactNumber={contactNumber} linkedin={linkedin} src={src} /> : <EditGeneralInformation  fullName={fullName} title={title} ubication={ubication} contactEmail={contactEmail} contactNumber={contactNumber} linkedin={linkedin} src={src}  handleChangePFP={this.handleChangePFP} />}
          { (skillSection) ? <Skills skills={skills} /> : <EditSkills skills={skills} addSkill={this.addSkill} deleteSkill={this.deleteSkill} />}
          <button className="infoButton button-30" onClick={this.buttonHandlerInfo} >Edit</button>
          <button className="skillButton button-30" onClick={this.buttonHandlerSkill} >Edit</button>
        </div>
        <div className='right-section'>
          <div className='top-right-space'></div>
          <button className="descButton button-30" onClick={this.buttonHandlerDesc} >Edit</button>
          <button className="educButton button-30" onClick={this.buttonHandlerEduc} >Edit</button>
          <button className="practButton button-30" onClick={this.buttonHandlerPract} >Edit</button>
          { (descSection) ? <Description desc={description} /> : <EditDescription />}
          { (educSection) ? <EducationalExperience educ={education} /> : <EditEducationalExperience educ={education} addSchool={this.addSchool} deleteSchool={this.deleteSchool} />}
          { (practSection) ? <PracticalExperience pract={practical} /> : <EditPracticalExperience  pract={practical} addPract={this.addPract} deletePract={this.deletePract} />}
        </div>
      </div>
    );
  }
}

export default App;