import { action_slidecollapsed, action_routerConfig, action_routerconfigPathName, action_increaseAction, action_increaseActionDes } from '@/store/action.js'

export const mapStateToProps = (state) => {
  return {
    slidecollapsed: state.slidecollapsed,
    countValue: state.countValue,
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    onSlidecollapsed: () => dispatch(action_slidecollapsed),
    onIncreaseClick: () => dispatch(action_increaseAction),
    onIncreaseDes: () => dispatch(action_increaseActionDes),
    // onIncreaseClick: () => dispatch( { type: 'increase' } )
  }
}

export const mapRouterStateToProps = (state) => {
  // console.log(2222, state)
  return { routerConfig: state.routerConfig }
}
export const mapRouterDispatchToProps = (dispatch) => {
  return { getRouterConfig: () => dispatch(action_routerConfig) }
}
export const mapRouterconfigPathNameToProps = (state) => {
  // console.log(2222, state)
  return { routerconfigPathName: state.routerconfigPathName }
}

export const mapRrouterPathNameDispatchToProps = (dispatch) => {
  return { getRouterConfigPathName: () => dispatch(action_routerconfigPathName) }
}
