import React from "react";
import {useEffect, useRef} from "react"
import "../styles/ContactStyles.css"
import { CopyBtn } from "../components/CopyBtn";
import {EMAIL} from "../utils/constants"
import { activateTitle } from "../utils/activateTitle";
import {updateRenderingState} from "../utils/updateRenderingState"
import {pageRendered} from "../utils/pageRendered"






export function Contact(){
    const contactContentTITLEClassName               = "contact-content__title"
    const contactContentPARAPH_P1ClassName           = "contact-content__paraph__p1"
    const contactContentPARAPH_P2ClassName           = "contact-content__paraph__p2"
    const [email__first, email__second] = EMAIL.split("@")
    let contactContainerRef = useRef()
    const activateParaph = ()=>{
        const paraphList = [
            document.getElementsByClassName(contactContentPARAPH_P1ClassName)[0],
            document.getElementsByClassName(contactContentPARAPH_P2ClassName)[0],
        ]
        setTimeout(() =>{
            paraphList.forEach((element) =>{
                element.classList.add("paraph_activated")
            })
        }, 500)
    }


    const observingHandling = ([entry])=>{
        if (entry.isIntersecting && !pageRendered("contact")) {
            updateRenderingState("contact")
            activateParaph()
            activateTitle(contactContentTITLEClassName)
        }
    }
    useEffect(()=>{
        if (contactContainerRef.current) {
            const observer = new IntersectionObserver(observingHandling,{root: null,rootMargin: '0px',threshold: 0.1});
            observer.observe(contactContainerRef.current);
        }
    }, [])
    return (
        <footer ref={contactContainerRef}className="contact-content">
             <h2 className="contact-content__title title"> Contact  <span className="contact-content__title__me title__selected-text ">Me</span> </h2>
            <p className="contact-content__paraph">
                <span className="contact-content__paraph__p1 paraph-part">{email__first}</span>
                @
                <span className="contact-content__paraph__p2 paraph-part">{email__second}</span>
            </p>
            <CopyBtn/>
        </footer>
    )
}