import React, { Component } from 'react';
import ActionCard from './Components/ActionCard';
import Footer from './Components/Footer';
import GameSelector from './Components/GameSelector';
import ComputerRandomizer from './Components/ComputerRandomizer';
import ComputerSelection from './Components/ComputerSelection';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      computerSelection: null,
      playerSelection: null,
    }
    this.resetGame = this.resetGame.bind(this);
    this.startGame = this.startGame.bind(this);
    this.setPlayerSelection = this.setPlayerSelection.bind(this);
    this.submitPlayerSelection = this.submitPlayerSelection.bind(this);
    this.generateComputerSelection = this.generateComputerSelection.bind(this);
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

  resetGame() {
    console.log('running')
    this.setState({step: 1, computerSelection: null, playerSelection: null})
  }

  submitPlayerSelection() {
    if (this.state.playerSelection === null) {
      return;
    }
    this.generateComputerSelection();
    this.setState({step: 2});
    setTimeout(
      () => { this.setState({ step: 3 }) }
      ,2000
    )
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
                {
                  this.state.step === 3 &&
                  <ComputerSelection
                    computerSelection={this.state.computerSelection}
                    playerSelection={this.state.playerSelection}
                    onClick={this.resetGame}
                  />
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
