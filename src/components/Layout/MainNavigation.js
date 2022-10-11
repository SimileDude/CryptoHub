import { Link } from 'react-router-dom'

function MainNavigation() {
  return (
    <header>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default MainNavigation
