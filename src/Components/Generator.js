import React, { Component} from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';

import atla from '../atla.png';

let bending = ['airbending', 'waterbending', 'firebending', 'earthbending', 'bloodbending']
let bended = ['airbended', 'waterbended', 'firebended', 'earthbended', 'bloodbended']
let item = ['poop', '']
let celebrity = ['']
let categories = ['fetchBirth', 'fetchLovers', 'fetchGeneral']
let messages = []
let sign = ['Sagittaruis', 'Pisces', 'Capricorn', 'Aquarius', 'Scorpio', 'Libra', 'Cancer', 'Aries', 'Virgo', 'Leo', 'Gemini', 'Taurus']
class Generator extends Component {
  constructor() {
    super()
    this.state = {
      generated: false,
      message: '',
      category: ''
    }
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    let rand = [Math.floor(Math.random() * 4)]
    if (rand == 0) {
      this.fetchBirth()
    } else if (rand == 1) {
      this.fetchLovers()
    } else {
      this.fetchGeneral()
    }
  }

  handleCategory(){
    this.setState({
      category: `${categories[Math.floor(Math.random() * 5)]}`
    })
  }

  fetchLovers = (ev) => {
    fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/random?count=2')
    .then(resp => resp.json())
    .then(char => {
      this.setState ({
        message: `${char[0].name} loved ${char[1].name} most ardently but unfortunately our series could not explore their backstory.`,
        generated: true
      })
    })
  }

  fetchBirth = (ev) => {
    fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/random')
    .then(resp => resp.json())
    .then(char => {
      this.setState ({
        message: `${char[0].name} was born in ${[Math.floor(Math.random() * 101)]} AG and is SUCH a ${sign[Math.floor(Math.random() * 13)]}.`,
        generated: true
      })
    })
  }

  fetchGeneral() {
    fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/random')
    .then(resp => resp.json())
    .then(char => {
      this.setState ({
        message: `${char[0].name} does not think cactus juice is remotely good.`,
        generated: true
      })
    })
  }

  render() {
    return (
      <main>
        { this.state.generated ? (
        <Card className="tweet">
          <CardContent className="heading">

          <Avatar className="avatar" src={atla}>
          </Avatar>
          <Typography className="name" style={{marginLeft: 3, fontSize: 16}}>
              Alternate ATLA
          </Typography>
          <Typography className="username" style={{marginLeft: 3, fontSize: 14}}>
              @JK_ATLA
          </Typography>
          </CardContent>

          <CardContent className="container">
            <Typography className="content">
              {this.state.message}
            </Typography>
          </CardContent>

      </Card> ) : (
          <Paper className="generator">
            <Typography>
              Want an alternate ATLA plot point?
            </Typography>
            <Button onClick={(ev) => this.handleSubmit(ev)}>
              Generate!
            </Button>
          </Paper>
        )
      }
      </main>
    )
  }
}

export default (Generator);
