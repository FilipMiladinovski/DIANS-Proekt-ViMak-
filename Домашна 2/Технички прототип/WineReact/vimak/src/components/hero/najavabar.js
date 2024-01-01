import './Hero.css';
import Logo from './Logo.js'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../authentication/AuthContext';

export default function Najavabar() {
  const { logout } = useAuth();

  const handleLogout = () => {
      logout();
  }
    return (
    <div className='navBar'>
        <div className='Logo'>
            <Link to=""><Logo/></Link>
        </div>
        <div className='buttons'>
          <Link to="/wines">Вина</Link>
          <Link to="/wineries">Винарии</Link>
          <a onClick={handleLogout}>Одјава</a>
          <a id="clic" href="https://www.youtube.com/"><FontAwesomeIcon icon={faCartShopping}/></a>
        </div>
        
      </div>
    )
}

