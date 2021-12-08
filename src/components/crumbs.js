import React from 'react'
import { Breadcrumb } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { filterData } from '../utils'
import { mapStateToProps, mapDispatchToProps, mapRouterStateToProps, mapRouterDispatchToProps } from '../store/connect'

const deepFlatten = arr => [].concat(...arr.map(v => Array.isArray(v)?deepFlatten(v):v));
let breadcrumbNameMap = []

class Crumbs extends React.Component {

  componentDidMount(){
    // this.onTrun()
  }
  // onTrun(){}
  render(){
    let { location, getRouterConfig, routerConfig } = this.props;
    // console.log(this.props)

    routerConfig = filterData(routerConfig, 'routerConfig')
    this.onTrun = getRouterConfig;
    routerConfig = (typeof routerConfig === 'object' && Object.values(routerConfig)) || []
    breadcrumbNameMap = (Array.isArray(routerConfig) && deepFlatten(routerConfig)) || []
    var newBreadcrumbNameMap = breadcrumbNameMap.filter(item => {
      if (item.path === location.pathname) {return item;}
      return item
    })

    return(
      <div>
        <Breadcrumb>
        {getBreadCurmbs(newBreadcrumbNameMap)}
        </Breadcrumb>
      </div>
    )
  }
}

const getBreadCurmbs = (newBreadcrumbNameMap, arr=[]) => {
  return arr = newBreadcrumbNameMap.map(item => {
    arr.push(
    <Breadcrumb.Item key={item.path}>
      <Link to={item.path}>{item.name}</Link>
    </Breadcrumb.Item>
    )
    // { Array.isArray(item.routes) && item.routes.length>0 && getBreadCurmbs(item.routes,arr) }
    return arr
  })
}

export default connect(mapStateToProps,mapDispatchToProps, mapRouterStateToProps,mapRouterDispatchToProps)(withRouter(Crumbs))