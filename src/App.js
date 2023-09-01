import logo from './logo.svg';
import NavigationBar from './components/Navigationbar';
import './App.css';
import AboutApp from './components/AboutApp';
import AboutMe from './components/AboutMe';
import MyImage from './components/MyImage';
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>
    <div className="App">
        <NavigationBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<AboutApp/>}/>
            <Route path="AboutMe" element={<AboutMe/>}/>
            <Route path="MyImage" element={<MyImage/>}/>
          </Routes>
        </div>
    </div>
    </>
  );
}

export default App;
