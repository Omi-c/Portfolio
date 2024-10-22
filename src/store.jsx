import {create} from "zustand"

export const useRenderingState = create((set)=>({
    renderingState : {},
    setRenderingState : (new_val)=>(set(()=>({renderingState : new_val})))
}))

export const usePageNumber = create((set)=>({
    pageNumber : 0,
    setPageNumber : (new_val)=>(set(()=>({pageNumber : new_val})))
}))

