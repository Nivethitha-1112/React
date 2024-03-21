import profilePic from './assets/Profile.jpg'

function Card(){
   return(
    <div className="card">
        <img src={profilePic} alt="profile picture"></img>
        <h2>Crochet By Nivi</h2>
        <p>I made Youtube videos and play video games</p>
    </div>
   );
}

export default Card