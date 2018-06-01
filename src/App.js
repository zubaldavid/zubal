import React, { Component } from 'react';
import { Card, Icon, Image, Grid} from 'semantic-ui-react'
import Particles from 'react-particles-js'
import { Link } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='login-form' >
      <Particles className='background'
              params={{
            		particles: {
                  number : {
                    value:100,
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#3CA9D1",
            					blur: 5
            				}
            			}
                 }
            		}
            	}}
              style={{width: '100%'}}

      />
      <Grid textAlign='center'
      style={{ height: '100%' }}
      verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450, maxHeight: 550 }}>
      <Card className='userCard' href='/'centered >
        <Image src='zubal.jpg' style={{size:200}}/>
        <Card.Content>
          <Card.Header>David Zubal</Card.Header>
          <Card.Meta>
            <span className='date'>
              Developer.Designer.Learner
            </span>
          </Card.Meta>
          <Card.Description>
            I am student of computer science.
          </Card.Description>
        </Card.Content>
        <Card.Content >
          <a>
            <Icon name='github'/>
              <a href='https://github.com/zubaldavid/' rel="noopener noreferrer">Github</a>
            <br/>
            <Icon name='linkedin square'/>
              <a href='https://www.linkedin.com/in/zubaldavid/' target="_blank">Linkedin</a>
            <br/>
            <Icon name='mail'/>zubaldavid@gmail.com
          </a>
        </Card.Content>
      </Card>
      </Grid.Column>
      </Grid>
      </div>
    );
  }
}

export default App;
