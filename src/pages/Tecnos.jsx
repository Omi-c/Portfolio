import React, { useRef, useEffect } from "react";
import "../styles/TecnosStyles.css";
import { activateTitle } from "../utils/activateTitle";
import { updateRenderingState } from "../utils/updateRenderingState";
import { pageRendered } from "../utils/pageRendered";
import { TecnoItem } from "../components/TecnoItem";
import { TECNOS_LIST } from "../utils/constants";
import { v4 } from "uuid";

export function Tecnos() {
    const tecnosTitleClassName = "tecnos-container__title";
    const tecnosListClassName = "tecnos-container__list";
    const activatedTecnosClassName = "tecno_activated";
    let tecnosContainerRef = useRef();

    const activateTecnosSkills = (tecnos) => {
        for (let i = 0; i < tecnos.length; i++) {
            setTimeout(() => {
                tecnos[i].classList.add(activatedTecnosClassName);
                setTimeout(() => {
                    tecnos[i].children[0].classList.add("tecno_check__activated");
                }, i * 150);
            }, i * 200);
        }
    };

    const observingHandling = ([entry]) => {
        if (entry.isIntersecting && !pageRendered("tecnos")) {
            updateRenderingState("tecnos");
            activateTecnosSkills(document.getElementsByClassName(tecnosListClassName)[0].children);
            activateTitle(tecnosTitleClassName);
        }
    };

    useEffect(() => {
        if (tecnosContainerRef.current) {
            const observer = new IntersectionObserver(observingHandling, {
                root: null,
                rootMargin: "0px",
                threshold: 0.1,
            });
            observer.observe(tecnosContainerRef.current);

            // Clean up the observer when the component is unmounted
            return () => observer.disconnect();
        }
    }, [tecnosContainerRef, observingHandling, activateTecnosSkills, tecnosListClassName, tecnosTitleClassName]);

    return (
        <section ref={tecnosContainerRef} className="tecnos-container">
            <h2 className="tecnos-container__title title">
                My<span className="tecnos-container__title__dom title__selected-text"> Skills</span>
            </h2>
            <ul className="tecnos-container__list">
                {TECNOS_LIST.map((tecno) => {
                    return <TecnoItem key={v4()} tecnoName={tecno} />;
                })}
            </ul>
        </section>
    );
}
