import React, { Component } from 'react';
import { Card, Icon, Image, Grid} from 'semantic-ui-react'
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
              value:["#E86363","#556b2f", "#7C5852"]
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
      <Grid textAlign='center'
      style={{ height: '100%' }}
      verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 550, maxHeight: 550, opacity:0.88,shadow:10}}>
      <Card className='userCard' href='/' centered >
        <Image src='zubal.jpg'  style={{height:'375px'}} />
        <Card.Content>
          <Card.Header>David Zubal</Card.Header>
          <Card.Meta>
            <span className='date'>
              Developer.Designer.Learner
            </span>
          </Card.Meta>
        </Card.Content>
        <Card.Content style={{float:'left',color: 'black'}}>
          <Card.Meta>
            <Icon name='github' style={{color:'gray'}}/>
              <a href='https://github.com/zubaldavid/' >Github  </a>
            <Icon name='linkedin square' style={{color:'gray'}}/>
              <a href='https://www.linkedin.com/in/zubaldavid/' >Linkedin</a>
            <br/>
            <Icon name='mail' style={{color:'gray'}}/>
              <a href='mailto:zubaldavid@gmail.com'>zubaldavid@gmail.com</a>
          <br/>
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
