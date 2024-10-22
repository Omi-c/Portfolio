import * as store from "../store" 

export function pageRendered(state){
    return store["useRenderingState"].getState().renderingState[state]

}