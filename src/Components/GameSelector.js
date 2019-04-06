import React, { Component } from 'react';
import Paper from '../Images/paper.png'
import Rock from '../Images/rock.png'
import Scissors from '../Images/scissors.png'
import ActionCard from './ActionCard';

const GenerateTitle = (playerSelection) => {
  let options = {
    0: 'Rock',
    1: 'Paper',
    2: 'Scissors',
  }
  if (playerSelection !== null) {
    return `You Have Chosen ${options[playerSelection]}`;
  } else {
    return 'Choose Either: Rock, Paper or Scissors'
  }
}

const GameSelector = ({ onClick, playerSelection, onSubmit }) => {
  return (
    <div className="mb-5">
      <ActionCard
        title={GenerateTitle(playerSelection)}
        label="Submit"
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

export default GameSelector;
