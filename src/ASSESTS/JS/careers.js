import { useEffect, useState } from 'react';
import '../CSS/careers.css';

export default function Careers(){
    const [careerCardData, setCareerCardData] = useState([])
    const googleSheet = process.env.REACT_APP_CAREER_KEY

    useEffect(()=>{
        fetch(googleSheet)
        .then(res=>res.text())
        .then(rep=>{
            const dataArray = JSON.parse(rep.substr(47).slice(0, -2)).table.rows
            var cardArray = []
            dataArray.forEach(element => {
                let temp = []
                element.c.forEach(e=>{
                    e && e.v && temp.push(e.v)
                })
                cardArray.push({title: temp.shift(), points: temp})
            });
            setCareerCardData(cardArray)
        })
    }, [googleSheet])

    const handleCareer = ()=>{
        document.getElementById('Purpose').value = "career";
    }

    return(
        <div className="section career" id='careers'>
            <h1 className='orbitron'>careers</h1>
            <div className='career-cards-container'>
                {
                    careerCardData && careerCardData.map(element=>{
                        return(
                            <div className='career-card' key={'career-' + careerCardData.indexOf(element)}>
                                <div className='card-title'>
                                    <h2>{element.title}</h2>
                                    <div className='card-toggle-switch'>
                                        <div className='card-toggle-horizontal-line'/>
                                        <div className='card-toggle-vertical-line'/>
                                    </div>
                                </div>
                                <ul className="card-description">
                                    {
                                        element.points.map(point=>{
                                            return(
                                                <li key={'point-' + element.points.indexOf(point)}>
                                                    {point}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
            <a onClick={handleCareer} className='career-contact bold underline' href="#contact">Contact&nbsp;US&nbsp;<i class="fa-solid fa-phone-flip"></i></a>
        </div>
    )
}