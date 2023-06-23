import '../assets/css/home.css'
import Navbar from './Navbar'
import About from './About'
import Work from './Work'
import Email from './Email'
import Footer from './Footer'

export default function Home() {
    return ( 
    <>
    <div className="parallax">
        {/* <img id="ease" className="overlay move" src={require('../assets/images/honu.png')} alt="honu"/> */}
        <Navbar/>
        <div className="bg-div">
            <h3 className="bg-text">Hi, I'm Matthew.</h3>
            <p className="bg-text">I'm a software engineer for the Federal Aviation Administration in Atlantic City, NJ.  I specialize in test automation by day and web application development by night.  I enjoy learning, improving my skills, and figuring things out.</p>
        </div>
    </div>

    <About/>
    <br></br>
    <Work/>
    <br></br>
    <Email/>
    <br></br>
    <Footer/>
    
    </>
    );
}