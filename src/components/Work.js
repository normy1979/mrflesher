import '../assets/css/work.css'

export default function Work() {
    return ( 
    <>
    <div class="work-div" id="work">
        <h3>MY WEB APP WORK</h3>
        <div>
            <h5><em><a href="https://thekraziestkatlady.com">thekraziestkatlady.com</a> (A NJ Non-profit Cat Rescue)</em></h5>
            <img class="work-img" src={require('../assets/images/kkl_logo.png')} alt="kkl"/>
        </div>
        <div>
            <h5><em><a href="https://mrflesher.com">mrflesher.com</a> (this site)</em></h5>
            <img class="work-img" src={require('../assets/images/blue_honu.png')} alt="honu"/>
        </div>           
        <div>
            <h5><em><a href="http://actunaclub.com">actunaclub.com</a> (An informational site for our former AirBnB)</em></h5>
            <img class="work-img" src={require('../assets/images/tc_logo.png')} alt="tuna club"/>
        </div>
    </div>
    </>
    );
}