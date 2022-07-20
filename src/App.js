import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Navbar from './components/Navbar/Navbar';
import NewPost from './components/NewPost/NewPost';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path='/'  element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/new-post' element={<NewPost></NewPost>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>

      </Routes>
    </div>
  );
}

export default App;
