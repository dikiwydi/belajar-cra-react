import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Profil from './pages/profile';
import BlogDetail from './pages/blogDetail';

function App() {
return (
    <div >
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/profil'>profil</Link>
          </li>
          <li>
            <Link to='/contact'>contact</Link>
          </li>
          <li>
            <Link to='/blog'>blog</Link>
          </li>
        </ul>
      </nav>
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='profil' element={<Profil/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='blog' element={<Blog />} />
        <Route path='blog/:id' element={<BlogDetail />} />
     </Routes>
    </div>
  );
}

export default App;
