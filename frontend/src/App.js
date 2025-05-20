import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Edit from './pages/Edit';
import Homepage from './pages/Homepage';
import {Routes,Route} from 'react-router-dom'
import Post from './components/Layout/Post';
import Drafts from './pages/Drafts';
import Trash from './pages/Trash';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/'  element={<Homepage />}/>
          <Route path='/register'  element={<Register />}/>
          <Route path='/login'  element={<Login />}/>
          <Route path='/post' element={<Post />} />
          <Route path='/drafts' element={<Drafts />} />
          <Route path='/trash' element={<Trash />} />
          <Route path='/dashboard'  element={<Dashboard />}/>
          <Route path='/edit-blog'  element={<Edit />}/>
        </Routes>
    </div>
  );
}

export default App;
