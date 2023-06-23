import '../assets/css/work.css'

export default function Work() {
    return ( 
    <>
    <div className="work-div" id="work">
        <h3>MY WORK</h3>
        <div>
            <a href="https://thekraziestkatlady.com"><img className="work-img" src={require('../assets/images/kkl_logo.png')} alt="kkl"/></a>
            <h5><em><a href="https://thekraziestkatlady.com">thekraziestkatlady.com</a><p> (A NJ Non-profit Cat Rescue)</p></em></h5>
        </div>
        <br/>
        <div>
            <a href="https://mrflesher.com"><img className="work-img" src={require('../assets/images/blue_honu.png')} alt="honu"/></a>
            <h5><em><a href="https://mrflesher.com">mrflesher.com</a> <p>(this site)</p></em></h5>
        </div>      
        <br/>     
        <div>
            <a href="http://actunaclub.com"><img className="work-img" src={require('../assets/images/tc_logo.png')} alt="tuna club"/></a>
            <h5><em><a href="http://actunaclub.com">actunaclub.com</a>
            <p>(An informational site about our former short term rental property)</p>
            </em></h5>
        </div>
    </div>
    </>
    );
}