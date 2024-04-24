import image from '../images/image.JPG'
import * as React from "react"
import '../styles/Home.css'
import AboutBtn from './buttons/AboutBtn'
const Home = () => {
    return ( 
        <div className='Home' id='home'>
        <img src={image} alt="" />
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <h1 className='text'>Welcome To my portfolio <br /> I'm Douik taha abdelkrim</h1>
        <h1 className="Text-animated"> FullStack Web Developer </h1>
        <AboutBtn/>
        </div>
        
        </div>
     );
}
 
export default Home;