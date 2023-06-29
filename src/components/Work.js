import '../assets/css/work.css'
import Link from './html-utils/link/Link'

export default function Work() {

    return ( 
    <>
    <div className="work-div" id="work">
        <h3>MY WORK</h3>
        <br/>
        <div>
            <Link page="https://thekraziestkatlady.com"><img className="work-img" src={require('../assets/images/kkl_logo.png')} alt="kkl"/></Link>
            <h5><em>
                <Link page="https://thekraziestkatlady.com">thekraziestkatlady</Link>
                <p>A NJ Non-profit Cat Rescue </p>
                <p>***</p>
                <p>Angular | AWS - S3, Lambda, DynamoDB, IAM | NodeJS | Karma | Jasmine | HTML | CSS | JavaScript | Gitlab - Issue tracking, Git Version Control, CI/CD</p>
            </em></h5>
        </div>
        <br/>
        <br/>
        <div>
            <a href="https://mrflesher.com"><img className="work-img" src={require('../assets/images/blue_honu.png')} alt="honu"/></a>
            <h5><em>
                <a href="https://mrflesher.com">mrflesher.com</a> 
                <p>(this site)</p>
                <p>***</p>
                <p>ReactJS | Google Cloud Platform (GCP) - Bucket Storage, IAM | AWS - Lambda, IAM | NodeJS | Jest | HTML | CSS | GitHub - Issue tracking, Git Version Control, Github Actions</p>
            </em></h5>
        </div>      
        <br/>     
        <div>
            <Link page="http://actunaclub.com"><img className="work-img" src={require('../assets/images/tc_logo.png')} alt="tuna club"/></Link>
            <h5><em>
                <Link page="http://actunaclub.com">actunaclub.com</Link>
                <p>(An informational site about the history of the property we live on)</p>
                <p>***</p>
                <p>Angular | AWS - S3 | HTML | CSS | JavaScript | Gitlab - Issue tracking, Git Version Control, CI/CD</p>
            </em></h5>
        </div>
        <br/>
        <br/>
        <div>
            <h3>Other</h3>
            <p><Link page="https://www.cloudskillsboost.google/public_profiles/335adb2a-f6be-4cb8-9046-d8002cdd8952">Google Cloudskills</Link></p>
            <p><Link page="https://profile.codersrank.io/user/normy1979/">CodersRank</Link></p>
        </div>
        <br/>
        <br/>
    </div>
    </>
    );
}