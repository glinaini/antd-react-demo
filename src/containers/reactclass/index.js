//  react 组件
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import HeaderReactClass from './head'
import DoingThings from './isHOC'
import WrapDiv from './wrapDiv'
import { Button } from 'antd'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../store/connect'

class ReactClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      numb: 0,
    }
  }

  componentDidMount() {}

  componentWillMount() {} // render之前被调用

  componentWillReceiveProps(obj, nextProps) {}

  componentWillUnmount() {} // 在组件被卸载和销毁之前调用， 可做清理的工作

  handleDes = () => {
    console.log('des')
    this.setState({ numb: this.state.numb - 1 })
  }

  handleAdd = () => {
    console.log('add')
    this.setState({ numb: this.state.numb + 1 })
  }

  render() {
    console.log('props', this.props)
    const { countValue } = this.props.slidecollapsed
    const { onIncreaseClick, onIncreaseDes } = this.props
    console.log(onIncreaseClick)
    return (
      <WrapDiv>
        <HeaderReactClass />
        <div style={{ marginTop: 20 }}></div>
        按钮
        <Button onClick={onIncreaseDes}>-</Button> {countValue} <Button onClick={onIncreaseClick}>+</Button>
        <DoingThings />
        <WrapDiv>
          <div>12</div>
          <div>24</div>
        </WrapDiv>
      </WrapDiv>
    )
  }
}

ReactClass.defaultProps = {
  name: '',
}

ReactClass.propTypes = {
  userid: PropTypes.number,
  countValue: PropTypes.number,
  onIncreaseClick:PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactClass)
