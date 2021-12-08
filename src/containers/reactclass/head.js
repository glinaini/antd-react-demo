//  react 组件
import React, {Component} from 'react'
import { Card } from 'antd';

class HeaderReactClass extends Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  
  componentDidMount(){}

  render(){
    return(
      <Card>
        header
      </Card>
    )
  }
}

export default HeaderReactClass;