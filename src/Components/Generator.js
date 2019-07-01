import React, { Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

let bending = ['airbending', 'waterbending', 'firebending', 'earthbending', 'bloodbending']
let bended = ['airbended', 'waterbended', 'firebended', 'earthbended', 'bloodbended']
let woke = ['WOC', 'POC', 'gay', 'queer']
let general = [`My family comprises of 2 $[bending[Math.rand(0...5)]`]
let categories = ['birth', 'love', 'woke', 'general']
class Generator extends Component {
  constructor() {
    super()
    this.state = {
      generated: false,
      message: ''
    }
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.setState({generated: true})
    this.fetchCharacter()
  }

  fetchCharacter = (ev) => {
    fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/random?count=2')
    .then(resp => resp.json())
    .then(char => {
      this.setState ({
        message: `${char[0].name} loved ${char[1].name}`
      })
    })
  }

  render() {
    return (
      <main>
        { this.state.generated ? (
        <Paper className="tweet">
          <Typography>
            {this.state.message}
          </Typography>
        </Paper> ) : (
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
