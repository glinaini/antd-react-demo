import React from 'react'
// import { slidecollapsed } from '../store/store'
import { connect } from 'react-redux'
import { createStore } from 'redux'

import { Layout, Menu, Modal } from 'antd'
import { main as mainConfig } from '@/router/index'
import { allReducer } from '../store/store'

// import history from '@/utils/history';

import {
  // MenuUnfoldOutlined,
  MenuFoldOutlined,
  // UserOutlined,
  // VideoCameraOutlined,
  // UploadOutlined,
} from '@ant-design/icons'
import { filterData } from '../utils'
import { withRouter } from 'react-router'
import { mapStateToProps, mapDispatchToProps } from '../store/connect'

const { Sider } = Layout


const store = createStore(allReducer)
console.log(store)
class Slider extends React.Component {

  componentDidMount(){
    console.log('this',this)
    console.log('this',React)
    console.log('store',this.context)
  }

  
  menuClick = (item) => {
    // console.log(item)
    console.log(item)

    if (Number.isFinite(parseInt(item.key, 10))) {
      Modal.error({
        title: '警告',
        content: '当前模块需进一步授权，请联系管理员，添加权限',
      })
    } else {
      this.props.history.push(item.key)
      // mapRrouterPathNameDispatchToProps(item.pathName)
      // this.props.dispatch()
    }
  }

  render() {
    let { slidecollapsed } = this.props
    slidecollapsed = filterData(slidecollapsed, 'slidecollapsed')
    const {pathname} = this.props.location

    // mapRouterStateToProps({routerConfig:})
    // console.log(mapRouterDispatchToProps)
    console.log(this.props)

    return (
      <Sider trigger={null} collapsible collapsed={slidecollapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[ pathname || '/home']}>
          {mainConfig.map((item) => {
            const menuItemChild = (
              <Menu.Item
                key={item.path}
                onClick={(Item) => {
                  this.menuClick(Item)
                }}
              >
                <MenuFoldOutlined />
                <span>{item.name}</span>
              </Menu.Item>
            )
            return menuItemChild
          })}
        </Menu>
      </Sider>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Slider))
