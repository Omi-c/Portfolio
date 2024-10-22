import React from "react"

export function TecnoItem({tecnoName}){
    return (
        <li className="tecnos-container__list__item">
            <span className="tecno_check">✓</span>
            <span className="tecno_name">{tecnoName}</span>
        </li>
    )
}