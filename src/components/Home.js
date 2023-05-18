import '../assets/css/home.css'
import Navbar from './Navbar'
import About from './About'
import Work from './Work'

export default function Home() {
    return ( 
    <>
    <div class="parallax">
        {/* <img id="ease" class="overlay move" src={require('../assets/images/honu.png')} alt="honu"/> */}
        <Navbar/>
        <div class="bg-div">
            <h3 class="bg-text">Hi, I'm Matthew.</h3>
            <p class="bg-text">I'm a software developer for the Federal Aviation Administration in Atlantic City, NJ.  I specialize in test automation by day and web application development by night.  I enjoy learning, improving my skills, and figuring things out.</p>
        </div>
    </div>

    <About/>
    <Work/>
    
    </>
    );
}