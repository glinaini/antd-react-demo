import React, { Component } from 'react'
import { createStore } from 'redux'
import './App.css'
// import { withRouter } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// import { main as mainConfig } from './router/index'
import { Provider } from 'react-redux'
import { allReducer } from './store/store'
import Index from './containers/index/index'


const store = createStore(allReducer)
console.log(store.getState())

// @withRouter
class App extends Component {
  RenderRoutes = (route) => {
    // console.log('route', route)
    const { path, component: RouteComp, ...restProps } = route
    return (
      <Route
        key={path}
        path={path}
        render={(props) => {
          return (
            <RouteComp {...props} routes={route.routes}  />
          )
        }}
        {...restProps}
      />
    )
  }
  render() {
    return (
      <div className="App">
        <Provider store={store}>
        <Router>
          <Switch>
             {/* {mainConfig.map((route) => this.RenderRoutes(route))}  */}
            <Route path="/" component={Index} />
          </Switch>
        </Router>
        </Provider>
      </div>
    )
  }
}

export default App
