import { useContext } from "react"
import { StoreContext } from "../../context"

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
        <img onClick={showPic} className="table-pic" src="/src/assets/Table.jpg"/>
      </div>
    </>
  )
  
}

export default Tables