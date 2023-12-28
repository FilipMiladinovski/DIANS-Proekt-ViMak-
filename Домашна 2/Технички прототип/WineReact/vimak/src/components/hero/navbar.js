import React, { useState } from 'react';
import './Hero.css';
import Logo from './Logo.js';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import logout from '../AuthService.js';
import {useNavigate} from 'react-router-dom'


const LOGIN_URL="http://localhost:8090/api/auth/signin"

export default function Navbar() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()


  const handleLoginSubmit = async (e) => {
      e.preventDefault()
      

      try {
          const response = await axios.post(
              LOGIN_URL,
              JSON.stringify({username, password}),
              {
                  headers: {
                      'Content-Type': 'application/json',
                      withCredentials: true,
                  },
              }
          )

          const accessToken = response.data.accessToken
          sessionStorage.setItem('token', accessToken)
          sessionStorage.setItem('username', response.data.userName)
          if (response.status === 200) {
              navigate('/')
              console.log("ok")
          }
      } catch (error) {
          console.log('Invalid credentials')
      }
    }
  // Assume isLoggedIn is a state variable that tracks the login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle logout
  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);
  };

  return (
    <div className='navBar'>
      <div className='Logo'>
        <Link to='/'>
          <Logo />
        </Link>
      </div>
      <div className='buttons'>
        {/* Conditional rendering based on the login status */}
        {isLoggedIn ? (
          <>
            {/* Render links for logged-in users */}
            <Link to='/profile'>Профил</Link>
            <Link to='/orders'>Нарачки</Link>
            <button onClick={handleLogout}>Одјави се</button>
          </>
        ) : (
          <>
            {/* Render links for non-logged-in users */}
            <Link to='/login'>Најава</Link>
            <Link to='/register'>Нов Корисник</Link>
          </>
        )}
        {/* Common links for both cases */}
        <Link to='/wines'>Вина</Link>
        <a id='clic' href='https://www.youtube.com/'>
          <FontAwesomeIcon icon={faCartShopping} />
        </a>
      </div>
    </div>
  );
}





// import './Hero.css';
// import Logo from './Logo.js'
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

// import logout from '../AuthService.js'

// export default function Navbar() {
//     return (
//     <div className='navBar'>
//         <div className='Logo'>
//             <Link to="/"><Logo/></Link>
//         </div>
//         <div className='buttons'>
//           <Link to="/login">Најава</Link>
//           <Link to="/register">Нов Корисник</Link>
//           <Link to="/wines">Вина</Link>
//           <a id="clic" href="https://www.youtube.com/"><FontAwesomeIcon icon={faCartShopping}/></a>
//         </div>
        
//       </div>
//     )
//     }

