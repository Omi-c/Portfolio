import React from "react";
import {useEffect} from "react"
import "../styles/TitleStyles.css"
import {activateTitle} from "../utils/activateTitle"


export function Title(){
    const titleClassName = "header-container__text"
    useEffect(()=>{
        activateTitle(titleClassName)
    }, [])
    return (
    <header className="header-container">
        
        <h1 className="header-container__text title">
            Omaris<span className="tecnos-container__title__dom title__selected-text">Carreño</span>
        </h1>
    </header>
    )
}