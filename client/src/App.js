import logo from './jpg1.jpg';
import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import About from './components/About';
import Home from './components/Home';
import Navigation from './components/Navigation';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Container, AppBar, Toolbar } from '@material-ui/core';
import Cardss from './components/Cardss';
import Contact from './components/Contact';
import { Payment } from '@mui/icons-material';


function App() {
  return(
    <div className="App">
        <div className="App-body">
          <Container>
            <Navigation />
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Login />} />

                <Route path='/reg' element={<Registration />} />
                <Route path='/abo' element={<About />} />
                <Route path='/hom' element={<Home />} />
                <Route path='/boo' element={<Cardss />} />
                <Route path='/con' element={<Contact />} />
                <Route path='/con' element={<Payment />} />
              </Routes>
            </BrowserRouter>
          </Container>
        </div>
      
    </div>
  );
}

export default App;
