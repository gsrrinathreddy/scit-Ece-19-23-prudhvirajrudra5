import React from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import Hobbies from './pages/Hobbies';
import Experience from './pages/Experience';
import Qualification from './pages/Qualification';
import Skills from './pages/Skills';
import Contactme from './pages/Contactme';
import Project from './pages/Project';
import Workshop from './pages/Workshop/';

import { ContactEmergency } from '@mui/icons-material';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
       <Route path="AboutUs" element={<AboutUs/>}/>
       <Route path="Skills" element={<Skills/>}/>
       <Route path="Qualification" element={<Qualification/>}/>
       <Route path="Experience" element={<Experience/>}/>
       <Route path="Contactme" element={<Contactme/>}/>
       <Route path="Project" element={<Project/>}/>
       <Route path="Workshop" element={<Workshop/>}/>

       <Route path="Hobbies" element={<Hobbies/>}/>

      </Routes>
      
      </BrowserRouter>
     
      
      

      
    </div>
  );
}

export default App;
