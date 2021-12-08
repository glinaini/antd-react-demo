import React, { Component } from 'react'
import { Layout } from 'antd'
import { Switch , Route} from 'react-router-dom'
import { main as mainConfig } from '../../router/index'

import styles from './index.module.scss'
import Slider from '@/components/slider'
// import Main from '@/components/main'
import AppHeader from '@/components/header'
import Crumbs from '@/components/crumbs'

const { Content } = Layout

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  RenderRoutes = (route,pathname) => {
    const { path, component: RouteComp, ...restProps } = route
    if(pathname === path){
      return (
        <Route
          key={path}
          path={path}
          render={(props) => {
            return <RouteComp {...props} routes={route.routes}  />
          }}
          {...restProps}
        />
      )
    }
    // return null;
  }

  render() {
    // console.log(this.props)
    // console.log('mainConfig',mainConfig)
    const {pathname} = this.props.location
    return (
      <div className={styles.wrap}>
        <Layout>
          <Slider />
          <Layout className="site-layout">
            <AppHeader />
            <Crumbs />
            {/* <Main/> */}
            <Content className="site-layout-background" >
             <div className={styles.main}>
              <Switch>
                {mainConfig.map((route) => this.RenderRoutes(route,pathname))}
              </Switch>
            </div> 
            </Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}

export default Index
