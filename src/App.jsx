import React from "react"
import { Title }                      from './pages/Title';
import { About }                      from './pages/About';
import {Contact}                      from "./pages/Contact"
import { Projects }                   from './pages/Projects';
import { Tecnos }                     from './pages/Tecnos';
import { Map }                        from './components/Map';


export function App(){
    return (
        <>
            <div className="main-container">
                <Title/>
                <About/>
                <Tecnos/>
                <Projects/>
                <Contact/>
            </div>
            <Map/>
        </>
    )
}