import  './Online.css'
import OnlineImg from '../../assets/images/profile.png'


export default function Online() {
  return (
    <>
    <div className='chatOnline'>
        <div className="chatOnlineFriend">
            <div className="chatOnlineImgContainer">
                
                <img className='chatOnlineImg' src={OnlineImg} alt="chatOnlineImg" />
                <div className="chatOnlineBadge"></div>
            </div>
            <span className="chatOnlineName">yehiaaa</span>
        </div>
    </div>
    </>
  )
}
