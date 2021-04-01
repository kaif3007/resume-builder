import React from 'react'
import classes from './FinalReview.module.css'
import Button  from '../Button/Button'


const trim=(data,key)=>{
     const array=data[key].split(',');
     return array.map(arr=>arr.trim())
}


const FinalReview=props=>{

    return (
          <>
          <div className={classes.topButton}>
              <Button type='prev' onClick={props.back}>Back</Button>
          </div>
          
          <div className={classes.body}>
              <div className={classes.header}>
                  Please Verify Final details before submitting
              </div>
              <div className={classes.section}>
                  <div className={classes.pair}>
                      <div className={classes.key}>
                          Name
                      </div>
                      <div className={classes.value}>
                          {props.data.name}
                      </div>
                    </div>
                   
                    <div className={classes.pair}>
                      <div className={classes.key}>
                          Email
                      </div>
                      <div className={classes.value}>
                          {props.data.email}
                      </div>
                    </div>
                    <div className={classes.pair}>
                      <div className={classes.key}>
                          Phone
                      </div>
                      <div className={classes.value}>
                          {props.data.phone}
                      </div>
                    </div>
                    <div className={classes.pair}>
                      <div className={classes.key}>
                          Github
                      </div>
                      <div className={classes.value}>
                          {props.data.github}
                      </div>
                    </div>
                    <div className={classes.pair}>
                      <div className={classes.key}>
                          LinkedIn
                      </div>
                      <div className={classes.value}>
                          {props.data.linkedIn}
                      </div>
                    </div>
              </div>
              <div className={classes.section}>
{
                        props.data.education.map(edu=>{

                            return (
                                <div className={classes.card}>
                                {
                                    edu.college && <div className={classes.pair}>
                                    <div className={classes.key}>
                                        College
                                    </div>
                                    <div className={classes.value}>
                                        {edu.college}
                                    </div>
                                </div>
                                }
                                
                                {
                                    edu.degree && <div className={classes.pair}>
                                    <div className={classes.key}>
                                        Degree
                                    </div>
                                    <div className={classes.value}>
                                        {edu.degree}
                                    </div>
                                </div>
                                }
                                {
                                    edu.subject && <div className={classes.pair}>
                                    <div className={classes.key}>
                                        Subject
                                    </div>
                                    <div className={classes.value}>
                                        {edu.subject}
                                    </div>
                                </div>
                                }
                                {
                                    edu.from && <div className={classes.pair}>
                                    <div className={classes.key}>
                                        Duration
                                    </div>
                                    <div className={classes.value}>
                                        {edu.from} - {edu.current?'Now':edu.to}
                                    </div>
                                </div>
                                }
                                </div>
                                
                        
                            )

                        })
                    }
                 
                 </div>


             
              <div className={classes.section}>
                { props.data.experience.map(edu=>{

                        return (
                            <div className={classes.card}>
                            {
                                edu.company && <div className={classes.pair}>
                                <div className={classes.key}>
                                    Company
                                </div>
                                <div className={classes.value}>
                                    {edu.company}
                                </div>
                            </div>
                            }
                            
                            {
                                edu.role && <div className={classes.pair}>
                                <div className={classes.key}>
                                    Role
                                </div>
                                <div className={classes.value}>
                                    {edu.role}
                                </div>
                            </div>
                            }
                            {
                                edu.location && <div className={classes.pair}>
                                <div className={classes.key}>
                                    Location
                                </div>
                                <div className={classes.value}>
                                    {edu.location}
                                </div>
                            </div>
                            }
                            {
                                edu.from && <div className={classes.pair}>
                                <div className={classes.key}>
                                    Duration
                                </div>
                                <div className={classes.value}>
                                    {edu.from} - {edu.current?'Now':edu.to}
                                </div>
                            </div>
                            }
                             {
                                edu.description && <div className={classes.pair}>
                                <div className={classes.key}>
                                    Description
                                </div>
                                <div className={classes.value}>
                                    {edu.description}
                                </div>
                            </div>
                            }
                            </div>
                            

                        )

                         })
                       }
              </div>

              <div className={classes.section}>
                { props.data.projects.map(edu=>{

                        return (
                            <div className={classes.card}>
                            {
                                edu.name && <div className={classes.pair}>
                                <div className={classes.key}>
                                    Project Name
                                </div>
                                <div className={classes.value}>
                                    {edu.name}
                                </div>
                            </div>
                            }
                            
                            {
                                edu.link && <div className={classes.pair}>
                                <div className={classes.key}>
                                    Link
                                </div>
                                <div className={classes.value}>
                                    {edu.link}
                                </div>
                            </div>
                            }
                            {
                                edu.description && <div className={classes.pair}>
                                <div className={classes.key}>
                                    Description
                                </div>
                                <div className={classes.value}>
                                    {edu.description}
                                </div>
                            </div>
                            }
                            </div>
                            

                        )

                         })
                       }
              </div>

            
              <div className={classes.section}>
                  <div className={classes.pair}>
                      <div className={classes.key}>
                          Skills
                      </div>
                      <div className={classes.value}>
                        {
                            trim(props.data,'skills').map(skill=>'  '+skill)
                        }
                        </div>
                    </div>
                    
                    {props.data.achievements && <div className={classes.pair}>
                      <div className={classes.key}>
                          Achievements
                      </div>
                      <div className={classes.value}>
                        {
                            trim(props.data,'achievements').map(skill=>'  '+skill)
                        }
                      </div>
                    </div>
                     }

              </div>



          </div>
          <div>
              <Button type='submit' onClick={props.back}>Submit</Button>
          </div>
          
          </>
    )
}

export default FinalReview