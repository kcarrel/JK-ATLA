import React, { Component} from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';

import atla from '../atla.png';

let celeb = ['Lizzo', 'Brittany Howard', 'Florence Welch', 'Bono', 'Elton John', 'Lady Gaga', 'Bon Iver', 'Lana Del Rey', 'Billie Eilish']
let villian = ['Fire Lord Ozai', 'Zaheer', 'Vaatu', 'Azula', 'Admiral Zhao', 'Amon', 'Kuvira', 'Combustion Man', 'Unalaq', 'Hama', 'Yakone']
let bending = ['airbending', 'waterbending', 'firebending', 'earthbending', 'bloodbending']
let bend = ['airbend', 'waterbend', 'firebend', 'earthbend', 'bloodbend', 'metalbend']
let item = ['poop', 'trash', 'waste', 'food scraps']
let categories = ['fetchBirth', 'fetchLovers', 'fetchGeneral', 'fetchLake']
let messages = ['']
let bender = ['airbender', 'waterbender', 'firebender', 'earthbender', 'bloodbender', 'metalbender']

let benders = ['airbenders', 'waterbenders', 'firebenders', 'earthbenders', 'bloodbenders', 'metalbenders']
let description = ['floaty', 'bubbly', 'firey', 'grounded', 'terrifying' , 'cool']
let animal = ['sky bisons', 'koi', 'dragons', 'badgermoles', 'scary lot' , 'steely bois']
let sign = ['Sagittaruis', 'Pisces', 'Capricorn', 'Aquarius', 'Scorpio', 'Libra', 'Cancer', 'Aries', 'Virgo', 'Leo', 'Gemini', 'Taurus']
class Generator extends Component {
  constructor() {
    super()
    this.state = {
      generated: false,
      message: '',
    }
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    let rand = [Math.floor(Math.random() * 13)]
    if (rand == 0) {
      this.fetchBirth()
    } else if (rand == 1) {
      this.fetchLovers()
    } else if (rand == 2) {
      this.fetchGeneral()
    } else if (rand == 3) {
      this.fetchVillian()
    } else if (rand == 4) {
      this.fetchRecess()
    } else if (rand == 5) {
      this.fetchSinger()
    } else if (rand == 6) {
      this.fetchAction()
    } else if (rand == 7) {
      this.fetchPride()
    } else if (rand == 8) {
      this.fetchFamily()
    } else if (rand == 9) {
      this.fetchBender()
    } else if (rand == 10) {
      this.fetchBoulder()
    } else if (rand == 11) {
      this.fetchMelon()
    } else {
      this.fetchLake()
    }
  }

  handleCategory(){
    this.setState({
      category: `${categories[Math.floor(Math.random() * 5)]}`
    })
  }

  postTweet() {
    fetch('https://alt-atla-be.herokuapp.com/tweet', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        message: this.state.message
      })
    })
    .then(resp => resp.json())
    .then(response => console.log(response))
  }

  fetchPride() {
    let rand = [Math.floor(Math.random() * 6)]
    this.setState ({
      message: `Happy pride day to all you ${benders[rand]}, you ${description[rand]} ${animal[rand]} you.`,
      generated: true
    }, () => {
      this.postTweet()
    })
  }

  fetchAction() {
    let rand = [Math.floor(Math.random() * 6)]
    let rands = [Math.floor(Math.random() * 2)]
    this.setState ({
        message: `In ${[Math.floor(Math.random() * 101)]} AG people would ${bend[rand]} ${item[rands]} away.`,
        generated: true
    }, () => {
      this.postTweet()
    })
  }
  fetchFamily() {
    fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/random?count=2')
    .then(resp => resp.json())
    .then(char => {
      this.setState ({
        message: `${char[0].name} is secretly part of ${char[1].name}'s family.`,
        generated: true
      }, () => {
        this.postTweet()
      })
    })
  }

  fetchLovers = (ev) => {
    fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/random?count=2')
    .then(resp => resp.json())
    .then(char => {
      this.setState ({
        message: `${char[0].name} loved ${char[1].name} most ardently but unfortunately our series could not explore their backstory further.`,
        generated: true
      }, () => {
        this.postTweet()
      })
    })
  }

  fetchBender() {
    let rand = [Math.floor(Math.random() * 6)]
    fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/random')
    .then(resp => resp.json())
    .then(char => {
      this.setState ({
        message: `${char[0].name} was secretly a ${bender[rand]}.`,
        generated: true
      }, () => {
        this.postTweet()
      })
    })
  }

  fetchRecess = (ev) => {
    let rand = [Math.floor(Math.random() * 6)]
    this.setState ({
        message: `Being unable to ${bend[rand]} is due to a recessive gene.`,
        generated: true
    }, () => {
      this.postTweet()
    })
  }

  fetchVillian = (ev) => {
    let rand = [Math.floor(Math.random() * 13)]
    this.setState ({
        message: `How horrible. ${villian[rand]} is nowhere near as bad as Trump.`,
        generated: true
    }, () => {
      this.postTweet()
    })
  }


  fetchBirth = (ev) => {
    fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/random')
    .then(resp => resp.json())
    .then(char => {
      this.setState ({
        message: `${char[0].name} was born in ${[Math.floor(Math.random() * 101)]} AG and is SUCH a ${sign[Math.floor(Math.random() * 12)]}.`,
        generated: true
      }, () => {
        this.postTweet()
      })
    })
  }

  fetchSinger = (ev) => {
    let rand = [Math.floor(Math.random() * 10)]
    fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/random')
    .then(resp => resp.json())
    .then(char => {
      this.setState ({
        message: `${char[0].name} has a lovely singing voice - sounds quite a bit like ${celeb[rand]}.`,
        generated: true
      }, () => {
        this.postTweet()
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
      }, () => {
        this.postTweet()
      })
    })
  }

  fetchBoulder() {
    fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/random')
    .then(resp => resp.json())
    .then(char => {
      this.setState ({
        message: `The Boulder would crumble against ${char[0].name} by a landslide.`,
        generated: true
      }, () => {
        this.postTweet()
      })
    })
  }

  fetchMelon() {
    fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/random')
    .then(resp => resp.json())
    .then(char => {
      this.setState ({
        message: `${char[0].name} is the real Melon Lord.`,
        generated: true
      }, () => {
        this.postTweet()
      })
    })
  }

  fetchLake() {
    fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/random')
    .then(resp => resp.json())
    .then(char => {
      this.setState ({
        message: `${char[0].name} is a happy resident of Ba Sing Se. Rumors about Lake Laogai is #FakeNews.`,
        generated: true
      }, () => {
        this.postTweet()
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
              @ALTALTA7
          </Typography>
          </CardContent>

          <CardContent className="container">
            <Typography className="content">
              {this.state.message}
            </Typography>
            <Button onClick={(ev) => this.handleSubmit(ev)}>
              Generate another!
            </Button>
            <Button target="_blank" href="https://twitter.com/ALTALTA7">
             See the tweets!
           </Button>
          </CardContent>

      </Card> ) : (
          <Paper className="generator">
            <Typography>
              Want an alternate ATLA plot point?
            </Typography>
            <Button onClick={(ev) => this.handleSubmit(ev)}>
              Generate one!
            </Button>
          </Paper>
        )
      }
      </main>
    )
  }
}

export default (Generator);
