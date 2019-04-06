import React, { Component } from 'react';
import ActionCard from './Components/ActionCard';
import Footer from './Components/Footer';
import GameSelector from './Components/GameSelector';
import ComputerRandomizer from './Components/ComputerRandomizer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      computerSelection: null,
      playerSelection: null,
    }
    this.startGame = this.startGame.bind(this);
    this.setPlayerSelection = this.setPlayerSelection.bind(this);
    this.generateComputerSelection = this.generateComputerSelection.bind(this);
    this.submitPlayerSelection = this.submitPlayerSelection.bind(this);
  }

 generateComputerSelection() {
   let computerSelection = Math.floor(Math.random() *3);
   console.log(computerSelection)
   this.setState({ computerSelection })
   this.setState((state) => {
     return { computerSelection }
   })
 }

  startGame() {
    this.setState({step: 1})
  }

  setPlayerSelection(index) {
    if (this.state.computerSelection) {
      return;
    }
    this.setState((state) => {
      return { playerSelection: index }
    });
  }

  submitPlayerSelection() {
    this.generateComputerSelection();
    this.setState({step: 2});
  }

  render() {
    return (
      <div>
        <div className="d-flex flex-column">
          <div id="page-content">
            <div className="container text-center">
              <div className="row justify-content-center">
                <div className="col-md-7">
                  <h1 className="font-weight-light mt-4 text-white">Rock, Paper, Scissors</h1>
                  {
                    this.state.step === 0 ?
                    <ActionCard
                      label="Get Started"
                      subtitle="Click Below to Get Started"
                      onClick={this.startGame}
                    />
                  :
                  <GameSelector
                    onSubmit={this.submitPlayerSelection}
                    playerSelection={this.state.playerSelection}
                    onClick={this.setPlayerSelection}
                  />
                }
                {
                  this.state.step === 2 &&
                  <ComputerRandomizer />
                }
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
