import { useEffect, useRef } from "react"

const AboutUsIndex: React.FC  = ()=> {
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const introRef = useRef<any>(null)

  // useEffect(async () => {
  //   const offHeight = introRef.current.offsetHeight;

  //   await new Promise(res => )
    
  //   const element = document.getElementsByClassName('intro')[0];
  //   const lineHeight = document?.defaultView?.getComputedStyle(element, null).getPropertyValue("lineHeight");
  //   console.log(offHeight,lineHeight, element.getClientRects().length)
  // }, [introRef])

  return (
    <div className="about-us">
      <div className="groom">
        <span className="avatar"></span>
        <p className="intro" ref={introRef}>個性孤僻，喜好人煙稀少的環境，除了健身房以外，不願意出現在任何人口稠密區。一天的行程固定是起床看股票寫程式吃飯運動睡覺 (通常只有吃飯跟運動不是躺著)，如果前一天晚上沒有把眼鏡放好，會增加十分鐘的眼鏡摸索行程。最喜歡的休閒活動是霸凌小狗(特別是黑狗)，如果時間允許，一週會安排擼一次狗。胸無大志而且懶惰，卻有無可救藥的天真理想，期望有一天能完全放下鍵盤，遠離一切世俗紛爭，成為都會隱士。目前為一名全遠端的軟體工程師，生活一成不變地美好，為此網站的編程/架設者。</p>
      </div>
      <div className="bride">
        <span className="avatar"></span>
        <p className="intro">普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗普通的狗</p>
      </div>
  </div>
  )
}

export default AboutUsIndex