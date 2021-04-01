import React,{Component} from 'react'
import classes from './App.module.css';
import Layout from './component/Layout/Layout'
import Parent from './component/Parent/Parent'

class App extends Component
{
  render()
  {
    return (
      <div className={classes.App}>
        <Layout/>
        <Parent/>        
      </div>
    );
  }
}

export default App;
