import React,{Component,Fragment} from 'react'
import Button from '../Button/Button'
import BasicDetails from '../BasicDetails/BasicDetails'
import classes from './Parent.module.css'
import Education from '../Education/Education'
import Experience from '../Experience/Experience'
import Projects from '../Projects/Projects'
import AdditionalDetails from '../AdditionalDetails/AdditionalDetails'
import FinalReview from '../FinalReview/FinalReview'


class Parent extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            step:2,
            form:{
                
                name:'',
                email:'',
                phone:'',
                github:'',
                linkedIn:'',

                education:[],
                experience:[],
                projects:[],

                skills:'',
                achievements:''

            }
           
        }
    }

    inputChangeHandler=(val,key)=>{

    
          const updatedForm={
              ...this.state.form,
              [key]:val
          }

          this.setState({form:updatedForm})
    }

    before=()=>{
        this.setState(prevstate=>(
            {
                step:prevstate.step-1
            }
        ))
    }

    after=()=>{
        this.setState(prevstate=>(
            {
                step:prevstate.step+1
            }
        ))
    }

    removeEducation=(id)=>{

       
        let updEducation=this.state.form.education.filter(
             edu=>edu.id!==id
        )

        let updform={
            ...this.state.form,
            'education':updEducation
        }

        this.setState({form:updform})
   }

    addEducation=(edu)=>{

       
         let updform={
             ...this.state.form,
             'education':[...{...this.state.form}['education'],edu]
         }

         this.setState({form:updform})
    }

    removeProject=(id)=>{

       
        let updProjects=this.state.form.projects.filter(
             edu=>edu.id!==id
        )

        let updform={
            ...this.state.form,
            'projects':updProjects
        }

        this.setState({form:updform})
   }

    addProject=(edu)=>{

       
         let updform={
             ...this.state.form,
             'projects':[...{...this.state.form}['projects'],edu]
         }

         this.setState({form:updform})
    }

    removeExperience=(id)=>{

       
        let updExperience=this.state.form.experience.filter(
             edu=>edu.id!==id
        )

        let updform={
            ...this.state.form,
            'experience':updExperience
        }

        this.setState({form:updform})
   }

    addExperience=(edu)=>{

       
         let updform={
             ...this.state.form,
             'experience':[...{...this.state.form}['experience'],edu]
         }

         this.setState({form:updform})
    }

    render()
    {
        let render=null;
        

        switch(this.state.step)
        {
            case 1:
                render=<BasicDetails name={this.state.form.name} email={this.state.form.email} 
                         phone={this.state.form.phone} github={this.state.form.github} linkedIn={this.state.form.linkedIn}
                       onChange={(val,key)=>this.inputChangeHandler(val,key)}/>
                break

            case 2:
                render=<Education education={this.state.form.education} addEducation={this.addEducation} removeEducation={this.removeEducation}/>
                break

            case 3:
                render=<Experience experience={this.state.form.experience} addExperience={this.addExperience} removeExperience={this.removeExperience}/>
                break

            case 4:
                render=<Projects projects={this.state.form.projects} addProject={this.addProject} removeProject={this.removeProject}/>
                break

            case 5:
                render=<AdditionalDetails skills={this.state.form.skills} achievements={this.state.form.achievements} 
                         onChange={(val,key)=>this.inputChangeHandler(val,key)}/>
                break

            case 6:
                render=<FinalReview data={this.state.form} back={this.before}/>
                break        
            default:
                render=null
            
        }


         return (
             <Fragment>
                 <div className={classes.main}>
                 {render}
                { this.state.step===5 && <div>
                   <Button onClick={this.after}>Review Details</Button>
                 </div>}
                 {
                     this.state.step!==6 && (
                         <>
                        <Button type='prev' onClick={this.before} step={this.state.step}>Prev</Button>
                        <Button type='next' onClick={this.after} step={this.state.step}>Next</Button>
                        </>
                     )
                 }
                 
                
                 </div>

                   
             

                
             </Fragment>
           
         )
    }
}

export default Parent

