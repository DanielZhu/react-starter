import React, { PropTypes } from 'react'

const TestBasic = ({ onClick, text, btnCls, btnIconCls }) => {
  return (
    <div onClick={onClick} className='asdf'>
      <div className='button-content'>
        {
          btnIconCls ? <i className={'button-icon ' + btnIconCls} /> : null
        }
        <span className='button-text'>{text}</span>
      </div>
    </div>
  )
}

TestBasic.propTypes = {
  onClick: PropTypes.func.isRequired,
  btnIconCls: PropTypes.string,
  btnCls: PropTypes.array,
  text: PropTypes.string
}

export default TestBasic
