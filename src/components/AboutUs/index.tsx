import Lottie from 'react-lottie-player';
import * as jumpRabbit from '../../assets/animation_1699266398325.json'
import { createPortal } from 'react-dom';
import { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../context';
import { useLocation } from 'react-router-dom';

const AboutUsIndex: React.FC  = ()=> {
  
  // useEffect(() => {
  //     const offHeight = introRef.current.offsetHeight;
  //     const element = document.getElementsByClassName('intro')[0];
  //     const lineHeight = document?.defaultView?.getComputedStyle(element, null).getPropertyValue("line-height");
  //     const padding = document?.defaultView?.getComputedStyle(element, null).getPropertyValue("padding-top");

  //     // 總行數 = (總高度 - 總padding) / lineHeight
  //     const lineIndexs = (offHeight - parseFloat(padding as string) * 2) / parseFloat(lineHeight as string)

  //     // 一行有幾個字 = 文字總長 / 總行數 再向上取整
  //     const allText: string = introRef.current.innerText
  //     const allTextLong = allText.length
  //     const numberInLine = Math.ceil(allTextLong / lineIndexs)
  //     const linesToCut = 5
  //     const wordsToCut = linesToCut * numberInLine

  //     console.log(numberInLine)
  //     let newString = allText
  //     const indexToInset = []
  //     for (let i = 0; i < wordsToCut; i++) {
  //       if (i > 0 && i % (numberInLine - 1) === 0) {
  //         console.log(allText[i])
  //         indexToInset.push(i)
  //         newString = newString.slice(0, i + 32 *( (i / (numberInLine - 1)) - 1)) + `<div class='words-pads-${Math.floor(i / (numberInLine - 1))}'></div>` + newString.slice(i + 32 * ( (i / (numberInLine - 1)) - 1))
  //         console.log(newString)
  //         element.innerHTML = newString
  //       }
  //     }
  // }, [introRef])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const location = useLocation()
  useEffect(() => {
    if (location.pathname !== '/about-us' && (document.querySelector('jump-rabbit') !== undefined)) {
      setIsRabbitFade(true)
    }
  }, [location])
  const [isRabbitFade, setIsRabbitFade] = useState(false)
  const { mainRef } = useContext(StoreContext)

  return (
    <div className="about-us">
      {document.querySelector('main') && createPortal(
        <Lottie
        rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
        className={`jump-rabbit ${isRabbitFade ? 'jump-rabbit-fade' : null}`}
        loop
        play
        speed={1}
        segments={[1, 125]}
        animationData={jumpRabbit}/>,
        mainRef.current
      )}
      <div className="groom">
        <span className="avatar"></span>
        <p className="intro">個性孤僻，喜好人煙稀少的環境，除了健身房以外，不願意出現在任何人口稠密區。一天的行程固定是起床看股票寫程式吃飯運動睡覺 (通常只有吃飯跟運動不是躺著)，如果前一天晚上沒有把眼鏡放好，會增加十分鐘的眼鏡摸索行程。最喜歡的休閒活動是霸凌小狗(特別是黑狗)，如果時間允許，一週會安排擼一次狗。胸無大志而且懶惰，卻有無可救藥的天真理想，期望有一天能完全放下鍵盤，遠離一切世俗紛爭，成為都會隱士。目前為一名全遠端的軟體工程師，生活一成不變地美好，為此網站的編程/架設者。</p>
      </div>
      <div className="bride">
        <span className="avatar"></span>
        <p className="intro">普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗</p>
      </div>
  </div>
  )
}

export default AboutUsIndex
