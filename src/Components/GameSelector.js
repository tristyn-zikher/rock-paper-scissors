import React from 'react';
import Paper from '../Images/paper.png'
import Rock from '../Images/rock.png'
import Scissors from '../Images/scissors.png'
import ActionCard from './ActionCard';
import PropTypes from 'prop-types';

const Options = {
  0: 'Rock',
  1: 'Paper',
  2: 'Scissors',
}

const GenerateTitle = (playerSelection) => {
  if (playerSelection !== null) {
    return `You Have Chosen ${Options[playerSelection]}`;
  } else {
    return 'Choose Either: Rock, Paper or Scissors'
  }
}

const GameSelector = ({ onClick, playerSelection, onSubmit, computerSelection, error }) => {
  return (
    <div className="mb-5">
      <ActionCard
        title={GenerateTitle(playerSelection)}
        error={error}
        label={computerSelection === null ? "Submit" : null}
        onClick={onSubmit}
      >
        <div className="container">
          <div className="row mb-3">
            {
              [Rock, Paper, Scissors].map((ele, index) => {
                let border = '';
                if (index === playerSelection) {
                  border = 'dashed red 4px';
                }
                return (
                  <div key={index} onClick={ ()=>{ onClick(index) } } className="col">
                    <img alt="item selector" style={{width: 100, height: 100, border}} src={ele} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </ActionCard>
  </div>
  )
}

GameSelector.propTypes = {
  onClick: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  playerSelection: PropTypes.number,
  computerSelection: PropTypes.number,
  error: PropTypes.string,
}

export default GameSelector;
