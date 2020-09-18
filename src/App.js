import React from 'react';
import './App.css';
import ProfileComponent from './Profile/ProfileComponent'


function App() {
  const FullName = "Rihem Kacem";
  const bio = "";
  const Profession = "Etudiante"
  return (
    <div className="App">
      <ProfileComponent FullName={FullName} bio={bio} profession={Profession}  />
    </div>
  );
}

export default App;
