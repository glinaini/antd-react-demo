
// import {React} from 'react'
import Login from '../containers/login/index'
import Home from '../containers/home/index'
import MyEChart from '../containers/echart/index'
import ReactClass from '../containers/reactclass/index'
import HookExample from '../containers/reactHook/index'
import CssClass from '../containers/cssclass/index'
import Tables from '../containers/tables/index'
// import Index from '../containers/index/index'

// const Test = () => <h3>test</h3>

export const main = [
  
  { path:'/', name:'首页', component:Home },
  // { path:'/home', name:'首页', component: Home,
    // routes:[
    //     {path:'/test',name:'测试页面',component:Test}
    //   ]
  // },
  { path:'/myechart', name:'图像', component: MyEChart },
  { path:'/reactclass', name:'React组件', component: ReactClass },
  { path:'/reactHook', name:'ReactHook', component: HookExample },
  { path:'/tables', name:'表单的用法', component: Tables },
  // { path:'/index', name:'首页', component: Index,
  //   // routes:[
  //   //     {path:'/test',name:'测试页面',component:Test}
  //   //   ]
  // },
  { path:'/cssclass', name:'CSS组件', component:CssClass },
  // { path:'/', name:'', component:CssClass },
  { path:'/login', name:'登录', component:Login },
]

export const menus = [
  // 菜单相关路由
]

export const routerConfig = {
  main,
  menus,
}