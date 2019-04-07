import React, { Component } from 'react';
import Paper from '../Images/paper.png'
import Rock from '../Images/rock.png'
import Scissors from '../Images/scissors.png'
import ActionCard from './ActionCard';

class ComputerRandomizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0
    }
    this.randomizeSelections = this.randomizeSelections.bind(this);
    this.test = this.test.bind(this);
  }

  componentDidMount() {
    this.test()
    setTimeout(
      ()=>{ clearInterval(this.test) }
      , 800
    )
  }

  test() {
    setInterval(
      this.randomizeSelections,
      200
    )
  }

  componentWillUnmount() {
    clearInterval(this.test)
  }

  randomizeSelections() {
    let selected = this.state.selected;
    if (selected === 2) {
      selected = 0;
    } else {
     selected++;
    }
    this.setState({ selected });
  }

  render() {
    return (
      <div>
        <ActionCard
          title="Computer Selection..."
        >
        <div className="container">
          <div className="row mb-3">
            {
              [Rock, Paper, Scissors].map((ele, index) => {
                let border = '';
                if (index === this.state.selected) {
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
    </div>
    )
  }
}

export default ComputerRandomizer;
