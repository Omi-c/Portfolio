import React from "react"
import "../styles/MapItemStyles.css"
import {usePageNumber} from "../store"

export function MapItem({name, pageId}){
    let [pageNumber, setPageNumber] = usePageNumber((state)=>([state.pageNumber, state.setPageNumber]))
    const handleClick = (e)=>{
        document.getElementsByClassName("main-container")[0].style.left = `${pageId*-100}vw`
        setPageNumber(pageId)
    }
    return (
        <div className={pageNumber === pageId ? "map-item map-item__SELECTED" : "map-item"} onClick={handleClick}>      
            {name}
        </div>
    )
}
