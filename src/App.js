
import React, { Component }  from 'react';

import Spade from './images/Spade.png';
import Club from './images/Club.png';
import Heart from './images/Heart.png';
import Diamond from './images/Diamond.png';

import './App.css';

import { connect } from 'react-redux';

const CARDS_TO_DRAW = 5;

const createDeck = (deck = []) => {
  let suits = ['Club', 'Hearts', 'Spade', 'Diamonds'];
  let numbers = ['1', '2', '3', '4' , '5', '6', '7' , '8' , '9', 'J', 'Q', 'K', 'A'];

  for(let i = 0; i < suits.length; i++) {
    for(let j = 0; j < numbers.length; j++) {

      let card = {};
      card.suit = suits[i];
      card.number = numbers[j];
      deck.push(card);
    }
  }
  return deck;
}


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      deck: createDeck([]),
      drawnDeck: []
    }
  }
  
  drawCards = () => {
    const  { deck, drawnDeck } = this.state;
    let card;
    
    for(let i = 0; i < CARDS_TO_DRAW; i++) {
      if( deck.length > 0 ) {
        let randIndex = Math.floor( Math.random() * deck.length );
        card = deck.splice( randIndex, 1 )[0];
        drawnDeck.push(card);
      } else {
        alert('deck empty');
      }
    }
    this.setState({deck: deck, drawnDeck: drawnDeck  })
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.drawCards()}> Draw </button>
        <DrawnCards drawnDeck={this.state.drawnDeck}></DrawnCards>
      </div>
    );
  }
}

function DrawnCards ({ drawnDeck }) {
  return (
    <div>
      {
        drawnDeck.map(card => {          
            return (
              <div class="card-container">
                <div className="number">{card.number}</div>
                { card.suit === 'Club' && <img  class="card-img" src={Club} alt="Club"></img>}
                { card.suit === 'Hearts' && <img  class="card-img" src={Heart} alt="Heart"></img>}
                { card.suit === 'Spade' && <img  class="card-img" src={Spade} alt="Spade"></img>}
                { card.suit === 'Diamonds' && <img  class="card-img" src={Diamond} alt="Diamond"></img>}
                
              </div>
            );
        })
      }
    </div>
  )
}



export default connect()(App)
