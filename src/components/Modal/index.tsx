import { StoreContext } from "../../context/index"
import { useContext } from "react"
import Lottie from 'react-lottie-player';
import * as fatRabbit from '../../assets/animation_lo18ehwf.json'
import Table from '../../assets/Table.jpg'

const Modal:React.FC = () => {
  const store = useContext(StoreContext)
  const { setIsShowModal, currentPerson, isPicture, setIsPicture } = store
  const closeModal = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if(ev.target instanceof Element && ev.target.className === 'modal-layer') {
      setIsShowModal(false)
      setIsPicture(false)
    }
  }

  return (
    <div className="modal-layer" onClick={closeModal}>
      <Lottie 
        rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
        className='fat-rabbit'
        loop
        play
        animationData={fatRabbit}/>
      {
        isPicture && <img className="big-table" src={Table}/>
      }
      {
        !isPicture &&
        currentPerson.name &&
        currentPerson.name.length &&
        <div className="content-box">
          <p className="name">親愛的{currentPerson.name}您好</p>
          <p className="seet-at">您的座位位於</p>
          <p className="seat" style={{fontFamily: 'fantasy'}}>{currentPerson.table}</p>
          { !!currentPerson.plusOne && <p className="plus-one">您預計會攜帶 {currentPerson.plusOne} 位貴賓</p> }
          { !currentPerson.plusOne && <p className="plus-one">您<span style={{color: 'red'}}>未</span>有攜帶貴賓</p> }
          { currentPerson.isWedding && <p className="time">將於 15:45 參加證婚</p>}
          <p className="time">於 17:30 參加晚宴</p>
          <p className="invite">期待您的到來！</p>
        </div>
      }
      {
        !isPicture &&
        (!currentPerson.name ||
        !currentPerson.name.length) &&
        <div className="content-box">
          <p className="seet-at">親愛的貴賓您好</p>
          <p className="seet-at">看來工作兔打錯了您的姓名</p>
          <p className="seet-at">或著遺漏登記了！</p>
          <p className="seet-at">若您看到此訊息</p>
          <p className="seet-at">請立刻與我們聯絡，抱歉！</p>
        </div>
      }
      {!isPicture && <div className="modal-box">
        <div className="modal-small-box">
          <div className="left-ear"></div>
          <div className="right-ear"></div>
        </div>
      </div>}
    </div>
  )
}

export default Modal