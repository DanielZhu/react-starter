/**
 * Main container for Tic-Tac-Toe
 *
 * @date 2016 Oct. 29
 * @author Daniel.Zhu <enterzhu@gmail.com>
 */
import React, { Component, PropTypes } from 'react'
import TwitterTimelineItem from '../timelineItem'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

require('./style.scss')

class TwitterTimeline extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  componentDidUpdate () {
    // this.progress();
  }
  render () {
    let { timeline } = this.props
    return (
      <ul className='timeline-container'>
        <ReactCSSTransitionGroup
          transitionName='timeline-item'
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
          {
          timeline.length > 0
            ? timeline
                .sort((pre, next) => pre.createdAt > next.createdAt ? -1 : 1)
                .map((tweet, idx) => {
                  return (
                    <TwitterTimelineItem tweet={tweet} key={`timeline-${tweet.id}`} />
                  )
                })
            : <div className='empty-tip'>Lazy guy ...you ..you...</div>
        }
        </ReactCSSTransitionGroup>
      </ul>
    )
  }
}

TwitterTimeline.propTypes = {
  timeline: PropTypes.array
}

export default TwitterTimeline
