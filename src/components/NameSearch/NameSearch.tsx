import { useContext, useState } from 'react'
import { StoreContext } from '../../context/index'

const NameSearch: React.FC = () => {

  const { setIsShowModal, searchPerson, setCurrentPerson, searchTable, setCurrentTable } = useContext(StoreContext)
  const [name, setName] = useState('')

  const onSearch = () => {
    if (!name.length) return
    if (name === '黃皓正' || name === '梁若珩') {
      alert('喂～ 請不要冒用新郎/新娘的身份啊！')
      return
    }
    const currentPerson = searchPerson(name)
    const currentTable = searchTable(name)
    if (currentPerson) {
      setCurrentPerson(currentPerson)
      setCurrentTable(currentTable)
    } else {
      setCurrentPerson('')
      setCurrentTable('')
    }
    setIsShowModal(true)
  }

  return (
    <>
      <div className="name-search-box">
        <span className="where-i-seet"></span>
        <input 
          type="text"
          className="name-search-input" 
          placeholder="請輸入您的尊姓大名"
          onChange={ev => setName(ev.target.value)}
          />
        <div className="name-search-btn" onClick={onSearch}></div>
      </div>
    </>
  )
}

export default NameSearch