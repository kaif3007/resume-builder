import React from 'react'
import classes from './Button.module.css'

const Button=props=>{

    switch (props.type)
    {
        case 'prev':
            return  <button className={classes.button} disabled={props.step===1} onClick={props.onClick}><i class="fa fa-arrow-left fa-1x"></i> {' '+props.children}</button>
        case 'submit':
            return <button className={classes.button}>{props.children+' '}<i class="fa fa-paper-plane fa-1x"></i> </button>
        default:
            return <button className={classes.button} disabled={props.step===5} onClick={props.onClick}>{props.children+' '}<i class="fa fa-arrow-right fa-1x"></i></button>
    }

        
}

export default Button