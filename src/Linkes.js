import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';

const signUserOut = () => {
  signOut(auth).then(()=> {
    window.location.pathname = '/';
  })
};

function Linkes ({user})  {

    return (
        <nav>
        <Link to="/"> Home </Link>

        {!user ? <Link to="/login"> Login </Link>
               : 
               (
              <>
                <Link to="/createpost"> Create Post </Link>
                <button  className='log-out'onClick={signUserOut}> Log Out </button>
              </>
            )
        }
      </nav>
    )
}

export default Linkes;