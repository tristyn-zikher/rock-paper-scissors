import React, { Component } from 'react';
import Paper from '../Images/paper.png'
import Rock from '../Images/rock.png'
import Scissors from '../Images/scissors.png'
import ActionCard from './ActionCard';

class ComputerSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alertMessage: ''
    }

  }
  componentDidMount() {
    // 0 = rock, 1 = paper, 2 = scissors
    let computerSelection = this.props.computerSelection;
    let playerSelection = this.props.playerSelection;

    // handle tie
    if (computerSelection === playerSelection) {
      this.setState({alertMessage: 'tie!'})
    }

    // handle wins
    if (computerSelection === 0 && playerSelection === 1) {
      this.setState({alertMessage: 'Paper covers rock. You win!'})
    }
    if (computerSelection === 1 && playerSelection === 2) {
      this.setState({alertMessage: 'Scissors cuts paper. You win!'})
    }
    if (computerSelection === 2 && playerSelection === 0) {
      this.setState({alertMessage: 'Rock breaks scissors. You win!'})
    }

    // handle losses
    if (computerSelection === 1 && playerSelection === 0) {
      this.setState({alertMessage: 'Paper covers rock. You lose!'})
    }
    if (computerSelection === 2 && playerSelection === 1) {
      this.setState({alertMessage: 'Scissors cuts paper. You lose!'})
    }
    if (computerSelection === 0 && playerSelection === 2) {
      this.setState({alertMessage: 'Rock breaks scissors. You lose!'})
    }
  }

  render() {
    return (
      <div>
        <ActionCard
          title="Computer has selected Scissors"
          onClick={this.props.onClick}
          label={'Play Again?'}
        >
        <div className="container">
          <div className="row mb-3">
            {
              [Rock, Paper, Scissors].map((ele, index) => {
                let border = '';
                if (index === this.props.computerSelection) {
                  border = 'dashed red 4px';
                }
                return (
                  <div key={index} className="col">
                    <img alt="item selector" style={{width: 100, height: 100, border}} src={ele} />
                  </div>
                )
              })
            }
          </div>
        </div>
        </ActionCard>
        <div className="alert alert-warning">{this.state.alertMessage}</div>
    </div>
    )
  }
}

export default ComputerSelection;
