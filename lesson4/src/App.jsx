import React from 'react';
import RegistrationForm from './components/index';
import './App.css';
const memberBenefits = [
  'Find something to watch on your subscribed streaming srvices',
  'Log the movies and TV shows you have watched',
  'Keep track of your favourite movies and TV shows and get recommentdations from them',
  'Build and  maintain a personal watchist',
  'Build custum mixed list (movies and TV',
  'Take part in movies and TV',
  'Contribute to, and improve the information in our  database',
];

function App() {
  return (
    <div>
      <RegistrationForm memberBenefits={memberBenefits} />
    </div>
  );
}

export default App;


