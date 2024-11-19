// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import TemplateComponent from './templateComponent';
// import Profile from './components/Profile';
// // import Profilee from './Profilee';
 
// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<TemplateComponent />} />
//         <Route path="/profile" element={<Profile />} />
//       </Routes>
//     </Router>
//   );
// }
 
// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormComponent from "./components/FormComponent";
import Profile from "./components/Profile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormComponent />} />
        <Route path="/display" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
