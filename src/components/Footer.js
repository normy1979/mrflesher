export default function Footer() {
    return ( 
    <>
    <div className="social-media-div">
        <a href="https://github.com/normy1979" target="_blank" rel="noreferrer"><img className="link-img" src={require('../assets/images/github.png')} alt="github"/></a>
        <a href="http://actunaclub.com" target="_blank" rel="noreferrer"><img className="link-img" src={require('../assets/images/email.png')} alt="email"/></a>
        <a href="https://www.linkedin.com/in/matthew-flesher-277a8542/" target="_blank" rel="noreferrer"><img className="link-img" src={require('../assets/images/linkedin.png')} alt="linkedin"/></a>
    </div>
    </>
    );
}