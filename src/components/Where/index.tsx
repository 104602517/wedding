import Lottie from 'react-lottie-player';
import * as car from '../../assets/animation1699271155566.json'

const WhereIndex:React.FC = () => (
  <>
   <Lottie
      rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
      className='background-car'
      loop
      play
      speed={0.4}
      animationData={car}/>
    <div className="where">
      <h2>您會看到此頁面，代表您應該報名了黃皓正與梁若珩的婚禮，</h2>
      <p>
        非常高興能夠邀請您來參加，我們的婚禮晚宴將在11/18號於翡麗詩莊園舉行，
        翡麗詩莊園本身並沒有太多的停車位，不過周遭的收費停車場不少，
        另外也有許多車站位在附近，詳細的交通資訊，煩請您點擊以下連結查閱！
      </p>
      <div className='link'><a href='https://www.felicite-wed.com/tw/traffic'>交通資訊</a></div>
    </div>
  </>
  
)

export default WhereIndex