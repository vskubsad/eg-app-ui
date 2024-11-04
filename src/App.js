import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SignIn from './components/signin/signin';
import SignUp from './components/signup/signup';
import Dashboard from './components/dashboard/dashboard';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact="true" path='/' element={<SignIn/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes> 
    </div>
    </Router>
  );
}

export default App;
