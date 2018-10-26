import React from 'react'

export default class Main extends React.Component{
  render(){
    return (
      <div className="Main">
        <h1>Eric B</h1>
        <h2>I'm a Javascript Full-Stack Developer</h2>
        <p>Recent Graduate of Austin Coding Academy in Full Stack Javascript<br/>
            Currently a working at Austin Coding Academy as a Tutor</p>
            <h3 style={{paddingTop: '20px'}}>List of skills</h3>
            <div style={{display:'flex',justifyContent:'center'}}> 
            <ul >
            <li>Bootstrap</li>
            <li>Git</li>		
            <li>MongoDB</li>	
            <li>React.js</li>
            
            </ul>
            <ul>
            <li>Express.js</li>
            <li>HTML/CSS</li>
            <li>Mongoose</li>
            <li>React-Redux</li>
            </ul>
            <ul>
            <li>ES6-ES7</li>
            <li>Javascript</li>
            <li>Node.js</li>	
            <li>Restful API</li>
            </ul>
            </div>
        <h3>Things About Me</h3>
        <ul>
        <li>From: Austin, Tx</li>
        <li>College: South University</li>
        <li>Major: Information Technology</li>
        <li>Highschool: Reagan High</li>
        <li>Hobbies: Basketball, Coding</li>
        <li>Favorite Team: Golden State</li>
      </ul>
      </div>
    )
  }
}
