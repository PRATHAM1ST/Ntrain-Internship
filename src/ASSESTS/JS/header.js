import { useEffect, useState } from "react";
import "../CSS/header.css";
import logo from "./IMAGES/logo.png";


export default function Header(){
    const [currentSection, setCurrentSection] = useState('Home');
    const [navigationVisisble, setNavigationVisible] = useState(false);
    let [savedCurrentSection, setSavedCurrentSection] = useState('');
    let docStyle = getComputedStyle(document.documentElement);
    const plusContainer = document.querySelector(".nav-plus-container");
    const defaultShapeSize = docStyle.getPropertyValue('--nav-shape-default-size');
    const defaultBoxShadow = docStyle.getPropertyValue('--nav-shape-default-box-shadow');
    const navigationContainer = document.querySelector(".navigation");
    
    useEffect(()=>{
        const sections = document.querySelectorAll('.section');
        document.addEventListener('scroll', e => {
            var scrollPos =  window.pageYOffset
            sections.forEach(e=>{
                if(scrollPos >= (e.offsetTop - e.clientHeight / 3)){
                    setCurrentSection(e.id)
                    return
                }
            })    
        })
        
        if(plusContainer){
            if(navigationVisisble){
                document.body.style.overflow = "hidden";
                document.documentElement.style.setProperty('--nav-shape-size', "0");
                document.documentElement.style.setProperty('--nav-shape-box-shadow', "0");
                plusContainer.style.position = "unset";
                plusContainer.style.transform = `rotate(45deg) scale(2) translateX(-15%)`;
                setSavedCurrentSection(currentSection);
                setCurrentSection('close');
                navigationContainer.style.transform = "none";
            }
            else{
                document.body.style.overflow = "visible";
                document.documentElement.style.setProperty('--nav-shape-size', defaultShapeSize);
                document.documentElement.style.setProperty('--nav-shape-box-shadow', defaultBoxShadow);
                plusContainer.style.position = "relative";
                plusContainer.style.transform = `rotate(90deg)`;
                setCurrentSection(savedCurrentSection);
                navigationContainer.style.transform = "translateX(100%)";
            }
        }
        
    }, [navigationVisisble])
    
    return(
            <div className="header" id="her">
                <div className="navigation">
                    <div className="nav-links">
                        <a onClick={()=>setNavigationVisible(false)} className="orbitron" href="#home">Home</a>
                        <a onClick={()=>setNavigationVisible(false)} className="orbitron" href="#about">About</a>
                        <a onClick={()=>setNavigationVisible(false)} className="orbitron" href="#events">Events</a>
                        <a onClick={()=>setNavigationVisible(false)} className="orbitron" href="#creators">Creators</a>
                        <a onClick={()=>setNavigationVisible(false)} className="orbitron" href="#careers">Careers</a>
                        <a onClick={()=>setNavigationVisible(false)} className="orbitron" href="#contact">Contact</a>
                    </div>
                </div>
                <a href="#home" title="Home">
                    <img className="img-logo" alt="NTRAIN GAMING" src={logo} />
                </a>
                <div className="nav-container" title="menu" onClick={()=>setNavigationVisible(!navigationVisisble)}>
                    <div className="nav-shapes-container">
                        <div className="nav-shape nav-square"></div>
                        <div className="nav-plus-container" >
                            <div className="nav-plus-horizontal"></div>
                            <div className="nav-plus-vertical"></div>
                        </div>
                        <div className="nav-shape nav-circle"></div>
                        <div className="nav-shape nav-rhombus"></div>
                    </div>
                    <div className="nav-current-section" onChange={() => console.log(1)}>{currentSection}</div>
                </div>
            </div>
    )
}