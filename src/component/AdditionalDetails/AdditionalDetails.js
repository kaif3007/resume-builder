import React from 'react'
import classes from './AdditionalDetails.module.css'

const AdditionalDetails=props=>
{
        return (
              <div>
                  <div className={classes.heading}>
                      Additional Details
                  </div>

                  <form class={classes.form}>
    
                    <label className={classes.label}>Skills </label>
                    <input className={classes.input} name='skills' value={props.skills} type='text' placeholder='Your Skills' onChange={(e)=>props.onChange(e.target.value,'skills')}/>
                    
                    <label className={classes.label}>Achievements </label>
                    <input className={classes.input} name='achievements' value={props.achievements} type='text' placeholder='Your Achievements' onChange={(e)=>props.onChange(e.target.value,'achievements')}/>
                   
                  </form>    
              </div>
          )
      
}

export default AdditionalDetails