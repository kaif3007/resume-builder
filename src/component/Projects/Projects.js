import React,{Component} from 'react'
import classes from './Projects.module.css'

class Projects extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            form:{
                id:'',
                name:'',
                link:'',
                description:''
            }
        }
    }

    onChange=(val,key)=>{

        const updatedForm={
            ...this.state.form,
            [key]:val
        }


        this.setState({form:updatedForm})
  }

   addItem=()=>{

    var val = Math.floor(1000 + Math.random() * 9000)

    const updatedForm={
        ...this.state.form,
         id:val
    }

        this.setState({form:updatedForm},()=>{
            this.props.addProject(this.state.form)
         } )
   }


   deleteItem=(id)=>{
        this.props.removeProject(id)
   }

     render()
     {
        
        return (
        
            <div>
                <div className={classes.heading}>
                    <div className={classes.headingItems}>
                     Your Projects 
                    </div>             
                </div>
                {
                    this.props.projects.map((edu,idx)=>{

                        return (<form class={classes.form}> 

                        <div className={classes.numbering}>
                            <div>
                                {idx+1}{'.'}
                            </div>
                            <div>

                            </div>
                        
                            <div>
                                <i class="fas fa-trash-alt fa-1x" onClick={()=>this.deleteItem(edu.id)}></i>
                            </div>
                        </div>

                    
                        <label className={classes.label}>Name </label>
                        <input className={classes.input} name='name' disabled value={edu.name} type='text' placeholder='Name of your Project'/>
                        
                        
                        <label className={classes.label}>Link </label>
                        <input className={classes.input} name='link' disabled value={edu.link} type='text' placeholder='Link of your project'/>
                
                        <label className={classes.label}>Description </label>
                        <input className={classes.input} name='description' disabled value={edu.description} type='textarea' placeholder='Description'/>
                    
                  </form>    
                  ) })
                }

                            <form class={classes.form}> 

                            <div className={classes.numbering}>
                                <div>
                                    {this.props.projects.length+1}{'.'}
                                </div>
                                <div>

                                </div>

                                <div>
                                <i class="fas fa-plus-circle fa-1x" onClick={()=>this.addItem()}></i>
                                   
                                </div>
                            </div>


                            <label className={classes.label}>Name </label>
                            <input className={classes.input} name='name'  value={this.state.form.name} type='text' placeholder='Name of your Project' onChange={(e)=>this.onChange(e.target.value,'name')}/>
                                

                            <label className={classes.label}>Link </label>
                            <input className={classes.input} name='link'  value={this.state.form.link} type='text' placeholder='Link of your project' onChange={(e)=>this.onChange(e.target.value,'link')}/>

                            <label className={classes.label}>Description </label>
                            <input className={classes.input} name='description'  value={this.state.form.description} type='textarea' placeholder='Description' onChange={(e)=>this.onChange(e.target.value,'description')}/>

                            </form>    
            </div>
        
        )
     }
}

export default Projects