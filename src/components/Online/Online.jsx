import  './Online.css'
import OnlineImg from '../../assets/images/profile.png'


export default function Online() {
  return (
    <>
    <div className='chatOnline'>
    <h6>ONLINE USERS</h6>

        <div className="chatOnlineFriend">

            <div className="chatOnlineImgContainer">
                <img className='chatOnlineImg' src={OnlineImg} alt="chatOnlineImg" />
                <div className="chatOnlineBadge"></div>
            </div>
            <span className="chatOnlineName">Yehia Ashraf</span>
        </div>
    </div>
    </>
  )
}
