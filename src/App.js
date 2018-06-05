import React, { Component } from 'react';
import { Card, Icon, Image, Grid, Header} from 'semantic-ui-react'
import Particles from 'react-particles-js'
import { Link } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='login-form' >
      <Particles
        params={{
      		particles : {
            number : {
              value:80,
            },
            color:{
              value:["#E86363","#556b2f","#7C5852"]
            },
            size: {
              value:4
            },
      			line_linked: {
    				  speed:6,
              value:100,
    					enable: true,
    					color: "#A9A9A9",
              width:1,
    					blur: 5
      			}
      		}
      	}}
        style={{width: '100%', height: '100%',position:'absolute'}}
      />
      <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 550, opacity:0.88}}>
      <Card className='userCard' centered >
        <Card.Content>
        <br/>
        <Image src='Israel.jpg' size='small' circular />
          <Header as='h1'>David Zubal</Header>
          <Card.Meta>
            <span className='date'>
            Developer • Designer • Learner
            </span>
          </Card.Meta>
          <br/>
          <Card.Description>Hi! I am a React developer who enjoys original ideas and supurb design.</Card.Description>
        </Card.Content>
        <Card.Content>
          <Card.Meta>
            <a href="https://github.com/zubaldavid/">
              <Icon name='github' size='big' color="black" link/>
            </a>
            <a href="https://www.linkedin.com/in/zubaldavid/">
              <Icon name='linkedin square' size='big' color="blue" link/>
            </a>
            <a href="mailto:zubaldavid@gmail.com">
              <Icon name='mail' size='big' color="gray" link/>
            </a>
            <a href="https://s3.amazonaws.com/port-folio/resume.pdf">
              <Icon name='file text' size='big' link/>
            </a>
          </Card.Meta>
        </Card.Content>
      </Card>
      </Grid.Column>
      </Grid>
      </div>
    );
  }
}

export default App;
