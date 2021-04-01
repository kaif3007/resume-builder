import React from 'react'
import classes from './BasicDetails.module.css'

const BasicDetails=props=>
{
        return (
              <div>
                  <div className={classes.heading}>
                      Your Basic Details
                  </div>
                  <form class={classes.form}>
    
                        <label className={classes.label}>Name </label>
                        <input className={classes.input} name='name' value={props.name} type='text' placeholder='Your Full Name' onChange={(e)=>props.onChange(e.target.value,'name')}/>
                        
                        <label className={classes.label}>Phone No. </label>
                        <input className={classes.input} name='phone' value={props.phone} type='text' placeholder='Your Phone No.' onChange={(e)=>props.onChange(e.target.value,'phone')}/>
                        
                        <label className={classes.label}>Email </label>
                        <input className={classes.input} name='email' value={props.email} type='email' placeholder='Your Email' onChange={(e)=>props.onChange(e.target.value,'email')}/>
                        
                        <label className={classes.label}>Github Link </label>
                        <input className={classes.input} name='github' value={props.github} type='text' placeholder='Your Github Profile Link' onChange={(e)=>props.onChange(e.target.value,'github')}/>
                        
                        <label className={classes.label}>LinkedIn Link </label>
                        <input className={classes.input} name='linkedIn' value={props.linkedIn} type='text' placeholder='Your LinkedIn Profile Link' onChange={(e)=>props.onChange(e.target.value,'linkedIn')}/>
                    
                  </form>    
              </div>
          )
      
}

export default BasicDetails