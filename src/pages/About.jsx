import React from "react";
import {useEffect, useRef} from "react"
import "../styles/AboutStyles.css"
import { activateTitle } from "../utils/activateTitle";
import {updateRenderingState} from "../utils/updateRenderingState"
import {pageRendered} from "../utils/pageRendered"


export function About(props){
    const aboutContainerTITLEClassName = "about-container__title"
    let aboutContainerRef = useRef()

    const observingHandling = ([entry])=>{
        if (entry.isIntersecting && !pageRendered("about")) {
            updateRenderingState("about")
            activateTitle(aboutContainerTITLEClassName)
            setTimeout(()=>{
                aboutContainerRef.current.classList.add("activated-about-container")
            }
            ,500)
        }
    }
    useEffect(()=>{
        if (aboutContainerRef.current) {
            const observer = new IntersectionObserver(observingHandling,{root: null,rootMargin: '0px',threshold: 0.1});
            observer.observe(aboutContainerRef.current);
        }
    }, [])

    const age = Math.floor((new Date() - new Date('04-21-2000')) / (1000 * 60 * 60 * 24 * 365.25))
    return (
    <section className="about-container">
        <h2 className="about-container__title title">About<span className="about-container__title__comp title__selected-text">Me</span></h2>
        <p className="about-container__paraph" ref={aboutContainerRef}>
            My name is Omaris Carreño, I'm {age} years old. I have a degree in Computer Engineering from José Antonio Páez University in Carabobo, Venezuela.
            I specialize in frontend web development and design. I consider myself a creative, organized, and responsible person.
        </p>
    </section>
)
}