/** 
 * 
 * Handles Routes to the landing pages
 * 
 * @author Cristian Mitoi
 */

import { Routes, Route } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import './App.css';
import Footer from "./components/Footer";
import HomePage from './components/HomePage';
import Conferences from "./components/Conferences";
import NavBar from "./components/NavBar";
import AdminPage from "./components/AdminPage";
import AboutPage from "./components/AboutPage";
import Documentation from "./components/Documentation";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const handleAuthenticated = (isAuthenticated) => { setAuthenticated(isAuthenticated) }
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [update, setUpdated] = useState(0);
  const handleUpdate = () => { setUpdated(update + 1) }
  
  useEffect( () => {
    fetch("http://unn-w20010102.newnumyspace.co.uk/kf6012/assessment/api/papers")
    .then(
        (response) => response.json()
    )
    .then(
        (json) => {
            setPapers(json.data)
            setLoading(false)
            console.log(json.data)
        }
    )
    .catch(
        (e) => {
            console.log(e.message)
        }
    )
},[update]);

  return (
    <div className="App">
      <NavBar />
 <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/documentation" element={<Documentation />}/>
        <Route path="/Interactivity" element={<Conferences track="?track=Interactivity" conference="Interactivity"/>}/>
        <Route path="/fullpapers" element={<Conferences track="?track=fullpapers" conference="Fullpapers"/>}/>
        <Route path="/wip" element={<Conferences track="?track=wip" conference="Wip"/>}/>
        <Route path="/competition" element={<Conferences track="?track=competition" conference="Competition"/>}/>
        <Route path="/doctoral" element={<Conferences track="?track=doctoral" conference="Doctoral"/>}/>
        <Route path="/rapid" element={<Conferences track="?track=rapid" conference="Rapid" />} />
        <Route path="/admin" element={<AdminPage papers={papers} authenticated={authenticated} handleAuthenticated={handleAuthenticated} handleUpdate={handleUpdate} />}/>
        <Route path="*" element={<p>404 Not found</p>}/>
 </Routes>
 <Footer />
      </div>
  );
}

export default App;