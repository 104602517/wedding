import { Link } from "react-router-dom"

const Nav: React.FC = () => (
  <>
    <nav>
      <ul className="nav">
        <li className="nav-1"><Link to={'/'}></Link></li>
        <li className="nav-2"><Link to={'/about-us'}></Link></li>
        <li className="nav-3"><Link to={'/where'}></Link></li>
      </ul>
    </nav>
  </>
)

export default Nav