/**
 * Main container for Tic-Tac-Toc
 *
 * @date 2016 Oct. 29
 * @author Daniel.Zhu <enterzhu@gmail.com>
 */
import React, { Component, PropTypes } from 'react';

require('./style.scss');

class TwitterTweetBox extends Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate() {
  }
  handleChange(e) {
    let { handleChange } = this.props;
    handleChange(e);
  }
  handleClick() {
    let { handleClick } = this.props;
    handleClick();
  }
  render() {
    let { text, status } = this.props.box;
    return (
      <div className="tweet-box">
        <textarea rows="4" cols="150" className={`tweet-box-textarea ${status}`} placeholder="How're you felling today?" onChange={this.handleChange.bind(this)} value={text} />
        <div className="tweet-box-toolbar">
          <span>{140 - text.length}</span>
          <div className={`button submit-button ${status}`} onClick={this.handleClick.bind(this)}>Submit</div>
        </div>
      </div>
    );
  }
}

TwitterTweetBox.propTypes = {
  box: PropTypes.object,
  handleClick: PropTypes.func,
  handleChange: PropTypes.func
};
export default TwitterTweetBox;
