import '../CSS/about.css'
import nrgy from './IMAGES/nrgy.png';
import edgefx from './IMAGES/edgefx.png';
import naturesVelvet from './IMAGES/natures-velvet.png';
import redbull from './IMAGES/redbull.png';
import { useEffect, useState } from 'react';

export default function About(){

    const [aboutData, setAboutData] = useState([])

    const googleDocAbout = process.env.REACT_APP_ABOUT_KEY;

    useEffect(()=>{
        fetch(googleDocAbout)
        .then(res => res.text())
        .then(rep =>{
            let data = []
            JSON.parse(rep.substr(47).slice(0, -2)).table.rows.forEach(element => {
                data.push(element.c[0].v)
            });
            setAboutData(data)
        })

    }, [googleDocAbout])

    return(
        <div className="section" id="about">
            <h1 className="orbitron">ABOUT US</h1>
            <ul>
                {
                    aboutData && aboutData.map(e =>{
                        return(
                            <li key={`about-${aboutData.indexOf(e)}`}><h2>{e}</h2></li>
                        )
                    })
                }
            </ul>
            <div className='partners-container'>
                <h1 className='orbitron'>PARTNERS</h1>
                <div className='partners-images-container'>
                    <a href='https://nrgyplus.com/' target="_blank" alt="nrgy" rel="noopener noreferrer">
                        <img src={nrgy} className='exposure partner-img' alt="nrgy" title='NRGY+'/>
                    </a>
                    <a href='https://www.naturesvelvet.in/' target="_blank" alt="nature's velvet" rel="noopener noreferrer">
                        <img src={naturesVelvet} className='exposure  partner-img' alt="nature's velvet" title="nature's velvet"/>
                    </a>
                    <a href='https://www.redbull.com/' target="_blank" alt="red bull" rel="noopener noreferrer">
                        <img src={redbull} className='saturation partner-img'  alt="red bull" title='Red Bull'/>
                    </a>
                    <a href='https://www.edgefxtech.com/' target="_blank" alt="edgefx" rel="noopener noreferrer">
                        <img src={edgefx} className='exposure  partner-img' alt="edgefx"  title='EDGEFX Technologies'/>
                    </a>
                </div>
            </div>
        </div>
    );
}