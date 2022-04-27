import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home, Login, CreatePost } from './pages'

import { auth } from './firebase-config'
import { useAuthState } from 'react-firebase-hooks/auth';
import Linkes  from './Linkes'

function App() {
  const [user, setUser] = useAuthState(auth);

  return (
    <Router>

      <Linkes user={user}/>

      <Routes>
        <Route path="/" element={<Home isAuth={user}/>} />
        <Route path="/createpost" element={<CreatePost isAuth={user}/>} />
        <Route path="/login" element={<Login setIsAuth={setUser}/>} />
      </Routes>
    </Router>
  );
}

export default App;