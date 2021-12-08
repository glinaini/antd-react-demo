import React from 'react'
import { Layout } from 'antd'

const { Content } = Layout
class Main extends React.Component {

  render(){
    return(
      <div>
        <Content className="site-layout-background"> content </Content>
      </div>
    )
  }
}

export default Main