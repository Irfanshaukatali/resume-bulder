import logo from './logo.svg';
import './App.css';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import {BrowserRouter as Router, Routes, Route}from 'react-router-dom';
import Signup from './Pages/Signup';
import Header from './Components/subComponents/Header';
import Login from './Pages/Login';
import { Aboutus } from './Pages/Aboutus';
import Getstarted from './Pages/Getstarted';
import WorkExperience from './Pages/WorkExperience';
import Experience from './Pages/Experience';
import ExperienceDescription from './Pages/ExperienceDescription';
import Contactus from './Pages/Contactus';
import ManageWorkExp from './Pages/ManageWorkExp';
import EducationDescription from './Pages/EducationDescription';
import Education from './Pages/Education';
import SkillsDescription from './Pages/SkillsDescription';
import Skills from './Pages/Skills';
import Summary from './Pages/Summary';
import Finalize from './Pages/Finalize';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contact" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/getStarted' element={<Getstarted/>}/>
        <Route path='/workexperience' element={<WorkExperience/>}/>
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/experience-description' element={<ExperienceDescription/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
        <Route path='/manage-work-experience' element={<ManageWorkExp/>}/>
        <Route path='/educaiton-description' element={<EducationDescription/>}/>
        <Route path='education' element={<Education/>}/>
        <Route path='/skills-description' element={<SkillsDescription/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/summary' element={<Summary/>}/>
        <Route path='/finalize' element={<Finalize/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}


export default App;