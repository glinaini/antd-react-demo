import { combineReducers } from 'redux'
import { routerConfig as myRouterConfig } from '@/router/index'
import { SLIDECOLLAPSED, INCREASE, ROUTERCONFIG, INCREASEDES } from '@/store/action'

console.log(SLIDECOLLAPSED, ROUTERCONFIG)

const defaultState = {
  slidecollapsed: false,
  countValue: 1,
}

const slidecollapsedFunc = (state = { ...defaultState }, action) => {
  const { slidecollapsed, countValue } = state
  console.log('action', action)

  switch (action.type) {
    case SLIDECOLLAPSED:
      return Object.assign({}, state, {
        slidecollapsed: !slidecollapsed,
      })
    case INCREASE:
      return Object.assign({}, state, {
        countValue: countValue + 1,
      })
    case INCREASEDES:
      return Object.assign({}, state, {
        countValue: countValue - 1,
      })
    default:
      return state
  }
}

const getRouterConfig = (state = { routerConfig: [], routerConfigPathName: '' }, action) => {
  // console.log(11111,action.type)
  switch (action.type) {
    case ROUTERCONFIG:
      return Object.assign({}, state, {
        routerConfig: myRouterConfig,
      })
    default:
      return state
  }
}

export const allReducer = combineReducers({
  slidecollapsed: slidecollapsedFunc,
  routerConfig: getRouterConfig,
})

// export const allReducer = combineReducers({
//   slidecollapsed:slidecollapsedFunc, routerConfig: getRouterConfig
// })

// 等同于
// function reducer(state = {}, action) {
//   return {
//     slidecollapsed: slidecollapsedFunc(state.slidecollapsedFunc, action),
//     routerConfig: getRouterConfig(state.getRouterConfig, action),
//   }
// }
