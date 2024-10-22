import React from "react"
import {useRef, useEffect} from "react"
import "../styles/CopyBtnStyles.css"
import { EMAIL} from "../utils/constants";
import {pageRendered} from "../utils/pageRendered"
import {updateRenderingState} from "../utils/updateRenderingState"
import {copyOnClipboard} from "../utils/copyOnClipboard"


export function CopyBtn(){
    const copyBtnClassNameACTIVATED                  = "copy-btn__ACTIVATED"
    const copyBtnSuccessMsgACTIVATED                 = "success-msg__ACTIVATED"
    let   copyBtnRef                                 =  useRef(null)
    let   successMsgRef                              =  useRef(null)

    const observingHandling = ([entry])=>{
        if (entry.isIntersecting && !pageRendered("copyBtn")) {
            updateRenderingState("copyBtn")
            setTimeout(()=>{
                copyBtnRef.current.classList.add(copyBtnClassNameACTIVATED)
            },1000)
        }
    }

    const handleClick = ()=>{
        copyOnClipboard(EMAIL)
        successMsgRef.current.classList.add(copyBtnSuccessMsgACTIVATED)
    }
    useEffect(()=>{
        if (copyBtnRef.current) {
            const observer = new IntersectionObserver(observingHandling,{root: null,rootMargin: '0px',threshold: 0.1});
            observer.observe(copyBtnRef.current);
        }
    }, [])
    return (
        <div ref={copyBtnRef} className="copy-btn">
            <span className="material-symbols-outlined copy-btn__img" onClick={handleClick}>
                content_copy
            </span>
            <span className="success-msg" ref={successMsgRef}>
                copied!
            </span>
        </div>
    )
}