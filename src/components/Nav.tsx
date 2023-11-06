import { Link } from "react-router-dom"
import { useState } from "react"

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav onClick={() => setIsOpen(!isOpen)} className={isOpen ? 'collapse-open' : 'collapse-hide'}>
        <ul className="nav">
          <div className="toggle">
            <div className="bar-1"></div>
            <div className="bar-2"></div>
            <div className="bar-3"></div>
          </div>
          <li className="nav-1"><Link to={'/'}></Link></li>
          <li className="nav-2"><Link to={'/about-us'}></Link></li>
          <li className="nav-3"><Link to={'/where'}></Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Nav