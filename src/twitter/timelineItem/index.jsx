import React, { PropTypes } from 'react'

require('./style.scss')

class TwitterTimelineItem extends React.Component {
  componentDidEnter () {
    console.log('didEnter')
  }
  componentWillEnter () {
    console.log('willEnter')
  }
  componentDidLeave () {
    console.log('didLeave')
  }
  componentWillLeave () {
    console.log('willLeave')
  }
  calcTime (timestamp) {
    let timeDiff = 'just now'
    timestamp *= 1000

    let now = Date.now()
    let diffTotal = now - timestamp

    let diffByDay = Math.floor(diffTotal / (24 * 60 * 60 * 1000))
    diffTotal -= diffByDay * 24 * 60 * 60 * 1000

    let diffByHour = Math.floor(diffTotal / (60 * 60 * 1000))
    diffTotal -= diffByHour * 60 * 60 * 1000

    let diffByMinute = Math.floor(diffTotal / (60 * 1000))
    diffTotal -= diffByMinute * 60 * 1000

    let diffBySecond = Math.floor(diffTotal / 1000)
    diffTotal -= diffBySecond * 1000

    if (diffByDay > 0) {
      timeDiff = diffByDay + 'd'
    } else if (diffByHour > 0) {
      timeDiff = diffByHour + 'h'
    } else if (diffByMinute > 0) {
      timeDiff = diffByMinute + 'm'
    } else if (diffBySecond > 0) {
      timeDiff = diffBySecond + 's'
    }

    return timeDiff
  }
  render () {
    let { tweet } = this.props
    return (
      <li className='timeline-tweet-item' key={'tweetStep_' + tweet.id}>
        <p className='tweet-text'>{tweet.text}</p>
        <p className='tweet-time'>{this.calcTime(tweet.createdAt / 1000)}</p>
      </li>
    )
  }
}

TwitterTimelineItem.propTypes = {
  tweet: PropTypes.object.isRequired
}

export default TwitterTimelineItem
