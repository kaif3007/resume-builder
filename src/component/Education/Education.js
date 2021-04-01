import React,{Component} from 'react'
import classes from './Education.module.css'

class Education extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            form:{
                id:'',
                college:'',
                degree:'',
                subject:'',
                from:'',
                to:'',
                current:false
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
                this.props.addEducation(this.state.form)
            } )

   }


   deleteItem=(id)=>{

        this.props.removeEducation(id)
   }

     render()
     {
        
        return (
        
            <div>
                <div className={classes.heading}>
                    <div className={classes.headingItems}>
                     Your Education Details  
                    </div>             
                </div>
                {
                    this.props.education.map((edu,idx)=>{

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

                    
                            <label className={classes.label}>College </label>
                            <input className={classes.input} name='college' disabled value={edu.college} type='text' placeholder='Your College'/>
                            
                        
                        <label className={classes.label}>Degree </label>
                        <input className={classes.input} name='degree' disabled value={edu.degree} type='text' placeholder='Degree'/>
                
                        <label className={classes.label}>Subject </label>
                        <input className={classes.input} name='subject' disabled value={edu.subject} type='email' placeholder='Your Subject'/>
                
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
                            {this.props.education.length+1}{'.'}
                        </div>
                        <div>

                        </div>
                    
                        <div>
                            <i class="fas fa-plus-circle fa-1x" onClick={()=>this.addItem()}></i>
                        </div>
                    </div>
  
                      <label className={classes.label}>College </label>
                      <input className={classes.input} name='college' value={this.state.form.college} type='text' placeholder='Your College' onChange={(e)=>this.onChange(e.target.value,'college')}/>
              
                      <label className={classes.label}>Degree </label>
                      <input className={classes.input} name='degree' value={this.state.form.degree} type='text' placeholder='Degree' onChange={(e)=>this.onChange(e.target.value,'degree')}/>
              
                      <label className={classes.label}>Subject </label>
                      <input className={classes.input} name='subject' value={this.state.form.subject} type='email' placeholder='Your Subject' onChange={(e)=>this.onChange(e.target.value,'subject')}/>
              
                      <div className={classes.three}>
                          <div>
                              <label className={classes.label}>From</label>
                              <input className={classes.input} name='from' value={this.state.form.from} type='text' placeholder='From' onChange={(e)=>this.onChange(e.target.value,'from')}/>
                          </div>

                          <div className={classes.checkbox}>
                                  Current{'  '}
                                  <input type="checkbox" value={this.state.form.current} onChange={(e)=>this.onChange(e.target.checked,'current')}/>
                          </div>

                          { !this.state.form.current && <div>
                              <label className={classes.label}>To </label>
                              <input className={classes.input} name='to' value={this.state.form.to} type='text' placeholder='To' onChange={(e)=>this.onChange(e.target.value,'to')}/>
                          </div> }    
                      </div>
                      
                </form>    
            </div>
        
        )
     }
}

export default Education