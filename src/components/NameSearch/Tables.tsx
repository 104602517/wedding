import { useContext } from "react"
import { StoreContext } from "../../context"
import Table from '../../assets/Table.jpg'

const Tables:React.FC = () => {
  const store = useContext(StoreContext)
  const { setIsShowModal, setIsPicture } = store

  const showPic = () => {
    setIsShowModal(true)
    setIsPicture(true)
  }

  return (
    <>
      <div className="tables">
        <div className="pointer"></div>
        <div className="pointer-text"></div>
        <img onClick={showPic} className="table-pic" src={Table}/>
      </div>
    </>
  )
  
}

export default Tables