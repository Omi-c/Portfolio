import {v4} from "uuid"
import React from "react"
import {useEffect, useRef} from "react"
import "../styles/MapStyles.css"
import {MapItem} from "./MapItem"


export function Map(){
    const mapContainerACTIVATEDClassName             = "map-container__ACTIVATED"
    const pagesNames                                 = ["Home", "About", "Skills", "Projects", "Contact"]
    let currentPageNumber                            = -1
    let mapContainerRef                              = useRef()
    useEffect(()=>{
        setTimeout(() => {
            mapContainerRef.current.classList.add(mapContainerACTIVATEDClassName)
        }, 500);
    }, [])
    return (
        <div className="map-bigger-container">

            <div ref={mapContainerRef} className="map-container">
                {pagesNames.map((name)=>{
                    currentPageNumber++
                    return <MapItem 
                        key={v4()}
                        name={name}
                        pageId ={currentPageNumber}
                        />
                })}
            </div>

        </div>
    )
}