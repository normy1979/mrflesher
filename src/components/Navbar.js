import ReactDOM from 'react-dom'
import '../assets/css/navbar.css'

export default function Navbar() {

    window.addEventListener('scroll', showtopnav);

    return ( 
    <>
    <div id="myTopnav" class="navbar" onScroll={showtopnav}>
        <button class="nav-btn" onClick={open}>&#9776;</button>
        <a href="#abt" onClick={close}>About</a>
        <a href="#work" onClick={close}>Work</a>
        <a href="{{#}}" onClick={close}>R&eacute;sum&eacute;</a>
        <a href="{{#}}" onClick={close}>Email</a>
    </div>
    <div id="mySidenav" class="sidenav">
        <a href="{{#}}" classname="closebtn" onClick={close}>&times;</a>
        <img class="profile-img" src={require('../assets/images/profile_image.jpeg')} alt="profile"/>
        <a href="#abt" onClick={close}>About</a>
        <a href="#work" onClick={close}>Work</a>
        <a href="{{#}}" onClick={close}>R&eacute;sum&eacute;</a>
        <a href="{{#}}" onClick={close}>Email</a>
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


