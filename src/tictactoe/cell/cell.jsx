import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

require('./cell.scss')

export default class Cell extends Component {
  // constructor (props) {
  //   super(props)
  // }
  render () {
    let { text, tap, active } = this.props
    let cls = classNames({
      'ttt-cell': true,
      'active': active
    })
    return (
      <div className={cls} onClick={tap}>{text}</div>
    )
  }
}

Cell.propTypes = {
  active: PropTypes.bool,
  text: PropTypes.string,
  tap: PropTypes.func
}
