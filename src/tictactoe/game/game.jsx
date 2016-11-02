/**
 * Main container for Tic-Tac-Toe
 *
 * @date 2016 Oct. 29
 * @author Daniel.Zhu <enterzhu@gmail.com>
 */
import React, { Component } from 'react';
import Cell from '../cell/cell';

require('./game.scss');

class TictactoeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {steps: [], data: Array(9).fill(null), size: 3, result: {winCells: [], win: false, winner: ''}};
  }
  componentDidUpdate() {
    // this.progress();
  }
  renderCanvas() {
    const cellSize = Math.pow(this.state.size, 2);
    let els = [];
    for (let i = 0; i < cellSize; i++) {
      els.push(<Cell key={i} text={this.state.data[i]} tap={this.play.bind(this, i)} active={this.state.result.winCells.indexOf(i) !== -1} />);
    }

    let canvas = [];
    for (let i = 0; i < this.state.size; i++) {
      canvas.push(
        <div className="game-row" key={i} >
          {[].concat(els.slice(i * this.state.size, (1 + i) * this.state.size))}
        </div>
      );
    }

    return canvas;
  }
  play(pos) {
    const role = this.state.steps.length % 2 === 0 ? 'O' : 'X';
    if (this.state.result.win) {
      return;
    }
    if (pos >= 0
        && pos <= Math.pow(this.state.size, 2)
        && this.state.data[pos] === null) {
      this.setState({
        ...this.state,
        data: {
          ...this.state.data,
          [pos]: role
        },
        steps: [
          ...this.state.steps,
          {time: Date.now(), value: {
            ...this.state.data,
            [pos]: role
          },}
        ]
      }, this.progress.bind(this));
    }
  }
  getPos(x, y) {
    const cols = this.state.size;
    return cols * x + y;
  }
  progress() {
    // Vertical
    const size = this.state.size;
    const data = this.state.data;
    let win = false;
    let standardRole;
    let cells = [];
    // Horonzital
    for (let i = 0; i < size; i++) {
      let rowIdx = i * size;
      standardRole = data[rowIdx];
      cells = [rowIdx];
      for (let j = 1; j < size; j++) {
        let dataIdxH = rowIdx + j;
        cells.push(dataIdxH);
        let currentRole = data[dataIdxH];
        if (currentRole !== standardRole || currentRole === null) {
          win = false;
          break;
        }
        else if (j === size - 1) {
          win = true;
        }
      }
      if (win) {
        break;
      }
    }

    // Vertical
    if (!win) {
      for (let i = 0; i < size; i++) {
        let colIdxV = i;
        standardRole = data[colIdxV];
        cells = [colIdxV];
        for (let j = 1; j < size; j++) {
          let dataIdxV = j * size + i;
          cells.push(dataIdxV);
          let currentRole = data[dataIdxV];
          if (currentRole !== standardRole || currentRole === null) {
            win = false;
            break;
          }
          else if (j === size - 1) {
            win = true;
          }
        }
        if (win) {
          break;
        }
      }
    }

    // Oblique
    if (!win) {
      let oIdx = this.getPos(0, 0);
      standardRole = data[oIdx];
      cells = [oIdx];
      for (let i = 1; i < size; i++) {
        let oIdx = this.getPos(i, i);
        cells.push(oIdx);
        let currentRole = data[oIdx];
        if (currentRole !== standardRole || currentRole === null) {
          win = false;
          break;
        }
        else if (i === size - 1) {
          win = true;
        }
      }
    }

    // Oblique
    if (!win) {
      let oIdxR = this.getPos(size - 1, 0);
      standardRole = data[oIdxR];
      cells = [oIdxR];
      for (let i = 1; i < size; i++) {
        let oIdx = this.getPos(size - 1 - i, i);
        cells.push(oIdx);
        let currentRole = data[oIdx];
        if (currentRole !== standardRole || currentRole === null) {
          win = false;
          break;
        }
        else if (i === size - 1) {
          win = true;
        }
      }
    }

    if (win) {
      this.setState({result : {...this.state.result, winCells: cells, win: true, winner: standardRole}});
    }
  }
  rollback(step) {
    this.setState({
      steps: this.state.steps.slice(0, step),
      data: this.state.steps.slice(0, step).length > 0 ? this.state.steps[step - 1].value : Array(9).fill(null),
      result: {winCells: [], win: false, winner: ''}
    });
  }
  restart() {
    this.setState({steps: [], data: Array(9).fill(null), size: 3, result: {winCells: [], win: false, winner: ''}});
  }
  render() {
    return (
      <div className="ttt-game">
        <h2>Tictactoe Game</h2>
        <div className="game-wrapper">
          <div className="game-playing-area">
            <div onClick={this.restart.bind(this)} className="restart-button">Restart</div>
            <div className="game-status">
              {this.state.result.win ? 'Winned by ' + this.state.result.winner : (this.state.steps.length === 9 ? 'Game Over ^_^' : <span className="current-player">Currnet Player: {this.state.steps.length % 2 === 0 ? 'O' : 'X'}</span>)}
            </div>
            <div className="game-canvas">
              {this.renderCanvas()}
            </div>
          </div>
          <ul className="game-steps">
            {
              this.state.steps.map((history, historyIdx) => {
                return (
                  <li key={'historyStep_' + historyIdx} onClick={this.rollback.bind(this, historyIdx)}>Move #{historyIdx}</li>
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default TictactoeContainer;
