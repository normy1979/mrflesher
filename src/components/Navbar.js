import ReactDOM from 'react-dom'
import '../assets/css/navbar.css'

export default function Navbar() {

    window.addEventListener('scroll', showtopnav);

    return ( 
    <>
    <div id="myTopnav" className="navbar" onScroll={showtopnav}>
        <button className="nav-btn" onClick={open}>&#9776;</button>
        <a href="#abt" onClick={close}>About</a>
        <a href="#work" onClick={close}>MyWork</a>
        {/* <a href="{{#}}" onClick={close}>R&eacute;sum&eacute;</a> */}
        <a href="#email_contact" onClick={close}>Contact</a>
    </div>
    <div id="mySidenav" className="sidenav">
        <a href="{{#}}" className="closebtn" onClick={close}>&times;</a>
        <img className="profile-img" src={require('../assets/images/profile_image.jpeg')} alt="profile"/>
        <a href="#abt" onClick={close}>About</a>
        <a href="#work" onClick={close}>MyWork</a>
        {/* <a href="{{#}}" onClick={close}>R&eacute;sum&eacute;</a> */}
        <a href="#email_contact" onClick={close}>Contact</a>
    </div>

{/* <h2>Animated Sidenav Example</h2>
<p>Click on the element below to open the side navigation menu.</p> */}
<button onClick={open}>&#9776; open</button>
    </>
    );
}

function open() {
    let element = document.getElementById('mySidenav')
    ReactDOM.findDOMNode(element).style.width = '250px'
}

function close() {
    let element = document.getElementById('mySidenav')
    ReactDOM.findDOMNode(element).style.width = '0px'
}

function showtopnav() {
    let element = document.getElementById('myTopnav')
    ReactDOM.findDOMNode(element).style.visibility = 'visible'
}


