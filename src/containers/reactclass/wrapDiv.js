// 添加包裹层
import {Component} from 'react'
import PropTypes from 'prop-types';


class WrapDiv extends Component {
  
  render () {
    // console.log(this.props.store)
    return this.props.children;
  }
}

WrapDiv.propTypes = {
  store: PropTypes.object
}

export default WrapDiv
