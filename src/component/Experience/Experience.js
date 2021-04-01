import React,{Component} from 'react'
import classes from './Experience.module.css'

class Experience extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            form:{
                id:'',
                company:'',
                location:'',
                role:'',
                from:'',
                to:'',
                current:false,
                description:'',
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


   deleteItem=(id)=>{

        this.props.removeExperience(id)
   }



   addItem=()=>{
    var val = Math.floor(1000 + Math.random() * 9000)

    const updatedForm={
        ...this.state.form,
        id:val
    }

        this.setState({form:updatedForm},()=>{
            this.props.addExperience(this.state.form)
        } )

}

     render()
     {
        
        return (
        
            <div>
                <div className={classes.heading}>
                    <div className={classes.headingItems}>
                     Your Experience 
                    </div>             
                </div>
                {
                    this.props.experience.map((edu,idx)=>{

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

                    
                            <label className={classes.label}>Company </label>
                            <input className={classes.input} name='company' disabled value={edu.company} type='text' placeholder='Company'/>
                            
                        
                        <label className={classes.label}>Role </label>
                        <input className={classes.input} name='role' disabled value={edu.role} type='text' placeholder='Role'/>
                
                        <label className={classes.label}>Location </label>
                        <input className={classes.input} name='location' disabled value={edu.location} type='text' placeholder='Location'/>

                        <label className={classes.label}>Description </label>
                        <input className={classes.input} name='description' disabled value={edu.description} type='textarea' placeholder='Description'/>
                
                        <div className={classes.three}>
                            <div>
                                <label className={classes.label}>From</label>
                                <input className={classes.input} name='from' disabled value={edu.from} type='text' placeholder='From'/>
                            </div>
  
                            <div className={classes.checkbox}>
                                    Current{'  '}
                                    <input type="checkbox" disabled value={edu.current} />
                            </div>
  
                            { !this.state.form.current && <div>
                                <label className={classes.label}>To </label>
                                <input className={classes.input} disabled name='to' value={edu.to} type='text' placeholder='To'/>
                            </div> }    
                        </div>
                        
                  </form>    )

                    })
                }

                        <form class={classes.form}> 

                        <div className={classes.numbering}>
                            <div>
                                {this.props.experience.length+1}{'.'}
                            </div>
                            <div>

                            </div>

                            <div>
                            <i class="fas fa-plus-circle fa-1x" onClick={()=>this.addItem()}></i>
                            </div>
                        </div>


                            <label className={classes.label}>Company </label>
                            <input className={classes.input} name='company' value={this.state.form.company} type='text' placeholder='Company' onChange={(e)=>this.onChange(e.target.value,'company')}/>
                            

                        <label className={classes.label}>Role </label>
                        <input className={classes.input} name='role' value={this.state.form.role} type='text' placeholder='Role' onChange={(e)=>this.onChange(e.target.value,'role')}/>

                        <label className={classes.label}>Location </label>
                        <input className={classes.input} name='location' value={this.state.form.location} type='text' placeholder='Location' onChange={(e)=>this.onChange(e.target.value,'location')}/>

                        <label className={classes.label}>Description </label>
                        <input className={classes.input} name='description' value={this.state.form.description} type='textarea' placeholder='Description' onChange={(e)=>this.onChange(e.target.value,'description')}/>

                        <div className={classes.three}>
                            <div>
                                <label className={classes.label}>From</label>
                                <input className={classes.input} name='from' value={this.state.form.from} type='text' placeholder='From' onChange={(e)=>this.onChange(e.target.value,'from')}/>
                            </div>

                            <div className={classes.checkbox}>
                                    Current{'  '}
                                    <input type="checkbox" value={this.state.form.current} onChange={(e)=>this.onChange(e.target.checked,'current')} />
                            </div>

                            { !this.state.form.current && <div>
                                <label className={classes.label}>To </label>
                                <input className={classes.input}  name='to' value={this.state.form.to} type='text' placeholder='To' onChange={(e)=>this.onChange(e.target.value,'to')}/>
                            </div> }    
                        </div>

                        </form>    
            </div>
        
        )
     }
}

export default Experience