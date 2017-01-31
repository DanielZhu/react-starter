/**
 * Main container for Tic-Tac-Toe
 *
 * @date 2016 Oct. 29
 * @author Daniel.Zhu <enterzhu@gmail.com>
 */
import React, { Component } from 'react'
import TwitterTweetBox from './tweetBox'
import TwitterTimeline from './timeline'

require('./style.scss')

class TwitterApp extends Component {
  constructor (props) {
    super(props)
    this.state = {box: {status: 'warn', text: ''}, timeline: [{id: 0, text: 'Hello, TNC', createdAt: Date.now() - 10000}]}
  }
  componentDidUpdate () {

  }
  handleChange (e) {
    this.setState({box: {status: this.state.box.text.length > 0 && this.state.box.text.length <= 140, text: e.target.value}})
  }
  handleTweetClicked () {
    if (this.state.box.text.length > 0 && this.state.box.text.length <= 140) {
      this.setState({box: {status: 'ok', text: ''}, timeline: this.state.timeline.concat([{id: this.state.timeline.length + 1, text: this.state.box.text, createdAt: Date.now()}])})
    } else {
      this.setState({box: {...this.state.box, status: 'warn'}})
    }
  }
  render () {
    return (
      <div className='twitter-app'>
        <h2>Twitter Simple Box</h2>
        <TwitterTweetBox box={this.state.box} handleChange={this.handleChange.bind(this)} handleClick={this.handleTweetClicked.bind(this)} />
        <div className='separator' />
        <TwitterTimeline timeline={this.state.timeline} />
      </div>
    )
  }
}

export default TwitterApp
