import '../CSS/footer.css';
import logo from "./IMAGES/logo.png";

export default function Footer(){
    return(
        <div className='section footer' id='Menu'>
            <div className='footer-links'>
                <a className='footer-logo' href='#home' title='Home'>
                    <img src={logo} alt='NTRAIN GAMING'/>
                </a>
                <div className='footer-social'>
                    <h2 className='orbitron'>Social</h2>
                    <a href='https://www.youtube.com/channel/UCmtkqGjc0xHTZbgGqHdpQeQ/' target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-youtube"></i> Youtube
                    </a>
                    <a href='https://www.instagram.com/ntraingaming/' target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-instagram"></i> Instagram
                    </a>
                    <a href='https://www.facebook.com/Ntrain-102593739142319/' target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-facebook-square"></i> Facebook
                    </a>
                    <a href='mailto:care@ntrain.in'>
                        <i className="fa-solid fa-envelope"></i> Email
                    </a>
                </div>
                <div className='footer-nav'>
                    <h2 className='orbitron'>Links</h2>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#events">Events</a>
                    <a href="#creators">Creators</a>
                    <a href="#careers">Careers</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
            <div className='footer-extra-details'>
                <div className='copyright'>	&#169; Copyright 2022</div>
                <div className='country'>INDIA</div>
            </div>
        </div>
    )
}