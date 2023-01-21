import './App.css'
import MainDash from './Pages/MainDash/MainDash';
import Sidebar from './components/Sidebar';
import { Route ,
  Routes } from 'react-router-dom';
import Form from './Pages/Form/Form';
import Diabetes from './Pages/Diabetes/Diabetes';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
function App() {
  return (
    <div className="App">


      <div className="AppGlass">
      <Sidebar/>
      <Routes>
     <Route path='/dashboard' element={ <MainDash />}  exact/>
     <Route path='/form' element={ <Form />}  exact/>
     <Route path='/diabetes' element={ <Diabetes />}  exact/>
     <Route path='/login' element={ <Login />}  exact/>
     <Route path='/' element={ <Signup />}  exact/>

     </Routes>
      </div>
    </div>
  );
}

export default App;
