import React from 'react'
import { Container, Row, Col } from 'reactstrap';


export default class Aboutme extends React.Component {
  render() {
    return (
      <div style={{backgroundColor:'rgba(0,0,0,.5)'}}>
        <Container style={{backgroundColor:'rgba(255,255,255,.9)'}}>
        <Row>
        <Col xs="5"><img src={require("../img/img.jpg")} alt="" style={{borderRadius: '100%',     width:'250px',height:"250px",marginTop:"50%"}}/></Col>
            <Col xs="6">
          <h2 style={{ textAlign: "center",marginTop:'20px' }}>About Me</h2><br/><br/>
          <h3 style={{textAlign: "center"}}>My name is Eric</h3><br/>
              <h4 style={{ textAlign: "center" }}>and I’m a Full-stack Web Developer</h4>
          <p style={{lineHeight:'3em',fontSize: "20px", padding: '10px'}}>I was born in Austin, Texas. I was in the United States Army for 7 years. After serving my country I decide that I would go back to school and earn my degree. I graduated from South University with a bachelor’s in information technology. I also attend Austin Coding Academy where I learned to developer full stack applications. I currently work at the IRS as a Information Technology Specialist and at Austin Coding Academy as a tutor. I have currently help over 50 students succeed in passing with curriculum.<br />My Passion: is to become a great Developer, I enjoy learning new technologies.<br />My hobbies: are playing basketball, gaming, weight-lifting, watch movies and studying.</p></Col>
        </Row>
        </Container>
      </div>
    )
  }
}