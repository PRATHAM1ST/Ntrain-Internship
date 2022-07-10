import '../CSS/home.css';
import hero from './IMAGES/hero.jpg'

export default function Home(){
    return(
    <div className='section' id='home'>
        <img className='img-hero' alt='hero-image' src={hero} />
        <div className='gradient-hero' />
        <div className='intro'>
            <h2 className='uppercase'>welcome</h2>
            <h1 className='orbitron'>NTRAIN&nbsp;GAMING</h1>
            <h2>Join us and add your amazing talent on our platform</h2>
        </div>
        <a href='#about' className='arrow'></a>
    </div>
    )
}