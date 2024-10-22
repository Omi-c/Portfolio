import * as store from "../store" 

export function updateRenderingState(state){
    const renderingState = store["useRenderingState"].getState().renderingState
    const setRenderingState = store["useRenderingState"].getState().setRenderingState
    renderingState[state] = true
    setRenderingState(renderingState)

}