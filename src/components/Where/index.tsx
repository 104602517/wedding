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
      <h2 className='guest'>親愛的貴賓：</h2>
      <br/>
      <p>
        您會看到此頁面，代表您應該報名了黃皓正與梁若珩的婚禮，我們誠摯地感謝您百忙撥空前來我們的婚禮。
        我們的婚禮晚宴將在11/18於翡麗詩莊園舉行。
      <p/>
      <p>
        此網站提供貴賓能夠更方便查詢婚禮資訊。若是您在此網站查詢不到自己的名字請儘速聯絡我們喔，謝謝♡´･ᴗ･`♡
      </p><br/><br/>
      <p>
        <h2>婚禮地點</h2>
        <h3>翡麗詩莊園</h3> {/* （可複製的地址） */}
        <div className='link'><a href='https://www.felicite-wed.com/tw/traffic'>➱詳細交通資訊請點擊</a></div>
      </p>
      <p>
        翡麗詩莊園內部並沒有太多的停車位，不過周遭有許多的收費停車場， 另外也有許多車站位在附近，詳細的交通資訊，煩請您點擊以上連結查閱！
      </p>
      <br/>
      <br/>
      <p>
        <h2>下午證婚儀式</h2>
        <h3>翡麗詩森林教堂</h3>
      </p>
      <p>⚠️注意：</p>
      <p>
        1.因證婚教堂人數限制嚴格，現場會先以新人的家人優先入場，其次開放有事先報名參加證婚儀式並回覆E-Mail的賓客，若是教堂人數已滿，則會安排剩下的貴賓移至晚宴場地觀看證婚的即時直播。<br/>
      </p>
      <p>  
        2.莊園人員將在15:45開放貴賓們入席，16:00準時關閉觀禮大門，屆時將不開放入場喔。
      </p><br/>
      <p>
        <h2>晚宴</h2>
        <h3>翡麗詩光譜廳</h3>
      </p>
      <p>
        17:30-18:00入場
        （實際開席時間會由工作人員視當天的到場狀況而定）
      </p>
      1.參加晚宴的貴賓記得向收禮桌工作人員出示喜帖並且告訴工作人員您的大名，現場會有大桌圖和此網站的QR code供查閱自己的座位，若需要帶位的貴賓可以主動詢問帶位人員。
      </p>
      <p>
        2.簽到方式除了在簽到本上簽名之外，我們也準備了一本婚禮相簿，邀請大家把當天帥氣和美麗的自己貼在上面，現場會有兩位拿著拍立得的工作人員幫貴賓們拍照。
      </p>
    </div>
  </>
  
)

export default WhereIndex