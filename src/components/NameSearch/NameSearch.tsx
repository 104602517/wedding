import { useContext, useState } from 'react'
import { StoreContext } from '../../context/index'

const NameSearch: React.FC = () => {

  const { setIsShowModal, searchPerson, setCurrentPerson } = useContext(StoreContext)
  const [name, setName] = useState('')

  const onSearch = () => {
    if (!name.length) return
    const current = searchPerson(name)
    if (current) {
      setCurrentPerson(current)
    } else {
      setCurrentPerson('')
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