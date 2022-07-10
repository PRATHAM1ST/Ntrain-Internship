import '../CSS/creators.css'
import femaleCharacter from './IMAGES/female-character.png';
import maleCharacter from './IMAGES/male-character.png';
import { useEffect, useState } from 'react';

export default function Creators(){

    const [creatorData, setCreatorData] = useState([]);
    const [creatorLimit, setCreatorLimit] = useState();
    const [allCreatorsLoaded, setAllCreatorLoaded] = useState(false);
    const googleSheet = process.env.REACT_APP_CREATORS_KEY;

    useEffect(()=>{
        fetch(googleSheet)
        .then(res=>res.text())
        .then(rep=>{
            const dataArray = JSON.parse(rep.substr(47).slice(0, -2)).table.rows
            dataArray.shift()
            var creatorsArrayFetch = []
            dataArray.forEach(element => {
                creatorsArrayFetch.push({
                    channelName: element.c[0].v, 
                    youtubeThumbnail: 'https://img.youtube.com/vi/'+ element.c[1].v.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop() + '/0.jpg' , 
                    channelLink: element.c[2].v
                })
            });
            setCreatorData(creatorsArrayFetch);
            var limit = 8 < creatorsArrayFetch.length ? 8 : creatorsArrayFetch.length;
            setCreatorLimit(limit);
            setAllCreatorLoaded(limit === creatorsArrayFetch.length);
        })
    }, [googleSheet])

    const handleCreator = ()=>{
        document.getElementById('Purpose').value = "creator";
    }

    const handleVieAll = (e)=>{
        setCreatorLimit(creatorData.length)
        console.log(e)
        e.target.style.display = "none"
    }

    return(
        <div className="section" id="creators">
            <h1 className="orbitron">creators</h1>
            <img className="creator-props female-character" src={femaleCharacter} alt='' />
            <img className="creator-props male-character" src={maleCharacter} alt='' />
            <div className="creators-container">
                {
                    creatorData.length !== 0 && creatorData.slice(0, creatorLimit).map(element=>{
                        return(
                            <a className="creator" key={"creator-" + creatorData.indexOf(element)} href={element.channelLink} target="_blank" rel="noopener noreferrer">
                                <div className="creator-channel-name h3">{element.channelName}</div>
                                <div className="creator-image">
                                    <img src={element.youtubeThumbnail} alt={element.channelName} title={element.channelName} />
                                </div>
                            </a>
                        )
                    })
                }
                
            </div>
            <div className="creators-miscellaneous-links">
                {!allCreatorsLoaded && <button className="h2 bold" onClick={e => handleVieAll(e)}>VIEW&nbsp;ALL</button>}
                <a onClick={handleCreator} className= "bold h2 underline" href='#contact'>JOIN&nbsp;US</a>
            </div>
        </div>
    )
}