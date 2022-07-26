import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Navbar from './components/Navbar/Navbar';
import NewPost from './components/NewPost/NewPost';
import AdminPanel from './components/AdminPanel/AdminPanel';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAdmin from './components/RequireAdmin/RequireAdmin';
import PostDetails from './components/PostDetails/PostDetails';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/post/:id' element={<PostDetails></PostDetails>}></Route>
        <Route path='/new-post' element={
          <RequireAuth>
            <NewPost></NewPost>
          </RequireAuth>
        }></Route>


        <Route path='admin-panel' element={
          <RequireAdmin>
            <AdminPanel></AdminPanel>
          </RequireAdmin>
        }>
        </Route>



        <Route path='/register' element={<Register></Register>}></Route>

      </Routes>
      <ToastContainer></ToastContainer>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
