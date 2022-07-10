import { useEffect, useState } from 'react';
import '../CSS/events.css';

export default function Events(){
    const [online, setOnline] = useState(true);
    const [eventData, setEventData] = useState([]);
    const onlineGoogleSheet = process.env.REACT_APP_ONLINE_EVENT;
    const offlineGoogleSheet = process.env.REACT_APP_OFFLINE_EVENT;

    const fetching = (link) => {
        fetch(link)
        .then(res=>res.text())
        .then(rep=>{
            const dataArray = JSON.parse(rep.substr(47).slice(0, -2)).table.rows
            dataArray.shift()
            var eventArrayFetch = []
            dataArray.forEach(element => {
                eventArrayFetch.unshift({
                    title: element.c[0].v, 
                    youtubeThumbnail: 'https://img.youtube.com/vi/'+ element.c[1].v.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop() + '/0.jpg' , 
                    youtubeLink: element.c[1].v
                })
            });
            setEventData(eventArrayFetch)
        })
    }

    useEffect(()=>{
        if(online){
            document.querySelector('.toggle-circle').style.left = "0%";
            document.querySelector('.event-type > h1').innerHTML = "ONLINE";
            fetching(onlineGoogleSheet);
            
        }
        else{
            document.querySelector('.toggle-circle').style.left = "60%";
            document.querySelector('.event-type > h1').innerHTML = "OFFLINE";
            fetching(offlineGoogleSheet);
        }
    }, [online, offlineGoogleSheet, onlineGoogleSheet])
    

    return(
        <div className="section" id="events">
            <div className='events-header'>
                <h1 className="orbitron">
                    <div className='event-type'>
                        <h1 className='orbitron'>ONLINE</h1>
                    </div>
                    <div className="toggle-switch" onClick={() => setOnline(!online)}>
                        <div className="toggle-circle"></div>
                    </div>
                </h1>
            </div>



            {
                eventData.length !== 0 && <div className='events-container'>
                {
                    eventData.map(element=>{        
                        return <a href={element.youtubeLink} key={'event-' + eventData.indexOf(element)}>
                            <div className='event'>
                                <div className='event-image'>
                                    <img src={element.youtubeThumbnail} alt=''/>
                                </div>
                                <div className='event-title h3 bold'>
                                    {element.title}
                                </div>
                            </div>
                        </a>
                    })
                }
            </div>
            }
            { 
                !eventData.length && <div className='no-content'>
                    <h1>LOADING SOON...</h1>
                    <div className='youtube-link'>
                        <h3>
                            <a href='https://www.youtube.com/channel/UCmtkqGjc0xHTZbgGqHdpQeQ' className='underline'>
                                <i className="fa-brands fa-youtube"></i> Youtube
                        </a> TILL THEN CHECKOUT</h3>
                    </div>
                </div>
            }
        </div>
    )
}