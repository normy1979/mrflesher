import '../assets/css/about.css'
import Link from './html-utils/link/Link'

export default function About() {
    return ( 
    <>
    <div className="about-div" id="abt">
        <br/>
        <h3>ABOUT ME</h3>
        <p><em>I've been interested in technology for as long as I can remember.  I've always been curious about things I don't understand.  Back in 2012 I decided to go back to school to pursue a Computer Science degree.  Since then I've had the pleasure of making web applications for the FAA, as well as a non-profit cat rescue.  In 2016 my curiosity led me back to school again to get a Master's degree in Computer Engineering.</em></p>
        <p><em>Most of my professional work has been focused on automation.  I've automated CI/CD pipelines, requirements tracing, test procedures and reporting, test execution, and even some of my wifes tedious tasks at her job.  However, my true passion is learning and creating on the web.</em></p>
        <p><em>When I'm not on the computer, I enjoy hanging at the beach, playing backgammon, and reading.  As a child growing up in Hawaii I learned about the <Link page="https://en.wikipedia.org/wiki/Green_sea_turtle">honu</Link>, and have tried my best to follow it's infinite wisdom, that is to:</em></p>
        <dl>
            <dd>Spend more time at the beach.</dd>
            <dd>Travel at your own pace.</dd>
            <dd>Trust the flow.</dd>
            <dd>Keep moving forward.</dd>
        </dl>
        <br/>
    </div>
    </>
    );
}